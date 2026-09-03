// Development — primary pillar page. Copy sourced from the client's own docs
// (ARCHIVES/03 - DESIGN: Design landing, Architecture, Interior Design;
//  ARCHIVES/04 - BUILD: General Contracting). Stone & linen, same components.

const DEV_ASSETS = [
  ["01", "Luxury Residences", "Ground-up custom homes across Beverly Hills, West Hollywood and the Los Angeles hills — the asset class the firm was founded on in 2009."],
  ["02", "Small-Lot Subdivisions", "Detached, fee-simple homes that bring new construction and the finish level of our luxury portfolio to dense, high-demand infill neighborhoods."],
  ["03", "Apartment Buildings", "Boutique multifamily — townhome-style residences with Italian kitchens, private outdoor space and the detailing of a single-family home."],
];

const DEV_CRAFT = [
  ["Architecture", "We scrutinize every detail from inception — complete site analyses, a theme that drives the design, and the latest green, audio-visual and smart-home technologies. Our architects, designers, engineers and administrators work hand-in-hand with the city, planning department and contractors to deliver meticulously planned blueprints that are a delight for contractors to make a reality."],
  ["Interior Design", "Comprehensive interior design and planning, with an emphasis on modern, thoughtful minimalism — livable and tranquil, yet open to bold statements. Elements are curated and sourced from around the world: Moroccan doors, handmade glass tiles created by Israeli artists. Every detail is planned — interior elevations, fireplace planning, custom cabinetry, ceiling lighting, even power outlets — and material selections come to life through vision boards."],
  ["General Contracting", "We bring the blueprints to life through an expansive network of reputable construction professionals and tradespeople, supervising the build daily: foundation, framing, plumbing, electrical, HVAC, smart-home automation, A/V, custom cabinetry, roofing and waterproofing, lath, plaster and stucco, drywall, millwork and insulation."],
];

const DEV_PROCESS = [
  ["01", "Strategy & Feasibility", "Site and market analysis, highest-and-best-use, financial modeling and risk assessment."],
  ["02", "Entitlement & Approvals", "Planning, zoning, permitting and the stakeholders who decide a project's fate."],
  ["03", "Design & Preconstruction", "Assembling and directing the design team; budgeting, value engineering and procurement."],
  ["04", "Construction Delivery", "Managing contractors, schedule, cost and quality to completion, at our own standard."],
  ["05", "Handover & Realization", "Closeout and handover, then leasing, sale or stabilization to realize the asset's full value."],
];

const DEV_PROOF = [
  ["$75M", "Construction budget managed"],
  ["22 days", "Delivered ahead of schedule"],
  ["12%", "Delivered under budget"],
];

function Development({ go }) {
  return (
    <main className="page-enter">
      {/* HERO */}
      <section style={{ paddingTop: "clamp(120px, 12vh, 150px)", paddingBottom: "clamp(28px, 4vw, 48px)" }}>
        <div className="wrap grid-12 hero-grid">
          <div className="col-7">
            <div className="eyebrow"><span className="dot" /> Development · Primary Practice</div>
            <h1 className="h-display lx-h u-mt-24" style={{ maxWidth: "13ch" }}>
              <span className="ln"><span>From land to</span></span>{" "}
              <span className="ln"><span>landmark.</span></span>
            </h1>
          </div>
          <div className="col-5">
            <p className="pull" style={{ maxWidth: "30ch", marginBottom: 24 }}>
              We take a project from a <em>parcel of land</em> to a finished landmark — and own the outcome.
            </p>
            <p className="lede">
              Noesis conceives, entitles, designs and builds its own real estate. Since 2009 we have
              developed distinctly unique product — beginning with single-family residences and growing
              into small-lot subdivisions, apartment buildings and other residential and commercial
              developments.
            </p>
            <p className="body u-mt-16" style={{ color: "var(--muted)", maxWidth: "52ch" }}>
              Our approach has always been to build a strong, resourceful and knowledgeable foundation
              before undertaking new ventures in each asset class.
            </p>
          </div>
        </div>
      </section>

      {/* OPENING PLATE — a delivered Noesis residence */}
      <section className="cine" style={{ height: "min(78vh, 760px)", minHeight: 420 }}>
        <img className="cine__img img--warm" data-parallax="0.12" src="assets/img/dev-facade.jpg"
          sizes="100vw"
          alt="A Noesis-developed residence, Los Angeles" onError={imgFallback} />
        {/* Nothing is set over this plate — it gets the edge wash, not the scrim
            built to keep a headline legible. */}
        <div className="cine__grad cine__grad--plate" />
      </section>

      {/* WHAT WE DEVELOP */}
      <section className="section section--lead">
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot" /> What We Develop</div>
          <div className="rows u-mt-24">
            {DEV_ASSETS.map(([n, t, d]) => (
              <div key={n} className="row reveal">
                <div className="row__idx">{n}</div>
                <div className="row__title">{t}</div>
                <p className="row__desc">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN PHILOSOPHY — the firm's own words */}
      <section className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap grid-12">
          <div className="col-4 reveal">
            <div className="eyebrow"><span className="dot" /> The Design Philosophy</div>
          </div>
          <div className="col-8 reveal">
            <p className="pull" style={{ maxWidth: "30ch", color: "var(--ink)" }}>
              Contemporary in nature, with minimalist elements that provide a <em>warm, earthy and organic</em> sensibility.
            </p>
            <p className="body-lg u-mt-24">
              We subscribe to the notion that less is more and refrain from over-designing — we let our
              design and finishes speak for themselves. With a multicultural heritage — both Igal Azran,
              principal, and Stephanie Harroch, architect, are from Morocco — a subtle Mediterranean and
              Spanish influence runs through our fresh, innovative and environmentally sustainable work.
            </p>
            <p className="body-lg u-mt-24">
              We continue to push the envelope and deliver finished projects that are bold, innovative,
              and rise above the rest in a competitive real estate landscape.
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
              <img src="assets/img/build-pour.jpg" alt="A Noesis concrete pour, Los Angeles" loading="lazy" onError={imgFallback} />
            </div>
            <div className="band__panel">
              <div className="eyebrow"><span className="dot" /> On Site · Self-Delivered</div>
              <p className="band__t">We build it ourselves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE CRAFT — architecture / interiors / contracting */}
      <section className="section">
        <div className="wrap">
          <div className="pair reveal" style={{ marginBottom: "clamp(36px,4.5vw,64px)" }}>
            <figure>
              <img src="assets/img/dev-detail.jpg" alt="Interior detailing — patterned tile and custom vanity" loading="lazy" onError={imgFallback} />
              <figcaption>Interior detailing — materials sourced worldwide</figcaption>
            </figure>
            <figure>
              <img src="assets/img/dev-detail.jpg" alt="A Noesis concrete pour, Los Angeles" loading="lazy" onError={imgFallback} />
              <figcaption>Self-delivered — on site, Los Angeles</figcaption>
            </figure>
          </div>
          <div className="eyebrow reveal"><span className="dot" /> The Craft</div>
          <div className="rows u-mt-24">
            {DEV_CRAFT.map(([t, d], i) => (
              <div key={t} className="row reveal">
                <div className="row__idx">0{i + 1}</div>
                <div className="row__title">{t}</div>
                <p className="row__desc">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY MODEL */}
      <section className="section section--ink section--snug">
        <div className="wrap">
          <div className="grid-12 u-end reveal">
            <div className="col-7">
              <div className="eyebrow"><span className="dot" /> The Delivery Model</div>
              <h2 className="h-1 u-mt-16 caps" style={{ color: "var(--ink)" }}>Five gates, one accountable team.</h2>
            </div>
            <div className="col-5">
              <p className="body-lg">
                The same disciplined path we run on our own developments — and the reason a project
                arrives on programme, on budget and at the standard we set for ourselves.
              </p>
            </div>
          </div>
          <div className="flow u-mt-64">
            {DEV_PROCESS.map(([n, t, d]) => (
              <div key={n} className="flow__step">
                <div className="flow__num">{n}</div>
                <div className="flow__name">{t}</div>
                <p className="flow__desc">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILDER'S PROOF */}
      <section className="section">
        <div className="wrap grid-12" style={{ alignItems: "start" }}>
          <div className="col-5 reveal">
            <div className="eyebrow"><span className="dot" /> A Builder's Record</div>
            <h2 className="h-1 u-mt-16 caps" style={{ maxWidth: "12ch" }}>Delivered, not theorised.</h2>
          </div>
          <div className="col-7 reveal">
            <p className="body-lg">
              Our principal's construction record predates the firm: a 24-unit luxury condominium
              delivered 22 days ahead of schedule and 12% under budget, and a $75 million construction
              budget managed for the L.A. Fashion Center — coordinating trades, architects and engineers
              through to completion.
            </p>
            <div className="qgrid qgrid--3">
              {DEV_PROOF.map(([v, l]) => (
                <div key={l}>
                  <div className="principal__num">{v}</div>
                  <div className="principal__lbl">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--ink">
        <div className="wrap grid-12 u-end reveal">
          <div className="col-8"><h2 className="h-1 caps" style={{ color: "var(--ink)" }}>See what we have <em className="accent">delivered.</em></h2></div>
          <div className="col-4 u-tr u-flex u-gap-16" style={{ justifyContent: "flex-end", flexWrap: "wrap" }}>
            <button className="btn" onClick={() => go("properties")} data-magnetic>The Portfolio <span className="arr" /></button>
            <button className="btn btn--ghost" onClick={() => go("inquiries")} data-magnetic>Bring us a site</button>
          </div>
        </div>
      </section>
    </main>
  );
}

window.Development = Development;
