// App shell — MULTI-PAGE: every destination is its own view with a shareable
// hash route, its own document title, and browser back/forward support.
//   #/                     home gateway
//   #/development          Development pillar
//   #/investment           Investment pillar
//   #/portfolio            Portfolio index
//   #/portfolio/<id>       immersive project story
//   /management/           Management (owner's rep, development & asset management;
//                          internal view key stays "owners-rep"; /owners-rep/ redirects)
//   #/firm                 The Firm + founder
//   #/inquiries            Inquiries

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#B02F27",
  "displayFont": "Newsreader"
}/*EDITMODE-END*/;

const ACCENTS = ["#B02F27", "#9C2F28", "#3C3C43", "#55555C", "#63636B"];
const DISPLAY_FONTS = ["Newsreader", "Jost", "Helvetica Neue"];
// Every routable page view (order = nav order).
const PAGE_VIEWS = ["development", "investment", "properties", "owners-rep", "firm", "inquiries", "disclosures"];
const NAV_OFFSET = 72;

const ROUTE_TITLES = {
  home: "Noesis Group — Real Estate Investment & Management",
  development: "Development — From Land to Landmark | Noesis Group",
  investment: "Investment — Capital, Aligned | Noesis Group",
  properties: "Portfolio · The Record | Noesis Group",
  "owners-rep": "Management — Development, Assets & Owners | Noesis Group",
  firm: "The Firm & Founder | Noesis Group",
  inquiries: "Inquiries — Request an Introduction | Noesis Group",
  disclosures: "Disclosures | Noesis Group",
};

// Clean-URL routing. Each route is a REAL static page emitted by build.sh
// (development/index.html, portfolio/casa-mani/index.html, …) carrying its own
// title/meta/canonical, a <base href> and window.__ROUTE. That gives true 200s
// and crawlable per-page metadata; in-app navigation then uses pushState.
const ROUTE_PATHS = {
  home: "", development: "development/", investment: "investment/",
  properties: "portfolio/", "owners-rep": "management/", firm: "firm/", inquiries: "inquiries/",
  disclosures: "disclosures/",
};

// Site root: from <base href> on generated sub-pages, else this document's directory.
const BASE = (function () {
  const b = document.querySelector("base");
  const href = b && b.getAttribute("href");
  if (href) return href;
  return window.location.pathname.replace(/[^/]*$/, "");
})();

// A target may carry a section anchor: "investment#criteria" -> investment/#criteria.
function pathFor(id) {
  if (typeof id === "string" && id.indexOf("#") > 0) {
    const [view, anchor] = id.split("#");
    return pathFor(view) + "#" + anchor;
  }
  if (typeof id === "string" && id.indexOf("story:") === 0) return "portfolio/" + id.slice(6) + "/";
  return ROUTE_PATHS[id] != null ? ROUTE_PATHS[id] : "";
}

// URL segments that name a view other than by its key: the Management practice
// is served at /management/, and its old /owners-rep/ address still resolves.
const SEGMENT_VIEWS = { management: "owners-rep", "owners-rep": "owners-rep" };

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
  if (SEGMENT_VIEWS[seg]) return SEGMENT_VIEWS[seg];
  return ROUTE_PATHS[seg] != null ? seg : "home";
}

// Route curtain timing — must match .rt transitions in signature.css.
const CURTAIN_IN_MS = 560;
const CURTAIN_OUT_MS = 820;

function updateRouteMetadata(route) {
  const meta = window.__NOESIS_META && window.__NOESIS_META[route];
  if (!meta) return;
  document.title = meta.title;
  const set = (selector, attribute, value) => {
    const element = document.querySelector(selector);
    if (element) element.setAttribute(attribute, value);
  };
  set('link[rel="canonical"]', "href", meta.url);
  for (const [key, value] of Object.entries({ title: meta.title, description: meta.description, url: meta.url, image: meta.image, "image:alt": meta.imageAlt })) {
    set(`meta[property="og:${key}"]`, "content", value);
  }
  for (const [key, value] of Object.entries({ title: meta.title, description: meta.description, image: meta.image })) {
    set(`meta[name="twitter:${key}"]`, "content", value);
  }
  set('meta[name="description"]', "content", meta.description);
  const organization = document.querySelector('script[type="application/ld+json"]:not(#route-breadcrumbs)');
  if (organization) {
    try { const schema = JSON.parse(organization.textContent); schema.image = meta.image; organization.textContent = JSON.stringify(schema); } catch (e) {}
  }
  let crumbs = document.getElementById("route-breadcrumbs");
  if (meta.breadcrumbs) {
    if (!crumbs) { crumbs = document.createElement("script"); crumbs.id = "route-breadcrumbs"; crumbs.type = "application/ld+json"; document.head.appendChild(crumbs); }
    crumbs.textContent = JSON.stringify(meta.breadcrumbs);
  } else if (crumbs) crumbs.remove();
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
  const inquirySession = React.useRef({});           // In-memory only; survives internal routes, never reloads.
  const [intent, setIntent] = React.useState(null);    // "investor" | "owner" | null — seeds the inquiry form
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const returnTo = React.useRef("properties");         // where a story's Back button lands
  const lastRoute = React.useRef(null);

  const lenis = () => (window.__motion && window.__motion.lenis) || null;

  const scrollTop = () => {
    const l = lenis();
    if (l && l.scrollTo) l.scrollTo(0, { immediate: true });
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  // Single navigation entry point used by Nav, Footer and in-page CTAs.
  // `silent` applies a route without pushing history (popstate / initial load).
  // Bring a section into view once the destination has rendered and the motion
  // layer has rebound (it refreshes 60 ms after a view change).
  const scrollToAnchor = (anchor, delay) => {
    setTimeout(() => {
      const el = document.getElementById(anchor);
      if (!el) return;
      const l = lenis();
      if (l && l.scrollTo) l.scrollTo(el, { offset: -NAV_OFFSET - 36 });
      else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET - 36, behavior: "smooth" });
    }, delay);
  };

  const goNow = React.useCallback((rawId, silent) => {
    // "investment#criteria": the view, then a section within it.
    let id = rawId, anchor = null;
    if (typeof rawId === "string" && rawId.indexOf("#") > 0) [id, anchor] = rawId.split("#");
    const target = (id === "top" || id === "hero") ? "home" : id;
    if (!silent) { try { history.pushState(null, "", BASE + pathFor(target) + (anchor ? "#" + anchor : "")); } catch (e) {} }
    const settle = (sameView) => {
      if (anchor) { if (!sameView) scrollTop(); scrollToAnchor(anchor, sameView ? 0 : 320); }
      else scrollTop();
    };

    if (typeof id === "string" && id.indexOf("story:") === 0) {
      if (view !== "story") returnTo.current = (view === "home" ? "home" : "properties");
      setStory(id.slice(6));
      setView("story");
      scrollTop();
      return;
    }
    if (id === "top" || id === "hero" || id === "home") { const same = view === "home"; setView("home"); settle(same); return; }
    if (PAGE_VIEWS.indexOf(id) !== -1) { const same = view === id; setView(id); settle(same); return; }
    // Unknown target (legacy in-page anchor) — fall back to the gateway.
    setView("home"); scrollTop();
  }, [view]);

  // Route curtain. A user-initiated route change is covered by a night panel
  // carrying the wordmark: the view swaps and scrolls to top underneath it, then
  // it lifts away. Plain timers drive every step, so with frozen transitions (a
  // hidden tab) the route still changes and the panel still ends hidden; reduced
  // motion, history navigation and the initial load skip it entirely.
  const curtainRef = React.useRef(null);
  const curtainBusy = React.useRef(false);
  const go = React.useCallback((id, silent) => {
    const el = curtainRef.current;
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // A section on the page already open is a scroll, not a page change: no curtain.
    const sameView = typeof id === "string" && id.indexOf("#") > 0 && id.split("#")[0] === view;
    if (silent || !el || document.hidden || reduced || sameView) { goNow(id, silent); return; }
    if (curtainBusy.current) return;
    curtainBusy.current = true;
    el.classList.remove("is-out");
    el.classList.add("is-in");
    setTimeout(() => {
      goNow(id, silent);
      el.classList.remove("is-in");
      el.classList.add("is-out");
      setTimeout(() => { el.classList.remove("is-out"); curtainBusy.current = false; }, CURTAIN_OUT_MS);
    }, CURTAIN_IN_MS);
  }, [goNow, view]);

  // Arriving on a URL with a section anchor (#criteria, #record…) — the static
  // page loads at the top, so take the visitor to the section once rendered.
  React.useEffect(() => {
    const h = window.location.hash || "";
    if (/^#[a-z][\w-]*$/i.test(h)) scrollToAnchor(h.slice(1), 900);
  }, []);

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
    const route = view === "story" ? "story:" + story : view;
    updateRouteMetadata(route);
    const main = document.querySelector("main");
    if (main) {
      main.id = "main-content";
      main.tabIndex = -1;
      if (lastRoute.current !== null && lastRoute.current !== route) main.focus({ preventScroll: true });
    }
    lastRoute.current = route;
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
        : view === "inquiries" ? <Inquiries intent={intent} go={go} session={inquirySession} />
        : view === "disclosures" ? <Disclosures go={go} />
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
      <div className="rt" ref={curtainRef} aria-hidden="true">
        <Logo decorative className="rt__logo" />
      </div>

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
