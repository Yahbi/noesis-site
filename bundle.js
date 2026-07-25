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
const ENHANCED = {
  "5c383b_0685f94a8360485b8734c509d3fe9f49~mv2_d_1800_1200_s_2.jpg": "assets/img/e-0685f94a8360.jpg",
  "5c383b_0d870af7326f4875976ceb413368be2f~mv2.jpg": "assets/img/e-0d870af7326f.jpg",
  "5c383b_12fe95a979394c05baede9636975f3b2~mv2.jpg": "assets/img/e-12fe95a97939.jpg",
  "5c383b_17a065f4eb4d479b863408b00b915311~mv2_d_1800_1200_s_2.jpg": "assets/img/e-17a065f4eb4d.jpg",
  "5c383b_181567c37df5419baf12968bf36be13f~mv2.jpg": "assets/img/e-181567c37df5.jpg",
  "5c383b_1c44f1b7f6d14ceb8a181dc9b1583776~mv2_d_1800_1200_s_2.jpg": "assets/img/e-1c44f1b7f6d1.jpg",
  "5c383b_1e3d7195fb844e22b60bc51bb63d37b6~mv2.jpg": "assets/img/e-1e3d7195fb84.jpg",
  "5c383b_257cefb780784aa0b63061a9ea2aa29b~mv2.jpg": "assets/img/e-257cefb78078.jpg",
  "5c383b_288e8aff1dda4604b66c51f16efe6574~mv2.jpg": "assets/img/e-288e8aff1dda.jpg",
  "5c383b_28d75206da854c4c8a20817a431a2f10~mv2.jpg": "assets/img/e-28d75206da85.jpg",
  "5c383b_2ad9da5386244e4ea246f1d14533f7c2~mv2_d_1800_1200_s_2.jpg": "assets/img/e-2ad9da538624.jpg",
  "5c383b_2d3c5141a92d4ed5928e91b271511890~mv2.jpg": "assets/img/e-2d3c5141a92d.jpg",
  "5c383b_2d52734942534cc1b3d3619a6dca77f9~mv2.jpg": "assets/img/e-2d5273494253.jpg",
  "5c383b_30e83f23d3044ced8c692784faf50290~mv2.jpg": "assets/img/e-30e83f23d304.jpg",
  "5c383b_3120130080e7438cacdfd14c39299b17~mv2.jpg": "assets/img/e-3120130080e7.jpg",
  "5c383b_338fba4cdcd845ccbfb911288478e8bc~mv2.jpg": "assets/img/e-338fba4cdcd8.jpg",
  "5c383b_349ad261601f411282845fac17e4eae4~mv2.jpg": "assets/img/e-349ad261601f.jpg",
  "5c383b_383959ccae0c42a38ea2c942add8df1c~mv2_d_1800_1200_s_2.jpg": "assets/img/e-383959ccae0c.jpg",
  "5c383b_38f5ef1da26e4204b8e465e79f378f2e~mv2.jpg": "assets/img/e-38f5ef1da26e.jpg",
  "5c383b_399dfa72d94b49a49da788a0464b7fb2~mv2.jpg": "assets/img/e-399dfa72d94b.jpg",
  "5c383b_3d31be3b7521442d871fce2ca5d5855e~mv2.jpg": "assets/img/e-3d31be3b7521.jpg",
  "5c383b_4069deb335d44a7bbfaf2abaacbc25fd~mv2_d_2100_1290_s_2.png": "assets/img/e-4069deb335d4.jpg",
  "5c383b_413fa29f39a94acfb2d595791d1d777d~mv2.jpg": "assets/img/e-413fa29f39a9.jpg",
  "5c383b_43422a7abb5d4d6496bff31ea257f79b~mv2.jpg": "assets/img/e-43422a7abb5d.jpg",
  "5c383b_436ec028ad4c4bf8a0120a0b7928d91c~mv2.jpg": "assets/img/e-436ec028ad4c.jpg",
  "5c383b_46c560a6d94b4418bed1e9cf64c646ef~mv2.jpg": "assets/img/e-46c560a6d94b.jpg",
  "5c383b_4a952c0d18834339a123362069e97e82~mv2.jpg": "assets/img/e-4a952c0d1883.jpg",
  "5c383b_57dbe21d67d545458a9efcc900929f26~mv2.jpg": "assets/img/e-57dbe21d67d5.jpg",
  "5c383b_597ed5a457654c23a1f2afb1a72b8bb8~mv2.jpg": "assets/img/lebijou-cover.jpg",
  "5c383b_618462c222ab415dbf9002ddbcf2d4ba~mv2_d_1932_1302_s_2.png": "assets/img/e-618462c222ab.jpg",
  "5c383b_634f6b29507640c7ba1d65da1e1ea960~mv2.jpg": "assets/img/e-634f6b29507.jpg",
  "5c383b_680d109689f24392bd1a4231d81cbde1~mv2.jpg": "assets/img/e-680d109689f2.jpg",
  "5c383b_6a252e3b4d02449f8613778e14197209~mv2.jpg": "assets/img/e-6a252e3b4d02.jpg",
  "5c383b_6d4172cf48524e228ed8a2794b2a76a9~mv2.jpg": "assets/img/e-6d4172cf4852.jpg",
  "5c383b_6e48b6f978af4a6c852306e82defb5a2~mv2.jpg": "assets/img/casah-cover.jpg",
  "5c383b_700ac76a8a7e4af88e42d48603f7c613~mv2.jpg": "assets/img/e-700ac76a8a7e.jpg",
  "5c383b_71fdd520a1814c11bdfbc9270b43911e~mv2.jpg": "assets/img/e-71fdd520a181.jpg",
  "5c383b_72f49837e80241dd8976007ae333b94c~mv2.jpg": "assets/img/e-72f49837e802.jpg",
  "5c383b_7842f8bcba194ce0b2b8157e07b6cdbb~mv2.jpg": "assets/img/e-7842f8bcba19.jpg",
  "5c383b_79f27591c68641f5abacef5c5c9dc729~mv2.jpg": "assets/img/e-79f27591c686.jpg",
  "5c383b_82e37681f84745d8be140f15cac1a89c~mv2.jpg": "assets/img/e-82e37681f847.jpg",
  "5c383b_89aa2cae41af4a0088addcde739a8ee3~mv2.jpg": "assets/img/e-89aa2cae41af.jpg",
  "5c383b_8b949f6a44fb4cdbb261f1da70825edd~mv2.jpg": "assets/img/e-8b949f6a44fb.jpg",
  "5c383b_913ed2417e8d485f9f3bf54686e72f26~mv2.jpg": "assets/img/e-913ed2417e8d.jpg",
  "5c383b_939f492be96147f39b37b6b1d1530e65~mv2.jpg": "assets/img/e-939f492be961.jpg",
  "5c383b_9e34a5d7774045339d373605ba356a0a~mv2.jpg": "assets/img/e-9e34a5d77740.jpg",
  "5c383b_9efd199eadcd4208af7acd6893c46792~mv2.jpg": "assets/img/e-9efd199eadcd.jpg",
  "5c383b_a031f0138d6045ca89b2bace6e383341~mv2.jpg": "assets/img/e-a031f0138d60.jpg",
  "5c383b_a1245b0acc0945e1a3e431016253a778~mv2.jpg": "assets/img/e-a1245b0acc09.jpg",
  "5c383b_a1aa346c4601494082bbd3ac99be5707~mv2_d_1800_1200_s_2.jpg": "assets/img/e-a1aa346c4601.jpg",
  "5c383b_a2770133ea6e41cca23226810616cc45~mv2_d_1800_1200_s_2.jpg": "assets/img/e-a2770133ea6e.jpg",
  "5c383b_a74db35204cf4b14811acd06773e6c70~mv2_d_1788_1899_s_2.jpg": "assets/img/e-a74db35204cf.jpg",
  "5c383b_a8ab5be38572479d819d7829987a8901~mv2.jpg": "assets/img/e-a8ab5be38572.jpg",
  "5c383b_af281a68c16e4c3fb94b3620d3a07f4f~mv2.jpg": "assets/img/e-af281a68c16e.jpg",
  "5c383b_b3d670a8b83a486498fae278402120af~mv2.jpg": "assets/img/cthru-cover.jpg",
  "5c383b_bfd14a73de9d40f28e829577d074296b~mv2.jpg": "assets/img/e-bfd14a73de9d.jpg",
  "5c383b_c0b64552bc3b4599b053c6213af0c9aa~mv2.jpg": "assets/img/e-c0b64552bc3b.jpg",
  "5c383b_caa183bb58e5444286728d6388a1d8f0~mv2_d_1800_1200_s_2.jpg": "assets/img/e-caa183bb58e5.jpg",
  "5c383b_d1c01ed73bf3495d91bcbbc66426e3e7~mv2_d_1800_1200_s_2.jpg": "assets/img/e-d1c01ed73bf3.jpg",
  "5c383b_d343c06a29ba4689804f74eebcd8c122~mv2.jpg": "assets/img/e-d343c06a29ba.jpg",
  "5c383b_e3595dd2bd3146838fa75e4ac252ef64~mv2.jpg": "assets/img/e-e3595dd2bd31.jpg",
  "5c383b_e512c085d2864e718285d3f0bbca6c46~mv2_d_1800_1200_s_2.jpg": "assets/img/e-e512c085d286.jpg",
  "5c383b_e660755345994c8abf6b93a1bc2b6df9~mv2.jpg": "assets/img/e-e66075534599.jpg",
  "5c383b_e6f1d2fd73ab4b0aaf7d26c067444274~mv2.jpg": "assets/img/e-e6f1d2fd73ab.jpg",
  "5c383b_e7fa96e7c95b46f2921e31af34a46801~mv2.jpg": "assets/img/e-e7fa96e7c95b.jpg",
  "5c383b_e8b518eee52f4d8a8c837e66e331af6e~mv2.jpg": "assets/img/e-e8b518eee52f.jpg",
  "5c383b_e8c04611cec1445993842a289356a0a2~mv2.jpg": "assets/img/e-e8c04611cec1.jpg",
  "5c383b_ed7d76ee11804f7ba93fe72c331e9d6d~mv2.jpg": "assets/img/e-ed7d76ee1180.jpg",
  "5c383b_ee09bf9ac7d344dda676920c3bd36462~mv2_d_1800_1200_s_2.jpg": "assets/img/e-ee09bf9ac7d3.jpg",
  "5c383b_fcb4f7079a5e443589c23a058a3a3b1b~mv2.jpg": "assets/img/e-fcb4f7079a5e.jpg"
};
function wix(id, opts = {}) {
  if (typeof PHOTO !== "undefined" && PHOTO[id]) id = PHOTO[id];
  if (/^(https?:)?\//.test(id) || id.indexOf("assets/") === 0) return id;
  if (ENHANCED[id] && (opts.w || 1600) >= 1200) return ENHANCED[id];
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
const SECTIONS = [["development", "Development"], ["investment", "Investment"], ["projects", "Portfolio"], ["owners-rep", "Owner's Rep"], ["about", "Firm"], ["inquiries", "Inquiries"]];
const SOCIALS = [["Facebook", "M13 10h3l.5-3H13V5.2c0-.9.2-1.5 1.5-1.5H16V1.1C15.7 1 14.8 1 13.8 1 11.6 1 10 2.3 10 4.9V7H7.5v3H10v8h3z"], ["Instagram", "M9.5 2h5A4.5 4.5 0 0 1 19 6.5v5A4.5 4.5 0 0 1 14.5 16h-5A4.5 4.5 0 0 1 5 11.5v-5A4.5 4.5 0 0 1 9.5 2Zm0 1.6A2.9 2.9 0 0 0 6.6 6.5v5A2.9 2.9 0 0 0 9.5 14.4h5a2.9 2.9 0 0 0 2.9-2.9v-5a2.9 2.9 0 0 0-2.9-2.9h-5ZM12 6.6A3.4 3.4 0 1 1 8.6 10 3.4 3.4 0 0 1 12 6.6Zm0 1.6A1.8 1.8 0 1 0 13.8 10 1.8 1.8 0 0 0 12 8.2Zm3.6-2.1a.8.8 0 1 1-.8.8.8.8 0 0 1 .8-.8Z"], ["LinkedIn", "M4.5 3A1.5 1.5 0 1 0 4.5 6 1.5 1.5 0 0 0 4.5 3ZM3.3 7.4h2.4V18H3.3V7.4ZM8 7.4h2.3v1.4h.1A2.5 2.5 0 0 1 12.7 7.2c2.5 0 3 1.6 3 3.8V18h-2.4v-3.5c0-.8 0-1.9-1.2-1.9s-1.3 1-1.3 1.9V18H8V7.4Z"], ["YouTube", "M19.6 7.2a2 2 0 0 0-1.4-1.4C16.9 5.5 12 5.5 12 5.5s-4.9 0-6.2.3A2 2 0 0 0 4.4 7.2 21 21 0 0 0 4.1 11a21 21 0 0 0 .3 3.8 2 2 0 0 0 1.4 1.4c1.3.3 6.2.3 6.2.3s4.9 0 6.2-.3a2 2 0 0 0 1.4-1.4 21 21 0 0 0 .3-3.8 21 21 0 0 0-.3-3.8ZM10.4 13.3V8.7l4 2.3-4 2.3Z"]];
const SOCIAL_URLS = {
  Facebook: "https://www.facebook.com/NoesisUSA/",
  Instagram: "https://www.instagram.com/noesisgroup/",
  LinkedIn: "https://www.linkedin.com/company/noesis-group-llc",
  YouTube: "https://www.youtube.com/channel/UC42nmHBPxnuIv8NgzwLyiCw"
};
function SocialRow({
  size = 18,
  color
}) {
  return React.createElement("div", {
    className: "u-flex u-gap-16"
  }, SOCIALS.map(([name, d]) => React.createElement("a", {
    key: name,
    href: SOCIAL_URLS[name] || "#",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": `Noesis on ${name}`,
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
function Logo({
  onClick,
  className
}) {
  const wordRef = React.useRef(null);
  const barRef = React.useRef(null);
  React.useLayoutEffect(() => {
    const word = wordRef.current,
      bar = barRef.current;
    if (!word || !bar) return;
    const place = () => {
      const node = word.firstChild;
      const logo = word.parentElement;
      if (!node || !logo) return;
      let range;
      try {
        range = document.createRange();
      } catch (e) {
        return;
      }
      const rectOf = i => {
        range.setStart(node, i);
        range.setEnd(node, i + 1);
        return range.getBoundingClientRect();
      };
      const o = rectOf(1);
      const e = rectOf(2);
      if (!o.width || !e.width) return;
      const lr = logo.getBoundingClientRect();
      bar.style.left = Math.round((o.left + o.right) / 2 - lr.left) + "px";
      bar.style.width = Math.round(e.right - (o.left + o.right) / 2) + "px";
      bar.style.right = "auto";
    };
    place();
    const raf = requestAnimationFrame(place);
    const onResize = () => place();
    window.addEventListener("resize", onResize);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(place).catch(() => {});
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return React.createElement("button", {
    className: `logo ${className || ""}`,
    "aria-label": "Noesis \u2014 home",
    onClick: onClick
  }, React.createElement("span", {
    className: "logo__word",
    ref: wordRef
  }, "NOESIS"), React.createElement("span", {
    className: "logo__bar",
    ref: barRef,
    "aria-hidden": "true"
  }));
}
function Nav({
  active,
  go
}) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [over, setOver] = React.useState(true);
  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setOver(y < window.innerHeight - 110);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const tap = k => {
    go(k);
    setOpen(false);
  };
  const cls = `nav ${scrolled ? "nav--scrolled" : ""} ${over && !scrolled ? "nav--over" : ""}`;
  return React.createElement("header", {
    className: cls
  }, React.createElement("div", {
    className: "wrap nav__inner u-flex u-between u-center"
  }, React.createElement(Logo, {
    onClick: () => tap("top")
  }), React.createElement("nav", {
    className: "nav__links",
    "aria-label": "Primary"
  }, SECTIONS.map(([k, label]) => React.createElement("button", {
    key: k,
    className: active === k ? "is-active" : "",
    onClick: () => tap(k)
  }, label)), React.createElement("button", {
    onClick: () => tap("inquiries"),
    className: "btn nav__cta"
  }, "Request an Introduction")), React.createElement("button", {
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
  }, SECTIONS.map(([k, label], i) => React.createElement("button", {
    key: k,
    className: active === k ? "is-active" : "",
    style: {
      transitionDelay: open ? `${0.05 + i * 0.04}s` : "0s"
    },
    onClick: () => tap(k)
  }, React.createElement("span", {
    className: "nav__drawer-idx"
  }, "0", i + 1), label))), React.createElement("div", {
    className: "nav__drawer-foot"
  }, React.createElement("button", {
    onClick: () => tap("inquiries"),
    className: "btn",
    style: {
      width: "100%",
      justifyContent: "center"
    }
  }, "Request an Introduction"), React.createElement("div", {
    className: "nav__drawer-meta"
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
  go
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
  }, React.createElement(Logo, {
    className: "footer__logo",
    onClick: () => go("top")
  }), React.createElement("div", {
    className: "eyebrow u-mt-24",
    style: {
      color: "var(--muted)"
    }
  }, React.createElement("span", {
    className: "dot"
  }), " Beverly Hills \xB7 California \xB7 Est. 2009 \xB7 International"), React.createElement("h2", {
    className: "h-1 u-mt-24",
    style: {
      maxWidth: "16ch"
    }
  }, "We develop, we invest, and we deliver \u2014 ", React.createElement("em", {
    className: "accent",
    style: {
      fontStyle: "italic"
    }
  }, "alongside.")), React.createElement("div", {
    className: "u-flex u-gap-24 u-mt-40",
    style: {
      flexWrap: "wrap"
    }
  }, SECTIONS.map(([k, l]) => React.createElement("button", {
    key: k,
    onClick: () => go(k),
    className: "link-u",
    style: {
      background: "transparent",
      border: 0,
      borderBottom: "1px solid var(--rule)",
      color: "var(--ink-soft)",
      fontSize: 11,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      padding: "0 0 3px"
    }
  }, l)))), React.createElement("div", {
    className: "col-5"
  }, React.createElement("div", {
    className: "u-flex u-col u-gap-24"
  }, React.createElement("div", null, React.createElement("div", {
    className: "eyebrow footer__lbl"
  }, "Inquiries"), React.createElement("a", {
    href: "mailto:info@noesisusa.com",
    className: "serif",
    style: {
      fontSize: 24,
      color: "var(--ink)",
      fontWeight: 300
    }
  }, "info@noesisusa.com"), React.createElement("div", {
    style: {
      marginTop: 8,
      color: "var(--ink-soft)",
      letterSpacing: ".03em"
    }
  }, "T (310) 855\xB73634 \xA0\xB7\xA0 F (424) 282\xB78414")), React.createElement("button", {
    onClick: () => go("inquiries"),
    className: "btn btn--ghost",
    style: {
      alignSelf: "flex-start"
    }
  }, "Make an Enquiry ", React.createElement("span", {
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
    style: {
      letterSpacing: ".08em",
      textTransform: "uppercase",
      fontSize: 10.5
    }
  }, "\xA9 2026 Noesis Group \xB7 All rights reserved"), React.createElement("div", {
    className: "u-flex u-gap-24",
    style: {
      fontSize: 10.5,
      letterSpacing: ".08em",
      textTransform: "uppercase"
    }
  }, React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Disclosures"), React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Privacy")))));
}
window.Nav = Nav;
window.Footer = Footer;
window.SocialRow = SocialRow;
window.Logo = Logo;
const SHOT = {
  casaMani: "5c383b_a9f6aa50d3a44559aee6289afe36ebcf~mv2_d_6720_4480_s_4_2.jpg",
  oneOak: "5c383b_38f5ef1da26e4204b8e465e79f378f2e~mv2.jpg",
  houseG: "5c383b_a01053afaaa447d08fc46a06820b54d3~mv2_d_5760_3840_s_4_2.jpg",
  aura: "5c383b_23c2d9ef2cfb46768b1a436bc5c8dc7a~mv2_d_4256_2832_s_4_2.jpg",
  cThru: "5c383b_b3d670a8b83a486498fae278402120af~mv2.jpg",
  lolivier: "5c383b_fcb4f7079a5e443589c23a058a3a3b1b~mv2.jpg",
  leBijou: "5c383b_597ed5a457654c23a1f2afb1a72b8bb8~mv2.jpg"
};
const ABOUT_VALUES = [["Alignment", "We succeed when our clients and partners do. We take the owner's side, and we put our own capital and reputation behind our convictions."], ["Discretion", "We work quietly for private clients, principals and family offices. Confidentiality is built into every engagement."], ["Stewardship", "We treat every project and every dollar of capital as if it were our own — because, often, it is."], ["Craft", "An obsession with how things are made. The difference between built and realized lives in the details we refuse to compromise."]];
const PORTFOLIO_STATS = [["23", "Projects delivered"], ["16", "Private residences"], ["5", "Apartment buildings"], ["2", "Small-lot subdivisions"], ["2009", "Founded"]];
const WWD_PILLARS = [["01", "Development", "We acquire and develop ground-up — luxury residences, small-lot subdivisions and apartment buildings — conceived, entitled, designed and built by our own team."], ["02", "Investment", "We invest our own capital alongside our partners', across opportunistic, value-add and stabilized strategies, where our development edge creates the value."], ["03", "Owner's Representation", "For a select few owners, the same discipline applied to your project — one accountable advocate from entitlement to delivery."]];
const STRATEGIES = [["01", "Opportunistic", "Short-Term · 2–3 Years", "Acquisition and new development of residential single-family and small-lot subdivisions, created for a for-sale exit.", ["Residential SFD & small-lot subdivisions", "Acquisition & new development", "Average hold 2–3 years", "Eventual for-sale assets"]], ["02", "Value-Add", "Mid-Term · 7–10 Years", "Commercial apartment buildings and office, improved through leasing, capital improvements and partial redevelopment.", ["Apartment buildings & office", "Leasing, capital improvements, partial redevelopment", "Average hold 7–10 years", "Eventual for-sale assets"]], ["03", "Hybrid Stabilized", "Long-Term", "Apartment buildings, small-lot subdivisions and office — acquired, developed and stabilized for a long-term hold.", ["Apartment buildings, SLS & office", "Acquisition, development & stabilization", "Long-term hold", "Income & durability focused"]]];
const PRINCIPLES = [["01", "Alignment first", "The operator co-invests. We earn when our partners earn — risk is shared, not transferred."], ["02", "Design-led value", "Returns are created by building the right thing well, in the right place, at the right basis."], ["03", "Disciplined basis", "We underwrite conservatively and walk away often. The price of entry sets the margin of safety."], ["04", "Hands-on stewardship", "We manage what we own — through the full cycle, in person, with a builder's rigor."]];
const PROCESS = [["01", "Strategy & Feasibility", "Site and market analysis, highest-and-best-use, financial modeling and risk assessment."], ["02", "Entitlement & Approvals", "Navigating planning, zoning, permitting and the stakeholders who decide a project's fate."], ["03", "Design & Preconstruction", "Assembling and directing the design team; budgeting, value engineering and procurement."], ["04", "Construction Delivery", "Managing contractors, schedule, cost and quality to completion, at the owner's standard."], ["05", "Handover & Realization", "Closeout and handover, then leasing, sale or stabilization to realize the asset's full value."]];
const FOUNDER = {
  name: "Igal N. Azran",
  title: "Founder & Principal",
  prev: "Previously · CIM Group · CBRE · STMC",
  edu: "MSc · Real Estate",
  stats: [["$75M", "Construction budget managed"], ["22 days", "Delivered ahead of schedule"], ["12%", "Delivered under budget"]],
  bio: ["Igal N. Azran founded Noesis in 2009 and has led its development and investment work ever since. Born in Morocco and raised between France, Spain and Israel, he brings a genuinely international perspective — and a builder's discipline — to every venture.", "Before Noesis, Igal was an associate at CIM Group, the Los Angeles real-estate private-equity and development firm, working on institutional investment and development transactions. Earlier, as a project manager for CBRE in Morocco, he delivered a 24-unit luxury condominium 22 days ahead of schedule and 12% under budget; in Los Angeles, he managed a $75 million construction budget for the L.A. Fashion Center, coordinating trades, architects and engineers through to completion.", "Today he originates and leads the firm's developments and investments, maintaining the relationships with domestic and international capital partners behind every venture — and personally directs its owner's-representation mandates. He holds a Master's degree in Real Estate."]
};
function Home({
  go,
  intent,
  setIntent
}) {
  const goInvestor = id => {
    if (setIntent) setIntent("investor");
    go(id);
  };
  return React.createElement("main", {
    className: "page-enter"
  }, React.createElement("section", {
    id: "hero",
    className: "cine cine--video",
    style: {
      minHeight: "100svh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingTop: "clamp(92px,13vh,150px)",
      paddingBottom: "clamp(34px,6vh,60px)"
    }
  }, React.createElement("img", {
    className: "cine__img img--warm",
    alt: "A Noesis-developed residence",
    fetchpriority: "high",
    sizes: "100vw",
    src: wix(SHOT.casaMani, {
      w: 2000
    }),
    srcSet: `${wix(SHOT.casaMani, {
      w: 1200
    })} 1200w, ${wix(SHOT.casaMani, {
      w: 2000
    })} 2000w, ${wix(SHOT.casaMani, {
      w: 2600
    })} 2600w`
  }), React.createElement("video", {
    className: "cine__vid",
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "metadata",
    src: "assets/noesis-film.mp4?v=3",
    ref: el => {
      if (!el || el.__keeper) return;
      el.__keeper = true;
      el.muted = true;
      el.__inView = true;
      const tryPlay = () => {
        if (!el.isConnected) {
          clearInterval(el.__iv);
          document.removeEventListener("visibilitychange", tryPlay);
          if (el.__io) el.__io.disconnect();
          return;
        }
        if (!document.hidden && el.__inView) {
          if (el.paused) {
            const p = el.play();
            if (p && p.catch) p.catch(() => {});
          }
        } else if (!el.paused) {
          el.pause();
        }
      };
      el.__tries = 0;
      el.addEventListener("error", () => {
        const d = [2000, 8000, 20000, 45000];
        if (el.__tries >= d.length) {
          el.style.display = "none";
          return;
        }
        const w = d[el.__tries++];
        setTimeout(() => {
          if (!el.isConnected) return;
          el.style.display = "";
          el.src = "assets/noesis-film.mp4?r=" + Date.now();
          el.load();
          tryPlay();
        }, w);
      });
      el.addEventListener("playing", () => {
        el.style.display = "";
        el.__tries = 0;
      });
      if ("IntersectionObserver" in window) {
        el.__io = new IntersectionObserver(ents => {
          el.__inView = ents[0] && ents[0].isIntersecting;
          tryPlay();
        }, {
          threshold: 0.01
        });
        el.__io.observe(el);
      }
      tryPlay();
      el.__iv = setInterval(tryPlay, 2500);
      document.addEventListener("visibilitychange", tryPlay);
    }
  }), React.createElement("div", {
    className: "cine__grad"
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
      color: "rgba(236,230,216,.7)"
    }
  }, React.createElement("span", {
    className: "dot"
  }), " Noesis \u2014 Est. 2009"), React.createElement("div", {
    className: "eyebrow u-hide-720",
    style: {
      color: "rgba(236,230,216,.7)"
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
      maxWidth: "18ch",
      color: "var(--bone)"
    }
  }, React.createElement("span", {
    className: "ln"
  }, React.createElement("span", null, "We build what")), React.createElement("span", {
    className: "ln"
  }, React.createElement("span", null, "we invest in."))), React.createElement("div", {
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
      color: "rgba(236,230,216,.86)"
    }
  }, "Noesis is an international real-estate development and investment firm. We conceive, build and hold the assets we believe in \u2014 and bring that same builder's discipline to a select few owners.")), React.createElement("div", {
    className: "col-6 u-flex u-gap-16",
    "data-hero-fade": true,
    style: {
      justifyContent: "flex-end",
      flexWrap: "wrap"
    }
  }, React.createElement("button", {
    className: "btn",
    onClick: () => goInvestor("investment"),
    "data-magnetic": true
  }, "For Investors"), React.createElement("button", {
    className: "btn btn--ghost",
    onClick: () => go("owners-rep"),
    "data-magnetic": true,
    style: {
      color: "var(--bone)",
      borderColor: "rgba(236,230,216,.7)"
    }
  }, "For Owners & Developers"))))), React.createElement("section", {
    id: "development",
    className: "section wwd"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "reveal",
    style: {
      marginBottom: "clamp(28px,3.5vw,48px)"
    }
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Development"), React.createElement("p", {
    className: "wwd__lead u-mt-24",
    style: {
      maxWidth: "20ch"
    }
  }, "We take a project from a ", React.createElement("em", null, "parcel of land"), " to a finished landmark \u2014 and own the outcome."), React.createElement("p", {
    className: "body-lg u-mt-24",
    style: {
      maxWidth: "66ch",
      color: "var(--ink-2)"
    }
  }, "Since 2009 we have developed distinctly unique real estate \u2014 beginning with single-family residences and growing into small-lot subdivisions, apartment buildings and other residential and commercial developments. Our approach has always been to build a strong, resourceful and knowledgeable foundation before undertaking new ventures in each asset class.")), React.createElement("div", {
    className: "wwd-grid reveal"
  }, WWD_PILLARS.map(([n, t, d]) => React.createElement("div", {
    key: n,
    className: "wwd-cap"
  }, React.createElement("div", {
    className: "wwd-cap__n"
  }, n), React.createElement("div", {
    className: "wwd-cap__t"
  }, t), React.createElement("p", {
    className: "wwd-cap__d"
  }, d)))))), React.createElement("section", {
    id: "investment",
    className: "section",
    style: {
      paddingTop: "clamp(40px,5vw,72px)"
    }
  }, React.createElement("div", {
    className: "wrap grid-12"
  }, React.createElement("div", {
    className: "col-4 reveal"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Investment"), React.createElement("h2", {
    className: "h-1 u-mt-16 caps",
    style: {
      maxWidth: "10ch"
    }
  }, "Capital, aligned.")), React.createElement("div", {
    className: "col-8 reveal"
  }, React.createElement("p", {
    className: "lede"
  }, "We originate, structure and steward real estate investments for an aligned network of private capital \u2014 family offices, principals and institutions \u2014 with the operator invested alongside, successfully generating value for our investors since 2009."), React.createElement("p", {
    className: "pull u-mt-40",
    style: {
      maxWidth: "26ch"
    }
  }, "The best returns in real estate come from building the ", React.createElement("em", null, "right thing well"), ". We invest where our development edge creates the value."))), React.createElement("div", {
    className: "wrap u-mt-40"
  }, React.createElement("div", {
    className: "rows reveal"
  }, STRATEGIES.map(([n, t, hold, desc, points]) => React.createElement("div", {
    key: n,
    className: "row reveal"
  }, React.createElement("div", {
    className: "row__idx"
  }, n), React.createElement("div", null, React.createElement("div", {
    className: "row__title"
  }, t), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--accent-deep)",
      marginTop: 10
    }
  }, hold)), React.createElement("div", null, React.createElement("p", {
    className: "row__desc"
  }, desc), React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "16px 0 0",
      display: "grid",
      gap: 8
    }
  }, points.map(p => React.createElement("li", {
    key: p,
    style: {
      display: "flex",
      gap: 11,
      alignItems: "baseline",
      color: "var(--ink-soft)",
      fontSize: 13.5
    }
  }, React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      flex: "0 0 5px",
      background: "var(--accent)",
      borderRadius: "50%",
      transform: "translateY(-2px)"
    }
  }), p)))))))), React.createElement("div", {
    className: "wrap u-mt-64"
  }, React.createElement("div", {
    className: "eyebrow reveal"
  }, React.createElement("span", {
    className: "dot"
  }), " How We Invest"), React.createElement("div", {
    className: "reveal qgrid"
  }, PRINCIPLES.map(([n, t, d]) => React.createElement("div", {
    key: n
  }, React.createElement("div", {
    className: "wwd-cap__n"
  }, n), React.createElement("div", {
    style: {
      fontFamily: "var(--sans)",
      fontWeight: 300,
      fontSize: "clamp(18px,1.6vw,22px)",
      marginTop: 14,
      color: "var(--ink)"
    }
  }, t), React.createElement("p", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 13.5,
      lineHeight: 1.6,
      marginTop: 10
    }
  }, d)))), React.createElement("div", {
    className: "grid-12 u-end u-mt-64"
  }, React.createElement("div", {
    className: "col-8 reveal"
  }, React.createElement("p", {
    className: "body",
    style: {
      color: "var(--muted)",
      maxWidth: "62ch"
    }
  }, "Noesis has built strong ties with a network of high-net-worth individuals, both local and foreign, with access to private equity and exclusive opportunities \u2014 and we are open to partnering with like-minded investors. When an opportunity meets our standard we bring it to that network privately. Qualified and accredited investors are welcome to request a confidential introduction \u2014 no obligation, and no live offering implied.")), React.createElement("div", {
    className: "col-4 u-tr reveal"
  }, React.createElement("button", {
    className: "btn btn--ghost",
    onClick: () => goInvestor("inquiries"),
    "data-magnetic": true
  }, "Request an introduction ", React.createElement("span", {
    className: "arr"
  })))))), React.createElement("section", {
    id: "projects",
    className: "section"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "grid-12 u-end reveal",
    style: {
      marginBottom: "clamp(28px,3vw,40px)"
    }
  }, React.createElement("div", {
    className: "col-8"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Portfolio \xB7 The Record"), React.createElement("h2", {
    className: "h-1 u-mt-16 caps"
  }, "The record behind the thesis."), React.createElement("p", {
    className: "body-lg u-mt-16",
    style: {
      maxWidth: "56ch"
    }
  }, "Luxury residences and buildings conceived, developed and delivered by the Noesis team \u2014 the delivered proof behind what we build, what we hold, and how we manage.")), React.createElement("div", {
    className: "col-4 u-tr"
  }, React.createElement("button", {
    className: "btn btn--ghost",
    onClick: () => go("properties"),
    "data-magnetic": true
  }, "View the full portfolio ", React.createElement("span", {
    className: "arr"
  })))), React.createElement("button", {
    className: "story-feature reveal",
    onClick: () => go("story:le-bijou"),
    "aria-label": "Featured project \u2014 Le Bijou, read the story"
  }, React.createElement("img", {
    className: "story-feature__img img--warm",
    alt: "Le Bijou, Beverly Hills",
    loading: "lazy",
    sizes: "100vw",
    onError: e => {
      e.currentTarget.style.opacity = "0";
    },
    src: wix(SHOT.leBijou, {
      w: 2000
    }),
    srcSet: `${wix(SHOT.leBijou, {
      w: 1200
    })} 1200w, ${wix(SHOT.leBijou, {
      w: 2000
    })} 2000w`
  }), React.createElement("div", {
    className: "story-feature__grad"
  }), React.createElement("div", {
    className: "story-feature__cap"
  }, React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "rgba(236,230,216,.72)"
    }
  }, React.createElement("span", {
    className: "dot"
  }), " Featured Project"), React.createElement("div", {
    className: "story-feature__name"
  }, "Le Bijou"), React.createElement("div", {
    className: "story-feature__meta"
  }, "Beverly Hills \u2014 \u201Cthe jewel,\u201D where receding walls of glass make indoor-outdoor living real."), React.createElement("span", {
    className: "story-feature__cta"
  }, "Read the story ", React.createElement("span", {
    className: "arr"
  })))), React.createElement("div", {
    className: "statband reveal",
    style: {
      marginBottom: "clamp(40px,4.5vw,64px)"
    }
  }, PORTFOLIO_STATS.map(([v, l]) => React.createElement("div", {
    key: l
  }, React.createElement("div", {
    className: "num"
  }, v), React.createElement("div", {
    className: "statband__l"
  }, l)))), React.createElement("div", {
    className: "collage reveal"
  }, [[SHOT.casaMani, "casa-mani", "Casa Mani", "Beverly Hills", "Designed & built · 2018"], [SHOT.oneOak, "one-oak", "One Oak", "Sunset Strip", "Designed & built · 2015"], [SHOT.aura, "aura-house", "Aura House", "Tel Aviv", "Developed · sold over asking"], [SHOT.cThru, "c-thru", "C Thru", "Beverly Grove", "Designed & built · 2016"], [SHOT.houseG, "house-g", "House G", "Melrose", "Designed & developed · 2016"], [SHOT.lolivier, "lolivier", "L'Olivier House", "Los Angeles", "Designed & built · 2015"]].map(([img, id, name, loc, work]) => React.createElement("article", {
    key: name,
    className: "pcard",
    role: "button",
    tabIndex: 0,
    "aria-label": `${name}, ${loc} — view the project story`,
    onClick: () => go("story:" + id),
    onKeyDown: e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        go("story:" + id);
      }
    }
  }, React.createElement("div", {
    className: "pcard__media"
  }, React.createElement("img", {
    className: `pcard__img ${name === "Casa Mani" || name === "Aura House" ? "img--warm" : ""}`,
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
  }, loc)), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10.5,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--accent-deep)",
      whiteSpace: "nowrap"
    }
  }, work))))))), React.createElement("section", {
    className: "cine cine--video",
    style: {
      height: "min(86vh, 840px)",
      minHeight: 500
    }
  }, React.createElement("img", {
    className: "cine__img",
    src: wix(SHOT.oneOak, {
      w: 2200
    }),
    alt: ""
  }), React.createElement("video", {
    className: "cine__vid",
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "none",
    poster: wix(SHOT.oneOak, {
      w: 1200
    }),
    src: "assets/noesis-reel.mp4?v=2",
    ref: el => {
      if (!el || el.__keeper) return;
      el.__keeper = true;
      el.muted = true;
      el.__inView = false;
      const tryPlay = () => {
        if (!el.isConnected) {
          clearInterval(el.__iv);
          document.removeEventListener("visibilitychange", tryPlay);
          if (el.__io) el.__io.disconnect();
          return;
        }
        if (el.__manual) return;
        if (!document.hidden && el.__inView) {
          if (el.paused) {
            const p = el.play();
            if (p && p.catch) p.catch(() => {});
          }
        } else if (!el.paused) {
          el.pause();
        }
      };
      if ("IntersectionObserver" in window) {
        el.__io = new IntersectionObserver(e => {
          el.__inView = e[0] && e[0].isIntersecting;
          tryPlay();
        }, {
          threshold: 0.15
        });
        el.__io.observe(el);
      }
      el.__iv = setInterval(tryPlay, 2500);
      document.addEventListener("visibilitychange", tryPlay);
    }
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
      color: "rgba(236,230,216,.62)"
    }
  }, React.createElement("span", {
    className: "dot"
  }), " Conceived, developed & delivered by Noesis"), React.createElement("h2", {
    className: "h-1 u-mt-16 caps",
    style: {
      color: "var(--bone)",
      maxWidth: "18ch"
    }
  }, "We have stood where our partners stand."), React.createElement("button", {
    className: "btn u-mt-24",
    "data-magnetic": true,
    onClick: e => {
      const sec = e.currentTarget.closest("section");
      const v = sec && sec.querySelector("video");
      if (!v) return;
      v.__manual = true;
      v.loop = false;
      v.controls = true;
      v.muted = false;
      v.src = "assets/noesis-launch.mp4?v=2";
      v.load();
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
      const cap = sec.querySelector(".cine__cap");
      if (cap) cap.style.display = "none";
      const grad = sec.querySelector(".cine__grad");
      if (grad) grad.style.display = "none";
    }
  }, "Watch the film \xB7 2 min ", React.createElement("span", {
    className: "arr"
  }))))), React.createElement("section", {
    id: "owners-rep",
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
  }), " Owner's Representation \xB7 Project Management"), React.createElement("h2", {
    className: "h-1 u-mt-16 caps",
    style: {
      color: "var(--bone)"
    }
  }, "From entitlement to delivery.")), React.createElement("div", {
    className: "col-5"
  }, React.createElement("p", {
    className: "body-lg"
  }, "The same discipline behind our own developments, applied to your asset \u2014 one accountable advocate, a disciplined, gated path from first study to final handover, the owner informed and in command at every stage."), React.createElement("p", {
    className: "body u-mt-16",
    style: {
      color: "var(--bone-soft)",
      maxWidth: "52ch"
    }
  }, "From site preparation through building completion we manage and oversee every element of design and construction with a single point of contact \u2014 suggesting the best use of land, orchestrating architecture through engineering, and handling all zoning, permitting, approvals and entitlements, with transparent, open communication throughout. The practice spans project management, general contracting, consulting, architecture and interior design."))), React.createElement("div", {
    className: "flow u-mt-64"
  }, PROCESS.map(([n, t, d]) => React.createElement("div", {
    key: n,
    className: "flow__step"
  }, React.createElement("div", {
    className: "flow__num"
  }, n), React.createElement("div", {
    className: "flow__name"
  }, t), React.createElement("p", {
    className: "flow__desc"
  }, d)))), React.createElement("button", {
    className: "btn btn--ghost u-mt-64",
    onClick: () => go("approach"),
    "data-magnetic": true
  }, "Our full capabilities ", React.createElement("span", {
    className: "arr"
  })))), React.createElement("section", {
    id: "about",
    className: "section"
  }, React.createElement("div", {
    className: "wrap grid-12"
  }, React.createElement("div", {
    className: "col-4 reveal"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " The Firm"), React.createElement("h2", {
    className: "h-1 u-mt-16 caps",
    style: {
      maxWidth: "9ch"
    }
  }, "Perception by intellect.")), React.createElement("div", {
    className: "col-8 reveal"
  }, React.createElement("p", {
    className: "lede"
  }, "Noesis is the Greek word for understanding. We are a real-estate development and investment firm \u2014 founded in 2009, based in Beverly Hills, working internationally."), React.createElement("p", {
    className: "body-lg u-mt-24",
    style: {
      maxWidth: "64ch"
    }
  }, "Our founder began with single-family residences, striving to provide a distinctly unique product that would enhance the lives of those it touched while benefiting the communities around it. Today that mission spans small-lot subdivisions, apartment buildings and other residential and commercial developments \u2014 with our capital invested alongside our partners', and our delivery discipline offered to a select few owners as their representative."))), React.createElement("div", {
    className: "wrap u-mt-64"
  }, React.createElement("div", {
    className: "eyebrow reveal"
  }, React.createElement("span", {
    className: "dot"
  }), " How We Work"), React.createElement("div", {
    className: "reveal qgrid"
  }, ABOUT_VALUES.map(([t, d], i) => React.createElement("div", {
    key: t
  }, React.createElement("div", {
    className: "wwd-cap__n"
  }, "0", i + 1), React.createElement("div", {
    style: {
      fontFamily: "var(--sans)",
      fontWeight: 300,
      fontSize: "clamp(18px,1.6vw,22px)",
      marginTop: 14,
      color: "var(--ink)"
    }
  }, t), React.createElement("p", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 13.5,
      lineHeight: 1.6,
      marginTop: 10
    }
  }, d))))), React.createElement("div", {
    className: "wrap u-mt-64"
  }, React.createElement("div", {
    className: "pair reveal"
  }, React.createElement("figure", null, React.createElement("img", {
    src: wix(PHOTO.genesee_int_1, {
      w: 1500
    }),
    alt: "My Genesee living room, Beverly Grove",
    loading: "lazy"
  }), React.createElement("figcaption", null, "My Genesee \u2014 Beverly Grove")), React.createElement("figure", null, React.createElement("img", {
    src: wix(PHOTO.genesee_int_2, {
      w: 1200
    }),
    alt: "My Genesee kitchen, Beverly Grove",
    loading: "lazy"
  }), React.createElement("figcaption", null, "Four residences \xB7 2019"))))), React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 0,
      borderTop: 0
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "eyebrow reveal",
    style: {
      marginBottom: "clamp(24px,3vw,36px)"
    }
  }, React.createElement("span", {
    className: "dot"
  }), " Founder"), React.createElement("div", {
    className: "grid-12 reveal",
    style: {
      gap: 48,
      alignItems: "start"
    }
  }, React.createElement("div", {
    className: "col-5"
  }, React.createElement("div", {
    className: "thumb thumb--tall",
    style: {
      overflow: "hidden"
    }
  }, React.createElement("img", {
    src: wix(PHOTO.igal, {
      w: 1100
    }),
    alt: FOUNDER.name,
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
      fontSize: 30,
      letterSpacing: "-.01em",
      lineHeight: 1.05,
      color: "var(--ink)"
    }
  }, FOUNDER.name), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--accent-deep)",
      marginTop: 8
    }
  }, FOUNDER.title), React.createElement("div", {
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
  }, FOUNDER.prev), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--muted)",
      marginTop: 8
    }
  }, FOUNDER.edu)), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 18,
      borderTop: "1px solid var(--rule)",
      marginTop: 22,
      paddingTop: 22
    }
  }, FOUNDER.stats.map(([v, l]) => React.createElement("div", {
    key: l
  }, React.createElement("div", {
    style: {
      fontFamily: "var(--sans)",
      fontWeight: 200,
      fontSize: "clamp(22px,2.4vw,30px)",
      color: "var(--accent)",
      lineHeight: 1
    }
  }, v), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10.5,
      letterSpacing: ".06em",
      color: "var(--muted)",
      marginTop: 8,
      lineHeight: 1.35
    }
  }, l))))), React.createElement("div", {
    className: "col-7"
  }, React.createElement("p", {
    className: "lede"
  }, FOUNDER.bio[0]), FOUNDER.bio.slice(1).map((p, i) => React.createElement("p", {
    key: i,
    className: "body-lg u-mt-24",
    style: {
      maxWidth: "64ch"
    }
  }, p)))))), React.createElement("section", {
    id: "inquiries",
    className: "section"
  }, React.createElement("div", {
    className: "wrap grid-12",
    style: {
      gap: 56,
      alignItems: "start"
    }
  }, React.createElement("div", {
    className: "col-5 reveal"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Inquiries"), React.createElement("h2", {
    className: "h-display caps u-mt-16",
    style: {
      maxWidth: "12ch"
    }
  }, "Let's begin."), React.createElement("p", {
    className: "lede u-mt-24",
    style: {
      maxWidth: "44ch"
    }
  }, "Whether you have capital to deploy or a project to deliver, we welcome a confidential conversation. Every enquiry is reviewed personally by our principal, who responds within one business day."), React.createElement("div", {
    className: "u-mt-40"
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
      fontSize: 21,
      color: "var(--ink)",
      lineHeight: 1.35
    }
  }, "8383 Wilshire Blvd", React.createElement("br", null), "Suite 740", React.createElement("br", null), "Beverly Hills, CA 90211")), React.createElement("div", {
    className: "u-flex u-gap-40 u-mt-40",
    style: {
      flexWrap: "wrap"
    }
  }, React.createElement("div", null, React.createElement("div", {
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
      fontSize: 19,
      display: "block",
      color: "var(--ink)"
    }
  }, "T (310) 855 \xB7 3634"), React.createElement("div", {
    className: "body",
    style: {
      color: "var(--muted)",
      fontSize: 14
    }
  }, "F (424) 282 \xB7 8414")), React.createElement("div", null, React.createElement("div", {
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
      fontSize: 19,
      display: "block",
      color: "var(--ink)"
    }
  }, "INFO@NOESISUSA.COM")))), React.createElement("div", {
    className: "col-7 reveal"
  }, React.createElement(InquiryForm, {
    intent: intent
  })))));
}
const FORM_ENDPOINT = "";
function InquiryForm({
  intent
}) {
  const investor = intent === "investor";
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState("");
  const [role, setRole] = React.useState("");
  React.useEffect(() => {
    if (investor) setRole("Investor — capital partnership");
  }, [investor]);
  const submit = async e => {
    e.preventDefault();
    setError("");
    const fd = new FormData(e.currentTarget);
    const g = k => (fd.get(k) || "").toString();
    if (FORM_ENDPOINT) {
      try {
        setSubmitting(true);
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          body: fd,
          headers: {
            Accept: "application/json"
          }
        });
        if (!res.ok) throw new Error("bad status");
        setSent(true);
      } catch (err) {
        setError("Something went wrong sending your message. Please email info@noesisusa.com directly.");
      } finally {
        setSubmitting(false);
      }
      return;
    }
    const subject = `Enquiry${role ? " — " + role.split(" — ")[0] : ""}${g("name") ? " — " + g("name") : ""}`;
    const body = `Name: ${g("name")}\nEmail: ${g("email")}\nLocation: ${g("location")}\nReaching out as: ${role || "—"}\n\n${g("message")}`;
    window.location.href = `mailto:info@noesisusa.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  if (sent) return React.createElement("div", {
    style: {
      border: "1px solid var(--rule)",
      padding: "clamp(28px,4vw,48px)",
      background: "var(--paper)"
    }
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Received"), React.createElement("h3", {
    className: "h-2 u-mt-16"
  }, "Thank you."), React.createElement("p", {
    className: "body u-mt-16"
  }, investor ? "Your enquiry is reviewed personally by our principal and held in confidence." : "We've received your message and will respond within one business day."), !FORM_ENDPOINT && React.createElement("p", {
    className: "body u-mt-16",
    style: {
      color: "var(--muted)"
    }
  }, "If your mail app didn't open, write to us directly at ", React.createElement("a", {
    href: "mailto:info@noesisusa.com",
    style: {
      color: "var(--accent-deep)"
    }
  }, "info@noesisusa.com"), "."), React.createElement("button", {
    className: "btn btn--ghost u-mt-40",
    onClick: () => setSent(false)
  }, "Send another"));
  return React.createElement("form", {
    onSubmit: submit,
    style: {
      border: "1px solid var(--rule)",
      padding: "clamp(28px,4vw,48px)",
      background: "var(--paper)"
    }
  }, React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 22
    }
  }, React.createElement("span", {
    className: "dot"
  }), " ", investor ? "Confidential investor introduction" : "Send a message"), React.createElement("div", {
    className: "form-grid"
  }, React.createElement("div", {
    className: "field"
  }, React.createElement("label", null, "Name"), React.createElement("input", {
    name: "name",
    type: "text",
    placeholder: "Your name",
    required: true
  })), React.createElement("div", {
    className: "field"
  }, React.createElement("label", null, "Email"), React.createElement("input", {
    name: "email",
    type: "email",
    placeholder: "you@email.com",
    required: true
  })), React.createElement("div", {
    className: "field"
  }, React.createElement("label", null, "Location"), React.createElement("input", {
    name: "location",
    type: "text",
    placeholder: "City / country"
  })), React.createElement("div", {
    className: "field"
  }, React.createElement("label", null, "I'm reaching out as"), React.createElement("select", {
    name: "role",
    value: role,
    onChange: e => setRole(e.target.value),
    required: true
  }, React.createElement("option", {
    value: "",
    disabled: true
  }, "Select one"), React.createElement("option", null, "Investor \u2014 capital partnership"), React.createElement("option", null, "Owner / Principal \u2014 a project to deliver"), React.createElement("option", null, "Developer \u2014 owner's rep / project management"), React.createElement("option", null, "Other"))), React.createElement("div", {
    className: "field",
    style: {
      gridColumn: "1 / -1"
    }
  }, React.createElement("label", null, "Message"), React.createElement("textarea", {
    name: "message",
    rows: "5",
    placeholder: "Tell us about your interest in investing, or your project.",
    required: true
  }))), React.createElement("div", {
    role: "status",
    "aria-live": "polite"
  }, error && React.createElement("p", {
    className: "body u-mt-24",
    style: {
      color: "var(--accent-deep)"
    }
  }, error)), React.createElement("div", {
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
    className: "btn",
    disabled: submitting
  }, submitting ? "Sending…" : "Send Enquiry", " ", React.createElement("span", {
    className: "arr"
  }))));
}
window.Home = Home;
const CAPABILITIES = [["01", "Project Management · Owner's Representation", "One point of contact from site preparation through building completion. We represent the owner and investor — suggesting the best use of land, analyzing financial decisions, and orchestrating everything from architecture to engineering, with all zoning, permitting, approvals and entitlements handled and transparent, open communication throughout."], ["02", "Architecture & Design", "Innovative designs where quality, craftsmanship and functionality reign supreme. From inception we scrutinize every detail: complete site analyses, a theme that drives the design, and the latest green, audio-visual and smart-home technologies — delivered as meticulously planned blueprints our contractors delight in making real."], ["03", "Interior Design", "Comprehensive interior design and planning with an emphasis on modern, thoughtful minimalism — livable and tranquil, yet open to bold statements. Elements curated from around the world — Moroccan doors, handmade glass tiles by Israeli artists — with every detail planned, from interior elevations and fireplace planning to custom cabinetry and ceiling lighting, brought to life through vision boards."], ["04", "General Contracting", "We bring blueprints to life through a reputable, trustworthy network of construction professionals — supervising every trade daily: foundation, framing, plumbing, electrical, HVAC, smart-home automation, A/V, custom cabinetry, roofing and waterproofing, plaster, drywall, millwork and insulation."], ["05", "Feasibility & Entitlement", "Site and market analysis, highest-and-best-use studies, financial modeling, and the planning, zoning and permitting strategy that determines whether — and how — a project can be built."], ["06", "Consulting", "As-needed advisory for design and construction projects — permit approvals, construction management, site visits and design questions. Consider us your advocate, with our experience and market knowledge put to work for you."]];
const SECTORS = [{
  tag: "Luxury Residential",
  title: "Custom family estates, from $5M",
  img: "genesee_int_5",
  desc: "For principals building a primary residence or estate, we manage architects, interiors and craftsmen to an exacting standard — with the discretion ultra-prime work demands."
}, {
  tag: "Commercial & Multifamily",
  title: "Owner's rep for large-scale projects",
  img: "ying_ext_tall",
  desc: "For developers and institutions delivering major commercial and multifamily assets, we bring program discipline, cost certainty and a builder's judgment to every phase."
}];
function Approach({
  go
}) {
  return React.createElement("main", {
    className: "page-enter"
  }, React.createElement("section", {
    style: {
      paddingTop: "clamp(120px, 12vh, 150px)",
      paddingBottom: "clamp(28px, 4vw, 48px)"
    }
  }, React.createElement("div", {
    className: "wrap grid-12",
    style: {
      alignItems: "end"
    }
  }, React.createElement("div", {
    className: "col-7"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Services \xB7 For Owners & Developers"), React.createElement("h1", {
    className: "h-display lx-h u-mt-24",
    style: {
      maxWidth: "12ch"
    }
  }, React.createElement("span", {
    className: "ln"
  }, React.createElement("span", null, "We represent")), React.createElement("span", {
    className: "ln"
  }, React.createElement("span", null, "the owner.")))), React.createElement("div", {
    className: "col-5"
  }, React.createElement("p", {
    className: "lede"
  }, "A major project is won or lost in the management of it. Noesis is the owner's representative and development manager who carries that responsibility \u2014 protecting your vision, your capital and your timeline from the first study to the final handover."), React.createElement("p", {
    className: "body u-mt-16",
    style: {
      color: "var(--muted)",
      maxWidth: "52ch"
    }
  }, "We are engaged by private owners, family offices and developers building landmark residential and commercial projects \u2014 people for whom the cost of getting it right is repaid many times over.")))), React.createElement("section", {
    className: "section",
    style: {
      paddingTop: "clamp(28px,3vw,44px)"
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "eyebrow reveal"
  }, React.createElement("span", {
    className: "dot"
  }), " The Platform"), React.createElement("div", {
    className: "rows u-mt-24"
  }, CAPABILITIES.map(([n, t, d]) => React.createElement("div", {
    key: n,
    className: "row reveal"
  }, React.createElement("div", {
    className: "row__idx"
  }, n), React.createElement("div", {
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
    className: "eyebrow reveal",
    style: {
      marginBottom: 28
    }
  }, React.createElement("span", {
    className: "dot"
  }), " Where We Work"), React.createElement("div", {
    className: "sectors reveal"
  }, SECTORS.map(s => React.createElement("article", {
    key: s.tag,
    className: "sector"
  }, React.createElement("div", {
    className: "sector__img"
  }, React.createElement("img", {
    src: wix(PHOTO[s.img], {
      w: 1500
    }),
    alt: s.title,
    loading: "lazy"
  }), React.createElement("div", {
    className: "sector__grad"
  })), React.createElement("div", {
    className: "sector__body"
  }, React.createElement("div", {
    className: "sector__tag"
  }, s.tag), React.createElement("div", {
    className: "sector__title"
  }, s.title), React.createElement("p", {
    className: "sector__desc"
  }, s.desc))))))), React.createElement("section", {
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
  }), " The Design Philosophy")), React.createElement("div", {
    className: "col-8 reveal"
  }, React.createElement("p", {
    className: "pull",
    style: {
      maxWidth: "30ch",
      color: "var(--ink)"
    }
  }, "Contemporary in nature, with minimalist elements that provide a ", React.createElement("em", null, "warm, earthy and organic"), " sensibility."), React.createElement("p", {
    className: "body-lg u-mt-24",
    style: {
      maxWidth: "64ch"
    }
  }, "We subscribe to the notion that less is more and refrain from over-designing \u2014 we let our design and finishes speak for themselves. With a multicultural heritage \u2014 both Igal Azran, principal, and Stephanie Harroch, architect, are from Morocco \u2014 a subtle Mediterranean and Spanish influence runs through our fresh, environmentally sustainable work.")))), React.createElement("section", {
    className: "cine",
    style: {
      height: "min(72vh, 680px)",
      minHeight: 420
    }
  }, React.createElement("img", {
    className: "cine__img img--warm",
    "data-parallax": "0.1",
    src: "assets/img/build-pour.jpg",
    alt: "A Noesis concrete pour, Los Angeles"
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
      color: "rgba(236,230,216,.62)"
    }
  }, React.createElement("span", {
    className: "dot"
  }), " On Site \xB7 Self-Delivered"), React.createElement("h2", {
    className: "h-1 caps u-mt-16",
    style: {
      color: "var(--bone)",
      maxWidth: "20ch"
    }
  }, "The single party at the table accountable for the whole.")))), React.createElement("section", {
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
    onClick: () => go("inquiries")
  }, "Start a Conversation ", React.createElement("span", {
    className: "arr"
  }))))));
}
window.Approach = Approach;
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
    video: "assets/oneoak-film.mp4?v=2",
    text: "One Oak is truly a one-of-a-kind masterpiece designed to astound. Located atop a serene enclave on a private street, the two-story residence boasts jetliner views of the city and coastline, with a sleek, open-air concept that freely ebbs and flows to maximize the view.\n\nNoesis Group carefully crafted this four-bedroom, five-bath smart home with 12-foot ceilings, a 500-bottle wine cellar, a gourmet kitchen and top-of-the-line cabinetry and appliances. The expansive terrace opens to a true infinity-edge pool with jacuzzi, multi-colored lighting and outdoor living.",
    facts: [["Bedrooms", "4"], ["Baths", "5"], ["Ceilings", "12 ft"], ["Built", "2015"]]
  }, {
    id: "casa-mani",
    name: "Casa Mani",
    loc: "Beverly Hills",
    year: "2018",
    gallery: GAL["casa-mani"],
    text: "A unique, contemporary retreat in the heart of Beverly Hills, Casa Mani sits minutes from the area's acclaimed schools, shopping, dining and nightlife. This exquisitely crafted contemporary by Noesis Group is a model of style and sophistication from the outside in.\n\nSix bedrooms and eight baths, Miele wine refrigerators, a fully glass-enclosed gym, and a spa-inspired bath with steam shower and its own private massage room. The backyard is built around a zero-edge saltwater pool screened by tall hedging, with energy-efficient landscaping, a Control4 smart-home system and designer fixtures throughout.",
    facts: [["Bedrooms", "6"], ["Baths", "8"], ["Pool", "Zero-edge saltwater"], ["Built", "2018"]]
  }, {
    id: "aura-house",
    name: "Aura House",
    loc: "Tel Aviv",
    year: "2017",
    gallery: GAL["aura-house"],
    text: "Located in a highly coveted area of Tel Aviv, Aura House offers an open, luxurious, modern design that maximizes space and provides an airy feel — the Noesis standard, delivered abroad.\n\nSold over the asking price, this 4,500-square-foot tri-level property is equipped with a luxe elevator and soaring ceilings. With six bedrooms and seven baths, Aura House is the lap of luxury in one of the most up-and-coming cities in the world.",
    facts: [["Bedrooms", "6"], ["Baths", "7"], ["Size", "4,500 sf"], ["Sold", "Over asking"]]
  }, {
    id: "c-thru",
    name: "C Thru",
    loc: "Beverly Grove, Los Angeles",
    year: "2016",
    gallery: GAL["c-thru"],
    text: "Located in the highly desired area of Beverly Grove, just minutes from world-class shopping and dining, C Thru is the definition of style and sophistication from the outside in. Gated and hedged, the home's floating-box façade pairs wood and ceramic with large windows and LED light strips for a distinctive twilight appeal.\n\nInside, the open floor plan — a Noesis Group signature — features soaring ceilings, wide-plank oak floors and a suspended staircase. Two en-suite guest rooms with designer baths and balconies join a master suite with fireplace, wet bar, showroom closet and soaking tub. A large backyard with a zero-edge saltwater pool and spa, Control4 smart-home and designer fixtures complete the home.",
    facts: [["Neighborhood", "Beverly Grove"], ["Floors", "Wide-plank oak"], ["Pool", "Zero-edge saltwater"], ["Built", "2016"]]
  }, {
    id: "lolivier",
    name: "L'Olivier House",
    loc: "Los Angeles",
    year: "2015",
    gallery: GAL["lolivier"],
    text: "The majestic 120-year-old olive tree situated in front of the two-story L'Olivier house served as the sole inspiration for this home from start to finish.\n\nBuilt in 2015, the nearly 5,000-square-foot home features four bedrooms, 4.5 baths and an office, and maximizes natural light while keeping a luxurious, sophisticated ambiance throughout. The glamorous master is expansive, with a sitting area and oversized bath whose meticulous tilework accentuates a worldly feel, overlooking the pool and outdoor space — a testament to Noesis Group's commitment to design and detail.",
    facts: [["Size", "~5,000 sf"], ["Bedrooms", "4"], ["Baths", "4.5"], ["Built", "2015"]]
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
    text: "Le Bijou — 'the jewel' in French — is a gem in the heart of Beverly Hills. At approximately 4,100 square feet, the spacious four-bedroom, 4.5-bath home offers a stunning bird's-eye view from the interior upper mezzanine down to the main floor, high ceilings, smartly placed lighting and various smart-home features.\n\nSeamless indoor-outdoor living is a reality: the sleek, modern gourmet kitchen sits near the formal dining and family rooms, overlooking the lush garden, terrace, pool and jacuzzi. With the finest finishes throughout, Le Bijou feels luxurious, tremendously elegant, yet entirely livable.",
    facts: [["Meaning", "“The Jewel”"], ["Size", "~4,100 sf"], ["Bedrooms", "4"], ["Baths", "4.5"]]
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
    text: "On the market for just three days and sold well over the asking price, Casa H broke real estate records. This approximately 4,500-square-foot, five-bedroom, 5.5-bath home stretches across an oversized 7,500-square-foot lot overlooking the Hollywood Hills.\n\nDesigned to maximize space, Casa H uses innovative cut-outs throughout for privacy and serenity, melding outdoor landscape with indoor living. The focal point is the exterior entertaining space — pool and cabana, a covered outdoor living area with double-sided fireplace, and a passageway to the lush garden and lawn.",
    facts: [["Sold", "In 3 days, over ask"], ["Size", "~4,500 sf"], ["Bedrooms", "5"], ["Baths", "5.5"]]
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
    text: "A spacious, architectural modern retreat, 29 Degrees is privately situated on a serene, tree-lined street minutes from the Beverly Hills school district, The Grove, the Beverly Center and West Hollywood's finest dining and shops. At more than 4,000 square feet, this contemporary home by Noesis Group is curated to maximize indoor-outdoor living with the Control4 technology system.\n\n29 Degrees boasts 23-foot ceilings that create a zen-like environment. The gourmet kitchen offers dual islands, bar seating and professional-grade appliances, while the exceptionally large spa-like master suite features a fireplace, custom closet, en-suite bath and private balcony.",
    facts: [["Size", ">4,000 sf"], ["Ceilings", "23 ft"], ["Tech", "Control4"], ["Built", "2016"]]
  }, {
    id: "en-suite",
    name: "En-Suite",
    loc: "Los Angeles",
    year: "2014",
    gallery: GAL["en-suite"],
    text: "The most alluring feature of En-Suite is the flawless organic flow of the nearly 4,000-square-foot home. Two spacious master suites with oversized, luxurious private baths balance the four-bedroom, six-bath plan, while ample natural light and outdoor living spaces marry interior and exterior.\n\nThe finest finishes and craftsmanship run throughout — clean lines, modern textures and impeccably designed built-in furniture. En-Suite is an entertainer's dream, from the artfully designed waterfall at the entrance to the pool-side patio and various terraces.",
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
    text: "Built and designed by Noesis Group, these brand-new townhouse apartments offer a glamorous lifestyle for trendsetters, tastemakers and families who want to live and play in the heart of Los Angeles — Stanley Lofts is walking distance from all the culture West Hollywood has to offer.\n\nFour boutique luxurious townhomes, each three bedrooms and 2.5 baths, finished with Porcelanosa and Graff tile and fixtures, Caesarstone countertops and custom Miton Italian kitchens. Every unit comes fully equipped with LG stainless appliances, full-size laundry and two covered parking spots, plus large partially grassed private rooftops with unobstructed Hollywood Hills views.",
    facts: [["Units", "4 townhomes"], ["Layout", "3 BD · 2.5 BA"], ["Kitchens", "Miton Italian"], ["Built", "2018"]]
  }, {
    id: "my-genesee",
    name: "My Genesee",
    loc: "Beverly Grove, Los Angeles",
    year: "2019",
    gallery: APT.genesee,
    cover: "genesee_ext_tall",
    text: "Discover luxury living at these brand-new three-bedroom units in the heart of one of Los Angeles's hottest neighborhoods, Beverly Grove. Designed and built by Noesis Group, these one-of-a-kind, three-bedroom, 2.5-bath condo-style apartments offer state-of-the-art Italian kitchens with Caesarstone countertops, new LG appliances, in-unit laundry and large custom walk-in closets.\n\nMy Genesee is a four-unit, fully secured building with reserved parking in a fully equipped garage. Each unit spans over 2,200 square feet of impeccable living space, with views of the city, downtown and the Hollywood Hills from a large private terrace.",
    facts: [["Units", "4-unit building"], ["Layout", "3 BD · 2.5 BA"], ["Size", ">2,200 sf/unit"], ["Built", "2019"]]
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
const FURTHER_RECORD = [["Minotti Residence", "Los Angeles", "2012", "Sold prior to completion — broke records for price per square foot. Five bedrooms, 5.5 baths, with the floating stairs that became a Noesis Group trademark."], ["Maison D'O", "Los Angeles", "2012", "Sold before completion. A bright, open-air plan of roughly 3,900 square feet built around the swimming pool as the centerpiece of the property."], ["First Take Home", "Los Angeles", "2011", "Sold pre-completion and set the precedent for many residences in the area — approximately 4,600 square feet, five bedrooms and five baths."], ["Suntro House", "Melrose, Los Angeles", "2017", "A uniquely modern retreat pairing flow and functionality — nearly 3,900 square feet, five bedrooms and five full baths, with towering windows and glass pocket doors."], ["Leva Townhomes", "Los Angeles", "2014", "Innovation by design — two brand-new townhomes added in the rear while the front building kept its original charm, fully remodeled inside."], ["Seek More Apartments", "Los Angeles", "2017", "Multifamily development on North Sycamore — part of the firm's expansion from single-family residences into apartment buildings."]];
function Projects({
  setPage
}) {
  const [tab, setTab] = React.useState("sfr");
  const cat = CATEGORIES.find(c => c.key === tab);
  const feat = cat.items[0];
  const rest = cat.items.slice(1);
  const openStory = p => setPage("story:" + p.id);
  return React.createElement("main", {
    className: "page-enter"
  }, React.createElement("section", {
    style: {
      paddingTop: "clamp(120px, 12vh, 150px)",
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
      top: 72,
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
    role: "button",
    tabIndex: 0,
    "aria-label": `Open the ${feat.name} story`,
    onClick: () => openStory(feat),
    onKeyDown: e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openStory(feat);
      }
    }
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
    onClick: () => openStory(feat)
  }, "View the Project ", React.createElement("span", {
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
      role: "button",
      tabIndex: 0,
      "aria-label": `Open the ${p.name} story`,
      onClick: () => openStory(p),
      onKeyDown: e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openStory(p);
        }
      }
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
    }, "View Project ", React.createElement("span", {
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
    className: "section",
    style: {
      paddingTop: 0,
      borderTop: 0
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "eyebrow reveal"
  }, React.createElement("span", {
    className: "dot"
  }), " Further Delivered Work \xB7 2011 \u2014 2017"), React.createElement("div", {
    className: "rows u-mt-24"
  }, FURTHER_RECORD.map(([name, loc, year, note], i) => React.createElement("div", {
    key: name,
    className: "row reveal"
  }, React.createElement("div", {
    className: "row__idx"
  }, "0", i + 1), React.createElement("div", null, React.createElement("div", {
    className: "row__title"
  }, name), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--accent-deep)",
      marginTop: 10
    }
  }, loc, " \xB7 ", year)), React.createElement("p", {
    className: "row__desc"
  }, note)))))), React.createElement("section", {
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
  }, "This standard, on ", React.createElement("em", {
    className: "accent"
  }, "your project."))), React.createElement("div", {
    className: "col-4 u-tr"
  }, React.createElement("button", {
    className: "btn",
    onClick: () => setPage("services")
  }, "How We Manage ", React.createElement("span", {
    className: "arr"
  }))))));
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
  const dialogRef = React.useRef(null);
  React.useEffect(() => {
    setOpen(true);
    const prevFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    const lenis = window.__motion && window.__motion.lenis;
    if (lenis && lenis.stop) lenis.stop();
    const onKey = e => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowRight") {
        go(1);
        return;
      }
      if (e.key === "ArrowLeft") {
        go(-1);
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const first = f[0],
          last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => {
      const c = dialogRef.current && dialogRef.current.querySelector(".lb__close");
      if (c) c.focus();
    }, 0);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
      if (lenis && lenis.start) lenis.start();
      window.removeEventListener("keydown", onKey);
      if (prevFocus && prevFocus.focus) prevFocus.focus();
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
    ref: dialogRef,
    className: `lb ${open ? "is-open" : ""}`,
    onClick: onBackdrop,
    role: "dialog",
    "aria-modal": "true",
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
const PROJECT_LIST = CATEGORIES.flatMap(c => c.items.map(it => ({
  ...it,
  category: c.label,
  categoryKey: c.key
})));
const PROJECTS = Object.fromEntries(PROJECT_LIST.map(p => [p.id, p]));
window.Projects = Projects;
window.Lightbox = Lightbox;
window.PROJECT_LIST = PROJECT_LIST;
window.PROJECTS = PROJECTS;
function storyParas(text) {
  return (text || "").split("\n\n").map(s => s.trim()).filter(Boolean);
}
function outcomeFor(p) {
  const facts = p.facts || [];
  const find = k => {
    const hit = facts.find(([kk]) => kk.toLowerCase() === k);
    return hit ? hit[1] : null;
  };
  const sold = find("sold");
  if (sold) return sold;
  const status = find("status");
  if (status) return status;
  const t = (p.text || "").toLowerCase();
  if (t.indexOf("sold above asking") !== -1) return "Delivered and sold above asking";
  if (t.indexOf("ahead of schedule") !== -1) return "Delivered ahead of schedule";
  return null;
}
function ProjectStory({
  project,
  go
}) {
  const p = project;
  const [lb, setLb] = React.useState(null);
  if (!p) {
    return React.createElement("main", {
      className: "page-enter section"
    }, React.createElement("div", {
      className: "wrap"
    }, React.createElement("div", {
      className: "eyebrow"
    }, React.createElement("span", {
      className: "dot"
    }), " Not found"), React.createElement("h1", {
      className: "h-1 caps u-mt-16"
    }, "This project could not be found."), React.createElement("button", {
      className: "btn u-mt-40",
      onClick: () => go("properties")
    }, "View all properties ", React.createElement("span", {
      className: "arr"
    }))));
  }
  const paras = storyParas(p.text);
  const cover = p.cover || p.gallery[0];
  const facts = p.facts || [];
  const outcome = outcomeFor(p);
  const bodyParas = paras.slice(1);
  const rest = p.gallery.filter(g => g !== cover);
  const scenes = rest.slice(0, 3);
  const list = typeof PROJECT_LIST !== "undefined" ? PROJECT_LIST : [];
  const idx = list.findIndex(x => x.id === p.id);
  const next = list.length ? list[(idx + 1) % list.length] : null;
  const prev = list.length ? list[(idx - 1 + list.length) % list.length] : null;
  const onImgError = e => {
    e.currentTarget.style.opacity = "0";
  };
  return React.createElement("main", {
    className: "page-enter story"
  }, React.createElement("section", {
    className: "cine story__cover",
    style: {
      minHeight: "100svh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    }
  }, React.createElement("img", {
    className: "cine__img img--warm",
    alt: p.name,
    fetchpriority: "high",
    sizes: "100vw",
    onError: onImgError,
    src: wix(cover, {
      w: 2000
    }),
    srcSet: `${wix(cover, {
      w: 1200
    })} 1200w, ${wix(cover, {
      w: 2000
    })} 2000w, ${wix(cover, {
      w: 2600
    })} 2600w`
  }), React.createElement("div", {
    className: "cine__grad"
  }), React.createElement("div", {
    className: "wrap",
    style: {
      position: "relative",
      zIndex: 1,
      paddingBottom: "clamp(52px,9vh,120px)"
    }
  }, React.createElement("div", {
    className: "eyebrow",
    "data-hero-fade": true,
    style: {
      color: "rgba(236,230,216,.72)"
    }
  }, React.createElement("span", {
    className: "dot"
  }), " ", p.category, p.year ? ` · ${p.year}` : ""), React.createElement("h1", {
    className: "h-display u-mt-16",
    style: {
      color: "var(--bone)",
      maxWidth: "15ch"
    }
  }, p.name), React.createElement("div", {
    className: "lede u-mt-16",
    "data-hero-fade": true,
    style: {
      color: "rgba(236,230,216,.86)",
      maxWidth: "40ch"
    }
  }, p.loc)), React.createElement("div", {
    className: "story__cue",
    "data-hero-fade": true,
    "aria-hidden": "true"
  }, React.createElement("span", null))), React.createElement("section", {
    className: "section"
  }, React.createElement("div", {
    className: "wrap grid-12",
    style: {
      alignItems: "start"
    }
  }, React.createElement("div", {
    className: "col-4 reveal"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " The Project"), React.createElement("div", {
    className: "story__role u-mt-24"
  }, "Designed, developed & delivered by Noesis")), React.createElement("div", {
    className: "col-8 reveal"
  }, paras[0] && React.createElement("p", {
    className: "lede"
  }, paras[0]))), facts.length > 0 && React.createElement("div", {
    className: "wrap u-mt-64 reveal"
  }, React.createElement("div", {
    className: "story__specs"
  }, facts.map(([k, v]) => React.createElement("div", {
    className: "story__spec",
    key: k
  }, React.createElement("div", {
    className: "k"
  }, k), React.createElement("div", {
    className: "v"
  }, v)))))), p.video && React.createElement("section", {
    className: "cine cine--video story__scene",
    style: {
      height: "min(92vh, 900px)",
      minHeight: 460
    }
  }, React.createElement("img", {
    className: "cine__img img--warm",
    alt: `${p.name} — film still`,
    loading: "lazy",
    onError: onImgError,
    src: wix(cover, {
      w: 1600
    })
  }), React.createElement("video", {
    className: "cine__vid",
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "none",
    poster: wix(cover, {
      w: 1200
    }),
    src: p.video,
    ref: el => {
      if (!el || el.__keeper) return;
      el.__keeper = true;
      el.muted = true;
      el.__inView = false;
      const tryPlay = () => {
        if (!el.isConnected) {
          clearInterval(el.__iv);
          document.removeEventListener("visibilitychange", tryPlay);
          if (el.__io) el.__io.disconnect();
          return;
        }
        if (!document.hidden && el.__inView) {
          if (el.paused) {
            const pr = el.play();
            if (pr && pr.catch) pr.catch(() => {});
          }
        } else if (!el.paused) {
          el.pause();
        }
      };
      if ("IntersectionObserver" in window) {
        el.__io = new IntersectionObserver(e => {
          el.__inView = e[0] && e[0].isIntersecting;
          tryPlay();
        }, {
          threshold: 0.15
        });
        el.__io.observe(el);
      }
      el.__iv = setInterval(tryPlay, 2500);
      document.addEventListener("visibilitychange", tryPlay);
    }
  }), React.createElement("div", {
    className: "cine__grad"
  }), React.createElement("div", {
    className: "cine__cap"
  }, React.createElement("div", {
    className: "wrap",
    style: {
      paddingBottom: "clamp(28px,5vw,56px)"
    }
  }, React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "rgba(236,230,216,.62)"
    }
  }, React.createElement("span", {
    className: "dot"
  }), " ", p.name, " \u2014 on film")))), Array.from({
    length: Math.max(bodyParas.length, scenes.length)
  }).map((_, i) => React.createElement(React.Fragment, {
    key: i
  }, scenes[i] && React.createElement("section", {
    className: "cine story__scene",
    style: {
      height: "min(92vh, 900px)",
      minHeight: 460
    }
  }, React.createElement("img", {
    className: "cine__img img--warm",
    "data-parallax": "0.16",
    loading: "lazy",
    sizes: "100vw",
    onError: onImgError,
    alt: `${p.name} — view ${i + 1}`,
    src: wix(scenes[i], {
      w: 2000
    }),
    srcSet: `${wix(scenes[i], {
      w: 1200
    })} 1200w, ${wix(scenes[i], {
      w: 2000
    })} 2000w`
  }), React.createElement("div", {
    className: "cine__grad"
  })), bodyParas[i] && React.createElement("section", {
    className: "section story__narrative"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("p", {
    className: "story__prose reveal"
  }, bodyParas[i]))))), outcome && React.createElement("section", {
    className: "section section--ink"
  }, React.createElement("div", {
    className: "wrap",
    style: {
      textAlign: "center"
    }
  }, React.createElement("div", {
    className: "eyebrow reveal",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      justifyContent: "center"
    }
  }, React.createElement("span", {
    className: "dot"
  }), " Outcome"), React.createElement("h2", {
    className: "h-1 caps reveal",
    style: {
      color: "var(--bone)",
      maxWidth: "22ch",
      margin: "18px auto 0"
    }
  }, outcome))), p.gallery.length > 1 && React.createElement("section", {
    className: "section"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "grid-12 u-end reveal",
    style: {
      marginBottom: "clamp(24px,3vw,40px)"
    }
  }, React.createElement("div", {
    className: "col-8"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), " Gallery"), React.createElement("h2", {
    className: "h-2 u-mt-16",
    style: {
      textTransform: "none"
    }
  }, "Inside ", p.name)), React.createElement("div", {
    className: "col-4 u-tr"
  }, React.createElement("button", {
    className: "btn btn--ghost",
    onClick: () => setLb({
      index: 0
    }),
    "data-magnetic": true
  }, "Open full gallery ", React.createElement("span", {
    className: "arr"
  })))), React.createElement("div", {
    className: "collage reveal"
  }, p.gallery.map((img, i) => React.createElement("article", {
    key: img,
    className: "pcard",
    role: "button",
    tabIndex: 0,
    "aria-label": `${p.name} — photograph ${i + 1}`,
    onClick: () => setLb({
      index: i
    }),
    onKeyDown: e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setLb({
          index: i
        });
      }
    }
  }, React.createElement("div", {
    className: "pcard__media"
  }, React.createElement("img", {
    className: "pcard__img",
    alt: `${p.name} — ${i + 1}`,
    loading: "lazy",
    onError: onImgError,
    src: wix(img, {
      w: 900
    }),
    srcSet: `${wix(img, {
      w: 600
    })} 600w, ${wix(img, {
      w: 900
    })} 900w, ${wix(img, {
      w: 1300
    })} 1300w`,
    sizes: "(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
  }), React.createElement("div", {
    className: "pcard__over"
  }, React.createElement("span", {
    className: "pcard__cta",
    style: {
      marginTop: "auto"
    }
  }, "View ", React.createElement("span", {
    className: "arr"
  }))))))))), next && React.createElement("section", {
    className: "cine story__next",
    style: {
      minHeight: "70svh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    }
  }, React.createElement("img", {
    className: "cine__img img--warm",
    alt: next.name,
    loading: "lazy",
    onError: onImgError,
    sizes: "100vw",
    src: wix(next.cover || next.gallery[0], {
      w: 2000
    }),
    srcSet: `${wix(next.cover || next.gallery[0], {
      w: 1200
    })} 1200w, ${wix(next.cover || next.gallery[0], {
      w: 2000
    })} 2000w`
  }), React.createElement("div", {
    className: "cine__grad"
  }), React.createElement("div", {
    className: "cine__cap"
  }, React.createElement("div", {
    className: "wrap",
    style: {
      paddingBottom: "clamp(40px,7vw,92px)"
    }
  }, React.createElement("button", {
    className: "story__next-hit",
    onClick: () => go("story:" + next.id),
    "data-magnetic": true,
    "aria-label": `Open next project — ${next.name}`
  }, React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "rgba(236,230,216,.62)"
    }
  }, React.createElement("span", {
    className: "dot"
  }), " Next Project"), React.createElement("span", {
    className: "h-display story__next-name u-mt-8"
  }, next.name)), React.createElement("div", {
    className: "story__endnav"
  }, prev && React.createElement("button", {
    className: "story__navlink",
    onClick: () => go("story:" + prev.id)
  }, "\u2190 Previous \xB7 ", prev.name), React.createElement("button", {
    className: "story__navlink",
    onClick: () => go("properties")
  }, "All properties \u2192"))))), lb && React.createElement(Lightbox, {
    project: p,
    start: lb.index,
    onClose: () => setLb(null)
  }));
}
window.ProjectStory = ProjectStory;
const TWEAK_DEFAULTS = {
  "accent": "#9A6A3E",
  "displayFont": "Jost"
};
const ACCENTS = ["#9A6A3E", "#7A5236", "#B04A28", "#6E5C3E", "#8A8270"];
const DISPLAY_FONTS = ["Jost", "Fraunces", "Helvetica Neue"];
const SECTION_IDS = ["development", "investment", "projects", "owners-rep", "about", "inquiries"];
const NAV_OFFSET = 72;
function App() {
  const [view, setView] = React.useState("home");
  const [story, setStory] = React.useState(null);
  const [active, setActive] = React.useState(null);
  const [intent, setIntent] = React.useState(null);
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const pending = React.useRef(null);
  const returnTo = React.useRef("properties");
  const lenis = () => window.__motion && window.__motion.lenis || null;
  const scrollToId = React.useCallback(id => {
    if (id === "top" || id === "hero") {
      const l = lenis();
      if (l) l.scrollTo(0, {
        duration: 1.1
      });else window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const l = lenis();
    if (l) l.scrollTo(el, {
      offset: -NAV_OFFSET,
      duration: 1.1
    });else el.scrollIntoView({
      behavior: "smooth"
    });
  }, []);
  const hashFor = id => {
    if (typeof id === "string" && id.indexOf("story:") === 0) return "#/portfolio/" + id.slice(6);
    if (id === "properties") return "#/portfolio";
    if (id === "approach") return "#/approach";
    if (id === "top" || id === "hero") return "#/";
    return "#/" + id;
  };
  const go = React.useCallback((id, silent) => {
    if (!silent) {
      try {
        history.pushState(null, "", hashFor(id));
      } catch (e) {}
    }
    if (typeof id === "string" && id.indexOf("story:") === 0) {
      if (view !== "story") returnTo.current = view === "home" ? "home" : "properties";
      setStory(id.slice(6));
      setView("story");
      const l = lenis();
      if (l && l.scrollTo) l.scrollTo(0, {
        immediate: true
      });
      window.scrollTo({
        top: 0,
        behavior: "auto"
      });
      return;
    }
    if (id === "properties" || id === "approach") {
      setView(id);
      window.scrollTo({
        top: 0,
        behavior: "auto"
      });
      return;
    }
    if (view !== "home") {
      pending.current = id;
      setView("home");
      return;
    }
    scrollToId(id);
  }, [view, scrollToId]);
  const applyHash = React.useCallback(() => {
    const h = window.location.hash || "";
    const m = h.match(/^#\/([^/]*)(?:\/(.+))?$/);
    if (!m || !m[1]) {
      if (h === "" || h === "#/" || h === "#") go("top", true);
      return;
    }
    const seg = m[1],
      sub = m[2];
    if (seg === "portfolio") return go(sub ? "story:" + sub : "properties", true);
    if (seg === "approach") return go("approach", true);
    if (SECTION_IDS.indexOf(seg) !== -1) return go(seg, true);
  }, [go]);
  React.useEffect(() => {
    window.addEventListener("popstate", applyHash);
    return () => window.removeEventListener("popstate", applyHash);
  }, [applyHash]);
  React.useEffect(() => {
    if (window.location.hash && window.location.hash !== "#/") {
      const t = setTimeout(applyHash, 150);
      return () => clearTimeout(t);
    }
  }, []);
  React.useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
    document.documentElement.style.setProperty("--accent-deep", shade(t.accent, -0.18));
    const stack = `"${t.displayFont}", "Helvetica Neue", Arial, sans-serif`;
    document.documentElement.style.setProperty("--serif", stack);
  }, [t.accent, t.displayFont]);
  React.useEffect(() => {
    if (window.__motion) window.__motion.refresh();
    const base = "Noesis Group — Real Estate Development & Investment";
    if (view === "story" && story && typeof PROJECTS !== "undefined" && PROJECTS[story]) {
      document.title = PROJECTS[story].name + " · Portfolio | Noesis Group";
    } else if (view === "properties") {
      document.title = "Portfolio · The Delivered Record | Noesis Group";
    } else if (view === "approach") {
      document.title = "Owner's Representation & Capabilities | Noesis Group";
    } else {
      document.title = base + " | Owner's Representation";
    }
    if (view === "home" && pending.current) {
      const id = pending.current;
      pending.current = null;
      setTimeout(() => scrollToId(id), 60);
    }
  }, [view, story, scrollToId]);
  React.useEffect(() => {
    if (view !== "home") {
      setActive(null);
      return;
    }
    const els = SECTION_IDS.map(id => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const seen = new Set();
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) seen.add(e.target.id);else seen.delete(e.target.id);
      });
      const first = SECTION_IDS.find(id => seen.has(id));
      setActive(first || (window.scrollY < 120 ? null : active));
    }, {
      rootMargin: "-45% 0px -50% 0px",
      threshold: 0
    });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [view]);
  const projectsNav = React.useCallback(p => {
    if (p === "services") return go("owners-rep");
    if (p === "home") return go("top");
    go(p);
  }, [go]);
  return React.createElement(React.Fragment, null, React.createElement(Nav, {
    active: active,
    go: go
  }), view === "home" ? React.createElement(Home, {
    go: go,
    intent: intent,
    setIntent: setIntent
  }) : view === "approach" ? React.createElement(React.Fragment, null, React.createElement("button", {
    className: "back-home",
    onClick: () => go("owners-rep"),
    "aria-label": "Back to Owner's Representation"
  }, React.createElement("span", {
    className: "back-home__arr",
    "aria-hidden": "true"
  }), " Back"), React.createElement(Approach, {
    go: go
  })) : view === "story" ? React.createElement(React.Fragment, null, React.createElement("button", {
    className: "back-home",
    onClick: () => go(returnTo.current === "home" ? "projects" : "properties"),
    "aria-label": returnTo.current === "home" ? "Back to home" : "Back to properties"
  }, React.createElement("span", {
    className: "back-home__arr",
    "aria-hidden": "true"
  }), " Back"), React.createElement(ProjectStory, {
    key: story,
    project: typeof PROJECTS !== "undefined" ? PROJECTS[story] : null,
    go: go
  })) : React.createElement(React.Fragment, null, React.createElement("button", {
    className: "back-home",
    onClick: () => go("projects"),
    "aria-label": "Back to home"
  }, React.createElement("span", {
    className: "back-home__arr",
    "aria-hidden": "true"
  }), " Back"), React.createElement(Projects, {
    setPage: projectsNav
  })), React.createElement(Footer, {
    go: go
  }), /[?&]tweaks=1/.test(window.location.search) && React.createElement(TweaksPanel, null, React.createElement(TweakSection, {
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
    label: "View"
  }), React.createElement(TweakSelect, {
    label: "Switch view",
    value: view,
    options: ["home", "properties"],
    onChange: v => setView(v)
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
