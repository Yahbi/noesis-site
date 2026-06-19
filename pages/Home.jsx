// Home — one continuous scroll. Stone & linen, Jost geometric, brand red.

const SHOT = {
  casaMani: "5c383b_a9f6aa50d3a44559aee6289afe36ebcf~mv2_d_6720_4480_s_4_2.jpg",
  oneOak:   "5c383b_38f5ef1da26e4204b8e465e79f378f2e~mv2.jpg",
  houseG:   "5c383b_a01053afaaa447d08fc46a06820b54d3~mv2_d_5760_3840_s_4_2.jpg",
  aura:     "5c383b_23c2d9ef2cfb46768b1a436bc5c8dc7a~mv2_d_4256_2832_s_4_2.jpg",
  cThru:    "5c383b_b3d670a8b83a486498fae278402120af~mv2.jpg",
  lolivier: "5c383b_fcb4f7079a5e443589c23a058a3a3b1b~mv2.jpg",
};

function Home({ go }) {
  return (
    <main className="page-enter">

      {/* ── HERO — the film, immediately ───────────────────────────── */}
      <section id="hero" className="cine cine--video" style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingTop: "clamp(92px,13vh,150px)", paddingBottom: "clamp(34px,6vh,60px)" }}>
        <img className="cine__img" src={wix(SHOT.casaMani, { w: 2600 })} alt="A Noesis-delivered residence" />
        <video className="cine__vid" autoPlay loop muted playsInline preload="auto"
          src="assets/noesis-film.mp4?v=2"
          ref={(el) => {
            if (!el || el.__keeper) return; el.__keeper = true; el.muted = true;
            const tryPlay = () => { if (!el.isConnected) { clearInterval(el.__iv); document.removeEventListener("visibilitychange", tryPlay); return; } if (el.paused && !document.hidden) { const p = el.play(); if (p && p.catch) p.catch(() => {}); } };
            el.__tries = 0;
            el.addEventListener("error", () => { const d = [2000, 8000, 20000, 45000]; if (el.__tries >= d.length) { el.style.display = "none"; return; } const w = d[el.__tries++]; setTimeout(() => { if (!el.isConnected) return; el.style.display = ""; el.src = "assets/noesis-film.mp4?r=" + Date.now(); el.load(); tryPlay(); }, w); });
            el.addEventListener("playing", () => { el.style.display = ""; el.__tries = 0; });
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
              <button className="btn" onClick={() => go("what-we-do")} data-magnetic>What We Do</button>
              <button className="btn btn--ghost" onClick={() => go("investment")} data-magnetic style={{ color: "var(--bone)", borderColor: "rgba(236,230,216,.7)" }}>Investment</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT — who we are ─────────────────────────────────────── */}
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
            <p className="body-lg u-mt-40" style={{ maxWidth: "62ch" }}>
              We began as designers and builders of luxury real estate, conceiving and delivering
              residences and buildings across Southern California and abroad. That operating experience
              now serves our clients. We bring a builder's judgment to the owner's side of the table, and
              we invest our own conviction and capital alongside our partners. Fifteen years of delivered
              work stand behind every engagement.
            </p>
            <button className="link-u u-mt-40" onClick={() => go("projects")} style={{ background: "transparent", border: 0, borderBottom: "1px solid var(--accent)", color: "var(--accent)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", padding: "0 0 4px" }}>See the work</button>
          </div>
        </div>
      </section>

      {/* ── PROJECTS — the work ────────────────────────────────────── */}
      <section id="projects" className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <div className="grid-12 u-end reveal" style={{ marginBottom: "clamp(36px,4vw,56px)" }}>
            <div className="col-8">
              <div className="eyebrow"><span className="dot" /> Projects · Properties</div>
              <h2 className="h-1 u-mt-16 caps">A record owners trust.</h2>
            </div>
            <div className="col-4 u-tr">
              <button className="btn btn--ghost" onClick={() => go("properties")} data-magnetic>View the full portfolio <span className="arr" /></button>
            </div>
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
              <article key={name} className="pcard" onClick={() => go("properties")}>
                <div className="pcard__media"><img className="pcard__img" src={wix(img, { w: 1300 })} alt={name} loading="lazy" /></div>
                <div className="pcard__cap"><div><div className="pcard__name">{name}</div><div className="pcard__loc">{loc}</div></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO — the statement ─────────────────────────────── */}
      <section id="what-we-do" className="section wwd">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: "clamp(40px,5vw,72px)" }}>
            <div className="eyebrow"><span className="dot" /> What We Do</div>
            <p className="wwd__lead u-mt-24" style={{ maxWidth: "20ch" }}>
              We take a project from a <em>parcel of land</em> to a finished landmark — and stand
              accountable for every step between.
            </p>
          </div>
          <div className="wwd-grid reveal">
            {[
              ["01", "Owner's Representation", "We sit in your seat — one accountable advocate directing the entire project team and every decision."],
              ["02", "Development Management", "We carry the project end to end: feasibility, entitlement, design, construction and delivery."],
              ["03", "Investment", "We deploy capital alongside our partners, in disciplined, design-led real estate we know intimately."],
            ].map(([n, t, d]) => (
              <div key={n} className="wwd-cap">
                <div className="wwd-cap__n">{n}</div>
                <div className="wwd-cap__t">{t}</div>
                <p className="wwd-cap__d">{d}</p>
              </div>
            ))}
          </div>
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
              private capital — with the operator invested alongside.
            </p>
            <div className="rows u-mt-40" style={{ borderTop: "1px solid var(--rule)" }}>
              {[
                ["Opportunistic", "Acquisition and ground-up development of residences and small-lot subdivisions."],
                ["Value-Add", "Apartment and commercial assets, repositioned and improved through the hold."],
                ["Stabilized", "Income-producing assets held long-term for durability and preservation."],
              ].map(([t, d], i) => (
                <div key={t} className="row">
                  <div className="row__idx">0{i + 1}</div>
                  <div className="row__title">{t}</div>
                  <p className="row__desc">{d}</p>
                </div>
              ))}
            </div>
            <p className="body u-mt-24" style={{ color: "var(--muted)" }}>
              Opportunities are shared privately, with qualified partners. We welcome a confidential introduction.
            </p>
          </div>
        </div>
      </section>

      {/* ── MANAGEMENT (services) ──────────────────────────────────── */}
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
            {[
              ["01", "Strategy & Feasibility", "Site and market analysis, highest-and-best-use, financial modeling and risk assessment."],
              ["02", "Entitlement & Approvals", "Navigating planning, zoning, permitting and the stakeholders who decide a project's fate."],
              ["03", "Design & Preconstruction", "Assembling and directing the design team; budgeting, value engineering and procurement."],
              ["04", "Construction Delivery", "Managing contractors, schedule, cost and quality to completion, at the owner's standard."],
              ["05", "Handover & Realization", "Closeout and handover, then leasing, sale or stabilization to realize the asset's full value."],
            ].map(([n, t, d]) => (
              <div key={n} className="flow__step">
                <div className="flow__num">{n}</div>
                <div className="flow__name">{t}</div>
                <p className="flow__desc">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INQUIRIES ──────────────────────────────────────────────── */}
      <section id="inquiries" className="section">
        <div className="wrap grid-12" style={{ alignItems: "end" }}>
          <div className="col-7 reveal">
            <div className="eyebrow"><span className="dot" /> Inquiries</div>
            <h2 className="h-display caps u-mt-16" style={{ maxWidth: "12ch" }}>Let's begin.</h2>
            <p className="lede u-mt-24" style={{ maxWidth: "44ch" }}>
              Whether you have a project to deliver or capital to deploy, every enquiry is reviewed
              personally by our principal. Confidential from first contact.
            </p>
          </div>
          <div className="col-5 reveal">
            <InquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function InquiryForm() {
  const [sent, setSent] = React.useState(false);
  if (sent) return (
    <div style={{ border: "1px solid var(--rule)", padding: "clamp(28px,4vw,44px)", background: "var(--paper)" }}>
      <div className="eyebrow"><span className="dot" /> Received</div>
      <h3 className="h-2 u-mt-16">Thank you.</h3>
      <p className="body u-mt-16">We'll respond within one business day.</p>
    </div>
  );
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ border: "1px solid var(--rule)", padding: "clamp(28px,4vw,44px)", background: "var(--paper)" }}>
      <div style={{ display: "grid", gap: 24 }}>
        <div className="field"><label>Name</label><input type="text" placeholder="Your name" required /></div>
        <div className="field"><label>Email</label><input type="email" placeholder="you@email.com" required /></div>
        <div className="field">
          <label>I'm reaching out as</label>
          <select defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Owner / Principal</option>
            <option>Developer</option>
            <option>Investor</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field"><label>Message</label><textarea rows="4" placeholder="Tell us about your project or interest." required></textarea></div>
        <button type="submit" className="btn" style={{ justifyContent: "center" }}>Send Enquiry</button>
      </div>
    </form>
  );
}

window.Home = Home;
