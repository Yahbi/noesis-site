// Nav + Footer — one-page, scroll-spy, stone & linen

const SECTIONS = [
  ["about",       "About"],
  ["projects",    "Projects"],
  ["what-we-do",  "What We Do"],
  ["investment",  "Investment"],
  ["management",  "Management"],
  ["inquiries",   "Inquiries"],
];

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
      const base = logo.getBoundingClientRect().left;
      const x1 = (o.left + o.right) / 2 - base;          // start at the O's centre
      const x2 = (e.left + e.right) / 2 - base;          // end at the E's centre (its middle bar)
      bar.style.left = Math.round(x1) + "px";
      bar.style.width = Math.round(x2 - x1) + "px";
      bar.style.right = "auto";
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

function Nav({ active, go }) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [over, setOver] = React.useState(true);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setOver(y < window.innerHeight - 110);   // light text while over the hero film
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const tap = (k) => { go(k); setOpen(false); };
  const cls = `nav ${scrolled ? "nav--scrolled" : ""} ${over && !scrolled ? "nav--over" : ""}`;

  return (
    <header className={cls}>
      <div className="wrap nav__inner u-flex u-between u-center">
        <Logo onClick={() => tap("top")} />

        <nav className="nav__links" aria-label="Primary">
          {SECTIONS.map(([k, label]) => (
            <button key={k} className={active === k ? "is-active" : ""} onClick={() => tap(k)}>{label}</button>
          ))}
          <button onClick={() => tap("inquiries")} className="btn nav__cta">Enquire</button>
        </nav>

        <button className={`nav__burger ${open ? "is-open" : ""}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(o => !o)}>
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={`nav__drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav className="nav__drawer-links" aria-label="Mobile">
          {SECTIONS.map(([k, label], i) => (
            <button key={k} className={active === k ? "is-active" : ""}
              style={{ transitionDelay: open ? `${0.05 + i * 0.04}s` : "0s" }} onClick={() => tap(k)}>
              <span className="nav__drawer-idx">0{i + 1}</span>{label}
            </button>
          ))}
        </nav>
        <div className="nav__drawer-foot">
          <button onClick={() => tap("inquiries")} className="btn" style={{ width: "100%", justifyContent: "center" }}>Make an Enquiry</button>
          <div className="nav__drawer-meta">T (310) 855·3634 · INFO@NOESISUSA.COM</div>
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
              We represent the owner, deliver the vision, and invest <em className="accent" style={{ fontStyle: "italic" }}>alongside.</em>
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
              <button onClick={() => go("inquiries")} className="btn btn--ghost" style={{ alignSelf: "flex-start" }}>Make an Enquiry <span className="arr" /></button>
              <SocialRow size={20} />
            </div>
          </div>
        </div>

        <hr className="divider" style={{ background: "var(--rule)", marginTop: 72, marginBottom: 28 }} />

        <div className="u-flex u-between u-center" style={{ flexWrap: "wrap", gap: 16, fontSize: 12, color: "var(--muted)" }}>
          <CityClocks />
          <div style={{ letterSpacing: ".08em", textTransform: "uppercase", fontSize: 10.5 }}>© 2026 Noesis Group · All rights reserved</div>
          <div className="u-flex u-gap-24" style={{ fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase" }}>
            <a href="#" onClick={(e)=>e.preventDefault()}>Disclosures</a>
            <a href="#" onClick={(e)=>e.preventDefault()}>Privacy</a>
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
