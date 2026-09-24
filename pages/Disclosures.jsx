// Disclosures — the compliance page every firm that raises private capital
// carries and most boutique sites omit.
//
// Noesis raises from family offices, high-net-worth individuals and
// institutions, which puts it structurally alongside the sponsor-model firms
// (Trion, Yankee Capital) rather than the pure-developer ones (Carmel, Related).
// Those firms consistently publish three things this site did not: a standalone
// disclosures page, an accredited-investor audience limitation stated in plain
// text, and past-performance language sitting beside any figure. The footer
// carried one sentence of it; everything else lived nowhere.
//
// This is conservative, standard-form language written to be reviewed by
// counsel, not to substitute for it. The basis and as-of date under THE RECORD
// are the firm's own facts and should be re-stated whenever the record changes.

const DISCLOSURE_AS_OF = "September 2026";

const DISCLOSURES = [
  ["No offer or solicitation",
    "This website is neither an offer to sell nor a solicitation of an offer to buy any security, " +
    "and nothing on it should be read as one. It is published for information purposes only. Any " +
    "offering of an interest in a Noesis Group vehicle is made solely through that vehicle's own " +
    "offering documents, only to those eligible to receive them, and only in jurisdictions where " +
    "the offering is permitted by law. Where anything on this site differs from those documents, " +
    "the offering documents govern."],

  ["Who this site addresses",
    "The investment material on this site is directed to accredited investors — family offices, " +
    "principals, institutions and qualified individuals. It is not directed to the general public " +
    "and is not an invitation to the public to invest. An inquiry made through this site creates no " +
    "obligation on either side, and implies no current or pending offering."],

  ["Past performance",
    "The completed record shown on this site describes what has been built and delivered. It is not " +
    "a prediction and not a promise. Past results are not indicative of future results, and no " +
    "prospective investor should assume that any future project will perform comparably to any " +
    "project described here. Real estate investment involves risk, including the risk of losing the " +
    "entire amount invested."],

  ["Forward-looking statements",
    "Descriptions of projects in predevelopment, permitting, design or construction reflect the " +
    "firm's current plans and expectations. Programmes, budgets, approvals, timelines and scopes " +
    "change, and projects that are planned are not always built. Nothing described as intended or " +
    "in progress should be read as committed or complete."],

  ["Renderings and imagery",
    "Projects that are not yet built are illustrated with architectural renderings, and are labelled " +
    "as such wherever they appear — on portfolio cards, on their own pages and in the record. " +
    "Renderings are design intent, not a photograph of a building, and the finished work may differ. " +
    "Every other photograph on this site is of a completed Noesis project."],

  ["The record and how it is counted",
    "The record counts every project Noesis has taken from land through entitlement, design and " +
    "construction since 2009, together with those it holds in development today. It covers the " +
    "firm's own developments; owner's representation engagements, which are performed on projects " +
    "the firm does not own, are not counted in it. Figures are stated as of " + DISCLOSURE_AS_OF +
    ", are unaudited, and are drawn from the firm's own project records."],

  ["Licensing",
    "General contracting is performed by Noesis Builders, Inc. under California State License Board " +
    "license number 1046562, Class B, General Building. Noesis Group, LLC is a California limited " +
    "liability company registered in 2009. Where a project requires a license Noesis Group does not " +
    "itself hold, that work is performed by the appropriately licensed entity or by a licensed third " +
    "party engaged for it."],

  ["No advice",
    "Nothing on this site is legal, tax, accounting or investment advice, and it does not take " +
    "account of any particular person's circumstances. Prospective investors should consult their " +
    "own legal, tax and financial advisers before making any investment decision."],

  ["Third-party names and marks",
    "Names of firms, institutions, architects and consultants appear on this site only to describe " +
    "work history and professional background accurately. They are the marks of their respective " +
    "owners, and their use implies no endorsement of Noesis Group by them, or by Noesis Group of them."],
];

function Disclosures({ go }) {
  return (
    <main className="page-enter">
      <section style={{ paddingTop: "clamp(120px, 12vh, 150px)", paddingBottom: "clamp(28px, 4vw, 48px)" }}>
        <div className="wrap grid-12 hero-grid">
          <div className="col-7 reveal">
            <div className="eyebrow"><span className="dot" /> Legal · Disclosures</div>
            <h1 className="h-display lx-h u-mt-24" style={{ maxWidth: "13ch" }}>
              What this site is, and is not.
            </h1>
          </div>
          <div className="col-5 reveal">
            <p className="body-lg" style={{ maxWidth: "46ch" }}>
              Noesis Group develops and invests in real estate, and represents a small number of owners
              on projects it does not own. This page sets out the basis on which the rest of the site
              should be read.
            </p>
            <p className="body u-mt-16" style={{ color: "var(--muted)", maxWidth: "46ch" }}>
              Last updated {DISCLOSURE_AS_OF}.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ borderTop: 0 }}>
        <div className="wrap">
          <div className="acc">
            {DISCLOSURES.map(([title, body], i) => (
              <details key={title} className="acc__item" open={i === 0}>
                <summary className="acc__head">
                  <span className="acc__idx">{String(i + 1).padStart(2, "0")}</span>
                  <span className="acc__t">{title}</span>
                  <span className="acc__mk" aria-hidden="true" />
                </summary>
                <div className="acc__body"><p>{body}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint" style={{ borderTop: 0 }}>
        <div className="wrap grid-12 u-end reveal">
          <div className="col-8">
            <div className="eyebrow"><span className="dot" /> Questions</div>
            <h2 className="h-2 u-mt-16" style={{ maxWidth: "26ch" }}>
              Anything here that needs clarifying, we would rather you asked.
            </h2>
          </div>
          <div className="col-4 u-tr">
            <button className="btn btn--ghost" onClick={() => go("inquiries")} data-magnetic>
              Contact the firm <span className="arr" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

window.Disclosures = Disclosures;
