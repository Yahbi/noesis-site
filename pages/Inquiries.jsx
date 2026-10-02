// Inquiries — the contact destination. Holds the dual-intent form (investor /
// owner) and the office details. Split out of the one-pager in the multi-page pass.

// ─────────────────────────────────────────────────────────────────────────────
// LEAD DELIVERY
// Empty endpoint: prepare a visible, copyable email draft; no message is sent.
// Configure an owner-approved HTTPS form endpoint only after inbox delivery has
// been verified. HTTP failures/timeouts retain the inquiry and offer the draft.
// Never place an API key or private credential in this client-side file.
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

function Inquiries({ intent, go, session }) {
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
            <InquiryForm intent={intent} go={go} session={session} />
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

// Mirror only editable details into the App-owned ref synchronously. A route
// change may unmount the form before an effect runs. Never use browser storage,
// URLs or analytics for these personal details; a fresh page starts empty.
function useInquiryValue(session, key, initial) {
  const [value, setValue] = React.useState(() => {
    if (!Object.prototype.hasOwnProperty.call(session.current, key)) {
      session.current[key] = typeof initial === "function" ? initial() : initial;
    }
    return session.current[key];
  });
  return [value, (next) => {
    const updated = typeof next === "function" ? next(session.current[key]) : next;
    session.current[key] = updated;
    setValue(updated);
  }];
}

const emptyInquiryFields = () => ({ name: "", email: "", location: "", message: "", accredited: false });

function InquiryForm({ intent, go, session }) {
  const localSession = React.useRef({});
  const memory = session || localSession;
  const initialRole = (value) => value === "investor" ? "Investor — capital partnership"
    : value === "owner" ? "Owner — development or asset management" : "";
  const [role, setRole] = useInquiryValue(memory, "role", () => initialRole(intent));
  const [fields, setFields] = useInquiryValue(memory, "fields", emptyInquiryFields);
  const [sent, setSent] = React.useState(false); // false | "endpoint" | "draft"
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState("");
  const [draft, setDraft] = React.useState({ subject: "", body: "" });
  const [copyStatus, setCopyStatus] = React.useState("");
  const busy = React.useRef(false);
  const draftRef = React.useRef(null);
  const investor = role === "Investor — capital partnership";
  const owner = role === "Owner — development or asset management";
  const hasDetails = Boolean(role || Object.values(fields).some(Boolean));
  const clearDetails = () => {
    setFields(emptyInquiryFields()); setRole(""); setSent(false);
    setDraft({ subject: "", body: "" }); setError(""); setCopyStatus("");
    requestAnimationFrame(() => document.getElementById("f-name")?.focus());
  };

  const update = (e) => {
    const { name, value, checked, type } = e.target;
    setFields((previous) => ({ ...previous, [name]: type === "checkbox" ? checked : value }));
  };
  const prepare = (fd) => {
    const g = (key) => String(fd.get(key) || "").trim();
    setDraft({
      subject: `Inquiry — ${g("role").split(" — ")[0]} — ${g("name")}`,
      body: `Name: ${g("name")}\nEmail: ${g("email")}\nLocation: ${g("location") || "—"}\nReaching out as: ${g("role")}${fd.get("accredited") ? "\nAccredited investor confirmation: Yes" : ""}\n\n${g("message")}`,
    });
    setCopyStatus("");
    setSent("draft");
  };
  const submit = async (e) => {
    e.preventDefault();
    if (busy.current) return;
    const form = e.currentTarget;
    setError("");
    if (!form.reportValidity()) return;
    const fd = new FormData(form);
    if (fd.get("company_website")) return; // Ignore spam without claiming delivery.
    for (const key of ["name", "message"]) {
      if (!String(fd.get(key) || "").trim()) {
        setError(key === "name" ? "Please enter your name." : "Please enter a message.");
        form.elements.namedItem(key).focus();
        return;
      }
    }
    if (!INQ_ENDPOINT || e.nativeEvent?.submitter?.value === "draft") {
      prepare(fd);
      return;
    }
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    busy.current = true;
    setSubmitting(true);
    try {
      const res = await fetch(INQ_ENDPOINT, {
        method: "POST", body: fd, headers: { Accept: "application/json" }, signal: controller.signal,
      });
      if (!res.ok) throw new Error("Submission not accepted");
      setSent("endpoint");
    } catch (err) {
      setError("We couldn't confirm your submission. Your details are still here. Try again, or prepare an email instead.");
    } finally {
      clearTimeout(timeout);
      busy.current = false;
      setSubmitting(false);
    }
  };
  const draftText = `To: info@noesisusa.com\nSubject: ${draft.subject}\n\n${draft.body}`;
  const copyDraft = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(draftText);
      setCopyStatus("Copied to clipboard. Paste it into an email to info@noesisusa.com and send it there.");
    } catch (err) {
      if (draftRef.current) { draftRef.current.focus(); draftRef.current.select(); }
      setCopyStatus("Copy is unavailable here. Select the message below and copy it manually, then email info@noesisusa.com.");
    }
  };

  if (sent) return (
    <div className="inq-panel" aria-labelledby="inquiry-result-title"
      ref={(el) => { if (el && !el.__focused) { el.__focused = true; el.focus({ preventScroll: true }); el.scrollIntoView({ block: "start" }); } }} tabIndex={-1} style={{ scrollMarginTop: 100 }}>
      <div className="eyebrow"><span className="dot" /> {sent === "endpoint" ? "Submitted" : "Email draft"}</div>
      <h2 id="inquiry-result-title" className="h-2 u-mt-16">{sent === "endpoint" ? "Thank you." : "Your message is ready."}</h2>
      {sent === "endpoint" ? (
        <p className="body u-mt-16" role="status">Your inquiry was submitted. You can also reach us at <a href="mailto:info@noesisusa.com">info@noesisusa.com</a>.</p>
      ) : (
        <>
          <p className="body u-mt-16"><strong>Nothing has been sent yet.</strong> Open this draft in your email app, or copy it into your email service, then send it to info@noesisusa.com.</p>
          <div className="u-flex u-gap-16 u-mt-24" style={{ flexWrap: "wrap", gap: 16 }}>
            <a className="btn" href={`mailto:info@noesisusa.com?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`}>Open email app</a>
            <button type="button" className="btn btn--ghost" onClick={copyDraft}>Copy my message</button>
          </div>
          <p className="body u-mt-16" role="status" aria-live="polite">{copyStatus}</p>
          <div className="field u-mt-24">
            <label htmlFor="inquiry-draft">Your email draft</label>
            <textarea id="inquiry-draft" ref={draftRef} readOnly rows="10" value={draftText} />
          </div>
          <p className="body u-mt-16">If no mail app opens, use the draft above in your email service, or call <a href="tel:+13108553634">(310) 855·3634</a>.</p>
        </>
      )}
      <button type="button" className="btn btn--ghost u-mt-40" onClick={() => {
        if (sent === "endpoint") { clearDetails(); return; }
        setError(""); setSent(false);
        requestAnimationFrame(() => document.getElementById("f-name")?.focus());
      }}>{sent === "endpoint" ? "Write another" : "Edit my message"}</button>
      {sent === "draft" && <button type="button" className="btn btn--ghost u-mt-16" onClick={clearDetails}>Clear my details</button>}
    </div>
  );

  return (
    <form onSubmit={submit} className="inq-panel" aria-busy={submitting} aria-describedby="inquiry-delivery-note">
      <div className="eyebrow" style={{ marginBottom: 22 }}><span className="dot" /> {investor ? "Confidential investor introduction" : owner ? "Confidential project inquiry" : "Write a message"}</div>
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="f-company-website">Do not fill this in</label>
        <input id="f-company-website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <p id="inquiry-delivery-note" className="form-note">{INQ_ENDPOINT ? "Submit your inquiry directly, or prepare a draft to send from your own email." : "This form prepares an email draft. You will send it from your own email app or service."}</p>
      <p className="form-note">Your entries stay here while you browse this site. Reloading or closing this page clears them. <a href={BASE + pathFor("disclosures")} onClick={(e) => {
        if (!go || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault(); go("disclosures");
      }}>Read our disclosures</a>.</p>
      <p className="form-note">Fields marked <span className="req" aria-hidden="true">*</span> are required.</p>
      <fieldset disabled={submitting} style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
        <legend className="sr-only">Your inquiry</legend>
        <div className="form-grid">
          <div className="field"><label htmlFor="f-name">Name <span className="req" aria-hidden="true">*</span></label><input id="f-name" name="name" type="text" autoComplete="name" maxLength={160} value={fields.name} onChange={update} placeholder="Your name" required /></div>
          <div className="field"><label htmlFor="f-email">Email <span className="req" aria-hidden="true">*</span></label><input id="f-email" name="email" type="email" autoComplete="email" maxLength={254} value={fields.email} onChange={update} placeholder="you@email.com" required /></div>
          <div className="field"><label htmlFor="f-loc">Location</label><input id="f-loc" name="location" type="text" autoComplete="address-level2" maxLength={160} value={fields.location} onChange={update} placeholder="City / country" /></div>
          <div className="field">
            <label htmlFor="f-role">I'm reaching out as <span className="req" aria-hidden="true">*</span></label>
            <select id="f-role" name="role" value={role} onChange={(e) => { setRole(e.target.value); setFields((previous) => ({ ...previous, accredited: false })); }} required>
              <option value="" disabled>Select one</option>
              <option>Investor — capital partnership</option>
              <option>Owner — development or asset management</option>
              <option>Developer — owner's representation</option>
              <option>Broker / seller — a site or a building</option>
              <option>Other</option>
            </select>
          </div>
          <div className="field" style={{ gridColumn: "1 / -1" }}><label htmlFor="f-msg">Message <span className="req" aria-hidden="true">*</span></label><textarea id="f-msg" name="message" rows="5" maxLength={5000} value={fields.message} onChange={update} placeholder="Tell us about your interest in investing, or your project." required /></div>
          {investor && (
            <div className="field field--check" style={{ gridColumn: "1 / -1" }}>
              <label htmlFor="f-accredited" className="check">
                <input id="f-accredited" name="accredited" type="checkbox" checked={fields.accredited} onChange={update} required />
                <span>I confirm I am an accredited investor. I understand this inquiry is not an offer, that no offering is implied, and that any offering would be made only through its own documents. <span className="req" aria-hidden="true">*</span></span>
              </label>
            </div>
          )}
        </div>
        <div role="alert">{error && <p className="body u-mt-24" style={{ color: "var(--accent-deep)" }}>{error}</p>}</div>
        <div className="u-mt-40 u-flex u-between u-center" style={{ flexWrap: "wrap", gap: 16 }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: ".06em", color: "var(--muted)" }}>INFO@NOESISUSA.COM · T (310) 855·3634</div>
          <button type="submit" className="btn">{submitting ? "Sending…" : INQ_ENDPOINT ? "Send inquiry" : "Prepare email"} <span className="arr" /></button>
          {INQ_ENDPOINT && <button type="submit" value="draft" className="btn btn--ghost">Prepare email instead</button>}
          {hasDetails && <button type="button" className="btn btn--ghost" onClick={clearDetails}>Clear my details</button>}
        </div>
      </fieldset>
    </form>
  );
}

window.Inquiries = Inquiries;
