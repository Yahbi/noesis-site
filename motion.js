/* ─────────────────────────────────────────────────────────────────────────────
   Noesis — motion layer
   GSAP + ScrollTrigger + Lenis smooth scroll. Plain JS (loads before Babel).
   Progressive enhancement: if GSAP is absent or reduced-motion is on, every
   animated element is shown immediately and nothing is left hidden.
   Public API: window.__motion = { refresh, lenis }
   ───────────────────────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  var REDUCED = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  var NO_HOVER = !!(window.matchMedia && window.matchMedia("(hover: none)").matches);
  var HAS_GSAP = !!(window.gsap && window.ScrollTrigger);
  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;

  var lenis = null;
  var triggers = [];     // page-scoped ScrollTriggers
  var splits = [];       // SplitType instances to revert
  var firstRun = true;

  // Every element the motion system may hide — used to guarantee visibility.
  var REVEAL_SEL = "main .h-display, .reveal, [data-reveal], .tracks > .track, " +
    ".pillars > .pillar, .flow > .flow__step, .rows > .row, .statband > div, " +
    ".cap-grid > .cap, main .grid-12 > article, main .grid-12 > .col-4, " +
    "main .grid-12 > .col-6, .lede, .btn, .body-lg, .eyebrow, .mono";

  // ── Fallback: make sure nothing is ever stuck invisible ──────────────────
  function showEverything() {
    document.documentElement.classList.remove("motion-ready");
    document.querySelectorAll(REVEAL_SEL).forEach(function (el) {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    document.querySelectorAll(".flow__step").forEach(function (s) { s.classList.add("is-in"); });
    // Cinematic motion pieces: never leave a curtain or a hidden headline line stuck.
    document.querySelectorAll(".cine__curtain").forEach(function (c) { if (c.parentNode) c.parentNode.removeChild(c); });
    document.querySelectorAll(".cine__cap").forEach(function (c) { c.style.opacity = "1"; c.style.transform = "none"; });
    document.querySelectorAll(".lx-h .ln > span").forEach(function (s) { s.style.transform = "none"; });
    document.querySelectorAll(".manifesto .w").forEach(function (w) { w.style.opacity = "1"; });
  }
  function killPreloader(instant) {
    var p = document.getElementById("preloader");
    if (!p) return;
    if (instant) { p.parentNode && p.parentNode.removeChild(p); return; }
    p.classList.add("is-done");
    setTimeout(function () { p.parentNode && p.parentNode.removeChild(p); }, 1100);
  }

  if (REDUCED || !HAS_GSAP) {
    // No motion: reveal all content, drop the preloader, expose a no-op API.
    document.addEventListener("DOMContentLoaded", function () { showEverything(); killPreloader(true); });
    window.addEventListener("load", function () { showEverything(); killPreloader(true); });
    window.__motion = { refresh: function () { showEverything(); }, lenis: null };
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // ── Smooth scroll (Lenis) ────────────────────────────────────────────────
  function initLenis() {
    if (lenis || !window.Lenis) return;
    lenis = new window.Lenis({
      lerp: 0.09,
      wheelMultiplier: 1,
      smoothWheel: true,
    });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  // ── Custom cursor ────────────────────────────────────────────────────────
  var cursorReady = false;
  function initCursor() {
    return;   // custom cursor disabled — use the normal system pointer
    /* eslint-disable no-unreachable */
    if (NO_HOVER || cursorReady) return;
    var ring = document.querySelector(".cursor__ring");
    var dot = document.querySelector(".cursor__dot");
    if (!ring || !dot) return;
    cursorReady = true;
    document.documentElement.classList.add("has-cursor");
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });
    var mx = window.innerWidth / 2, my = window.innerHeight / 2;
    var rx = mx, ry = my;
    window.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      gsap.set(dot, { x: mx, y: my });
    });
    gsap.ticker.add(function () {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
      gsap.set(ring, { x: rx, y: ry });
    });
    // Grow over interactive targets (event delegation).
    var sel = "a, button, [data-magnetic], input, textarea, select, .chip, article";
    document.addEventListener("mouseover", function (e) {
      if (e.target.closest && e.target.closest(sel)) document.documentElement.classList.add("cursor-hot");
    });
    document.addEventListener("mouseout", function (e) {
      if (e.target.closest && e.target.closest(sel)) document.documentElement.classList.remove("cursor-hot");
    });
    document.addEventListener("mousedown", function () { document.documentElement.classList.add("cursor-down"); });
    document.addEventListener("mouseup", function () { document.documentElement.classList.remove("cursor-down"); });
  }

  // ── Magnetic buttons ─────────────────────────────────────────────────────
  function bindMagnetic() {
    if (NO_HOVER) return;
    var els = document.querySelectorAll("[data-magnetic]");
    els.forEach(function (el) {
      if (el.__mag) return; el.__mag = true;
      var strength = parseFloat(el.getAttribute("data-magnetic")) || 0.35;
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - (r.left + r.width / 2)) * strength;
        var y = (e.clientY - (r.top + r.height / 2)) * strength;
        gsap.to(el, { x: x, y: y, duration: 0.4, ease: "power3.out" });
      });
      el.addEventListener("mouseleave", function () {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
      });
    });
  }

  // ── Scene teardown ───────────────────────────────────────────────────────
  function clearScene() {
    triggers.forEach(function (t) { t.kill(); });
    triggers = [];
    splits.forEach(function (s) { try { s.revert(); } catch (e) {} });
    splits = [];
  }

  function st(cfg) { var t = ScrollTrigger.create(cfg); triggers.push(t); return t; }

  // ── Reveal helpers ───────────────────────────────────────────────────────
  function revealUp(el, delay) {
    gsap.set(el, { opacity: 0, y: 42 });
    st({
      trigger: el, start: "top 86%", once: true,
      onEnter: function () {
        gsap.to(el, { opacity: 1, y: 0, duration: 1.0, delay: delay || 0, ease: "expo.out" });
      },
    });
  }
  function staggerGroup(container, items, opts) {
    opts = opts || {};
    items.forEach(function (el) { gsap.set(el, { opacity: 0, y: opts.y == null ? 48 : opts.y }); });
    st({
      trigger: container, start: opts.start || "top 80%", once: true,
      onEnter: function () {
        gsap.to(items, { opacity: 1, y: 0, duration: 1.0, ease: "expo.out", stagger: opts.stagger || 0.09 });
        if (opts.onEnter) opts.onEnter();
      },
    });
  }

  // ── Counters ─────────────────────────────────────────────────────────────
  function bindCounters() {
    document.querySelectorAll(".statband .num").forEach(function (el) {
      var raw = el.textContent.trim();
      var m = raw.match(/^(\D*)(\d[\d,]*)(.*)$/);
      if (!m) return;
      var pre = m[1], num = parseInt(m[2].replace(/,/g, ""), 10), post = m[3];
      if (isNaN(num) || num > 200) return;   // skip years like 2009
      var obj = { v: 0 };
      el.textContent = pre + "0" + post;
      st({
        trigger: el, start: "top 90%", once: true,
        onEnter: function () {
          gsap.to(obj, {
            v: num, duration: 1.6, ease: "power2.out",
            onUpdate: function () { el.textContent = pre + Math.round(obj.v) + post; },
          });
        },
      });
    });
  }

  // ── Parallax on imagery (scale headroom prevents edge gaps) ───────────────
  function bindParallax() {
    document.querySelectorAll("[data-parallax]").forEach(function (el) {
      var amt = parseFloat(el.getAttribute("data-parallax")) || 0.14;
      var tw = gsap.fromTo(el, { yPercent: -amt * 50, scale: 1.2 }, {
        yPercent: amt * 50, scale: 1.2, ease: "none",
        scrollTrigger: { trigger: el.closest("section") || el.parentElement || el, start: "top bottom", end: "bottom top", scrub: true },
      });
      if (tw.scrollTrigger) triggers.push(tw.scrollTrigger);
    });
  }

  // ── Manifesto — pinned interlude; words brighten as the visitor scrolls ───
  function bindManifesto() {
    var m = document.querySelector(".manifesto");
    if (!m) return;
    var words = m.querySelectorAll(".w");
    if (!words.length) return;
    var tl = gsap.timeline({
      scrollTrigger: { trigger: m, start: "top top", end: "+=140%", pin: true, scrub: 0.4 },
    });
    tl.to(words, { opacity: 1, stagger: { each: 0.05 }, ease: "none" });
    if (tl.scrollTrigger) triggers.push(tl.scrollTrigger);
  }

  // ── Cinematic image wipe — an ivory curtain slides off each .cine plate ───
  function bindCine() {
    document.querySelectorAll(".cine").forEach(function (c) {
      // The hero plate (contains the page headline) enters via the preloader —
      // no curtain, or it would sit over the film at the moment of arrival.
      if (c.querySelector(".h-display")) return;
      if (c.__cine) return; c.__cine = true;
      var cur = document.createElement("div");
      cur.className = "cine__curtain";
      c.appendChild(cur);
      var cap = c.querySelector(".cine__cap");
      if (cap) gsap.set(cap, { opacity: 0, y: 28 });
      st({
        trigger: c, start: "top 80%", once: true,
        onEnter: function () {
          gsap.to(cur, { yPercent: -100, duration: 1.15, ease: "expo.inOut" });
          if (cap) gsap.to(cap, { opacity: 1, y: 0, duration: 1.0, delay: 0.4, ease: "expo.out" });
        },
      });
      // Safety: if it's already in view and somehow didn't fire, reveal it.
      setTimeout(function () {
        if (c.getBoundingClientRect().top < window.innerHeight) {
          gsap.set(cur, { yPercent: -100 });
          if (cap) gsap.set(cap, { opacity: 1, y: 0 });
        }
      }, 8000);
    });
  }

  // ── Hero intro (first .h-display inside <main>) ───────────────────────────
  // Wrapper-free + no innerHTML rewriting, so it never fights React's DOM and
  // always preserves the gold <em> inside the headline.
  function buildHero(done) {
    var hero = document.querySelector("main .h-display");
    var scope = hero ? hero.closest("section") : null;
    var tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    if (!hero || !scope) { if (done) done(); return tl; }

    var eyebrows = scope.querySelectorAll(".eyebrow, .mono");
    var heroImg = scope.querySelector("img");
    var fades = scope.querySelectorAll("[data-hero-fade], .lede, .btn, .body-lg");
    var lines = hero.classList.contains("lx-h") ? hero.querySelectorAll(".ln > span") : [];

    if (heroImg) gsap.set(heroImg, { scale: 1.22, transformOrigin: "50% 55%" });
    if (eyebrows.length) gsap.set(eyebrows, { opacity: 0, y: 16 });
    if (fades.length) gsap.set(fades, { opacity: 0, y: 26 });
    if (lines.length) gsap.set(lines, { yPercent: 118 });
    else gsap.set(hero, { yPercent: 26, opacity: 0 });

    if (heroImg) tl.to(heroImg, { scale: 1, duration: 2.0 }, 0);
    if (eyebrows.length) tl.to(eyebrows, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 }, 0.15);
    if (lines.length) tl.to(lines, { yPercent: 0, duration: 1.2, stagger: 0.13, ease: "expo.out" }, 0.2);
    else tl.to(hero, { yPercent: 0, opacity: 1, duration: 1.25 }, 0.25);
    if (fades.length) tl.to(fades, { opacity: 1, y: 0, duration: 1.0, stagger: 0.08 }, 0.55);
    if (done) tl.eventCallback("onComplete", done);

    // Fail-safe: never leave the hero stuck hidden, whatever races may occur.
    setTimeout(function () {
      if (lines.length) gsap.set(lines, { yPercent: 0 });
      var all = [hero];
      for (var i = 0; i < eyebrows.length; i++) all.push(eyebrows[i]);
      for (var j = 0; j < fades.length; j++) all.push(fades[j]);
      all.forEach(function (el) {
        if (el && parseFloat(getComputedStyle(el).opacity) < 0.9) gsap.set(el, { opacity: 1, y: 0, yPercent: 0 });
      });
    }, 5600);
    return tl;
  }

  // ── Build everything for the current page ────────────────────────────────
  function buildScene() {
    clearScene();
    if (window.scrollTo) { /* page already reset by app */ }

    // Generic single reveals (class- or attr-based), minus hero scope.
    var heroSection = (function () { var h = document.querySelector("main .h-display"); return h ? h.closest("section") : null; })();
    var singles = document.querySelectorAll(".reveal, [data-reveal]");
    singles.forEach(function (el) {
      if (heroSection && heroSection.contains(el)) return;
      revealUp(el);
    });

    // Component stagger groups.
    var groups = [
      [".tracks", ".track"], [".pillars", ".pillar"], [".flow", ".flow__step"],
      [".rows", ".row"], [".statband", ".statband > div"], [".cap-grid", ".cap"],
    ];
    groups.forEach(function (g) {
      var c = document.querySelector(g[0]); if (!c) return;
      var items = c.querySelectorAll(g[1]); if (!items.length) return;
      var opts = {};
      if (g[0] === ".flow") opts.onEnter = function () {
        c.querySelectorAll(".flow__step").forEach(function (s) { s.classList.add("is-in"); });
      };
      staggerGroup(c, items, opts);
    });

    // Project / strategy / sector cards: stagger any grid that holds <article> or sector cards.
    document.querySelectorAll("main .grid-12").forEach(function (grid) {
      var cards = grid.querySelectorAll(":scope > article, :scope > .col-4, :scope > .col-6");
      if (cards.length >= 2 && grid.querySelector("article, .sector, .thumb, img")) {
        // avoid re-animating text-only two-column intros
        var hasMedia = grid.querySelector("img, .sector, .thumb, article");
        if (hasMedia) staggerGroup(grid, cards, { stagger: 0.08, start: "top 82%" });
      }
    });

    bindCounters();
    bindParallax();
    bindCine();
    bindManifesto();
    bindMagnetic();

    if (firstRun) {
      firstRun = false;
      var tl = buildHero(function () { ScrollTrigger.refresh(); });
      tl.pause();
      runPreloader(function () { tl.play(0); });   // reveal hero as the preloader lifts
    } else {
      buildHero();
      ScrollTrigger.refresh();
    }
  }

  // ── Preloader choreography ───────────────────────────────────────────────
  // The preloader animates and LIFTS via pure CSS (see styles.css), so it always
  // clears — even with frozen rAF or a JS error. Here we only time the hero reveal
  // to the CSS lift and remove the node afterwards. setTimeout fires in any tab.
  function runPreloader(onReveal) {
    var p = document.getElementById("preloader");
    setTimeout(function () { onReveal && onReveal(); }, 1650);
    setTimeout(function () { if (p && p.parentNode) p.parentNode.removeChild(p); }, 2900);
  }

  // ── Boot ─────────────────────────────────────────────────────────────────
  // IMPORTANT: schedule with setTimeout, NOT rAF. requestAnimationFrame is frozen
  // in hidden/backgrounded tabs (incl. embedded preview panes), which would leave
  // every reveal stuck at opacity 0. setTimeout keeps firing, so content is always
  // shown; the cinematic motion simply only runs when the tab is actually visible.
  var pending = false;
  function refresh() {
    if (pending) return; pending = true;
    setTimeout(function () { pending = false; runScene(); }, 60);
  }
  function runScene() {
    clearScene();
    if (REDUCED || !HAS_GSAP || document.hidden) {
      showEverything();
      killPreloader(true);
      return;
    }
    initLenis();   // lazy — only when we actually animate (avoids hijacking scroll in a frozen tab)
    initCursor();
    buildScene();
  }

  function boot() {
    if (document.hidden) { showEverything(); killPreloader(true); }
    // Hard safety net regardless of motion state.
    setTimeout(function () { killPreloader(true); }, 6000);
    setTimeout(function () { if (document.hidden) showEverything(); }, 1200);
  }

  // Never leave content hidden when a tab is backgrounded mid-intro; re-engage
  // motion (once) when a previously hidden tab becomes visible.
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) { showEverything(); }
    else if (firstRun) { runScene(); }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else { boot(); }

  window.__motion = { refresh: refresh, get lenis() { return lenis; } };
})();
