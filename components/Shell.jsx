// Nav + Footer — one-page, scroll-spy, stone & linen

// Multi-page: each entry is a routed view. Development + Investment lead;
// Owner's Rep is the accessory line.
const SECTIONS = [
  ["development", "Development"],
  ["investment",  "Investment"],
  ["properties",  "Portfolio"],
  ["owners-rep",  "Owner's Rep"],
  ["firm",        "Firm"],
  ["inquiries",   "Contact"],      // URL stays /inquiries/ — renaming it would break the sitemap and any shared links
];

// Routes whose visitor is an owner or developer, not capital. The global CTA
// must not pre-receive them as investors.
const OWNER_ROUTES = ["development", "owners-rep"];

const SOCIALS = [
  ["Facebook", "M13 10h3l.5-3H13V5.2c0-.9.2-1.5 1.5-1.5H16V1.1C15.7 1 14.8 1 13.8 1 11.6 1 10 2.3 10 4.9V7H7.5v3H10v8h3z"],
  ["Instagram", "M9.5 2h5A4.5 4.5 0 0 1 19 6.5v5A4.5 4.5 0 0 1 14.5 16h-5A4.5 4.5 0 0 1 5 11.5v-5A4.5 4.5 0 0 1 9.5 2Zm0 1.6A2.9 2.9 0 0 0 6.6 6.5v5A2.9 2.9 0 0 0 9.5 14.4h5a2.9 2.9 0 0 0 2.9-2.9v-5a2.9 2.9 0 0 0-2.9-2.9h-5ZM12 6.6A3.4 3.4 0 1 1 8.6 10 3.4 3.4 0 0 1 12 6.6Zm0 1.6A1.8 1.8 0 1 0 13.8 10 1.8 1.8 0 0 0 12 8.2Zm3.6-2.1a.8.8 0 1 1-.8.8.8.8 0 0 1 .8-.8Z"],
  ["LinkedIn", "M4.5 3A1.5 1.5 0 1 0 4.5 6 1.5 1.5 0 0 0 4.5 3ZM3.3 7.4h2.4V18H3.3V7.4ZM8 7.4h2.3v1.4h.1A2.5 2.5 0 0 1 12.7 7.2c2.5 0 3 1.6 3 3.8V18h-2.4v-3.5c0-.8 0-1.9-1.2-1.9s-1.3 1-1.3 1.9V18H8V7.4Z"],
  ["YouTube", "M19.6 7.2a2 2 0 0 0-1.4-1.4C16.9 5.5 12 5.5 12 5.5s-4.9 0-6.2.3A2 2 0 0 0 4.4 7.2 21 21 0 0 0 4.1 11a21 21 0 0 0 .3 3.8 2 2 0 0 0 1.4 1.4c1.3.3 6.2.3 6.2.3s4.9 0 6.2-.3a2 2 0 0 0 1.4-1.4 21 21 0 0 0 .3-3.8 21 21 0 0 0-.3-3.8ZM10.4 13.3V8.7l4 2.3-4 2.3Z"],
];

const SOCIAL_URLS = {
  Facebook: "https://www.facebook.com/NoesisUSA/",
  Instagram: "https://www.instagram.com/noesisgroup/",
  LinkedIn: "https://www.linkedin.com/company/noesis-group-llc",
  YouTube: "https://www.youtube.com/channel/UC42nmHBPxnuIv8NgzwLyiCw",
};

function SocialRow({ size = 18, color }) {
  return (
    <div className="u-flex u-gap-16">
      {SOCIALS.map(([name, d]) => (
        <a key={name} href={SOCIAL_URLS[name] || "#"} target="_blank" rel="noopener noreferrer" aria-label={`Noesis on ${name}`} className="social">
          <svg width={size} height={size} viewBox="0 0 22 22" fill={color || "currentColor"}><path d={d} /></svg>
        </a>
      ))}
    </div>
  );
}

// The brand mark: a short stroke that bridges the O and the E (riding the E's
// middle bar) — NOT a strike across the whole word. We measure the live glyph
// positions so the segment stays exact at any size and after the font loads.
function Logo({ onClick, className }) {
  const wordRef = React.useRef(null);
  const barRef = React.useRef(null);

  React.useLayoutEffect(() => {
    const word = wordRef.current, bar = barRef.current;
    if (!word || !bar) return;
    const place = () => {
      const node = word.firstChild;
      const logo = word.parentElement;
      if (!node || !logo) return;
      let range;
      try { range = document.createRange(); } catch (e) { return; }
      const rectOf = (i) => { range.setStart(node, i); range.setEnd(node, i + 1); return range.getBoundingClientRect(); };
      const o = rectOf(1);   // O
      const e = rectOf(2);   // E
      if (!o.width || !e.width) return;
      const lr = logo.getBoundingClientRect();
      bar.style.left = Math.round((o.left + o.right) / 2 - lr.left) + "px";          // start at the O's centre
      bar.style.width = Math.round(e.right - (o.left + o.right) / 2) + "px";         // run to the E's right edge (full middle bar)
      bar.style.right = "auto";   // vertical alignment to the E's middle arm is handled in CSS (translateY calc)
    };
    place();
    const raf = requestAnimationFrame(place);
    const onResize = () => place();
    window.addEventListener("resize", onResize);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(place).catch(() => {});
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <button className={`logo ${className || ""}`} aria-label="Noesis — home" onClick={onClick}>
      <span className="logo__word" ref={wordRef}>NOESIS</span>
      <span className="logo__bar" ref={barRef} aria-hidden="true" />
    </button>
  );
}

function Nav({ active, go, setIntent }) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [over, setOver] = React.useState(true);
  const [spy, setSpy] = React.useState(null);      // block currently under the scan line
  const linksRef = React.useRef(null);
  const indRef = React.useRef(null);
  // On a sub-page the bar marks the route; on the gateway it follows the scroll.
  const marker = spy || (SECTIONS.some(([k]) => k === active) ? active : null);

  // The on-dark treatment is only correct when a dark plate is genuinely behind the
  // bar. Deciding it from scroll position alone assumed every page opens on a
  // full-bleed film — but six of the eight open on linen, so the wordmark and the
  // burger were painted bone-on-bone: invisible until the visitor scrolled.
  // Re-runs on `active` because a route change scrolls to top without firing scroll.
  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const hero = document.querySelector("main > section");
      // .shero is the scroll-scrub hero: a sticky full-viewport film, dark for its
      // whole range, so it needs the same on-dark bar treatment as a .cine plate.
      const dark = !!hero && /(^|\s)(cine|shero)(\s|$)/.test(hero.className || "");
      setOver(dark && y < hero.getBoundingClientRect().height - 110);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [active]);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // The burger is hidden above 860px — if the viewport grows while the drawer is
  // open, close it, or the page stays scroll-locked with no way to dismiss.
  React.useEffect(() => {
    if (!open || !window.matchMedia) return;
    const mq = window.matchMedia("(min-width: 861px)");
    const onChange = (e) => { if (e.matches) setOpen(false); };
    if (mq.matches) { setOpen(false); return; }
    mq.addEventListener ? mq.addEventListener("change", onChange) : mq.addListener(onChange);
    return () => { mq.removeEventListener ? mq.removeEventListener("change", onChange) : mq.removeListener(onChange); };
  }, [open]);

  // Escape closes; focus moves into the drawer on open and returns to the burger on close.
  React.useEffect(() => {
    if (!open) return;
    const trigger = document.activeElement;
    const onKey = (e) => { if (e.key === "Escape") { e.preventDefault(); setOpen(false); } };
    window.addEventListener("keydown", onKey);
    // The drawer is `visibility:hidden` until its 0.3s fade begins, so nothing
    // inside it is focusable the instant it opens — retry until focus takes.
    let tries = 0;
    const t = setInterval(() => {
      const first = document.querySelector("#nav-drawer .nav__drawer-links button");
      if (first) {
        first.focus();
        if (document.activeElement === first) { clearInterval(t); return; }
      }
      if (++tries > 20) clearInterval(t);
    }, 40);
    return () => {
      clearInterval(t);
      window.removeEventListener("keydown", onKey);
      if (trigger && trigger.focus) trigger.focus();
    };
  }, [open]);

  // Scroll-spy. Blocks carry data-spy="<route>" (or a comma list, which splits the
  // block's scroll range evenly — the gateway holds both primary pillars). The bar
  // then tracks what you are actually reading instead of sitting on a static route.
  React.useEffect(() => {
    let bands = [];
    const measure = () => {
      bands = [];
      document.querySelectorAll("[data-spy]").forEach((el) => {
        const keys = (el.getAttribute("data-spy") || "").split(",").map((s) => s.trim()).filter(Boolean);
        if (!keys.length) return;
        const r = el.getBoundingClientRect();
        const top = r.top + window.scrollY, slice = r.height / keys.length;
        keys.forEach((k, i) => bands.push({ k, top: top + i * slice, bottom: top + (i + 1) * slice }));
      });
      bands.sort((a, b) => a.top - b.top);
    };
    const onScroll = () => {
      if (!bands.length) { setSpy(null); return; }
      const line = window.scrollY + window.innerHeight * 0.38;
      let hit = null;
      for (const b of bands) {
        if (line >= b.top && line < b.bottom) { hit = b.k; break; }
        if (line >= b.bottom) hit = b.k;          // between blocks: hold the last one passed
      }
      setSpy(hit);
    };
    const onResize = () => { measure(); onScroll(); };
    measure(); onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    // Blocks are revealed on scroll and images settle late, so re-measure briefly.
    const t = setTimeout(onResize, 600), t2 = setTimeout(onResize, 1800);
    return () => {
      clearTimeout(t); clearTimeout(t2);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [active]);

  // Slide the bar to whichever item is marked.
  React.useEffect(() => {
    const place = () => {
      const wrap = linksRef.current, ind = indRef.current;
      if (!wrap || !ind) return;
      const btn = marker ? wrap.querySelector(`button[data-k="${marker}"]`) : null;
      if (!btn || !btn.offsetWidth) { ind.style.opacity = "0"; return; }
      ind.style.opacity = "1";
      ind.style.width = btn.offsetWidth + "px";
      // Ride the text buttons' own baseline — the row is taller than they are
      // because the CTA sets its height, so a fixed bottom would sit too low.
      ind.style.top = (btn.offsetTop + btn.offsetHeight - 1) + "px";
      ind.style.transform = `translateX(${btn.offsetLeft}px)`;
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [marker]);

  const tap = (k) => { go(k); setOpen(false); };
  // "Request an Introduction" is the same promise the home page makes, and there it
  // seeds investor intent. Mirror it so the promise resolves the same way from every
  // page — except on the owner-facing routes, where pre-selecting "Investor" would
  // mis-receive an owner bringing a site or a project.
  const tapIntro = (k) => {
    if (setIntent) setIntent(OWNER_ROUTES.indexOf(active) === -1 ? "investor" : null);
    tap(k);
  };
  // While the drawer is open the bar sits on linen, not on the hero — keeping the
  // on-dark treatment would paint the logo and close button bone-on-bone.
  const cls = `nav ${scrolled ? "nav--scrolled" : ""} ${over && !scrolled && !open ? "nav--over" : ""}`;

  return (
    <header className={cls}>
      <div className="wrap nav__inner u-flex u-between u-center">
        <Logo onClick={() => tap("top")} />

        <nav className="nav__links" aria-label="Primary" ref={linksRef}>
          {/* The bar is one element that slides between items, so it reads as a
              single marker tracking your position rather than six on/off borders.
              aria-current stays bound to the real route — the glide is visual. */}
          <span className="nav__ind" ref={indRef} aria-hidden="true" />
          {SECTIONS.map(([k, label]) => (
            <button key={k} data-k={k} className={marker === k ? "is-active" : ""}
              aria-current={active === k ? "page" : undefined} onClick={() => tap(k)}>{label}</button>
          ))}
          <button onClick={() => tapIntro("inquiries")} className="btn nav__cta">Request an Introduction</button>
        </nav>

        {/* The desktop CTA lives inside .nav__links, which is display:none <=860px,
            so on every phone the highest-value action sat two taps deep. A quiet
            text twin keeps the ask in the bar; hidden while the drawer shows its own. */}
        {!open && (
          <button className="nav__cta-mini" onClick={() => tap("inquiries")}
            aria-label="Inquire — request an introduction"><span>Inquire</span></button>
        )}

        <button className={`nav__burger ${open ? "is-open" : ""}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="nav-drawer" onClick={() => setOpen(o => !o)}>
          <span></span><span></span><span></span>
        </button>
      </div>

      <div id="nav-drawer" className={`nav__drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav className="nav__drawer-links" aria-label="Mobile">
          {SECTIONS.map(([k, label], i) => (
            <button key={k} className={active === k ? "is-active" : ""} aria-current={active === k ? "page" : undefined}
              style={{ transitionDelay: open ? `${0.05 + i * 0.04}s` : "0s" }} onClick={() => tap(k)}>
              <span className="nav__drawer-idx">0{i + 1}</span>{label}
            </button>
          ))}
        </nav>
        <div className="nav__drawer-foot">
          <button onClick={() => tapIntro("inquiries")} className="btn" style={{ width: "100%", justifyContent: "center" }}>Request an Introduction</button>
          <div className="nav__drawer-meta"><a href="tel:+13108553634">T (310) 855·3634</a> · <a href="mailto:info@noesisusa.com">INFO@NOESISUSA.COM</a></div>
          <SocialRow />
        </div>
      </div>
    </header>
  );
}

// Live local time — Beverly Hills and Tel Aviv.
function CityClocks() {
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);
  const at = (tz) => {
    try { return new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: tz }).format(now); }
    catch (e) { return ""; }
  };
  return (
    <div className="clocks">
      <span>Beverly Hills<b>{at("America/Los_Angeles")}</b></span>
      <span>Tel Aviv<b>{at("Asia/Jerusalem")}</b></span>
    </div>
  );
}

function Footer({ go }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="grid-12" style={{ alignItems: "end", rowGap: 40 }}>
          <div className="col-7">
            <Logo className="footer__logo" onClick={() => go("top")} />
            <div className="eyebrow u-mt-24" style={{ color: "var(--muted)" }}><span className="dot" /> Beverly Hills · California · Est. 2009 · International</div>
            <h2 className="h-1 u-mt-24" style={{ maxWidth: "16ch" }}>
              We develop, we invest, and we deliver — <em className="accent" style={{ fontStyle: "italic" }}>alongside.</em>
            </h2>
            <div className="u-flex u-gap-24 u-mt-40" style={{ flexWrap: "wrap" }}>
              {SECTIONS.map(([k, l]) => (
                <button key={k} onClick={() => go(k)} className="link-u" style={{ background: "transparent", border: 0, borderBottom: "1px solid var(--rule)", color: "var(--ink-soft)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", padding: "0 0 3px" }}>{l}</button>
              ))}
            </div>
          </div>
          <div className="col-5">
            <div className="u-flex u-col u-gap-24">
              <div>
                <div className="eyebrow footer__lbl">Inquiries</div>
                <a href="mailto:info@noesisusa.com" className="serif" style={{ fontSize: 24, color: "var(--ink)", fontWeight: 300 }}>info@noesisusa.com</a>
                <div style={{ marginTop: 8, color: "var(--ink-soft)", letterSpacing: ".03em" }}>T (310) 855·3634 &nbsp;·&nbsp; F (424) 282·8414</div>
              </div>
              <button onClick={() => go("inquiries")} className="btn btn--ghost" style={{ alignSelf: "flex-start" }}>Make an Inquiry <span className="arr" /></button>
              <SocialRow size={20} />
            </div>
          </div>
        </div>

        <hr className="divider" style={{ background: "var(--rule)", marginTop: 72, marginBottom: 28 }} />

        <div className="u-flex u-between u-center" style={{ flexWrap: "wrap", gap: 16, fontSize: 12, color: "var(--muted)" }}>
          <CityClocks />
          <div className="label label--sm">© 2026 Noesis Group · All rights reserved</div>
          <div className="u-flex u-gap-24 label label--sm" >
            <span title="Nothing on this site is an offer to sell or a solicitation of an offer to buy any security.">No offer or solicitation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Nav = Nav;
window.Footer = Footer;
window.SocialRow = SocialRow;
window.Logo = Logo;
