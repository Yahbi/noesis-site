// The record, drawn — three ways of showing what the firm has built without a
// single figure that is not already in the project records.
//
//   MarketsMap  where the 28 projects are, on a dot-matrix map from Natural Earth
//   Pipeline    every project in development, on the stage track it has reached
//   Chronicle   every delivered project by year, with today's pipeline beside it
//
// All three read PROJECT_LIST / FURTHER_RECORD / recordMarkets from Projects.jsx
// at render time, so a change to the record updates every drawing at once.

// ── MARKETS MAP ─────────────────────────────────────────────────────────────
// Projection constants mirror tools/build-map.py (which drew map-dots.svg). If
// one changes, regenerate the map and change these together.
const MAP_GRID = { lon0: -128, lat1: 56, step: 0.75, k: Math.cos(34 * Math.PI / 180), cols: 195, rows: 62 };
function mapPoint(lon, lat) {
  return [(lon - MAP_GRID.lon0) * MAP_GRID.k / MAP_GRID.step, (MAP_GRID.lat1 - lat) / MAP_GRID.step];
}

// A pin per place a reader would recognise at this scale. Los Angeles absorbs its
// neighbouring markets; the legend below the map lists every market separately.
// `markets` pins carry a project count from the record. `active` pins mark a
// market the firm builds in that has no project in the published record yet —
// they say "Active", never a number.
const MAP_PINS = [
  { key: "la",  label: "Los Angeles", lon: -118.4,  lat: 34.07, markets: ["Los Angeles", "Beverly Hills", "West Hollywood", "Hidden Hills"], place: "below", home: true },
  { key: "jt",  label: "Joshua Tree", lon: -116.31, lat: 34.13, markets: ["Joshua Tree"], place: "above" },
  { key: "mia", label: "Miami Beach", lon: -80.13,  lat: 25.79, markets: ["Miami Beach"], place: "below" },
  { key: "mbl", label: "Marbella",    lon: -4.88,   lat: 36.51, active: true, place: "above" },
  { key: "tlv", label: "Tel Aviv",    lon: 34.78,   lat: 32.08, markets: ["Tel Aviv"], place: "below" },
];
// Markets the firm builds in beyond the published record, for the legend.
const ACTIVE_MARKETS = ["Marbella"];
// Legend order: west to east, the way the map reads. Unlisted markets follow.
const MARKET_ORDER = ["Los Angeles", "Beverly Hills", "West Hollywood", "Hidden Hills", "Joshua Tree", "Miami Beach", "Marbella", "Tel Aviv"];
// The route the arcs draw — west to east, the order the firm's reach grew.
const MAP_ROUTE = [["la", "jt"], ["la", "mia"], ["mia", "mbl"], ["mbl", "tlv"]];

// A gentle arc between two grid points, bowed upward in proportion to its span.
function arcPath([x1, y1], [x2, y2]) {
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  const lift = Math.hypot(x2 - x1, y2 - y1) * 0.22;
  return `M${x1.toFixed(2)} ${y1.toFixed(2)} Q${mx.toFixed(2)} ${(my - lift).toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}

function useInView(ref, margin) {
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) { setSeen(true); return; }
    const io = new IntersectionObserver((ents) => {
      if (ents.some((x) => x.isIntersecting)) { setSeen(true); io.disconnect(); }
    }, { rootMargin: margin || "0px 0px -15% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return seen;
}

function MarketsMap({ tone, focus, compact }) {
  const ref = React.useRef(null);
  const inView = useInView(ref);
  const tally = typeof recordMarkets === "function" ? recordMarkets() : [];
  const count = (names) => tally.reduce((n, [m, c]) => n + (names.indexOf(m) !== -1 ? c : 0), 0);
  const pins = MAP_PINS.map((p) => ({ ...p, xy: mapPoint(p.lon, p.lat), n: p.markets ? count(p.markets) : 0 }));
  const at = (k) => pins.find((p) => p.key === k).xy;
  const total = tally.reduce((n, [, c]) => n + c, 0);
  const rank = (m) => { const i = MARKET_ORDER.indexOf(m); return i === -1 ? MARKET_ORDER.length : i; };
  const legend = tally.concat(ACTIVE_MARKETS.map((m) => [m, null])).sort((a, b) => rank(a[0]) - rank(b[0]));
  const canvasStyle = focus ? focusFrame(pins.find((p) => p.key === focus)) : undefined;

  return (
    <div className={"mmap" + (tone === "night" ? " mmap--night" : "") + (focus ? " mmap--focus" : "") + (inView ? " is-in" : "")} ref={ref}>
      <div className="mmap__stage">
        <div className="mmap__canvas" style={canvasStyle}>
        <img className="mmap__dots" src="assets/img/map-dots.svg" alt="" loading="lazy" decoding="async" />
        <svg className="mmap__layer" viewBox={`-0.5 -0.5 ${MAP_GRID.cols} ${MAP_GRID.rows}`} aria-hidden="true">
          {MAP_ROUTE.map(([a, b], i) => (
            <path key={a + b} className="mmap__arc" d={arcPath(at(a), at(b))} pathLength="1"
              style={{ transitionDelay: `${0.2 + i * 0.45}s` }} />
          ))}
          {pins.map((p) => (
            <g key={p.key} className={"mmap__pin" + (p.home ? " mmap__pin--home" : "") + (p.active ? " mmap__pin--active" : "") + (p.key === focus ? " is-focus" : "")} transform={`translate(${p.xy[0].toFixed(2)} ${p.xy[1].toFixed(2)})`}>
              <circle className="mmap__pulse" r="1" />
              <circle className="mmap__dot" r={p.home ? 1.15 : 0.85} />
            </g>
          ))}
        </svg>
        {pins.filter((p) => !focus || p.key === focus).map((p) => (
          <div key={p.key} className={`mmap__label mmap__label--${p.place}`}
            style={{ left: `${(p.xy[0] + 0.5) / MAP_GRID.cols * 100}%`, top: `${(p.xy[1] + 0.5) / MAP_GRID.rows * 100}%` }}>
            <span className="mmap__name">{p.label}</span>
            <span className="mmap__n">{p.active ? "Active market" : `${p.n} ${p.n === 1 ? "project" : "projects"}`}</span>
          </div>
        ))}
        </div>
      </div>

      {!compact && <ul className="mmap__legend" aria-label={`${total} projects by market, and the markets the firm is active in`}>
        {legend.map(([m, c]) => (
          <li key={m} className={c == null ? "mmap__active" : ""}>
            <span className="mmap__lc">{c == null ? "Active" : c}</span><span className="mmap__lm">{m}</span>
          </li>
        ))}
      </ul>}
    </div>
  );
}

// Focused maps frame one market in a 4:3 window: the whole map is scaled so its
// height is FOCUS_ZOOM x the window's, then slid to centre the pin, clamped so
// the window never shows past the map's edge. All values are fractions of the
// window, so the frame holds at every width without measuring anything.
const FOCUS_ZOOM = 1.3;
const FOCUS_ASPECT = 3 / 4;   // window height / width
function focusFrame(pin) {
  if (!pin) return undefined;
  const mapAspect = MAP_GRID.cols / MAP_GRID.rows;
  const h = FOCUS_ASPECT * FOCUS_ZOOM;          // canvas height, in window widths
  const w = h * mapAspect;                       // canvas width, in window widths
  const fx = (pin.xy[0] + 0.5) / MAP_GRID.cols, fy = (pin.xy[1] + 0.5) / MAP_GRID.rows;
  const left = Math.min(0, Math.max(1 - w, 0.5 - fx * w));
  const top = Math.min(0, Math.max(FOCUS_ASPECT - h, FOCUS_ASPECT / 2 - fy * h));
  return { width: `${(w * 100).toFixed(2)}%`, height: `${(FOCUS_ZOOM * 100).toFixed(2)}%`,
    left: `${(left * 100).toFixed(2)}%`, top: `${(top / FOCUS_ASPECT * 100).toFixed(2)}%` };
}

// The pin a market sits under (Beverly Hills -> the Los Angeles pin).
function pinForMarket(market) {
  const hit = MAP_PINS.find((p) => (p.markets || []).indexOf(market) !== -1 || p.label === market);
  return hit ? hit.key : null;
}

// ── PIPELINE ───────────────────────────────────────────────────────────────
// Stages in the order a project passes through them. Every label here is one the
// portfolio cards already publish; nothing is inferred.
const PIPELINE_STAGES = ["In design", "Construction documents", "Permits ready", "Permits issued", "Issued for construction"];
const ASSET_OF = { sfr: "Private residence", apt: "Apartment building", sls: "Small-lot subdivision" };

function storyHref(id) { return BASE + pathFor("story:" + id); }
function storyNav(go, id) {
  return (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault(); go("story:" + id);
  };
}

function Pipeline({ go, asOf }) {
  const ref = React.useRef(null);
  const inView = useInView(ref);
  const list = (typeof PROJECT_LIST !== "undefined" ? PROJECT_LIST : [])
    .filter((p) => p.rendering && PIPELINE_STAGES.indexOf(p.stage) !== -1)
    .map((p) => ({ ...p, at: PIPELINE_STAGES.indexOf(p.stage) }))
    .sort((a, b) => b.at - a.at);
  if (!list.length) return null;
  return (
    <div className={"pipe" + (inView ? " is-in" : "")} ref={ref}>
      <div className="pipe__head" aria-hidden="true">
        <span />
        <span className="pipe__stages">{PIPELINE_STAGES.map((s) => <span key={s}>{s}</span>)}</span>
      </div>
      <ol className="pipe__list">
        {list.map((p) => (
          <li key={p.id} className="pipe__row">
            <a className="pipe__id" href={storyHref(p.id)} onClick={storyNav(go, p.id)}>
              <span className="pipe__thumb">
                <img src={wix(p.cover || p.gallery[0], { w: 400 })} alt="" loading="lazy" decoding="async" onError={imgFallback} />
              </span>
              <span className="pipe__txt">
                <span className="pipe__name">{p.name}</span>
                <span className="pipe__meta">{p.loc} · {ASSET_OF[p.categoryKey] || p.category}</span>
              </span>
            </a>
            <span className="pipe__track" role="img" aria-label={`${p.name}: ${p.stage}, stage ${p.at + 1} of ${PIPELINE_STAGES.length}`}>
              {PIPELINE_STAGES.map((s, i) => (
                <span key={s} className={"pipe__seg" + (i <= p.at ? " is-done" : "") + (i === p.at ? " is-now" : "")}
                  style={{ transitionDelay: `${0.15 + i * 0.12}s` }} />
              ))}
            </span>
            <span className="pipe__stage">{p.stage}</span>
          </li>
        ))}
      </ol>
      <p className="pipe__note">
        Projects in development with a published stage, as of {asOf || "September 2026"}. Imagery for
        every project shown here is an architectural rendering. Plans, approvals and timelines
        change; see the disclosures.
      </p>
    </div>
  );
}

// ── CHRONICLE ──────────────────────────────────────────────────────────────
// Every delivered project in the year it was completed, and today's pipeline in
// its own column. Gallery projects link to their story; record-only entries do
// not have one, and say so by not being links.
const CHRONICLE_FROM = 2009;

function chronicleData() {
  const list = typeof PROJECT_LIST !== "undefined" ? PROJECT_LIST : [];
  const further = typeof FURTHER_RECORD !== "undefined" ? FURTHER_RECORD : [];
  const delivered = list.filter((p) => !p.rendering && p.year)
    .map((p) => ({ id: p.id, name: p.name, loc: p.loc, year: +p.year }))
    .concat(further.map((r) => ({ id: null, name: r[0], loc: r[1], year: +r[2] })));
  const last = delivered.reduce((m, p) => Math.max(m, p.year), CHRONICLE_FROM);
  const years = [];
  for (let y = CHRONICLE_FROM; y <= last; y++) {
    years.push({ key: String(y), label: String(y), items: delivered.filter((p) => p.year === y).sort((a, b) => a.name.localeCompare(b.name)) });
  }
  const pipeline = list.filter((p) => p.rendering).map((p) => ({ id: p.id, name: p.name, loc: p.loc, stage: p.stage || "In development", future: true }));
  years.push({ key: "now", label: "Today", items: pipeline, now: true });
  return { years, delivered: delivered.length, pipeline: pipeline.length };
}

function Chronicle({ go }) {
  const ref = React.useRef(null);
  const inView = useInView(ref);
  const data = React.useMemo(chronicleData, []);
  const [active, setActive] = React.useState(null);
  const describe = (it, y) => it.future
    ? `${it.name} · ${it.loc} · in development — ${it.stage}`
    : `${it.name} · ${it.loc} · delivered ${y.label}`;
  return (
    <div className={"chron" + (inView ? " is-in" : "")} ref={ref}>
      <div className="chron__cap" aria-live="polite">
        {active ? active : <span className="chron__hint">Hover or focus a project to read it.</span>}
      </div>
      <div className="chron__chart">
        {data.years.map((y, col) => (
          <div key={y.key} style={{ "--col": col }} className={"chron__col" + (y.now ? " chron__col--now" : "") + (y.key === String(CHRONICLE_FROM) ? " chron__col--founded" : "")}>
            <div className="chron__stack">
              {y.key === String(CHRONICLE_FROM) && !y.items.length && <span className="chron__flag">Founded</span>}
              {y.items.map((it) => {
                const text = describe(it, y);
                const common = {
                  className: "chron__brick" + (it.future ? " chron__brick--future" : ""),
                  "aria-label": text, title: text,
                  onMouseEnter: () => setActive(text), onFocus: () => setActive(text),
                  onMouseLeave: () => setActive(null), onBlur: () => setActive(null),
                };
                return it.id
                  ? <a key={it.name} href={storyHref(it.id)} onClick={storyNav(go, it.id)} {...common} />
                  : <span key={it.name} role="img" tabIndex={0} {...common} />;
              })}
            </div>
            <div className="chron__year">{y.label}</div>
          </div>
        ))}
      </div>
      <div className="chron__key">
        <span><i className="chron__swatch" /> Delivered · {data.delivered}</span>
        <span><i className="chron__swatch chron__swatch--future" /> In development · {data.pipeline}</span>
      </div>
    </div>
  );
}


// ── PROJECT PAGE PIECES ────────────────────────────────────────────────────
// Place photographs by market — context, never the project itself; every
// caption names the place. Neighbourhoods of Los Angeles share the city plate.
const PLACE_PLATES = {
  "Los Angeles":    ["city-west", "Los Angeles from above the Westside"],
  "West Hollywood": ["city-west", "Los Angeles from above the Westside"],
  "Beverly Hills":  ["geo-beverly", "The residential flats of Beverly Hills"],
  "Hidden Hills":   ["geo-hiddenhills", "The oak-studded hills of Hidden Hills"],
  "Joshua Tree":    ["geo-desert", "The high desert near Joshua Tree"],
  "Miami Beach":    ["geo-miami", "Biscayne Bay and Miami Beach"],
  "Tel Aviv":       ["geo-telaviv", "The Tel Aviv coastline"],
};
const NUMBER_WORDS = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one"];
const inWords = (n) => NUMBER_WORDS[n] || String(n);

function ProjectLocation({ p }) {
  const market = typeof marketOf === "function" ? marketOf(p.loc) : p.loc;
  const tally = typeof recordMarkets === "function" ? recordMarkets() : [];
  const hit = tally.find(([m]) => m === market);
  const n = hit ? hit[1] : 1;
  const plate = PLACE_PLATES[market];
  const pin = pinForMarket(market);
  const media = plate && typeof bandSrc === "function" ? bandSrc(plate[0]) : null;
  return (
    <section className="section ploc">
      <div className="wrap">
        <div className="grid-12 u-end reveal" style={{ marginBottom: "clamp(24px,3vw,44px)" }}>
          <div className="col-7">
            <div className="eyebrow"><span className="dot" /> Location</div>
            <h2 className="h-1 u-mt-16">{market}</h2>
            {p.loc !== market && <p className="ploc__loc">{p.loc}</p>}
          </div>
          <div className="col-5">
            <p className="body" style={{ color: "var(--muted)", maxWidth: "44ch" }}>
              {n > 1
                ? `One of ${inWords(n)} Noesis projects in ${market}, of twenty-eight across the record.`
                : `The firm's project in ${market} — one of twenty-eight across the record.`}
            </p>
          </div>
        </div>
        <div className="ploc__grid reveal">
          <div className="ploc__map">{pin && <MarketsMap focus={pin} compact />}</div>
          {media && (
            <figure className="ploc__plate">
              <img src={media.src} srcSet={media.srcSet} sizes="(max-width: 860px) 92vw, 45vw"
                alt={plate[1]} loading="lazy" decoding="async" onError={imgFallback} />
              <figcaption>{plate[1]}</figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}

// Where an in-development project stands, on the same five stages as the pipeline.
function StageTrack({ p }) {
  const at = PIPELINE_STAGES.indexOf(p.stage);
  if (!p.rendering || at === -1) return null;
  return (
    <section className="section" style={{ borderTop: 0 }}>
      <div className="wrap">
        <div className="grid-12 u-end reveal" style={{ marginBottom: "clamp(24px,3vw,40px)" }}>
          <div className="col-7">
            <div className="eyebrow"><span className="dot" /> Where It Stands</div>
            <h2 className="h-1 u-mt-16">{p.stage}.</h2>
          </div>
          <div className="col-5">
            <p className="body" style={{ color: "var(--muted)", maxWidth: "44ch" }}>
              Stage {at + 1} of {PIPELINE_STAGES.length} before construction begins, as of September 2026.
              Plans, approvals and timelines change; see the disclosures.
            </p>
          </div>
        </div>
        <ol className="stage reveal" aria-label={`${p.name}: ${p.stage}, stage ${at + 1} of ${PIPELINE_STAGES.length}`}>
          {PIPELINE_STAGES.map((st, i) => (
            <li key={st} className={"stage__step" + (i <= at ? " is-done" : "") + (i === at ? " is-now" : "")}>
              <span className="stage__bar" />
              <span className="stage__n">{String(i + 1).padStart(2, "0")}</span>
              <span className="stage__t">{st}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// The small-lot product, explained once, on the projects that use it.
function SmallLotNote() {
  return (
    <section className="section section--tint" style={{ borderTop: 0 }}>
      <div className="wrap grid-12 reveal" style={{ alignItems: "start" }}>
        <div className="col-5">
          <div className="eyebrow"><span className="dot" /> The Product</div>
          <h2 className="h-1 u-mt-16 caps" style={{ maxWidth: "12ch" }}>Why small-lot.</h2>
        </div>
        <div className="col-7">
          <p className="body-lg" style={{ maxWidth: "56ch" }}>
            Los Angeles' Small Lot Subdivision Ordinance, in force since 2005, lets a lot zoned for
            apartments be divided into individually owned parcels, each carrying its own home.
          </p>
          <div className="sln u-mt-40">
            <div><span className="sln__k">For the buyer</span><span className="sln__v">The land under the house, owned outright — a fee-simple home, not a condominium unit, in neighbourhoods where a single-family lot is out of reach.</span></div>
            <div><span className="sln__k">For the city</span><span className="sln__v">More homes for sale on infill land, at the scale of the street rather than of a tower.</span></div>
            <div><span className="sln__k">For the developer</span><span className="sln__v">A for-sale exit on land priced as multifamily — the shape of the opportunistic strategy.</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.MarketsMap = MarketsMap;
window.Pipeline = Pipeline;
window.Chronicle = Chronicle;
window.ProjectLocation = ProjectLocation;
window.StageTrack = StageTrack;
window.SmallLotNote = SmallLotNote;
