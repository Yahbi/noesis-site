// Home — one continuous scroll. Stone & linen, Jost geometric, brand bronze.
// Earlier multi-page content folded back in (About story + values, founder,
// portfolio scale, investment depth, office details) — affirmative voice.

const SHOT = {
  casaMani: "5c383b_a9f6aa50d3a44559aee6289afe36ebcf~mv2_d_6720_4480_s_4_2.jpg",
  oneOak:   "5c383b_38f5ef1da26e4204b8e465e79f378f2e~mv2.jpg",
  houseG:   "5c383b_a01053afaaa447d08fc46a06820b54d3~mv2_d_5760_3840_s_4_2.jpg",
  aura:     "5c383b_23c2d9ef2cfb46768b1a436bc5c8dc7a~mv2_d_4256_2832_s_4_2.jpg",
  cThru:    "5c383b_b3d670a8b83a486498fae278402120af~mv2.jpg",
  lolivier: "5c383b_fcb4f7079a5e443589c23a058a3a3b1b~mv2.jpg",
};

const ABOUT_VALUES = [
  ["Alignment", "We succeed when our clients and partners do. We take the owner's side, and we put our own capital and reputation behind our convictions."],
  ["Discretion", "We work quietly for private clients, principals and family offices. Confidentiality is built into every engagement."],
  ["Stewardship", "We treat every project and every dollar of capital as if it were our own — because, often, it is."],
  ["Craft", "An obsession with how things are made. The difference between built and realized lives in the details we refuse to compromise."],
];

const PORTFOLIO_STATS = [
  ["18", "Projects delivered"],
  ["13", "Private residences"],
  ["3", "Apartment buildings"],
  ["2", "Small-lot subdivisions"],
  ["2009", "Founded"],
];

const WWD_PILLARS = [
  ["01", "Owner's Representation", "We sit in your seat — one accountable advocate directing the entire project team and every decision."],
  ["02", "Development Management", "We carry the project end to end: feasibility, entitlement, design, construction and delivery."],
  ["03", "Investment", "We deploy capital alongside our partners, in disciplined, design-led real estate we know intimately."],
];

const STRATEGIES = [
  ["01", "Opportunistic", "2–3 Years", "Acquisition and ground-up development of residences and small-lot subdivisions.",
    ["Acquisition & ground-up development", "Residences & small-lot subdivisions", "Value created through entitlement & delivery", "Typically realized via for-sale exit"]],
  ["02", "Value-Add", "7–10 Years", "Apartment and commercial assets, repositioned and improved through the hold.",
    ["Apartment buildings & commercial assets", "Leasing, capital improvement, repositioning", "Cash flow during the hold", "Realized at stabilization or sale"]],
  ["03", "Stabilized", "Long-Term", "Income-producing assets held long-term for durability and preservation.",
    ["Income-producing, stabilized assets", "Long-term hold & wealth preservation", "Tax-efficient, cash-flow focused", "Designed for durability over cycles"]],
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
    "Igal N. Azran founded Noesis in 2009 and has led its design, development and investment work ever since. Born in Morocco and raised between France, Spain and Israel, he brings a genuinely international perspective — and a builder's discipline — to every engagement.",
    "Before Noesis, Igal was an associate at CIM Group, the Los Angeles real-estate private-equity and development firm, working on institutional investment and development transactions. Earlier, as a project manager for CBRE in Morocco, he delivered a 24-unit luxury condominium 22 days ahead of schedule and 12% under budget; in Los Angeles, he managed a $75 million construction budget for the L.A. Fashion Center, coordinating trades, architects and engineers through to completion.",
    "Today he leads the firm's owner's-representation and development-management practice and originates its investments, maintaining the relationships with domestic and international capital partners behind every mandate. He holds a Master's degree in Real Estate.",
  ],
};

function Home({ go, intent, setIntent }) {
  const goInvestor = (id) => { if (setIntent) setIntent("investor"); go(id); };
  return (
    <main className="page-enter">

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section id="hero" className="cine cine--video" style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingTop: "clamp(92px,13vh,150px)", paddingBottom: "clamp(34px,6vh,60px)" }}>
        <img className="cine__img" alt="A Noesis-delivered residence" fetchpriority="high" sizes="100vw"
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
            <span className="ln"><span>We build</span></span>
            <span className="ln"><span>what endures.</span></span>
          </h1>
          <div className="grid-12 u-mt-40" style={{ alignItems: "end" }}>
            <div className="col-6">
              <p className="lede" data-hero-fade style={{ maxWidth: "46ch", color: "rgba(236,230,216,.86)" }}>
                We are an international development and investment firm. We represent owners, deliver
                landmark residential and commercial projects, and invest alongside the work we know best.
              </p>
            </div>
            <div className="col-6 u-flex u-gap-16" data-hero-fade style={{ justifyContent: "flex-end", flexWrap: "wrap" }}>
              <button className="btn" onClick={() => go("what-we-do")} data-magnetic>For Owners &amp; Developers</button>
              <button className="btn btn--ghost" onClick={() => goInvestor("investment")} data-magnetic style={{ color: "var(--bone)", borderColor: "rgba(236,230,216,.7)" }}>For Investors</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────────── */}
      <section id="about" className="section">
        <div className="wrap grid-12">
          <div className="col-4 reveal">
            <div className="eyebrow"><span className="dot" /> About</div>
            <h2 className="h-1 u-mt-16 caps" style={{ maxWidth: "9ch" }}>Perception by intellect.</h2>
          </div>
          <div className="col-8 reveal">
            <p className="lede">
              Noesis is the Greek word for understanding. We are an owner's-representation, development
              and investment firm — founded in 2009, based in Beverly Hills, working internationally.
            </p>
            <p className="body-lg u-mt-24" style={{ maxWidth: "64ch" }}>
              We began as designers and builders of luxury real estate, conceiving and delivering
              residences and buildings across Southern California and abroad. That operating experience
              now sits on the owner's side of the table.
            </p>
            <p className="body-lg u-mt-24" style={{ maxWidth: "64ch" }}>
              As owner's representative and development manager we bring a builder's judgment to every
              engagement, and for aligned partners we invest our own conviction and capital alongside
              theirs. From Beverly Hills to international markets the mandate is the same: protect the
              vision, the capital and the timeline, and deliver. Fifteen years of delivered work stand
              behind every engagement.
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
      </section>

      {/* ── PROJECTS ───────────────────────────────────────────────── */}
      <section id="projects" className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <div className="grid-12 u-end reveal" style={{ marginBottom: "clamp(28px,3vw,40px)" }}>
            <div className="col-8">
              <div className="eyebrow"><span className="dot" /> Projects · Properties</div>
              <h2 className="h-1 u-mt-16 caps">A record owners trust.</h2>
              <p className="body-lg u-mt-16" style={{ maxWidth: "56ch" }}>
                Luxury residences and buildings designed, developed and delivered by the Noesis team —
                the operating record behind the way we manage projects for clients today.
              </p>
            </div>
            <div className="col-4 u-tr">
              <button className="btn btn--ghost" onClick={() => go("properties")} data-magnetic>View the full portfolio <span className="arr" /></button>
            </div>
          </div>

          <div className="statband reveal" style={{ marginBottom: "clamp(40px,4.5vw,64px)" }}>
            {PORTFOLIO_STATS.map(([v, l]) => (
              <div key={l}><div className="num">{v}</div><div className="statband__l">{l}</div></div>
            ))}
          </div>

          <div className="collage reveal">
            {[
              [SHOT.casaMani, "Casa Mani", "Beverly Hills"],
              [SHOT.oneOak, "One Oak", "Sunset Strip"],
              [SHOT.aura, "Aura House", "Tel Aviv"],
              [SHOT.cThru, "C Thru", "Beverly Grove"],
              [SHOT.houseG, "House G", "Melrose"],
              [SHOT.lolivier, "L'Olivier House", "Los Angeles"],
            ].map(([img, name, loc]) => (
              <article key={name} className="pcard" role="button" tabIndex={0} aria-label={`${name}, ${loc} — view the portfolio`}
                onClick={() => go("properties")}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go("properties"); } }}>
                <div className="pcard__media"><img className="pcard__img" src={wix(img, { w: 1300 })} alt={name} loading="lazy" /></div>
                <div className="pcard__cap"><div><div className="pcard__name">{name}</div><div className="pcard__loc">{loc}</div></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ─────────────────────────────────────────────── */}
      <section id="what-we-do" className="section wwd">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: "clamp(28px,3.5vw,48px)" }}>
            <div className="eyebrow"><span className="dot" /> What We Do</div>
            <p className="wwd__lead u-mt-24" style={{ maxWidth: "20ch" }}>
              We take a project from a <em>parcel of land</em> to a finished landmark — and stand
              accountable for every step between.
            </p>
            <p className="body-lg u-mt-24" style={{ maxWidth: "66ch", color: "var(--ink-2)" }}>
              Most owners build once. We are the single party at the table accountable for the whole —
              protecting your vision, your capital and your timeline, from the first study to the final
              handover.
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
          <button className="btn btn--ghost u-mt-40" onClick={() => go("approach")} data-magnetic>Our full capabilities <span className="arr" /></button>
        </div>
      </section>

      {/* cinematic plate */}
      <section className="cine" style={{ height: "min(82vh, 800px)", minHeight: 480 }}>
        <img className="cine__img" data-parallax="0.12" src={wix(PHOTO.ying_wide, { w: 2600 })} alt="" />
        <div className="cine__grad" />
        <div className="cine__cap">
          <div className="wrap" style={{ paddingBottom: "clamp(36px,6vw,72px)" }}>
            <div className="eyebrow" style={{ color: "rgba(236,230,216,.62)" }}><span className="dot" /> Designed, developed &amp; delivered by Noesis</div>
            <h2 className="h-1 u-mt-16 caps" style={{ color: "var(--bone)", maxWidth: "18ch" }}>We have stood where our clients stand.</h2>
          </div>
        </div>
      </section>

      {/* ── INVESTMENT ─────────────────────────────────────────────── */}
      <section id="investment" className="section">
        <div className="wrap grid-12">
          <div className="col-4 reveal">
            <div className="eyebrow"><span className="dot" /> Investment</div>
            <h2 className="h-1 u-mt-16 caps" style={{ maxWidth: "10ch" }}>Capital, aligned.</h2>
          </div>
          <div className="col-8 reveal">
            <p className="lede">
              We originate, structure and steward real estate investments for an aligned network of
              private capital — family offices, principals and institutions — with the operator invested
              alongside.
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

      {/* ── MANAGEMENT (process) ───────────────────────────────────── */}
      <section id="management" className="section section--ink">
        <div className="wrap">
          <div className="grid-12 u-end reveal">
            <div className="col-7">
              <div className="eyebrow"><span className="dot" /> Management · Services</div>
              <h2 className="h-1 u-mt-16 caps" style={{ color: "var(--bone)" }}>From entitlement to delivery.</h2>
            </div>
            <div className="col-5">
              <p className="body-lg">
                A disciplined, gated path from first study to final handover — the owner informed and in
                command at every stage.
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
        </div>
      </section>

      {/* ── FOUNDER ────────────────────────────────────────────────── */}
      <section className="section">
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
              Whether you have a project to deliver or capital to deploy, we welcome a confidential
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
            <option>Owner / Principal — a project to deliver</option>
            <option>Developer — owner's rep / project management</option>
            <option>Investor — capital partnership</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field" style={{ gridColumn: "1 / -1" }}><label>Message</label><textarea name="message" rows="5" placeholder="Tell us about your project, or your interest in investing." required></textarea></div>
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
