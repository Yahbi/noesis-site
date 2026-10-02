const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const crypto = require('node:crypto');
const { spawnSync } = require('node:child_process');
const babel = require('@babel/core');

test('committed rebuild configuration follows preview or production metadata', () => {
  const code = `import sys,json; sys.path.insert(0,'tools'); from rebuild_committed import config_from_html; print(json.dumps(config_from_html(sys.argv[1])))`;
  for (const url of ['https://yahbi.github.io/noesis-site/', 'https://www.noesisusa.com/']) {
    const result = spawnSync('python3', ['-c', code, `<link rel="canonical" href="${url}"><script src="bundle.js?v=1790888401"></script>`], { encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    assert.deepEqual(JSON.parse(result.stdout), { SITE_URL: url, BASE_PATH: new URL(url).pathname, BUILD_V: '1790888401' });
  }
  const bad = spawnSync('python3', ['-c', code, '<link rel="canonical" href="http://example.test/"><script src="bundle.js?v=1"></script>'], { encoding: 'utf8' });
  assert.notEqual(bad.status, 0);
  const committed = spawnSync('python3', ['tools/rebuild_committed.py', '--print-config'], { encoding: 'utf8' });
  assert.equal(committed.status, 0, committed.stderr);
  assert.match(JSON.parse(committed.stdout).SITE_URL, /^https:\/\//);
});

test('critical assets stay within the reviewed transfer budget and retain valid SRI', () => {
  // Small headroom above the measured acceptance baseline; a larger addition
  // needs a deliberate review rather than quietly slowing every route.
  for (const [file, limit] of Object.entries({ 'bundle.js': 235000, 'motion.min.js': 11000, 'route-meta.js': 27000, 'site.css': 113000 })) {
    assert.ok(fs.statSync(file).size <= limit, `${file} exceeds its ${limit}-byte uncompressed budget`);
  }
  const html = fs.readFileSync('index.html', 'utf8');
  for (const match of html.matchAll(/<script[^>]*src="([^"]+)"[^>]*integrity="sha384-([^"]+)"/g)) {
    const digest = crypto.createHash('sha384').update(fs.readFileSync(match[1])).digest('base64');
    assert.equal(digest, match[2], `SRI mismatch for ${match[1]}`);
  }
  assert.doesNotMatch(html, /babel(?:\.min)?\.js/);
});

test('generated route shells, CSS assets, and social-card local images resolve', () => {
  const context = { window: {} }; vm.runInNewContext(fs.readFileSync('route-meta.js', 'utf8'), context);
  const records = Object.values(context.window.__NOESIS_META);
  const base = new URL(context.window.__NOESIS_META.home.url);
  const verify = value => {
    const url = new URL(value, base);
    if (url.origin !== base.origin || !url.pathname.startsWith(base.pathname)) return;
    const rel = decodeURIComponent(url.pathname.slice(base.pathname.length));
    const file = rel.endsWith('/') || !rel ? rel + 'index.html' : rel;
    assert.ok(fs.existsSync(file), `Missing local target: ${value}`);
  };
  for (const record of records) {
    verify(record.image);
    const html = fs.readFileSync(new URL(record.url).pathname.slice(base.pathname.length) + 'index.html', 'utf8');
    for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) verify(match[1]);
    assert.equal((html.match(/<link rel="canonical"/g) || []).length, 1);
    assert.equal((html.match(/name="description"/g) || []).length, 1);
  }
  for (const match of fs.readFileSync('site.css', 'utf8').matchAll(/url\(\s*(?:"([^"]*)"|'([^']*)'|([^\s)]*))\s*\)/g)) verify(match[1] || match[2] || match[3]);
});

test('subdivision story cards use their own images and the legacy redirect keeps the configured domain', () => {
  const context = { window: {} }; vm.runInNewContext(fs.readFileSync('route-meta.js', 'utf8'), context);
  const meta = context.window.__NOESIS_META;
  const source = fs.readFileSync('components/Placeholder.jsx', 'utf8');
  for (const key of ['casablanca', 'alexandria']) {
    const id = source.match(new RegExp(`${key}:\\s+"([^"]+)"`))[1];
    assert.ok(meta[`story:${key}-homes`].image.includes(id));
    assert.notEqual(meta[`story:${key}-homes`].image, meta.home.image);
  }
  const redirect = fs.readFileSync('owners-rep/index.html', 'utf8');
  assert.ok(redirect.includes(`content="0; url=${meta['owners-rep'].url}"`));
  assert.match(redirect, /noindex, follow/);
  assert.match(redirect, /location\.hash/);
});

test('mobile menu contains forward/reverse keyboard focus and restores background access', () => {
  const effects = [], refs = [], handlers = new Map();
  let stateIndex = 0, cleanup, focus;
  const control = label => ({ label, isConnected: true, getClientRects: () => [1], focus() { document.activeElement = this; focus = label; } });
  const first = control('home'), last = control('last social'), trigger = control('menu');
  const background = [{ inert: false }, { inert: true }];
  const header = { querySelectorAll: () => [first, last], contains: el => [first, last, trigger].includes(el) };
  const document = { activeElement: trigger, querySelectorAll: () => background, querySelector: () => first };
  const React = {
    createElement: (type, props, ...children) => ({ type, props, children }),
    useState: initial => [stateIndex++ === 0 ? true : initial, () => {}],
    useRef: initial => { const ref = { current: refs.length === 0 ? header : initial }; refs.push(ref); return ref; },
    useEffect: effect => effects.push(effect),
  };
  const code = babel.transformSync(fs.readFileSync('components/Shell.jsx', 'utf8'), { presets: ['@babel/preset-react'] }).code;
  const context = { React, document, window: { addEventListener: (name, fn) => handlers.set(name, fn), removeEventListener: name => handlers.delete(name) }, BASE: '/', pathFor: x => x, getComputedStyle: () => ({ visibility: 'visible' }), setInterval: () => 1, clearInterval() {} };
  vm.runInNewContext(code + '\nNav({active:"home",go(){}});', context);
  // Run the modal effect, leaving scroll-spy/layout effects to browser acceptance.
  const modal = effects.find(fn => fn.toString().includes('background.forEach'));
  assert.ok(modal);
  cleanup = modal(); assert.ok(background.every(el => el.inert));
  const key = handlers.get('keydown'); let prevented = false;
  document.activeElement = last; key({ key: 'Tab', shiftKey: false, preventDefault() { prevented = true; } });
  assert.equal(focus, 'home'); assert.ok(prevented);
  document.activeElement = first; key({ key: 'Tab', shiftKey: true, preventDefault() {} });
  assert.equal(focus, 'last social');
  cleanup(); assert.deepEqual(background.map(el => el.inert), [false, true]); assert.equal(focus, 'menu');
});
