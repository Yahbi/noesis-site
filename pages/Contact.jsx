// Contact Us

function Contact({ setPage }) {
  const [sent, setSent] = React.useState(false);

  return (
    <main className="page-enter">
      <section style={{ paddingTop: "clamp(56px, 7vw, 100px)" }}>
        <div className="wrap grid-12" style={{ alignItems: "end" }}>
          <div className="col-8">
            <div className="eyebrow"><span className="dot" /> Contact Us</div>
            <h1 className="h-display lx-h u-mt-24"><span className="ln"><span>Let's <em className="accent" style={{ fontStyle: "italic" }}>talk.</em></span></span></h1>
          </div>
          <div className="col-4">
            <p className="lede">
              Whether you have a project to deliver or capital to deploy, we'd welcome a
              confidential conversation. A member of our team responds within one business day.
            </p>
            <p className="body u-mt-16" style={{ color: "var(--muted)" }}>
              Every enquiry is reviewed personally by our principal. Confidentiality from first contact.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-12" style={{ gap: 56 }}>
          {/* LEFT — details */}
          <div className="col-4">
            <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", color: "var(--muted)", textTransform: "uppercase" }}>Office</div>
            <div className="serif u-mt-8" style={{ fontSize: 22 }}>
              8383 Wilshire Blvd<br />Suite 740<br />Beverly Hills, CA 90211
            </div>

            <div className="u-mt-40">
              <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", color: "var(--muted)", textTransform: "uppercase" }}>Telephone</div>
              <a href="tel:+13108553634" className="serif u-mt-8" style={{ fontSize: 22, display: "block" }}>T (310) 855 · 3634</a>
              <div className="body" style={{ color: "var(--muted)" }}>F (424) 282 · 8414</div>
            </div>

            <div className="u-mt-40">
              <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", color: "var(--muted)", textTransform: "uppercase" }}>Email</div>
              <a href="mailto:info@noesisusa.com" className="serif u-mt-8" style={{ fontSize: 22, display: "block" }}>INFO@NOESISUSA.COM</a>
            </div>

            <div className="u-mt-40" style={{ borderTop: "1px solid var(--rule)", paddingTop: 28 }}>
              <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 14 }}>Follow</div>
              <SocialRow size={20} />
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="col-8">
            <div style={{ background: "var(--paper)", border: "1px solid var(--rule)", padding: "clamp(28px, 4vw, 48px)" }}>
              {sent ? (
                <div style={{ padding: "60px 0", textAlign: "center" }}>
                  <div className="eyebrow"><span className="dot" /> Sent</div>
                  <h2 className="h-1 u-mt-24 caps">Thank you.</h2>
                  <p className="lede u-mt-24">We've received your message and will respond within one business day.</p>
                  <button className="btn btn--ghost u-mt-40" onClick={() => setSent(false)}>Send another</button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <div className="eyebrow"><span className="dot" /> Send a message</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 24px", marginTop: 32 }}>
                    <div className="field"><label>Name</label><input type="text" placeholder="Your name" required /></div>
                    <div className="field"><label>Email</label><input type="email" placeholder="you@email.com" required /></div>
                    <div className="field"><label>Location</label><input type="text" placeholder="City / country" /></div>
                    <div className="field">
                      <label>I'm reaching out as</label>
                      <select defaultValue="">
                        <option value="" disabled>Select one</option>
                        <option>Owner / Principal — a project to deliver</option>
                        <option>Developer — owner's rep / project management</option>
                        <option>Investor — capital partnership</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="field" style={{ gridColumn: "1 / -1" }}>
                      <label>Message</label>
                      <textarea rows="6" placeholder="Tell us about your project, or your interest in investing." required></textarea>
                    </div>
                  </div>
                  <div className="u-mt-40 u-flex u-between u-center" style={{ flexWrap: "wrap", gap: 16 }}>
                    <div className="mono" style={{ fontSize: 11, letterSpacing: ".06em", color: "var(--muted)" }}>INFO@NOESISUSA.COM · T (310) 855·3634</div>
                    <button type="submit" className="btn">Send <span className="arr" /></button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

window.Contact = Contact;
