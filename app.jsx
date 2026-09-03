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
  "accent": "#B02F27",
  "displayFont": "Newsreader"
}/*EDITMODE-END*/;

const ACCENTS = ["#B02F27", "#9C2F28", "#3C3C43", "#55555C", "#63636B"];
const DISPLAY_FONTS = ["Newsreader", "Jost", "Helvetica Neue"];
// Every routable page view (order = nav order).
const PAGE_VIEWS = ["development", "investment", "properties", "owners-rep", "firm", "inquiries"];
const NAV_OFFSET = 72;

const ROUTE_TITLES = {
  home: "Noesis Group — Real Estate Development & Investment | Owner's Representation",
  development: "Development — From Land to Landmark | Noesis Group",
  investment: "Investment — Capital, Aligned | Noesis Group",
  properties: "Portfolio · The Record | Noesis Group",
  "owners-rep": "Owner's Representation & Project Management | Noesis Group",
  firm: "The Firm & Founder | Noesis Group",
  inquiries: "Inquiries — Request an Introduction | Noesis Group",
};

// Clean-URL routing. Each route is a REAL static page emitted by build.sh
// (development/index.html, portfolio/casa-mani/index.html, …) carrying its own
// title/meta/canonical, a <base href> and window.__ROUTE. That gives true 200s
// and crawlable per-page metadata; in-app navigation then uses pushState.
const ROUTE_PATHS = {
  home: "", development: "development/", investment: "investment/",
  properties: "portfolio/", "owners-rep": "owners-rep/", firm: "firm/", inquiries: "inquiries/",
};

// Site root: from <base href> on generated sub-pages, else this document's directory.
const BASE = (function () {
  const b = document.querySelector("base");
  const href = b && b.getAttribute("href");
  if (href) return href;
  return window.location.pathname.replace(/[^/]*$/, "");
})();

function pathFor(id) {
  if (typeof id === "string" && id.indexOf("story:") === 0) return "portfolio/" + id.slice(6) + "/";
  return ROUTE_PATHS[id] != null ? ROUTE_PATHS[id] : "";
}

// Parse a location into a view id ("development", "story:casa-mani", "home").
function routeFromLocation() {
  // A legacy #/ deep link wins over the page's own default route, so old shared
  // links still land correctly; otherwise use the injected route, then the path.
  const h = window.location.hash || "";
  const hm = h.match(/^#\/([^/]*)(?:\/(.+?))?\/?$/);
  if (!hm && window.__ROUTE) return window.__ROUTE;                // injected by the static page
  const p = window.location.pathname;
  const rel = (p.indexOf(BASE) === 0 ? p.slice(BASE.length) : p).replace(/^\/+|index\.html$/g, "");
  const src = hm ? [hm[1], hm[2]] : rel.replace(/\/+$/, "").split("/");
  const seg = src[0], sub = src[1];
  if (!seg) return "home";
  if (seg === "portfolio") return sub ? "story:" + sub : "properties";
  return ROUTE_PATHS[seg] != null ? seg : "home";
}

function App() {
  const [view, setView] = React.useState(() => {
    const r = routeFromLocation();
    return r.indexOf("story:") === 0 ? "story" : r;
  });
  const [story, setStory] = React.useState(() => {     // active project id for the story view
    const r = routeFromLocation();
    return r.indexOf("story:") === 0 ? r.slice(6) : null;
  });
  const [intent, setIntent] = React.useState(null);    // "investor" | "owner" | null — seeds the inquiry form
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const returnTo = React.useRef("properties");         // where a story's Back button lands

  const lenis = () => (window.__motion && window.__motion.lenis) || null;

  const scrollTop = () => {
    const l = lenis();
    if (l && l.scrollTo) l.scrollTo(0, { immediate: true });
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  // Single navigation entry point used by Nav, Footer and in-page CTAs.
  // `silent` applies a route without pushing history (popstate / initial load).
  const go = React.useCallback((id, silent) => {
    const target = (id === "top" || id === "hero") ? "home" : id;
    if (!silent) { try { history.pushState(null, "", BASE + pathFor(target)); } catch (e) {} }

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

  // Back / forward.
  const applyRoute = React.useCallback(() => {
    window.__ROUTE = null;              // only valid for the initial static page load
    go(routeFromLocation(), true);
  }, [go]);

  React.useEffect(() => {
    window.addEventListener("popstate", applyRoute);
    return () => window.removeEventListener("popstate", applyRoute);
  }, [applyRoute]);

  // Legacy #/ deep links → upgrade to the clean path, in place.
  React.useEffect(() => {
    const h = window.location.hash;
    if (h && /^#\//.test(h)) {
      const r = routeFromLocation();
      try { history.replaceState(null, "", BASE + pathFor(r)); } catch (e) {}
      go(r, true);
    }
  }, []);

  // Theme tokens (accent + display font) live as CSS custom properties.
  React.useEffect(() => {
    // Defer to the stylesheet while the panel is on the brand default. Setting
    // this unconditionally made styles.css's --accent dead code — whatever it
    // said, the inline value on <html> won. Same trap --serif was in.
    if (t.accent === TWEAK_DEFAULTS.accent) document.documentElement.style.removeProperty("--accent");
    else document.documentElement.style.setProperty("--accent", t.accent);
    // Only derive --accent-deep when the designer is experimenting with a non-brand
    // accent; for the brand bronze, let styles.css own the AA-checked #7A5236 so the
    // stylesheet is not lying about what actually renders.
    if (t.accent === TWEAK_DEFAULTS.accent) document.documentElement.style.removeProperty("--accent-deep");
    else document.documentElement.style.setProperty("--accent-deep", shade(t.accent, -0.18));
    // Same rule as --accent-deep above: while the panel is on the brand default,
    // let styles.css own the display face. This inline style is on <html> and beats
    // the stylesheet unconditionally, so setting it always made the --serif token in
    // styles.css dead code — whatever it said, a sans stack rendered. It also hard-
    // coded a sans-serif fallback chain, which is wrong for a serif display face.
    if (t.displayFont === TWEAK_DEFAULTS.displayFont) {
      document.documentElement.style.removeProperty("--serif");
    } else {
      document.documentElement.style.setProperty(
        "--serif", `"${t.displayFont}", "Iowan Old Style", Georgia, serif`);
    }
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

  // Projects routes straight through; only "home" needs the explicit branch
  // because story views live under the same setter.
  const projectsNav = React.useCallback((p) => {
    if (p === "home") return go("home");
    go(p);
  }, [go]);

  const active = view === "story" ? "properties" : view;

  return (
    <>
      <Nav active={active} go={go} setIntent={setIntent} />

      {view === "home" ? <Home go={go} setIntent={setIntent} />
        : view === "development" ? <Development go={go} />
        : view === "investment" ? <Investment go={go} setIntent={setIntent} />
        : view === "owners-rep" ? <Approach go={go} setIntent={setIntent} />
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
        ) : <Projects setPage={projectsNav} setIntent={setIntent} />}

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
