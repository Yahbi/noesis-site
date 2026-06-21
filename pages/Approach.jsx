// Approach — the deep "Our full capabilities" sub-view (reached from What We Do).
// Holds the richer Services content: 6 capabilities + 2 sectors. Stone & linen.

const CAPABILITIES = [
  ["01", "Owner's Representation", "We sit in the owner's seat as your single, accountable advocate — directing the entire project team, safeguarding your intent, and making sure every decision serves your interest."],
  ["02", "Development Management", "End-to-end management of ground-up and repositioning projects: feasibility, structuring, entitlement, delivery and disposition — one team from raw opportunity to realized asset."],
  ["03", "Project & Construction Management", "Schedule, budget, procurement, contractor selection and on-site quality control — run with the discipline of a builder who has self-delivered luxury projects."],
  ["04", "Feasibility & Entitlement", "Site and market analysis, highest-and-best-use studies, financial modeling, and the planning, zoning and permitting strategy that determines whether — and how — a project can be built."],
  ["05", "Design Management", "Assembling and aligning architects, interior designers and engineers around a single vision and budget — protecting design integrity while keeping value and constructability in view."],
  ["06", "Cost & Risk Management", "Independent budgeting, value engineering, contingency strategy and proactive risk control — so surprises are surfaced early and the owner stays in command of capital."],
];

const SECTORS = [
  { tag: "Luxury Residential", title: "Custom family estates, from $5M", img: "genesee_int_4",
    desc: "For principals building a primary residence or estate, we manage architects, interiors and craftsmen to an exacting standard — with the discretion ultra-prime work demands." },
  { tag: "Commercial & Multifamily", title: "Owner's rep for large-scale projects", img: "ying_int_6",
    desc: "For developers and institutions delivering major commercial and multifamily assets, we bring program discipline, cost certainty and a builder's judgment to every phase." },
];

function Approach({ go }) {
  return (
    <main className="page-enter">
      {/* HERO */}
      <section style={{ paddingTop: "clamp(120px, 12vh, 150px)", paddingBottom: "clamp(28px, 4vw, 48px)" }}>
        <div className="wrap grid-12" style={{ alignItems: "end" }}>
          <div className="col-7">
            <div className="eyebrow"><span className="dot" /> Services · For Owners &amp; Developers</div>
            <h1 className="h-display lx-h u-mt-24" style={{ maxWidth: "12ch" }}>
              <span className="ln"><span>We represent</span></span>
              <span className="ln"><span>the owner.</span></span>
            </h1>
          </div>
          <div className="col-5">
            <p className="lede">
              A major project is won or lost in the management of it. Noesis is the owner's representative
              and development manager who carries that responsibility — protecting your vision, your
              capital and your timeline from the first study to the final handover.
            </p>
            <p className="body u-mt-16" style={{ color: "var(--muted)", maxWidth: "52ch" }}>
              We are engaged by private owners, family offices and developers building landmark
              residential and commercial projects — people for whom the cost of getting it right is repaid
              many times over.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section" style={{ paddingTop: "clamp(28px,3vw,44px)" }}>
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot" /> The Platform</div>
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

      {/* SECTORS */}
      <section className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <div className="eyebrow reveal" style={{ marginBottom: 28 }}><span className="dot" /> Where We Work</div>
          <div className="sectors reveal">
            {SECTORS.map((s) => (
              <article key={s.tag} className="sector">
                <div className="sector__img"><img className={s.img === "genesee_int_4" ? "img--warm" : ""} src={wix(PHOTO[s.img], { w: 1500 })} alt={s.title} loading="lazy" /><div className="sector__grad" /></div>
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

      {/* CINEMATIC PLATE */}
      <section className="cine" style={{ height: "min(72vh, 680px)", minHeight: 420 }}>
        <img className="cine__img" data-parallax="0.1" src={wix(PHOTO.stanley_int_2, { w: 2400 })} alt="" />
        <div className="cine__grad" />
        <div className="cine__cap">
          <div className="wrap" style={{ paddingBottom: "clamp(36px,6vw,72px)" }}>
            <h2 className="h-1 caps" style={{ color: "var(--bone)", maxWidth: "20ch" }}>The single party at the table accountable for the whole.</h2>
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
