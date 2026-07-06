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

  // Endless-scroll: the next project in the shared ordered list.
  const list = (typeof PROJECT_LIST !== "undefined" ? PROJECT_LIST : []);
  const idx = list.findIndex((x) => x.id === p.id);
  const next = list.length ? list[(idx + 1) % list.length] : null;

  return (
    <main className="page-enter story">

      {/* 1 — COVER (this is the view's hero: buildHero animates it, no curtain) */}
      <section className="cine story__cover" style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <img className="cine__img img--warm" alt={p.name} fetchpriority="high" sizes="100vw"
          src={wix(cover, { w: 2000 })}
          srcSet={`${wix(cover, { w: 1200 })} 1200w, ${wix(cover, { w: 2000 })} 2000w, ${wix(cover, { w: 2600 })} 2600w`} />
        <div className="cine__grad" />
        <div className="wrap" style={{ position: "relative", zIndex: 1, paddingBottom: "clamp(52px,9vh,120px)" }}>
          <div className="eyebrow" data-hero-fade style={{ color: "rgba(236,230,216,.72)" }}>
            <span className="dot" /> {p.category}{p.year ? ` · ${p.year}` : ""}
          </div>
          <h1 className="h-display u-mt-16" style={{ color: "var(--bone)", maxWidth: "15ch" }}>{p.name}</h1>
          <div className="lede u-mt-16" data-hero-fade style={{ color: "rgba(236,230,216,.86)", maxWidth: "40ch" }}>{p.loc}</div>
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

      {/* 3 — NARRATIVE + WALK-THROUGH: every paragraph past the lede rendered in FULL as
             readable prose, interwoven with full-bleed cinematic plates (curtain wipe +
             parallax). No sentence is fragmented, capped or dropped. */}
      {Array.from({ length: Math.max(bodyParas.length, scenes.length) }).map((_, i) => (
        <React.Fragment key={i}>
          {scenes[i] && (
            <section className="cine story__scene" style={{ height: "min(92vh, 900px)", minHeight: 460 }}>
              <img className="cine__img img--warm" data-parallax="0.16" loading="lazy" sizes="100vw"
                alt={`${p.name} — view ${i + 1}`}
                src={wix(scenes[i], { w: 2000 })}
                srcSet={`${wix(scenes[i], { w: 1200 })} 1200w, ${wix(scenes[i], { w: 2000 })} 2000w`} />
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
                    <img className="pcard__img" src={wix(img, { w: 1100 })} alt={`${p.name} — ${i + 1}`} loading="lazy" />
                    <div className="pcard__over"><span className="pcard__cta" style={{ marginTop: "auto" }}>View <span className="arr" /></span></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6 — NEXT PROJECT (endless-scroll feel) */}
      {next && (
        <section className="cine story__next" style={{ minHeight: "74svh", display: "flex", flexDirection: "column", justifyContent: "flex-end", cursor: "pointer" }}
          role="button" tabIndex={0} aria-label={`Next project — ${next.name}`}
          onClick={() => go("story:" + next.id)}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go("story:" + next.id); } }}>
          <img className="cine__img img--warm" alt={next.name} loading="lazy" src={wix(next.cover || next.gallery[0], { w: 2000 })} />
          <div className="cine__grad" />
          <div className="cine__cap">
            <div className="wrap" style={{ paddingBottom: "clamp(40px,7vw,92px)" }}>
              <div className="eyebrow" style={{ color: "rgba(236,230,216,.62)" }}><span className="dot" /> Next Project</div>
              <h2 className="h-display u-mt-8" style={{ color: "var(--bone)", maxWidth: "15ch" }}>{next.name}</h2>
              <div className="u-flex u-gap-16 u-mt-40" style={{ flexWrap: "wrap" }}>
                <button className="btn" onClick={(e) => { e.stopPropagation(); go("story:" + next.id); }} data-magnetic>View {next.name} <span className="arr" /></button>
                <button className="btn btn--ghost" onClick={(e) => { e.stopPropagation(); go("properties"); }} data-magnetic style={{ color: "var(--bone)", borderColor: "rgba(236,230,216,.7)" }}>All properties</button>
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
