// Management — a primary practice since October 2026, served at /management/
// (the view key is still "owners-rep"). Three mandates: development management,
// owner's representation, asset & property management. The firm no longer acts
// as general contractor; construction is bid to licensed GCs and managed by
// Noesis. Capabilities copy from the client's service docs (ARCHIVES 03/04),
// with the contracting text rewritten as construction management.

// The three ways the practice is engaged — the platform, stated as a list a
// reader can check their need against.
const MANDATES = [
  ["01", "Development Management", "For owners and investors building from the ground up.",
    ["Feasibility, highest-and-best-use and budget", "Entitlement, zoning and permitting", "Design team selection and direction", "Bidding to licensed general contractors", "Schedule, cost and quality through closeout"]],
  ["02", "Owner's Representation", "One accountable advocate on a project you own.",
    ["A single point of contact, start to finish", "Contract negotiation and change-order control", "Site visits, inspections and progress reporting", "Consultant and contractor oversight", "Handover, warranty and closeout"]],
  ["03", "Asset & Property Management", "Income property, operated to the plan.",
    ["Leasing and tenant relations", "Operating budgets and monthly reporting", "Capital improvements and repositioning", "Vendor and maintenance management", "Sale or refinancing, when the strategy calls for it"]],
];

const CAPABILITIES = [
  ["01", "Project Management · Owner's Representation", "One point of contact from site preparation through building completion. We represent the owner and investor — suggesting the best use of land, analyzing financial decisions, and orchestrating everything from architecture to engineering, with all zoning, permitting, approvals and entitlements handled, and open communication throughout."],
  ["02", "Architecture & Design", "Innovative designs where quality, craftsmanship and functionality reign supreme. From inception we scrutinize every detail: complete site analyses, a theme that drives the design, and the latest green, audio-visual and smart-home technologies — delivered as meticulously planned blueprints the contractors delight in making real."],
  ["03", "Interior Design", "Comprehensive interior design and planning with an emphasis on modern, thoughtful minimalism — livable and tranquil, yet open to bold statements. Every detail is planned, from interior elevations and fireplace planning to custom cabinetry and ceiling lighting, brought to life through vision boards."],
  ["04", "Construction Management", "We do not self-perform construction. We bid the work to licensed general contractors, negotiate the contract, and hold every trade to the plan — schedule, cost and quality — with daily oversight from foundation and framing through mechanical, finishes and closeout."],
  ["05", "Feasibility & Entitlement", "Site and market analysis, highest-and-best-use studies, financial modeling, and the planning, zoning and permitting strategy that determines whether — and how — a project can be built."],
  ["06", "Consulting", "As-needed advisory for design and construction projects — permit approvals, construction management, site visits and design questions. Consider us your advocate, with our experience and market knowledge put to work for you."],
  ["07", "Asset & Property Management · Sales & Acquisitions", "Stewardship does not end at handover. For the buildings we deliver and hold we carry the management forward — leasing, capital improvements and property management — with sales and acquisitions when the strategy calls for it."],
];

// The client's own framing of owner's representation, verbatim from their site
// outline: "HONESTY. OPEN BOOK. A TRUSTWORTHY PARTNER."
const OR_VALUES = [
  ["Honesty", "We represent you, and only you. Transparent and open communication runs through the entire design and build — during site visits, contractor hiring and progress reporting."],
  ["Open Book", "On a daily basis we supervise the work — handling all communication, direction and supervision — and you see what we see. The details can be overwhelming; countless years of experience prepare us for whatever challenge may arise."],
  ["A Trustworthy Partner", "People are our best asset. Our expansive network of construction professionals and tradespeople is reputable and trustworthy — relationships earned across our own developments, put to work on yours."],
];

// Two ways an owner engages the practice.
const OR_ENGAGE = [
  ["01", "The Full Mandate", "One accountable representative from site preparation through building completion. We collaborate with engineers, subcontractors and construction personnel, handle all zoning, permitting, approvals, entitlements and planning issues, and supervise the build daily — communication, direction and supervision — to the owner's standard."],
  ["02", "As-Needed Counsel", "Not every project wants a full mandate. We guide owners through the process as questions arise — permit approvals, construction management, a site visit, a construction issue, a design decision — the same experience and market knowledge, engaged on your terms."],
];

// The discipline was earned as principal and project manager — the same record
// attributed on the Firm page, applied here in its owner's-rep context.
const OR_PROOF = [
  ["$75M", "Construction budget managed"],
  ["22 days", "Delivered ahead of schedule"],
  ["12%", "Delivered under budget"],
];

const OR_PROCESS = [
  ["01", "Strategy & Feasibility", "Site and market analysis, highest-and-best-use, financial modeling and risk assessment."],
  ["02", "Entitlement & Approvals", "Navigating planning, zoning, permitting and the stakeholders who decide a project's fate."],
  ["03", "Design & Preconstruction", "Assembling and directing the design team; budgeting, value engineering and procurement."],
  ["04", "Construction Delivery", "Managing contractors, schedule, cost and quality to completion, at the owner's standard."],
  ["05", "Handover & Realization", "Closeout and handover, then leasing, sale or stabilization to realize the asset's full value."],
];

const SECTORS = [
  { tag: "Luxury Residential", title: "Custom family estates, from $5M", img: "genesee_int_5",
    desc: "For principals building a primary residence or estate, we manage architects, interiors and craftsmen to an exacting standard — with the discretion ultra-prime work demands." },
  { tag: "Commercial & Multifamily", title: "Owner's rep for large-scale projects", img: "ying_ext_tall",
    desc: "For developers and institutions delivering major commercial and multifamily assets, we bring program discipline, cost certainty and an owner's judgment to every phase." },
  { tag: "Stabilization & Management", title: "Leasing, improvements, management", img: "stanley_ext_1",
    desc: "For owners of apartment buildings: leasing, capital improvements and partial redevelopment, then ongoing asset and property management — the same stabilization discipline we apply to our own value-add holdings." },
];

function Approach({ go, setIntent }) {
  return (
    <main className="page-enter">
      {/* HERO */}
      <section style={{ paddingTop: "clamp(120px, 12vh, 150px)", paddingBottom: "clamp(28px, 4vw, 48px)" }}>
        <div className="wrap grid-12 hero-grid">
          <div className="col-7">
            <div className="eyebrow"><span className="dot" /> Management · Primary Practice</div>
            <h1 className="h-display lx-h u-mt-24" style={{ maxWidth: "13ch" }}>
              <span className="ln"><span>Managed like</span></span>{" "}
              <span className="ln"><span>we own it.</span></span>
            </h1>
          </div>
          <div className="col-5">
            <p className="lede">
              Noesis manages real estate the way an owner would — because on our own developments we
              are the owner. For a select group of owners and investors we take on that same role:
              development management from site to completion, representation on projects we do not
              own, and asset and property management once a building is delivered.
            </p>
            <p className="body u-mt-16" style={{ color: "var(--muted)", maxWidth: "52ch" }}>
              A major project is won or lost in the management of it. We represent the owner and investor
              and always have your best interest in mind during site visits, contractor hiring and
              progress reporting — one point of contact, from the first study to the last lease.
            </p>
            <p className="body u-mt-16" style={{ color: "var(--muted)", maxWidth: "52ch" }}>
              We are engaged by private owners, family offices and developers building landmark
              residential and commercial projects — people for whom getting it right the first time
              is the whole point.
            </p>
          </div>
        </div>
          <div className="wrap">
            <HeroRail items={[["3", "Mandates"], ["7", "Capabilities"], ["5", "Delivery gates"], ["One", "Point of contact"]]} />
          </div>
      </section>

      {/* THE MANDATES — the practice, as three engagements */}
      <section id="mandates" className="section">
        <div className="wrap">
          <div className="grid-12 u-end reveal" style={{ marginBottom: "clamp(28px,3.5vw,48px)" }}>
            <div className="col-7">
              <div className="eyebrow"><span className="dot" /> Three Mandates</div>
              <h2 className="h-1 u-mt-16" style={{ maxWidth: "16ch" }}>One discipline, three ways in.</h2>
            </div>
            <div className="col-5">
              <p className="body" style={{ color: "var(--muted)", maxWidth: "46ch" }}>
                Each mandate is the role Noesis plays on its own projects, offered to a select group of
                owners. Construction is always performed by licensed general contractors under our
                management.
              </p>
            </div>
          </div>
          <div className="mandates reveal">
            {MANDATES.map(([n, t, d, items]) => (
              <article key={n} className="mandate">
                <div className="mandate__n">{n}</div>
                <h3 className="mandate__t">{t}</h3>
                <p className="mandate__d">{d}</p>
                <ul className="mandate__list">{items.map((it) => <li key={it}>{it}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section section--lead">
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot" /> The Capabilities</div>
          <p className="body u-mt-16" style={{ maxWidth: "58ch", color: "var(--muted)" }}>
            Seven disciplines, engaged as a full mandate or singly. Open the ones that apply to you.
          </p>
          {/* Seven capabilities as seven stacked paragraphs made a long scroll for
              a reader who wants two of them. The first is open so the pattern is
              legible; the rest are one click. */}
          <div className="acc u-mt-24 reveal">
            {CAPABILITIES.map(([n, t, d], i) => (
              <details key={n} className="acc__item" open={i === 0}>
                <summary className="acc__head">
                  <span className="acc__idx">{n}</span>
                  <span className="acc__t">{t}</span>
                  <span className="acc__mk" aria-hidden="true" />
                </summary>
                <div className="acc__body"><p>{d}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE REPRESENT YOU — the client's own positioning: honesty, open book, partnership */}
      <section className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot" /> How We Represent You</div>
          <div className="reveal qgrid qgrid--3 u-mt-24">
            {OR_VALUES.map(([t, d], i) => (
              <div key={t}>
                <div className="wwd-cap__n">0{i + 1}</div>
                <div className="wwd-cap__t">{t}</div>
                <p className="wwd-cap__d">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section--ink section--snug">
        <div className="wrap">
          <div className="grid-12 u-end reveal">
            <div className="col-7">
              <div className="eyebrow"><span className="dot" /> The Process</div>
              <h2 className="h-1 u-mt-16 caps" style={{ color: "var(--ink)" }}>From entitlement to delivery.</h2>
            </div>
            <div className="col-5">
              <p className="body-lg">
                A disciplined, gated path from first study to final handover — the owner informed and in
                command at every stage, with transparent and open communication throughout.
              </p>
            </div>
          </div>
          <div className="flow u-mt-64">
            {OR_PROCESS.map(([n, t, d]) => (
              <div key={n} className="flow__step">
                <div className="flow__num">{n}</div>
                <div className="flow__name">{t}</div>
                <p className="flow__desc">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ON SITE — what representation looks like on the ground */}
      <SiteStrip eyebrow="On The Ground" title="Where the work is checked."
        note="Management is decided on site — at the pour, the inspection and the punch walk, not in a monthly report. Frames from Noesis-managed projects in Los Angeles." />

      {/* THE PRECONSTRUCTION ADVANTAGE — in-house design capability de-risks delivery */}
      <section className="section section--lead">
        <div className="wrap grid-12" style={{ alignItems: "start" }}>
          <div className="col-8 reveal">
            <div className="eyebrow"><span className="dot" /> The Preconstruction Advantage</div>
            <p className="pull u-mt-24" style={{ maxWidth: "28ch" }}>
              Once it's time to build, construction moves forward <em>free and clear.</em>
            </p>
            <p className="body-lg u-mt-24">
              Our architects, designers, engineers and administrators work hand-in-hand with one
              another — and with the city, the planning department and contractors — to deliver
              meticulously planned, detailed blueprints that are a delight to make real. That
              collaborative environment puts valuable input into the earliest drawing stages —
              which is why, once ground is broken, the build holds its line.
            </p>
            <p className="body u-mt-16" style={{ color: "var(--muted)" }}>
              Throughout the entire process — from draft to completion — the client stays at the
              forefront: your exclusive needs and aspirations, delivered at our standard.
            </p>
          </div>
          <div className="col-4 reveal">
            <div className="eyebrow"><span className="dot" /> The Principal's Record</div>
            <div className="u-mt-24" style={{ display: "grid", gap: 24, borderLeft: "1px solid var(--rule)", paddingLeft: "clamp(20px,2vw,32px)" }}>
              {OR_PROOF.map(([v, l]) => (
                <div key={l}>
                  <div className="principal__num">{v}</div>
                  <div className="principal__lbl">{l}</div>
                </div>
              ))}
            </div>
            {/* Development and the Firm page both disclose that these predate
                Noesis. This page presented them as the firm's own. */}
            <p className="body u-mt-24" style={{ color: "var(--muted)", fontSize: 13.5, maxWidth: "34ch" }}>
              Earned by our principal before Noesis — at CBRE in Morocco and on the L.A. Fashion Center.
            </p>
          </div>
        </div>
      </section>

      {/* Statement band — the photograph carries the scale, the words sit beside
          it. Was a headline printed across the image, which is the note Igal gave. */}
      <section className="section" style={{ borderTop: 0 }}>
        <div className="wrap">
          <div className="band reveal">
            <div className="band__media">
              <img src="assets/img/or-living.jpg" alt="A Noesis-delivered living space" loading="lazy" onError={imgFallback} />
            </div>
            <div className="band__panel">
              <div className="eyebrow"><span className="dot" /> Delivered by Noesis</div>
              <p className="band__t">The single party at the table accountable for the whole of it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE ENGAGE — full mandate or as-needed counsel */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot" /> How We Engage</div>
          <div className="rows u-mt-24">
            {OR_ENGAGE.map(([n, t, d]) => (
              <div key={n} className="row reveal">
                <div className="row__idx">{n}</div>
                <div className="row__title">{t}</div>
                <p className="row__desc">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow reveal" style={{ marginBottom: "clamp(24px,3vw,36px)" }}><span className="dot" /> Where We Work</div>
          <div className="sectors sectors--3 reveal">
            {SECTORS.map((s) => (
              <article key={s.tag} className="sector">
                <div className="sector__img"><img src={wix(PHOTO[s.img], { w: 800 })}
                  srcSet={wixSet(PHOTO[s.img], [800, 1400])}
                  sizes="(max-width: 860px) 92vw, 30vw"
                  alt={s.title} loading="lazy" decoding="async" onError={imgFallback} /><div className="sector__grad" /></div>
                <div className="sector__body">
                  <div className="sector__tag">{s.tag}</div>
                  <div className="sector__title">{s.title}</div>
                  <p className="sector__desc">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* CITY BAND — the service line works at city scale too; statement in its
          own panel, never printed across the photograph. */}
      <section className="section" style={{ borderTop: 0 }}>
        <div className="wrap">
          <div className="band reveal">
            <div className="band__media">
              <img src="assets/img/city-west.jpg"
                srcSet="assets/img/city-west-w800.webp 800w, assets/img/city-west-w1400.webp 1400w, assets/img/city-west.jpg 2600w"
                sizes="(max-width: 900px) 100vw, min(1480px, 92vw)"
                alt="" aria-hidden="true" loading="lazy" onError={imgFallback} />
            </div>
            <div className="band__panel">
              <div className="eyebrow"><span className="dot" /> Representative engagements</div>
              <p className="band__t">One accountable party, entitlement to delivery.</p>
              <p className="body u-mt-16">
                We represent a select number of owners and institutions on projects we do not own,
                applying the discipline we bring to our own developments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PracticeSwitch go={go} current="owners-rep" />

      <NightCta band="build-pour" focus="50% 45%" alt="A concrete pour on a Los Angeles construction site"
        title={<>Your project, <em>managed like ours.</em></>}
        actions={<button className="btn" onClick={() => { if (setIntent) setIntent("owner"); go("inquiries"); }} data-magnetic>Discuss Your Project <span className="arr" /></button>} />
    </main>
  );
}

window.Approach = Approach;
