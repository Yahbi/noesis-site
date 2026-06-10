// Services — owner's representation, development & project management, consulting

const PILLARS = [
  ["01", "Owner's Representation",
    "We sit in the owner's seat as your single, accountable advocate — directing the entire project team, safeguarding your intent, and making sure every decision serves your interest, not the vendor's."],
  ["02", "Development Management",
    "End-to-end management of ground-up and repositioning projects: feasibility, structuring, entitlement, delivery and disposition — one team carrying the project from raw opportunity to realized asset."],
  ["03", "Project & Construction Management",
    "Schedule, budget, procurement, contractor selection and on-site quality control — run with the discipline of a builder who has self-delivered luxury projects, not a spectator."],
  ["04", "Feasibility & Entitlement",
    "Site and market analysis, highest-and-best-use studies, financial modeling, and the planning, zoning and permitting strategy that determines whether — and how — a project can be built."],
  ["05", "Design Management",
    "Assembling and aligning architects, interior designers and engineers around a single vision and budget — protecting design integrity while keeping value and constructability in view."],
  ["06", "Cost & Risk Management",
    "Independent budgeting, value engineering, contingency strategy and proactive risk control — so surprises are surfaced early and the owner stays in command of capital."],
];

const FLOW = [
  ["01", "Strategy & Feasibility", "We pressure-test the opportunity before capital is committed — site and market analysis, highest-and-best-use, financial modeling and a clear-eyed risk assessment."],
  ["02", "Entitlement & Approvals", "We navigate planning, zoning, permitting and the agency and community stakeholders who ultimately decide a project's fate, building the approval path deliberately."],
  ["03", "Design & Preconstruction", "We assemble and direct the design team, then lock budget, scope and program through value engineering, procurement and contractor selection."],
  ["04", "Construction Delivery", "We manage contractors, schedule, cost and quality to completion — holding every trade to the owner's standard and resolving issues before they compound."],
  ["05", "Handover & Realization", "We close out, commission and hand over the asset — then support leasing, sale or stabilization so the project's full value is realized, not left on the table."],
];

function Services({ setPage }) {
  return (
    <main className="page-enter">
      {/* HERO */}
      <section style={{ paddingTop: "clamp(48px,9vh,120px)", paddingBottom: "clamp(40px,6vw,80px)", borderTop: 0 }}>
        <div className="wrap">
          <div className="eyebrow"><span className="dot" /> Services · For Owners &amp; Developers</div>
          <h1 className="h-display lx-h u-mt-24" style={{ maxWidth: "13ch" }}>
            <span className="ln"><span>We represent</span></span>
            <span className="ln"><span><em className="accent" style={{ fontStyle: "italic" }}>the owner.</em></span></span>
          </h1>
          <div className="grid-12 u-mt-40" style={{ alignItems: "start" }}>
            <div className="col-7">
              <p className="lede" data-hero-fade style={{ maxWidth: "50ch" }}>
                A major project is won or lost in the management of it. Noesis is the owner&rsquo;s
                representative and development manager who carries that responsibility &mdash; protecting
                your vision, your capital and your timeline from the first study to the final handover.
              </p>
            </div>
            <div className="col-5">
              <p className="body-lg" data-hero-fade>
                We are engaged by private owners, family offices and developers building landmark
                residential and commercial projects &mdash; people for whom the cost of getting it wrong
                far exceeds the cost of getting it right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CINEMATIC PLATE */}
      <section className="cine" style={{ height: "min(74vh,720px)", minHeight: 440 }}>
        <img className="cine__img" data-parallax="0.1" src={wix(PHOTO.stanley_int_2, { w: 2400 })} alt="" />
        <div className="cine__grad" />
        <div className="cine__cap">
          <div className="wrap" style={{ paddingBottom: "clamp(32px,5vw,64px)" }}>
            <h2 className="h-2" style={{ color: "var(--bone)", maxWidth: "20ch" }}>
              The only party at the table accountable for the <em className="italic" style={{ color: "var(--bone)" }}>whole.</em>
            </h2>
          </div>
        </div>
      </section>

      {/* WHY AN OWNER'S REP */}
      <section className="section">
        <div className="wrap grid-12">
          <div className="col-4 reveal">
            <div className="eyebrow"><span className="dot" /> The Mandate</div>
          </div>
          <div className="col-8 reveal delay-1">
            <p className="pull">
              Most owners build once. Their architect, contractor and lender each protect their own
              interest. <em>We protect yours</em> — the only party at the table accountable for the whole.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <div className="grid-12 u-end reveal">
            <div className="col-8">
              <div className="eyebrow"><span className="dot" /> What We Do</div>
              <h2 className="h-1 u-mt-16 caps">Capabilities under <em className="accent">one roof.</em></h2>
            </div>
            <div className="col-4">
              <p className="body-lg">
                Engage the full platform, or the single discipline your project is missing. Either way,
                accountability sits with us.
              </p>
            </div>
          </div>
          <div className="pillars u-mt-64 reveal">
            {PILLARS.map(([n, t, d]) => (
              <div key={n} className="pillar">
                <div className="pillar__top"><span className="kicker">{n}</span></div>
                <div className="pillar__name">{t}</div>
                <p className="pillar__desc">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="section section--ink">
        <div className="wrap">
          <div className="grid-12 u-end reveal">
            <div className="col-7">
              <div className="eyebrow"><span className="dot" /> The Process</div>
              <h2 className="h-1 u-mt-16 caps" style={{ color: "var(--bone)" }}>From entitlement <em className="accent">to delivery.</em></h2>
            </div>
            <div className="col-5">
              <p className="body-lg">
                A disciplined, gated path &mdash; each stage de-risking the next, with the owner informed
                and in control throughout.
              </p>
            </div>
          </div>
          <div className="flow u-mt-64">
            {FLOW.map(([n, t, d]) => (
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
          <div className="reveal" style={{ marginBottom: 48 }}>
            <div className="eyebrow"><span className="dot" /> Sectors</div>
            <h2 className="h-1 u-mt-16 caps">Built for the <em className="accent">complex few.</em></h2>
          </div>
          <div className="grid-12 reveal" style={{ gap: 32 }}>
            <div className="col-6">
              <div className="sector">
                <div className="sector__img">
                  <img src={wix(PHOTO.genesee_int_4, { w: 1400 })} alt="" />
                  <div className="sector__grad" />
                </div>
                <div className="sector__body">
                  <div className="sector__tag">Luxury Residential</div>
                  <div className="sector__title">Custom family estates, from $5M</div>
                  <p className="body u-mt-16" style={{ maxWidth: "52ch" }}>
                    For principals building a primary residence or estate, we manage architects, interiors
                    and craftsmen to an exacting standard &mdash; with the discretion ultra-prime work demands.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="sector">
                <div className="sector__img">
                  <img src={wix(PHOTO.ying_int_6, { w: 1400 })} alt="" />
                  <div className="sector__grad" />
                </div>
                <div className="sector__body">
                  <div className="sector__tag">Commercial &amp; Multifamily</div>
                  <div className="sector__title">Owner&rsquo;s rep for large-scale projects</div>
                  <p className="body u-mt-16" style={{ maxWidth: "52ch" }}>
                    For developers and institutions delivering major commercial and multifamily assets, we
                    bring program discipline, cost certainty and a builder&rsquo;s judgment to every phase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL PAIR — the standard, in pictures */}
      <section className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <div className="pair reveal">
            <figure>
              <img src={wix(PHOTO.stanley_wide, { w: 1800 })} alt="Stanley Lofts, West Hollywood" loading="lazy" />
              <figcaption>Stanley Lofts — West Hollywood</figcaption>
            </figure>
            <figure>
              <img src={wix(PHOTO.genesee_int_2, { w: 1200 })} alt="My Genesee, Beverly Grove" loading="lazy" />
              <figcaption>My Genesee — Beverly Grove</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* WHY NOESIS */}
      <section className="section">
        <div className="wrap">
          <div className="grid-12 u-end reveal">
            <div className="col-8">
              <div className="eyebrow"><span className="dot" /> Why Noesis</div>
              <h2 className="h-1 u-mt-16 caps">Advisors who have <em className="accent">built.</em></h2>
            </div>
          </div>
          <div className="rows u-mt-40">
            {[
              ["Operators, not observers", "We have designed, financed, built and sold luxury real estate ourselves. We manage your project with the judgment that only comes from having carried the risk."],
              ["Aligned, never conflicted", "We are paid to protect the owner — not to sell drawings, pour concrete or place a loan. Our only product is your outcome."],
              ["Vertically integrated", "Design, development, construction and capital live under one roof, so intent doesn't get lost in the handoffs between specialists."],
              ["Discreet by default", "We work quietly for private clients and family offices. Confidentiality is a condition of the work, not a courtesy."],
            ].map(([t, d], i) => (
              <div key={t} className="row reveal">
                <div className="row__idx">0{i + 1}</div>
                <div className="row__title">{t}</div>
                <p className="row__desc">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--ink">
        <div className="wrap grid-12 u-end">
          <div className="col-8"><h2 className="h-1 caps" style={{ color: "var(--bone)" }}>Planning a project worth <em className="accent">getting right?</em></h2></div>
          <div className="col-4 u-tr"><button className="btn" onClick={() => setPage("contact")}>Start a Conversation <span className="arr" /></button></div>
        </div>
      </section>
    </main>
  );
}

window.Services = Services;
