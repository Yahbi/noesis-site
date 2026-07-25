// Approach — the deep "Our full capabilities" sub-view (reached from Owner's Rep).
// Copy sourced from the client's own service docs (ARCHIVES 03-DESIGN / 04-BUILD).

const CAPABILITIES = [
  ["01", "Project Management · Owner's Representation", "One point of contact from site preparation through building completion. We represent the owner and investor — suggesting the best use of land, analyzing financial decisions, and orchestrating everything from architecture to engineering, with all zoning, permitting, approvals and entitlements handled and transparent, open communication throughout."],
  ["02", "Architecture & Design", "Innovative designs where quality, craftsmanship and functionality reign supreme. From inception we scrutinize every detail: complete site analyses, a theme that drives the design, and the latest green, audio-visual and smart-home technologies — delivered as meticulously planned blueprints our contractors delight in making real."],
  ["03", "Interior Design", "Comprehensive interior design and planning with an emphasis on modern, thoughtful minimalism — livable and tranquil, yet open to bold statements. Elements curated from around the world — Moroccan doors, handmade glass tiles by Israeli artists — with every detail planned, from interior elevations and fireplace planning to custom cabinetry and ceiling lighting, brought to life through vision boards."],
  ["04", "General Contracting", "We bring blueprints to life through a reputable, trustworthy network of construction professionals — supervising every trade daily: foundation, framing, plumbing, electrical, HVAC, smart-home automation, A/V, custom cabinetry, roofing and waterproofing, plaster, drywall, millwork and insulation."],
  ["05", "Feasibility & Entitlement", "Site and market analysis, highest-and-best-use studies, financial modeling, and the planning, zoning and permitting strategy that determines whether — and how — a project can be built."],
  ["06", "Consulting", "As-needed advisory for design and construction projects — permit approvals, construction management, site visits and design questions. Consider us your advocate, with our experience and market knowledge put to work for you."],
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

      {/* DESIGN PHILOSOPHY — the firm's own words (Design landing doc) */}
      <section className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap grid-12">
          <div className="col-4 reveal">
            <div className="eyebrow"><span className="dot" /> The Design Philosophy</div>
          </div>
          <div className="col-8 reveal">
            <p className="pull" style={{ maxWidth: "30ch", color: "var(--ink)" }}>
              Contemporary in nature, with minimalist elements that provide a <em>warm, earthy and organic</em> sensibility.
            </p>
            <p className="body-lg u-mt-24" style={{ maxWidth: "64ch" }}>
              We subscribe to the notion that less is more and refrain from over-designing — we let our
              design and finishes speak for themselves. With a multicultural heritage — both Igal Azran,
              principal, and Stephanie Harroch, architect, are from Morocco — a subtle Mediterranean and
              Spanish influence runs through our fresh, environmentally sustainable work.
            </p>
          </div>
        </div>
      </section>

      {/* CINEMATIC PLATE — a Noesis pour, self-delivered */}
      <section className="cine" style={{ height: "min(72vh, 680px)", minHeight: 420 }}>
        <img className="cine__img img--warm" data-parallax="0.1" src="assets/img/build-pour.jpg" alt="A Noesis concrete pour, Los Angeles" />
        <div className="cine__grad" />
        <div className="cine__cap">
          <div className="wrap" style={{ paddingBottom: "clamp(36px,6vw,72px)" }}>
            <div className="eyebrow" style={{ color: "rgba(236,230,216,.62)" }}><span className="dot" /> On Site · Self-Delivered</div>
            <h2 className="h-1 caps u-mt-16" style={{ color: "var(--bone)", maxWidth: "20ch" }}>The single party at the table accountable for the whole.</h2>
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
