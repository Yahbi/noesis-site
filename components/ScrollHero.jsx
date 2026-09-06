// ScrollHero — the scroll-driven cinematic landing.
//
// Built on PHOTOGRAPHS, not video frames. Scrubbing a moving-camera film judders
// (the source is ~2.7 effective fps); stills cross-dissolve, so judder is not
// even possible — and each plate is a real 6720px architectural photograph
// rather than a compressed video frame.
//
// Layered <img> beats a canvas here: the browser decodes and picks the right
// srcSet candidate itself, nothing is resampled through a 2D context, and the
// "frame 0 never painted" race disappears entirely.
//
// Five plates, and deliberately NOT one house. An earlier cut was seven frames of
// Casa Mani — approach, street, rear, living room, family room, kitchen, pool — so
// the first four screens of an investment firm were a room-by-room tour of one
// Beverly Hills residence. It now runs in the CIM register: the city from above
// -> we build it (a Noesis pour) -> downtown -> one delivered residence -> the
// basin at dusk. No interiors: a kitchen is the contractor register.
//
// Plates 1, 3 and 5 are Seedream 4.5 renders at 5–6K, baked by
// tools/bake-images.py with the site grade applied and cropped to 16:9. They
// measure 1.7–2.3 bits/px at the 2600 rung against 1.5–1.8 for the firm's own
// photography; the 1024px generations they replace sat at 0.7 and were pulled.
// Their alt text names a place, never a Noesis project — they are not our work.
const HERO_PLATES = [
  ["city-west", "Los Angeles from above the Westside"],
  ["local:assets/img/build-pour.jpg", "A Noesis concrete pour, Los Angeles"],
  ["city-dtla", "Downtown Los Angeles"],
  ["5c383b_88e3828f1ca0459ea909e745c3b79196~mv2_d_6720_4480_s_4_2.jpg", "Casa Mani, Beverly Hills"],
  ["city-basin", "The Los Angeles basin at dusk"],
];
const BEATS = {
  identity: [0.00, 0.14],
  right:    [0.18, 0.50],
  left:     [0.54, 0.88],
  close:    [0.88, 1.00],
};

function ramp(p, a, b) {
  if (b === a) return p >= b ? 1 : 0;
  return Math.max(0, Math.min(1, (p - a) / (b - a)));
}
function clamp01(v) { return Math.max(0, Math.min(1, v)); }

function ScrollHero({ go, setIntent }) {
  const containerRef = React.useRef(null);
  const plateRefs = React.useRef([]);
  const identityRef = React.useRef(null);
  const rightRef = React.useRef(null);
  const leftRef = React.useRef(null);
  const closeRef = React.useRef(null);
  const closeBackRef = React.useRef(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let raf = 0, dead = false;
    const N = HERO_PLATES.length;

    const paint = (p) => {
      // Continuous index across the plates; adjacent plates cross-dissolve.
      const pos = p * (N - 1);
      const cur = Math.min(N - 2, Math.floor(pos));      // lower plate of the live pair
      for (let i = 0; i < N; i++) {
        const el = plateRefs.current[i];
        if (!el) continue;
        const live = i === cur || i === cur + 1;
        if (!live) {
          // Off the compositor entirely. Seven promoted full-viewport layers was
          // the GPU-memory failure this hero has already had once; two is nothing.
          if (el.style.visibility !== "hidden") {
            el.style.visibility = "hidden"; el.style.opacity = "0"; el.style.willChange = "auto";
          }
          continue;
        }
        // Unconditional: the opening pair is never hidden first, so a transition-only
        // check left the two plates that matter most un-promoted.
        if (el.style.visibility) el.style.visibility = "";
        if (el.style.willChange !== "transform, opacity") el.style.willChange = "transform, opacity";
        el.style.opacity = String(clamp01(1 - Math.abs(pos - i)));
        // Camera move, not a zoom: 1.10 -> 1.00 while dollying a hair along a
        // diagonal that alternates per plate.
        const t = clamp01((pos - (i - 1)) / 2);
        const sc = 1.10 - 0.10 * t;
        const dx = (i % 2 ? 1 : -1) * (1 - t) * 1.4;
        const dy = (1 - t) * -0.7;
        el.style.transform = `translate3d(${dx.toFixed(3)}%, ${dy.toFixed(3)}%, 0) scale(${sc.toFixed(4)})`;
      }

      const idOut = ramp(p, BEATS.identity[0], BEATS.identity[1]);
      if (identityRef.current) {
        identityRef.current.style.opacity = String(1 - idOut);
        identityRef.current.style.transform = `translate3d(0, ${-40 * idOut}px, 0)`;
      }
      if (rightRef.current) {
        const inn = ramp(p, BEATS.right[0], BEATS.right[0] + 0.10);
        const out = ramp(p, BEATS.right[1] - 0.08, BEATS.right[1]);
        rightRef.current.style.opacity = String(inn * (1 - out));
        rightRef.current.style.transform = `translate3d(${40 * (1 - inn) + 30 * out}px, ${-30 * out}px, 0)`;
      }
      if (leftRef.current) {
        const inn = ramp(p, BEATS.left[0], BEATS.left[0] + 0.10);
        const out = ramp(p, BEATS.left[1] - 0.08, BEATS.left[1]);
        leftRef.current.style.opacity = String(inn * (1 - out));
        leftRef.current.style.transform = `translate3d(${-40 * (1 - inn) - 30 * out}px, ${-30 * out}px, 0)`;
      }
      const cin = ramp(p, BEATS.close[0], BEATS.close[1]);
      if (closeRef.current) {
        closeRef.current.style.opacity = String(cin);
        closeRef.current.style.transform = `translate3d(0, ${36 * (1 - cin)}px, 0)`;
      }
      if (closeBackRef.current) {
        closeBackRef.current.style.opacity = String(ramp(p, BEATS.close[0] - 0.02, BEATS.close[1] - 0.04));
      }
    };

    // rAF + getBoundingClientRect — no scroll listener, so this stays smooth
    // under momentum scrolling and never fights Lenis.
    const tick = () => {
      if (dead) return;
      const rect = container.getBoundingClientRect();
      const range = container.offsetHeight - window.innerHeight;
      paint(range > 0 ? clamp01(-rect.top / range) : 0);
      raf = requestAnimationFrame(tick);
    };
    paint(0);
    raf = requestAnimationFrame(tick);
    return () => { dead = true; cancelAnimationFrame(raf); };
  }, []);

  const goInvestor = (id) => { if (setIntent) setIntent("investor"); go(id); };

  return (
    <section ref={containerRef} className="shero" id="hero">
      <div className="shero__sticky">
        <div className="shero__stage" aria-hidden="true">
          {HERO_PLATES.map(([id, alt], i) => (
            <img
              key={id}
              ref={(el) => { plateRefs.current[i] = el; }}
              className="shero__plate"
              alt={alt}
              fetchpriority={i === 0 ? "high" : undefined}
              loading={i < 2 ? undefined : "lazy"}
              decoding="async"
              sizes="100vw"
              src={`assets/img/hero-${i + 1}-2000.jpg`}
              srcSet={`assets/img/hero-${i + 1}-1400.jpg 1400w, assets/img/hero-${i + 1}-2000.jpg 2000w, assets/img/hero-${i + 1}-2600.jpg 2600w`}
              onError={imgFallback}
            />
          ))}
        </div>
        <div className="shero__grad" aria-hidden="true" />

        {/* Never gated on image loading — each beat's visibility comes only from
            scroll progress, so the words are readable from the first paint. */}
        <div className="shero__overlay">

          <div className="shero__identity" ref={identityRef}>
            <div className="wrap">
              <div className="eyebrow shero__rise shero__rise--1"><span className="dot" /> Noesis — Est. 2009</div>
              <h1 className="h-display shero__rise shero__rise--2" style={{ maxWidth: "15ch", color: "var(--ink)" }}>
                We build what we invest in.
              </h1>
              <p className="lede shero__rise shero__rise--3" style={{ maxWidth: "46ch" }}>
                A Beverly Hills–based real-estate development and investment firm. We acquire,
                build and hold residential assets — and represent select owners from entitlement
                through delivery.
              </p>
              <div className="u-flex u-gap-16 u-mt-40 shero__rise shero__rise--4" style={{ flexWrap: "wrap" }}>
                <button className="btn" onClick={() => go("development")} data-magnetic>Explore Development</button>
                <button className="btn btn--ghost" onClick={() => goInvestor("investment")} data-magnetic>Investment Approach</button>
              </div>
            </div>
          </div>

          <div className="shero__beat shero__beat--right" ref={rightRef}>
            <div className="eyebrow"><span className="dot" /> Development</div>
            <p className="pull u-mt-16" style={{ color: "var(--ink)", maxWidth: "16ch" }}>
              Conceived, entitled, designed and <em>built by our own team.</em>
            </p>
            <p className="body u-mt-16" style={{ maxWidth: "40ch" }}>
              Land taken through entitlement, design and construction by one team —
              across single-family, small-lot and apartment assets.
            </p>
          </div>

          <div className="shero__beat shero__beat--left" ref={leftRef}>
            <div className="eyebrow"><span className="dot" /> Investment</div>
            <p className="pull u-mt-16" style={{ color: "var(--ink)", maxWidth: "16ch" }}>
              The operator <em>invests alongside you.</em>
            </p>
            <p className="body u-mt-16" style={{ maxWidth: "40ch" }}>
              Twenty-one delivered projects underwrite every basis, programme and schedule we
              commit to. The development practice is what de-risks the thesis.
            </p>
          </div>

          <div className="shero__closeback" ref={closeBackRef} aria-hidden="true" />
          <div className="shero__close" ref={closeRef}>
            <div className="eyebrow" style={{ justifyContent: "center" }}><span className="dot" /> Beverly Hills · International</div>
            <h2 className="h-display u-mt-16" style={{ color: "var(--ink)", maxWidth: "18ch", marginInline: "auto" }}>
              Development execution. Investment judgment.
            </h2>
            <div className="u-flex u-gap-16 u-mt-40" style={{ justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn shero__close-cta" onClick={() => goInvestor("inquiries")} data-magnetic>
                Start a Conversation <span className="arr" />
              </button>
              <button className="btn btn--ghost shero__close-cta" onClick={() => go("properties")} data-magnetic>
                See the Record
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.ScrollHero = ScrollHero;
