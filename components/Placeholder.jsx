// Image helpers + Placeholder
// Wix CDN helper: build a sized image URL from a base ID.

function wix(id, opts = {}) {
  // Accept either a PHOTO key (e.g. "ying_ext_tall") or a raw wix media id.
  if (typeof PHOTO !== "undefined" && PHOTO[id]) id = PHOTO[id];
  // Offline/standalone: if the bundler inlined this media, return its blob URL.
  if (typeof window !== "undefined" && window.__resources && window.__MEDIA2KEY) {
    const key = window.__MEDIA2KEY[id];
    if (key && window.__resources[key]) return window.__resources[key];
  }
  // Wix CDN requires both w + h. `fit` preserves aspect (no crop); CSS object-fit handles cropping.
  const { w = 1600, h = w, q = 88, mode = "fit" } = opts;
  return `https://static.wixstatic.com/media/${id}/v1/${mode}/w_${w},h_${h},al_c,q_${q},enc_avif,quality_auto/${id}`;
}

// Curated photo set sourced from noesisusa.com (Stanley Lofts, Ying Yang Lofts, My Genesee).
// Mapped to the new institutional positioning.
const PHOTO = {
  // Hero exteriors
  stanley_ext_1:  "5c383b_4526984e710449c982db5b10fd6a008d~mv2_d_4928_3280_s_4_2.jpg",
  stanley_ext_2:  "5c383b_2ebb5989e45c4ef9964ce2c9f4e84e65~mv2_d_4928_3280_s_4_2.jpg",
  stanley_wide:   "5c383b_4584eb61a34148e7a662f9e636c16302~mv2_d_3992_2242_s_2.jpg",
  stanley_wide_2: "5c383b_8c58344d19774f59888c34595ae64132~mv2_d_3992_2242_s_2.jpg",
  stanley_int_1:  "5c383b_469fa67d063943bda7935b741804a24c~mv2_d_4928_3280_s_4_2.jpg",
  stanley_int_2:  "5c383b_6b036622986c43698ccd06c019a3a4f9~mv2_d_4928_3280_s_4_2.jpg",
  stanley_int_3:  "5c383b_89aab583806e4b2abf58690bf8fbf257~mv2_d_4913_3270_s_4_2.jpg",
  stanley_int_4:  "5c383b_7572778e768540a28916bf010e7799b7~mv2_d_4928_3280_s_4_2.jpg",
  stanley_int_5:  "5c383b_97261aa2dccc40d2968992bca21932f1~mv2_d_4925_3278_s_4_2.jpg",

  ying_ext_tall:  "5c383b_410f4aecfa8c4af3884ef4a170843a94~mv2_d_3280_4928_s_4_2.jpg",
  ying_wide:      "5c383b_a649ee414b654cbd96febb7b5459a67d~mv2_d_3992_2242_s_2.jpg",
  ying_int_1:     "5c383b_eed13ee3036b4392849efb36f4db9088~mv2_d_4916_3272_s_4_2.jpg",
  ying_int_2:     "5c383b_57c8faa24c5844e481cfbfc6e52eb6c3~mv2_d_4928_3280_s_4_2.jpg",
  ying_int_3:     "5c383b_88848ac850024e3186a1bea3935877d3~mv2_d_3236_4862_s_4_2.jpg",
  ying_int_4:     "5c383b_d9ad3e70450849269379cdf4d63f425d~mv2_d_3280_4928_s_4_2.jpg",
  ying_int_5:     "5c383b_18b43395cbf84f56b006a3e3bf7df051~mv2_d_3268_4910_s_4_2.jpg",
  ying_int_6:     "5c383b_ce70a1456bf5467f8019665865d50bab~mv2_d_4928_3280_s_4_2.jpg",
  ying_int_7:     "5c383b_f3b44fa483e54cdeba4aaee274b09a17~mv2_d_4928_3280_s_4_2.jpg",

  genesee_ext_tall: "5c383b_c7af355fa0124a47a6e6b7e14a9e4f6a~mv2_d_3280_4928_s_4_2.jpg",
  genesee_wide:     "5c383b_f58da50c87764b58b3ebabac82e8ded5~mv2_d_3992_2242_s_2.jpg",
  genesee_int_1:    "5c383b_305f1ebcf586400ea6e4afa1d7f5cf41~mv2_d_4747_3160_s_4_2.jpg",
  genesee_int_2:    "5c383b_fc489c6dee6649558bcd06960907dff7~mv2_d_4712_3146_s_4_2.jpg",
  genesee_int_3:    "5c383b_6b842c985e55480ca4ac1a4ed918d4cb~mv2_d_4928_3280_s_4_2.jpg",
  genesee_int_4:    "5c383b_e3ed6cee61c14125b1dab214025b282e~mv2_d_4850_3229_s_4_2.jpg",
  genesee_int_5:    "5c383b_ec10eb75197849b9a30b976ea4618e92~mv2_d_4784_3184_s_4_2.jpg",
  genesee_int_6:    "5c383b_e746200c864643859a1c1124c549e3e3~mv2_d_4809_3205_s_4_2.jpg",
  genesee_int_7:    "5c383b_543f4187371441c086ffb9c4bde4ef31~mv2_d_4812_3203_s_4_2.jpg",

  // Small-lot subdivisions (cover plates)
  casablanca:     "5c383b_4069deb335d44a7bbfaf2abaacbc25fd~mv2_d_2100_1290_s_2.png",
  alexandria:     "5c383b_618462c222ab415dbf9002ddbcf2d4ba~mv2_d_1932_1302_s_2.png",

  // Team
  igal:  "5c383b_48986226684e48b5a46a001483773972~mv2_d_3000_3000_s_4_2.jpg",
  erin:  "5c383b_bc8e36dd79ab45ca88cab6d1e439a126~mv2_d_3024_3024_s_4_2.jpg",
  eli:   "5c383b_62bdceb0b5884dbc983435194c9332dc~mv2_d_3024_3024_s_4_2.jpg",
  sara:  "5c383b_72a8ba6fa96c4e2585359a14107b2d65~mv2_d_3024_3024_s_4_2.jpg",
  jim:   "5c383b_fc570d696b644e9d9a9147495f114cfb~mv2_d_3024_3024_s_4_2.jpg",
};

window.wix = wix;
window.PHOTO = PHOTO;
// Reverse map (media id -> resource key) so wix() can resolve inlined blobs offline.
window.__MEDIA2KEY = Object.fromEntries(Object.entries(PHOTO).map(([k, v]) => [v, k]));

// ─────────────────────────────────────────────────────────────────────────────
// Placeholder / Photo frame — universal image container with editorial chrome
// Pass `img` (a PHOTO key OR full src) to render a real image.
// Otherwise renders an architectural SVG placeholder.

function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0);
}
function rng(seed) {
  let s = seed || 1;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 0xffffffff; };
}

function Placeholder({ seed = "x", variant = "auto", label, tone = "bone", img, w = 1600, position = "center", overlay = false, ticks = true }) {
  if (img) {
    const id = PHOTO[img] || img;
    const src = id.startsWith("http") ? id : wix(id, { w });
    return (
      <div className="ph" style={{ background: "var(--ink)" }}>
        <img src={src} alt="" loading="lazy"
          style={{
            width: "100%", height: "100%", objectFit: "cover", objectPosition: position,
            display: "block", filter: overlay ? "brightness(.85)" : "none"
          }} />
        {overlay && (
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(14,16,20,0) 40%, rgba(14,16,20,.55) 100%)" }} />
        )}
        {ticks && (
          <svg viewBox="0 0 400 300" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, pointerEvents: "none", width: "100%", height: "100%" }}>
            <g stroke="rgba(242,236,224,.5)" strokeWidth="0.8" fill="none">
              <path d="M8,8 L18,8 M8,8 L8,18" />
              <path d="M392,8 L382,8 M392,8 L392,18" />
              <path d="M8,292 L18,292 M8,292 L8,282" />
              <path d="M392,292 L382,292 M392,292 L392,282" />
            </g>
            {label && (
              <text x="14" y="288" fontFamily="ui-monospace, monospace" fontSize="8" letterSpacing="1.2" fill="rgba(242,236,224,.7)">
                {label.toUpperCase()}
              </text>
            )}
          </svg>
        )}
      </div>
    );
  }

  // SVG architectural fallback
  const r = rng(hash(String(seed)));
  const variants = ["facade", "plan", "section", "massing", "tower", "courtyard"];
  const v = variant === "auto" ? variants[Math.floor(r() * variants.length)] : variant;

  const stroke = tone === "ink" ? "rgba(242,236,224,.5)" : "rgba(14,16,20,.55)";
  const strokeSoft = tone === "ink" ? "rgba(242,236,224,.22)" : "rgba(14,16,20,.18)";
  const fillSoft = tone === "ink" ? "rgba(242,236,224,.05)" : "rgba(14,16,20,.04)";
  const accent = "var(--accent)";

  return (
    <div className="ph" style={tone === "ink" ? { background: "linear-gradient(180deg, var(--ink-2) 0%, var(--ink) 100%)" } : null}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id={`hatch-${seed}`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke={strokeSoft} strokeWidth="0.6" />
          </pattern>
        </defs>
        {v === "facade" && <Facade r={r} stroke={stroke} strokeSoft={strokeSoft} fillSoft={fillSoft} accent={accent} seed={seed} />}
        {v === "plan"   && <Plan   r={r} stroke={stroke} strokeSoft={strokeSoft} fillSoft={fillSoft} accent={accent} seed={seed} />}
        {v === "section" && <SSection r={r} stroke={stroke} strokeSoft={strokeSoft} fillSoft={fillSoft} accent={accent} seed={seed} />}
        {v === "massing" && <Massing r={r} stroke={stroke} strokeSoft={strokeSoft} fillSoft={fillSoft} accent={accent} seed={seed} />}
        {v === "tower"   && <Tower   r={r} stroke={stroke} strokeSoft={strokeSoft} fillSoft={fillSoft} accent={accent} seed={seed} />}
        {v === "courtyard" && <Courtyard r={r} stroke={stroke} strokeSoft={strokeSoft} fillSoft={fillSoft} accent={accent} seed={seed} />}
        <g stroke={stroke} strokeWidth="0.8" fill="none">
          <path d="M8,8 L18,8 M8,8 L8,18" />
          <path d="M392,8 L382,8 M392,8 L392,18" />
          <path d="M8,292 L18,292 M8,292 L8,282" />
          <path d="M392,292 L382,292 M392,292 L392,282" />
        </g>
        {label && (
          <text x="14" y="288" fontFamily="var(--mono)" fontSize="8" letterSpacing="1.2" fill={stroke}>
            {label.toUpperCase()}
          </text>
        )}
      </svg>
    </div>
  );
}

function Facade({ r, stroke, strokeSoft, fillSoft, accent }) {
  const cols = 6 + Math.floor(r() * 4);
  const rows = 4 + Math.floor(r() * 3);
  const x0 = 40, y0 = 30, w = 320, h = 240;
  const cw = w / cols, ch = h / rows;
  const wins = [];
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const lit = r() > 0.78;
      wins.push(
        <rect key={`${i}-${j}`}
          x={x0 + i * cw + cw * 0.18}
          y={y0 + j * ch + ch * 0.22}
          width={cw * 0.64} height={ch * 0.56}
          fill={lit ? accent : fillSoft} opacity={lit ? 0.55 : 1}
          stroke={strokeSoft} strokeWidth="0.5" />
      );
    }
  }
  return (
    <g>
      <rect x={x0} y={y0} width={w} height={h} fill="none" stroke={stroke} strokeWidth="0.8" />
      {wins}
      <line x1="20" y1={y0 + h} x2="380" y2={y0 + h} stroke={stroke} strokeWidth="0.8" />
      <line x1="10" y1={y0 + h + 8} x2="390" y2={y0 + h + 8} stroke={strokeSoft} strokeWidth="0.5" strokeDasharray="2 3" />
    </g>
  );
}
function Plan({ r, stroke, strokeSoft, fillSoft, accent, seed }) {
  const rooms = [];
  const cuts = 3 + Math.floor(r() * 3);
  let x = 50;
  for (let i = 0; i < cuts; i++) {
    const w = 60 + r() * 70;
    rooms.push({ x, y: 50, w, h: 90 + r() * 60 });
    x += w + 4;
  }
  return (
    <g>
      <rect x="40" y="40" width="320" height="220" fill={fillSoft} stroke={stroke} strokeWidth="1" />
      {rooms.map((rm, i) => (
        <rect key={i} x={rm.x} y={rm.y} width={rm.w} height={rm.h} fill="none" stroke={stroke} strokeWidth="0.7" />
      ))}
      <rect x="60" y="170" width="280" height="70" fill={`url(#hatch-${seed})`} stroke={stroke} strokeWidth="0.7" />
      <circle cx="320" cy="60" r="3" fill={accent} />
      <text x="50" y="34" fontFamily="var(--mono)" fontSize="7" letterSpacing="1" fill={stroke}>FLOOR PLAN · A-101</text>
    </g>
  );
}
function SSection({ r, stroke, strokeSoft, fillSoft, accent, seed }) {
  const floors = 4 + Math.floor(r() * 3);
  const fh = 38;
  const baseY = 250;
  return (
    <g>
      <line x1="20" y1={baseY + 6} x2="380" y2={baseY + 6} stroke={stroke} strokeWidth="0.8" />
      <rect x="30" y={baseY + 8} width="340" height="10" fill={`url(#hatch-${seed})`} stroke={stroke} strokeWidth="0.4" />
      {Array.from({ length: floors }).map((_, i) => {
        const y = baseY - (i + 1) * fh;
        return (
          <g key={i}>
            <line x1="60" y1={y} x2="340" y2={y} stroke={stroke} strokeWidth="0.6" />
            <line x1="60" y1={y + fh - 2} x2="340" y2={y + fh - 2} stroke={strokeSoft} strokeWidth="0.4" />
          </g>
        );
      })}
      <line x1="60" y1={baseY} x2="60" y2={baseY - floors * fh} stroke={stroke} strokeWidth="0.8" />
      <line x1="340" y1={baseY} x2="340" y2={baseY - floors * fh} stroke={stroke} strokeWidth="0.8" />
      <path d={`M 90 ${baseY - floors * fh - 30} Q 200 ${baseY - floors * fh - 80} 310 ${baseY - floors * fh - 30}`} fill="none" stroke={accent} strokeWidth="0.8" strokeDasharray="2 2" />
      <circle cx="200" cy={baseY - floors * fh - 80} r="2.5" fill={accent} />
    </g>
  );
}
function Massing({ r, stroke, strokeSoft, fillSoft, accent }) {
  const blocks = 3 + Math.floor(r() * 2);
  const out = [];
  let x = 70;
  for (let i = 0; i < blocks; i++) {
    const w = 50 + r() * 50;
    const h = 80 + r() * 110;
    out.push(<rect key={i} x={x} y={250 - h} width={w} height={h} fill={fillSoft} stroke={stroke} strokeWidth="0.9" />);
    out.push(<rect key={i + 100} x={x + 4} y={250 - h + 4} width={w - 8} height={h - 8} fill="none" stroke={strokeSoft} strokeWidth="0.4" />);
    x += w + 6;
  }
  return (
    <g>
      {out}
      <line x1="30" y1="250" x2="370" y2="250" stroke={stroke} strokeWidth="0.8" />
      <circle cx="350" cy="40" r="14" fill="none" stroke={accent} strokeWidth="0.8" />
    </g>
  );
}
function Tower({ r, stroke, strokeSoft, fillSoft, accent }) {
  const floors = 12 + Math.floor(r() * 6);
  return (
    <g>
      <rect x="150" y="40" width="100" height="220" fill={fillSoft} stroke={stroke} strokeWidth="0.9" />
      {Array.from({ length: floors }).map((_, i) => (
        <line key={i} x1="150" y1={50 + i * (210 / floors)} x2="250" y2={50 + i * (210 / floors)} stroke={strokeSoft} strokeWidth="0.5" />
      ))}
      <rect x="170" y="50" width="60" height="200" fill="none" stroke={strokeSoft} strokeWidth="0.4" />
      <line x1="200" y1="40" x2="200" y2="260" stroke={strokeSoft} strokeWidth="0.4" strokeDasharray="2 2" />
      <circle cx="200" cy="36" r="2" fill={accent} />
      <line x1="30" y1="262" x2="370" y2="262" stroke={stroke} strokeWidth="0.8" />
    </g>
  );
}
function Courtyard({ r, stroke, strokeSoft, fillSoft, accent, seed }) {
  return (
    <g>
      <rect x="40" y="40" width="320" height="220" fill={fillSoft} stroke={stroke} strokeWidth="0.9" />
      <rect x="120" y="100" width="160" height="100" fill={`url(#hatch-${seed})`} stroke={stroke} strokeWidth="0.6" />
      <circle cx="200" cy="150" r="22" fill="none" stroke={accent} strokeWidth="0.8" />
      <circle cx="200" cy="150" r="3" fill={accent} />
      {[60, 90, 310, 340].map((x, i) =>
        <circle key={i} cx={x} cy={i % 2 ? 80 : 220} r="6" fill="none" stroke={stroke} strokeWidth="0.6" />
      )}
    </g>
  );
}

window.Placeholder = Placeholder;
