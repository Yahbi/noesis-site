// Home — a SHORT gateway (6 blocks). The depth now lives on its own pages:
// Development, Investment, Portfolio, Owner's Rep, Firm, Inquiries.
// Re-weighted per client directive: Development + Investment lead; Owner's Rep
// is the accessory line. Stone & linen, Jost geometric, brand bronze.

const SHOT = {
  casaMani: "5c383b_a9f6aa50d3a44559aee6289afe36ebcf~mv2_d_6720_4480_s_4_2.jpg",
  oneOak:   "5c383b_38f5ef1da26e4204b8e465e79f378f2e~mv2.jpg",
  houseG:   "5c383b_a01053afaaa447d08fc46a06820b54d3~mv2_d_5760_3840_s_4_2.jpg",
  aura:     "5c383b_23c2d9ef2cfb46768b1a436bc5c8dc7a~mv2_d_4256_2832_s_4_2.jpg",
  cThru:    "5c383b_b3d670a8b83a486498fae278402120af~mv2.jpg",
  lolivier: "5c383b_fcb4f7079a5e443589c23a058a3a3b1b~mv2.jpg",
  leBijou:  "5c383b_597ed5a457654c23a1f2afb1a72b8bb8~mv2.jpg",
};

// Selected work — the six tiles that make the gateway feel like a portfolio.
const HOME_WORK = [
  [SHOT.casaMani, "casa-mani", "Casa Mani", "Beverly Hills", "Designed & built · 2018"],
  [SHOT.oneOak, "one-oak", "One Oak", "Sunset Strip", "Designed & built · 2015"],
  [SHOT.aura, "aura-house", "Aura House", "Tel Aviv", "Developed · sold over asking"],
  [SHOT.cThru, "c-thru", "C Thru", "Beverly Grove", "Designed & built · 2016"],
  [SHOT.houseG, "house-g", "House G", "Melrose", "Designed & developed · 2016"],
  [SHOT.lolivier, "lolivier", "L'Olivier House", "Los Angeles", "Designed & built · 2015"],
];

// Full delivered record — 17 gallery projects + 6 record-only entries.
const HOME_STATS = [
  ["23", "Projects delivered"],
  ["16", "Private residences"],
  ["5", "Apartment buildings"],
  ["2", "Small-lot subdivisions"],
  ["2009", "Founded"],
];

const HOME_PILLARS = [
  ["01", "Development", "development",
    "We acquire and develop ground-up — luxury residences, small-lot subdivisions and apartment buildings — conceived, entitled, designed and built by our own team."],
  ["02", "Investment", "investment",
    "We invest our own capital alongside our partners', across opportunistic, value-add and stabilized strategies, where our development edge creates the value."],
];

const HOME_PROOF = [
  ["$75M", "Construction budget managed"],
  ["22 days", "Delivered ahead of schedule"],
  ["12%", "Delivered under budget"],
];

function Home({ go, setIntent }) {
  const goInvestor = (id) => { if (setIntent) setIntent("investor"); go(id); };
  const goOwner = (id) => { if (setIntent) setIntent("owner"); go(id); };
  return (
    <main className="page-enter">

      {/* 1 ── HERO ─────────────────────────────────────────────────── */}
      <section id="hero" className="cine cine--video" style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingTop: "clamp(92px,13vh,150px)", paddingBottom: "clamp(34px,6vh,60px)" }}>
        <img className="cine__img img--warm" alt="A Noesis-developed residence" fetchpriority="high" sizes="100vw"
          src={wix(SHOT.casaMani, { w: 2000 })}
          srcSet={`${wix(SHOT.casaMani, { w: 1200 })} 1200w, ${wix(SHOT.casaMani, { w: 2000 })} 2000w, ${wix(SHOT.casaMani, { w: 2600 })} 2600w, ${wix(SHOT.casaMani, { w: 3400 })} 3400w`} onError={imgFallback} />
        {/* The film carries no src at first paint. The still above it is the hero's
            LCP element and is already served at up to 3400w; letting a 4K loop race
            it would only delay the thing the visitor actually sees. The source is
            attached once the page has loaded, and the still stays underneath. */}
        <video className="cine__vid" autoPlay loop muted playsInline preload="none"
          ref={(el) => {
            if (!el || el.__keeper) return; el.__keeper = true; el.muted = true; el.__inView = true;
            const attach = () => { const u = film("noesis-film", { ambient: true }); if (u && el.isConnected && !el.src) { el.src = u; el.load(); tryPlay(); } };
            const tryPlay = () => {
              if (!el.isConnected) { clearInterval(el.__iv); document.removeEventListener("visibilitychange", tryPlay); if (el.__io) el.__io.disconnect(); return; }
              if (!document.hidden && el.__inView) { if (el.paused) { const p = el.play(); if (p && p.catch) p.catch(() => {}); } }
              else if (!el.paused) { el.pause(); }   // off-screen / hidden → save decode + battery
            };
            el.__tries = 0;
            el.addEventListener("error", () => { const d = [2000, 8000, 20000, 45000]; if (el.__tries >= d.length) { el.style.display = "none"; return; } const w = d[el.__tries++]; setTimeout(() => { if (!el.isConnected) return; const u = film("noesis-film", { ambient: true }); if (!u) return; el.style.display = ""; el.src = u + "&r=" + Date.now(); el.load(); tryPlay(); }, w); });
            el.addEventListener("playing", () => { el.style.display = ""; el.__tries = 0; });
            if ("IntersectionObserver" in window) { el.__io = new IntersectionObserver((ents) => { el.__inView = ents[0] && ents[0].isIntersecting; tryPlay(); }, { threshold: 0.01 }); el.__io.observe(el); }
            if (document.readyState === "complete") setTimeout(attach, 0);
            else window.addEventListener("load", attach, { once: true });
            el.__iv = setInterval(tryPlay, 2500); document.addEventListener("visibilitychange", tryPlay);
          }} />
        <div className="cine__grad" />

        <div className="wrap u-flex u-between" style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <div className="eyebrow"><span className="dot" /> Noesis — Est. 2009</div>
          <div className="eyebrow u-hide-720">Beverly Hills · International</div>
        </div>

        <div className="wrap" style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <h1 className="h-display lx-h" style={{ maxWidth: "18ch", color: "var(--bone)" }}>
            <span className="ln"><span>We build what</span></span>{" "}
            <span className="ln"><span>we invest in.</span></span>
          </h1>
          <div className="grid-12 u-mt-40 u-end">
            <div className="col-6">
              <p className="lede" data-hero-fade style={{ maxWidth: "46ch" }}>
                Noesis is an international real-estate development and investment firm. We conceive,
                build and hold the assets we believe in — and bring that same builder's discipline to
                a select few owners.
              </p>
            </div>
            <div className="col-6 u-flex u-gap-16" data-hero-fade style={{ justifyContent: "flex-end", flexWrap: "wrap" }}>
              <button className="btn" onClick={() => goInvestor("investment")} data-magnetic>For Investors</button>
              <button className="btn btn--ghost" onClick={() => goOwner("owners-rep")} data-magnetic>For Owners &amp; Developers</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2 ── THE TWO PILLARS + accessory line ─────────────────────── */}
      <section id="pillars" className="section">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: "clamp(28px,3.5vw,48px)" }}>
            <div className="eyebrow"><span className="dot" /> What We Do</div>
            <p className="wwd__lead u-mt-24" style={{ maxWidth: "22ch" }}>
              We develop real estate — and <em>invest in what we develop.</em>
            </p>
          </div>

          <div className="gateway reveal" data-spy="development,investment">
            {HOME_PILLARS.map(([n, t, route, d]) => (
              <button key={n} className="gate" onClick={() => go(route)} aria-label={`${t} — open the ${t} page`}>
                <span className="gate__n">{n}</span>
                <span className="gate__t">{t}</span>
                <span className="gate__d">{d}</span>
                <span className="gate__cta">Explore {t} <span className="arr" /></span>
              </button>
            ))}
          </div>

          <button className="accessory reveal" data-spy="owners-rep" onClick={() => goOwner("owners-rep")} aria-label="Owner's Representation and Project Management — open the page">
            <span className="accessory__lbl">Also — Owner's Representation &amp; Project Management</span>
            <span className="accessory__d">For a select few owners, the same discipline applied to your project — one accountable advocate from entitlement to delivery.</span>
            <span className="accessory__cta">Our capabilities <span className="arr" /></span>
          </button>
        </div>
      </section>

      {/* 3 ── PROOF BAND + THE PRINCIPAL ───────────────────────────── */}
      <section id="record" className="section" data-spy="firm" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot" /> The Delivered Record</div>
          <div className="statband reveal u-mt-24">
            {HOME_STATS.map(([v, l]) => (
              <div key={l}><div className="num">{v}</div><div className="statband__l">{l}</div></div>
            ))}
          </div>

          {/* The principal — his record is the firm's record, so it is attributed here. */}
          <div className="principal reveal">
            <button className="principal__portrait" onClick={() => go("firm")} aria-label="Igal N. Azran — read about the firm and founder">
              <img src={wix(PHOTO.igal, { w: 800 })} alt="Igal N. Azran, Founder & CEO" loading="lazy" onError={imgFallback} />
            </button>
            <div className="principal__body">
              <div className="eyebrow"><span className="dot" /> The Principal</div>
              <div className="principal__name">Igal N. Azran</div>
              <div className="principal__role">Founder &amp; CEO · Previously CIM Group · CBRE</div>
              <p className="principal__bio">
                Igal founded Noesis in 2009 and has led its development and investment work ever since.
                Born in Morocco and raised between France, Spain and Israel, he brings a genuinely
                international perspective — and a builder's discipline — to every venture.
              </p>
              <button className="link-u principal__link" onClick={() => go("firm")}>The firm &amp; founder</button>
            </div>
            {/* Third grid child: ≥1100px this becomes a thin-rule proof rail filling
                the dead right rail; 761-1099px a full-width 3-up row; ≤760px stacks. */}
            <div className="principal__stats">
              {HOME_PROOF.map(([v, l]) => (
                <div key={l}>
                  <div className="principal__num">{v}</div>
                  <div className="principal__lbl">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 ── FEATURED PROJECT ─────────────────────────────────────── */}
      <section id="featured" className="section" data-spy="properties">
        <div className="wrap">
          <div className="grid-12 u-end reveal" style={{ marginBottom: "clamp(24px,3vw,36px)" }}>
            <div className="col-8">
              <div className="eyebrow"><span className="dot" /> Portfolio</div>
              <h2 className="h-1 u-mt-16 caps">The record behind the thesis.</h2>
            </div>
            <div className="col-4 u-tr">
              <button className="btn btn--ghost" onClick={() => go("properties")} data-magnetic>View the full portfolio <span className="arr" /></button>
            </div>
          </div>

          <button className="story-feature reveal" onClick={() => go("story:le-bijou")} aria-label="Featured project — Le Bijou, read the story">
            <img className="story-feature__img img--warm" alt="Le Bijou, Beverly Hills" loading="lazy" sizes="(max-width: 900px) 100vw, min(1480px, 92vw)"
              onError={(e) => { e.currentTarget.style.opacity = "0"; }}
              src={wix(SHOT.leBijou, { w: 2000 })}
              srcSet={`${wix(SHOT.leBijou, { w: 1200 })} 1200w, ${wix(SHOT.leBijou, { w: 2000 })} 2000w`} />
            <div className="story-feature__grad" />
            <div className="story-feature__cap">
              <div className="eyebrow"><span className="dot" /> Featured Project</div>
              <div className="story-feature__name">Le Bijou</div>
              <div className="story-feature__meta">Beverly Hills — “the jewel,” where receding walls of glass make indoor-outdoor living real.</div>
              <span className="story-feature__cta">Read the story <span className="arr" /></span>
            </div>
          </button>

          <div className="collage reveal u-mt-64">
            {HOME_WORK.map(([img, id, name, loc, work]) => (
              <a key={name} className="pcard" href={BASE + pathFor("story:" + id)}
                aria-label={`${name}, ${loc} — view the project story`}
                onClick={(e) => {
                  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                  e.preventDefault(); go("story:" + id);
                }}>
                <div className="pcard__media"><img className={`pcard__img ${(name === "Casa Mani" || name === "Aura House") ? "img--warm" : ""}`} src={wix(img, { w: 1300 })} alt={name} loading="lazy" onError={imgFallback} /></div>
                <div className="pcard__cap">
                  <div>
                    <h3 className="pcard__name">{name}</h3>
                    <div className="pcard__loc">{loc}</div>
                  </div>
                  <div className="mono" style={{ fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-deep)", whiteSpace: "nowrap" }}>{work}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5 ── THE FILM ─────────────────────────────────────────────── */}
      <section className="cine cine--video" style={{ height: "min(86vh, 840px)", minHeight: 500 }}>
        <img className="cine__img" src={wix(SHOT.oneOak, { w: 2200 })} alt="" loading="lazy" sizes="100vw"
          srcSet={`${wix(SHOT.oneOak, { w: 800 })} 800w, ${wix(SHOT.oneOak, { w: 1400 })} 1400w, ${wix(SHOT.oneOak, { w: 2200 })} 2200w`}
          onError={imgFallback} />
        <video className="cine__vid" autoPlay loop muted playsInline preload="none"
          src={film("noesis-reel", { ambient: true }) || undefined}
          ref={(el) => {
            if (!el || el.__keeper) return; el.__keeper = true; el.muted = true; el.__inView = false;
            const tryPlay = () => {
              if (!el.isConnected) { clearInterval(el.__iv); document.removeEventListener("visibilitychange", tryPlay); if (el.__io) el.__io.disconnect(); return; }
              if (el.__manual) return;   // visitor started the launch film — hands off
              if (!document.hidden && el.__inView) { if (el.paused) { const p = el.play(); if (p && p.catch) p.catch(() => {}); } }
              else if (!el.paused) { el.pause(); }
            };
            if ("IntersectionObserver" in window) { el.__io = new IntersectionObserver((e) => { el.__inView = e[0] && e[0].isIntersecting; tryPlay(); }, { threshold: 0.15 }); el.__io.observe(el); }
            el.__iv = setInterval(tryPlay, 2500); document.addEventListener("visibilitychange", tryPlay);
          }} />
        <div className="cine__grad" />
        <div className="cine__cap">
          <div className="wrap" style={{ paddingBottom: "clamp(36px,6vw,72px)" }}>
            <div className="eyebrow"><span className="dot" /> Conceived, developed &amp; delivered by Noesis</div>
            <h2 className="h-1 u-mt-16 caps" style={{ color: "var(--bone)", maxWidth: "18ch" }}>We have stood where our partners stand.</h2>
            <button className="btn u-mt-24" data-magnetic
              onClick={(e) => {
                const sec = e.currentTarget.closest("section");
                const v = sec && sec.querySelector("video");
                if (!v) return;
                // Play the full launch film with sound. Recoverable: the caption
                // dims rather than disappearing, and a failed load restores the loop.
                const restore = () => {
                  v.__manual = false; v.loop = true; v.controls = false; v.muted = true;
                  const rl = film("noesis-reel", { ambient: true }); if (rl) { v.src = rl; v.load(); }
                  const pr = v.play(); if (pr && pr.catch) pr.catch(() => {});
                  sec.classList.remove("is-playing");
                };
                v.__manual = true; v.loop = false; v.controls = true; v.muted = false;
                v.addEventListener("error", restore, { once: true });
                v.addEventListener("ended", restore, { once: true });
                v.src = film("noesis-launch"); v.load();
                const p = v.play(); if (p && p.catch) p.catch(restore);
                sec.classList.add("is-playing");
              }}>Watch the film · 2 min <span className="arr" /></button>
          </div>
        </div>
      </section>

      {/* 6 ── CLOSE ────────────────────────────────────────────────── */}
      <section className="section section--ink" data-spy="inquiries">
        <div className="wrap grid-12 u-end reveal">
          <div className="col-7">
            <div className="eyebrow"><span className="dot" /> Inquiries</div>
            <h2 className="h-1 u-mt-16 caps" style={{ color: "var(--bone)", maxWidth: "16ch" }}>Capital to deploy, or a project to deliver.</h2>
          </div>
          <div className="col-5 u-tr u-flex u-gap-16" style={{ justifyContent: "flex-end", flexWrap: "wrap" }}>
            <button className="btn" onClick={() => goInvestor("inquiries")} data-magnetic>Request an Introduction <span className="arr" /></button>
            <button className="btn btn--ghost" onClick={() => go("firm")} data-magnetic>About the Firm</button>
          </div>
        </div>
      </section>
    </main>
  );
}

window.Home = Home;
