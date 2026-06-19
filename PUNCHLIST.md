# Noesis — Cleanup Punch-list

Prioritized actions to keep the site clean & production-grade. P0 = do now, P1 = soon, P2 = polish.

_(First P0 — removing the 4 dead page modules — is already done; bundle 159KB → 118KB.)_

- **[P0]** (S) Delete the 4 dead page modules (pages/Services.jsx, About.jsx, Contact.jsx, Investment.jsx), remove their lines from build.sh's babel concat and their 4 <script> tags from 'Noesis Website.html', then rerun build.sh
  - _why:_ ~36.7 KB raw source / ~8 KB gzip of pure dead code is built and shipped, plus 4 wasted in-browser Babel compiles per dev load. They are assigned to window.* but never rendered (content inlined into Home). Highest-leverage cleanliness win. Note: Approach.jsx is now LIVE — keep it. Keep Placeholder.jsx (wix()/PHOTO are live).
- **[P0]** (S) Delete the untracked App.jsx duplicate (byte-identical to the tracked app.jsx)
  - _why:_ Two App entry files differing only by case on case-insensitive macOS. Only app.jsx is git-tracked and HTML-loaded; App.jsx is a stray local copy that invites confusion and accidental edits to the wrong file.
- **[P0]** (S) Delete the dead onyx/gold theme block at styles.css:38-53
  - _why:_ Redefines the palette with off-brand gold (#CBA75F/#B08F49) but no data-theme attribute is ever set anywhere — confirmed unreachable. Contradicts the single-accent doctrine and pollutes the cascade. If dark mode is wanted later, derive it from the --bone/--ink swap with bronze.
- **[P0]** (M) Fix small-text bronze contrast: introduce/apply --accent-deep #7A5236 (~5:1) for all normal-size accent text (.kicker, .track__for, .sector__tag, .row__idx, .flow__num, .topbar__tag, accent italics, .link-u hover, active/hover nav); keep bright --accent for fills/dots/large numbers/logo stroke
  - _why:_ #9A6A3E on linen is ~3.5:1 — fails WCAG AA for body-size text across many live elements. Accessibility is a non-negotiable and this is a one-token swap on the offending selectors.
- **[P0]** (M) Wire the inquiry form to a real handler (Formspree/Basin/serverless → info@noesisusa.com) with validation + error state
  - _why:_ Form only calls setSent(true); a genuine $5M+ lead gets a false 'we'll respond within one business day' and the message reaches no one. This is a credibility and lead-loss failure, not just polish.
- **[P1]** (S) Drop the Fraunces axis from the Google Fonts <link> in dev HTML (and verify build.sh-generated index.html/404.html follow)
  - _why:_ Fraunces is downloaded (render-blocking) but no CSS token/class uses it — all type is Jost. Wasted font bytes against the ≤100KB font budget. Only consumers are the dead bundler thumbnail and the preloader N (which falls back to Jost).
- **[P1]** (S) Remove or re-skin the __bundler_thumbnail template in 'Noesis Website.html' (lines 43-50) to live tokens
  - _why:_ NOIR-era leftover: #F4F1EA bg, Fraunces italic N, garnet #6E1F1F dot — every value off-system and visibly inconsistent with the correct favicon on line 15 (which already uses #E7E0D2/#2E2A22/#9A6A3E). Remove if nothing consumes it.
- **[P1]** (M) Re-encode assets/noesis-film.mp4 (~14 MB) to ~2-4 MB H.264 CRF 26-28 (+optional WebM/AV1, 720p mobile source); set preload=metadata or play-on-intersection; keep poster as LCP
  - _why:_ 14 MB hero video with preload=auto dominates mobile LCP/CWV and burns data before any scroll. Single biggest performance lever on the page.
- **[P1]** (M) Make Projects gallery cards keyboard-accessible (role=button + tabIndex=0 + onKeyDown Enter/Space, aria-label 'View {name} gallery') and add aria-modal/focus-trap/focus-restore to the lightbox
  - _why:_ Cards open only via onClick — keyboard/SR users cannot open any gallery. Lightbox has role=dialog but no aria-modal, focus trap, or focus return. Both fall below WAI-ARIA APG and block a11y compliance on a core flow.
- **[P1]** (M) Resolve dead links: give social icons real profile URLs (target=_blank rel=noopener) or remove them; create real Privacy + Disclosures pages/sections and link them
  - _why:_ All social icons and footer Disclosures/Privacy are href='#' preventDefault. A $5M+ clientele clicks these to vet credibility; dead icons read as unfinished, and missing disclosures is a compliance/expectation gap when soliciting private capital. Surviving social set feeds JSON-LD sameAs[].
- **[P1]** (S) Add JSON-LD Organization/ProfessionalService schema in <head> (name, foundingDate 2009, Beverly Hills address, telephone +13108553634, email, url, logo, areaServed, sameAs[])
  - _why:_ No structured data exists; weakens knowledge-panel and rich-result eligibility for a firm courting HNW/institutional capital. Low effort, high SEO/credibility return.
- **[P1]** (M) Fix og:image (valid 1200x630 returning 200), point canonical at the production domain (noesisusa.com), add og:url + og:site_name 'Noesis Group' + twitter:title/twitter:image; ship robots.txt + sitemap.xml
  - _why:_ Malformed og:image leaves image-less link previews exactly where referrals to wealthy prospects land; GitHub-Pages canonical splits SEO signal onto a personal dev host and looks unfinished. Launch blockers once the real domain is wired.
- **[P1]** (S) Automate ?v= cache-busting: have build.sh rewrite the dev HTML's 12 ?v= stamps from one source of truth (or drop dev stamps and hard-reload locally)
  - _why:_ 12 stamps are hand-bumped today and dev/prod values diverge; build.sh only stamps prod. Error-prone toil that causes stale-asset bugs in dev.
- **[P2]** (M) Consolidate styles.css to one authoritative type block: fold the final STONE & LINEN values into the :root-area definitions and delete the superseded IVORY GALLERY overrides (~812-925) and redundant restatements
  - _why:_ .h-display/.h-1/.serif/.eyebrow are each defined 3-4x by append order; only the last wins. The Fraunces-era middle block sets dead optical-sizing/weight props that obscure the real cascade. One source of truth per selector.
- **[P2]** (S) Split components/Placeholder.jsx: keep wix()/PHOTO (e.g. rename to components/media.jsx), drop the unused <Placeholder> component + window.Placeholder export; update build.sh + dev HTML
  - _why:_ File must stay (wix/PHOTO are live) but the Placeholder component itself is referenced nowhere — dead weight in the bundle and a misleading filename.
- **[P2]** (S) Remove unused .btn--gold/.btn--gline/.btn--light (styles.css:159-181) and replace hardcoded hex with tokens (#fff→var(--on-accent) in .chip--active/.nav__mark/.social:hover; introduce --footer-bg/--well for #050506/#100D0A; drop #14130D)
  - _why:_ Zero usages of the three button variants (gold-era). Raw hex bypasses the token system and won't follow a theme swap. Goal: no raw hex outside :root.
- **[P2]** (S) Update stale color comments ('brand-red'/'bordeaux'/'red-line logo'/'red line') to say oxidized-bronze; add SRI hashes to GSAP/Lenis CDN tags or self-host; add width/height to <img> to prevent CLS
  - _why:_ Comments contradict the live bronze accent and could lure a future editor into reintroducing red. Partial SRI and missing image dimensions are minor security/CWV hygiene gaps. Comment edits are zero-behavior-change.
- **[P2]** (S) Decide spelling convention: unify Inquiries/Inquire (US) across nav CTA, drawer, and form button — or consciously keep 'Inquiries' section + 'Enquire' CTA and document it
  - _why:_ British/American mix ('Inquiries' vs 'Enquire/Enquiry') is a small consistency tell on a premium site. Make it intentional.
- **[P2]** (M) Add a CI/pre-commit check that runs build.sh and fails if the working tree changes, and document in build.sh that index.html/404.html/bundle.js are generated (never hand-edit)
  - _why:_ Generated artifacts are git-tracked for Pages; without a guard the repo can drift if someone edits source without rebuilding, causing stale-deploy bugs.
- **[P2]** (L) Add a tasteful credibility band (projects delivered, years, markets, $ value where shareable), a short principal bio with photo, and 1-2 attributed testimonials/named partners
  - _why:_ Copy asserts '15 years' and 'a record owners trust' but shows no quantified proof, bios, or testimonials — the biggest content gap for HNW + institutional due diligence. Larger content effort, lower urgency than the technical blockers.
