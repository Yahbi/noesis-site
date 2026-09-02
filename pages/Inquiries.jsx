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

function Inquiries({ intent }) {
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

      {/* CLOSING PLATE — delivered work behind the inquiry */}
      <section className="cine" style={{ height: "min(44vh, 420px)", minHeight: 300 }}>
        <img className="cine__img img--warm" data-parallax="0.1"
          src={wix(PHOTO.genesee_int_1, { w: 2000 })}
          alt="My Genesee living room, Beverly Grove"
          loading="lazy" onError={imgFallback} />
        <div className="cine__grad" />
        <div className="cine__cap">
          <div className="wrap" style={{ paddingBottom: "clamp(28px,4vw,44px)" }}>
            <div className="eyebrow"><span className="dot" /> Delivered by Noesis</div>
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
  React.useEffect(() => { if (owner) setRole("Owner / Principal — a project to deliver"); }, [owner]);

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
    window.location.href = `mailto:info@noesisusa.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent("mailto");
  };

  if (sent) return (
    <div className="inq-panel">
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
            If no mail app opened, write to{" "}
            <a href="mailto:info@noesisusa.com" style={{ color: "var(--accent-deep)" }}>info@noesisusa.com</a>{" "}
            or call <a href="tel:+13108553634" style={{ color: "var(--accent-deep)" }}>(310) 855·3634</a>.
          </p>
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
      <div className="form-grid">
        <div className="field"><label htmlFor="f-name">Name</label><input id="f-name" name="name" type="text" placeholder="Your name" required /></div>
        <div className="field"><label htmlFor="f-email">Email</label><input id="f-email" name="email" type="email" placeholder="you@email.com" required /></div>
        <div className="field"><label htmlFor="f-loc">Location</label><input id="f-loc" name="location" type="text" placeholder="City / country" /></div>
        <div className="field">
          <label htmlFor="f-role">I'm reaching out as</label>
          <select id="f-role" name="role" value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="" disabled>Select one</option>
            <option>Investor — capital partnership</option>
            <option>Owner / Principal — a project to deliver</option>
            <option>Developer — owner's rep / project management</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field" style={{ gridColumn: "1 / -1" }}><label htmlFor="f-msg">Message</label><textarea id="f-msg" name="message" rows="5" placeholder="Tell us about your interest in investing, or your project." required></textarea></div>
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
