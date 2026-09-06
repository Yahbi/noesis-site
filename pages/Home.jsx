// Home — a SHORT gateway (6 blocks). The depth now lives on its own pages:
// Development, Investment, Portfolio, Owner's Rep, Firm, Inquiries.
// Re-weighted per client directive: Development + Investment lead; Owner's Rep
// is the accessory line. Stone & linen, Jost geometric, brand bronze.

const SHOT = {
  casaMani: "5c383b_88e3828f1ca0459ea909e745c3b79196~mv2_d_6720_4480_s_4_2.jpg",   // same frame Portfolio uses; the old one was the purple-lit pool
  leBijou:  "5c383b_597ed5a457654c23a1f2afb1a72b8bb8~mv2.jpg",
  yingYang: "ying_ext_tall",
  casablanca: "casablanca",
};

// Four projects, one per asset class the firm actually works in, so the homepage
// shows the range rather than six variations of the same house. Role, asset type,
// place and year on each; the full record lives on Portfolio.
const HOME_WORK = [
  [SHOT.casaMani,   "casa-mani",       "Casa Mani",      "Beverly Hills",  "Developed & built",  "Private residence",      "2018"],
  [SHOT.leBijou,    "le-bijou",        "Le Bijou",       "Beverly Hills",  "Developed & built",  "Private residence",      "2015"],
  [SHOT.yingYang,   "ying-yang-lofts", "Ying Yang Lofts","Los Angeles",    "Designed & built",   "Apartment building",     "2019"],
  [SHOT.casablanca, "casablanca-homes","Casablanca Homes","Los Angeles",   "Noesis development",  "Small-lot subdivision",  "", true],
];

// Full record — 22 gallery projects + 6 record-only entries.
const HOME_STATS = [
  ["28", "Projects"],   // NOT "delivered": 21 of the 28 are delivered; the other 7 (Quiet Storm, Neo Soul, Eclipse, Neo Whisper, Casa Noa, Casablanca, Alexandria) are pre-construction
  ["21", "Private residences"],
  ["5", "Apartment buildings"],
  ["2", "Small-lot subdivisions"],
  ["2009", "Founded"],
];

const HOME_PILLARS = [
  ["01", "Development", "development",
    "We conceive, entitle, design and deliver ground-up residential projects through one integrated team."],
  ["02", "Investment", "investment",
    "We invest alongside our partners across opportunistic, value-add and stabilized residential strategies."],
];


// The scroll-scrub hero is desktop-only by design: it preloads ~12 MB of frames
// and scrubs on rAF. On touch devices that is both a heavy download and a jittery
// interaction, so phones, reduced-motion and Save-Data visitors keep the original
// film hero — which is lighter and already tuned for them.
function scrubEligible() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  const conn = navigator.connection || {};
  if (conn.saveData || /^(slow-)?2g$/.test(conn.effectiveType || "")) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return window.matchMedia("(min-width: 1024px) and (hover: hover)").matches;
}
function useScrubHero() {
  // Resolved during the FIRST render, not in an effect. Seeding this false meant
  // every desktop load committed the fallback hero first — writing a 2000px
  // fetchpriority="high" image into the DOM and starting that fetch — then tore it
  // down and mounted ScrollHero, whose own first plate is also fetchpriority high.
  // Two high-priority images raced for bandwidth and the visitor saw one painted
  // frame of the wrong hero.
  const [ok, setOk] = React.useState(scrubEligible);
  React.useEffect(() => {
    if (!window.matchMedia) return;
    const conn = navigator.connection || {};
    if (conn.saveData || /^(slow-)?2g$/.test(conn.effectiveType || "")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mq = window.matchMedia("(min-width: 1024px) and (hover: hover)");
    const apply = () => setOk(mq.matches);
    apply();
    mq.addEventListener ? mq.addEventListener("change", apply) : mq.addListener(apply);
    return () => { mq.removeEventListener ? mq.removeEventListener("change", apply) : mq.removeListener(apply); };
  }, []);
  return ok;
}

function Home({ go, setIntent }) {
  const goInvestor = (id) => { if (setIntent) setIntent("investor"); go(id); };
  const goOwner = (id) => { if (setIntent) setIntent("owner"); go(id); };
  const scrub = useScrubHero();
  return (
    <main className="page-enter">
      {scrub && typeof ScrollHero !== "undefined" && <ScrollHero go={go} setIntent={setIntent} />}

      {/* 1 ── HERO (fallback: phones, reduced-motion, Save-Data) ────── */}
      {!scrub && <section id="hero" className="cine cine--video" style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingTop: "clamp(92px,13vh,150px)", paddingBottom: "clamp(34px,6vh,60px)" }}>
        <img className="cine__img img--warm" alt="A Noesis-developed residence" fetchpriority="high" sizes="100vw"
          src={wix(SHOT.casaMani, { w: 2000 })}
          srcSet={`${wix(SHOT.casaMani, { w: 1200 })} 1200w, ${wix(SHOT.casaMani, { w: 2000 })} 2000w, ${wix(SHOT.casaMani, { w: 2600 })} 2600w, ${wix(SHOT.casaMani, { w: 3400 })} 3400w`} onError={imgFallback} />
        {/* The film carries no src at first paint. The still above it is the hero's
            LCP element and is already served at up to 3400w; letting a 4K loop race
            it would only delay the thing the visitor actually sees. The source is
            attached once the page has loaded, and the still stays underneath. */}
        <video className="cine__vid" autoPlay loop muted playsInline preload="none"
          ref={(el) => {
            if (!el || el.__keeper) return; el.__keeper = true; el.muted = true; el.__inView = true;
            const attach = () => { const u = film("noesis-film", { ambient: true }); if (u && el.isConnected && !el.src) { el.src = u; el.load(); tryPlay(); } };
            const tryPlay = () => {
              if (!el.isConnected) { clearInterval(el.__iv); document.removeEventListener("visibilitychange", tryPlay); if (el.__io) el.__io.disconnect(); return; }
              if (!document.hidden && el.__inView) { if (el.paused) { const p = el.play(); if (p && p.catch) p.catch(() => {}); } }
              else if (!el.paused) { el.pause(); }   // off-screen / hidden → save decode + battery
            };
            el.__tries = 0;
            el.addEventListener("error", () => { const d = [2000, 8000, 20000, 45000]; if (el.__tries >= d.length) { el.style.display = "none"; return; } const w = d[el.__tries++]; setTimeout(() => { if (!el.isConnected) return; const u = film("noesis-film", { ambient: true }); if (!u) return; el.style.display = ""; el.src = u + "&r=" + Date.now(); el.load(); tryPlay(); }, w); });
            el.addEventListener("playing", () => { el.style.display = ""; el.__tries = 0; });
            if ("IntersectionObserver" in window) { el.__io = new IntersectionObserver((ents) => { el.__inView = ents[0] && ents[0].isIntersecting; tryPlay(); }, { threshold: 0.01 }); el.__io.observe(el); }
            if (document.readyState === "complete") setTimeout(attach, 0);
            else window.addEventListener("load", attach, { once: true });
            el.__iv = setInterval(tryPlay, 2500); document.addEventListener("visibilitychange", tryPlay);
          }} />
        <div className="cine__grad" />

        <div className="wrap u-flex u-between" style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <div className="eyebrow"><span className="dot" /> Noesis — Est. 2009</div>
          <div className="eyebrow u-hide-720">Beverly Hills · International</div>
        </div>

        <div className="wrap" style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <h1 className="h-display lx-h" style={{ maxWidth: "18ch", color: "var(--ink)" }}>
            <span className="ln"><span>We build what</span></span>{" "}
            <span className="ln"><span>we invest in.</span></span>
          </h1>
          <div className="grid-12 u-mt-40 u-end">
            <div className="col-6">
              <p className="lede" data-hero-fade style={{ maxWidth: "48ch" }}>
                A Beverly Hills–based real-estate development and investment firm. We acquire, build
                and hold residential assets — and represent select owners from entitlement through
                delivery.
              </p>
            </div>
            <div className="col-6 u-flex u-gap-16" data-hero-fade style={{ justifyContent: "flex-end", flexWrap: "wrap" }}>
              {/* Leads with the two primary businesses. Pairing "For Investors" with
                  "For Owners & Developers" made the service line read as an equal. */}
              <button className="btn" onClick={() => go("development")} data-magnetic>Explore Development</button>
              <button className="btn btn--ghost" onClick={() => goInvestor("investment")} data-magnetic>Investment Approach</button>
            </div>
          </div>
        </div>
      </section>}

      {/* 2 ── DEVELOPMENT + INVESTMENT — the two primary businesses ── */}
      <section id="pillars" className="section">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: "clamp(28px,3.5vw,48px)" }}>
            <div className="eyebrow"><span className="dot" /> What We Do</div>
            <p className="wwd__lead u-mt-24" style={{ maxWidth: "22ch" }}>
              We develop real estate — and <em>invest in what we develop.</em>
            </p>
          </div>

          <div className="gateway reveal" data-spy="development,investment">
            {HOME_PILLARS.map(([n, t, route, d]) => (
              <button key={n} className="gate" onClick={() => go(route)} aria-label={`${t} — open the ${t} page`}>
                <span className="gate__n">{n}</span>
                <span className="gate__t">{t}</span>
                <span className="gate__d">{d}</span>
                <span className="gate__cta">Explore {t} <span className="arr" /></span>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 3 ── SELECTED PORTFOLIO ───────────────────────────────────── */}
      <section id="featured" className="section" data-spy="properties">
        <div className="wrap">
          <div className="grid-12 u-end reveal" style={{ marginBottom: "clamp(24px,3vw,36px)" }}>
            <div className="col-8">
              <div className="eyebrow"><span className="dot" /> Portfolio</div>
              <h2 className="h-1 u-mt-16 caps">Selected work.</h2>
            </div>
            <div className="col-4 u-tr">
              <button className="btn btn--ghost" onClick={() => go("properties")} data-magnetic>View the full portfolio <span className="arr" /></button>
            </div>
          </div>


          <div className="collage reveal u-mt-64">
            {HOME_WORK.map(([img, id, name, loc, role, asset, year, rendering]) => (
              <a key={name} className="pcard" href={BASE + pathFor("story:" + id)}
                aria-label={`${name}, ${loc} — view the project story`}
                onClick={(e) => {
                  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                  e.preventDefault(); go("story:" + id);
                }}>
                <div className="pcard__media"><img className="pcard__img" src={wix(img, { w: 1300 })} alt={name} loading="lazy" onError={imgFallback} /></div>
                <div className="pcard__cap">
                  <div>
                    <h3 className="pcard__name">{name}</h3>
                    <div className="pcard__loc">
                      {loc}{year ? ` · ${year}` : ""}
                      {rendering && <span className="pcard__render">Rendering</span>}
                    </div>
                  </div>
                  <div className="label label--sm" style={{ color: "var(--accent-deep)", textAlign: "right", whiteSpace: "nowrap" }}>
                    {role}<br /><span style={{ color: "var(--muted)" }}>{asset}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* 4 ── TRACK RECORD ────────────────────────────────────────── */}
      <section id="record" className="section" data-spy="properties" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot" /> The Record</div>
          <div className="statband reveal u-mt-24">
            {HOME_STATS.map(([v, l]) => (
              <div key={l}><div className="num">{v}</div><div className="statband__l">{l}</div></div>
            ))}
          </div>

        </div>
      </section>
      {/* 5 ── OWNER'S REPRESENTATION — the accessory line, kept subordinate ── */}
      <section id="owners" className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <button className="accessory reveal" data-spy="owners-rep" onClick={() => goOwner("owners-rep")} aria-label="Owner's Representation and Project Management — open the page">
            <span className="accessory__lbl">Also — Owner's Representation &amp; Project Management</span>
            <span className="accessory__d">For a select few owners, the same discipline applied to your project — one accountable advocate from entitlement to delivery.</span>
            <span className="accessory__cta">Our capabilities <span className="arr" /></span>
          </button>
        </div>
      </section>
      {/* 6 ── FIRM + INQUIRY ───────────────────────────────────────── */}
      <section className="section section--ink" data-spy="firm">
        <div className="wrap grid-12 reveal" style={{ alignItems: "center", gap: "clamp(28px,4vw,64px)" }}>
          <div className="col-4">
            <button className="principal__portrait" onClick={() => go("firm")} aria-label="Igal N. Azran — read about the firm and founder">
              <img src={wix(PHOTO.igal, { w: 900 })}
                srcSet={`${wix(PHOTO.igal, { w: 600 })} 600w, ${wix(PHOTO.igal, { w: 900 })} 900w`}
                sizes="(max-width: 760px) 300px, 30vw"
                alt="Igal N. Azran, Founder & CEO" loading="lazy" onError={imgFallback} />
            </button>
          </div>
          <div className="col-8">
            <div className="eyebrow"><span className="dot" /> The Firm</div>
            <h2 className="h-2 u-mt-16" style={{ color: "var(--ink)", maxWidth: "30ch" }}>
              Founded by Igal N. Azran in 2009, Noesis brings development execution, investment
              judgment and institutional experience to every engagement.
            </h2>
            <div className="cta-row u-mt-40" style={{ justifyContent: "flex-start" }}>
              <button className="btn" onClick={() => goInvestor("inquiries")} data-magnetic>Start a Conversation <span className="arr" /></button>
              <button className="btn btn--ghost" onClick={() => go("firm")} data-magnetic>Meet the Firm</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

window.Home = Home;
