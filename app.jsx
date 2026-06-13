// App shell — 5-page router + tweaks

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#A93B30",
  "displayFont": "Fraunces"
}/*EDITMODE-END*/;

const ACCENTS = ["#A93B30", "#8A2C24", "#B5894E", "#3A4A3A", "#EFE9DC"];
const DISPLAY_FONTS = ["Fraunces", "Georgia", "Times New Roman"];
const PAGES = ["home", "services", "investment", "projects", "about", "contact"];

function App() {
  const [page, setPageRaw] = React.useState(() => {
    const h = (window.location.hash || "").replace("#", "");
    return PAGES.includes(h) ? h : "home";
  });
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const pageRef = React.useRef(page);
  React.useEffect(() => { pageRef.current = page; }, [page]);

  // Navigate with a cinematic ivory wipe between routes (instant if motion is off).
  const setPage = React.useCallback((p) => {
    if (p === pageRef.current) return;
    const commit = () => {
      setPageRaw(p);
      if (window.location.hash.replace("#", "") !== p) window.history.pushState(null, "", "#" + p);
    };
    const g = window.gsap;
    const panel = document.getElementById("route-wipe");
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!g || !panel || reduce || document.hidden) { commit(); return; }
    const mark = panel.querySelector(".route-wipe__mark");
    panel.classList.add("is-active");
    g.timeline()
      .set(panel, { scaleY: 0, transformOrigin: "50% 100%" })
      .set(mark, { opacity: 0, y: 14 })
      .to(panel, { scaleY: 1, duration: 0.46, ease: "power3.inOut" })
      .to(mark, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, "-=0.22")
      .add(commit)
      .to(mark, { opacity: 0, duration: 0.24, ease: "power2.in" }, "+=0.06")
      .set(panel, { transformOrigin: "50% 0%" })
      .to(panel, { scaleY: 0, duration: 0.56, ease: "power3.inOut" }, "-=0.04")
      .add(function () { panel.classList.remove("is-active"); });
  }, []);
  React.useEffect(() => {
    const onPop = () => {
      const h = (window.location.hash || "").replace("#", "");
      setPageRaw(PAGES.includes(h) ? h : "home");
    };
    window.addEventListener("hashchange", onPop);
    window.addEventListener("popstate", onPop);
    return () => { window.removeEventListener("hashchange", onPop); window.removeEventListener("popstate", onPop); };
  }, []);

  React.useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
    document.documentElement.style.setProperty("--accent-deep", shade(t.accent, -0.18));
    document.documentElement.style.setProperty("--serif", `"${t.displayFont}", "Georgia", "Times New Roman", serif`);
  }, [t.accent, t.displayFont]);

  React.useEffect(() => {
    if (window.__motion && window.__motion.lenis) window.__motion.lenis.scrollTo(0, { immediate: true });
    else window.scrollTo({ top: 0, behavior: "auto" });
  }, [page]);

  // Hand off to the motion layer (GSAP/ScrollTrigger) after each page render so
  // freshly mounted nodes get their reveals, parallax and hero intro.
  React.useEffect(() => {
    if (window.__motion) window.__motion.refresh();
  }, [page]);

  let body = null;
  if (page === "home")       body = <Home       setPage={setPage} />;
  if (page === "services")   body = <Services   setPage={setPage} />;
  if (page === "investment") body = <Investment setPage={setPage} />;
  if (page === "projects")   body = <Projects   setPage={setPage} />;
  if (page === "about")      body = <About      setPage={setPage} />;
  if (page === "contact")    body = <Contact    setPage={setPage} />;

  return (
    <>
      <Nav page={page} setPage={setPage} />
      {body}
      <Footer setPage={setPage} />

      <div id="route-wipe" className="route-wipe" aria-hidden="true">
        <div className="route-wipe__mark">N<i>.</i></div>
      </div>

      {/* Internal design panel — only with ?tweaks=1, never for visitors */}
      {/[?&]tweaks=1/.test(window.location.search) && (
        <TweaksPanel>
          <TweakSection label="Accent" />
          <TweakColor label="Accent color" value={t.accent} options={ACCENTS} onChange={(v) => setTweak("accent", v)} />
          <TweakSection label="Typography" />
          <TweakSelect label="Display font" value={t.displayFont} options={DISPLAY_FONTS} onChange={(v) => setTweak("displayFont", v)} />
          <TweakSection label="Navigate" />
          <TweakSelect label="Jump to page" value={page} options={PAGES} onChange={(v) => setPage(v)} />
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
