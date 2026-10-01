// Inquiries — the contact destination. Holds the dual-intent form (investor /
// owner) and the office details. Split out of the one-pager in the multi-page pass.

// ─────────────────────────────────────────────────────────────────────────────
// LEAD DELIVERY — the single most valuable action on this site.
//
// While INQ_ENDPOINT is empty the form falls back to opening the visitor's mail
// client. That fallback is unreliable: phones without a configured mail app and
// browser-based webmail users often get NOTHING, so real inquiries are lost.
//
// TO GO LIVE: create a free form endpoint (formspree.io or usebasin.com), point
// it at info@noesisusa.com, and paste the URL below. Nothing else changes —
// submissions then POST directly and the visitor sees a proper confirmation.
//   e.g. const INQ_ENDPOINT = "https://formspree.io/f/xxxxxxxx";
// ─────────────────────────────────────────────────────────────────────────────
const INQ_ENDPOINT = "";

// Three readers arrive here, and each wants something different from the firm.
const INQ_ROUTES = [
  ["Investors & family offices", "investment", "city-night",
    "Capital alongside the operator. Read the strategies, the criteria and the record, then ask for a confidential introduction."],
  ["Owners & developers", "owners-rep#mandates", "sf-site-03",
    "Development management from site to completion, representation on a project you own, or management of a building once it is delivered."],
  ["Brokers & sellers", "investment#criteria", "geo-beverly",
    "A site or a building that fits the brief. Product, activity, hold and markets are stated plainly; we would rather hear early."],
];

// What happens after the form is sent — stated, so nobody has to guess.
const INQ_STEPS = [
  ["01", "We read it", "Every inquiry is read by the principal, not a queue, and answered within one business day."],
  ["02", "A first conversation", "A call, or a meeting at the Beverly Hills office, to understand what you are looking for and whether we are the right firm for it."],
  ["03", "Then the detail", "Where there is a fit, we share specifics. For investors, offering material is provided only to those eligible to receive it, and only through the offering documents."],
];

// Local time in every market the firm builds in — the office, and the rest.
const INQ_CLOCKS = [
  ["Beverly Hills", "Head office", "America/Los_Angeles"],
  ["Miami Beach", "Market", "America/New_York"],
  ["Marbella", "Market", "Europe/Madrid"],
  ["Tel Aviv", "Market", "Asia/Jerusalem"],
];

function LocalTimes() {
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
    <div className="ltimes">
      {INQ_CLOCKS.map(([city, role, tz]) => (
        <div key={city} className="ltimes__c">
          <span className="ltimes__t">{at(tz)}</span>
          <span className="ltimes__city">{city}</span>
          <span className="ltimes__role">{role}</span>
        </div>
      ))}
    </div>
  );
}

function Inquiries({ intent, go }) {
  return (
    <main className="page-enter">
      <section style={{ paddingTop: "clamp(120px, 12vh, 150px)", paddingBottom: "clamp(28px, 4vw, 48px)" }}>
        <div className="wrap grid-12" style={{ gap: 56, alignItems: "start" }}>
          <div className="col-5 reveal">
            <div className="eyebrow"><span className="dot" /> Inquiries</div>
            <h1 className="h-display lx-h u-mt-24" style={{ maxWidth: "12ch" }}><span className="ln"><span>Let's begin.</span></span></h1>
            <p className="lede u-mt-24" style={{ maxWidth: "44ch" }}>
              Whether you have capital to deploy or a project to deliver, we welcome a confidential
              conversation. Every inquiry is reviewed personally by our principal, who responds within one
              business day.
            </p>
            <hr className="hair" style={{ margin: "clamp(32px,4vw,48px) 0 0", maxWidth: 280 }} />

            <div className="u-mt-40">
              <div className="label">Office</div>
              <div className="serif u-mt-8" style={{ fontSize: 21, color: "var(--ink)", lineHeight: 1.35 }}>8383 Wilshire Blvd<br />Suite 740<br />Beverly Hills, CA 90211</div>
            </div>
            <div className="u-flex u-gap-40 u-mt-40" style={{ flexWrap: "wrap" }}>
              <div>
                <div className="label">Telephone</div>
                <a href="tel:+13108553634" className="serif u-mt-8 inq-link" style={{ fontSize: 19, display: "block" }}>T (310) 855 · 3634</a>
                <div className="body" style={{ color: "var(--muted)", fontSize: 14 }}>F (424) 282 · 8414</div>
              </div>
              <div>
                <div className="label">Email</div>
                <a href="mailto:info@noesisusa.com" className="serif u-mt-8 inq-link" style={{ fontSize: 19, display: "block" }}>info@noesisusa.com</a>
              </div>
            </div>
          </div>
          <div className="col-7 reveal">
            <InquiryForm intent={intent} />
          </div>
        </div>
      </section>

      {/* WHO TO TALK TO — three readers, three doors */}
      <section className="section">
        <div className="wrap">
          <div className="grid-12 u-end reveal" style={{ marginBottom: "clamp(28px,3.5vw,48px)" }}>
            <div className="col-7">
              <div className="eyebrow"><span className="dot" /> Who This Reaches</div>
              <h2 className="h-1 u-mt-16 caps" style={{ maxWidth: "16ch" }}>Three ways in.</h2>
            </div>
            <div className="col-5">
              <p className="body" style={{ color: "var(--muted)", maxWidth: "44ch" }}>
                The same team answers all three. If you would rather read first, each door leads to
                the part of the firm it concerns.
              </p>
            </div>
          </div>
          <div className="iroutes">
            {INQ_ROUTES.map(([t, route, img, d]) => {
              const media = img.indexOf("sf-") === 0
                ? { src: wix(img, { w: 800 }), srcSet: wixSet(img, [800, 1400]) }
                : bandSrc(img);
              return (
                <a key={t} className="iroute" href={BASE + pathFor(route)}
                  onClick={(e) => { if (!go || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return; e.preventDefault(); go(route); }}>
                  <span className="iroute__media">
                    <img src={media.src} srcSet={media.srcSet} sizes="(max-width: 860px) 92vw, 30vw" alt="" loading="lazy" decoding="async" onError={imgFallback} />
                  </span>
                  <span className="iroute__t">{t}</span>
                  <span className="iroute__d">{d}</span>
                  <span className="iroute__cta">Read first <span className="arr" /></span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="section section--tint" style={{ borderTop: 0 }}>
        <div className="wrap grid-12" style={{ alignItems: "start" }}>
          <div className="col-4 reveal">
            <div className="eyebrow"><span className="dot" /> After You Write</div>
            <h2 className="h-2 u-mt-16" style={{ maxWidth: "14ch" }}>What happens next.</h2>
          </div>
          <div className="col-8 isteps reveal">
            {INQ_STEPS.map(([n, t, d]) => (
              <div key={n} className="istep">
                <span className="istep__n">{n}</span>
                <span className="istep__t">{t}</span>
                <span className="istep__d">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE WE ARE — run from Beverly Hills, building on three continents */}
      <NightPlate className="night--map">
        <div className="wrap">
          <div className="grid-12 u-end reveal">
            <div className="col-7">
              <div className="eyebrow"><span className="dot" /> Where We Are</div>
              <h2 className="h-1 u-mt-16 night__title">Run from Beverly Hills. <em>Invested on three continents.</em></h2>
            </div>
            <div className="col-5">
              <p className="body-lg" style={{ maxWidth: "42ch" }}>
                The firm is run from Beverly Hills and invests from Los Angeles and Joshua Tree to
                Miami Beach, Marbella and Tel Aviv — four time zones, one team.
              </p>
            </div>
          </div>
          <div className="u-mt-64 reveal"><LocalTimes /></div>
          <div className="u-mt-64"><MarketsMap tone="night" /></div>
        </div>
      </NightPlate>

      {/* CLOSING PLATE — atmosphere, not evidence: the caption that named a
          delivered project went with the photograph it described. */}
      <section className="cine" style={{ height: "min(44vh, 420px)", minHeight: 300 }}>
        <img className="cine__img img--warm" data-parallax="0.1"
          src="assets/img/city-basin.jpg"
          srcSet="assets/img/city-basin-w800.webp 800w, assets/img/city-basin-w1400.webp 1400w, assets/img/city-basin.jpg 2600w"
          sizes="100vw"
          alt="The Los Angeles basin at dusk"
          loading="lazy" onError={imgFallback} />
        <div className="cine__grad" />
        <div className="cine__cap">
          <div className="wrap" style={{ paddingBottom: "clamp(28px,4vw,44px)" }}>
            
          </div>
        </div>
      </section>
    </main>
  );
}

function InquiryForm({ intent }) {
  const investor = intent === "investor";
  const owner = intent === "owner";
  const [sent, setSent] = React.useState(false);   // false | "endpoint" | "mailto"
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState("");
  const [role, setRole] = React.useState("");
  React.useEffect(() => { if (investor) setRole("Investor — capital partnership"); }, [investor]);
  React.useEffect(() => { if (owner) setRole("Owner — development or asset management"); }, [owner]);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    const fd = new FormData(e.currentTarget);
    const g = (k) => (fd.get(k) || "").toString();
    // Honeypot — only automated submitters fill this. Silently accept and drop,
    // so the bot sees success and does not retry with a different shape.
    if (g("company_website")) { setSent("endpoint"); return; }
    if (INQ_ENDPOINT) {
      try {
        setSubmitting(true);
        const res = await fetch(INQ_ENDPOINT, { method: "POST", body: fd, headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error("bad status");
        setSent("endpoint");
      } catch (err) {
        setError("Something went wrong sending your message. Please email info@noesisusa.com directly.");
      } finally { setSubmitting(false); }
      return;
    }
    const subject = `Inquiry${role ? " — " + role.split(" — ")[0] : ""}${g("name") ? " — " + g("name") : ""}`;
    const body = `Name: ${g("name")}\nEmail: ${g("email")}\nLocation: ${g("location")}\nReaching out as: ${role || "—"}\n\n${g("message")}`;
    setDraft(body);
    window.location.href = `mailto:info@noesisusa.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent("mailto");
  };

  if (sent) return (
    <div className="inq-panel" role="status" aria-live="polite"
      ref={(el) => { if (el && !el.__focused) { el.__focused = true; el.focus(); } }}
      tabIndex={-1} style={{ outline: "none" }}>
      <div className="eyebrow"><span className="dot" /> {sent === "endpoint" ? "Received" : "Almost there"}</div>
      <h2 className="h-2 u-mt-16">{sent === "endpoint" ? "Thank you." : "One last step."}</h2>
      {sent === "endpoint" ? (
        <p className="body u-mt-16">
          {investor
            ? "Your inquiry is reviewed personally by our principal and held in confidence."
            : "We've received your message and will respond within one business day."}
        </p>
      ) : (
        <>
          <p className="body u-mt-16">
            We've opened a pre-filled message in your mail app — <strong>press send there</strong> and it reaches our
            principal directly. Nothing has been sent yet.
          </p>
          <p className="body u-mt-16" style={{ color: "var(--muted)" }}>
            If no mail app opened, copy your message below and send it to{" "}
            <a href="mailto:info@noesisusa.com" style={{ color: "var(--accent-deep)" }}>info@noesisusa.com</a>,{" "}
            or call <a href="tel:+13108553634" style={{ color: "var(--accent-deep)" }}>(310) 855·3634</a>.
          </p>
          <button type="button" className="btn btn--ghost u-mt-16"
            onClick={() => {
              const done = () => { setCopied(true); setTimeout(() => setCopied(false), 2400); };
              if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(draft).then(done, () => setCopied(false));
              } else {
                const t = document.createElement("textarea");
                t.value = draft; t.style.position = "fixed"; t.style.opacity = "0";
                document.body.appendChild(t); t.select();
                try { document.execCommand("copy"); done(); } catch (err) { /* clipboard unavailable */ }
                document.body.removeChild(t);
              }
            }}>
            {copied ? "Copied to clipboard" : "Copy my message"}
          </button>
        </>
      )}
      <button className="btn btn--ghost u-mt-40" onClick={() => setSent(false)}>Write another</button>
    </div>
  );

  return (
    <form onSubmit={submit} className="inq-panel">
      <div className="eyebrow" style={{ marginBottom: 22 }}><span className="dot" /> {investor ? "Confidential investor introduction" : owner ? "Confidential project inquiry" : "Send a message"}</div>
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="f-company-website">Do not fill this in</label>
        <input id="f-company-website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="form-note">Fields marked <span className="req" aria-hidden="true">*</span> are required.</p>
      <div className="form-grid">
        <div className="field"><label htmlFor="f-name">Name <span className="req" aria-hidden="true">*</span></label><input id="f-name" name="name" type="text" placeholder="Your name" required /></div>
        <div className="field"><label htmlFor="f-email">Email <span className="req" aria-hidden="true">*</span></label><input id="f-email" name="email" type="email" placeholder="you@email.com" required /></div>
        <div className="field"><label htmlFor="f-loc">Location</label><input id="f-loc" name="location" type="text" placeholder="City / country" /></div>
        <div className="field">
          <label htmlFor="f-role">I'm reaching out as <span className="req" aria-hidden="true">*</span></label>
          <select id="f-role" name="role" value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="" disabled>Select one</option>
            <option>Investor — capital partnership</option>
            <option>Owner — development or asset management</option>
            <option>Developer — owner's representation</option>
            <option>Broker / seller — a site or a building</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field" style={{ gridColumn: "1 / -1" }}><label htmlFor="f-msg">Message <span className="req" aria-hidden="true">*</span></label><textarea id="f-msg" name="message" rows="5" placeholder="Tell us about your interest in investing, or your project." required></textarea></div>
        {/* Every firm that raises privately states the audience limitation in the
            form itself, not only in the footer. Self-certification here; real
            verification belongs at the offering, not on a website. */}
        {investor && (
          <div className="field field--check" style={{ gridColumn: "1 / -1" }}>
            <label htmlFor="f-accredited" className="check">
              <input id="f-accredited" name="accredited" type="checkbox" required />
              <span>
                I confirm I am an accredited investor. I understand this inquiry is not an offer, that
                no offering is implied, and that any offering would be made only through its own
                documents. <span className="req" aria-hidden="true">*</span>
              </span>
            </label>
          </div>
        )}
      </div>
      <div role="status" aria-live="polite">
        {error && <p className="body u-mt-24" style={{ color: "var(--accent-deep)" }}>{error}</p>}
      </div>
      <div className="u-mt-40 u-flex u-between u-center" style={{ flexWrap: "wrap", gap: 16 }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: ".06em", color: "var(--muted)" }}>INFO@NOESISUSA.COM · T (310) 855·3634</div>
        <button type="submit" className="btn" disabled={submitting}>{submitting ? "Sending…" : "Send Inquiry"} <span className="arr" /></button>
      </div>
    </form>
  );
}

window.Inquiries = Inquiries;
