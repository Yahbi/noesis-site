// Nav + Footer — dark cinematic, 5-page spec

const NAV_LINKS = [
  ["home",       "Home"],
  ["services",   "Services"],
  ["investment", "Investment"],
  ["projects",   "Properties"],
  ["about",      "About"],
  ["contact",    "Contact"],
];

const SOCIALS = [
  ["Facebook", "M13 10h3l.5-3H13V5.2c0-.9.2-1.5 1.5-1.5H16V1.1C15.7 1 14.8 1 13.8 1 11.6 1 10 2.3 10 4.9V7H7.5v3H10v8h3z"],
  ["Instagram", "M9.5 2h5A4.5 4.5 0 0 1 19 6.5v5A4.5 4.5 0 0 1 14.5 16h-5A4.5 4.5 0 0 1 5 11.5v-5A4.5 4.5 0 0 1 9.5 2Zm0 1.6A2.9 2.9 0 0 0 6.6 6.5v5A2.9 2.9 0 0 0 9.5 14.4h5a2.9 2.9 0 0 0 2.9-2.9v-5a2.9 2.9 0 0 0-2.9-2.9h-5ZM12 6.6A3.4 3.4 0 1 1 8.6 10 3.4 3.4 0 0 1 12 6.6Zm0 1.6A1.8 1.8 0 1 0 13.8 10 1.8 1.8 0 0 0 12 8.2Zm3.6-2.1a.8.8 0 1 1-.8.8.8.8 0 0 1 .8-.8Z"],
  ["LinkedIn", "M4.5 3A1.5 1.5 0 1 0 4.5 6 1.5 1.5 0 0 0 4.5 3ZM3.3 7.4h2.4V18H3.3V7.4ZM8 7.4h2.3v1.4h.1A2.5 2.5 0 0 1 12.7 7.2c2.5 0 3 1.6 3 3.8V18h-2.4v-3.5c0-.8 0-1.9-1.2-1.9s-1.3 1-1.3 1.9V18H8V7.4Z"],
  ["YouTube", "M19.6 7.2a2 2 0 0 0-1.4-1.4C16.9 5.5 12 5.5 12 5.5s-4.9 0-6.2.3A2 2 0 0 0 4.4 7.2 21 21 0 0 0 4.1 11a21 21 0 0 0 .3 3.8 2 2 0 0 0 1.4 1.4c1.3.3 6.2.3 6.2.3s4.9 0 6.2-.3a2 2 0 0 0 1.4-1.4 21 21 0 0 0 .3-3.8 21 21 0 0 0-.3-3.8ZM10.4 13.3V8.7l4 2.3-4 2.3Z"],
];

function SocialRow({ size = 18, color }) {
  return (
    <div className="u-flex u-gap-16">
      {SOCIALS.map(([name, d]) => (
        <a key={name} href="#" onClick={(e) => e.preventDefault()} aria-label={name} className="social">
          <svg width={size} height={size} viewBox="0 0 22 22" fill={color || "currentColor"}><path d={d} /></svg>
        </a>
      ))}
    </div>
  );
}

function Nav({ page, setPage }) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (k) => { setPage(k); setOpen(false); };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="wrap nav__inner">
        <button className="nav__brand-btn" aria-label="Noesis Group — home" onClick={() => go("home")}>
          <span className="nav__logo">NOESIS</span>
          <span className="nav__logo-dot"></span>
          <span className="mono nav__brand-sub">Group</span>
        </button>

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map(([k, label]) => (
            <button key={k} className={page === k ? "is-active" : ""} onClick={() => go(k)}>{label}</button>
          ))}
          <button onClick={() => go("contact")} className="btn nav__cta">Enquire <span className="arr" /></button>
        </nav>

        <button className={`nav__burger ${open ? "is-open" : ""}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(o => !o)}>
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={`nav__drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav className="nav__drawer-links" aria-label="Mobile">
          {NAV_LINKS.map(([k, label], i) => (
            <button key={k} className={page === k ? "is-active" : ""}
              style={{ transitionDelay: open ? `${0.05 + i * 0.04}s` : "0s" }} onClick={() => go(k)}>
              <span className="mono nav__drawer-idx">0{i + 1}</span>{label}
            </button>
          ))}
        </nav>
        <div className="nav__drawer-foot">
          <button onClick={() => go("contact")} className="btn" style={{ width: "100%", justifyContent: "center" }}>
            Start a Conversation <span className="arr" />
          </button>
          <div className="mono nav__drawer-meta">T (310) 855·3634 · INFO@NOESISUSA.COM</div>
          <SocialRow />
        </div>
      </div>
    </header>
  );
}

function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="grid-12" style={{ alignItems: "end", rowGap: 40 }}>
          <div className="col-7">
            <div className="eyebrow" style={{ color: "var(--muted)" }}><span className="dot" /> Beverly Hills · California · Est. 2009 · International</div>
            <div className="h-display" style={{ marginTop: 24 }}>
              Represent. Deliver.<br /><em style={{ color: "var(--accent)" }}>Invest.</em>
            </div>
            <div className="u-flex u-gap-24 u-mt-40" style={{ flexWrap: "wrap" }}>
              {[["services", "Services"], ["investment", "Investment"], ["projects", "Properties"], ["about", "About"], ["contact", "Contact"]].map(([k, l]) => (
                <button key={k} onClick={() => setPage(k)} className="link-u" style={{ background: "transparent", border: 0, borderBottom: "1px solid var(--rule)", color: "var(--ink-soft)", fontSize: 13, letterSpacing: ".02em", padding: "0 0 3px" }}>{l}</button>
              ))}
            </div>
          </div>
          <div className="col-5">
            <div className="u-flex u-col u-gap-24">
              <div>
                <div className="mono footer__lbl">Inquiries</div>
                <a href="mailto:info@noesisusa.com" className="serif" style={{ fontSize: 24, color: "var(--bone)" }}>INFO@NOESISUSA.COM</a>
                <div style={{ marginTop: 8, color: "var(--ink-soft)", letterSpacing: ".03em" }}>T (310) 855·3634 &nbsp;·&nbsp; F (424) 282·8414</div>
              </div>
              <button onClick={() => setPage("contact")} className="btn btn--ghost" style={{ alignSelf: "flex-start" }}>
                Start a Conversation <span className="arr" />
              </button>
              <SocialRow size={20} />
            </div>
          </div>
        </div>

        <hr className="divider" style={{ background: "var(--rule)", marginTop: 72, marginBottom: 28 }} />

        <div className="u-flex u-between u-center" style={{ flexWrap: "wrap", gap: 16, fontSize: 12, color: "var(--muted)" }}>
          <div className="mono" style={{ letterSpacing: ".06em" }}>COPYRIGHT © 2026 NOESIS GROUP · ALL RIGHTS RESERVED</div>
          <div className="u-flex u-gap-24">
            <a href="#" onClick={(e)=>e.preventDefault()}>Disclosures</a>
            <a href="#" onClick={(e)=>e.preventDefault()}>Privacy</a>
            <a href="#" onClick={(e)=>e.preventDefault()}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Nav = Nav;
window.Footer = Footer;
window.SocialRow = SocialRow;
