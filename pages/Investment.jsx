// Investment — primary pillar page. Strategy table verbatim from the client's
// "Noesis - Investment Text.docx"; network language from "05 - MANAGEMENT/INVEST.docx".
// Regulatory-safe: philosophy and approach only, no returns, no live offering implied.

const INV_STRATEGIES = [
  ["01", "Opportunistic", "Short-Term · 2–3 Years", "Acquisition and new development of residential single-family and small-lot subdivisions, created for a for-sale exit.",
    ["Residential SFD & small-lot subdivisions", "Acquisition & new development", "Average hold 2–3 years", "Eventual for-sale assets"]],
  ["02", "Value-Add", "Mid-Term · 7–10 Years", "Commercial apartment buildings and office, improved through leasing, capital improvements and partial redevelopment.",
    ["Apartment buildings & office", "Leasing, capital improvements, partial redevelopment", "Average hold 7–10 years", "Eventual for-sale assets"]],
  ["03", "Hybrid Stabilized", "Long-Term", "Apartment buildings, small-lot subdivisions and office — acquired, developed and stabilized for a long-term hold.",
    ["Apartment buildings, SLS & office", "Acquisition, development & stabilization", "Long-term hold", "Income & durability focused"]],
];

const INV_PRINCIPLES = [
  ["01", "Alignment first", "The operator co-invests. We earn when our partners earn — risk is shared, not transferred."],
  ["02", "Design-led value", "Returns are created by building the right thing well, in the right place, at the right basis."],
  ["03", "Disciplined basis", "We underwrite conservatively and walk away often. The price of entry sets the margin of safety."],
  ["04", "Hands-on stewardship", "We manage what we own — through the full cycle, in person, with a builder's rigor."],
];

// Three strategies shown one at a time. Stacked, they were three long rows a
// reader scrolled past; tabbed, they are directly comparable — which is the point
// of publishing hold periods and product types side by side.
function StrategyTabs() {
  const [i, setI] = React.useState(0);
  const tabsRef = React.useRef(null);
  const indRef = React.useRef(null);
  React.useEffect(() => {
    const place = () => {
      const wrap = tabsRef.current, ind = indRef.current;
      if (!wrap || !ind) return;
      const btn = wrap.querySelector(`button[data-i="${i}"]`);
      if (!btn || !btn.offsetWidth) return;
      ind.style.opacity = "1";
      ind.style.width = btn.offsetWidth + "px";
      ind.style.transform = `translateX(${btn.offsetLeft}px)`;
      ind.style.top = (btn.offsetTop + btn.offsetHeight - 1) + "px";
    };
    place();
    let ro = null;
    const wrap = tabsRef.current;
    if (typeof ResizeObserver !== "undefined" && wrap) { ro = new ResizeObserver(place); ro.observe(wrap); }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(place).catch(() => {});
    const t = setTimeout(place, 60);
    window.addEventListener("resize", place);
    return () => { clearTimeout(t); if (ro) ro.disconnect(); window.removeEventListener("resize", place); };
  }, [i]);

  const [, name, hold, desc, points] = INV_STRATEGIES[i];
  return (
    <div className="u-mt-24">
      <div className="ptabs" ref={tabsRef} role="tablist" aria-label="Investment strategies">
        <span className="ptabs__ind" ref={indRef} aria-hidden="true" />
        {INV_STRATEGIES.map(([n, t], k) => (
          <button key={n} data-i={k} role="tab" aria-selected={i === k}
            className={`ptab ${i === k ? "is-active" : ""}`} onClick={() => setI(k)}>
            {t}<span className="ptab__n">{n}</span>
          </button>
        ))}
      </div>

      <div className="strat" role="tabpanel" key={i}>
        <div>
          <div className="label label--accent">{hold}</div>
          <p className="body-lg u-mt-16" style={{ maxWidth: "46ch" }}>{desc}</p>
        </div>
        <dl className="strat__facts">
          {[["Product types", points[0]], ["Activity", points[1]], ["Hold", points[2]], ["Exit", points[3]]].map(([k, v]) => (
            <div key={k}>
              <dt className="label">{k}</dt>
              <dd className="strat__v">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function Investment({ go, setIntent }) {
  const inquire = () => { if (setIntent) setIntent("investor"); go("inquiries"); };
  return (
    <main className="page-enter">
      {/* HERO */}
      <section style={{ paddingTop: "clamp(120px, 12vh, 150px)", paddingBottom: "clamp(28px, 4vw, 48px)" }}>
        <div className="wrap grid-12 hero-grid">
          <div className="col-7">
            <div className="eyebrow"><span className="dot" /> Investment · Primary Practice</div>
            <h1 className="h-display lx-h u-mt-24" style={{ maxWidth: "12ch" }}>
              <span className="ln"><span>Capital,</span></span>{" "}
              <span className="ln"><span>aligned.</span></span>
            </h1>
          </div>
          <div className="col-5">
            <p className="lede">
              We originate, structure and steward real estate investments for an aligned network of
              private capital — family offices, principals and institutions — with the operator invested
              alongside, creating an enhanced lifestyle in communities throughout California while
              generating value for our investors since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* THESIS */}
      {/* CITY BAND — CIM's pattern: the photograph carries scale, the statement
          sits in its own panel beside it rather than printed across the image. */}
      <section className="section" style={{ paddingTop: "clamp(28px,3.5vw,48px)", borderTop: 0 }}>
        <div className="wrap">
          <div className="band reveal">
            <div className="band__media">
              <img src="assets/img/city-dawn-1440.jpg"
                srcSet="assets/img/city-dawn-700.jpg 700w, assets/img/city-dawn-1024.jpg 1024w, assets/img/city-dawn-1440.jpg 1440w, assets/img/city-dawn-2880.jpg 2880w"
                sizes="(max-width: 900px) 100vw, min(1480px, 92vw)"
                alt="" aria-hidden="true" loading="lazy" onError={imgFallback} />
            </div>
            <div className="band__panel">
              <div className="eyebrow"><span className="dot" /> Where capital goes</div>
              <p className="band__t">Real assets, in real markets.</p>
              <p className="body u-mt-16">
                We acquire, develop and hold residential assets across California — and bring the
                same owner-operator discipline to every venture we underwrite.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--lead">
        <div className="wrap grid-12">
          <div className="col-4 reveal">
            <div className="eyebrow"><span className="dot" /> The Thesis</div>
          </div>
          <div className="col-8 reveal">
            <p className="pull" style={{ maxWidth: "26ch" }}>
              The best returns in real estate come from building the <em>right thing well</em>. We invest
              where our development edge creates the value.
            </p>
            <p className="body-lg u-mt-24">
              Back in 2009 our founder focused on single-family residences, striving to provide a
              distinctly unique product that would enhance the lives of those it touched while benefiting
              the communities around it. Today Noesis has grown that mission into various real asset
              types — small-lot subdivisions, apartment buildings, and other residential and commercial
              developments — always building a strong, resourceful and knowledgeable foundation before
              entering a new asset class.
            </p>
          </div>
        </div>
      </section>

      {/* CINEMATIC PLATE — the asset the thesis produces */}
      {/* THESIS PLATE — a two-column block, not type floating on a photograph.
          The statement earns a panel of its own; the image sits beside it. */}
      <section className="section" style={{ borderTop: 0, paddingTop: 0 }}>
        <div className="wrap">
          <div className="split reveal">
            <div className="split__media">
              <img src="assets/img/tex-glass-1024.jpg"
                srcSet="assets/img/tex-glass-700.jpg 700w, assets/img/tex-glass-1024.jpg 1024w"
                sizes="(max-width: 860px) 100vw, 46vw"
                alt="" aria-hidden="true" loading="lazy" onError={imgFallback} />
            </div>
            <div className="split__body">
              <div className="eyebrow"><span className="dot" /> The Thesis</div>
              <p className="pull u-mt-16" style={{ maxWidth: "22ch" }}>
                We invest where our <em>development edge</em> creates the value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIES — tabbed, so the three are compared rather than scrolled past */}
      <section className="section section--lead" style={{ borderTop: 0 }}>
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot" /> Investment Strategies</div>
          <StrategyTabs />
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section">
        <div className="wrap">
          <div className="grid-12 reveal" style={{ alignItems: "center", marginBottom: "clamp(40px,5vw,72px)" }}>
            <div className="col-7">
              <div className="thumb thumb--wide" style={{ overflow: "hidden" }}>
                <img src="assets/img/inv-multifamily.jpg" alt="A Noesis multifamily building, Los Angeles" loading="lazy"
                  className="img--warm" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={imgFallback} />
              </div>
            </div>
            <div className="col-5">
              <div className="eyebrow"><span className="dot" /> Value-Add in Practice</div>
              <p className="body-lg u-mt-16" style={{ maxWidth: "42ch" }}>
                Boutique multifamily, developed and held — the asset class behind the mid-term strategy,
                built to the same standard as our single-family work.
              </p>
            </div>
          </div>
          <div className="eyebrow reveal"><span className="dot" /> How We Invest</div>
          <div className="reveal qgrid">
            {INV_PRINCIPLES.map(([n, t, d]) => (
              <div key={n}>
                <div className="wwd-cap__n">{n}</div>
                <div className="wwd-cap__t">{t}</div>
                <p className="wwd-cap__d">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THE RECORD DE-RISKS THE THESIS */}
      <section className="section section--ink">
        <div className="wrap grid-12 u-end reveal">
          <div className="col-7">
            <div className="eyebrow"><span className="dot" /> Why the Record Matters</div>
            <h2 className="h-1 u-mt-16 caps" style={{ color: "var(--ink)", maxWidth: "18ch" }}>The operator is the edge.</h2>
          </div>
          <div className="col-5">
            <p className="body-lg">
              We do not underwrite from a spreadsheet alone. Twenty-three delivered projects — designed,
              built and sold by this team — inform every basis, every programme and every schedule we
              commit to. The development practice is what de-risks the investment thesis.
            </p>
            <button className="btn btn--ghost u-mt-24" onClick={() => go("properties")} data-magnetic>See the delivered record <span className="arr" /></button>
          </div>
        </div>
      </section>

      {/* THE OPERATOR — the ink band above says the operator is the edge; name him
          before the ask. Facts verbatim from Firm.jsx FIRM_FOUNDER. */}
      <section className="section">
        <div className="wrap">
          <div className="principal principal--duo reveal" style={{ borderTop: 0, marginTop: 0, paddingTop: 0 }}>
            <button className="principal__portrait" onClick={() => go("firm")} aria-label="Igal N. Azran — read about the firm and founder">
              <img src={wix(PHOTO.igal, { w: 800 })} alt="Igal N. Azran, Founder &amp; CEO" loading="lazy" onError={imgFallback} />
            </button>
            <div className="principal__body">
              <div className="eyebrow"><span className="dot" /> The Operator</div>
              <div className="principal__name">Igal N. Azran</div>
              <div className="principal__role">Founder &amp; CEO · Previously CIM Group · CBRE · STMC</div>
              <div className="label" style={{ marginTop: 8 }}>MSc · Real Estate</div>
              <p className="principal__bio">
                Before Noesis, Igal was an associate at CIM Group, the Los Angeles real-estate
                private-equity and development firm, working on institutional investment and
                development transactions. Today he originates and leads the firm's developments and
                investments, maintaining the relationships with domestic and international capital
                partners behind every venture.
              </p>
              <button className="link-u principal__link" onClick={() => go("firm")}>The firm &amp; founder</button>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS + REGULATORY */}
      <section className="section">
        <div className="wrap grid-12" style={{ alignItems: "start" }}>
          <div className="col-5 reveal">
            <div className="eyebrow"><span className="dot" /> Who We Partner With</div>
            <h2 className="h-1 u-mt-16 caps" style={{ maxWidth: "13ch" }}>A private network.</h2>
          </div>
          <div className="col-7 reveal">
            <p className="body-lg">
              Noesis has built relationships and strong ties with a network of high-net-worth individuals,
              both local and foreign, with access to private equity funds and exclusive opportunities. We
              are proud of our reputation and open to partnering with like-minded investors who share a
              desire to make a positive impact in our community — across single-family residential,
              multifamily residential and joint ventures.
            </p>
            <p className="body u-mt-24" style={{ color: "var(--muted)", maxWidth: "62ch" }}>
              When an opportunity meets our standard we bring it to that network privately. Qualified and
              accredited investors are welcome to request a confidential introduction — no obligation, and
              no live offering implied. Nothing on this page is an offer to sell or a solicitation of an
              offer to buy any security.
            </p>
            <button className="btn u-mt-40" onClick={inquire} data-magnetic>Request a confidential introduction <span className="arr" /></button>
          </div>
        </div>
      </section>
    </main>
  );
}

window.Investment = Investment;
