// Inquiries — the contact destination. Holds the dual-intent form (investor /
// owner) and the office details. Split out of the one-pager in the multi-page pass.

// Set INQ_ENDPOINT to a Formspree/Basin (or serverless) URL to deliver submissions
// straight to info@noesisusa.com. While empty, the form opens the visitor's mail
// client pre-filled — so an enquiry is never silently dropped.
const INQ_ENDPOINT = "";

function Inquiries({ intent }) {
  return (
    <main className="page-enter">
      <section style={{ paddingTop: "clamp(120px, 12vh, 150px)", paddingBottom: "clamp(40px, 6vw, 80px)" }}>
        <div className="wrap grid-12" style={{ gap: 56, alignItems: "start" }}>
          <div className="col-5 reveal">
            <div className="eyebrow"><span className="dot" /> Inquiries</div>
            <h1 className="h-display caps u-mt-16" style={{ maxWidth: "12ch" }}>Let's begin.</h1>
            <p className="lede u-mt-24" style={{ maxWidth: "44ch" }}>
              Whether you have capital to deploy or a project to deliver, we welcome a confidential
              conversation. Every enquiry is reviewed personally by our principal, who responds within one
              business day.
            </p>

            <div className="u-mt-40">
              <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", color: "var(--muted)", textTransform: "uppercase" }}>Office</div>
              <div className="serif u-mt-8" style={{ fontSize: 21, color: "var(--ink)", lineHeight: 1.35 }}>8383 Wilshire Blvd<br />Suite 740<br />Beverly Hills, CA 90211</div>
            </div>
            <div className="u-flex u-gap-40 u-mt-40" style={{ flexWrap: "wrap" }}>
              <div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", color: "var(--muted)", textTransform: "uppercase" }}>Telephone</div>
                <a href="tel:+13108553634" className="serif u-mt-8" style={{ fontSize: 19, display: "block", color: "var(--ink)" }}>T (310) 855 · 3634</a>
                <div className="body" style={{ color: "var(--muted)", fontSize: 14 }}>F (424) 282 · 8414</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", color: "var(--muted)", textTransform: "uppercase" }}>Email</div>
                <a href="mailto:info@noesisusa.com" className="serif u-mt-8" style={{ fontSize: 19, display: "block", color: "var(--ink)" }}>INFO@NOESISUSA.COM</a>
              </div>
            </div>
          </div>
          <div className="col-7 reveal">
            <InquiryForm intent={intent} />
          </div>
        </div>
      </section>
    </main>
  );
}

function InquiryForm({ intent }) {
  const investor = intent === "investor";
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState("");
  const [role, setRole] = React.useState("");
  React.useEffect(() => { if (investor) setRole("Investor — capital partnership"); }, [investor]);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    const fd = new FormData(e.currentTarget);
    const g = (k) => (fd.get(k) || "").toString();
    if (INQ_ENDPOINT) {
      try {
        setSubmitting(true);
        const res = await fetch(INQ_ENDPOINT, { method: "POST", body: fd, headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error("bad status");
        setSent(true);
      } catch (err) {
        setError("Something went wrong sending your message. Please email info@noesisusa.com directly.");
      } finally { setSubmitting(false); }
      return;
    }
    const subject = `Enquiry${role ? " — " + role.split(" — ")[0] : ""}${g("name") ? " — " + g("name") : ""}`;
    const body = `Name: ${g("name")}\nEmail: ${g("email")}\nLocation: ${g("location")}\nReaching out as: ${role || "—"}\n\n${g("message")}`;
    window.location.href = `mailto:info@noesisusa.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) return (
    <div style={{ border: "1px solid var(--rule)", padding: "clamp(28px,4vw,48px)", background: "var(--paper)" }}>
      <div className="eyebrow"><span className="dot" /> Received</div>
      <h3 className="h-2 u-mt-16">Thank you.</h3>
      <p className="body u-mt-16">
        {investor
          ? "Your enquiry is reviewed personally by our principal and held in confidence."
          : "We've received your message and will respond within one business day."}
      </p>
      {!INQ_ENDPOINT && (
        <p className="body u-mt-16" style={{ color: "var(--muted)" }}>
          If your mail app didn't open, write to us directly at <a href="mailto:info@noesisusa.com" style={{ color: "var(--accent-deep)" }}>info@noesisusa.com</a>.
        </p>
      )}
      <button className="btn btn--ghost u-mt-40" onClick={() => setSent(false)}>Send another</button>
    </div>
  );

  return (
    <form onSubmit={submit} style={{ border: "1px solid var(--rule)", padding: "clamp(28px,4vw,48px)", background: "var(--paper)" }}>
      <div className="eyebrow" style={{ marginBottom: 22 }}><span className="dot" /> {investor ? "Confidential investor introduction" : "Send a message"}</div>
      <div className="form-grid">
        <div className="field"><label>Name</label><input name="name" type="text" placeholder="Your name" required /></div>
        <div className="field"><label>Email</label><input name="email" type="email" placeholder="you@email.com" required /></div>
        <div className="field"><label>Location</label><input name="location" type="text" placeholder="City / country" /></div>
        <div className="field">
          <label>I'm reaching out as</label>
          <select name="role" value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="" disabled>Select one</option>
            <option>Investor — capital partnership</option>
            <option>Owner / Principal — a project to deliver</option>
            <option>Developer — owner's rep / project management</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field" style={{ gridColumn: "1 / -1" }}><label>Message</label><textarea name="message" rows="5" placeholder="Tell us about your interest in investing, or your project." required></textarea></div>
      </div>
      <div role="status" aria-live="polite">
        {error && <p className="body u-mt-24" style={{ color: "var(--accent-deep)" }}>{error}</p>}
      </div>
      <div className="u-mt-40 u-flex u-between u-center" style={{ flexWrap: "wrap", gap: 16 }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: ".06em", color: "var(--muted)" }}>INFO@NOESISUSA.COM · T (310) 855·3634</div>
        <button type="submit" className="btn" disabled={submitting}>{submitting ? "Sending…" : "Send Enquiry"} <span className="arr" /></button>
      </div>
    </form>
  );
}

window.Inquiries = Inquiries;
