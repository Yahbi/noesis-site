// Signature pieces — the three moments that give the site its own register
// rather than a template's: the night plate, the project index and the band
// image helper they share.
//
// NIGHT PLATE. Until this pass every section sat on white or paper, so the page
// had one temperature from hero to footer and nothing ever arrived. The night
// plate is the counterweight: a full-bleed photograph under a deep veil, with the
// type tokens re-pointed inside it so every existing primitive (eyebrow, h-1,
// btn--ghost, statband) inverts without a single per-component override.
//
// PROJECT INDEX. The homepage showed four equal thumbnails — the most generic
// layout on the web. The index sets the names as type, and lets the photograph
// answer the cursor. On touch screens there is no hover, so each row carries its
// own image and the stage is not rendered at all.

// Band imagery baked by tools/bake-images.py: NAME.jpg (2600w) + -w1400 + -w800.
function bandSrc(name) {
  const base = "assets/img/" + name;
  return {
    src: base + "-w1400.webp",
    srcSet: `${base}-w800.webp 800w, ${base}-w1400.webp 1400w, ${base}.jpg 2600w`,
  };
}

function NightPlate({ band, img, alt, focus, className, children, id, spy }) {
  const media = band ? bandSrc(band) : img ? { src: wix(img, { w: 2000 }), srcSet: wixSet(img, [1400, 2000, 2600]) } : null;
  return (
    <section id={id} data-spy={spy} className={"night" + (className ? " " + className : "")}>
      {media && (
        <img className="night__img" src={media.src} srcSet={media.srcSet} sizes="100vw"
          alt={alt || ""} loading="lazy" decoding="async" data-parallax="0.1"
          style={focus ? { objectPosition: focus } : undefined} onError={imgFallback} />
      )}
      <div className="night__veil" aria-hidden="true" />
      <div className="night__in">{children}</div>
    </section>
  );
}

// A closing call to action on a night plate — the last word on every interior page.
function NightCta({ band, img, alt, focus, title, actions }) {
  return (
    <NightPlate band={band} img={img} alt={alt} focus={focus} className="night--cta">
      <div className="wrap grid-12 u-end reveal">
        <div className="col-8"><h2 className="h-1 caps night__title">{title}</h2></div>
        <div className="col-4 u-tr cta-row night__actions">{actions}</div>
      </div>
    </NightPlate>
  );
}

function storyClick(go, id) {
  return (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault(); go("story:" + id);
  };
}

function ProjectIndex({ items, go }) {
  const [active, setActive] = React.useState(0);
  // Stage images mount once the index is near. They are also lazy: on phones the
  // stage is display:none, and a lazy image in a hidden subtree is never fetched.
  const [warm, setWarm] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) { setWarm(true); return; }
    const io = new IntersectionObserver((ents) => {
      if (ents.some((x) => x.isIntersecting)) { setWarm(true); io.disconnect(); }
    }, { rootMargin: "600px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cur = items[active];
  return (
    <div className="pidx" ref={ref}>
      <ol className="pidx__list">
        {items.map((it, i) => (
          <li key={it.id}>
            <a className={"pidx__row" + (i === active ? " is-on" : "")}
              href={BASE + pathFor("story:" + it.id)}
              aria-label={`${it.name}, ${it.loc} — view the project story`}
              onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}
              onClick={storyClick(go, it.id)}>
              <span className="pidx__n">{String(i + 1).padStart(2, "0")}</span>
              <span className="pidx__name">{it.name}</span>
              <span className="pidx__meta">
                <span>{it.loc}{it.year ? ` · ${it.year}` : ""}</span>
                <span className="pidx__asset">{it.asset}{it.rendering ? " · Rendering" : ""}</span>
              </span>
              <span className="pidx__go" aria-hidden="true"><span className="arr" /></span>
              <span className="pidx__thumb" aria-hidden="true">
                <img src={wix(it.img, { w: 800 })} srcSet={wixSet(it.img, [800, 1400])}
                  sizes="92vw" alt="" loading="lazy" decoding="async" onError={imgFallback} />
              </span>
            </a>
          </li>
        ))}
      </ol>

      <div className="pidx__stage" aria-hidden="true">
        <div className="pidx__frame">
          {warm && items.map((it, i) => (
            <img key={it.id} className={i === active ? "is-on" : ""}
              src={wix(it.img, { w: 1400 })} srcSet={wixSet(it.img, [800, 1400, 2000])}
              sizes="(max-width: 900px) 1px, 44vw" alt="" loading="lazy" decoding="async" onError={imgFallback} />
          ))}
        </div>
        <div className="pidx__cap">
          <span>{cur.role}</span>
          {cur.rendering && <span className="pidx__flag">Architectural rendering</span>}
        </div>
      </div>
    </div>
  );
}


// Construction photography from the firm's own sites — the evidence that the
// developer is also the builder. Captioned as a place and an activity, never as
// a named project, because the frames are not catalogued by job.
const SITE_FRAMES = [
  ["sf-site-01", "The boom pump over a deck pour"],
  ["sf-site-02", "Post-tension deck, before the pour"],
  ["sf-site-03", "Placing and finishing the slab"],
  ["sf-site-04", "Framing a hillside residence above the city"],
];

function SiteStrip({ eyebrow, title, note }) {
  return (
    <section className="section" style={{ borderTop: 0 }}>
      <div className="wrap">
        <div className="grid-12 u-end reveal" style={{ marginBottom: "clamp(24px,3vw,40px)" }}>
          <div className="col-7">
            <div className="eyebrow"><span className="dot" /> {eyebrow || "On Site"}</div>
            <h2 className="h-1 u-mt-16 caps" style={{ maxWidth: "16ch" }}>{title}</h2>
          </div>
          <div className="col-5">
            <p className="body" style={{ color: "var(--muted)", maxWidth: "44ch" }}>{note}</p>
          </div>
        </div>
        <div className="sstrip">
          {SITE_FRAMES.map(([img, cap]) => (
            <figure key={img} className="sstrip__f">
              <span className="sstrip__m">
                <img src={wix(img, { w: 1400 })} srcSet={wixSet(img, [800, 1400, 2000])}
                  sizes="(max-width: 760px) 92vw, 25vw" alt={cap + ", Los Angeles"} loading="lazy" decoding="async" onError={imgFallback} />
              </span>
              <figcaption>{cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

window.bandSrc = bandSrc;
window.SiteStrip = SiteStrip;
window.NightPlate = NightPlate;
window.NightCta = NightCta;
window.ProjectIndex = ProjectIndex;
