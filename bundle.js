const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}
function TweaksPanel({
  title = 'Tweaks',
  noDeckControls = false,
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const hasDeckStage = React.useMemo(() => typeof document !== 'undefined' && !!document.querySelector('deck-stage'), []);
  const [railEnabled, setRailEnabled] = React.useState(() => hasDeckStage && !!document.querySelector('deck-stage')?._railEnabled);
  React.useEffect(() => {
    if (!hasDeckStage || railEnabled) return undefined;
    const onMsg = e => {
      if (e.data && e.data.type === '__omelette_rail_enabled') setRailEnabled(true);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [hasDeckStage, railEnabled]);
  const [railVisible, setRailVisible] = React.useState(() => {
    try {
      return localStorage.getItem('deck-stage.railVisible') !== '0';
    } catch (e) {
      return true;
    }
  });
  const toggleRail = on => {
    setRailVisible(on);
    window.postMessage({
      type: '__deck_rail_visible',
      on
    }, '*');
  };
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return React.createElement(React.Fragment, null, React.createElement("style", null, __TWEAKS_STYLE), React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-noncommentable": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, React.createElement("b", null, title), React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), React.createElement("div", {
    className: "twk-body"
  }, children, hasDeckStage && railEnabled && !noDeckControls && React.createElement(TweakSection, {
    label: "Deck"
  }, React.createElement(TweakToggle, {
    label: "Thumbnail rail",
    value: railVisible,
    onChange: toggleRail
  })))));
}
function TweakSection({
  label,
  children
}) {
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, React.createElement("div", {
    className: "twk-lbl"
  }, React.createElement("span", null, label), value != null && React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}
function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return React.createElement("div", {
    className: "twk-row twk-row-h"
  }, React.createElement("div", {
    className: "twk-lbl"
  }, React.createElement("span", null, label)), React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const valueRef = React.useRef(value);
  valueRef.current = value;
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return React.createElement("div", {
    className: "twk-num"
  }, React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return React.createElement("div", {
      className: "twk-row twk-row-h"
    }, React.createElement("div", {
      className: "twk-lbl"
    }, React.createElement("span", null, label)), React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && React.createElement("span", null, sup.map((c, j) => React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
function wix(id, opts = {}) {
  if (typeof PHOTO !== "undefined" && PHOTO[id]) id = PHOTO[id];
  if (typeof window !== "undefined" && window.__resources && window.__MEDIA2KEY) {
    const key = window.__MEDIA2KEY[id];
    if (key && window.__resources[key]) return window.__resources[key];
  }
  const {
    w = 1600,
    h = w,
    q = 88,
    mode = "fit"
  } = opts;
  return `https://static.wixstatic.com/media/${id}/v1/${mode}/w_${w},h_${h},al_c,q_${q},enc_avif,quality_auto/${id}`;
}
const PHOTO = {
  stanley_ext_1: "5c383b_4526984e710449c982db5b10fd6a008d~mv2_d_4928_3280_s_4_2.jpg",
  stanley_ext_2: "5c383b_2ebb5989e45c4ef9964ce2c9f4e84e65~mv2_d_4928_3280_s_4_2.jpg",
  stanley_wide: "5c383b_4584eb61a34148e7a662f9e636c16302~mv2_d_3992_2242_s_2.jpg",
  stanley_wide_2: "5c383b_8c58344d19774f59888c34595ae64132~mv2_d_3992_2242_s_2.jpg",
  stanley_int_1: "5c383b_469fa67d063943bda7935b741804a24c~mv2_d_4928_3280_s_4_2.jpg",
  stanley_int_2: "5c383b_6b036622986c43698ccd06c019a3a4f9~mv2_d_4928_3280_s_4_2.jpg",
  stanley_int_3: "5c383b_89aab583806e4b2abf58690bf8fbf257~mv2_d_4913_3270_s_4_2.jpg",
  stanley_int_4: "5c383b_7572778e768540a28916bf010e7799b7~mv2_d_4928_3280_s_4_2.jpg",
  stanley_int_5: "5c383b_97261aa2dccc40d2968992bca21932f1~mv2_d_4925_3278_s_4_2.jpg",
  ying_ext_tall: "5c383b_410f4aecfa8c4af3884ef4a170843a94~mv2_d_3280_4928_s_4_2.jpg",
  ying_wide: "5c383b_a649ee414b654cbd96febb7b5459a67d~mv2_d_3992_2242_s_2.jpg",
  ying_int_1: "5c383b_eed13ee3036b4392849efb36f4db9088~mv2_d_4916_3272_s_4_2.jpg",
  ying_int_2: "5c383b_57c8faa24c5844e481cfbfc6e52eb6c3~mv2_d_4928_3280_s_4_2.jpg",
  ying_int_3: "5c383b_88848ac850024e3186a1bea3935877d3~mv2_d_3236_4862_s_4_2.jpg",
  ying_int_4: "5c383b_d9ad3e70450849269379cdf4d63f425d~mv2_d_3280_4928_s_4_2.jpg",
  ying_int_5: "5c383b_18b43395cbf84f56b006a3e3bf7df051~mv2_d_3268_4910_s_4_2.jpg",
  ying_int_6: "5c383b_ce70a1456bf5467f8019665865d50bab~mv2_d_4928_3280_s_4_2.jpg",
  ying_int_7: "5c383b_f3b44fa483e54cdeba4aaee274b09a17~mv2_d_4928_3280_s_4_2.jpg",
  genesee_ext_tall: "5c383b_c7af355fa0124a47a6e6b7e14a9e4f6a~mv2_d_3280_4928_s_4_2.jpg",
  genesee_wide: "5c383b_f58da50c87764b58b3ebabac82e8ded5~mv2_d_3992_2242_s_2.jpg",
  genesee_int_1: "5c383b_305f1ebcf586400ea6e4afa1d7f5cf41~mv2_d_4747_3160_s_4_2.jpg",
  genesee_int_2: "5c383b_fc489c6dee6649558bcd06960907dff7~mv2_d_4712_3146_s_4_2.jpg",
  genesee_int_3: "5c383b_6b842c985e55480ca4ac1a4ed918d4cb~mv2_d_4928_3280_s_4_2.jpg",
  genesee_int_4: "5c383b_e3ed6cee61c14125b1dab214025b282e~mv2_d_4850_3229_s_4_2.jpg",
  genesee_int_5: "5c383b_ec10eb75197849b9a30b976ea4618e92~mv2_d_4784_3184_s_4_2.jpg",
  genesee_int_6: "5c383b_e746200c864643859a1c1124c549e3e3~mv2_d_4809_3205_s_4_2.jpg",
  genesee_int_7: "5c383b_543f4187371441c086ffb9c4bde4ef31~mv2_d_4812_3203_s_4_2.jpg",
  casablanca: "5c383b_4069deb335d44a7bbfaf2abaacbc25fd~mv2_d_2100_1290_s_2.png",
  alexandria: "5c383b_618462c222ab415dbf9002ddbcf2d4ba~mv2_d_1932_1302_s_2.png",
  igal: "5c383b_48986226684e48b5a46a001483773972~mv2_d_3000_3000_s_4_2.jpg",
  erin: "5c383b_bc8e36dd79ab45ca88cab6d1e439a126~mv2_d_3024_3024_s_4_2.jpg",
  eli: "5c383b_62bdceb0b5884dbc983435194c9332dc~mv2_d_3024_3024_s_4_2.jpg",
  sara: "5c383b_72a8ba6fa96c4e2585359a14107b2d65~mv2_d_3024_3024_s_4_2.jpg",
  jim: "5c383b_fc570d696b644e9d9a9147495f114cfb~mv2_d_3024_3024_s_4_2.jpg"
};
window.wix = wix;
window.PHOTO = PHOTO;
window.__MEDIA2KEY = Object.fromEntries(Object.entries(PHOTO).map(([k, v]) => [v, k]));
function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function rng(seed) {
  let s = seed || 1;
  return () => {
    s = s * 1664525 + 1013904223 >>> 0;
    return s / 0xffffffff;
  };
}
function Placeholder({
  seed = "x",
  variant = "auto",
  label,
  tone = "bone",
  img,
  w = 1600,
  position = "center",
  overlay = false,
  ticks = true
}) {
  if (img) {
    const id = PHOTO[img] || img;
    const src = id.startsWith("http") ? id : wix(id, {
      w
    });
    return React.createElement("div", {
      className: "ph",
      style: {
        background: "var(--ink)"
      }
    }, React.createElement("img", {
      src: src,
      alt: "",
      loading: "lazy",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: position,
        display: "block",
        filter: overlay ? "brightness(.85)" : "none"
      }
    }), overlay && React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(14,16,20,0) 40%, rgba(14,16,20,.55) 100%)"
      }
    }), ticks && React.createElement("svg", {
      viewBox: "0 0 400 300",
      preserveAspectRatio: "none",
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%"
      }
    }, React.createElement("g", {
      stroke: "rgba(242,236,224,.5)",
      strokeWidth: "0.8",
      fill: "none"
    }, React.createElement("path", {
      d: "M8,8 L18,8 M8,8 L8,18"
    }), React.createElement("path", {
      d: "M392,8 L382,8 M392,8 L392,18"
    }), React.createElement("path", {
      d: "M8,292 L18,292 M8,292 L8,282"
    }), React.createElement("path", {
      d: "M392,292 L382,292 M392,292 L392,282"
    })), label && React.createElement("text", {
      x: "14",
      y: "288",
      fontFamily: "ui-monospace, monospace",
      fontSize: "8",
      letterSpacing: "1.2",
      fill: "rgba(242,236,224,.7)"
    }, label.toUpperCase())));
  }
  const r = rng(hash(String(seed)));
  const variants = ["facade", "plan", "section", "massing", "tower", "courtyard"];
  const v = variant === "auto" ? variants[Math.floor(r() * variants.length)] : variant;
  const stroke = tone === "ink" ? "rgba(242,236,224,.5)" : "rgba(14,16,20,.55)";
  const strokeSoft = tone === "ink" ? "rgba(242,236,224,.22)" : "rgba(14,16,20,.18)";
  const fillSoft = tone === "ink" ? "rgba(242,236,224,.05)" : "rgba(14,16,20,.04)";
  const accent = "var(--accent)";
  return React.createElement("div", {
    className: "ph",
    style: tone === "ink" ? {
      background: "linear-gradient(180deg, var(--ink-2) 0%, var(--ink) 100%)"
    } : null
  }, React.createElement("svg", {
    viewBox: "0 0 400 300",
    preserveAspectRatio: "xMidYMid slice"
  }, React.createElement("defs", null, React.createElement("pattern", {
    id: `hatch-${seed}`,
    width: "6",
    height: "6",
    patternUnits: "userSpaceOnUse",
    patternTransform: "rotate(45)"
  }, React.createElement("line", {
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "6",
    stroke: strokeSoft,
    strokeWidth: "0.6"
  }))), v === "facade" && React.createElement(Facade, {
    r: r,
    stroke: stroke,
    strokeSoft: strokeSoft,
    fillSoft: fillSoft,
    accent: accent,
    seed: seed
  }), v === "plan" && React.createElement(Plan, {
    r: r,
    stroke: stroke,
    strokeSoft: strokeSoft,
    fillSoft: fillSoft,
    accent: accent,
    seed: seed
  }), v === "section" && React.createElement(SSection, {
    r: r,
    stroke: stroke,
    strokeSoft: strokeSoft,
    fillSoft: fillSoft,
    accent: accent,
    seed: seed
  }), v === "massing" && React.createElement(Massing, {
    r: r,
    stroke: stroke,
    strokeSoft: strokeSoft,
    fillSoft: fillSoft,
    accent: accent,
    seed: seed
  }), v === "tower" && React.createElement(Tower, {
    r: r,
    stroke: stroke,
    strokeSoft: strokeSoft,
    fillSoft: fillSoft,
    accent: accent,
    seed: seed
  }), v === "courtyard" && React.createElement(Courtyard, {
    r: r,
    stroke: stroke,
    strokeSoft: strokeSoft,
    fillSoft: fillSoft,
    accent: accent,
    seed: seed
  }), React.createElement("g", {
    stroke: stroke,
    strokeWidth: "0.8",
    fill: "none"
  }, React.createElement("path", {
    d: "M8,8 L18,8 M8,8 L8,18"
  }), React.createElement("path", {
    d: "M392,8 L382,8 M392,8 L392,18"
  }), React.createElement("path", {
    d: "M8,292 L18,292 M8,292 L8,282"
  }), React.createElement("path", {
    d: "M392,292 L382,292 M392,292 L392,282"
  })), label && React.createElement("text", {
    x: "14",
    y: "288",
    fontFamily: "var(--mono)",
    fontSize: "8",
    letterSpacing: "1.2",
    fill: stroke
  }, label.toUpperCase())));
}
function Facade({
  r,
  stroke,
  strokeSoft,
  fillSoft,
  accent
}) {
  const cols = 6 + Math.floor(r() * 4);
  const rows = 4 + Math.floor(r() * 3);
  const x0 = 40,
    y0 = 30,
    w = 320,
    h = 240;
  const cw = w / cols,
    ch = h / rows;
  const wins = [];
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const lit = r() > 0.78;
      wins.push(React.createElement("rect", {
        key: `${i}-${j}`,
        x: x0 + i * cw + cw * 0.18,
        y: y0 + j * ch + ch * 0.22,
        width: cw * 0.64,
        height: ch * 0.56,
        fill: lit ? accent : fillSoft,
        opacity: lit ? 0.55 : 1,
        stroke: strokeSoft,
        strokeWidth: "0.5"
      }));
    }
  }
  return React.createElement("g", null, React.createElement("rect", {
    x: x0,
    y: y0,
    width: w,
    height: h,
    fill: "none",
    stroke: stroke,
    strokeWidth: "0.8"
  }), wins, React.createElement("line", {
    x1: "20",
    y1: y0 + h,
    x2: "380",
    y2: y0 + h,
    stroke: stroke,
    strokeWidth: "0.8"
  }), React.createElement("line", {
    x1: "10",
    y1: y0 + h + 8,
    x2: "390",
    y2: y0 + h + 8,
    stroke: strokeSoft,
    strokeWidth: "0.5",
    strokeDasharray: "2 3"
  }));
}
function Plan({
  r,
  stroke,
  strokeSoft,
  fillSoft,
  accent,
  seed
}) {
  const rooms = [];
  const cuts = 3 + Math.floor(r() * 3);
  let x = 50;
  for (let i = 0; i < cuts; i++) {
    const w = 60 + r() * 70;
    rooms.push({
      x,
      y: 50,
      w,
      h: 90 + r() * 60
    });
    x += w + 4;
  }
  return React.createElement("g", null, React.createElement("rect", {
    x: "40",
    y: "40",
    width: "320",
    height: "220",
    fill: fillSoft,
    stroke: stroke,
    strokeWidth: "1"
  }), rooms.map((rm, i) => React.createElement("rect", {
    key: i,
    x: rm.x,
    y: rm.y,
    width: rm.w,
    height: rm.h,
    fill: "none",
    stroke: stroke,
    strokeWidth: "0.7"
  })), React.createElement("rect", {
    x: "60",
    y: "170",
    width: "280",
    height: "70",
    fill: `url(#hatch-${seed})`,
    stroke: stroke,
    strokeWidth: "0.7"
  }), React.createElement("circle", {
    cx: "320",
    cy: "60",
    r: "3",
    fill: accent
  }), React.createElement("text", {
    x: "50",
    y: "34",
    fontFamily: "var(--mono)",
    fontSize: "7",
    letterSpacing: "1",
    fill: stroke
  }, "FLOOR PLAN \xB7 A-101"));
}
function SSection({
  r,
  stroke,
  strokeSoft,
  fillSoft,
  accent,
  seed
}) {
  const floors = 4 + Math.floor(r() * 3);
  const fh = 38;
  const baseY = 250;
  return React.createElement("g", null, React.createElement("line", {
    x1: "20",
    y1: baseY + 6,
    x2: "380",
    y2: baseY + 6,
    stroke: stroke,
    strokeWidth: "0.8"
  }), React.createElement("rect", {
    x: "30",
    y: baseY + 8,
    width: "340",
    height: "10",
    fill: `url(#hatch-${seed})`,
    stroke: stroke,
    strokeWidth: "0.4"
  }), Array.from({
    length: floors
  }).map((_, i) => {
    const y = baseY - (i + 1) * fh;
    return React.createElement("g", {
      key: i
    }, React.createElement("line", {
      x1: "60",
      y1: y,
      x2: "340",
      y2: y,
      stroke: stroke,
      strokeWidth: "0.6"
    }), React.createElement("line", {
      x1: "60",
      y1: y + fh - 2,
      x2: "340",
      y2: y + fh - 2,
      stroke: strokeSoft,
      strokeWidth: "0.4"
    }));
  }), React.createElement("line", {
    x1: "60",
    y1: baseY,
    x2: "60",
    y2: baseY - floors * fh,
    stroke: stroke,
    strokeWidth: "0.8"
  }), React.createElement("line", {
    x1: "340",
    y1: baseY,
    x2: "340",
    y2: baseY - floors * fh,
    stroke: stroke,
    strokeWidth: "0.8"
  }), React.createElement("path", {
    d: `M 90 ${baseY - floors * fh - 30} Q 200 ${baseY - floors * fh - 80} 310 ${baseY - floors * fh - 30}`,
    fill: "none",
    stroke: accent,
    strokeWidth: "0.8",
    strokeDasharray: "2 2"
  }), React.createElement("circle", {
    cx: "200",
    cy: baseY - floors * fh - 80,
    r: "2.5",
    fill: accent
  }));
}
function Massing({
  r,
  stroke,
  strokeSoft,
  fillSoft,
  accent
}) {
  const blocks = 3 + Math.floor(r() * 2);
  const out = [];
  let x = 70;
  for (let i = 0; i < blocks; i++) {
    const w = 50 + r() * 50;
    const h = 80 + r() * 110;
    out.push(React.createElement("rect", {
      key: i,
      x: x,
      y: 250 - h,
      width: w,
      height: h,
      fill: fillSoft,
      stroke: stroke,
      strokeWidth: "0.9"
    }));
    out.push(React.createElement("rect", {
      key: i + 100,
      x: x + 4,
      y: 250 - h + 4,
      width: w - 8,
      height: h - 8,
      fill: "none",
      stroke: strokeSoft,
      strokeWidth: "0.4"
    }));
    x += w + 6;
  }
  return React.createElement("g", null, out, React.createElement("line", {
    x1: "30",
    y1: "250",
    x2: "370",
    y2: "250",
    stroke: stroke,
    strokeWidth: "0.8"
  }), React.createElement("circle", {
    cx: "350",
    cy: "40",
    r: "14",
    fill: "none",
    stroke: accent,
    strokeWidth: "0.8"
  }));
}
function Tower({
  r,
  stroke,
  strokeSoft,
  fillSoft,
  accent
}) {
  const floors = 12 + Math.floor(r() * 6);
  return React.createElement("g", null, React.createElement("rect", {
    x: "150",
    y: "40",
    width: "100",
    height: "220",
    fill: fillSoft,
    stroke: stroke,
    strokeWidth: "0.9"
  }), Array.from({
    length: floors
  }).map((_, i) => React.createElement("line", {
    key: i,
    x1: "150",
    y1: 50 + i * (210 / floors),
    x2: "250",
    y2: 50 + i * (210 / floors),
    stroke: strokeSoft,
    strokeWidth: "0.5"
  })), React.createElement("rect", {
    x: "170",
    y: "50",
    width: "60",
    height: "200",
    fill: "none",
    stroke: strokeSoft,
    strokeWidth: "0.4"
  }), React.createElement("line", {
    x1: "200",
    y1: "40",
    x2: "200",
    y2: "260",
    stroke: strokeSoft,
    strokeWidth: "0.4",
    strokeDasharray: "2 2"
  }), React.createElement("circle", {
    cx: "200",
    cy: "36",
    r: "2",
    fill: accent
  }), React.createElement("line", {
    x1: "30",
    y1: "262",
    x2: "370",
    y2: "262",
    stroke: stroke,
    strokeWidth: "0.8"
  }));
}
function Courtyard({
  r,
  stroke,
  strokeSoft,
  fillSoft,
  accent,
  seed
}) {
  return React.createElement("g", null, React.createElement("rect", {
    x: "40",
    y: "40",
    width: "320",
    height: "220",
    fill: fillSoft,
    stroke: stroke,
    strokeWidth: "0.9"
  }), React.createElement("rect", {
    x: "120",
    y: "100",
    width: "160",
    height: "100",
    fill: `url(#hatch-${seed})`,
    stroke: stroke,
    strokeWidth: "0.6"
  }), React.createElement("circle", {
    cx: "200",
    cy: "150",
    r: "22",
    fill: "none",
    stroke: accent,
    strokeWidth: "0.8"
  }), React.createElement("circle", {
    cx: "200",
    cy: "150",
    r: "3",
    fill: accent
  }), [60, 90, 310, 340].map((x, i) => React.createElement("circle", {
    key: i,
    cx: x,
    cy: i % 2 ? 80 : 220,
    r: "6",
    fill: "none",
    stroke: stroke,
    strokeWidth: "0.6"
  })));
}
window.Placeholder = Placeholder;
const NAV_LINKS = [["home", "Home"], ["services", "Services"], ["investment", "Investment"], ["projects", "Properties"], ["about", "About"], ["contact", "Contact"]];
const SOCIALS = [["Facebook", "M13 10h3l.5-3H13V5.2c0-.9.2-1.5 1.5-1.5H16V1.1C15.7 1 14.8 1 13.8 1 11.6 1 10 2.3 10 4.9V7H7.5v3H10v8h3z"], ["Instagram", "M9.5 2h5A4.5 4.5 0 0 1 19 6.5v5A4.5 4.5 0 0 1 14.5 16h-5A4.5 4.5 0 0 1 5 11.5v-5A4.5 4.5 0 0 1 9.5 2Zm0 1.6A2.9 2.9 0 0 0 6.6 6.5v5A2.9 2.9 0 0 0 9.5 14.4h5a2.9 2.9 0 0 0 2.9-2.9v-5a2.9 2.9 0 0 0-2.9-2.9h-5ZM12 6.6A3.4 3.4 0 1 1 8.6 10 3.4 3.4 0 0 1 12 6.6Zm0 1.6A1.8 1.8 0 1 0 13.8 10 1.8 1.8 0 0 0 12 8.2Zm3.6-2.1a.8.8 0 1 1-.8.8.8.8 0 0 1 .8-.8Z"], ["LinkedIn", "M4.5 3A1.5 1.5 0 1 0 4.5 6 1.5 1.5 0 0 0 4.5 3ZM3.3 7.4h2.4V18H3.3V7.4ZM8 7.4h2.3v1.4h.1A2.5 2.5 0 0 1 12.7 7.2c2.5 0 3 1.6 3 3.8V18h-2.4v-3.5c0-.8 0-1.9-1.2-1.9s-1.3 1-1.3 1.9V18H8V7.4Z"], ["YouTube", "M19.6 7.2a2 2 0 0 0-1.4-1.4C16.9 5.5 12 5.5 12 5.5s-4.9 0-6.2.3A2 2 0 0 0 4.4 7.2 21 21 0 0 0 4.1 11a21 21 0 0 0 .3 3.8 2 2 0 0 0 1.4 1.4c1.3.3 6.2.3 6.2.3s4.9 0 6.2-.3a2 2 0 0 0 1.4-1.4 21 21 0 0 0 .3-3.8 21 21 0 0 0-.3-3.8ZM10.4 13.3V8.7l4 2.3-4 2.3Z"]];
function SocialRow({
  size = 18,
  color
}) {
  return React.createElement("div", {
    className: "u-flex u-gap-16"
  }, SOCIALS.map(([name, d]) => React.createElement("a", {
    key: name,
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": name,
    className: "social"
  }, React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 22 22",
    fill: color || "currentColor"
  }, React.createElement("path", {
    d: d
  })))));
}
function Nav({
  page,
  setPage
}) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const go = k => {
    setPage(k);
    setOpen(false);
  };
  return React.createElement("header", {
    className: `nav ${scrolled ? "nav--scrolled" : ""}`
  }, React.createElement("div", {
    className: "wrap nav__inner"
  }, React.createElement("button", {
    className: "nav__brand-btn",
    "aria-label": "Noesis Group \u2014 home",
    onClick: () => go("home")
  }, React.createElement("span", {
    className: "nav__logo"
  }, "NOESIS"), React.createElement("span", {
    className: "nav__logo-dot"
  }), React.createElement("span", {
    className: "mono nav__brand-sub"
  }, "Group")), React.createElement("nav", {
    className: "nav__links",
    "aria-label": "Primary"
  }, NAV_LINKS.map(([k, label]) => React.createElement("button", {
    key: k,
    className: page === k ? "is-active" : "",
    onClick: () => go(k)
  }, label)), React.createElement("button", {
    onClick: () => go("contact"),
    className: "btn nav__cta"
  }, "Enquire ", React.createElement("span", {
    className: "arr"
  }))), React.createElement("button", {
    className: `nav__burger ${open ? "is-open" : ""}`,
    "aria-label": open ? "Close menu" : "Open menu",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o)
  }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null))), React.createElement("div", {
    className: `nav__drawer ${open ? "is-open" : ""}`,
    "aria-hidden": !open
  }, React.createElement("nav", {
    className: "nav__drawer-links",
    "aria-label": "Mobile"
  }, NAV_LINKS.map(([k, label], i) => React.createElement("button", {
    key: k,
    className: page === k ? "is-active" : "",
    style: {
      transitionDelay: open ? `${0.05 + i * 0.04}s` : "0s"
    },
    onClick: () => go(k)
  }, React.createElement("span", {
    className: "mono nav__drawer-idx"
  }, "0", i + 1), label))), React.createElement("div", {
    className: "nav__drawer-foot"
  }, React.createElement("button", {
    onClick: () => go("contact"),
    className: "btn",
    style: {
      width: "100%",
      justifyContent: "center"
    }
  }, "Start a Conversation ", React.createElement("span", {
    className: "arr"
  })), React.createElement("div", {
    className: "mono nav__drawer-meta"
  }, "T (310) 855\xB73634 \xB7 INFO@NOESISUSA.COM"), React.createElement(SocialRow, null))));
}
function CityClocks() {
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);
  const at = tz => {
    try {
      return new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: tz
      }).format(now);
    } catch (e) {
      return "";
    }
  };
  return React.createElement("div", {
    className: "clocks"
  }, React.createElement("span", null, "Beverly Hills", React.createElement("b", null, at("America/Los_Angeles"))), React.createElement("span", null, "Tel Aviv", React.createElement("b", null, at("Asia/Jerusalem"))));
}
function Footer({
  setPage
}) {
  return React.createElement("footer", {
    className: "footer"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "grid-12",
    style: {
      alignItems: "end",
      rowGap: 40
    }
  }, React.createElement("div", {
    className: "col-7"
  }, React.createElement("div", {
    className: "seal seal--footer",
    "aria-hidden": "true"
  }, React.createElement("svg", {
    viewBox: "0 0 120 120"
  }, React.createElement("defs", null, React.createElement("path", {
    id: "sealPathF",
    d: "M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0",
    fill: "none"
  })), React.createElement("text", null, React.createElement("textPath", {
    href: "#sealPathF"
  }, "Noesis Group \xB7 Beverly Hills \xB7 Est. 2009 \xB7 International\xA0\xB7\xA0"))), React.createElement("span", {
    className: "seal__n"
  }, "N", React.createElement("i", null, "."))), React.createElement("div", {
    className: "eyebrow u-mt-24",
    style: {
      color: "var(--muted)"
    }
  }, React.createElement("span", {
    className: "dot"
  }), " Beverly Hills \xB7 California \xB7 Est. 2009 \xB7 International"), React.createElement("div", {
    className: "h-display",
    style: {
      marginTop: 24
    }
  }, "Represent. Deliver.", React.createElement("br", null), React.createElement("em", {
    className: "accent",
    style: {
      fontStyle: "italic"
    }
  }, "Invest.")), React.createElement("div", {
    className: "u-flex u-gap-24 u-mt-40",
    style: {
      flexWrap: "wrap"
    }
  }, [["services", "Services"], ["investment", "Investment"], ["projects", "Properties"], ["about", "About"], ["contact", "Contact"]].map(([k, l]) => React.createElement("button", {
    key: k,
    onClick: () => setPage(k),
    className: "link-u",
    style: {
      background: "transparent",
      border: 0,
      borderBottom: "1px solid var(--rule)",
      color: "var(--ink-soft)",
      fontSize: 13,
      letterSpacing: ".02em",
      padding: "0 0 3px"
    }
  }, l)))), React.createElement("div", {
    className: "col-5"
  }, React.createElement("div", {
    className: "u-flex u-col u-gap-24"
  }, React.createElement("div", null, React.createElement("div", {
    className: "mono footer__lbl"
  }, "Inquiries"), React.createElement("a", {
    href: "mailto:info@noesisusa.com",
    className: "serif",
    style: {
      fontSize: 24,
      color: "var(--ink)"
    }
  }, "info@noesisusa.com"), React.createElement("div", {
    style: {
      marginTop: 8,
      color: "var(--ink-soft)",
      letterSpacing: ".03em"
    }
  }, "T (310) 855\xB73634 \xA0\xB7\xA0 F (424) 282\xB78414")), React.createElement("button", {
    onClick: () => setPage("contact"),
    className: "btn btn--ghost",
    style: {
      alignSelf: "flex-start"
    }
  }, "Start a Conversation ", React.createElement("span", {
    className: "arr"
  })), React.createElement(SocialRow, {
    size: 20
  })))), React.createElement("hr", {
    className: "divider",
    style: {
      background: "var(--rule)",
      marginTop: 72,
      marginBottom: 28
    }
  }), React.createElement("div", {
    className: "u-flex u-between u-center",
    style: {
      flexWrap: "wrap",
      gap: 16,
      fontSize: 12,
      color: "var(--muted)"
    }
  }, React.createElement(CityClocks, null), React.createElement("div", {
    className: "mono",
    style: {
      letterSpacing: ".06em"
    }
  }, "COPYRIGHT \xA9 2026 NOESIS GROUP \xB7 ALL RIGHTS RESERVED"), React.createElement("div", {
    className: "u-flex u-gap-24"
  }, React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Disclosures"), React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Privacy"), React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Terms")))));
}
window.Nav = Nav;
window.Footer = Footer;
window.SocialRow = SocialRow;
const SHOT = {
  casaMani: "5c383b_a9f6aa50d3a44559aee6289afe36ebcf~mv2_d_6720_4480_s_4_2.jpg",
  oneOak: "5c383b_38f5ef1da26e4204b8e465e79f378f2e~mv2.jpg",
  houseG: "5c383b_a01053afaaa447d08fc46a06820b54d3~mv2_d_5760_3840_s_4_2.jpg",
  aura: "5c383b_23c2d9ef2cfb46768b1a436bc5c8dc7a~mv2_d_4256_2832_s_4_2.jpg",
  cThru: "5c383b_b3d670a8b83a486498fae278402120af~mv2.jpg",
  lolivier: "5c383b_fcb4f7079a5e443589c23a058a3a3b1b~mv2.jpg"
};
function Home({
  setPage
}) {
  return React.createElement("main", {
    className: "page-enter"
  }, React.createElement("section", {
    className: "cine cine--video",
    style: {
      minHeight: "100svh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingTop: "clamp(84px,12vh,130px)",
      paddingBottom: "clamp(34px,6vh,60px)"
    }
  }, React.createElement("img", {
    className: "cine__img",
    src: wix(SHOT.casaMani, {
      w: 2600
    }),
    alt: "Casa Mani \u2014 a Noesis-delivered residence"
  }), React.createElement("video", {
    className: "cine__vid",
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "auto",
    src: "assets/noesis-film.mp4?v=2",
    ref: el => {
      if (!el || el.__keeper) return;
      el.__keeper = true;
      el.muted = true;
      const tryPlay = () => {
        if (!el.isConnected) {
          clearInterval(el.__iv);
          document.removeEventListener("visibilitychange", tryPlay);
          return;
        }
        if (el.paused && !document.hidden) {
          const p = el.play();
          if (p && p.catch) p.catch(() => {});
        }
      };
      el.__tries = 0;
      el.addEventListener("error", () => {
        const delays = [2000, 8000, 20000, 45000];
        if (el.__tries >= delays.length) {
          el.style.display = "none";
          return;
        }
        const wait = delays[el.__tries++];
        setTimeout(() => {
          if (!el.isConnected) return;
          el.style.display = "";
          el.src = "assets/noesis-film.mp4?r=" + Date.now();
          el.load();
          tryPlay();
        }, wait);
      });
      el.addEventListener("playing", () => {
        el.style.display = "";
        el.__tries = 0;
      });
      tryPlay();
      el.__iv = setInterval(tryPlay, 2500);
      document.addEventListener("visibilitychange", tryPlay);
    }
  }), React.createElement("div", {
    className: "cine__grad",
    style: {
      background: "linear-gradient(180deg, rgba(18,15,10,.5) 0%, rgba(18,15,10,.16) 42%, rgba(18,15,10,.82) 100%)"
    }
  }), React.createElement("div", {
    className: "wrap u-flex u-between",
    style: {
      position: "relative",
      zIndex: 1,
      width: "100%"
    }
  }, React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "rgba(244,241,234,.65)"
    }
  }, React.createElement("span", {
    className: "dot"
  }), " Noesis \u2014 Est. 2009"), React.createElement("div", {
    className: "eyebrow u-hide-720",
    style: {
      color: "rgba(244,241,234,.65)"
    }
  }, "Beverly Hills \xB7 International")), React.createElement("div", {
    className: "wrap",
    style: {
      position: "relative",
      zIndex: 1,
      width: "100%"
    }
  }, React.createElement("h1", {
    className: "h-display lx-h",
    style: {
      maxWidth: "16ch",
      color: "var(--bone)"
    }
  }, React.createElement("span", {
    className: "ln"
  }, React.createElement("span", null, "We build")), React.createElement("span", {
    className: "ln"
  }, React.createElement("span", null, "what ", React.createElement("em", {
    style: {
      fontStyle: "italic"
    }
  }, "endures.")))), React.createElement("div", {
    className: "grid-12 u-mt-40",
    style: {
      alignItems: "end"
    }
  }, React.createElement("div", {
    className: "col-6"
  }, React.createElement("p", {
    className: "lede",
    "data-hero-fade": true,
    style: {
      maxWidth: "46ch",
      color: "rgba(244,241,234,.85)"
    }
  }, "An international development-management and investment firm \u2014 entrusted with landmark residential and commercial projects, from entitlement to delivery.")), React.createElement("div", {
    className: "col-6 u-flex u-gap-16",
    "data-hero-fade": true,
    style: {
      justifyContent: "flex-end",
      flexWrap: "wrap"
    }
  }, React.createElement("button", {
    className: "btn",
    onClick: () => setPage("services"),
    "data-magnetic": true
  }, "Our Practice ", React.createElement("span", {
    className: "arr"
  })), React.createElement("button", {
    className: "btn btn--ghost",
    onClick: () => setPage("investment"),
    "data-magnetic": true,
    style: {
      color: "var(--bone)",
      borderColor: "rgba(244,241,234,.75)"
    }
  }, "Investment"))))), React.createElement("section", {
    className: "cine",
    style: {
      height: "min(88vh, 860px)",
      minHeight: 520
    }
  }, React.createElement("img", {
    className: "cine__img",
    "data-parallax": "0.12",
    src: wix(PHOTO.ying_wide, {
      w: 2600
    }),
    alt: "Ying Yang Lofts \u2014 Los Angeles"
  }), React.createElement("div", {
    className: "cine__grad"
  }), React.createElement("div", {
    className: "cine__cap"
  }, React.createElement("div", {
    className: "wrap",
    style: {
      paddingBottom: "clamp(36px,6vw,72px)"
    }
  }, React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "rgba(244,241,234,.62)"
    }
  }, React.createElement("span", {
    className: "dot"
  }), " Designed, developed & delivered by Noesis"), React.createElement("h2", {
    className: "h-1 u-mt-16",
    style: {
      color: "var(--bone)",
      maxWidth: "18ch"
    }
  }, "We have stood where our clients stand \u2014 ", React.createElement("em", {
    className: "italic",
    style: {
      color: "var(--bone)"
    }
  }, "and delivered."))))), React.createElement("section", {
    className: "section"
  }, React.createElement("div", {
    className: "wrap grid-12"
  }, React.createElement("div", {
    className: "col-4 reveal"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " The Firm")), React.createElement("div", {
    className: "col-8 reveal"
  }, React.createElement("p", {
    className: "h-2",
    style: {
      textWrap: "balance"
    }
  }, "Building anything significant means orchestrating dozens of disciplines, years of risk and millions in capital \u2014 usually for someone doing it for the first time.", React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, " Noesis exists to carry that weight.")), React.createElement("p", {
    className: "body-lg u-mt-40",
    style: {
      maxWidth: "62ch"
    }
  }, "We act on behalf of the owner \u2014 assembling and directing the entire project team, protecting the vision, the budget and the timeline at every stage. Fifteen years of designing, developing and delivering luxury real estate sit behind every engagement: the difference between a project that is merely built, and one that is truly realized.")))), React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 0,
      borderTop: 0
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "reveal",
    style: {
      marginBottom: "clamp(40px,5vw,72px)"
    }
  }, React.createElement("span", {
    className: "idx"
  }, "01 \u2014 02"), React.createElement("h2", {
    className: "h-1 u-mt-16"
  }, "Two mandates.")), React.createElement("div", {
    className: "grid-12 reveal",
    style: {
      rowGap: 56
    }
  }, React.createElement("div", {
    className: "col-6",
    style: {
      paddingRight: "clamp(0px,3vw,56px)"
    }
  }, React.createElement("div", {
    className: "rule-x"
  }), React.createElement("div", {
    className: "eyebrow u-mt-24",
    style: {
      color: "var(--accent)"
    }
  }, "For Owners & Developers"), React.createElement("h3", {
    className: "h-2 u-mt-16"
  }, "Owner's representation & development management."), React.createElement("p", {
    className: "body-lg u-mt-24",
    style: {
      maxWidth: "44ch"
    }
  }, "Your single, accountable advocate \u2014 managing the entire delivery process so you carry one relationship instead of twenty, from feasibility and entitlement through construction and handover."), React.createElement("button", {
    className: "btn btn--ghost u-mt-40",
    onClick: () => setPage("services"),
    "data-magnetic": true
  }, "Explore the Practice ", React.createElement("span", {
    className: "arr"
  }))), React.createElement("div", {
    className: "col-6",
    style: {
      paddingRight: "clamp(0px,3vw,56px)"
    }
  }, React.createElement("div", {
    className: "rule-x"
  }), React.createElement("div", {
    className: "eyebrow u-mt-24",
    style: {
      color: "var(--accent)"
    }
  }, "For Investors"), React.createElement("h3", {
    className: "h-2 u-mt-16"
  }, "Investment & capital partnership."), React.createElement("p", {
    className: "body-lg u-mt-24",
    style: {
      maxWidth: "44ch"
    }
  }, "Disciplined, design-led real estate investment \u2014 sourced, structured and stewarded for an aligned network of private capital, with the operator invested alongside you."), React.createElement("button", {
    className: "btn btn--ghost u-mt-40",
    onClick: () => setPage("investment"),
    "data-magnetic": true
  }, "Explore Investment ", React.createElement("span", {
    className: "arr"
  })))))), React.createElement("section", {
    className: "section"
  }, React.createElement("div", {
    className: "wrap grid-12"
  }, React.createElement("div", {
    className: "col-4 reveal"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Capabilities"), React.createElement("h2", {
    className: "h-1 u-mt-16",
    style: {
      textWrap: "balance"
    }
  }, "One firm,", React.createElement("br", null), "every discipline.")), React.createElement("div", {
    className: "col-8 reveal"
  }, React.createElement("div", {
    className: "rows",
    style: {
      borderTop: "1px solid var(--rule)"
    }
  }, [["Owner's Representation", "The owner's seat — the single, accountable point of contact directing the entire project."], ["Development Management", "Feasibility, entitlement, structuring and delivery of ground-up and repositioning projects."], ["Project & Construction", "Schedule, budget, procurement and quality, run with a builder's discipline."], ["Investment & Capital", "Sourcing, structuring and asset management, with capital aligned alongside the owner."]].map(([t, d], i) => React.createElement("div", {
    key: t,
    className: "row"
  }, React.createElement("div", {
    className: "row__idx"
  }, "0", i + 1), React.createElement("div", {
    className: "row__title"
  }, t), React.createElement("p", {
    className: "row__desc"
  }, d))))))), React.createElement("section", {
    className: "section"
  }, React.createElement("div", {
    className: "wrap grid-12"
  }, React.createElement("div", {
    className: "col-4 reveal"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " The Record"), React.createElement("h2", {
    className: "h-1 u-mt-16"
  }, "Delivery,", React.createElement("br", null), "measured.")), React.createElement("div", {
    className: "col-8 reveal"
  }, React.createElement("p", {
    className: "lede",
    style: {
      maxWidth: "50ch"
    }
  }, "Before founding Noesis, our principal directed institutional development and construction at scale \u2014 for private-equity and global property firms. The discipline is the same on every mandate we accept."), React.createElement("div", {
    className: "statline statline--3",
    style: {
      marginTop: "clamp(40px,5vw,72px)"
    }
  }, React.createElement("div", null, React.createElement("div", {
    className: "num"
  }, "$75M"), React.createElement("div", {
    className: "statline__l"
  }, "Construction budget directed"), React.createElement("div", {
    className: "sub"
  }, "A single Los Angeles development program, managed end to end.")), React.createElement("div", null, React.createElement("div", {
    className: "num"
  }, "12%"), React.createElement("div", {
    className: "statline__l"
  }, "Delivered under budget"), React.createElement("div", {
    className: "sub"
  }, "On a 24-unit luxury condominium delivered internationally.")), React.createElement("div", null, React.createElement("div", {
    className: "num"
  }, "22"), React.createElement("div", {
    className: "statline__l"
  }, "Days ahead of schedule"), React.createElement("div", {
    className: "sub"
  }, "The same project \u2014 handed over early, not explained late.")))))), React.createElement("section", {
    className: "cine",
    style: {
      height: "min(80vh, 760px)",
      minHeight: 480
    }
  }, React.createElement("img", {
    className: "cine__img",
    "data-parallax": "0.1",
    src: wix(SHOT.oneOak, {
      w: 2400
    }),
    alt: ""
  }), React.createElement("div", {
    className: "cine__grad"
  }), React.createElement("div", {
    className: "cine__cap"
  }, React.createElement("div", {
    className: "wrap",
    style: {
      paddingBottom: "clamp(36px,6vw,72px)"
    }
  }, React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "rgba(244,241,234,.62)"
    }
  }, React.createElement("span", {
    className: "dot"
  }), " The Process"), React.createElement("h2", {
    className: "h-1 u-mt-16",
    style: {
      color: "var(--bone)",
      maxWidth: "16ch"
    }
  }, "From entitlement ", React.createElement("em", {
    className: "italic",
    style: {
      color: "var(--bone)"
    }
  }, "to delivery.")), React.createElement("div", {
    className: "u-flex u-gap-24 u-mt-40",
    style: {
      flexWrap: "wrap",
      color: "var(--bone-soft)",
      fontSize: 13,
      letterSpacing: ".02em"
    }
  }, ["Strategy", "Entitlement", "Design", "Construction", "Realization"].map((s, i) => React.createElement("span", {
    key: s,
    style: {
      display: "inline-flex",
      gap: 10
    }
  }, React.createElement("span", {
    style: {
      color: "var(--accent)",
      fontFamily: "var(--sans)",
      fontWeight: 500
    }
  }, "0", i + 1), " ", s)))))), React.createElement("section", {
    className: "section"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "grid-12 u-end reveal",
    style: {
      marginBottom: "clamp(36px,4vw,56px)"
    }
  }, React.createElement("div", {
    className: "col-8"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Selected Work"), React.createElement("h2", {
    className: "h-1 u-mt-16"
  }, "A record owners trust.")), React.createElement("div", {
    className: "col-4 u-tr"
  }, React.createElement("button", {
    className: "btn btn--ghost",
    onClick: () => setPage("projects"),
    "data-magnetic": true
  }, "All Properties ", React.createElement("span", {
    className: "arr"
  })))), React.createElement("div", {
    className: "collage reveal"
  }, [[SHOT.casaMani, "Casa Mani", "Beverly Hills"], [SHOT.oneOak, "One Oak", "Sunset Strip"], [SHOT.aura, "Aura House", "Tel Aviv"], [SHOT.cThru, "C Thru", "Beverly Grove"], [SHOT.houseG, "House G", "Melrose"], [SHOT.lolivier, "L'Olivier House", "Los Angeles"]].map(([img, name, loc]) => React.createElement("article", {
    key: name,
    className: "pcard",
    onClick: () => setPage("projects")
  }, React.createElement("div", {
    className: "pcard__media"
  }, React.createElement("img", {
    className: "pcard__img",
    src: wix(img, {
      w: 1300
    }),
    alt: name,
    loading: "lazy"
  })), React.createElement("div", {
    className: "pcard__cap"
  }, React.createElement("div", null, React.createElement("div", {
    className: "pcard__name"
  }, name), React.createElement("div", {
    className: "pcard__loc"
  }, loc)))))))), React.createElement("section", {
    className: "manifesto",
    "data-manifesto": true
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("p", {
    className: "manifesto__t"
  }, "A building is a promise — made once, kept for decades. We exist so the promise is kept: on vision, on budget, on time.".split(" ").map((w, k) => React.createElement("span", {
    className: "w",
    key: k
  }, w, " "))), React.createElement("div", {
    className: "manifesto__sig"
  }, "\u2014 The Noesis Doctrine"))), React.createElement("section", {
    className: "section"
  }, React.createElement("div", {
    className: "wrap grid-12"
  }, React.createElement("div", {
    className: "col-4 reveal"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Clientele"), React.createElement("h2", {
    className: "h-1 u-mt-16"
  }, "A quiet", React.createElement("br", null), "practice.")), React.createElement("div", {
    className: "col-8 reveal"
  }, React.createElement("div", {
    className: "rows",
    style: {
      borderTop: "1px solid var(--rule)"
    }
  }, [["Principals & Family Offices", "Primary residences, estates and legacy assets — delivered with absolute discretion."], ["Developers & Institutions", "Owner's representation and development management for projects at scale."], ["International Capital", "Cross-border partners entering U.S. real estate with a trusted operator on the ground."]].map(([t, d], i) => React.createElement("div", {
    key: t,
    className: "row"
  }, React.createElement("div", {
    className: "row__idx"
  }, "0", i + 1), React.createElement("div", {
    className: "row__title"
  }, t), React.createElement("p", {
    className: "row__desc"
  }, d)))), React.createElement("p", {
    className: "lede u-mt-40",
    style: {
      maxWidth: "52ch"
    }
  }, "We accept a limited number of mandates each year. Engagements begin privately, and proceed under confidentiality as standard.")))), React.createElement("section", {
    className: "section"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "reveal",
    style: {
      marginBottom: "clamp(36px,4vw,56px)"
    }
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Track Record")), React.createElement("div", {
    className: "statline reveal"
  }, [["2009", "Founded"], ["17", "Projects delivered"], ["2", "Countries"], ["$5M+", "Project minimum"]].map(([n, l]) => React.createElement("div", {
    key: l
  }, React.createElement("div", {
    className: "num"
  }, n), React.createElement("div", {
    className: "statline__l"
  }, l)))))), React.createElement("section", {
    className: "section section--ink"
  }, React.createElement("div", {
    className: "wrap reveal",
    style: {
      textAlign: "center",
      maxWidth: 1000,
      marginInline: "auto"
    }
  }, React.createElement("div", {
    className: "eyebrow",
    style: {
      justifyContent: "center"
    }
  }, React.createElement("span", {
    className: "dot"
  }), " Let's begin"), React.createElement("h2", {
    className: "h-display u-mt-24",
    style: {
      color: "var(--bone)",
      textWrap: "balance"
    }
  }, "A project to deliver, or capital to deploy?"), React.createElement("button", {
    className: "btn btn--ghost u-mt-40",
    onClick: () => setPage("contact"),
    "data-magnetic": true,
    style: {
      marginInline: "auto"
    }
  }, "Start a Conversation ", React.createElement("span", {
    className: "arr"
  })), React.createElement("div", {
    className: "eyebrow u-mt-24",
    style: {
      color: "rgba(244,241,234,.42)"
    }
  }, "Discreet \xB7 Confidential \xB7 Without obligation"))));
}
window.Home = Home;
const PILLARS = [["01", "Owner's Representation", "We sit in the owner's seat as your single, accountable advocate — directing the entire project team, safeguarding your intent, and making sure every decision serves your interest, not the vendor's."], ["02", "Development Management", "End-to-end management of ground-up and repositioning projects: feasibility, structuring, entitlement, delivery and disposition — one team carrying the project from raw opportunity to realized asset."], ["03", "Project & Construction Management", "Schedule, budget, procurement, contractor selection and on-site quality control — run with the discipline of a builder who has self-delivered luxury projects, not a spectator."], ["04", "Feasibility & Entitlement", "Site and market analysis, highest-and-best-use studies, financial modeling, and the planning, zoning and permitting strategy that determines whether — and how — a project can be built."], ["05", "Design Management", "Assembling and aligning architects, interior designers and engineers around a single vision and budget — protecting design integrity while keeping value and constructability in view."], ["06", "Cost & Risk Management", "Independent budgeting, value engineering, contingency strategy and proactive risk control — so surprises are surfaced early and the owner stays in command of capital."]];
const FLOW = [["01", "Strategy & Feasibility", "We pressure-test the opportunity before capital is committed — site and market analysis, highest-and-best-use, financial modeling and a clear-eyed risk assessment."], ["02", "Entitlement & Approvals", "We navigate planning, zoning, permitting and the agency and community stakeholders who ultimately decide a project's fate, building the approval path deliberately."], ["03", "Design & Preconstruction", "We assemble and direct the design team, then lock budget, scope and program through value engineering, procurement and contractor selection."], ["04", "Construction Delivery", "We manage contractors, schedule, cost and quality to completion — holding every trade to the owner's standard and resolving issues before they compound."], ["05", "Handover & Realization", "We close out, commission and hand over the asset — then support leasing, sale or stabilization so the project's full value is realized, not left on the table."]];
function Services({
  setPage
}) {
  return React.createElement("main", {
    className: "page-enter"
  }, React.createElement("section", {
    style: {
      paddingTop: "clamp(48px,9vh,120px)",
      paddingBottom: "clamp(40px,6vw,80px)",
      borderTop: 0
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Services \xB7 For Owners & Developers"), React.createElement("h1", {
    className: "h-display lx-h u-mt-24",
    style: {
      maxWidth: "13ch"
    }
  }, React.createElement("span", {
    className: "ln"
  }, React.createElement("span", null, "We represent")), React.createElement("span", {
    className: "ln"
  }, React.createElement("span", null, React.createElement("em", {
    className: "accent",
    style: {
      fontStyle: "italic"
    }
  }, "the owner.")))), React.createElement("div", {
    className: "grid-12 u-mt-40",
    style: {
      alignItems: "start"
    }
  }, React.createElement("div", {
    className: "col-7"
  }, React.createElement("p", {
    className: "lede",
    "data-hero-fade": true,
    style: {
      maxWidth: "50ch"
    }
  }, "A major project is won or lost in the management of it. Noesis is the owner\u2019s representative and development manager who carries that responsibility \u2014 protecting your vision, your capital and your timeline from the first study to the final handover.")), React.createElement("div", {
    className: "col-5"
  }, React.createElement("p", {
    className: "body-lg",
    "data-hero-fade": true
  }, "We are engaged by private owners, family offices and developers building landmark residential and commercial projects \u2014 people for whom the cost of getting it wrong far exceeds the cost of getting it right."))))), React.createElement("section", {
    className: "cine",
    style: {
      height: "min(74vh,720px)",
      minHeight: 440
    }
  }, React.createElement("img", {
    className: "cine__img",
    "data-parallax": "0.1",
    src: wix(PHOTO.stanley_int_2, {
      w: 2400
    }),
    alt: ""
  }), React.createElement("div", {
    className: "cine__grad"
  }), React.createElement("div", {
    className: "cine__cap"
  }, React.createElement("div", {
    className: "wrap",
    style: {
      paddingBottom: "clamp(32px,5vw,64px)"
    }
  }, React.createElement("h2", {
    className: "h-2",
    style: {
      color: "var(--bone)",
      maxWidth: "20ch"
    }
  }, "The only party at the table accountable for the ", React.createElement("em", {
    className: "italic",
    style: {
      color: "var(--bone)"
    }
  }, "whole."))))), React.createElement("section", {
    className: "section"
  }, React.createElement("div", {
    className: "wrap grid-12"
  }, React.createElement("div", {
    className: "col-4 reveal"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " The Mandate")), React.createElement("div", {
    className: "col-8 reveal delay-1"
  }, React.createElement("p", {
    className: "pull"
  }, "Most owners build once. Their architect, contractor and lender each protect their own interest. ", React.createElement("em", null, "We protect yours"), " \u2014 the only party at the table accountable for the whole.")))), React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 0,
      borderTop: 0
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "grid-12 u-end reveal"
  }, React.createElement("div", {
    className: "col-8"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " What We Do"), React.createElement("h2", {
    className: "h-1 u-mt-16 caps"
  }, "Capabilities under ", React.createElement("em", {
    className: "accent"
  }, "one roof."))), React.createElement("div", {
    className: "col-4"
  }, React.createElement("p", {
    className: "body-lg"
  }, "Engage the full platform, or the single discipline your project is missing. Either way, accountability sits with us."))), React.createElement("div", {
    className: "pillars u-mt-64 reveal"
  }, PILLARS.map(([n, t, d]) => React.createElement("div", {
    key: n,
    className: "pillar"
  }, React.createElement("div", {
    className: "pillar__top"
  }, React.createElement("span", {
    className: "kicker"
  }, n)), React.createElement("div", {
    className: "pillar__name"
  }, t), React.createElement("p", {
    className: "pillar__desc"
  }, d)))))), React.createElement("section", {
    className: "section section--ink"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "grid-12 u-end reveal"
  }, React.createElement("div", {
    className: "col-7"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " The Process"), React.createElement("h2", {
    className: "h-1 u-mt-16 caps",
    style: {
      color: "var(--bone)"
    }
  }, "From entitlement ", React.createElement("em", {
    className: "accent"
  }, "to delivery."))), React.createElement("div", {
    className: "col-5"
  }, React.createElement("p", {
    className: "body-lg"
  }, "A disciplined, gated path \u2014 each stage de-risking the next, with the owner informed and in control throughout."))), React.createElement("div", {
    className: "flow u-mt-64"
  }, FLOW.map(([n, t, d]) => React.createElement("div", {
    key: n,
    className: "flow__step"
  }, React.createElement("div", {
    className: "flow__num"
  }, n), React.createElement("div", {
    className: "flow__name"
  }, t), React.createElement("p", {
    className: "flow__desc"
  }, d)))))), React.createElement("section", {
    className: "section"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "reveal",
    style: {
      marginBottom: 48
    }
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Sectors"), React.createElement("h2", {
    className: "h-1 u-mt-16 caps"
  }, "Built for the ", React.createElement("em", {
    className: "accent"
  }, "complex few."))), React.createElement("div", {
    className: "grid-12 reveal",
    style: {
      gap: 32
    }
  }, React.createElement("div", {
    className: "col-6"
  }, React.createElement("div", {
    className: "sector"
  }, React.createElement("div", {
    className: "sector__img"
  }, React.createElement("img", {
    src: wix(PHOTO.genesee_int_4, {
      w: 1400
    }),
    alt: ""
  }), React.createElement("div", {
    className: "sector__grad"
  })), React.createElement("div", {
    className: "sector__body"
  }, React.createElement("div", {
    className: "sector__tag"
  }, "Luxury Residential"), React.createElement("div", {
    className: "sector__title"
  }, "Custom family estates, from $5M"), React.createElement("p", {
    className: "body u-mt-16",
    style: {
      maxWidth: "52ch"
    }
  }, "For principals building a primary residence or estate, we manage architects, interiors and craftsmen to an exacting standard \u2014 with the discretion ultra-prime work demands.")))), React.createElement("div", {
    className: "col-6"
  }, React.createElement("div", {
    className: "sector"
  }, React.createElement("div", {
    className: "sector__img"
  }, React.createElement("img", {
    src: wix(PHOTO.ying_int_6, {
      w: 1400
    }),
    alt: ""
  }), React.createElement("div", {
    className: "sector__grad"
  })), React.createElement("div", {
    className: "sector__body"
  }, React.createElement("div", {
    className: "sector__tag"
  }, "Commercial & Multifamily"), React.createElement("div", {
    className: "sector__title"
  }, "Owner\u2019s rep for large-scale projects"), React.createElement("p", {
    className: "body u-mt-16",
    style: {
      maxWidth: "52ch"
    }
  }, "For developers and institutions delivering major commercial and multifamily assets, we bring program discipline, cost certainty and a builder\u2019s judgment to every phase."))))))), React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 0,
      borderTop: 0
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "pair reveal"
  }, React.createElement("figure", null, React.createElement("img", {
    src: wix(PHOTO.stanley_wide, {
      w: 1800
    }),
    alt: "Stanley Lofts, West Hollywood",
    loading: "lazy"
  }), React.createElement("figcaption", null, "Stanley Lofts \u2014 West Hollywood")), React.createElement("figure", null, React.createElement("img", {
    src: wix(PHOTO.genesee_int_2, {
      w: 1200
    }),
    alt: "My Genesee, Beverly Grove",
    loading: "lazy"
  }), React.createElement("figcaption", null, "My Genesee \u2014 Beverly Grove"))))), React.createElement("section", {
    className: "section"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "grid-12 u-end reveal"
  }, React.createElement("div", {
    className: "col-8"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Why Noesis"), React.createElement("h2", {
    className: "h-1 u-mt-16 caps"
  }, "Advisors who have ", React.createElement("em", {
    className: "accent"
  }, "built.")))), React.createElement("div", {
    className: "rows u-mt-40"
  }, [["Operators, not observers", "We have designed, financed, built and sold luxury real estate ourselves. We manage your project with the judgment that only comes from having carried the risk."], ["Aligned, never conflicted", "We are paid to protect the owner — not to sell drawings, pour concrete or place a loan. Our only product is your outcome."], ["Vertically integrated", "Design, development, construction and capital live under one roof, so intent doesn't get lost in the handoffs between specialists."], ["Discreet by default", "We work quietly for private clients and family offices. Confidentiality is a condition of the work, not a courtesy."]].map(([t, d], i) => React.createElement("div", {
    key: t,
    className: "row reveal"
  }, React.createElement("div", {
    className: "row__idx"
  }, "0", i + 1), React.createElement("div", {
    className: "row__title"
  }, t), React.createElement("p", {
    className: "row__desc"
  }, d)))))), React.createElement("section", {
    className: "section section--ink"
  }, React.createElement("div", {
    className: "wrap grid-12 u-end"
  }, React.createElement("div", {
    className: "col-8"
  }, React.createElement("h2", {
    className: "h-1 caps",
    style: {
      color: "var(--bone)"
    }
  }, "Planning a project worth ", React.createElement("em", {
    className: "accent"
  }, "getting right?"))), React.createElement("div", {
    className: "col-4 u-tr"
  }, React.createElement("button", {
    className: "btn",
    onClick: () => setPage("contact")
  }, "Start a Conversation ", React.createElement("span", {
    className: "arr"
  }))))));
}
window.Services = Services;
const GAL = {
  "one-oak": ["5c383b_38f5ef1da26e4204b8e465e79f378f2e~mv2.jpg", "5c383b_338fba4cdcd845ccbfb911288478e8bc~mv2.jpg", "5c383b_6d4172cf48524e228ed8a2794b2a76a9~mv2.jpg", "5c383b_57dbe21d67d545458a9efcc900929f26~mv2.jpg", "5c383b_a8ab5be38572479d819d7829987a8901~mv2.jpg", "5c383b_413fa29f39a94acfb2d595791d1d777d~mv2.jpg", "5c383b_e7fa96e7c95b46f2921e31af34a46801~mv2.jpg", "5c383b_12fe95a979394c05baede9636975f3b2~mv2.jpg", "5c383b_4a952c0d18834339a123362069e97e82~mv2.jpg", "5c383b_3120130080e7438cacdfd14c39299b17~mv2.jpg"],
  "casa-mani": ["5c383b_a9f6aa50d3a44559aee6289afe36ebcf~mv2_d_6720_4480_s_4_2.jpg", "5c383b_88e3828f1ca0459ea909e745c3b79196~mv2_d_6720_4480_s_4_2.jpg", "5c383b_0e99a86ffe9847d5a712e0428605e4b0~mv2_d_6720_4480_s_4_2.jpg", "5c383b_f0a8d5cb5ea2484eb0f1e204f4c3aba4~mv2_d_6231_4154_s_4_2.jpg", "5c383b_0f02013ca50d40cea1580a1a7686f991~mv2_d_6365_4243_s_4_2.jpg", "5c383b_2ea4055dc65b4a3184a2e891f9ab3fa3~mv2_d_6720_4480_s_4_2.jpg", "5c383b_1bd88da82049431aa3e72fe8f597bbd1~mv2_d_6720_4480_s_4_2.jpg", "5c383b_2b1b5d11c30f423980cd76d0731ef7f1~mv2_d_6720_4480_s_4_2.jpg", "5c383b_d1c071eaa5c74ac69dbd755f2808c63c~mv2_d_5199_3466_s_4_2.jpg", "5c383b_6361166f13c445e28e73c9d4337dbccc~mv2_d_6720_4480_s_4_2.jpg"],
  "aura-house": ["5c383b_8be95aceeb054c139923461a4b0fa067~mv2_d_2674_1896_s_2.jpg", "5c383b_233b24a92a964f4f828b493dd4345cdb~mv2_d_2832_4256_s_4_2.jpg", "5c383b_23c2d9ef2cfb46768b1a436bc5c8dc7a~mv2_d_4256_2832_s_4_2.jpg", "5c383b_2f9f270caa1b44108f0ad800002c0656~mv2_d_4256_2832_s_4_2.jpg", "5c383b_2517ac00087f41ba96107d95afb62f1b~mv2_d_4300_4184_s_4_2.jpg", "5c383b_f994f94836154b328e49770f7eaf27b8~mv2_d_4256_2568_s_4_2.jpg", "5c383b_c7b31e8cfbbf4a9493ba56f42a7e4d51~mv2_d_2832_4256_s_4_2.jpg", "5c383b_a9894c3e37ed444c8f098fc8a8ca8ea0~mv2_d_4256_2832_s_4_2.jpg", "5c383b_32ae9e58eb064bfc9ab594c02b017184~mv2_d_4256_2832_s_4_2.jpg", "5c383b_b3baecffd6684ad0a6fb631ec04ef977~mv2_d_2832_4256_s_4_2.jpg"],
  "c-thru": ["5c383b_b3d670a8b83a486498fae278402120af~mv2.jpg", "5c383b_700ac76a8a7e4af88e42d48603f7c613~mv2.jpg", "5c383b_a74db35204cf4b14811acd06773e6c70~mv2_d_1788_1899_s_2.jpg", "5c383b_6a252e3b4d02449f8613778e14197209~mv2.jpg", "5c383b_c0b64552bc3b4599b053c6213af0c9aa~mv2.jpg", "5c383b_8b949f6a44fb4cdbb261f1da70825edd~mv2.jpg", "5c383b_e512c085d2864e718285d3f0bbca6c46~mv2_d_1800_1200_s_2.jpg", "5c383b_17a065f4eb4d479b863408b00b915311~mv2_d_1800_1200_s_2.jpg", "5c383b_2ad9da5386244e4ea246f1d14533f7c2~mv2_d_1800_1200_s_2.jpg", "5c383b_a2770133ea6e41cca23226810616cc45~mv2_d_1800_1200_s_2.jpg"],
  "lolivier": ["5c383b_fcb4f7079a5e443589c23a058a3a3b1b~mv2.jpg", "5c383b_257cefb780784aa0b63061a9ea2aa29b~mv2.jpg", "5c383b_939f492be96147f39b37b6b1d1530e65~mv2.jpg", "5c383b_46c560a6d94b4418bed1e9cf64c646ef~mv2.jpg", "5c383b_e8b518eee52f4d8a8c837e66e331af6e~mv2.jpg", "5c383b_3d31be3b7521442d871fce2ca5d5855e~mv2.jpg", "5c383b_0d870af7326f4875976ceb413368be2f~mv2.jpg", "5c383b_af281a68c16e4c3fb94b3620d3a07f4f~mv2.jpg", "5c383b_9e34a5d7774045339d373605ba356a0a~mv2.jpg", "5c383b_680d109689f24392bd1a4231d81cbde1~mv2.jpg"],
  "quiet-storm": ["5c383b_37553457927949b9b353ffd1e3210bb7~mv2_d_2560_1440_s_2.jpg", "5c383b_9418a6ed29454c48851aee4739a55be2~mv2_d_2560_1440_s_2.jpg", "5c383b_3ae9a87b8b524876875c807198fa21b8~mv2_d_2560_1440_s_2.jpg", "5c383b_0cc02cedcedb4dd6aa6066b64e8e4df0~mv2_d_2560_1440_s_2.jpg", "5c383b_be67b6b3cbf342d693e29ca18c1f75a2~mv2_d_2560_1440_s_2.jpg", "5c383b_c51caa97fd75492583fe21aaddac4227~mv2_d_2560_1440_s_2.jpg", "5c383b_865132670bcb422081f2de983b249617~mv2_d_2560_1440_s_2.jpg", "5c383b_d232464d64c140b9acd3747f147f6e2e~mv2_d_2560_1440_s_2.jpg"],
  "le-bijou": ["5c383b_597ed5a457654c23a1f2afb1a72b8bb8~mv2.jpg", "5c383b_7d56173da62a4c48b18feeadf3b26627~mv2_d_3300_2419_s_4_2.jpg", "5c383b_349ad261601f411282845fac17e4eae4~mv2.jpg", "5c383b_28d75206da854c4c8a20817a431a2f10~mv2.jpg", "5c383b_89aa2cae41af4a0088addcde739a8ee3~mv2.jpg", "5c383b_e3595dd2bd3146838fa75e4ac252ef64~mv2.jpg", "5c383b_1e3d7195fb844e22b60bc51bb63d37b6~mv2.jpg", "5c383b_399dfa72d94b49a49da788a0464b7fb2~mv2.jpg", "5c383b_2d3c5141a92d4ed5928e91b271511890~mv2.jpg", "5c383b_634f6b29507640c7ba1d65da1e1ea960~mv2.jpg"],
  "house-g": ["5c383b_d8b5e33dc63c4cd9af9019f54523ea3f~mv2_d_5730_5687_s_4_2.jpg", "5c383b_a01053afaaa447d08fc46a06820b54d3~mv2_d_5760_3840_s_4_2.jpg", "5c383b_f20bd004d85a4feaa6ad9de515346150~mv2_d_5760_3840_s_4_2.jpg", "5c383b_e1eb014ee84541d5a2840e03301b7c93~mv2_d_5702_3801_s_4_2.jpg", "5c383b_ee4c9dd7678b413199aec31fbe2ad1e5~mv2_d_5760_3840_s_4_2.jpg", "5c383b_3f60c4d3df6e4e20bf9d5c975be8186a~mv2_d_5760_3840_s_4_2.jpg", "5c383b_e58ecce85f154188919fee1be21a3af8~mv2_d_5760_3840_s_4_2.jpg", "5c383b_7d7133f381b945a7a28636247f8f20cb~mv2_d_5760_3840_s_4_2.jpg", "5c383b_6035f7a90846474aba0e922bf9c14ddb~mv2_d_5760_3840_s_4_2.jpg", "5c383b_89e20dfa5e3347caa173a8f72fa22ec4~mv2_d_5759_3837_s_4_2.jpg"],
  "casa-h": ["5c383b_6e48b6f978af4a6c852306e82defb5a2~mv2.jpg", "5c383b_79f27591c68641f5abacef5c5c9dc729~mv2.jpg", "5c383b_30e83f23d3044ced8c692784faf50290~mv2.jpg", "5c383b_82e37681f84745d8be140f15cac1a89c~mv2.jpg", "5c383b_a1245b0acc0945e1a3e431016253a778~mv2.jpg", "5c383b_7842f8bcba194ce0b2b8157e07b6cdbb~mv2.jpg", "5c383b_d343c06a29ba4689804f74eebcd8c122~mv2.jpg", "5c383b_288e8aff1dda4604b66c51f16efe6574~mv2.jpg", "5c383b_71fdd520a1814c11bdfbc9270b43911e~mv2.jpg"],
  "neo-soul": ["5c383b_0c990cf327cd4e00a23ea997cc8df0ef~mv2_d_2560_1440_s_2.jpg", "5c383b_0be22247dc024cbe9b736c08b85f597b~mv2_d_2560_1440_s_2.jpg", "5c383b_b074f44ae27c4ead96ac5fefeaf1f870~mv2_d_2560_1440_s_2.jpg", "5c383b_3e63015f82f24cc38079e19c9c142568~mv2_d_2560_1440_s_2.jpg", "5c383b_39c681a391904ba5bcb73ccb9aa4cfb7~mv2_d_2560_1440_s_2.jpg", "5c383b_b8f362fd5896441ea62dd7508420c932~mv2_d_2560_1441_s_2.jpg", "5c383b_64ef3275421d48cca6feb348d84a8274~mv2_d_2560_1441_s_2.jpg", "5c383b_8b5d8fc108104f899d80cc3dcd29262b~mv2_d_2560_1441_s_2.jpg", "5c383b_da67860cae17475c8f96fd39b6df4739~mv2_d_2560_1441_s_2.jpg"],
  "29degrees": ["5c383b_ee09bf9ac7d344dda676920c3bd36462~mv2_d_1800_1200_s_2.jpg", "5c383b_43422a7abb5d4d6496bff31ea257f79b~mv2.jpg", "5c383b_a1aa346c4601494082bbd3ac99be5707~mv2_d_1800_1200_s_2.jpg", "5c383b_1c44f1b7f6d14ceb8a181dc9b1583776~mv2_d_1800_1200_s_2.jpg", "5c383b_436ec028ad4c4bf8a0120a0b7928d91c~mv2.jpg", "5c383b_e6f1d2fd73ab4b0aaf7d26c067444274~mv2.jpg", "5c383b_d1c01ed73bf3495d91bcbbc66426e3e7~mv2_d_1800_1200_s_2.jpg", "5c383b_0685f94a8360485b8734c509d3fe9f49~mv2_d_1800_1200_s_2.jpg", "5c383b_383959ccae0c42a38ea2c942add8df1c~mv2_d_1800_1200_s_2.jpg", "5c383b_caa183bb58e5444286728d6388a1d8f0~mv2_d_1800_1200_s_2.jpg"],
  "en-suite": ["5c383b_e660755345994c8abf6b93a1bc2b6df9~mv2.jpg", "5c383b_e8c04611cec1445993842a289356a0a2~mv2.jpg", "5c383b_181567c37df5419baf12968bf36be13f~mv2.jpg", "5c383b_913ed2417e8d485f9f3bf54686e72f26~mv2.jpg", "5c383b_bfd14a73de9d40f28e829577d074296b~mv2.jpg", "5c383b_72f49837e80241dd8976007ae333b94c~mv2.jpg", "5c383b_9efd199eadcd4208af7acd6893c46792~mv2.jpg", "5c383b_ed7d76ee11804f7ba93fe72c331e9d6d~mv2.jpg", "5c383b_2d52734942534cc1b3d3619a6dca77f9~mv2.jpg", "5c383b_a031f0138d6045ca89b2bace6e383341~mv2.jpg"]
};
const APT = {
  ying: ["ying_ext_tall", "ying_wide", "ying_int_1", "ying_int_2", "ying_int_3", "ying_int_4", "ying_int_5", "ying_int_6", "ying_int_7"],
  stanley: ["stanley_ext_1", "stanley_ext_2", "stanley_wide", "stanley_wide_2", "stanley_int_1", "stanley_int_2", "stanley_int_3", "stanley_int_4", "stanley_int_5"],
  genesee: ["genesee_ext_tall", "genesee_wide", "genesee_int_1", "genesee_int_2", "genesee_int_3", "genesee_int_4", "genesee_int_5", "genesee_int_6", "genesee_int_7"]
};
const CATEGORIES = [{
  key: "sfr",
  label: "Single Family Residences",
  items: [{
    id: "one-oak",
    name: "One Oak",
    loc: "Sunset Strip, Los Angeles",
    year: "2015",
    gallery: GAL["one-oak"],
    text: "Perched on a private street above the Sunset Strip, One Oak is a two-story glass pavilion engineered for 180-degree views of downtown Los Angeles and the Pacific. Encased in glass, the open plan flows freely from room to room, framing the city at every turn.\n\nInside: the signature Noesis floating staircase, 12-foot ceilings, a 500-bottle wine cellar and a gourmet kitchen with top-of-the-line appliances. The expansive terrace opens to a true infinity-edge pool and spa. Four bedrooms, five baths, fully smart-home integrated.",
    facts: [["Bedrooms", "4"], ["Baths", "5"], ["Ceilings", "12 ft"], ["Built", "2015"]]
  }, {
    id: "casa-mani",
    name: "Casa Mani",
    loc: "Beverly Hills",
    year: "2018",
    gallery: GAL["casa-mani"],
    text: "A contemporary retreat in the heart of Beverly Hills, minutes from the area's acclaimed schools, shopping and dining — a study in style and restraint from the outside in.\n\nSix bedrooms and eight baths, a fully glass-enclosed gym, a spa-grade bath with steam shower and private massage room, and a backyard built around a zero-edge saltwater pool screened by mature hedging. Control4 smart-home throughout, with designer fixtures and energy-efficient landscape design completing the estate.",
    facts: [["Bedrooms", "6"], ["Baths", "8"], ["Pool", "Zero-edge saltwater"], ["Built", "2018"]]
  }, {
    id: "aura-house",
    name: "Aura House",
    loc: "Tel Aviv",
    year: "2017",
    gallery: GAL["aura-house"],
    text: "Set in one of Tel Aviv's most coveted neighborhoods, Aura House is an open, light-filled modern design that maximizes a tri-level, 4,500-square-foot footprint.\n\nA private elevator, soaring ceilings, six bedrooms and seven baths — designed, delivered and sold above asking in one of the world's fastest-rising cities. A demonstration of the Noesis standard, abroad.",
    facts: [["Bedrooms", "6"], ["Baths", "7"], ["Size", "4,500 sf"], ["Built", "2017"]]
  }, {
    id: "c-thru",
    name: "C Thru",
    loc: "Beverly Grove, Los Angeles",
    year: "2016",
    gallery: GAL["c-thru"],
    text: "In the heart of Beverly Grove, minutes from Melrose and West 3rd, C Thru reads as a floating box of wood and ceramic, wrapped in glass and LED light. Behind a custom pivot door: soaring ceilings, wide-plank white oak floors and a suspended steel-and-glass staircase.\n\nFleetwood walls of glass dissolve into an expansive courtyard, while sliding corner doors open the living spaces to a backyard built around a zero-edge saltwater pool. Control4 smart-home and designer finishes throughout.",
    facts: [["Neighborhood", "Beverly Grove"], ["Floors", "White oak"], ["Pool", "Zero-edge saltwater"], ["Built", "2016"]]
  }, {
    id: "lolivier",
    name: "L'Olivier House",
    loc: "Los Angeles",
    year: "2015",
    gallery: GAL["lolivier"],
    text: "A 120-year-old olive tree, framed behind two stories of glass, was the sole inspiration for L'Olivier — every decision made to preserve and celebrate it. The living heirloom anchors the home, in view from the gourmet kitchen and the light-filled living room.\n\nThe master suite is expansive and private, overlooking the pool, with a sitting area and oversized bath. Its painstaking tilework — a nod to Moroccan craft — is a statement of the Noesis commitment to design and detail.",
    facts: [["Inspiration", "120-yr olive tree"], ["Outdoor", "Pool"], ["City", "Los Angeles"], ["Built", "2015"]]
  }, {
    id: "quiet-storm",
    name: "Quiet Storm",
    loc: "Outpost Estates, Beverly Hills",
    year: "2018",
    gallery: GAL["quiet-storm"],
    text: "Once the estate of a music legend, this near-acre-and-a-half in coveted Outpost Estates was reimagined by Noesis as a two-parcel development — 2745 Outpost (33,567 sf) and 2755 Outpost (29,301 sf).\n\nTwo distinct contemporary residences, fully designed, with plans approved by the Mulholland Scenic Parkway Design Review Board and every building department — ready-to-issue permits in hand. Entitlement and delivery, de-risked.",
    facts: [["Area", "Outpost Estates"], ["Parcels", "Two · 33,567 + 29,301 sf"], ["Status", "RTIs in hand"], ["Year", "2018"]]
  }, {
    id: "le-bijou",
    name: "Le Bijou",
    loc: "Beverly Hills",
    year: "2015",
    gallery: GAL["le-bijou"],
    text: "Le Bijou — 'the jewel' — opens with a striking composition of wood, color and dimension that rewards a closer look. The sleek gourmet kitchen sits between the formal dining and family rooms, all overlooking a lush garden, terrace, pool and Jacuzzi.\n\nReceding pocket doors make seamless indoor-outdoor living real. The master suite adds a fireplace and a private balcony spanning the width of the home, with a floating dual vanity, freestanding tub and oversized shower — luxurious, elegant and entirely livable.",
    facts: [["Meaning", "“The Jewel”"], ["Outdoor", "Pool + Jacuzzi"], ["City", "Beverly Hills"], ["Built", "2015"]]
  }, {
    id: "house-g",
    name: "House G",
    loc: "Melrose, Los Angeles",
    year: "2016",
    gallery: GAL["house-g"],
    text: "Centrally located in the Melrose district, House G draws the outdoors in through towering windows and glass pocket doors that open to a private pool and spa. High ceilings give the nearly 3,900-square-foot plan real depth and scale.\n\nFive bedrooms and five full baths, minutes from West Hollywood's finest dining, nightlife and shops.",
    facts: [["Size", "~3,900 sf"], ["Bedrooms", "5"], ["Baths", "5"], ["City", "Los Angeles"]]
  }, {
    id: "casa-h",
    name: "Casa H",
    loc: "West Hollywood",
    year: "2013",
    gallery: GAL["casa-h"],
    text: "On the market just three days, Casa H broke neighborhood records — sold above asking on a homesite overlooking the Hollywood Hills.\n\nDesigned to maximize space and bring the outdoors in, the home uses sculptural cut-outs for light, privacy and serenity. The exterior centers on a pool and cabana; inside, five bedrooms and 5.5 baths, high-end finishes, and the floating staircase that has become a Noesis hallmark.",
    facts: [["Sold", "In 3 days, over ask"], ["Bedrooms", "5"], ["Baths", "5.5"], ["Built", "2013"]]
  }, {
    id: "neo-soul",
    name: "Neo Soul Home",
    loc: "Outpost Estates, Beverly Hills",
    year: "2018",
    gallery: GAL["neo-soul"],
    text: "A shovel-ready opportunity in celebrity-studded Outpost Estates: issued permits for a new two-story, nearly 6,000-square-foot architectural residence conceived by Noesis.\n\nThe existing single-story ranch — four bedrooms across roughly 3,400 square feet — has been remodeled to immaculate condition, leaving a rare, build-ready canvas in one of Los Angeles' most coveted enclaves.",
    facts: [["Area", "Outpost Estates"], ["Planned", "~6,000 sf"], ["Status", "Permits issued"], ["Year", "2018"]]
  }, {
    id: "29-degrees",
    name: "29 Degrees",
    loc: "Los Angeles",
    year: "2016",
    gallery: GAL["29degrees"],
    text: "A modern architectural retreat on a serene, tree-lined street, 29 Degrees is a newly constructed open-concept home by Noesis. Floor-to-ceiling Fleetwood vanishing doors erase the line between inside and out.\n\nThe oversized, spa-like master suite adds a fireplace, custom closet and private balcony; the gourmet kitchen offers dual islands and professional-grade appliances. Control4 smart-home throughout — minutes from Beverly Hills, The Grove and the Sunset Strip.",
    facts: [["Doors", "Fleetwood vanishing"], ["Tech", "Control4"], ["City", "Los Angeles"], ["Built", "2016"]]
  }, {
    id: "en-suite",
    name: "En-Suite",
    loc: "Los Angeles",
    year: "2014",
    gallery: GAL["en-suite"],
    text: "En-Suite is defined by flow — nearly 4,000 square feet in which every room and terrace was planned for both privacy and connection. The entrance sets the tone with a sculpted waterfall and fire feature.\n\nTwo full master suites anchor the four-bedroom, six-bath plan. Clean lines, modern texture and impeccably crafted built-ins run throughout, with a formal dining room, gourmet kitchen and indoor-outdoor living that opens onto pool-side patios and terraces.",
    facts: [["Size", "~4,000 sf"], ["Bedrooms", "4"], ["Baths", "6"], ["Built", "2014"]]
  }]
}, {
  key: "apt",
  label: "Apartment Buildings",
  items: [{
    id: "ying-yang-lofts",
    name: "Ying Yang Lofts",
    loc: "Los Angeles",
    year: "2019",
    gallery: APT.ying,
    cover: "ying_ext_tall",
    text: "Brand-new townhouse apartments designed and built by Noesis for the trendsetters, tastemakers and families who want to live and play in the heart of Los Angeles — culture, dining, entertainment and nightlife all within walking distance.\n\nEach two-bedroom, 2.5-bath unit with flex space carries Porcelanosa fixtures, Caesarstone counters and custom Miton Italian kitchens. Indoor-outdoor California living runs throughout — private grassed yards and rooftop decks with unobstructed city views — fully equipped with LG stainless appliances, full-size laundry and a two-car garage.",
    facts: [["Layout", "2 BD · 2.5 BA + flex"], ["Outdoor", "Yards + roof decks"], ["Parking", "2-car garage"], ["Built", "2019"]]
  }, {
    id: "stanley-lofts",
    name: "Stanley Lofts",
    loc: "West Hollywood, Los Angeles",
    year: "2018",
    gallery: APT.stanley,
    cover: "stanley_ext_1",
    text: "Built and designed by Noesis, these boutique townhouse apartments offer a glamorous lifestyle within walking distance of all West Hollywood has to offer — dining, entertainment and nightlife.\n\nFour luxurious townhomes, each three bedrooms and 2.5 baths, finished with Porcelanosa and Graff tile and fixtures, Caesarstone countertops and custom Miton Italian kitchens. Every unit comes fully equipped with LG stainless appliances, full-size laundry and two covered parking spaces.",
    facts: [["Units", "4 townhomes"], ["Layout", "3 BD · 2.5 BA"], ["Kitchens", "Miton Italian"], ["Parking", "2 covered"]]
  }, {
    id: "my-genesee",
    name: "My Genesee",
    loc: "Beverly Grove, Los Angeles",
    year: "2017",
    gallery: APT.genesee,
    cover: "genesee_ext_tall",
    text: "Luxury living in one of Los Angeles's most sought-after neighborhoods, Beverly Grove. Designed and built by Noesis, these one-of-a-kind three-bedroom, 2.5-bath condo-style apartments feature state-of-the-art Italian kitchens with Caesarstone countertops, new LG appliances, in-unit laundry and large custom walk-in closets.\n\nA four-unit, fully secured building with reserved parking in a fully equipped garage.",
    facts: [["Units", "4-unit building"], ["Layout", "3 BD · 2.5 BA"], ["Counters", "Caesarstone"], ["Parking", "Reserved garage"]]
  }]
}, {
  key: "sls",
  label: "Small-Lot Subdivisions",
  items: [{
    id: "casablanca-homes",
    name: "Casablanca Homes",
    loc: "Los Angeles",
    gallery: ["casablanca"],
    cover: "casablanca",
    text: "A small-lot subdivision delivering detached, fee-simple homes with the design language and finish level of the firm's luxury portfolio — letting buyers own new construction in dense, high-demand Los Angeles neighborhoods.",
    facts: [["Type", "Small-lot subdivision"], ["City", "Los Angeles"]]
  }, {
    id: "alexandria-homes",
    name: "Alexandria Homes",
    loc: "Los Angeles",
    gallery: ["alexandria"],
    cover: "alexandria",
    text: "Detached small-lot homes developed and built by Noesis, combining the privacy of single-family living with the efficiency and density of an infill subdivision.",
    facts: [["Type", "Small-lot subdivision"], ["City", "Los Angeles"]]
  }]
}];
function Projects({
  setPage
}) {
  const [tab, setTab] = React.useState("sfr");
  const [lb, setLb] = React.useState(null);
  const cat = CATEGORIES.find(c => c.key === tab);
  const feat = cat.items[0];
  const rest = cat.items.slice(1);
  const openLb = (p, i) => setLb({
    project: p,
    index: i || 0
  });
  return React.createElement("main", {
    className: "page-enter"
  }, React.createElement("section", {
    style: {
      paddingTop: "clamp(56px, 7vw, 96px)",
      paddingBottom: "clamp(28px, 4vw, 48px)"
    }
  }, React.createElement("div", {
    className: "wrap grid-12",
    style: {
      alignItems: "end"
    }
  }, React.createElement("div", {
    className: "col-8"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Properties \xB7 2009 \u2014 Present"), React.createElement("h1", {
    className: "h-display lx-h u-mt-24"
  }, React.createElement("span", {
    className: "ln"
  }, React.createElement("span", null, "Properties")))), React.createElement("div", {
    className: "col-4"
  }, React.createElement("p", {
    className: "lede"
  }, "Luxury residences and buildings designed, developed and delivered by the Noesis team \u2014 the operating record behind the way we manage projects for clients today.")))), React.createElement("section", {
    className: "section--tight",
    style: {
      borderTop: "1px solid var(--rule)",
      borderBottom: "1px solid var(--rule)",
      position: "sticky",
      top: 64,
      zIndex: 20,
      background: "color-mix(in oklab, var(--bone) 88%, transparent)",
      backdropFilter: "blur(12px)",
      paddingTop: 22,
      paddingBottom: 22
    }
  }, React.createElement("div", {
    className: "wrap u-flex u-between u-center",
    style: {
      flexWrap: "wrap",
      gap: 16
    }
  }, React.createElement("div", {
    className: "u-flex u-gap-12",
    style: {
      flexWrap: "wrap"
    }
  }, CATEGORIES.map(c => React.createElement("button", {
    key: c.key,
    onClick: () => setTab(c.key),
    className: `chip ${tab === c.key ? "chip--active" : ""}`,
    style: {
      border: 0
    }
  }, c.label, " ", React.createElement("span", {
    style: {
      opacity: 0.6
    }
  }, "\xB7 ", c.items.length)))), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, cat.items.length, " projects"))), React.createElement("section", {
    className: "section",
    style: {
      paddingBottom: "clamp(36px, 4.5vw, 64px)"
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 28
    }
  }, React.createElement("span", {
    className: "dot"
  }), " Featured \xB7 ", cat.label), React.createElement("div", {
    className: "pfeat"
  }, React.createElement("div", {
    className: "pfeat__media",
    onClick: () => openLb(feat, 0)
  }, React.createElement("img", {
    src: wix(feat.cover || feat.gallery[0], {
      w: 1900
    }),
    alt: feat.name
  }), feat.gallery.length > 1 && React.createElement("div", {
    className: "pfeat__badge"
  }, feat.gallery.length, " Photos")), React.createElement("div", null, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, feat.loc, feat.year ? ` · ${feat.year}` : ""), React.createElement("h2", {
    className: "h-2 u-mt-8",
    style: {
      textTransform: "none"
    }
  }, feat.name), React.createElement("div", {
    className: "pfeat__facts"
  }, feat.facts.slice(0, 4).map(([k, v]) => React.createElement("div", {
    className: "pfeat__fact",
    key: k
  }, React.createElement("div", {
    className: "k"
  }, k), React.createElement("div", {
    className: "v"
  }, v)))), React.createElement("p", {
    className: "body-lg",
    style: {
      maxWidth: "54ch"
    }
  }, feat.text.split("\n\n")[0]), React.createElement("button", {
    className: "btn u-mt-40",
    onClick: () => openLb(feat, 0)
  }, "Browse the Gallery ", React.createElement("span", {
    className: "arr"
  })))))), React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 0,
      borderTop: 0
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: `pgrid ${cat.key === "sfr" ? "pgrid--3" : "pgrid--2"}`
  }, rest.map(p => {
    const cover = p.cover || p.gallery[0];
    const count = p.gallery.length;
    return React.createElement("article", {
      key: p.id,
      className: "pcard",
      onClick: () => openLb(p, 0)
    }, React.createElement("div", {
      className: "pcard__media"
    }, React.createElement("img", {
      className: "pcard__img",
      src: wix(cover, {
        w: 1100
      }),
      alt: p.name,
      loading: "lazy"
    }), React.createElement("div", {
      className: "pcard__over"
    }, count > 1 && React.createElement("span", {
      className: "pcard__count"
    }, count, " Photos"), React.createElement("span", {
      className: "pcard__cta"
    }, "View Gallery ", React.createElement("span", {
      className: "arr"
    })))), React.createElement("div", {
      className: "pcard__cap"
    }, React.createElement("div", null, React.createElement("div", {
      className: "pcard__name"
    }, p.name), React.createElement("div", {
      className: "pcard__loc"
    }, p.loc)), p.year && React.createElement("div", {
      className: "pcard__yr"
    }, p.year)));
  })))), React.createElement("section", {
    className: "section section--ink"
  }, React.createElement("div", {
    className: "wrap grid-12 u-end"
  }, React.createElement("div", {
    className: "col-8"
  }, React.createElement("h2", {
    className: "h-1 caps",
    style: {
      color: "var(--bone)"
    }
  }, "Want this standard on ", React.createElement("em", {
    className: "accent"
  }, "your project?"))), React.createElement("div", {
    className: "col-4 u-tr"
  }, React.createElement("button", {
    className: "btn",
    onClick: () => setPage("services")
  }, "Explore Services ", React.createElement("span", {
    className: "arr"
  }))))), lb && React.createElement(Lightbox, {
    project: lb.project,
    start: lb.index,
    onClose: () => setLb(null)
  }));
}
function Lightbox({
  project,
  start,
  onClose
}) {
  const imgs = project.gallery;
  const [i, setI] = React.useState(start || 0);
  const [open, setOpen] = React.useState(false);
  const go = React.useCallback(d => setI(p => (p + d + imgs.length) % imgs.length), [imgs.length]);
  const multi = imgs.length > 1;
  React.useEffect(() => {
    setOpen(true);
    document.body.style.overflow = "hidden";
    const lenis = window.__motion && window.__motion.lenis;
    if (lenis && lenis.stop) lenis.stop();
    const onKey = e => {
      if (e.key === "Escape") onClose();else if (e.key === "ArrowRight") go(1);else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      if (lenis && lenis.start) lenis.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [go, onClose]);
  React.useEffect(() => {
    if (imgs.length < 2) return;
    [1, -1].forEach(d => {
      const k = (i + d + imgs.length) % imgs.length;
      const pre = new Image();
      pre.src = wix(imgs[k], {
        w: 2000
      });
    });
  }, [i, imgs]);
  const pad = n => n < 10 ? "0" + n : "" + n;
  const lede = project.text.split("\n\n")[0];
  const onBackdrop = e => {
    if (e.target.classList.contains("lb__stage") || e.target.classList.contains("lb")) onClose();
  };
  return React.createElement("div", {
    className: `lb ${open ? "is-open" : ""}`,
    onClick: onBackdrop,
    role: "dialog",
    "aria-label": `${project.name} gallery`
  }, React.createElement("div", {
    className: "lb__head"
  }, React.createElement("div", null, React.createElement("div", {
    className: "lb__title"
  }, project.name), React.createElement("div", {
    className: "lb__sub"
  }, project.loc, project.year ? ` · ${project.year}` : "")), React.createElement("div", {
    className: "lb__headR"
  }, multi && React.createElement("div", {
    className: "lb__count"
  }, React.createElement("b", null, pad(i + 1)), " \xA0/\xA0 ", pad(imgs.length)), React.createElement("button", {
    className: "lb__close",
    onClick: onClose,
    "aria-label": "Close gallery"
  }, React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }, React.createElement("path", {
    d: "M2 2l12 12M14 2L2 14"
  }))))), React.createElement("div", {
    className: "lb__stage"
  }, multi && React.createElement("button", {
    className: "lb__arrow lb__arrow--prev",
    onClick: () => go(-1),
    "aria-label": "Previous photo"
  }, React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.3"
  }, React.createElement("path", {
    d: "M14 3 L6 11 l8 8"
  }))), React.createElement("img", {
    className: "lb__img",
    key: i,
    src: wix(imgs[i], {
      w: 2000
    }),
    alt: `${project.name} — photograph ${i + 1}`
  }), multi && React.createElement("button", {
    className: "lb__arrow lb__arrow--next",
    onClick: () => go(1),
    "aria-label": "Next photo"
  }, React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.3"
  }, React.createElement("path", {
    d: "M8 3 l8 8 l-8 8"
  })))), lede && React.createElement("div", {
    className: "lb__caption"
  }, lede), multi && React.createElement("div", {
    className: "lb__rail"
  }, imgs.map((im, k) => React.createElement("img", {
    key: im,
    className: `lb__thumb ${k === i ? "is-active" : ""}`,
    src: wix(im, {
      w: 220
    }),
    alt: `Thumbnail ${k + 1}`,
    onClick: () => setI(k)
  }))));
}
window.Projects = Projects;
const STRATEGIES = [{
  n: "01",
  term: "Opportunistic",
  hold: "2–3 Years",
  img: "stanley_ext_2",
  points: ["Acquisition & ground-up development", "Residential & small-lot subdivisions", "Value created through entitlement & delivery", "Typically realized via for-sale exit"]
}, {
  n: "02",
  term: "Value-Add",
  hold: "7–10 Years",
  img: "ying_int_6",
  points: ["Apartment buildings & commercial assets", "Leasing, capital improvement, repositioning", "Cash flow during the hold", "Realized at stabilization or sale"]
}, {
  n: "03",
  term: "Stabilized",
  hold: "Long-Term",
  img: "genesee_wide",
  points: ["Income-producing, stabilized assets", "Long-term hold & wealth preservation", "Tax-efficient, cash-flow focused", "Designed for durability over cycles"]
}];
const PRINCIPLES = [["Alignment first", "The operator co-invests. We earn when our partners earn — risk is shared, not transferred."], ["Design-led value", "Returns are created by building things well, in the right place, at the right basis — not by financial engineering."], ["Disciplined basis", "We underwrite conservatively and walk away often. The price of entry determines the margin of safety."], ["Hands-on stewardship", "We manage what we own — through the full cycle, in person, with the same rigor we bring to clients' projects."]];
function Investment({
  setPage
}) {
  return React.createElement("main", {
    className: "page-enter"
  }, React.createElement("section", {
    style: {
      paddingTop: "clamp(48px,9vh,120px)",
      paddingBottom: "clamp(40px,6vw,80px)",
      borderTop: 0
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Investment \xB7 For Capital Partners"), React.createElement("h1", {
    className: "h-display lx-h u-mt-24",
    style: {
      maxWidth: "12ch"
    }
  }, React.createElement("span", {
    className: "ln"
  }, React.createElement("span", null, "Capital,")), React.createElement("span", {
    className: "ln"
  }, React.createElement("span", null, React.createElement("em", {
    className: "accent",
    style: {
      fontStyle: "italic"
    }
  }, "aligned.")))), React.createElement("div", {
    className: "grid-12 u-mt-40",
    style: {
      alignItems: "start"
    }
  }, React.createElement("div", {
    className: "col-7"
  }, React.createElement("p", {
    className: "lede",
    "data-hero-fade": true,
    style: {
      maxWidth: "50ch"
    }
  }, "Noesis originates, structures and stewards real estate investments for an aligned network of private capital \u2014 family offices, principals and institutions who value a disciplined, design-led operator with skin in the game.")), React.createElement("div", {
    className: "col-5"
  }, React.createElement("p", {
    className: "body-lg",
    "data-hero-fade": true
  }, "We do not publish live offerings. Opportunities are shared privately, with qualified partners, when the basis and the business plan merit it. What we publish here is how we think."))))), React.createElement("section", {
    className: "cine",
    style: {
      height: "min(72vh,700px)",
      minHeight: 420
    }
  }, React.createElement("img", {
    className: "cine__img",
    "data-parallax": "0.1",
    src: wix(PHOTO.genesee_int_1, {
      w: 2400
    }),
    alt: ""
  }), React.createElement("div", {
    className: "cine__grad"
  }), React.createElement("div", {
    className: "cine__cap"
  }, React.createElement("div", {
    className: "wrap",
    style: {
      paddingBottom: "clamp(32px,5vw,64px)"
    }
  }, React.createElement("h2", {
    className: "h-2",
    style: {
      color: "var(--bone)",
      maxWidth: "22ch"
    }
  }, "The operator, invested ", React.createElement("em", {
    className: "italic",
    style: {
      color: "var(--bone)"
    }
  }, "alongside the capital."))))), React.createElement("section", {
    className: "section"
  }, React.createElement("div", {
    className: "wrap grid-12"
  }, React.createElement("div", {
    className: "col-4 reveal"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Philosophy")), React.createElement("div", {
    className: "col-8 reveal delay-1"
  }, React.createElement("p", {
    className: "pull"
  }, "The best risk-adjusted returns in real estate come from ", React.createElement("em", null, "building the right thing well"), "\u2014 not from leverage or optimism. We invest where our development edge creates the value.")))), React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 0,
      borderTop: 0
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "reveal"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Strategies"), React.createElement("h2", {
    className: "h-1 u-mt-16 caps"
  }, "Three ways we ", React.createElement("em", {
    className: "accent"
  }, "build value."))), React.createElement("div", {
    className: "grid-12 u-mt-64 reveal",
    style: {
      gap: 32
    }
  }, STRATEGIES.map(s => React.createElement("div", {
    key: s.n,
    className: "col-4",
    style: {
      border: "1px solid var(--rule)",
      background: "var(--paper)",
      display: "flex",
      flexDirection: "column"
    }
  }, React.createElement("div", {
    style: {
      aspectRatio: "4/3",
      overflow: "hidden",
      background: "var(--ink)",
      position: "relative"
    }
  }, React.createElement("img", {
    src: wix(PHOTO[s.img], {
      w: 1000
    }),
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), React.createElement("div", {
    className: "thumb__label"
  }, s.term)), React.createElement("div", {
    style: {
      padding: "28px 28px 32px",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      flex: 1
    }
  }, React.createElement("div", {
    className: "u-flex u-between u-end"
  }, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 12,
      color: "var(--accent)",
      letterSpacing: ".14em"
    }
  }, s.n), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      color: "var(--muted)",
      letterSpacing: ".1em",
      textTransform: "uppercase"
    }
  }, s.hold)), React.createElement("div", {
    className: "serif caps",
    style: {
      fontSize: 34,
      lineHeight: 1,
      letterSpacing: "-.01em"
    }
  }, s.term), React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, s.points.map((p, i) => React.createElement("li", {
    key: i,
    className: "body",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "baseline"
    }
  }, React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      background: "var(--accent)",
      borderRadius: 50,
      flex: "0 0 5px",
      transform: "translateY(-2px)"
    }
  }), React.createElement("span", null, p)))))))))), React.createElement("section", {
    className: "section section--ink"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "grid-12 u-end reveal"
  }, React.createElement("div", {
    className: "col-8"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " How We Invest"), React.createElement("h2", {
    className: "h-1 u-mt-16 caps",
    style: {
      color: "var(--bone)"
    }
  }, "Principles that ", React.createElement("em", {
    className: "accent"
  }, "don\u2019t bend.")))), React.createElement("div", {
    className: "rows u-mt-40"
  }, PRINCIPLES.map(([t, d], i) => React.createElement("div", {
    key: t,
    className: "row reveal"
  }, React.createElement("div", {
    className: "row__idx"
  }, "0", i + 1), React.createElement("div", {
    className: "row__title"
  }, t), React.createElement("p", {
    className: "row__desc"
  }, d)))))), React.createElement("section", {
    className: "cine",
    style: {
      height: "min(52vh, 520px)",
      minHeight: 340
    }
  }, React.createElement("img", {
    className: "cine__img",
    "data-parallax": "0.1",
    src: wix(PHOTO.ying_int_2, {
      w: 2400
    }),
    alt: ""
  }), React.createElement("div", {
    className: "cine__grad"
  })), React.createElement("section", {
    className: "section"
  }, React.createElement("div", {
    className: "wrap grid-12"
  }, React.createElement("div", {
    className: "col-4 reveal"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " The Network"), React.createElement("h2", {
    className: "h-2 u-mt-16"
  }, "An aligned circle of ", React.createElement("em", {
    className: "accent"
  }, "private capital."))), React.createElement("div", {
    className: "col-8 reveal delay-1"
  }, React.createElement("p", {
    className: "lede"
  }, "Most of what we do is never advertised. Our investors are a relationship-led network \u2014 partners who have come to know how we underwrite, how we build, and how we treat capital."), React.createElement("p", {
    className: "body-lg u-mt-24",
    style: {
      maxWidth: "64ch"
    }
  }, "When an opportunity meets our standard, we bring it to that network privately. If you are a qualified or accredited investor and would like to be considered for future opportunities, we welcome a confidential introduction \u2014 no obligation, and no live offering implied."), React.createElement("button", {
    onClick: () => setPage("contact"),
    className: "btn u-mt-40"
  }, "Request an Introduction ", React.createElement("span", {
    className: "arr"
  }))))), React.createElement("section", {
    className: "section section--ink"
  }, React.createElement("div", {
    className: "wrap u-tc",
    style: {
      maxWidth: 880,
      marginInline: "auto"
    }
  }, React.createElement("h2", {
    className: "h-1 caps",
    style: {
      color: "var(--bone)"
    }
  }, "Interested in how we put ", React.createElement("em", {
    className: "accent"
  }, "capital to work?")), React.createElement("p", {
    className: "lede u-mt-24",
    style: {
      marginInline: "auto"
    }
  }, "Start a confidential conversation with our investment team."), React.createElement("button", {
    onClick: () => setPage("contact"),
    className: "btn u-mt-40",
    style: {
      marginInline: "auto"
    }
  }, "Contact Us ", React.createElement("span", {
    className: "arr"
  })))));
}
window.Investment = Investment;
function About({
  setPage
}) {
  return React.createElement("main", {
    className: "page-enter"
  }, React.createElement("section", {
    style: {
      paddingTop: "clamp(48px,9vh,120px)",
      paddingBottom: "clamp(40px,6vw,80px)",
      borderTop: 0
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " About \xB7 Est. 2009 \xB7 Beverly Hills \xB7 International"), React.createElement("h1", {
    className: "h-display lx-h u-mt-24",
    style: {
      maxWidth: "11ch"
    }
  }, React.createElement("span", {
    className: "ln"
  }, React.createElement("span", null, "Perception by")), React.createElement("span", {
    className: "ln"
  }, React.createElement("span", null, React.createElement("em", {
    className: "accent",
    style: {
      fontStyle: "italic"
    }
  }, "intellect.")))))), React.createElement("section", {
    className: "cine",
    style: {
      height: "min(74vh,720px)",
      minHeight: 440
    }
  }, React.createElement("img", {
    className: "cine__img",
    "data-parallax": "0.1",
    src: wix(PHOTO.genesee_int_4, {
      w: 2400
    }),
    alt: "",
    style: {
      objectPosition: "center 45%"
    }
  }), React.createElement("div", {
    className: "cine__grad"
  })), React.createElement("section", {
    className: "section"
  }, React.createElement("div", {
    className: "wrap grid-12"
  }, React.createElement("div", {
    className: "col-4 reveal"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Who We Are")), React.createElement("div", {
    className: "col-8 reveal delay-1"
  }, React.createElement("p", {
    className: "pull"
  }, React.createElement("em", null, "Noesis"), " \u2014 perception by intellect. We are an international development management and investment firm, founded in 2009 and based in Beverly Hills, that represents owners and capital partners on projects where the stakes, and the standards, are high.")))), React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 0,
      borderTop: 0
    }
  }, React.createElement("div", {
    className: "wrap grid-12"
  }, React.createElement("div", {
    className: "col-4 reveal"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " The Firm"), React.createElement("h2", {
    className: "h-2 u-mt-16"
  }, "From builder to ", React.createElement("em", {
    className: "accent"
  }, "owner\u2019s advisor."))), React.createElement("div", {
    className: "col-8 reveal delay-1"
  }, React.createElement("p", {
    className: "lede"
  }, "We began as designers and developers of luxury real estate \u2014 conceiving, financing, building and selling residences and buildings across Southern California and abroad."), React.createElement("p", {
    className: "body-lg u-mt-24",
    style: {
      maxWidth: "64ch"
    }
  }, "That operating experience is now in service of our clients. As owner\u2019s representative and development manager, we bring a builder\u2019s judgment to the owner\u2019s side of the table \u2014 and, for aligned partners, we invest our own conviction and capital alongside theirs. From Beverly Hills to international markets, the mandate is the same: protect the vision, the capital and the timeline, and deliver.")))), React.createElement("section", {
    className: "section"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "reveal"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " What We Value"), React.createElement("h2", {
    className: "h-1 u-mt-16 caps"
  }, "How we ", React.createElement("em", {
    className: "accent"
  }, "work."))), React.createElement("div", {
    className: "rows u-mt-40"
  }, [["Alignment", "We succeed when our clients and partners do. We take the owner's side, and we put our own capital and reputation behind our convictions."], ["Discretion", "We work quietly for private clients, principals and family offices. Confidentiality is built into the engagement."], ["Stewardship", "We treat every project and every dollar of capital as if it were our own — because, often, it is."], ["Craft", "An obsession with how things are made. The difference between built and realized lives in the details we refuse to compromise."]].map(([t, d], i) => React.createElement("div", {
    key: t,
    className: "row reveal"
  }, React.createElement("div", {
    className: "row__idx"
  }, "0", i + 1), React.createElement("div", {
    className: "row__title"
  }, t), React.createElement("p", {
    className: "row__desc"
  }, d)))))), React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 0,
      borderTop: 0
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "pair reveal"
  }, React.createElement("figure", null, React.createElement("img", {
    src: wix(PHOTO.ying_int_3, {
      w: 1400
    }),
    alt: "Ying Yang Lofts, Los Angeles",
    loading: "lazy"
  }), React.createElement("figcaption", null, "Ying Yang Lofts \u2014 Los Angeles")), React.createElement("figure", null, React.createElement("img", {
    src: wix(PHOTO.stanley_int_4, {
      w: 1200
    }),
    alt: "Stanley Lofts, West Hollywood",
    loading: "lazy"
  }), React.createElement("figcaption", null, "Stanley Lofts \u2014 West Hollywood"))))), React.createElement("section", {
    className: "section",
    style: {
      background: "var(--bone-2)"
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "reveal",
    style: {
      marginBottom: 48
    }
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Founder"), React.createElement("h2", {
    className: "h-1 u-mt-16 caps"
  }, "The principal behind ", React.createElement("em", {
    className: "accent"
  }, "Noesis."))), React.createElement("div", {
    className: "grid-12 reveal",
    style: {
      gap: 48,
      alignItems: "start"
    }
  }, React.createElement("div", {
    className: "col-5"
  }, React.createElement("div", {
    className: "thumb",
    style: {
      aspectRatio: "4/5",
      overflow: "hidden",
      background: "var(--bone-3)"
    }
  }, React.createElement("img", {
    src: wix(PHOTO.igal, {
      w: 1100
    }),
    alt: "Igal N. Azran",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "grayscale(1) contrast(1.02)",
      transition: "filter .5s"
    },
    onMouseEnter: e => e.currentTarget.style.filter = "grayscale(0)",
    onMouseLeave: e => e.currentTarget.style.filter = "grayscale(1) contrast(1.02)"
  })), React.createElement("div", {
    className: "serif u-mt-24",
    style: {
      fontSize: 32,
      letterSpacing: "-.01em",
      lineHeight: 1.05
    }
  }, "Igal N. Azran"), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--accent)",
      marginTop: 8
    }
  }, "Founder & Principal"), React.createElement("div", {
    style: {
      borderTop: "1px solid var(--rule)",
      marginTop: 22,
      paddingTop: 18
    }
  }, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, "Previously \xB7 CIM Group \xB7 CBRE \xB7 STMC"), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--muted)",
      marginTop: 8
    }
  }, "MSc \xB7 Real Estate"))), React.createElement("div", {
    className: "col-7"
  }, React.createElement("p", {
    className: "lede"
  }, "Igal N. Azran founded Noesis in 2009 and has led its design, development and investment work ever since. Born in Morocco and raised between France, Spain and Israel, he brings a genuinely international perspective \u2014 and a builder\u2019s discipline \u2014 to every engagement the firm takes on."), React.createElement("p", {
    className: "body-lg u-mt-24",
    style: {
      maxWidth: "64ch"
    }
  }, "Before Noesis, Igal was an associate at CIM Group, the Los Angeles real-estate private-equity and development firm, where he worked on institutional investment and development transactions. Earlier, as a project manager for CBRE in Morocco, he delivered a 24-unit luxury condominium 22 days ahead of schedule and 12% under budget; in Los Angeles, he managed a $75 million construction budget for the L.A. Fashion Center, coordinating trades, architects and engineers through to completion."), React.createElement("p", {
    className: "body-lg u-mt-24",
    style: {
      maxWidth: "64ch"
    }
  }, "Today he leads the firm\u2019s owner\u2019s-representation and development-management practice and originates its investments \u2014 maintaining the relationships with domestic and international capital partners that sit behind every mandate. He holds a Master\u2019s degree in Real Estate."))))), React.createElement("section", {
    className: "section section--ink"
  }, React.createElement("div", {
    className: "wrap grid-12 u-end"
  }, React.createElement("div", {
    className: "col-8"
  }, React.createElement("h2", {
    className: "h-1 caps",
    style: {
      color: "var(--bone)"
    }
  }, "Let's build something ", React.createElement("em", {
    className: "accent"
  }, "exceptional."))), React.createElement("div", {
    className: "col-4 u-tr"
  }, React.createElement("button", {
    className: "btn",
    onClick: () => setPage("contact")
  }, "Contact Us ", React.createElement("span", {
    className: "arr"
  }))))));
}
window.About = About;
function Contact({
  setPage
}) {
  const [sent, setSent] = React.useState(false);
  return React.createElement("main", {
    className: "page-enter"
  }, React.createElement("section", {
    style: {
      paddingTop: "clamp(56px, 7vw, 100px)"
    }
  }, React.createElement("div", {
    className: "wrap grid-12",
    style: {
      alignItems: "end"
    }
  }, React.createElement("div", {
    className: "col-8"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Contact Us"), React.createElement("h1", {
    className: "h-display lx-h u-mt-24"
  }, React.createElement("span", {
    className: "ln"
  }, React.createElement("span", null, "Let's ", React.createElement("em", {
    className: "accent",
    style: {
      fontStyle: "italic"
    }
  }, "talk."))))), React.createElement("div", {
    className: "col-4"
  }, React.createElement("p", {
    className: "lede"
  }, "Whether you have a project to deliver or capital to deploy, we'd welcome a confidential conversation. A member of our team responds within one business day."), React.createElement("p", {
    className: "body u-mt-16",
    style: {
      color: "var(--muted)"
    }
  }, "Every enquiry is reviewed personally by our principal. Confidentiality from first contact.")))), React.createElement("section", {
    className: "section"
  }, React.createElement("div", {
    className: "wrap grid-12",
    style: {
      gap: 56
    }
  }, React.createElement("div", {
    className: "col-4"
  }, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: ".12em",
      color: "var(--muted)",
      textTransform: "uppercase"
    }
  }, "Office"), React.createElement("div", {
    className: "serif u-mt-8",
    style: {
      fontSize: 22
    }
  }, "8383 Wilshire Blvd", React.createElement("br", null), "Suite 740", React.createElement("br", null), "Beverly Hills, CA 90211"), React.createElement("div", {
    className: "u-mt-40"
  }, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: ".12em",
      color: "var(--muted)",
      textTransform: "uppercase"
    }
  }, "Telephone"), React.createElement("a", {
    href: "tel:+13108553634",
    className: "serif u-mt-8",
    style: {
      fontSize: 22,
      display: "block"
    }
  }, "T (310) 855 \xB7 3634"), React.createElement("div", {
    className: "body",
    style: {
      color: "var(--muted)"
    }
  }, "F (424) 282 \xB7 8414")), React.createElement("div", {
    className: "u-mt-40"
  }, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: ".12em",
      color: "var(--muted)",
      textTransform: "uppercase"
    }
  }, "Email"), React.createElement("a", {
    href: "mailto:info@noesisusa.com",
    className: "serif u-mt-8",
    style: {
      fontSize: 22,
      display: "block"
    }
  }, "INFO@NOESISUSA.COM")), React.createElement("div", {
    className: "u-mt-40",
    style: {
      borderTop: "1px solid var(--rule)",
      paddingTop: 28
    }
  }, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: ".12em",
      color: "var(--muted)",
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, "Follow"), React.createElement(SocialRow, {
    size: 20
  }))), React.createElement("div", {
    className: "col-8"
  }, React.createElement("div", {
    style: {
      background: "var(--paper)",
      border: "1px solid var(--rule)",
      padding: "clamp(28px, 4vw, 48px)"
    }
  }, sent ? React.createElement("div", {
    style: {
      padding: "60px 0",
      textAlign: "center"
    }
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Sent"), React.createElement("h2", {
    className: "h-1 u-mt-24 caps"
  }, "Thank you."), React.createElement("p", {
    className: "lede u-mt-24"
  }, "We've received your message and will respond within one business day."), React.createElement("button", {
    className: "btn btn--ghost u-mt-40",
    onClick: () => setSent(false)
  }, "Send another")) : React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Send a message"), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "28px 24px",
      marginTop: 32
    }
  }, React.createElement("div", {
    className: "field"
  }, React.createElement("label", null, "Name"), React.createElement("input", {
    type: "text",
    placeholder: "Your name",
    required: true
  })), React.createElement("div", {
    className: "field"
  }, React.createElement("label", null, "Email"), React.createElement("input", {
    type: "email",
    placeholder: "you@email.com",
    required: true
  })), React.createElement("div", {
    className: "field"
  }, React.createElement("label", null, "Location"), React.createElement("input", {
    type: "text",
    placeholder: "City / country"
  })), React.createElement("div", {
    className: "field"
  }, React.createElement("label", null, "I'm reaching out as"), React.createElement("select", {
    defaultValue: ""
  }, React.createElement("option", {
    value: "",
    disabled: true
  }, "Select one"), React.createElement("option", null, "Owner / Principal \u2014 a project to deliver"), React.createElement("option", null, "Developer \u2014 owner's rep / project management"), React.createElement("option", null, "Investor \u2014 capital partnership"), React.createElement("option", null, "Other"))), React.createElement("div", {
    className: "field",
    style: {
      gridColumn: "1 / -1"
    }
  }, React.createElement("label", null, "Message"), React.createElement("textarea", {
    rows: "6",
    placeholder: "Tell us about your project, or your interest in investing.",
    required: true
  }))), React.createElement("div", {
    className: "u-mt-40 u-flex u-between u-center",
    style: {
      flexWrap: "wrap",
      gap: 16
    }
  }, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: ".06em",
      color: "var(--muted)"
    }
  }, "INFO@NOESISUSA.COM \xB7 T (310) 855\xB73634"), React.createElement("button", {
    type: "submit",
    className: "btn"
  }, "Send ", React.createElement("span", {
    className: "arr"
  })))))))));
}
window.Contact = Contact;
const TWEAK_DEFAULTS = {
  "accent": "#6E1F1F",
  "displayFont": "Fraunces"
};
const ACCENTS = ["#6E1F1F", "#7A2E22", "#3A4A3A", "#8A6A3A", "#16140E"];
const DISPLAY_FONTS = ["Fraunces", "Georgia", "Times New Roman"];
const PAGES = ["home", "services", "investment", "projects", "about", "contact"];
function App() {
  const [page, setPageRaw] = React.useState(() => {
    const h = (window.location.hash || "").replace("#", "");
    return PAGES.includes(h) ? h : "home";
  });
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const pageRef = React.useRef(page);
  React.useEffect(() => {
    pageRef.current = page;
  }, [page]);
  const setPage = React.useCallback(p => {
    if (p === pageRef.current) return;
    const commit = () => {
      setPageRaw(p);
      if (window.location.hash.replace("#", "") !== p) window.history.pushState(null, "", "#" + p);
    };
    const g = window.gsap;
    const panel = document.getElementById("route-wipe");
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!g || !panel || reduce || document.hidden) {
      commit();
      return;
    }
    const mark = panel.querySelector(".route-wipe__mark");
    panel.classList.add("is-active");
    g.timeline().set(panel, {
      scaleY: 0,
      transformOrigin: "50% 100%"
    }).set(mark, {
      opacity: 0,
      y: 14
    }).to(panel, {
      scaleY: 1,
      duration: 0.46,
      ease: "power3.inOut"
    }).to(mark, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    }, "-=0.22").add(commit).to(mark, {
      opacity: 0,
      duration: 0.24,
      ease: "power2.in"
    }, "+=0.06").set(panel, {
      transformOrigin: "50% 0%"
    }).to(panel, {
      scaleY: 0,
      duration: 0.56,
      ease: "power3.inOut"
    }, "-=0.04").add(function () {
      panel.classList.remove("is-active");
    });
  }, []);
  React.useEffect(() => {
    const onPop = () => {
      const h = (window.location.hash || "").replace("#", "");
      setPageRaw(PAGES.includes(h) ? h : "home");
    };
    window.addEventListener("hashchange", onPop);
    window.addEventListener("popstate", onPop);
    return () => {
      window.removeEventListener("hashchange", onPop);
      window.removeEventListener("popstate", onPop);
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
    document.documentElement.style.setProperty("--accent-deep", shade(t.accent, -0.18));
    document.documentElement.style.setProperty("--serif", `"${t.displayFont}", "Georgia", "Times New Roman", serif`);
  }, [t.accent, t.displayFont]);
  React.useEffect(() => {
    if (window.__motion && window.__motion.lenis) window.__motion.lenis.scrollTo(0, {
      immediate: true
    });else window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  }, [page]);
  React.useEffect(() => {
    if (window.__motion) window.__motion.refresh();
  }, [page]);
  let body = null;
  if (page === "home") body = React.createElement(Home, {
    setPage: setPage
  });
  if (page === "services") body = React.createElement(Services, {
    setPage: setPage
  });
  if (page === "investment") body = React.createElement(Investment, {
    setPage: setPage
  });
  if (page === "projects") body = React.createElement(Projects, {
    setPage: setPage
  });
  if (page === "about") body = React.createElement(About, {
    setPage: setPage
  });
  if (page === "contact") body = React.createElement(Contact, {
    setPage: setPage
  });
  return React.createElement(React.Fragment, null, React.createElement(Nav, {
    page: page,
    setPage: setPage
  }), body, React.createElement(Footer, {
    setPage: setPage
  }), React.createElement("div", {
    id: "route-wipe",
    className: "route-wipe",
    "aria-hidden": "true"
  }, React.createElement("div", {
    className: "route-wipe__mark"
  }, "N", React.createElement("i", null, "."))), /[?&]tweaks=1/.test(window.location.search) && React.createElement(TweaksPanel, null, React.createElement(TweakSection, {
    label: "Accent"
  }), React.createElement(TweakColor, {
    label: "Accent color",
    value: t.accent,
    options: ACCENTS,
    onChange: v => setTweak("accent", v)
  }), React.createElement(TweakSection, {
    label: "Typography"
  }), React.createElement(TweakSelect, {
    label: "Display font",
    value: t.displayFont,
    options: DISPLAY_FONTS,
    onChange: v => setTweak("displayFont", v)
  }), React.createElement(TweakSection, {
    label: "Navigate"
  }), React.createElement(TweakSelect, {
    label: "Jump to page",
    value: page,
    options: PAGES,
    onChange: v => setPage(v)
  })));
}
function shade(hex, amt) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map(c => c + c).join("") : h, 16);
  let r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  r = Math.max(0, Math.min(255, Math.round(r + r * amt)));
  g = Math.max(0, Math.min(255, Math.round(g + g * amt)));
  b = Math.max(0, Math.min(255, Math.round(b + b * amt)));
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App, null));
