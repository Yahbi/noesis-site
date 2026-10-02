const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { spawnSync } = require('node:child_process');

function metadata() { const context = { window: {} }; vm.runInNewContext(fs.readFileSync('route-meta.js', 'utf8'), context); return context.window.__NOESIS_META; }
function decode(text) { return text.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#x27;', "'").replaceAll('&lt;', '<').replaceAll('&gt;', '>'); }

test('all generated routes match canonical, social, description and sitemap metadata', () => {
  const records = Object.values(metadata()); assert.equal(records.length, 30);
  const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
  for (const meta of records) {
    const pathname = new URL(meta.url).pathname.slice(new URL(metadata().home.url).pathname.length);
    const html = fs.readFileSync((pathname || '') + 'index.html', 'utf8');
    assert.equal(decode(html.match(/<title>(.*?)<\/title>/s)[1]), meta.title);
    assert.equal(decode(html.match(/<meta name="description" content="(.*?)">/)[1]), meta.description);
    assert.equal(html.match(/<link rel="canonical" href="(.*?)">/)[1], meta.url);
    assert.equal(html.match(/<meta property="og:url" content="(.*?)">/)[1], meta.url);
    assert.ok(sitemap.includes(`<loc>${meta.url}</loc>`));
    assert.match(html, /route-meta\.js\?v=\d+/);
  }
  assert.match(metadata()['owners-rep'].image, /or-living\.jpg$/);
  assert.match(fs.readFileSync('404.html', 'utf8'), /noindex, follow/);
});

test('client navigation refreshes metadata and breadcrumbs in both directions', () => {
  const elements = new Map();
  const element = () => ({ attributes: {}, setAttribute(name, value) { this.attributes[name] = value; }, remove() { elements.delete('#route-breadcrumbs'); } });
  const document = { title: '', querySelector: key => { if (key.includes('application/ld+json')) return null; if (!elements.has(key)) elements.set(key, element()); return elements.get(key); }, getElementById: id => elements.get('#' + id), createElement: element, head: { appendChild: el => elements.set('#' + el.id, el) } };
  let code = fs.readFileSync('app.jsx', 'utf8'); code = code.slice(code.indexOf('function updateRouteMetadata('), code.indexOf('\nfunction App('));
  const context = { document, window: { __NOESIS_META: metadata() } }; vm.createContext(context); vm.runInContext(code, context);
  for (const route of ['inquiries', 'story:casa-mani', 'home']) {
    context.updateRouteMetadata(route); const meta = context.window.__NOESIS_META[route];
    assert.equal(document.title, meta.title);
    assert.equal(elements.get('link[rel="canonical"]').attributes.href, meta.url);
    assert.equal(elements.get('meta[property="og:url"]').attributes.content, meta.url);
    assert.equal(elements.get('meta[name="description"]').attributes.content, meta.description);
    if (meta.breadcrumbs) assert.equal(elements.get('#route-breadcrumbs').textContent, JSON.stringify(meta.breadcrumbs));
    else assert.equal(elements.has('#route-breadcrumbs'), false);
  }
});

test('custom-domain base paths derive from the URL and reject mismatches before build', () => {
  const run = (url, base = '') => spawnSync('python3', ['tools/site_config.py', url, base], { encoding: 'utf8' });
  assert.equal(run('https://www.noesisusa.com/').status, 0);
  assert.equal(run('https://yahbi.github.io/noesis-site/').status, 0);
  for (const [url, base] of [['https://www.noesisusa.com/', '/noesis-site/'], ['http://noesisusa.com/', ''], ['https://noesisusa.com/?x=1', ''], ['https://user:secret@noesisusa.com/', ''], ['https://noesisusa.com/../', '']]) assert.notEqual(run(url, base).status, 0);
});

test('invalid deployment configuration fails without rewriting artifacts', () => {
  const before = fs.readFileSync('bundle.js', 'utf8');
  const result = spawnSync('bash', ['build.sh'], { encoding: 'utf8', env: { ...process.env, SITE_URL: 'https://www.noesisusa.com/', BASE_PATH: '/noesis-site/' } });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /BASE_PATH must match/);
  assert.equal(fs.readFileSync('bundle.js', 'utf8'), before);
});
