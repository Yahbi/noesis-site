// Owner's Representation & Project Management — the ACCESSORY service line
// (30-40% emphasis per the client directive). Capabilities copy sourced from the
// client's own service docs (ARCHIVES 03-DESIGN / 04-BUILD).

const CAPABILITIES = [
  ["01", "Project Management · Owner's Representation", "One point of contact from site preparation through building completion. We represent the owner and investor — suggesting the best use of land, analyzing financial decisions, and orchestrating everything from architecture to engineering, with all zoning, permitting, approvals and entitlements handled and transparent, open communication throughout."],
  ["02", "Architecture & Design", "Innovative designs where quality, craftsmanship and functionality reign supreme. From inception we scrutinize every detail: complete site analyses, a theme that drives the design, and the latest green, audio-visual and smart-home technologies — delivered as meticulously planned blueprints our contractors delight in making real."],
  ["03", "Interior Design", "Comprehensive interior design and planning with an emphasis on modern, thoughtful minimalism — livable and tranquil, yet open to bold statements. Every detail is planned, from interior elevations and fireplace planning to custom cabinetry and ceiling lighting, brought to life through vision boards."],
  ["04", "General Contracting", "We bring blueprints to life through a reputable, trustworthy network of construction professionals — supervising every trade daily: foundation, framing, plumbing, electrical, HVAC, smart-home automation, A/V, custom cabinetry, roofing and waterproofing, plaster, drywall, millwork and insulation."],
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
    desc: "For developers and institutions delivering major commercial and multifamily assets, we bring program discipline, cost certainty and a builder's judgment to every phase." },
  { tag: "Stabilization & Management", title: "Leasing, improvements, management", img: "stanley_ext_1",
    desc: "For owners of apartment buildings: leasing, capital improvements and partial redevelopment, then ongoing asset and property management — the same stabilization discipline we apply to our own value-add holdings." },
];

function Approach({ go, setIntent }) {
  return (
    <main className="page-enter">
      {/* HERO */}
      <section style={{ paddingTop: "clamp(120px, 12vh, 150px)", paddingBottom: "clamp(28px, 4vw, 48px)" }}>
        <div className="wrap grid-12 u-end">
          <div className="col-7">
            <div className="eyebrow"><span className="dot" /> Owner's Representation · Project Management</div>
            <h1 className="h-display lx-h u-mt-24" style={{ maxWidth: "13ch" }}>
              <span className="ln"><span>Our discipline,</span></span>{" "}
              <span className="ln"><span>your project.</span></span>
            </h1>
          </div>
          <div className="col-5">
            <p className="lede">
              Noesis Group takes the stress off you by handling every aspect of your construction project.
              From site preparation through building completion, we manage and oversee all elements of the
              design and construction process — giving you one point of contact.
            </p>
            <p className="body u-mt-16" style={{ color: "var(--muted)", maxWidth: "52ch" }}>
              A major project is won or lost in the management of it. We represent the owner and investor
              and always have your best interest in mind during site visits, contractor hiring and
              progress reporting — a service we extend to a select few owners alongside our own
              developments.
            </p>
            <p className="body u-mt-16" style={{ color: "var(--muted)", maxWidth: "52ch" }}>
              We are engaged by private owners, family offices and developers building landmark
              residential and commercial projects — people for whom the cost of getting it right is
              repaid many times over.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section section--lead">
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot" /> The Capabilities</div>
          <div className="rows u-mt-24">
            {CAPABILITIES.map(([n, t, d]) => (
              <div key={n} className="row reveal">
                <div className="row__idx">{n}</div>
                <div className="row__title">{t}</div>
                <p className="row__desc">{d}</p>
              </div>
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
              <h2 className="h-1 u-mt-16 caps" style={{ color: "var(--bone)" }}>From entitlement to delivery.</h2>
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
            <div className="eyebrow"><span className="dot" /> The Record, Applied</div>
            <div className="u-mt-24" style={{ display: "grid", gap: 24, borderLeft: "1px solid var(--rule)", paddingLeft: "clamp(20px,2vw,32px)" }}>
              {OR_PROOF.map(([v, l]) => (
                <div key={l}>
                  <div className="principal__num">{v}</div>
                  <div className="principal__lbl">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CINEMATIC PLATE — a delivered interior */}
      <section className="cine" style={{ height: "min(70vh, 640px)", minHeight: 400 }}>
        <img className="cine__img img--warm" data-parallax="0.1" src="assets/img/or-living.jpg"
          alt="A Noesis-delivered living space opening to the pool" onError={imgFallback} />
        <div className="cine__grad" />
        <div className="cine__cap">
          <div className="wrap" style={{ paddingBottom: "clamp(36px,6vw,72px)" }}>
            <div className="eyebrow"><span className="dot" /> Delivered by Noesis</div>
            <h2 className="h-1 u-mt-16 caps" style={{ color: "var(--bone)", maxWidth: "20ch" }}>The single party at the table accountable for the whole.</h2>
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
                <div className="sector__img"><img src={wix(PHOTO[s.img], { w: 1500 })} alt={s.title} loading="lazy" onError={imgFallback} /><div className="sector__grad" /></div>
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
      <section className="section section--ink">
        <div className="wrap grid-12 u-end reveal">
          <div className="col-8"><h2 className="h-1 caps" style={{ color: "var(--bone)" }}>Let's build something <em className="accent">exceptional.</em></h2></div>
          <div className="col-4 u-tr"><button className="btn" onClick={() => { if (setIntent) setIntent("owner"); go("inquiries"); }} data-magnetic>Discuss Your Project <span className="arr" /></button></div>
        </div>
      </section>
    </main>
  );
}

window.Approach = Approach;
