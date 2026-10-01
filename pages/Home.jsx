// Home — the gateway. Positioned (October 2026) as a real-estate investment and
// management firm in the CIM register: an owner, developer and manager. The
// platform is three practices — Investment, Development, Management — and the
// firm does not act as general contractor; projects are built by licensed GCs
// under Noesis management. Depth lives on each practice page.

const SHOT = {
  casaMani: "5c383b_88e3828f1ca0459ea909e745c3b79196~mv2_d_6720_4480_s_4_2.jpg",   // same frame Portfolio uses; the old one was the purple-lit pool
  leBijou:  "5c383b_597ed5a457654c23a1f2afb1a72b8bb8~mv2.jpg",
  yingYang: "ying_ext_tall",
  casablanca: "casablanca",
};

// Six projects across every asset class and both continents, set as an index:
// names as type, the photograph answering the cursor. Role, place and year on
// each; the full record lives on Portfolio.
const HOME_WORK = [
  { id: "casa-mani",        img: SHOT.casaMani,   name: "Casa Mani",        loc: "Beverly Hills",  year: "2017", role: "Developed & delivered", asset: "Private residence" },
  { id: "villa-casbah",     img: "sf-casbah-01",  name: "Villa Casbah",     loc: "Beverly Grove",  year: "2021", role: "Developed & delivered", asset: "Private residence" },
  { id: "one-oak",          img: "sf-oneoak-01",  name: "One Oak",          loc: "Sunset Strip",   year: "2015", role: "Developed & delivered", asset: "Private residence" },
  { id: "aura-house",       img: "sf-aura-01",    name: "Aura House",       loc: "Tel Aviv",       year: "2017", role: "Developed & delivered", asset: "Private residence" },
  { id: "ying-yang-lofts",  img: SHOT.yingYang,   name: "Ying Yang Lofts",  loc: "Los Angeles",    year: "2019", role: "Designed & delivered",  asset: "Apartment building" },
  { id: "casablanca-homes", img: SHOT.casablanca, name: "Casablanca Homes", loc: "Los Angeles",    year: "",     role: "Noesis development", asset: "Small-lot subdivision", rendering: true },
];

// The opening statement, lit word by word as it scrolls past (motion.js
// bindManifesto). Split into words here so the markup stays React-owned.
const HOME_STATEMENT = [
  ["Since 2009 we have sourced the land, underwritten it, entitled it and seen it delivered — and", false],
  ["invested alongside the capital behind it.", true],
  ["One platform, from first underwriting to the last lease.", false],
];

// Full record — 22 gallery projects + 6 record-only entries.
const HOME_STATS = [
  ["28", "Projects"],   // NOT "delivered": 21 of the 28 are delivered; the other 7 (Quiet Storm, Neo Soul, Eclipse, Neo Whisper, Casa Noa, Casablanca, Alexandria) are pre-construction
  ["21", "Private residences"],
  ["5", "Apartment buildings"],
  ["2", "Small-lot subdivisions"],
  ["2009", "Founded"],
];

// The platform: three practices, each with the two figures that define it.
const HOME_PILLARS = [
  ["01", "Investment", "investment",
    "We originate and steward residential investments for an aligned network of private capital, with the operator invested alongside.",
    [["3", "Strategies"], ["8", "Markets"]]],
  ["02", "Development", "development",
    "We source, entitle and design the assets we underwrite, and manage their delivery by licensed general contractors.",
    [["28", "Projects"], ["21", "Delivered"]]],
  ["03", "Management", "owners-rep",
    "Development management, owner's representation and asset management — the role we play on our own projects, for a select few owners.",
    [["3", "Mandates"], ["7", "Capabilities"]]],
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
            // Phones keep the still: an 18 MB ambient loop is a poor trade on a cellular
            // connection, and the plate carries a slow camera drift instead (CSS).
            const attach = () => { if (window.innerWidth < 760) return; const u = film("noesis-film", { ambient: true }); if (u && el.isConnected && !el.src) { el.src = u; el.load(); tryPlay(); } };
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
          <div className="eyebrow u-hide-720">Los Angeles · Miami · Marbella · Tel Aviv</div>
        </div>

        <div className="wrap" style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <h1 className="h-display lx-h" style={{ maxWidth: "18ch", color: "var(--ink)" }}>
            <span className="ln"><span>We manage what</span></span>{" "}
            <span className="ln"><span>we invest in.</span></span>
          </h1>
          <div className="grid-12 u-mt-40 u-end">
            <div className="col-6">
              <p className="lede" data-hero-fade style={{ maxWidth: "48ch" }}>
                A Beverly Hills real-estate investment and management firm. We acquire, develop and
                hold residential assets across Los Angeles, Miami, Marbella and Tel Aviv — and manage
                projects for a select group of owners.
              </p>
            </div>
            <div className="col-6 u-flex u-gap-16" data-hero-fade style={{ justifyContent: "flex-end", flexWrap: "wrap" }}>
              {/* Leads with the two primary businesses. Pairing "For Investors" with
                  "For Owners & Developers" made the service line read as an equal. */}
              <button className="btn" onClick={() => goInvestor("investment")} data-magnetic>Investment Approach</button>
              <button className="btn btn--ghost" onClick={() => go("owners-rep")} data-magnetic>Our Management</button>
            </div>
          </div>
        </div>
      </section>}

      {/* 2 ── THE PLATFORM — invest, develop, manage ─────────────────── */}
      <section id="pillars" className="section">
        <div className="wrap">
          <div className="statement" style={{ marginBottom: "clamp(48px,6vw,96px)" }}>
            <div className="eyebrow reveal"><span className="dot" /> What We Do</div>
            <p className="statement__t u-mt-24">
              {HOME_STATEMENT.flatMap(([text, em], k) => text.split(" ").map((w, i) => (
                <span key={k + "-" + i} className={"w" + (em ? " w--em" : "")}>{w} </span>
              )))}
            </p>
          </div>

          <div className="eyebrow reveal"><span className="dot" /> The Platform</div>
          <div className="gateway gateway--3 reveal u-mt-24" data-spy="investment,development,owners-rep">
            {HOME_PILLARS.map(([n, t, route, d, figs]) => (
              <button key={n} className="gate" onClick={() => go(route)}>
                <span className="gate__n">{n}</span>
                <span className="gate__t">{t}</span>
                <span className="gate__d">{d}</span>
                <span className="gate__figs">
                  {figs.map(([v, l]) => <span key={l}><b>{v}</b>{l}</span>)}
                </span>
                <span className="gate__cta">Explore {t} <span className="arr" /></span>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 3 ── SELECTED PORTFOLIO ───────────────────────────────────── */}
      <section id="featured" className="section section--tint" data-spy="properties">
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


          <ProjectIndex items={HOME_WORK} go={go} />
        </div>
      </section>
      {/* 3b ── WHERE WE INVEST — the corridor the record spans, drawn ── */}
      <NightPlate id="markets" spy="properties" className="night--map">
        <div className="wrap">
          <div className="grid-12 u-end reveal">
            <div className="col-7">
              <div className="eyebrow"><span className="dot" /> Where We Invest</div>
              <h2 className="h-1 u-mt-16 night__title">From Beverly Hills to <em>Tel Aviv.</em></h2>
            </div>
            <div className="col-5">
              <p className="body-lg" style={{ maxWidth: "44ch" }}>
                The deepest record is in Los Angeles, where the firm was founded. The work now runs
                from Joshua Tree and Miami Beach to Marbella and Tel Aviv — one team and one standard
                across three continents.
              </p>
            </div>
          </div>
          <div className="u-mt-64"><MarketsMap tone="night" /></div>
        </div>
      </NightPlate>

      {/* 4 ── TRACK RECORD — the skyline closes the night chapter ─────── */}
      <NightPlate id="record" spy="properties" band="city-night" className="night--record"
        alt="Los Angeles at blue hour, looking east along the Wilshire corridor">
        <div className="wrap">
          <div className="grid-12 u-end reveal">
            <div className="col-7">
              <div className="eyebrow"><span className="dot" /> The Record</div>
              <h2 className="h-1 u-mt-16 night__title">Seventeen years, <em>one team.</em></h2>
            </div>
            <div className="col-5 u-tr">
              <button className="btn btn--ghost" onClick={() => go("properties#record")} data-magnetic>See the full record <span className="arr" /></button>
            </div>
          </div>
          <div className="statband statband--xl u-mt-64">
            {HOME_STATS.map(([v, l]) => (
              <div key={l}><div className="num">{v}</div><div className="statband__l">{l}</div></div>
            ))}
          </div>

          {/* Every institutional manager states the basis of its headline figures.
              Without this line "28 Projects" invites the reader to assume all
              twenty-eight are standing, and seven are not. */}
          <p className="statband__note reveal">
            The record counts every project Noesis has taken from land through entitlement, design
            and construction since 2009, together with those it holds in development today.
            Twenty-one are delivered. Seven are in construction, permitting or design, and are shown
            throughout as renderings. Figures as of September 2026, unaudited, and drawn from the firm's
            own project records. Past results are not indicative of future results.{" "}
            <button className="statband__more" onClick={() => go("disclosures")}>Full disclosures</button>
          </p>
        </div>
      </NightPlate>

      {/* 5 ── BROKERS & SELLERS — straight to the acquisition criteria ── */}
      <section id="owners" className="section" style={{ borderTop: 0 }}>
        <div className="wrap">
          <button className="accessory reveal" onClick={() => go("investment#criteria")}>
            <span className="accessory__lbl">Brokers &amp; sellers — what we buy</span>
            <span className="accessory__d">Product, activity, hold and markets, stated plainly. If a site or a building fits, we would rather hear about it early.</span>
            <span className="accessory__cta">See the criteria <span className="arr" /></span>
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
