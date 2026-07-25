// Firm — origin, values and the founder. Split out of the old one-page scroll
// so the home page can stay a short gateway.

const FIRM_VALUES = [
  ["Alignment", "We succeed when our clients and partners do. We take the owner's side, and we put our own capital and reputation behind our convictions."],
  ["Discretion", "We work quietly for private clients, principals and family offices. Confidentiality is built into every engagement."],
  ["Stewardship", "We treat every project and every dollar of capital as if it were our own — because, often, it is."],
  ["Craft", "An obsession with how things are made. The difference between built and realized lives in the details we refuse to compromise."],
];

const FIRM_FOUNDER = {
  name: "Igal N. Azran",
  title: "Founder & Principal",
  prev: "Previously · CIM Group · CBRE · STMC",
  edu: "MSc · Real Estate",
  stats: [
    ["$75M", "Construction budget managed"],
    ["22 days", "Delivered ahead of schedule"],
    ["12%", "Delivered under budget"],
  ],
  bio: [
    "Igal N. Azran founded Noesis in 2009 and has led its development and investment work ever since. Born in Morocco and raised between France, Spain and Israel, he brings a genuinely international perspective — and a builder's discipline — to every venture.",
    "Before Noesis, Igal was an associate at CIM Group, the Los Angeles real-estate private-equity and development firm, working on institutional investment and development transactions. Earlier, as a project manager for CBRE in Morocco, he delivered a 24-unit luxury condominium 22 days ahead of schedule and 12% under budget; in Los Angeles, he managed a $75 million construction budget for the L.A. Fashion Center, coordinating trades, architects and engineers through to completion.",
    "Today he originates and leads the firm's developments and investments, maintaining the relationships with domestic and international capital partners behind every venture — and personally directs its owner's-representation mandates. He holds a Master's degree in Real Estate.",
  ],
};

function Firm({ go }) {
  return (
    <main className="page-enter">
      {/* HERO */}
      <section style={{ paddingTop: "clamp(120px, 12vh, 150px)", paddingBottom: "clamp(28px, 4vw, 48px)" }}>
        <div className="wrap grid-12" style={{ alignItems: "end" }}>
          <div className="col-7">
            <div className="eyebrow"><span className="dot" /> The Firm · Est. 2009</div>
            <h1 className="h-display lx-h u-mt-24" style={{ maxWidth: "12ch" }}>
              <span className="ln"><span>Perception</span></span>
              <span className="ln"><span>by intellect.</span></span>
            </h1>
          </div>
          <div className="col-5">
            <p className="lede">
              Noesis is the Greek word for understanding. We are a real-estate development and investment
              firm — founded in 2009, based in Beverly Hills, working internationally.
            </p>
          </div>
        </div>
      </section>

      {/* ORIGIN */}
      <section className="section" style={{ paddingTop: "clamp(28px,3vw,44px)" }}>
        <div className="wrap grid-12">
          <div className="col-4 reveal">
            <div className="eyebrow"><span className="dot" /> Our Story</div>
          </div>
          <div className="col-8 reveal">
            <p className="body-lg" style={{ maxWidth: "64ch" }}>
              Our founder began with single-family residences, striving to provide a distinctly unique
              product that would enhance the lives of those it touched while benefiting the communities
              around it. Today that mission spans small-lot subdivisions, apartment buildings and other
              residential and commercial developments — with our capital invested alongside our partners',
              and our delivery discipline offered to a select few owners as their representative.
            </p>
            <p className="body-lg u-mt-24" style={{ maxWidth: "64ch" }}>
              We are thankful for our history and look forward to the opportunities ahead in making a
              positive difference in the world around us.
            </p>
          </div>
        </div>

        <div className="wrap u-mt-64">
          <div className="eyebrow reveal"><span className="dot" /> How We Work</div>
          <div className="reveal qgrid">
            {FIRM_VALUES.map(([t, d], i) => (
              <div key={t}>
                <div className="wwd-cap__n">0{i + 1}</div>
                <div style={{ fontFamily: "var(--sans)", fontWeight: 300, fontSize: "clamp(18px,1.6vw,22px)", marginTop: 14, color: "var(--ink)" }}>{t}</div>
                <p style={{ color: "var(--ink-soft)", fontSize: 13.5, lineHeight: 1.6, marginTop: 10 }}>{d}</p>
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
              <img src={wix(PHOTO.genesee_int_1, { w: 1500 })} alt="My Genesee living room, Beverly Grove" loading="lazy" />
              <figcaption>My Genesee — Beverly Grove</figcaption>
            </figure>
            <figure>
              <img src={wix(PHOTO.genesee_int_2, { w: 1200 })} alt="My Genesee kitchen, Beverly Grove" loading="lazy" />
              <figcaption>Four residences · 2019</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow reveal" style={{ marginBottom: "clamp(24px,3vw,36px)" }}><span className="dot" /> Founder</div>
          <div className="grid-12 reveal" style={{ gap: 48, alignItems: "start" }}>
            <div className="col-5">
              <div className="thumb thumb--tall" style={{ overflow: "hidden" }}>
                <img src={wix(PHOTO.igal, { w: 1100 })} alt={FIRM_FOUNDER.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) contrast(1.02)", transition: "filter .5s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0)")}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(1) contrast(1.02)")} />
              </div>
              <div className="serif u-mt-24" style={{ fontSize: 30, letterSpacing: "-.01em", lineHeight: 1.05, color: "var(--ink)" }}>{FIRM_FOUNDER.name}</div>
              <div className="mono" style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--accent-deep)", marginTop: 8 }}>{FIRM_FOUNDER.title}</div>
              <div style={{ borderTop: "1px solid var(--rule)", marginTop: 22, paddingTop: 18 }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)" }}>{FIRM_FOUNDER.prev}</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", marginTop: 8 }}>{FIRM_FOUNDER.edu}</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, borderTop: "1px solid var(--rule)", marginTop: 22, paddingTop: 22 }}>
                {FIRM_FOUNDER.stats.map(([v, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "var(--sans)", fontWeight: 200, fontSize: "clamp(22px,2.4vw,30px)", color: "var(--accent)", lineHeight: 1 }}>{v}</div>
                    <div className="mono" style={{ fontSize: 10.5, letterSpacing: ".06em", color: "var(--muted)", marginTop: 8, lineHeight: 1.35 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-7">
              <p className="lede">{FIRM_FOUNDER.bio[0]}</p>
              {FIRM_FOUNDER.bio.slice(1).map((p, i) => (
                <p key={i} className="body-lg u-mt-24" style={{ maxWidth: "64ch" }}>{p}</p>
              ))}
            </div>
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

window.Firm = Firm;
