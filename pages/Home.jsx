// Home — one continuous scroll. Stone & linen, Jost geometric, brand bronze.
// RE-WEIGHTED (client directive): Development + Investment lead (60–70% emphasis);
// Owner's Rep / Project Management is the accessory service line (30–40%).
// Copy sourced from the client's own docs (Investment Text, Completed Projects).

const SHOT = {
  casaMani: "5c383b_a9f6aa50d3a44559aee6289afe36ebcf~mv2_d_6720_4480_s_4_2.jpg",
  oneOak:   "5c383b_38f5ef1da26e4204b8e465e79f378f2e~mv2.jpg",
  houseG:   "5c383b_a01053afaaa447d08fc46a06820b54d3~mv2_d_5760_3840_s_4_2.jpg",
  aura:     "5c383b_23c2d9ef2cfb46768b1a436bc5c8dc7a~mv2_d_4256_2832_s_4_2.jpg",
  cThru:    "5c383b_b3d670a8b83a486498fae278402120af~mv2.jpg",
  lolivier: "5c383b_fcb4f7079a5e443589c23a058a3a3b1b~mv2.jpg",
  leBijou:  "5c383b_597ed5a457654c23a1f2afb1a72b8bb8~mv2.jpg",
};

const ABOUT_VALUES = [
  ["Alignment", "We succeed when our clients and partners do. We take the owner's side, and we put our own capital and reputation behind our convictions."],
  ["Discretion", "We work quietly for private clients, principals and family offices. Confidentiality is built into every engagement."],
  ["Stewardship", "We treat every project and every dollar of capital as if it were our own — because, often, it is."],
  ["Craft", "An obsession with how things are made. The difference between built and realized lives in the details we refuse to compromise."],
];

// Full delivered record — gallery projects (17) plus the six record-only
// entries listed on the Portfolio index (FURTHER_RECORD in Projects.jsx).
const PORTFOLIO_STATS = [
  ["23", "Projects delivered"],
  ["16", "Private residences"],
  ["5", "Apartment buildings"],
  ["2", "Small-lot subdivisions"],
  ["2009", "Founded"],
];

// Re-weighted pillars — Development & Investment primary, Owner's Rep the accessory.
const WWD_PILLARS = [
  ["01", "Development", "We acquire and develop ground-up — luxury residences, small-lot subdivisions and apartment buildings — conceived, entitled, designed and built by our own team."],
  ["02", "Investment", "We invest our own capital alongside our partners', across opportunistic, value-add and stabilized strategies, where our development edge creates the value."],
  ["03", "Owner's Representation", "For a select few owners, the same discipline applied to your project — one accountable advocate from entitlement to delivery."],
];

const STRATEGIES = [
  ["01", "Opportunistic", "Short-Term · 2–3 Years", "Acquisition and new development of residential single-family and small-lot subdivisions, created for a for-sale exit.",
    ["Residential SFD & small-lot subdivisions", "Acquisition & new development", "Average hold 2–3 years", "Eventual for-sale assets"]],
  ["02", "Value-Add", "Mid-Term · 7–10 Years", "Commercial apartment buildings and office, improved through leasing, capital improvements and partial redevelopment.",
    ["Apartment buildings & office", "Leasing, capital improvements, partial redevelopment", "Average hold 7–10 years", "Eventual for-sale assets"]],
  ["03", "Hybrid Stabilized", "Long-Term", "Apartment buildings, small-lot subdivisions and office — acquired, developed and stabilized for a long-term hold.",
    ["Apartment buildings, SLS & office", "Acquisition, development & stabilization", "Long-term hold", "Income & durability focused"]],
];

const PRINCIPLES = [
  ["01", "Alignment first", "The operator co-invests. We earn when our partners earn — risk is shared, not transferred."],
  ["02", "Design-led value", "Returns are created by building the right thing well, in the right place, at the right basis."],
  ["03", "Disciplined basis", "We underwrite conservatively and walk away often. The price of entry sets the margin of safety."],
  ["04", "Hands-on stewardship", "We manage what we own — through the full cycle, in person, with a builder's rigor."],
];

const PROCESS = [
  ["01", "Strategy & Feasibility", "Site and market analysis, highest-and-best-use, financial modeling and risk assessment."],
  ["02", "Entitlement & Approvals", "Navigating planning, zoning, permitting and the stakeholders who decide a project's fate."],
  ["03", "Design & Preconstruction", "Assembling and directing the design team; budgeting, value engineering and procurement."],
  ["04", "Construction Delivery", "Managing contractors, schedule, cost and quality to completion, at the owner's standard."],
  ["05", "Handover & Realization", "Closeout and handover, then leasing, sale or stabilization to realize the asset's full value."],
];

const FOUNDER = {
  name: "Igal N. Azran",
  title: "Founder & Principal",
  prev: "Previously · CIM Group · CBRE · STMC",
  edu: "MSc · Real Estate",
  // Surfaced from the bio prose — each stat is its own credential (not one project).
  stats: [
    ["$75M", "Construction budget managed"],
    ["22 days", "Delivered ahead of schedule"],
    ["12%", "Delivered under budget"],
  ],
  bio: [
    "Igal N. Azran founded Noesis in 2009 and has led its development and investment work ever since. Born in Morocco and raised between France, Spain and Israel, he brings a genuinely international perspective — and a builder's discipline — to every venture.",
    "Before Noesis, Igal was an associate at CIM Group, the Los Angeles real-estate private-equity and development firm, working on institutional investment and development transactions. Earlier, as a project manager for CBRE in Morocco, he delivered a 24-unit luxury condominium 22 days ahead of schedule and 12% under budget; in Los Angeles, he managed a $75 million construction budget for the L.A. Fashion Center, coordinating trades, architects and engineers through to completion.",
    "Today he originates and leads the firm's developments and investments, maintaining the relationships with domestic and international capital partners behind every venture — and personally directs its owner's-representation mandates. He holds a Master's degree in Real Estate.",
  ],
};

function Home({ go, intent, setIntent }) {
  const goInvestor = (id) => { if (setIntent) setIntent("investor"); go(id); };
  return (
    <main className="page-enter">

      {/* ── HERO — developer-investor positioning ──────────────────── */}
      <section id="hero" className="cine cine--video" style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingTop: "clamp(92px,13vh,150px)", paddingBottom: "clamp(34px,6vh,60px)" }}>
        <img className="cine__img img--warm" alt="A Noesis-developed residence" fetchpriority="high" sizes="100vw"
          src={wix(SHOT.casaMani, { w: 2000 })}
          srcSet={`${wix(SHOT.casaMani, { w: 1200 })} 1200w, ${wix(SHOT.casaMani, { w: 2000 })} 2000w, ${wix(SHOT.casaMani, { w: 2600 })} 2600w`} />
        <video className="cine__vid" autoPlay loop muted playsInline preload="metadata"
          src="assets/noesis-film.mp4?v=2"
          ref={(el) => {
            if (!el || el.__keeper) return; el.__keeper = true; el.muted = true; el.__inView = true;
            const tryPlay = () => {
              if (!el.isConnected) { clearInterval(el.__iv); document.removeEventListener("visibilitychange", tryPlay); if (el.__io) el.__io.disconnect(); return; }
              if (!document.hidden && el.__inView) { if (el.paused) { const p = el.play(); if (p && p.catch) p.catch(() => {}); } }
              else if (!el.paused) { el.pause(); }   // off-screen / hidden → save decode + battery
            };
            el.__tries = 0;
            el.addEventListener("error", () => { const d = [2000, 8000, 20000, 45000]; if (el.__tries >= d.length) { el.style.display = "none"; return; } const w = d[el.__tries++]; setTimeout(() => { if (!el.isConnected) return; el.style.display = ""; el.src = "assets/noesis-film.mp4?r=" + Date.now(); el.load(); tryPlay(); }, w); });
            el.addEventListener("playing", () => { el.style.display = ""; el.__tries = 0; });
            if ("IntersectionObserver" in window) { el.__io = new IntersectionObserver((ents) => { el.__inView = ents[0] && ents[0].isIntersecting; tryPlay(); }, { threshold: 0.01 }); el.__io.observe(el); }
            tryPlay(); el.__iv = setInterval(tryPlay, 2500); document.addEventListener("visibilitychange", tryPlay);
          }} />
        <div className="cine__grad" />

        <div className="wrap u-flex u-between" style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <div className="eyebrow" style={{ color: "rgba(236,230,216,.7)" }}><span className="dot" /> Noesis — Est. 2009</div>
          <div className="eyebrow u-hide-720" style={{ color: "rgba(236,230,216,.7)" }}>Beverly Hills · International</div>
        </div>

        <div className="wrap" style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <h1 className="h-display lx-h" style={{ maxWidth: "18ch", color: "var(--bone)" }}>
            <span className="ln"><span>We build what</span></span>
            <span className="ln"><span>we invest in.</span></span>
          </h1>
          <div className="grid-12 u-mt-40" style={{ alignItems: "end" }}>
            <div className="col-6">
              <p className="lede" data-hero-fade style={{ maxWidth: "46ch", color: "rgba(236,230,216,.86)" }}>
                Noesis is an international real-estate development and investment firm. We conceive,
                build and hold the assets we believe in — and bring that same builder's discipline to
                a select few owners.
              </p>
            </div>
            <div className="col-6 u-flex u-gap-16" data-hero-fade style={{ justifyContent: "flex-end", flexWrap: "wrap" }}>
              <button className="btn" onClick={() => goInvestor("investment")} data-magnetic>For Investors</button>
              <button className="btn btn--ghost" onClick={() => go("owners-rep")} data-magnetic style={{ color: "var(--bone)", borderColor: "rgba(236,230,216,.7)" }}>For Owners &amp; Developers</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEVELOPMENT — primary pillar ───────────────────────────── */}
      <section id="development" className="section wwd">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: "clamp(28px,3.5vw,48px)" }}>
            <div className="eyebrow"><span className="dot" /> Development</div>
            <p className="wwd__lead u-mt-24" style={{ maxWidth: "20ch" }}>
              We take a project from a <em>parcel of land</em> to a finished landmark — and own
              the outcome.
            </p>
            <p className="body-lg u-mt-24" style={{ maxWidth: "66ch", color: "var(--ink-2)" }}>
              Since 2009 we have developed distinctly unique real estate — beginning with single-family
              residences and growing into small-lot subdivisions, apartment buildings and other
              residential and commercial developments. Our approach has always been to build a strong,
              resourceful and knowledgeable foundation before undertaking new ventures in each asset class.
            </p>
          </div>
          <div className="wwd-grid reveal">
            {WWD_PILLARS.map(([n, t, d]) => (
              <div key={n} className="wwd-cap">
                <div className="wwd-cap__n">{n}</div>
                <div className="wwd-cap__t">{t}</div>
                <p className="wwd-cap__d">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVESTMENT — primary pillar ────────────────────────────── */}
      <section id="investment" className="section" style={{ paddingTop: "clamp(40px,5vw,72px)" }}>
        <div className="wrap grid-12">
          <div className="col-4 reveal">
            <div className="eyebrow"><span className="dot" /> Investment</div>
            <h2 className="h-1 u-mt-16 caps" style={{ maxWidth: "10ch" }}>Capital, aligned.</h2>
          </div>
          <div className="col-8 reveal">
            <p className="lede">
              We originate, structure and steward real estate investments for an aligned network of
              private capital — family offices, principals and institutions — with the operator invested
              alongside, successfully generating value for our investors since 2009.
            </p>
            <p className="pull u-mt-40" style={{ maxWidth: "26ch" }}>
              The best returns in real estate come from building the <em>right thing well</em>. We invest
              where our development edge creates the value.
            </p>
          </div>
        </div>

        <div className="wrap u-mt-40">
          <div className="rows reveal">
            {STRATEGIES.map(([n, t, hold, desc, points]) => (
              <div key={n} className="row reveal">
                <div className="row__idx">{n}</div>
                <div>
                  <div className="row__title">{t}</div>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--accent-deep)", marginTop: 10 }}>{hold}</div>
                </div>
                <div>
                  <p className="row__desc">{desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "grid", gap: 8 }}>
                    {points.map((p) => (
                      <li key={p} style={{ display: "flex", gap: 11, alignItems: "baseline", color: "var(--ink-soft)", fontSize: 13.5 }}>
                        <span style={{ width: 5, height: 5, flex: "0 0 5px", background: "var(--accent)", borderRadius: "50%", transform: "translateY(-2px)" }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap u-mt-64">
          <div className="eyebrow reveal"><span className="dot" /> How We Invest</div>
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "clamp(20px,2.5vw,40px)", marginTop: 28, borderTop: "1px solid var(--rule)", paddingTop: 36 }}>
            {PRINCIPLES.map(([n, t, d]) => (
              <div key={n}>
                <div className="wwd-cap__n">{n}</div>
                <div style={{ fontFamily: "var(--sans)", fontWeight: 300, fontSize: "clamp(18px,1.6vw,22px)", marginTop: 14, color: "var(--ink)" }}>{t}</div>
                <p style={{ color: "var(--ink-soft)", fontSize: 13.5, lineHeight: 1.6, marginTop: 10 }}>{d}</p>
              </div>
            ))}
          </div>
          <div className="grid-12 u-end u-mt-64">
            <div className="col-8 reveal">
              <p className="body" style={{ color: "var(--muted)", maxWidth: "62ch" }}>
                When an opportunity meets our standard we bring it to that network privately. Qualified and
                accredited investors are welcome to request a confidential introduction — no obligation,
                and no live offering implied.
              </p>
            </div>
            <div className="col-4 u-tr reveal">
              <button className="btn btn--ghost" onClick={() => goInvestor("inquiries")} data-magnetic>Request an introduction <span className="arr" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO — the proof behind both pillars ──────────────── */}
      <section id="projects" className="section">
        <div className="wrap">
          <div className="grid-12 u-end reveal" style={{ marginBottom: "clamp(28px,3vw,40px)" }}>
            <div className="col-8">
              <div className="eyebrow"><span className="dot" /> Portfolio · The Record</div>
              <h2 className="h-1 u-mt-16 caps">The record behind the thesis.</h2>
              <p className="body-lg u-mt-16" style={{ maxWidth: "56ch" }}>
                Luxury residences and buildings conceived, developed and delivered by the Noesis team —
                the delivered proof behind what we build, what we hold, and how we manage.
              </p>
            </div>
            <div className="col-4 u-tr">
              <button className="btn btn--ghost" onClick={() => go("properties")} data-magnetic>View the full portfolio <span className="arr" /></button>
            </div>
          </div>

          {/* Featured story — a large cinematic lead-in that pulls visitors into the immersive case studies. */}
          <button className="story-feature reveal" onClick={() => go("story:le-bijou")} aria-label="Featured project — Le Bijou, read the story">
            <img className="story-feature__img img--warm" alt="Le Bijou, Beverly Hills" loading="lazy" sizes="100vw"
              onError={(e) => { e.currentTarget.style.opacity = "0"; }}
              src={wix(SHOT.leBijou, { w: 2000 })}
              srcSet={`${wix(SHOT.leBijou, { w: 1200 })} 1200w, ${wix(SHOT.leBijou, { w: 2000 })} 2000w`} />
            <div className="story-feature__grad" />
            <div className="story-feature__cap">
              <div className="eyebrow" style={{ color: "rgba(236,230,216,.72)" }}><span className="dot" /> Featured Project</div>
              <div className="story-feature__name">Le Bijou</div>
              <div className="story-feature__meta">Beverly Hills — “the jewel,” where receding walls of glass make indoor-outdoor living real.</div>
              <span className="story-feature__cta">Read the story <span className="arr" /></span>
            </div>
          </button>

          <div className="statband reveal" style={{ marginBottom: "clamp(40px,4.5vw,64px)" }}>
            {PORTFOLIO_STATS.map(([v, l]) => (
              <div key={l}><div className="num">{v}</div><div className="statband__l">{l}</div></div>
            ))}
          </div>

          <div className="collage reveal">
            {[
              [SHOT.casaMani, "casa-mani", "Casa Mani", "Beverly Hills", "Designed & built · 2018"],
              [SHOT.oneOak, "one-oak", "One Oak", "Sunset Strip", "Designed & built · 2015"],
              [SHOT.aura, "aura-house", "Aura House", "Tel Aviv", "Developed · sold over asking"],
              [SHOT.cThru, "c-thru", "C Thru", "Beverly Grove", "Designed & built · 2016"],
              [SHOT.houseG, "house-g", "House G", "Melrose", "Designed & developed · 2016"],
              [SHOT.lolivier, "lolivier", "L'Olivier House", "Los Angeles", "Designed & built · 2015"],
            ].map(([img, id, name, loc, work]) => (
              <article key={name} className="pcard" role="button" tabIndex={0} aria-label={`${name}, ${loc} — view the project story`}
                onClick={() => go("story:" + id)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go("story:" + id); } }}>
                <div className="pcard__media"><img className={`pcard__img ${(name === "Casa Mani" || name === "Aura House") ? "img--warm" : ""}`} src={wix(img, { w: 1300 })} alt={name} loading="lazy" /></div>
                <div className="pcard__cap">
                  <div>
                    <div className="pcard__name">{name}</div>
                    <div className="pcard__loc">{loc}</div>
                  </div>
                  <div className="mono" style={{ fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-deep)", whiteSpace: "nowrap" }}>{work}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* cinematic reel — ambient loop of the delivered work; "Watch the film"
          swaps in the full Noesis launch film with sound + controls. */}
      <section className="cine cine--video" style={{ height: "min(86vh, 840px)", minHeight: 500 }}>
        <img className="cine__img" src={wix(SHOT.oneOak, { w: 2200 })} alt="" />
        <video className="cine__vid" autoPlay loop muted playsInline preload="none"
          poster={wix(SHOT.oneOak, { w: 1200 })} src="assets/noesis-reel.mp4?v=1"
          ref={(el) => {
            if (!el || el.__keeper) return; el.__keeper = true; el.muted = true; el.__inView = false;
            const tryPlay = () => {
              if (!el.isConnected) { clearInterval(el.__iv); document.removeEventListener("visibilitychange", tryPlay); if (el.__io) el.__io.disconnect(); return; }
              if (el.__manual) return;   // visitor started the launch film — hands off
              if (!document.hidden && el.__inView) { if (el.paused) { const p = el.play(); if (p && p.catch) p.catch(() => {}); } }
              else if (!el.paused) { el.pause(); }
            };
            if ("IntersectionObserver" in window) { el.__io = new IntersectionObserver((e) => { el.__inView = e[0] && e[0].isIntersecting; tryPlay(); }, { threshold: 0.15 }); el.__io.observe(el); }
            el.__iv = setInterval(tryPlay, 2500); document.addEventListener("visibilitychange", tryPlay);
          }} />
        <div className="cine__grad" />
        <div className="cine__cap">
          <div className="wrap" style={{ paddingBottom: "clamp(36px,6vw,72px)" }}>
            <div className="eyebrow" style={{ color: "rgba(236,230,216,.62)" }}><span className="dot" /> Conceived, developed &amp; delivered by Noesis</div>
            <h2 className="h-1 u-mt-16 caps" style={{ color: "var(--bone)", maxWidth: "18ch" }}>We have stood where our partners stand.</h2>
            <button className="btn u-mt-24" data-magnetic
              onClick={(e) => {
                const sec = e.currentTarget.closest("section");
                const v = sec && sec.querySelector("video");
                if (!v) return;
                v.__manual = true; v.loop = false; v.controls = true; v.muted = false;
                v.src = "assets/noesis-launch.mp4?v=1"; v.load();
                const p = v.play(); if (p && p.catch) p.catch(() => {});
                const cap = sec.querySelector(".cine__cap"); if (cap) cap.style.display = "none";
                const grad = sec.querySelector(".cine__grad"); if (grad) grad.style.display = "none";
              }}>Watch the film · 2 min <span className="arr" /></button>
          </div>
        </div>
      </section>

      {/* ── OWNER'S REP · PM — accessory service line ──────────────── */}
      <section id="owners-rep" className="section section--ink">
        <div className="wrap">
          <div className="grid-12 u-end reveal">
            <div className="col-7">
              <div className="eyebrow"><span className="dot" /> Owner's Representation · Project Management</div>
              <h2 className="h-1 u-mt-16 caps" style={{ color: "var(--bone)" }}>From entitlement to delivery.</h2>
            </div>
            <div className="col-5">
              <p className="body-lg">
                The same discipline behind our own developments, applied to your asset — one accountable
                advocate, a disciplined, gated path from first study to final handover, the owner informed
                and in command at every stage.
              </p>
            </div>
          </div>
          <div className="flow u-mt-64">
            {PROCESS.map(([n, t, d]) => (
              <div key={n} className="flow__step">
                <div className="flow__num">{n}</div>
                <div className="flow__name">{t}</div>
                <p className="flow__desc">{d}</p>
              </div>
            ))}
          </div>
          <button className="btn btn--ghost u-mt-64" onClick={() => go("approach")} data-magnetic>Our full capabilities <span className="arr" /></button>
        </div>
      </section>

      {/* ── FIRM — origin, values, editorial pair ──────────────────── */}
      <section id="about" className="section">
        <div className="wrap grid-12">
          <div className="col-4 reveal">
            <div className="eyebrow"><span className="dot" /> The Firm</div>
            <h2 className="h-1 u-mt-16 caps" style={{ maxWidth: "9ch" }}>Perception by intellect.</h2>
          </div>
          <div className="col-8 reveal">
            <p className="lede">
              Noesis is the Greek word for understanding. We are a real-estate development and investment
              firm — founded in 2009, based in Beverly Hills, working internationally.
            </p>
            <p className="body-lg u-mt-24" style={{ maxWidth: "64ch" }}>
              Our founder began with single-family residences, striving to provide a distinctly unique
              product that would enhance the lives of those it touched while benefiting the communities
              around it. Today that mission spans small-lot subdivisions, apartment buildings and other
              residential and commercial developments — with our capital invested alongside our partners',
              and our delivery discipline offered to a select few owners as their representative.
            </p>
          </div>
        </div>

        <div className="wrap u-mt-64">
          <div className="eyebrow reveal"><span className="dot" /> How We Work</div>
          <div className="rows u-mt-24">
            {ABOUT_VALUES.map(([t, d], i) => (
              <div key={t} className="row reveal">
                <div className="row__idx">0{i + 1}</div>
                <div className="row__title">{t}</div>
                <p className="row__desc">{d}</p>
              </div>
            ))}
          </div>
          <button className="link-u u-mt-40" onClick={() => go("projects")} style={{ background: "transparent", border: 0, borderBottom: "1px solid var(--accent)", color: "var(--accent-deep)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", padding: "0 0 4px" }}>See the work</button>
        </div>

        <div className="wrap u-mt-64">
          <div className="pair reveal">
            <figure>
              <img src={wix(PHOTO.genesee_int_1, { w: 1500 })} alt="My Genesee living room, Beverly Grove" loading="lazy" />
              <figcaption>My Genesee — Beverly Grove</figcaption>
            </figure>
            <figure>
              <img src={wix(PHOTO.genesee_int_2, { w: 1200 })} alt="My Genesee kitchen, Beverly Grove" loading="lazy" />
              <figcaption>Four residences · 2019</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ────────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: "clamp(32px,4vw,52px)" }}>
            <div className="eyebrow"><span className="dot" /> Founder</div>
            <h2 className="h-1 u-mt-16 caps">The principal behind Noesis.</h2>
          </div>
          <div className="grid-12 reveal" style={{ gap: 48, alignItems: "start" }}>
            <div className="col-5">
              <div className="thumb thumb--tall" style={{ overflow: "hidden" }}>
                <img src={wix(PHOTO.igal, { w: 1100 })} alt={FOUNDER.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) contrast(1.02)", transition: "filter .5s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0)")}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(1) contrast(1.02)")} />
              </div>
              <div className="serif u-mt-24" style={{ fontSize: 30, letterSpacing: "-.01em", lineHeight: 1.05, color: "var(--ink)" }}>{FOUNDER.name}</div>
              <div className="mono" style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--accent-deep)", marginTop: 8 }}>{FOUNDER.title}</div>
              <div style={{ borderTop: "1px solid var(--rule)", marginTop: 22, paddingTop: 18 }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)" }}>{FOUNDER.prev}</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", marginTop: 8 }}>{FOUNDER.edu}</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, borderTop: "1px solid var(--rule)", marginTop: 22, paddingTop: 22 }}>
                {FOUNDER.stats.map(([v, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "var(--sans)", fontWeight: 200, fontSize: "clamp(22px,2.4vw,30px)", color: "var(--accent)", lineHeight: 1 }}>{v}</div>
                    <div className="mono" style={{ fontSize: 10.5, letterSpacing: ".06em", color: "var(--muted)", marginTop: 8, lineHeight: 1.35 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-7">
              <p className="lede">{FOUNDER.bio[0]}</p>
              {FOUNDER.bio.slice(1).map((p, i) => (
                <p key={i} className="body-lg u-mt-24" style={{ maxWidth: "64ch" }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INQUIRIES ──────────────────────────────────────────────── */}
      <section id="inquiries" className="section">
        <div className="wrap grid-12" style={{ gap: 56, alignItems: "start" }}>
          <div className="col-5 reveal">
            <div className="eyebrow"><span className="dot" /> Inquiries</div>
            <h2 className="h-display caps u-mt-16" style={{ maxWidth: "12ch" }}>Let's begin.</h2>
            <p className="lede u-mt-24" style={{ maxWidth: "44ch" }}>
              Whether you have capital to deploy or a project to deliver, we welcome a confidential
              conversation. Every enquiry is reviewed personally by our principal, who responds within one
              business day.
            </p>

            <div className="u-mt-40">
              <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", color: "var(--muted)", textTransform: "uppercase" }}>Office</div>
              <div className="serif u-mt-8" style={{ fontSize: 21, color: "var(--ink)", lineHeight: 1.35 }}>8383 Wilshire Blvd<br />Suite 740<br />Beverly Hills, CA 90211</div>
            </div>
            <div className="u-flex u-gap-40 u-mt-40" style={{ flexWrap: "wrap" }}>
              <div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", color: "var(--muted)", textTransform: "uppercase" }}>Telephone</div>
                <a href="tel:+13108553634" className="serif u-mt-8" style={{ fontSize: 19, display: "block", color: "var(--ink)" }}>T (310) 855 · 3634</a>
                <div className="body" style={{ color: "var(--muted)", fontSize: 14 }}>F (424) 282 · 8414</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", color: "var(--muted)", textTransform: "uppercase" }}>Email</div>
                <a href="mailto:info@noesisusa.com" className="serif u-mt-8" style={{ fontSize: 19, display: "block", color: "var(--ink)" }}>INFO@NOESISUSA.COM</a>
              </div>
            </div>
          </div>
          <div className="col-7 reveal">
            <InquiryForm intent={intent} />
          </div>
        </div>
      </section>
    </main>
  );
}

// Set FORM_ENDPOINT to a Formspree/Basin (or serverless) URL to deliver submissions
// straight to info@noesisusa.com. While empty, the form opens the visitor's mail
// client pre-filled — so an enquiry is never silently dropped.
const FORM_ENDPOINT = "";

function InquiryForm({ intent }) {
  const investor = intent === "investor";
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState("");
  const [role, setRole] = React.useState("");
  React.useEffect(() => { if (investor) setRole("Investor — capital partnership"); }, [investor]);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    const fd = new FormData(e.currentTarget);
    const g = (k) => (fd.get(k) || "").toString();
    if (FORM_ENDPOINT) {
      try {
        setSubmitting(true);
        const res = await fetch(FORM_ENDPOINT, { method: "POST", body: fd, headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error("bad status");
        setSent(true);
      } catch (err) {
        setError("Something went wrong sending your message. Please email info@noesisusa.com directly.");
      } finally { setSubmitting(false); }
      return;
    }
    const subject = `Enquiry${role ? " — " + role.split(" — ")[0] : ""}${g("name") ? " — " + g("name") : ""}`;
    const body = `Name: ${g("name")}\nEmail: ${g("email")}\nLocation: ${g("location")}\nReaching out as: ${role || "—"}\n\n${g("message")}`;
    window.location.href = `mailto:info@noesisusa.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) return (
    <div style={{ border: "1px solid var(--rule)", padding: "clamp(28px,4vw,48px)", background: "var(--paper)" }}>
      <div className="eyebrow"><span className="dot" /> Received</div>
      <h3 className="h-2 u-mt-16">Thank you.</h3>
      <p className="body u-mt-16">
        {investor
          ? "Your enquiry is reviewed personally by our principal and held in confidence."
          : "We've received your message and will respond within one business day."}
      </p>
      {!FORM_ENDPOINT && (
        <p className="body u-mt-16" style={{ color: "var(--muted)" }}>
          If your mail app didn't open, write to us directly at <a href="mailto:info@noesisusa.com" style={{ color: "var(--accent-deep)" }}>info@noesisusa.com</a>.
        </p>
      )}
      <button className="btn btn--ghost u-mt-40" onClick={() => setSent(false)}>Send another</button>
    </div>
  );

  return (
    <form onSubmit={submit} style={{ border: "1px solid var(--rule)", padding: "clamp(28px,4vw,48px)", background: "var(--paper)" }}>
      <div className="eyebrow" style={{ marginBottom: 22 }}><span className="dot" /> {investor ? "Confidential investor introduction" : "Send a message"}</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "26px 24px" }}>
        <div className="field"><label>Name</label><input name="name" type="text" placeholder="Your name" required /></div>
        <div className="field"><label>Email</label><input name="email" type="email" placeholder="you@email.com" required /></div>
        <div className="field"><label>Location</label><input name="location" type="text" placeholder="City / country" /></div>
        <div className="field">
          <label>I'm reaching out as</label>
          <select name="role" value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="" disabled>Select one</option>
            <option>Investor — capital partnership</option>
            <option>Owner / Principal — a project to deliver</option>
            <option>Developer — owner's rep / project management</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field" style={{ gridColumn: "1 / -1" }}><label>Message</label><textarea name="message" rows="5" placeholder="Tell us about your interest in investing, or your project." required></textarea></div>
      </div>
      <div role="status" aria-live="polite">
        {error && <p className="body u-mt-24" style={{ color: "var(--accent-deep)" }}>{error}</p>}
      </div>
      <div className="u-mt-40 u-flex u-between u-center" style={{ flexWrap: "wrap", gap: 16 }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: ".06em", color: "var(--muted)" }}>INFO@NOESISUSA.COM · T (310) 855·3634</div>
        <button type="submit" className="btn" disabled={submitting}>{submitting ? "Sending…" : "Send Enquiry"} <span className="arr" /></button>
      </div>
    </form>
  );
}

window.Home = Home;
