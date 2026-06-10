// Home — Ivory Gallery. Couture type on warm paper, punctuated by cinematic full-bleed.

// Known-good real photography (raw wix ids resolve through wix()).
const SHOT = {
  casaMani:  "5c383b_a9f6aa50d3a44559aee6289afe36ebcf~mv2_d_6720_4480_s_4_2.jpg", // twilight exterior
  oneOak:    "5c383b_38f5ef1da26e4204b8e465e79f378f2e~mv2.jpg",                   // city-view interior
  houseG:    "5c383b_a01053afaaa447d08fc46a06820b54d3~mv2_d_5760_3840_s_4_2.jpg",
  aura:      "5c383b_23c2d9ef2cfb46768b1a436bc5c8dc7a~mv2_d_4256_2832_s_4_2.jpg",
  cThru:     "5c383b_b3d670a8b83a486498fae278402120af~mv2.jpg",
};

function Home({ setPage }) {
  return (
    <main className="page-enter">

      {/* ── HERO — type as the statement ───────────────────────────── */}
      <section style={{ minHeight: "94vh", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingTop: "clamp(40px,7vh,80px)", paddingBottom: "clamp(36px,6vh,64px)", borderTop: 0 }}>
        <div className="wrap u-flex u-between" style={{ width: "100%" }}>
          <div className="eyebrow"><span className="dot" /> Noesis — Est. 2009</div>
          <div className="eyebrow u-hide-720">Beverly Hills · International</div>
        </div>

        <div className="wrap" style={{ width: "100%" }}>
          <h1 className="h-display lx-h" style={{ maxWidth: "16ch" }}>
            <span className="ln"><span>We build</span></span>
            <span className="ln"><span>what <em className="accent" style={{ fontStyle: "italic" }}>endures.</em></span></span>
          </h1>
          <div className="grid-12 u-mt-40" style={{ alignItems: "end" }}>
            <div className="col-6">
              <p className="lede" data-hero-fade style={{ maxWidth: "46ch" }}>
                An international development-management and investment firm — entrusted with landmark
                residential and commercial projects, from entitlement to delivery.
              </p>
            </div>
            <div className="col-6 u-flex u-gap-16" data-hero-fade style={{ justifyContent: "flex-end", flexWrap: "wrap" }}>
              <button className="btn" onClick={() => setPage("services")} data-magnetic>Our Practice <span className="arr" /></button>
              <button className="btn btn--ghost" onClick={() => setPage("investment")} data-magnetic>Investment</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CINEMATIC PLATE ────────────────────────────────────────── */}
      <section className="cine" style={{ height: "min(96vh, 940px)", minHeight: 560 }}>
        <img className="cine__img" data-parallax="0.12" src={wix(SHOT.casaMani, { w: 2600 })} alt="A Noesis-delivered residence" />
        <div className="cine__grad" />
        <div className="cine__cap">
          <div className="wrap" style={{ paddingBottom: "clamp(36px,6vw,72px)" }}>
            <div className="eyebrow" style={{ color: "rgba(244,241,234,.62)" }}><span className="dot" /> Designed, developed &amp; delivered by Noesis</div>
            <h2 className="h-1 u-mt-16" style={{ color: "var(--bone)", maxWidth: "18ch" }}>
              We have stood where our clients stand — <em className="italic" style={{ color: "var(--bone)" }}>and delivered.</em>
            </h2>
          </div>
        </div>
      </section>

      {/* ── STATEMENT ──────────────────────────────────────────────── */}
      <section className="section">
        <div className="wrap grid-12">
          <div className="col-4 reveal">
            <div className="eyebrow"><span className="dot" /> The Firm</div>
          </div>
          <div className="col-8 reveal">
            <p className="h-2" style={{ textWrap: "balance" }}>
              Building anything significant means orchestrating dozens of disciplines, years of risk and
              millions in capital — usually for someone doing it for the first time.
              <span style={{ color: "var(--accent)" }}> Noesis exists to carry that weight.</span>
            </p>
            <p className="body-lg u-mt-40" style={{ maxWidth: "62ch" }}>
              We act on behalf of the owner — assembling and directing the entire project team, protecting
              the vision, the budget and the timeline at every stage. Fifteen years of designing, developing
              and delivering luxury real estate sit behind every engagement: the difference between a project
              that is merely built, and one that is truly realized.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRACTICE — two mandates ────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: "clamp(40px,5vw,72px)" }}>
            <span className="idx">01 — 02</span>
            <h2 className="h-1 u-mt-16">Two mandates.</h2>
          </div>
          <div className="grid-12 reveal" style={{ rowGap: 56 }}>
            <div className="col-6" style={{ paddingRight: "clamp(0px,3vw,56px)" }}>
              <div className="rule-x" />
              <div className="eyebrow u-mt-24" style={{ color: "var(--accent)" }}>For Owners &amp; Developers</div>
              <h3 className="h-2 u-mt-16">Owner's representation &amp; development management.</h3>
              <p className="body-lg u-mt-24" style={{ maxWidth: "44ch" }}>
                Your single, accountable advocate — managing the entire delivery process so you carry one
                relationship instead of twenty, from feasibility and entitlement through construction and handover.
              </p>
              <button className="btn btn--ghost u-mt-40" onClick={() => setPage("services")} data-magnetic>Explore the Practice <span className="arr" /></button>
            </div>
            <div className="col-6" style={{ paddingRight: "clamp(0px,3vw,56px)" }}>
              <div className="rule-x" />
              <div className="eyebrow u-mt-24" style={{ color: "var(--accent)" }}>For Investors</div>
              <h3 className="h-2 u-mt-16">Investment &amp; capital partnership.</h3>
              <p className="body-lg u-mt-24" style={{ maxWidth: "44ch" }}>
                Disciplined, design-led real estate investment — sourced, structured and stewarded for an
                aligned network of private capital, with the operator invested alongside you.
              </p>
              <button className="btn btn--ghost u-mt-40" onClick={() => setPage("investment")} data-magnetic>Explore Investment <span className="arr" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES — quiet numbered list ─────────────────────── */}
      <section className="section">
        <div className="wrap grid-12">
          <div className="col-4 reveal">
            <div className="eyebrow"><span className="dot" /> Capabilities</div>
            <h2 className="h-1 u-mt-16" style={{ textWrap: "balance" }}>One firm,<br />every discipline.</h2>
          </div>
          <div className="col-8 reveal">
            <div className="rows" style={{ borderTop: "1px solid var(--rule)" }}>
              {[
                ["Owner's Representation", "The owner's seat — the single, accountable point of contact directing the entire project."],
                ["Development Management", "Feasibility, entitlement, structuring and delivery of ground-up and repositioning projects."],
                ["Project & Construction", "Schedule, budget, procurement and quality, run with a builder's discipline."],
                ["Investment & Capital", "Sourcing, structuring and asset management, with capital aligned alongside the owner."],
              ].map(([t, d], i) => (
                <div key={t} className="row">
                  <div className="row__idx">0{i + 1}</div>
                  <div className="row__title">{t}</div>
                  <p className="row__desc">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF — delivery, measured ─────────────────────────────── */}
      <section className="section">
        <div className="wrap grid-12">
          <div className="col-4 reveal">
            <div className="eyebrow"><span className="dot" /> The Record</div>
            <h2 className="h-1 u-mt-16">Delivery,<br />measured.</h2>
          </div>
          <div className="col-8 reveal">
            <p className="lede" style={{ maxWidth: "50ch" }}>
              Before founding Noesis, our principal directed institutional development and
              construction at scale — for private-equity and global property firms. The discipline
              is the same on every mandate we accept.
            </p>
            <div className="statline statline--3" style={{ marginTop: "clamp(40px,5vw,72px)" }}>
              <div>
                <div className="num">$75M</div>
                <div className="statline__l">Construction budget directed</div>
                <div className="sub">A single Los Angeles development program, managed end to end.</div>
              </div>
              <div>
                <div className="num">12%</div>
                <div className="statline__l">Delivered under budget</div>
                <div className="sub">On a 24-unit luxury condominium delivered internationally.</div>
              </div>
              <div>
                <div className="num">22</div>
                <div className="statline__l">Days ahead of schedule</div>
                <div className="sub">The same project — handed over early, not explained late.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CINEMATIC PLATE 2 — process ────────────────────────────── */}
      <section className="cine" style={{ height: "min(80vh, 760px)", minHeight: 480 }}>
        <img className="cine__img" data-parallax="0.1" src={wix(SHOT.oneOak, { w: 2400 })} alt="" />
        <div className="cine__grad" />
        <div className="cine__cap">
          <div className="wrap" style={{ paddingBottom: "clamp(36px,6vw,72px)" }}>
            <div className="eyebrow" style={{ color: "rgba(244,241,234,.62)" }}><span className="dot" /> The Process</div>
            <h2 className="h-1 u-mt-16" style={{ color: "var(--bone)", maxWidth: "16ch" }}>
              From entitlement <em className="italic" style={{ color: "var(--bone)" }}>to delivery.</em>
            </h2>
            <div className="u-flex u-gap-24 u-mt-40" style={{ flexWrap: "wrap", color: "var(--bone-soft)", fontSize: 13, letterSpacing: ".02em" }}>
              {["Strategy", "Entitlement", "Design", "Construction", "Realization"].map((s, i) => (
                <span key={s} style={{ display: "inline-flex", gap: 10 }}>
                  <span style={{ color: "var(--accent)", fontFamily: "var(--sans)", fontWeight: 500 }}>0{i + 1}</span> {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ──────────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <div className="grid-12 u-end reveal" style={{ marginBottom: "clamp(36px,4vw,56px)" }}>
            <div className="col-8">
              <div className="eyebrow"><span className="dot" /> Selected Work</div>
              <h2 className="h-1 u-mt-16">A record owners trust.</h2>
            </div>
            <div className="col-4 u-tr">
              <button className="btn btn--ghost" onClick={() => setPage("projects")} data-magnetic>All Properties <span className="arr" /></button>
            </div>
          </div>
          <div className="grid-12 reveal" style={{ gap: 24 }}>
            {[[SHOT.casaMani, "Casa Mani", "Beverly Hills"], [SHOT.aura, "Aura House", "Tel Aviv"], [SHOT.cThru, "C Thru", "Los Angeles"]].map(([img, name, loc]) => (
              <article key={name} className="col-4 pcard" onClick={() => setPage("projects")}>
                <div className="pcard__media" style={{ aspectRatio: "4/5" }}>
                  <img className="pcard__img" src={wix(img, { w: 1100 })} alt={name} loading="lazy" />
                </div>
                <div className="pcard__cap">
                  <div><div className="pcard__name">{name}</div><div className="pcard__loc">{loc}</div></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: "clamp(36px,4vw,56px)" }}>
            <div className="eyebrow"><span className="dot" /> Track Record</div>
          </div>
          <div className="statline reveal">
            {[["2009", "Founded"], ["17", "Projects delivered"], ["2", "Countries"], ["$5M+", "Project minimum"]].map(([n, l]) => (
              <div key={l}><div className="num">{n}</div><div className="statline__l">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING ────────────────────────────────────────────────── */}
      <section className="section section--ink">
        <div className="wrap reveal" style={{ textAlign: "center", maxWidth: 1000, marginInline: "auto" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}><span className="dot" /> Let's begin</div>
          <h2 className="h-display u-mt-24" style={{ color: "var(--bone)", textWrap: "balance" }}>
            A project to deliver, or capital to deploy?
          </h2>
          <button className="btn btn--ghost u-mt-40" onClick={() => setPage("contact")} data-magnetic style={{ marginInline: "auto" }}>
            Start a Conversation <span className="arr" />
          </button>
        </div>
      </section>
    </main>
  );
}

window.Home = Home;
