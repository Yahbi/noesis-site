// App shell — one continuous page + scroll-spy, with a full Properties view.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#9A6A3E",
  "displayFont": "Jost"
}/*EDITMODE-END*/;

const ACCENTS = ["#9A6A3E", "#7A5236", "#B04A28", "#6E5C3E", "#8A8270"];
const DISPLAY_FONTS = ["Jost", "Fraunces", "Helvetica Neue"];
const SECTION_IDS = ["about", "projects", "what-we-do", "investment", "management", "inquiries"];
const NAV_OFFSET = 72;

function App() {
  // view: "home" (the one-pager) or "properties" (full gallery)
  const [view, setView] = React.useState("home");
  const [active, setActive] = React.useState(null);
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const pending = React.useRef(null);

  const lenis = () => (window.__motion && window.__motion.lenis) || null;

  const scrollToId = React.useCallback((id) => {
    if (id === "top" || id === "hero") {
      const l = lenis();
      if (l) l.scrollTo(0, { duration: 1.1 }); else window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const l = lenis();
    if (l) l.scrollTo(el, { offset: -NAV_OFFSET, duration: 1.1 });
    else el.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Single navigation entry point used by Nav, Footer and in-page CTAs.
  const go = React.useCallback((id) => {
    if (id === "properties" || id === "approach") {   // deep sub-views
      setView(id);
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    if (view !== "home") {
      pending.current = id;          // jump home, then scroll once mounted
      setView("home");
      return;
    }
    scrollToId(id);
  }, [view, scrollToId]);

  // Theme tokens (accent + display font) live as CSS custom properties.
  React.useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
    document.documentElement.style.setProperty("--accent-deep", shade(t.accent, -0.18));
    const stack = `"${t.displayFont}", "Helvetica Neue", Arial, sans-serif`;
    document.documentElement.style.setProperty("--serif", stack);
  }, [t.accent, t.displayFont]);

  // After a view switch: hand off to motion layer, run any pending scroll.
  React.useEffect(() => {
    if (window.__motion) window.__motion.refresh();
    if (view === "home" && pending.current) {
      const id = pending.current; pending.current = null;
      // wait a frame so the home DOM is committed before measuring
      setTimeout(() => scrollToId(id), 60);
    }
  }, [view, scrollToId]);

  // Scroll-spy — highlight the section currently crossing mid-viewport.
  React.useEffect(() => {
    if (view !== "home") { setActive(null); return; }
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const seen = new Set();
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) seen.add(e.target.id); else seen.delete(e.target.id); });
      const first = SECTION_IDS.find((id) => seen.has(id));
      setActive(first || (window.scrollY < 120 ? null : active));
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [view]);

  // Map legacy page calls inside Projects onto one-page navigation.
  const projectsNav = React.useCallback((p) => {
    if (p === "services") return go("management");
    if (p === "home") return go("top");
    go(p);
  }, [go]);

  return (
    <>
      <Nav active={active} go={go} />

      {view === "home" ? <Home go={go} /> : view === "approach" ? (
        <>
          <button className="back-home" onClick={() => go("what-we-do")} aria-label="Back to What We Do">
            <span className="back-home__arr" aria-hidden="true" /> Back
          </button>
          <Approach go={go} />
        </>
      ) : (
        <>
          <button className="back-home" onClick={() => go("projects")} aria-label="Back to home">
            <span className="back-home__arr" aria-hidden="true" /> Back
          </button>
          <Projects setPage={projectsNav} />
        </>
      )}

      <Footer go={go} />

      {/* Internal design panel — only with ?tweaks=1, never for visitors */}
      {/[?&]tweaks=1/.test(window.location.search) && (
        <TweaksPanel>
          <TweakSection label="Accent" />
          <TweakColor label="Accent color" value={t.accent} options={ACCENTS} onChange={(v) => setTweak("accent", v)} />
          <TweakSection label="Typography" />
          <TweakSelect label="Display font" value={t.displayFont} options={DISPLAY_FONTS} onChange={(v) => setTweak("displayFont", v)} />
          <TweakSection label="View" />
          <TweakSelect label="Switch view" value={view} options={["home", "properties"]} onChange={(v) => setView(v)} />
        </TweaksPanel>
      )}
    </>
  );
}

// darken/lighten a hex color
function shade(hex, amt) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map(c => c + c).join("") : h, 16);
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  r = Math.max(0, Math.min(255, Math.round(r + r * amt)));
  g = Math.max(0, Math.min(255, Math.round(g + g * amt)));
  b = Math.max(0, Math.min(255, Math.round(b + b * amt)));
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
