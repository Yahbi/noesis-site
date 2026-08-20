# Noesis — Punch-list

Live: https://yahbi.github.io/noesis-site/ · Status as of 2026-08-20.

Every claim below was re-verified against source; the previous version of this
file had drifted badly out of date. P0 = do now, P1 = soon, P2 = polish.

---

## Blocked on the client (not engineering work)

- **Form backend.** `INQ_ENDPOINT` in `pages/Inquiries.jsx` is deliberately `""`.
  The form falls back to opening the visitor's mail client and says so honestly
  ("One last step — press send there"), so no lead is silently lost. Paste a
  Formspree/Basin endpoint into that constant and the fetch path takes over. See
  [GOLIVE.md](GOLIVE.md).
- **Custom domain / DNS.** `build.sh` is domain-portable via `SITE_URL` and
  `BASE_PATH`; records are drafted in [GOLIVE.md](GOLIVE.md). Canonical URLs point
  at the GitHub Pages host until the cutover.
- **Analytics.** No account yet; nothing is loaded, which is also the correct
  default under the no-non-essential-tracking rule.
- **Counsel review.** The INVEST.docx "matching or exceeding projected returns"
  line stays **omitted** pending sign-off, along with the "we can guarantee"
  sentence and the unspecified "award-winning" claim. The Investment page stays
  philosophy/approach only — no returns figures, no offer or solicitation.
- **Privacy + Disclosures pages.** The footer no longer shows dead `href="#"`
  stubs, but real copy is still needed — for a firm courting accredited capital
  this is a counsel deliverable, not a writing exercise.
- **Box folder** of source material was mentioned but never arrived.

## P1 — open engineering

Nothing outstanding. The three items previously listed here are resolved:

- **Images / CLS** — closed as *not a defect*. Measured CLS is **0** on home,
  portfolio, story and firm pages, with zero unreserved images: every container
  already reserves space via `aspect-ratio` or an explicit height. Adding
  `width`/`height` attributes would have been busywork.
- **CI guard** — `.github/workflows/build-check.yml` rebuilds with the committed
  cache-bust stamp and fails on any drift. `build.sh` accepts `BUILD_V` so a build
  is byte-for-byte reproducible.
- **`.label` type class** — 17 inline `letterSpacing` values are now 3, and the
  three that remain are genuinely bespoke rather than micro-labels.

## P2 — polish

- **(L) Credibility band.** The record carries 17 photographed projects plus 6
  record-only entries, but there are still no testimonials, named partners or
  quantified track-record figures. Client-supplied content.

---

## Closed

Interaction and routing: drawer focus/escape/resize trap, real `href`s on every
project card, keyboard-reachable lightbox thumbnails with focus trap and restore,
`pushState`/`popstate` routing with working Back, skip-to-content link, 44px tap
targets, `aria-current`, intent-aware CTAs seeding the enquiry form.

Design system: mobile section rhythm, `--muted`/`--ink-soft` contrast, one
authoritative block per selector, on-dark token coverage extended to `.shero`,
US spelling unified, `.pfeat--flip`/`.cta-row`/`.pcat__lede` added.

Dead code: 4 unused page modules, the `App.jsx` duplicate, the `[data-theme="onyx"]`
block, 12 never-rendered component classes, the `__bundler_thumbnail` template —
with it the last Fraunces and garnet references. `styles.css` 1665 → 1549 lines
with byte-identical computed styles before and after.

Accessibility: focus ring moved from `--accent` (~3.3:1) to `--accent-deep`
(4.71:1), with a bone ring on dark plates where `--accent-deep` would have been
2.29:1. A canvas-based contrast audit (resolves `oklab`/`color-mix`, composites
alpha down the ancestor stack) then found and fixed 14 further AA failures:
`--muted`/`--ink-soft` re-solved for the darker panels, `--accent-cta` for
text-bearing bronze fills, `--accent-on-ink` for bronze labels on dark plates.
Every route now audits clean.

Security and SEO: sha384 SRI plus `crossorigin` on all five CDN scripts, JSON-LD
Organization and BreadcrumbList, `robots.txt`, a 24-URL `sitemap.xml`, per-route
`og:image`, LCP preload, automated cache-busting.

Media: pro-tier 4K re-upscale and three-tier adaptive video (413 → 320 MB), the
Wix `wix()` resolution gate, and the Casa Mani photographic scroll hero.
