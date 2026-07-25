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
];

function Approach({ go }) {
  return (
    <main className="page-enter">
      {/* HERO */}
      <section style={{ paddingTop: "clamp(120px, 12vh, 150px)", paddingBottom: "clamp(28px, 4vw, 48px)" }}>
        <div className="wrap grid-12" style={{ alignItems: "end" }}>
          <div className="col-7">
            <div className="eyebrow"><span className="dot" /> Owner's Representation · Project Management</div>
            <h1 className="h-display lx-h u-mt-24" style={{ maxWidth: "13ch" }}>
              <span className="ln"><span>Our discipline,</span></span>
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
              We represent the owner and investor and always have your best interest in mind during site
              visits, contractor hiring and progress reporting — a service we extend to a select few
              owners alongside our own developments.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section" style={{ paddingTop: "clamp(28px,3vw,44px)" }}>
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

      {/* PROCESS */}
      <section className="section section--ink">
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

      {/* SECTORS */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow reveal" style={{ marginBottom: 28 }}><span className="dot" /> Where We Work</div>
          <div className="sectors reveal">
            {SECTORS.map((s) => (
              <article key={s.tag} className="sector">
                <div className="sector__img"><img src={wix(PHOTO[s.img], { w: 1500 })} alt={s.title} loading="lazy" /><div className="sector__grad" /></div>
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
        <div className="wrap grid-12 u-end">
          <div className="col-8"><h2 className="h-1 caps" style={{ color: "var(--bone)" }}>Let's build something <em className="accent">exceptional.</em></h2></div>
          <div className="col-4 u-tr"><button className="btn" onClick={() => go("inquiries")}>Start a Conversation <span className="arr" /></button></div>
        </div>
      </section>
    </main>
  );
}

window.Approach = Approach;
