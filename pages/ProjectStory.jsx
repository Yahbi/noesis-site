// ProjectStory — an immersive, scroll-driven case study for a single delivered
// project. Data-driven from the shared PROJECTS record (see Projects.jsx); reuses
// the site's .cine curtain wipes, parallax, spec strip and Lightbox — no new infra.
//
// Sections: Cover → Overview + specs → Walk-through scenes → Outcome → Gallery → Next.

function storyParas(text) {
  return (text || "").split("\n\n").map((s) => s.trim()).filter(Boolean);
}

// A confident outcome line — only when the copy/facts actually support one.
function outcomeFor(p) {
  const facts = p.facts || [];
  const find = (k) => { const hit = facts.find(([kk]) => kk.toLowerCase() === k); return hit ? hit[1] : null; };
  const sold = find("sold");
  if (sold) return sold;
  const status = find("status");
  if (status) return status;
  const t = (p.text || "").toLowerCase();
  if (t.indexOf("sold above asking") !== -1) return "Delivered and sold above asking";
  if (t.indexOf("ahead of schedule") !== -1) return "Delivered ahead of schedule";
  return null;
}

function ProjectStory({ project, go }) {
  const p = project;
  const [lb, setLb] = React.useState(null);   // { index } — opens the shared Lightbox

  if (!p) {
    return (
      <main className="page-enter section">
        <div className="wrap">
          <div className="eyebrow"><span className="dot" /> Not found</div>
          <h1 className="h-1 caps u-mt-16">This project could not be found.</h1>
          <button className="btn u-mt-40" onClick={() => go("properties")}>View all properties <span className="arr" /></button>
        </div>
      </main>
    );
  }

  const paras = storyParas(p.text);
  const cover = p.cover || p.gallery[0];
  const facts = p.facts || [];
  const outcome = outcomeFor(p);

  // Every paragraph past the lede renders in FULL as prose (never truncated or
  // fragmented); a few non-cover frames become cinematic plates — and all frames
  // still feed the full gallery + lightbox, so no image or word is dropped.
  const bodyParas = paras.slice(1);
  const rest = p.gallery.filter((g) => g !== cover);
  const scenes = rest.slice(0, 3);

  // Endless-scroll: the neighbouring projects in the shared ordered list.
  const list = (typeof PROJECT_LIST !== "undefined" ? PROJECT_LIST : []);
  const idx = list.findIndex((x) => x.id === p.id);
  const next = list.length ? list[(idx + 1) % list.length] : null;
  const prev = list.length ? list[(idx - 1 + list.length) % list.length] : null;

  // A broken Wix URL should fade the image and let the cinematic tone show — never a blank white plate.
  const onImgError = (e) => { e.currentTarget.style.opacity = "0"; };

  return (
    <main className="page-enter story">

      {/* 1 — COVER (this is the view's hero: buildHero animates it, no curtain) */}
      <section className="cine story__cover" style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <img className="cine__img img--warm" alt={p.name} fetchpriority="high" sizes="100vw" onError={onImgError}
          src={wix(cover, { w: 2000 })}
          srcSet={`${wix(cover, { w: 1200 })} 1200w, ${wix(cover, { w: 2000 })} 2000w, ${wix(cover, { w: 2600 })} 2600w, ${wix(cover, { w: 3400 })} 3400w`} />
        <div className="cine__grad" />
        {/* width:100% is load-bearing — the cover is a column flex container, and a
            .wrap's auto side margins cancel flex stretch, leaving the title block
            shrink-to-fit and centred instead of on the site's left content margin. */}
        <div className="wrap" style={{ position: "relative", zIndex: 1, width: "100%", paddingBottom: "clamp(52px,9vh,120px)" }}>
          <div className="eyebrow" data-hero-fade>
            <span className="dot" /> {p.category}{p.year ? ` · ${p.year}` : ""}
          </div>
          <h1 className="h-display u-mt-16" style={{ color: "var(--bone)", maxWidth: "15ch" }}>{p.name}</h1>
          <div className="lede u-mt-16" data-hero-fade style={{ maxWidth: "40ch" }}>{p.loc}</div>
        </div>
        <div className="story__cue" data-hero-fade aria-hidden="true"><span /></div>
      </section>

      {/* 2 — OVERVIEW + SPECS */}
      <section className="section">
        <div className="wrap grid-12" style={{ alignItems: "start" }}>
          <div className="col-4 reveal">
            <div className="eyebrow"><span className="dot" /> The Project</div>
            <div className="story__role u-mt-24">Designed, developed &amp; delivered by Noesis</div>
          </div>
          <div className="col-8 reveal">
            {paras[0] && <p className="lede">{paras[0]}</p>}
          </div>
        </div>
        {facts.length > 0 && (
          <div className="wrap u-mt-64 reveal">
            <div className="story__specs">
              {facts.map(([k, v]) => (
                <div className="story__spec" key={k}>
                  <div className="k">{k}</div>
                  <div className="v">{v}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 2b — PROJECT FILM (when real footage exists): an ambient, muted cinematic plate
             using the same play-on-intersection keeper as the home reel. */}
      {p.video && (
        <section className="cine cine--video story__scene" style={{ height: "min(92vh, 900px)", minHeight: 460 }}>
          <img className="cine__img img--warm" alt={`${p.name} — film still`} loading="lazy" onError={onImgError}
            src={wix(cover, { w: 1600 })} />
          <video className="cine__vid" autoPlay loop muted playsInline preload="none"
            poster={wix(cover, { w: 1200 })} src={film(p.video, { ambient: true }) || undefined}
            ref={(el) => {
              if (!el || el.__keeper) return; el.__keeper = true; el.muted = true; el.__inView = false;
              const tryPlay = () => {
                if (!el.isConnected) { clearInterval(el.__iv); document.removeEventListener("visibilitychange", tryPlay); if (el.__io) el.__io.disconnect(); return; }
                if (!document.hidden && el.__inView) { if (el.paused) { const pr = el.play(); if (pr && pr.catch) pr.catch(() => {}); } }
                else if (!el.paused) { el.pause(); }
              };
              if ("IntersectionObserver" in window) { el.__io = new IntersectionObserver((e) => { el.__inView = e[0] && e[0].isIntersecting; tryPlay(); }, { threshold: 0.15 }); el.__io.observe(el); }
              el.__iv = setInterval(tryPlay, 2500); document.addEventListener("visibilitychange", tryPlay);
            }} />
          <div className="cine__grad" />
          <div className="cine__cap">
            <div className="wrap" style={{ paddingBottom: "clamp(28px,5vw,56px)" }}>
              <div className="eyebrow"><span className="dot" /> {p.name} — on film</div>
            </div>
          </div>
        </section>
      )}

      {/* 3 — NARRATIVE + WALK-THROUGH: every paragraph past the lede rendered in FULL as
             readable prose, interwoven with full-bleed cinematic plates (curtain wipe +
             parallax). No sentence is fragmented, capped or dropped. */}
      {Array.from({ length: Math.max(bodyParas.length, scenes.length) }).map((_, i) => (
        <React.Fragment key={i}>
          {scenes[i] && (
            <section className="cine story__scene" style={{ height: "min(92vh, 900px)", minHeight: 460 }}>
              <img className="cine__img img--warm" data-parallax="0.16" loading="lazy" sizes="100vw" onError={onImgError}
                alt={`${p.name} — view ${i + 1}`}
                src={wix(scenes[i], { w: 2000 })}
                srcSet={`${wix(scenes[i], { w: 1200 })} 1200w, ${wix(scenes[i], { w: 2000 })} 2000w, ${wix(scenes[i], { w: 3000 })} 3000w`} />
              <div className="cine__grad" />
            </section>
          )}
          {bodyParas[i] && (
            <section className="section story__narrative">
              <div className="wrap"><p className="story__prose reveal">{bodyParas[i]}</p></div>
            </section>
          )}
        </React.Fragment>
      ))}

      {/* 4 — OUTCOME (only where the record supports a confident result) */}
      {outcome && (
        <section className="section section--ink">
          <div className="wrap" style={{ textAlign: "center" }}>
            <div className="eyebrow reveal" style={{ display: "inline-flex", alignItems: "center", gap: 8, justifyContent: "center" }}>
              <span className="dot" /> Outcome
            </div>
            <h2 className="h-1 caps reveal" style={{ color: "var(--bone)", maxWidth: "22ch", margin: "18px auto 0" }}>{outcome}</h2>
          </div>
        </section>
      )}

      {/* 5 — FULL GALLERY (opens the shared Lightbox) */}
      {p.gallery.length > 1 && (
        <section className="section">
          <div className="wrap">
            <div className="grid-12 u-end reveal" style={{ marginBottom: "clamp(24px,3vw,40px)" }}>
              <div className="col-8">
                <div className="eyebrow"><span className="dot" /> Gallery</div>
                <h2 className="h-2 u-mt-16" style={{ textTransform: "none" }}>Inside {p.name}</h2>
              </div>
              <div className="col-4 u-tr">
                <button className="btn btn--ghost" onClick={() => setLb({ index: 0 })} data-magnetic>Open full gallery <span className="arr" /></button>
              </div>
            </div>
            <div className="collage reveal">
              {p.gallery.map((img, i) => (
                <article key={img} className="pcard" role="button" tabIndex={0} aria-label={`${p.name} — photograph ${i + 1}`}
                  onClick={() => setLb({ index: i })}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setLb({ index: i }); } }}>
                  <div className="pcard__media">
                    <img className="pcard__img" alt={`${p.name} — ${i + 1}`} loading="lazy" onError={onImgError}
                      src={wix(img, { w: 900 })}
                      srcSet={`${wix(img, { w: 800 })} 800w, ${wix(img, { w: 1400 })} 1400w`}
                      sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" />
                    <div className="pcard__over"><span className="pcard__cta" style={{ marginTop: "auto" }}>View <span className="arr" /></span></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6 — CONTINUE: next-project teaser (endless scroll) + previous + all-properties.
             The big teaser is a real <button> containing only text spans (valid), with the
             prev / all-properties links as siblings — no interactive nesting. */}
      {next && (
        <section className="cine story__next" style={{ minHeight: "70svh", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <img className="cine__img img--warm" alt={next.name} loading="lazy" onError={onImgError} sizes="100vw"
            src={wix(next.cover || next.gallery[0], { w: 2000 })}
            srcSet={`${wix(next.cover || next.gallery[0], { w: 1200 })} 1200w, ${wix(next.cover || next.gallery[0], { w: 2000 })} 2000w`} />
          <div className="cine__grad" />
          <div className="cine__cap">
            <div className="wrap" style={{ paddingBottom: "clamp(40px,7vw,92px)" }}>
              <button className="story__next-hit" onClick={() => go("story:" + next.id)} data-magnetic aria-label={`Open next project — ${next.name}`}>
                <span className="eyebrow"><span className="dot" /> Next Project</span>
                <span className="h-display story__next-name u-mt-8">{next.name}</span>
              </button>
              <div className="story__endnav">
                {prev && <button className="story__navlink" onClick={() => go("story:" + prev.id)}>← Previous · {prev.name}</button>}
                <button className="story__navlink" onClick={() => go("properties")}>All properties →</button>
              </div>
            </div>
          </div>
        </section>
      )}

      {lb && <Lightbox project={p} start={lb.index} onClose={() => setLb(null)} />}
    </main>
  );
}

window.ProjectStory = ProjectStory;
