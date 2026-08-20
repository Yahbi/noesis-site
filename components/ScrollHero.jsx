// ScrollHero — the cinematic scroll-scrub hero.
//
// A tall scroll container with a sticky canvas: scroll progress drives the frame
// index of the delivered film, so the visitor flies through a Noesis project by
// scrolling. Four text beats ride the same progress value.
//
// Stack note: this site is a no-build React 18 + Babel SPA, so there is no
// framer-motion. Progress-driven opacity/transform is computed directly and
// written to refs — cheaper than a spring library and it matches the site's
// existing motion vocabulary (var(--ease-glide) etc.).
//
// FRAME_COUNT is the number of files actually on disk in assets/frames/,
// counted at build time — never an estimate.
const FRAME_COUNT = 120;
const FRAME_SRC = (i) => `assets/frames/f_${String(i + 1).padStart(4, "0")}.jpg`;

// Beat windows, as fractions of the container's scroll range.
const BEATS = {
  identity: [0.00, 0.14],   // fades OUT across this range
  right:    [0.18, 0.50],
  left:     [0.54, 0.88],
  close:    [0.88, 1.00],   // rises in and HOLDS — never fades back out
};

// Linear ramp helper: 0 before a, 1 after b.
function ramp(p, a, b) {
  if (b === a) return p >= b ? 1 : 0;
  return Math.max(0, Math.min(1, (p - a) / (b - a)));
}

function ScrollHero({ go, setIntent }) {
  const containerRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const identityRef = React.useRef(null);
  const rightRef = React.useRef(null);
  const leftRef = React.useRef(null);
  const closeRef = React.useRef(null);
  const closeBackRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current, container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imgs = new Array(FRAME_COUNT);
    let wanted = 0;        // the index the loop currently wants painted
    let painted = -1;      // the index actually painted from a LOADED image
    let raf = 0;
    let dead = false;

    const sizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // Cover-fit. Returns TRUE only when a loaded image was actually painted;
    // FALSE when it could only lay down the linen fallback. The rAF loop relies
    // on this: marking a frame "done" on a fallback paint is exactly the bug that
    // leaves the hero blank forever on a cold load, because the image's own
    // onload would then have nothing left to trigger a repaint.
    const draw = (i) => {
      const cw = canvas.clientWidth || window.innerWidth;
      const ch = canvas.clientHeight || window.innerHeight;
      const img = imgs[i];
      const ready = img && img.complete && img.naturalWidth > 0;
      ctx.fillStyle = "#E7E0D2";                 // --bone, the site's linen
      ctx.fillRect(0, 0, cw, ch);
      if (!ready) return false;
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const dw = img.naturalWidth * scale, dh = img.naturalHeight * scale;
      ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
      return true;
    };

    // Preload. Each image, on arrival, paints itself if it is still the wanted
    // frame — so whichever happens first (this download, or the loop's next
    // tick) gets the pixels on screen. No dependency on load order.
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = FRAME_SRC(i);
      img.onload = () => {
        if (dead) return;
        if (i === wanted && draw(i)) painted = i;
      };
      imgs[i] = img;
    }

    const paintText = (p) => {
      // 1 — identity block fades out and drifts up as the scroll begins.
      const idOut = ramp(p, BEATS.identity[0], BEATS.identity[1]);
      if (identityRef.current) {
        identityRef.current.style.opacity = String(1 - idOut);
        identityRef.current.style.transform = `translate3d(0, ${-40 * idOut}px, 0)`;
      }
      // 2 — right-side beat: in, hold, out.
      if (rightRef.current) {
        const inn = ramp(p, BEATS.right[0], BEATS.right[0] + 0.10);
        const out = ramp(p, BEATS.right[1] - 0.08, BEATS.right[1]);
        rightRef.current.style.opacity = String(inn * (1 - out));
        rightRef.current.style.transform = `translate3d(${40 * (1 - inn) + 30 * out}px, ${-30 * out}px, 0)`;
      }
      // 3 — left-side beat: in, hold, out.
      if (leftRef.current) {
        const inn = ramp(p, BEATS.left[0], BEATS.left[0] + 0.10);
        const out = ramp(p, BEATS.left[1] - 0.08, BEATS.left[1]);
        leftRef.current.style.opacity = String(inn * (1 - out));
        leftRef.current.style.transform = `translate3d(${-40 * (1 - inn) - 30 * out}px, ${-30 * out}px, 0)`;
      }
      // 4 — closing block rises and HOLDS to the end of the range.
      const cin = ramp(p, BEATS.close[0], BEATS.close[1]);
      if (closeRef.current) {
        closeRef.current.style.opacity = String(cin);
        closeRef.current.style.transform = `translate3d(0, ${36 * (1 - cin)}px, 0)`;
      }
      if (closeBackRef.current) {
        closeBackRef.current.style.opacity = String(ramp(p, BEATS.close[0] - 0.02, BEATS.close[1] - 0.04));
      }
    };

    const tick = () => {
      if (dead) return;
      const rect = container.getBoundingClientRect();
      const range = container.offsetHeight - window.innerHeight;
      const p = range > 0 ? Math.max(0, Math.min(1, -rect.top / range)) : 0;
      const target = Math.round(p * (FRAME_COUNT - 1));
      wanted = target;
      // Retry every tick regardless of whether the tracker advanced — the frame
      // may simply not have finished downloading yet.
      if (target !== painted && draw(target)) painted = target;
      paintText(p);
      raf = requestAnimationFrame(tick);
    };

    const onResize = () => { sizeCanvas(); if (!draw(wanted)) painted = -1; };

    sizeCanvas();
    draw(0);
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", onResize);
    return () => {
      dead = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      for (let i = 0; i < FRAME_COUNT; i++) if (imgs[i]) imgs[i].onload = null;
    };
  }, []);

  const goInvestor = (id) => { if (setIntent) setIntent("investor"); go(id); };
  const goOwner = (id) => { if (setIntent) setIntent("owner"); go(id); };

  return (
    <section ref={containerRef} className="shero" id="hero">
      <div className="shero__sticky">
        <canvas ref={canvasRef} className="shero__canvas" aria-hidden="true" />
        <div className="shero__grad" aria-hidden="true" />

        {/* The overlay is NEVER gated on image loading. Each beat's visibility is
            driven only by scroll progress; the canvas may show linen until frame
            one arrives, but the words are readable from the first paint. */}
        <div className="shero__overlay">

          {/* BEAT 1 — identity. Rises on mount (CSS animation, time-based and
              deliberately independent of scroll), then scroll fades it out. */}
          <div className="shero__identity" ref={identityRef}>
            <div className="wrap">
              <div className="eyebrow shero__rise shero__rise--1"><span className="dot" /> Noesis — Est. 2009</div>
              <h1 className="h-display shero__rise shero__rise--2" style={{ maxWidth: "18ch", color: "var(--bone)" }}>
                We build what we invest in.
              </h1>
              <p className="lede shero__rise shero__rise--3" style={{ maxWidth: "46ch" }}>
                An international real-estate development and investment firm. We conceive, build and
                hold the assets we believe in — and bring that same builder's discipline to a select
                few owners.
              </p>
              <div className="u-flex u-gap-16 u-mt-40 shero__rise shero__rise--4" style={{ flexWrap: "wrap" }}>
                <button className="btn" onClick={() => goInvestor("investment")} data-magnetic>For Investors</button>
                <button className="btn btn--ghost" onClick={() => goOwner("owners-rep")} data-magnetic>For Owners &amp; Developers</button>
              </div>
            </div>
          </div>

          {/* BEAT 2 — development, on the right. */}
          <div className="shero__beat shero__beat--right" ref={rightRef}>
            <div className="eyebrow"><span className="dot" /> Development</div>
            <p className="pull u-mt-16" style={{ color: "var(--bone)", maxWidth: "16ch" }}>
              Conceived, entitled, designed and <em>built by our own team.</em>
            </p>
            <p className="body u-mt-16" style={{ color: "var(--bone-soft)", maxWidth: "40ch" }}>
              Luxury residences, small-lot subdivisions and apartment buildings — taken from a parcel
              of land to a finished landmark.
            </p>
          </div>

          {/* BEAT 3 — investment, on the left. */}
          <div className="shero__beat shero__beat--left" ref={leftRef}>
            <div className="eyebrow"><span className="dot" /> Investment</div>
            <p className="pull u-mt-16" style={{ color: "var(--bone)", maxWidth: "16ch" }}>
              The operator <em>invests alongside you.</em>
            </p>
            <p className="body u-mt-16" style={{ color: "var(--bone-soft)", maxWidth: "40ch" }}>
              Twenty-three delivered projects underwrite every basis, programme and schedule we
              commit to. The development practice is what de-risks the thesis.
            </p>
          </div>

          {/* BEAT 4 — closing. Rises and holds to the end of the range. */}
          <div className="shero__closeback" ref={closeBackRef} aria-hidden="true" />
          <div className="shero__close" ref={closeRef}>
            <div className="eyebrow" style={{ justifyContent: "center" }}><span className="dot" /> Beverly Hills · International</div>
            <h2 className="h-display u-mt-16" style={{ color: "var(--bone)", maxWidth: "18ch", marginInline: "auto" }}>
              Capital to deploy, or a project to deliver.
            </h2>
            <button className="btn shero__close-cta u-mt-40" onClick={() => goInvestor("inquiries")} data-magnetic>
              Request an Introduction <span className="arr" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

window.ScrollHero = ScrollHero;
