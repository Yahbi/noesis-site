// App shell — MULTI-PAGE: every destination is its own view with a shareable
// hash route, its own document title, and browser back/forward support.
//   #/                     home gateway
//   #/development          Development pillar
//   #/investment           Investment pillar
//   #/portfolio            Portfolio index
//   #/portfolio/<id>       immersive project story
//   #/owners-rep           Owner's Representation (accessory)
//   #/firm                 The Firm + founder
//   #/inquiries            Inquiries

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#9A6A3E",
  "displayFont": "Jost"
}/*EDITMODE-END*/;

const ACCENTS = ["#9A6A3E", "#7A5236", "#B04A28", "#6E5C3E", "#8A8270"];
const DISPLAY_FONTS = ["Jost", "Fraunces", "Helvetica Neue"];
// Every routable page view (order = nav order).
const PAGE_VIEWS = ["development", "investment", "properties", "owners-rep", "firm", "inquiries"];
const NAV_OFFSET = 72;

const ROUTE_TITLES = {
  home: "Noesis Group — Real Estate Development & Investment | Owner's Representation",
  development: "Development — From Land to Landmark | Noesis Group",
  investment: "Investment — Capital, Aligned | Noesis Group",
  properties: "Portfolio · The Delivered Record | Noesis Group",
  "owners-rep": "Owner's Representation & Project Management | Noesis Group",
  firm: "The Firm & Founder | Noesis Group",
  inquiries: "Inquiries — Request an Introduction | Noesis Group",
};

function App() {
  const [view, setView] = React.useState("home");
  const [story, setStory] = React.useState(null);      // active project id for the story view
  const [intent, setIntent] = React.useState(null);    // "investor" | null — seeds the enquiry form
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const returnTo = React.useRef("properties");         // where a story's Back button lands

  const lenis = () => (window.__motion && window.__motion.lenis) || null;

  const scrollTop = () => {
    const l = lenis();
    if (l && l.scrollTo) l.scrollTo(0, { immediate: true });
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  // Shareable hash addresses for every destination.
  const hashFor = (id) => {
    if (typeof id === "string" && id.indexOf("story:") === 0) return "#/portfolio/" + id.slice(6);
    if (id === "properties") return "#/portfolio";
    if (id === "top" || id === "hero" || id === "home") return "#/";
    return "#/" + id;
  };

  // Single navigation entry point used by Nav, Footer and in-page CTAs.
  // `silent` applies a route without pushing history (popstate / initial load).
  const go = React.useCallback((id, silent) => {
    if (!silent) { try { history.pushState(null, "", hashFor(id)); } catch (e) {} }

    if (typeof id === "string" && id.indexOf("story:") === 0) {
      if (view !== "story") returnTo.current = (view === "home" ? "home" : "properties");
      setStory(id.slice(6));
      setView("story");
      scrollTop();
      return;
    }
    if (id === "top" || id === "hero" || id === "home") { setView("home"); scrollTop(); return; }
    if (PAGE_VIEWS.indexOf(id) !== -1) { setView(id); scrollTop(); return; }
    // Unknown target (legacy in-page anchor) — fall back to the gateway.
    setView("home"); scrollTop();
  }, [view]);

  // Deep links + back/forward.
  const applyHash = React.useCallback(() => {
    const h = window.location.hash || "";
    const m = h.match(/^#\/([^/]*)(?:\/(.+))?$/);
    if (!m || !m[1]) { go("home", true); return; }
    const seg = m[1], sub = m[2];
    if (seg === "portfolio") return go(sub ? "story:" + sub : "properties", true);
    if (PAGE_VIEWS.indexOf(seg) !== -1) return go(seg, true);
    go("home", true);
  }, [go]);

  React.useEffect(() => {
    window.addEventListener("popstate", applyHash);
    return () => window.removeEventListener("popstate", applyHash);
  }, [applyHash]);

  // Honor a deep link on first load.
  React.useEffect(() => {
    if (window.location.hash && window.location.hash !== "#/") {
      const id = setTimeout(applyHash, 120);
      return () => clearTimeout(id);
    }
  }, []);

  // Theme tokens (accent + display font) live as CSS custom properties.
  React.useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
    document.documentElement.style.setProperty("--accent-deep", shade(t.accent, -0.18));
    const stack = `"${t.displayFont}", "Helvetica Neue", Arial, sans-serif`;
    document.documentElement.style.setProperty("--serif", stack);
  }, [t.accent, t.displayFont]);

  // After a view switch: rebind motion and set this destination's title.
  React.useEffect(() => {
    if (window.__motion) window.__motion.refresh();
    if (view === "story" && story && typeof PROJECTS !== "undefined" && PROJECTS[story]) {
      document.title = PROJECTS[story].name + " · Portfolio | Noesis Group";
    } else {
      document.title = ROUTE_TITLES[view] || ROUTE_TITLES.home;
    }
  }, [view, story]);

  // Map legacy page calls inside Projects onto the router.
  const projectsNav = React.useCallback((p) => {
    if (p === "services") return go("owners-rep");
    if (p === "home") return go("home");
    go(p);
  }, [go]);

  const active = view === "story" ? "properties" : view;

  return (
    <>
      <Nav active={active} go={go} />

      {view === "home" ? <Home go={go} setIntent={setIntent} />
        : view === "development" ? <Development go={go} />
        : view === "investment" ? <Investment go={go} setIntent={setIntent} />
        : view === "owners-rep" ? <Approach go={go} />
        : view === "firm" ? <Firm go={go} />
        : view === "inquiries" ? <Inquiries intent={intent} />
        : view === "story" ? (
          <>
            <button className="back-home" onClick={() => go(returnTo.current === "home" ? "home" : "properties")}
              aria-label={returnTo.current === "home" ? "Back to home" : "Back to portfolio"}>
              <span className="back-home__arr" aria-hidden="true" /> Back
            </button>
            <ProjectStory key={story} project={typeof PROJECTS !== "undefined" ? PROJECTS[story] : null} go={go} />
          </>
        ) : <Projects setPage={projectsNav} />}

      <Footer go={go} />

      {/* Internal design panel — only with ?tweaks=1, never for visitors */}
      {/[?&]tweaks=1/.test(window.location.search) && (
        <TweaksPanel>
          <TweakSection label="Accent" />
          <TweakColor label="Accent color" value={t.accent} options={ACCENTS} onChange={(v) => setTweak("accent", v)} />
          <TweakSection label="Typography" />
          <TweakSelect label="Display font" value={t.displayFont} options={DISPLAY_FONTS} onChange={(v) => setTweak("displayFont", v)} />
          <TweakSection label="View" />
          <TweakSelect label="Switch view" value={view} options={["home"].concat(PAGE_VIEWS)} onChange={(v) => go(v)} />
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
