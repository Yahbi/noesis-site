// Investment — open strategy & investor network (no live deal listings, by design)

const STRATEGIES = [
  {
    n: "01", term: "Opportunistic", hold: "2–3 Years", img: "stanley_ext_2",
    points: ["Acquisition & ground-up development", "Residential & small-lot subdivisions", "Value created through entitlement & delivery", "Typically realized via for-sale exit"],
  },
  {
    n: "02", term: "Value-Add", hold: "7–10 Years", img: "ying_int_6",
    points: ["Apartment buildings & commercial assets", "Leasing, capital improvement, repositioning", "Cash flow during the hold", "Realized at stabilization or sale"],
  },
  {
    n: "03", term: "Stabilized", hold: "Long-Term", img: "genesee_wide",
    points: ["Income-producing, stabilized assets", "Long-term hold & wealth preservation", "Tax-efficient, cash-flow focused", "Designed for durability over cycles"],
  },
];

const PRINCIPLES = [
  ["Alignment first", "The operator co-invests. We earn when our partners earn — risk is shared, not transferred."],
  ["Design-led value", "Returns are created by building things well, in the right place, at the right basis — not by financial engineering."],
  ["Disciplined basis", "We underwrite conservatively and walk away often. The price of entry determines the margin of safety."],
  ["Hands-on stewardship", "We manage what we own — through the full cycle, in person, with the same rigor we bring to clients' projects."],
];

function Investment({ setPage }) {
  return (
    <main className="page-enter">
      {/* HERO */}
      <section style={{ paddingTop: "clamp(48px,9vh,120px)", paddingBottom: "clamp(40px,6vw,80px)", borderTop: 0 }}>
        <div className="wrap">
          <div className="eyebrow"><span className="dot" /> Investment · For Capital Partners</div>
          <h1 className="h-display lx-h u-mt-24" style={{ maxWidth: "12ch" }}>
            <span className="ln"><span>Capital,</span></span>
            <span className="ln"><span><em className="accent" style={{ fontStyle: "italic" }}>aligned.</em></span></span>
          </h1>
          <div className="grid-12 u-mt-40" style={{ alignItems: "start" }}>
            <div className="col-7">
              <p className="lede" data-hero-fade style={{ maxWidth: "50ch" }}>
                Noesis originates, structures and stewards real estate investments for an aligned network
                of private capital &mdash; family offices, principals and institutions who value a
                disciplined, design-led operator with skin in the game.
              </p>
            </div>
            <div className="col-5">
              <p className="body-lg" data-hero-fade>
                We do not publish live offerings. Opportunities are shared privately, with qualified
                partners, when the basis and the business plan merit it. What we publish here is how we
                think.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CINEMATIC PLATE */}
      <section className="cine" style={{ height: "min(72vh,700px)", minHeight: 420 }}>
        <img className="cine__img" data-parallax="0.1" src={wix(PHOTO.genesee_int_1, { w: 2400 })} alt="" />
        <div className="cine__grad" />
        <div className="cine__cap">
          <div className="wrap" style={{ paddingBottom: "clamp(32px,5vw,64px)" }}>
            <h2 className="h-2" style={{ color: "var(--bone)", maxWidth: "22ch" }}>
              The operator, invested <em className="italic" style={{ color: "var(--bone)" }}>alongside the capital.</em>
            </h2>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section">
        <div className="wrap grid-12">
          <div className="col-4 reveal">
            <div className="eyebrow"><span className="dot" /> Philosophy</div>
          </div>
          <div className="col-8 reveal delay-1">
            <p className="pull">
              The best risk-adjusted returns in real estate come from <em>building the right thing well</em>
              &mdash; not from leverage or optimism. We invest where our development edge creates the value.
            </p>
          </div>
        </div>
      </section>

      {/* STRATEGIES */}
      <section className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <div className="reveal">
            <div className="eyebrow"><span className="dot" /> Strategies</div>
            <h2 className="h-1 u-mt-16 caps">Three ways we <em className="accent">build value.</em></h2>
          </div>

          <div className="grid-12 u-mt-64 reveal" style={{ gap: 32 }}>
            {STRATEGIES.map((s) => (
              <div key={s.n} className="col-4" style={{ border: "1px solid var(--rule)", background: "var(--paper)", display: "flex", flexDirection: "column" }}>
                <div style={{ aspectRatio: "4/3", overflow: "hidden", background: "var(--ink)", position: "relative" }}>
                  <img src={wix(PHOTO[s.img], { w: 1000 })} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div className="thumb__label">{s.term}</div>
                </div>
                <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", gap: 18, flex: 1 }}>
                  <div className="u-flex u-between u-end">
                    <div className="mono" style={{ fontSize: 12, color: "var(--accent)", letterSpacing: ".14em" }}>{s.n}</div>
                    <div className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: ".1em", textTransform: "uppercase" }}>{s.hold}</div>
                  </div>
                  <div className="serif caps" style={{ fontSize: 34, lineHeight: 1, letterSpacing: "-.01em" }}>{s.term}</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                    {s.points.map((p, i) => (
                      <li key={i} className="body" style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                        <span style={{ width: 5, height: 5, background: "var(--accent)", borderRadius: 50, flex: "0 0 5px", transform: "translateY(-2px)" }} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section section--ink">
        <div className="wrap">
          <div className="grid-12 u-end reveal">
            <div className="col-8">
              <div className="eyebrow"><span className="dot" /> How We Invest</div>
              <h2 className="h-1 u-mt-16 caps" style={{ color: "var(--bone)" }}>Principles that <em className="accent">don&rsquo;t bend.</em></h2>
            </div>
          </div>
          <div className="rows u-mt-40">
            {PRINCIPLES.map(([t, d], i) => (
              <div key={t} className="row reveal">
                <div className="row__idx">0{i + 1}</div>
                <div className="row__title">{t}</div>
                <p className="row__desc">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUIET PHOTO BAND */}
      <section className="cine" style={{ height: "min(52vh, 520px)", minHeight: 340 }}>
        <img className="cine__img" data-parallax="0.1" src={wix(PHOTO.ying_int_2, { w: 2400 })} alt="" />
        <div className="cine__grad" />
      </section>

      {/* THE NETWORK */}
      <section className="section">
        <div className="wrap grid-12">
          <div className="col-4 reveal">
            <div className="eyebrow"><span className="dot" /> The Network</div>
            <h2 className="h-2 u-mt-16">An aligned circle of <em className="accent">private capital.</em></h2>
          </div>
          <div className="col-8 reveal delay-1">
            <p className="lede">
              Most of what we do is never advertised. Our investors are a relationship-led network &mdash;
              partners who have come to know how we underwrite, how we build, and how we treat capital.
            </p>
            <p className="body-lg u-mt-24" style={{ maxWidth: "64ch" }}>
              When an opportunity meets our standard, we bring it to that network privately. If you are a
              qualified or accredited investor and would like to be considered for future opportunities, we
              welcome a confidential introduction &mdash; no obligation, and no live offering implied.
            </p>
            <button onClick={() => setPage("contact")} className="btn u-mt-40">Request an Introduction <span className="arr" /></button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--ink">
        <div className="wrap u-tc" style={{ maxWidth: 880, marginInline: "auto" }}>
          <h2 className="h-1 caps" style={{ color: "var(--bone)" }}>
            Interested in how we put <em className="accent">capital to work?</em>
          </h2>
          <p className="lede u-mt-24" style={{ marginInline: "auto" }}>
            Start a confidential conversation with our investment team.
          </p>
          <button onClick={() => setPage("contact")} className="btn u-mt-40" style={{ marginInline: "auto" }}>
            Contact Us <span className="arr" />
          </button>
        </div>
      </section>
    </main>
  );
}

window.Investment = Investment;
