// About — the firm + its founder

function About({ setPage }) {
  return (
    <main className="page-enter">
      {/* HERO */}
      <section style={{ paddingTop: "clamp(48px,9vh,120px)", paddingBottom: "clamp(40px,6vw,80px)", borderTop: 0 }}>
        <div className="wrap">
          <div className="eyebrow"><span className="dot" /> About · Est. 2009 · Beverly Hills · International</div>
          <h1 className="h-display lx-h u-mt-24" style={{ maxWidth: "11ch" }}>
            <span className="ln"><span>Perception by</span></span>
            <span className="ln"><span><em className="accent" style={{ fontStyle: "italic" }}>intellect.</em></span></span>
          </h1>
        </div>
      </section>

      {/* CINEMATIC PLATE */}
      <section className="cine" style={{ height: "min(74vh,720px)", minHeight: 440 }}>
        <img className="cine__img" data-parallax="0.1" src={wix(PHOTO.genesee_int_4, { w: 2400 })} alt="" style={{ objectPosition: "center 45%" }} />
        <div className="cine__grad" />
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="wrap grid-12">
          <div className="col-4 reveal"><div className="eyebrow"><span className="dot" /> Who We Are</div></div>
          <div className="col-8 reveal delay-1">
            <p className="pull">
              <em>Noesis</em> &mdash; perception by intellect. We are an international development management
              and investment firm, founded in 2009 and based in Beverly Hills, that represents owners and
              capital partners on projects where the stakes, and the standards, are high.
            </p>
          </div>
        </div>
      </section>

      {/* STORY + INTERNATIONAL */}
      <section className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap grid-12">
          <div className="col-4 reveal">
            <div className="eyebrow"><span className="dot" /> The Firm</div>
            <h2 className="h-2 u-mt-16">From builder to <em className="accent">owner&rsquo;s advisor.</em></h2>
          </div>
          <div className="col-8 reveal delay-1">
            <p className="lede">
              We began as designers and developers of luxury real estate &mdash; conceiving, financing,
              building and selling residences and buildings across Southern California and abroad.
            </p>
            <p className="body-lg u-mt-24" style={{ maxWidth: "64ch" }}>
              That operating experience is now in service of our clients. As owner&rsquo;s representative and
              development manager, we bring a builder&rsquo;s judgment to the owner&rsquo;s side of the table &mdash;
              and, for aligned partners, we invest our own conviction and capital alongside theirs. From
              Beverly Hills to international markets, the mandate is the same: protect the vision, the
              capital and the timeline, and deliver.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="wrap">
          <div className="reveal">
            <div className="eyebrow"><span className="dot" /> What We Value</div>
            <h2 className="h-1 u-mt-16 caps">How we <em className="accent">work.</em></h2>
          </div>
          <div className="rows u-mt-40">
            {[
              ["Alignment", "We succeed when our clients and partners do. We take the owner's side, and we put our own capital and reputation behind our convictions."],
              ["Discretion", "We work quietly for private clients, principals and family offices. Confidentiality is built into the engagement."],
              ["Stewardship", "We treat every project and every dollar of capital as if it were our own — because, often, it is."],
              ["Craft", "An obsession with how things are made. The difference between built and realized lives in the details we refuse to compromise."],
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

      {/* EDITORIAL PAIR */}
      <section className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <div className="pair reveal">
            <figure>
              <img src={wix(PHOTO.ying_int_3, { w: 1400 })} alt="Ying Yang Lofts, Los Angeles" loading="lazy" />
              <figcaption>Ying Yang Lofts — Los Angeles</figcaption>
            </figure>
            <figure>
              <img src={wix(PHOTO.stanley_int_4, { w: 1200 })} alt="Stanley Lofts, West Hollywood" loading="lazy" />
              <figcaption>Stanley Lofts — West Hollywood</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section" style={{ background: "var(--bone-2)" }}>
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: 48 }}>
            <div className="eyebrow"><span className="dot" /> Founder</div>
            <h2 className="h-1 u-mt-16 caps">The principal behind <em className="accent">Noesis.</em></h2>
          </div>

          <div className="grid-12 reveal" style={{ gap: 48, alignItems: "start" }}>
            <div className="col-5">
              <div className="thumb" style={{ aspectRatio: "4/5", overflow: "hidden", background: "var(--bone-3)" }}>
                <img src={wix(PHOTO.igal, { w: 1100 })} alt="Igal N. Azran"
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) contrast(1.02)", transition: "filter .5s" }}
                  onMouseEnter={(e) => e.currentTarget.style.filter = "grayscale(0)"}
                  onMouseLeave={(e) => e.currentTarget.style.filter = "grayscale(1) contrast(1.02)"} />
              </div>
              <div className="serif u-mt-24" style={{ fontSize: 32, letterSpacing: "-.01em", lineHeight: 1.05 }}>Igal N. Azran</div>
              <div className="mono" style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--accent)", marginTop: 8 }}>Founder &amp; Principal</div>
              <div style={{ borderTop: "1px solid var(--rule)", marginTop: 22, paddingTop: 18 }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)" }}>Previously · CIM Group · CBRE · STMC</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", marginTop: 8 }}>MSc · Real Estate</div>
              </div>
            </div>
            <div className="col-7">
              <p className="lede">
                Igal N. Azran founded Noesis in 2009 and has led its design, development and investment
                work ever since. Born in Morocco and raised between France, Spain and Israel, he brings a
                genuinely international perspective &mdash; and a builder&rsquo;s discipline &mdash; to every
                engagement the firm takes on.
              </p>
              <p className="body-lg u-mt-24" style={{ maxWidth: "64ch" }}>
                Before Noesis, Igal was an associate at CIM Group, the Los Angeles real-estate
                private-equity and development firm, where he worked on institutional investment and
                development transactions. Earlier, as a project manager for CBRE in Morocco, he delivered a
                24-unit luxury condominium 22 days ahead of schedule and 12% under budget; in Los Angeles,
                he managed a $75 million construction budget for the L.A. Fashion Center, coordinating
                trades, architects and engineers through to completion.
              </p>
              <p className="body-lg u-mt-24" style={{ maxWidth: "64ch" }}>
                Today he leads the firm&rsquo;s owner&rsquo;s-representation and development-management practice
                and originates its investments &mdash; maintaining the relationships with domestic and
                international capital partners that sit behind every mandate. He holds a Master&rsquo;s degree
                in Real Estate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--ink">
        <div className="wrap grid-12 u-end">
          <div className="col-8"><h2 className="h-1 caps" style={{ color: "var(--ink)" }}>Let's build something <em className="accent">exceptional.</em></h2></div>
          <div className="col-4 u-tr"><button className="btn" onClick={() => setPage("contact")}>Contact Us <span className="arr" /></button></div>
        </div>
      </section>
    </main>
  );
}

window.About = About;
