const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const babel = require('@babel/core');

// Exercise event handlers and React state without network or external mail apps.
// Browser validation/focus/layout are also checked in the local preview.
function harness({ endpoint = '', fetch: request, clipboard, compiled = false, session = { current: {} }, intent = null } = {}) {
  const slots = [], timers = new Map();
  let cursor = 0, tree, focused, selected = false, posts = 0;
  const React = {
    createElement: (type, props, ...children) => ({ type, props: props || {}, children: children.flat(Infinity) }),
    useState(initial) {
      const index = cursor++;
      if (!(index in slots)) slots[index] = typeof initial === 'function' ? initial() : initial;
      return [slots[index], value => { slots[index] = typeof value === 'function' ? value(slots[index]) : value; }];
    },
    useRef(initial) { const index = cursor++; return slots[index] ||= { current: initial }; },
    useEffect(effect, deps) {
      const index = cursor++;
      if (!slots[index] || deps.some((value, i) => value !== slots[index][i])) { slots[index] = deps; effect(); }
    },
  };
  const walk = node => !node || typeof node !== 'object' ? [] : [node, ...node.children.flatMap(walk)];
  const text = node => node == null || node === false ? '' : typeof node !== 'object' ? String(node) : node.children.map(text).join(' ');
  const context = vm.createContext({
    React, ReactDOM: { createRoot: () => ({ render() {} }) },
    document: { querySelector: () => null, getElementById: () => ({ focus() { focused = 'name'; } }) },
    window: { location: { pathname: '/', search: '' } },
    navigator: { clipboard }, AbortController, console, BASE: "/", pathFor: value => value + "/",
    requestAnimationFrame: callback => callback(),
    setTimeout: callback => { const id = Symbol(); timers.set(id, callback); return id; },
    clearTimeout: id => timers.delete(id),
    FormData: class { constructor(form) { this.values = form.values; } get(key) { return this.values[key] || null; } },
    fetch: (...args) => { posts++; if (!request) throw Error('Unexpected network request'); return request(...args); },
  });
  let code = compiled ? fs.readFileSync('bundle.js', 'utf8') : babel.transformSync(fs.readFileSync('pages/Inquiries.jsx', 'utf8'), { presets: ['@babel/preset-react'] }).code;
  code = code.replace(/const INQ_ENDPOINT\s*=\s*""/, `const INQ_ENDPOINT=${JSON.stringify(endpoint)}`);
  vm.runInContext(code + '\nglobalThis.FormUnderTest = InquiryForm;', context);
  const render = () => {
    cursor = 0; tree = context.FormUnderTest({ intent, session, go: () => {} });
    for (const node of walk(tree)) {
      if (node.props.ref && typeof node.props.ref === 'object') node.props.ref.current = { focus() { focused = node.props.id; }, select() { selected = true; } };
    }
    return tree;
  };
  const byId = id => walk(render()).find(node => node.props.id === id);
  const button = label => walk(render()).find(node => node.type === 'button' && text(node).trim() === label);
  const fill = (id, value) => {
    const node = byId(id);
    node.props.onChange({ target: { name: node.props.name, type: node.props.type, value, checked: Boolean(value) } });
    render();
  };
  const submit = ({ valid = true, honeypot = '', draft = false } = {}) => {
    const form = render();
    const values = Object.fromEntries(walk(form).filter(node => node.props.name).map(node => [node.props.name, node.props.type === 'checkbox' ? (node.props.checked ? 'on' : '') : node.props.value || '']));
    values.company_website = honeypot;
    return form.props.onSubmit({ preventDefault() {}, currentTarget: { values, reportValidity: () => valid, elements: { namedItem: key => ({ focus() { focused = key; } }) } }, nativeEvent: { submitter: { value: draft ? 'draft' : '' } } });
  };
  const complete = () => { fill('f-name', 'Alex & Co'); fill('f-email', 'alex+preview@example.test'); fill('f-role', 'Other'); fill('f-msg', 'A site inquiry?\nBudget & timing.'); };
  render();
  return { session, render, byId, button, fill, submit, complete, text: () => text(render()), nodes: () => walk(render()), fireTimeout: () => [...timers.values()].forEach(callback => callback()), get posts() { return posts; }, get focused() { return focused; }, get selected() { return selected; } };
}

for (const compiled of [false, true]) {
  test(`${compiled ? 'committed bundle' : 'source'} prepares a truthful encoded draft without sending`, async () => {
    const h = harness({ compiled }); h.complete(); await h.submit();
    assert.match(h.text(), /Nothing has been sent yet/);
    const link = h.nodes().find(node => node.type === 'a' && node.props.href.startsWith('mailto:info@noesisusa.com?'));
    const mail = new URL(link.props.href);
    assert.match(mail.searchParams.get('subject'), /Alex & Co/);
    assert.match(mail.searchParams.get('body'), /Budget & timing\./);
    assert.match(h.byId('inquiry-draft').props.value, /To: info@noesisusa.com/);
    assert.equal(h.posts, 0);
  });
}

test('native invalid input and whitespace-only fields do not progress', async () => {
  const h = harness(); h.complete(); await h.submit({ valid: false });
  assert.equal(h.render().type, 'form');
  h.fill('f-name', '   '); await h.submit(); assert.equal(h.focused, 'name');
  h.fill('f-name', 'Alex'); h.fill('f-msg', ' \n '); await h.submit(); assert.equal(h.focused, 'message');
  assert.equal(h.posts, 0);
});
test('investor selection requires acknowledgement and includes it in draft', async () => {
  const h = harness(); h.complete(); h.fill('f-role', 'Investor — capital partnership');
  assert.equal(h.byId('f-accredited').props.required, true);
  h.fill('f-accredited', true); await h.submit();
  assert.match(h.byId('inquiry-draft').props.value, /Accredited investor confirmation: Yes/);
});
test('editing a draft preserves entered details', async () => {
  const h = harness(); h.complete(); await h.submit(); h.button('Edit my message').props.onClick();
  assert.equal(h.byId('f-name').props.value, 'Alex & Co');
  assert.equal(h.byId('f-msg').props.value, 'A site inquiry?\nBudget & timing.');
});
test('clipboard success is confirmed only after writing', async () => {
  let copied; const h = harness({ clipboard: { writeText: async value => { copied = value; } } });
  h.complete(); await h.submit(); await h.button('Copy my message').props.onClick();
  assert.match(copied, /Subject: Inquiry/); assert.match(h.text(), /Copied to clipboard/);
});
for (const clipboard of [undefined, { writeText: async () => { throw Error('Denied'); } }]) {
  test(`clipboard ${clipboard ? 'denial' : 'absence'} leaves visible manual fallback`, async () => {
    const h = harness({ clipboard }); h.complete(); await h.submit(); await h.button('Copy my message').props.onClick();
    assert.match(h.text(), /Copy is unavailable/); assert.equal(h.selected, true);
    assert.equal(h.focused, 'inquiry-draft'); assert.doesNotMatch(h.text(), /Copied to clipboard/);
  });
}
test('spam is ignored without posting or claiming delivery', async () => {
  const h = harness({ endpoint: 'https://forms.example.test/inquiry' }); h.complete(); await h.submit({ honeypot: 'spam' });
  assert.equal(h.posts, 0); assert.equal(h.render().type, 'form');
});
test('endpoint success waits for an accepted response and blocks duplicate submissions', async () => {
  let finish; const h = harness({ endpoint: 'https://forms.example.test/inquiry', fetch: () => new Promise(resolve => { finish = resolve; }) });
  h.complete(); const pending = h.submit();
  assert.equal(h.render().props['aria-busy'], true); assert.equal(h.nodes().find(n => n.type === 'fieldset').props.disabled, true);
  await h.submit(); assert.equal(h.posts, 1); assert.doesNotMatch(h.text(), /Your inquiry was submitted/);
  finish({ ok: true }); await pending; assert.match(h.text(), /Your inquiry was submitted/);
  h.button('Write another').props.onClick(); assert.equal(h.byId('f-name').props.value, '');
});
for (const request of [async () => ({ ok: false }), async () => { throw Error('Offline'); }]) {
  test('failed delivery preserves details and supports email recovery', async () => {
    const h = harness({ endpoint: 'https://forms.example.test/inquiry', fetch: request }); h.complete(); await h.submit();
    assert.match(h.text(), /couldn't confirm/); assert.equal(h.byId('f-name').props.value, 'Alex & Co');
    await h.submit({ draft: true }); assert.match(h.text(), /Nothing has been sent yet/); assert.equal(h.posts, 1);
  });
}
test('timeout aborts the request and leaves the inquiry recoverable', async () => {
  const h = harness({ endpoint: 'https://forms.example.test/inquiry', fetch: (_url, { signal }) => new Promise((_resolve, reject) => signal.addEventListener('abort', () => reject(Error('Aborted')))) });
  h.complete(); const pending = h.submit(); h.fireTimeout(); await pending;
  assert.match(h.text(), /couldn't confirm/); assert.equal(h.render().props['aria-busy'], false);
});

for (const compiled of [false, true]) {
  test(`${compiled ? 'bundle' : 'source'} restores details after a route unmount without overwriting the selected role`, async () => {
    const first = harness({ compiled, intent: 'investor' });
    first.complete(); first.fill('f-loc', 'Los Angeles');
    // A new form instance models leaving for a supporting route and returning.
    const back = harness({ compiled, intent: 'owner', session: first.session });
    assert.equal(back.byId('f-name').props.value, 'Alex & Co');
    assert.equal(back.byId('f-email').props.value, 'alex+preview@example.test');
    assert.equal(back.byId('f-loc').props.value, 'Los Angeles');
    assert.equal(back.byId('f-role').props.value, 'Other');
    assert.equal(back.byId('f-msg').props.value, 'A site inquiry?\nBudget & timing.');
    assert.match(back.text(), /Reloading or closing this page clears them/);
    await back.submit(); assert.match(back.text(), /Nothing has been sent yet/);
    assert.equal(back.posts, 0);
    const freshPage = harness({ compiled });
    assert.equal(freshPage.byId('f-name').props.value, '');
    assert.equal(freshPage.byId('f-role').props.value, '');
  });
}

test('returning from disclosures keeps acknowledgement; changing role requires it anew', () => {
  const first = harness({ intent: 'investor' });
  first.fill('f-accredited', true);
  const back = harness({ intent: 'investor', session: first.session });
  assert.equal(back.byId('f-accredited').props.checked, true);
  const disclosure = back.nodes().find(n => n.type === 'a' && n.props.href === '/disclosures/');
  assert.ok(disclosure);
  let intercepted = false;
  disclosure.props.onClick({ button: 0, preventDefault() { intercepted = true; } });
  assert.ok(intercepted);
  intercepted = false;
  disclosure.props.onClick({ button: 0, ctrlKey: true, preventDefault() { intercepted = true; } });
  assert.equal(intercepted, false);
  back.fill('f-role', 'Other'); back.fill('f-role', 'Investor — capital partnership');
  assert.equal(back.byId('f-accredited').props.checked, false);
});

test('clearing a prepared draft removes all personal details from memory and restores name focus', async () => {
  const first = harness({ intent: 'investor' }); first.complete(); await first.submit();
  first.button('Clear my details').props.onClick();
  assert.equal(first.focused, 'name');
  assert.equal(first.render().type, 'form');
  const back = harness({ session: first.session });
  for (const id of ['f-name', 'f-email', 'f-loc', 'f-role', 'f-msg']) assert.equal(back.byId(id).props.value, '');
  assert.equal(back.button('Clear my details'), undefined);
  assert.equal(back.posts, 0);
});

test('the actual App keeps the same form session through supporting-page navigation', () => {
  let cursor = 0; const slots = [];
  const React = {
    createElement: (type, props, ...children) => ({ type, props: props || {}, children: children.flat(Infinity) }),
    useState(initial) { const i = cursor++; if (!(i in slots)) slots[i] = typeof initial === 'function' ? initial() : initial; return [slots[i], next => { slots[i] = typeof next === 'function' ? next(slots[i]) : next; }]; },
    useRef(initial) { const i = cursor++; return slots[i] ||= { current: initial }; },
    useCallback: fn => fn, useEffect() {},
  };
  const context = vm.createContext({
    React, ReactDOM: { createRoot: () => ({ render() {} }) },
    document: { querySelector: () => null, getElementById: () => null },
    window: { __ROUTE: 'inquiries', location: { pathname: '/', search: '', hash: '' }, scrollTo() {} },
    useTweaks: defaults => [defaults, () => {}],
    Nav: 'Nav', Footer: 'Footer', Logo: 'Logo', Disclosures: 'Disclosures', NightPlate: 'NightPlate',
    wix: () => '', wixSet: () => '', bandSrc: () => ({}), imgFallback() {}, MarketsMap: 'MarketsMap',
  });
  const code = ['pages/Inquiries.jsx', 'app.jsx'].map(file => babel.transformSync(fs.readFileSync(file, 'utf8'), { presets: ['@babel/preset-react'] }).code).join('\n');
  vm.runInContext(code + '\nglobalThis.renderApp = () => App();', context);
  const walk = node => !node || typeof node !== 'object' ? [] : [node, ...node.children.flatMap(walk)];
  const render = () => { cursor = 0; return context.renderApp(); };
  const first = walk(render()).find(node => node.type?.name === 'Inquiries');
  assert.ok(first.props.session);
  const form = walk(first.type(first.props)).find(node => node.type?.name === 'InquiryForm');
  assert.equal(form.props.session, first.props.session);
  assert.equal(form.props.go, first.props.go);
  first.props.session.current.fields = { message: 'Preserve this conversation' };
  first.props.go('disclosures', true);
  const middle = render();
  assert.ok(walk(middle).some(node => node.type === 'Disclosures'));
  walk(middle).find(node => node.type === 'Nav').props.go('inquiries', true);
  const back = walk(render()).find(node => node.type?.name === 'Inquiries');
  assert.equal(back.props.session, first.props.session);
  assert.equal(back.props.session.current.fields.message, 'Preserve this conversation');
});
