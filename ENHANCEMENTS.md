# Noesis — Full-Site Enhancement Review

_Six-dimension audit (links, typography, style, sizing, imagery, perf/SEO/a11y/content), verified against source._

## Noesis — Consolidated Enhancement Plan (six-dimension review, deduped & verified)

I read PROJECT.md + PUNCHLIST.md and verified every load-bearing claim against source. Corrections to the raw reviews are flagged inline (✅ verified / ⚠️ corrected). Severity is normalized across dimensions; "already done" items are noted so they aren't re-spent.

---

### 0. Verification corrections (read first — they change priority)

- ⚠️ **og:image is NOT broken.** `curl` confirms the `…/q_85/og.jpg` URL returns **HTTP 200** (Wix CDN accepts the trailing filename). The version *without* `/og.jpg` 403s. So this is **cosmetic/verify-only**, not a launch blocker. The real OG/SEO blocker is the **host** (yahbi.github.io), not the image path. (Two reviewers over-rated this.)
- ⚠️ **Mobile drawer active color genuinely fails AA.** The drawer background's winning rule is `styles.css:849 .nav__drawer { background: var(--bone) }` (linen), not the dark `--ink` at :344. So drawer `.is-active { color: var(--accent) }` (:363/:851) is bright bronze on linen = the same ~3.5:1 failure as the desktop nav bug. The reviewer's "probably passes on dark surface" is wrong — **treat as a real AA fix**, same one-token swap to `--accent-deep`.
- ⚠️ **Alt-text is already partially fixed.** Home collage/Genesee pair carry descriptive alt ("My Genesee living room, Beverly Grove"), founder has alt=name. The remaining gap is specifically **Projects.jsx gallery/lightbox/rail** (`alt={p.name}`, `photograph ${i+1}`, `Thumbnail ${k+1}`) and `Placeholder.jsx:89` (`alt=""`). Scope the alt work to those, not "nearly every image."
- ✅ Verified open: 14MB hero film; FORM_ENDPOINT=""; footer Disclosures/Privacy `href="#"`; no history/popstate; no skip link; form labels have no htmlFor/id; three inline grids (form 1fr1fr, principles repeat(4), founder repeat(3)) with zero breakpoints; GSAP/ScrollTrigger/Lenis have no SRI while React/Babel do; Fraunces survives only in the dead `__bundler_thumbnail` template (HTML:73-78); focus ring is `2px solid var(--accent)`; dead CSS blocks (onyx/gold, marquee, topbar, glow-tr/bl, seal, route-wipe, statline, nav__mark, cine-vignette, btn--gold/gline/light) have **0 JSX references**.

---

### A. Links & Navigation

**Newly recommended / still-open:**
- **[HIGH] Footer Disclosures & Privacy are dead `href="#"` stubs** (`Shell.jsx:196-197`). Worst dead link on the site because of *where* it sits (legal footer) and *who* clicks it (HNW counsel doing diligence on a firm soliciting accredited capital). Author a real Privacy notice + a short no-offer/Disclosures statement and route them as deep views (mirror `approach`) or in-page `/legal`. Do not ship visible-but-dead legal links. **(Cross-listed under Content/SEO — same fix.)**
- **[HIGH] Views have no URL → browser Back, refresh, deep-linking all broken** (`app.jsx`, zero history/popstate/hashchange). On Properties/Approach the native Back gesture *leaves the site*; the portfolio/capabilities pages can't be shared or bookmarked; refresh dumps to top of home. Wire `view`→hash with `pushState` in `go()` + a `popstate` listener mapping hash→setView, and read hash on mount. Highest-leverage nav UX fix after the dead legal links. Also retires several "logo is the only way home" and "Back is a trap on mobile" sub-findings.
- **[MED] No skip-to-content link** (WCAG 2.4.1). Keyboard/SR users tab through logo + 6 nav buttons + CTA on every view, and again after each view switch. Add a visually-hidden-until-focused "Skip to content" as the first focusable element targeting `<main id="main">`. (Standard `.skip-link` pattern.)
- **[MED] Properties Back button aria-label lies** (`app.jsx:104` says "Back to home" but `onClick=go("projects")`). Change to "Back to Projects" to match its target and mirror the correct Approach pattern (:97). Zero behavior change. ✅ verified.
- **[MED] Spelling/label inconsistency on the primary CTA surface** — British "Enquire/Make an Enquiry/Send Enquiry" vs American "Inquiries" section/nav label. PROJECT.md §1 calls for unifying on **US "Inquire/Inquiry"**. One find/replace across Shell.jsx + Home.jsx (nav CTA, drawer, footer, form button, mail subject, confirmation copy). **(Cross-listed under Content.)**
- **[LOW] Retire the `services` legacy alias** — Projects "How We Manage" calls `setPage('services')` remapped to `management` (`app.jsx:86`). Replace with direct `go('management')` (or `go('approach')`) and drop the alias branch.
- **[LOW] Scroll-spy flickers "you are nowhere"** between sections / over the hero (`app.jsx` IO rootMargin -45/-50). Keep the last-passed id lit through inter-section gaps instead of nulling.
- **[LOW] Hero "For Owners & Developers" CTA undershoots** — lands on the What-We-Do section, not the deeper Approach page built for that audience. Judgment call: route to `go('approach')` or strengthen the "Our full capabilities" affordance.

**Already done (do not re-flag):** social URLs real + `target=_blank rel=noopener` + aria-labels (✅ `Shell.jsx:19-30`); tel/mailto well-formed; lightbox focus-trap/restore; logo bar measurement.

---

### B. Typography

- **[HIGH] Eyebrow/label token bypassed, re-implemented inline at 5+ letter-spacings** (~48 inline type props in Home.jsx + Shell.jsx). Small uppercase labels (Office/Telephone/Email, founder title/prev/edu, stat captions) are `.mono`/bare divs with inline `letterSpacing` taking six distinct values (.14/.12/.08/.1/.06/.18/.03em) across sizes 10.5–14px. Reads as subtle jitter on every repeating micro-label. Add a real `.label` class (Jost 500, 11px, .12em, uppercase, --muted); keep `.eyebrow` for kickers; target **zero inline letter-spacing in JSX**.
- **[MED] Every headline/eyebrow/serif class defined 3-4× across stacked eras** (`.h-display` at 98/494/706/814/1101; `.eyebrow` 89/820/1109; `.serif`, `.lede`, `.caps` similarly). Only the last wins; the superseded ones carry contradictory weights/transforms that mislead editors (`.caps` flips uppercase→none→uppercase). **This is the root cause of half the type + color findings.** Collapse to one authoritative block (PUNCHLIST P2). ✅ verified — see also Style §C and Layout §D, same disease.
- **[MED] Display weight 200 risks reading fragile at hero scale on linen** (`.h-display`/`.h-1`/`.wwd__lead`/`.num` wt200, clamp up to 122–148px). Hairline strokes on warm linen are most vulnerable to the multiply grain layer (:1130) at 1x DPI; for a firm selling *permanence*, 200 telegraphs gallery-minimal over institutional-solid. Test stat `.num` figures and `.h-1` at **wt 300**, keep 200 only for the single largest hero line.
- **[MED] `--serif`/`--mono` are misnomers (all resolve to Jost) — a permanent editor trap.** A future editor applying `var(--mono)` to tabular data gets proportional Jost. Alias `--serif`/`--mono` → `--sans` (or rename to `.t-display`/`.t-label`) and delete the 3 dead `font-optical-sizing:auto` declarations (does nothing on Jost). ✅ documented in PROJECT.md §3.
- **[LOW] Polish:** default body to a `~66ch` measure (currently inline 44–64ch); add `text-wrap:balance` to `.h-1/.h-2/.h-3` (kills headline orphans); delete dead `.nav__logo` block (:296-303); ladder the five mid-scale heading sizes to one modular ratio.

---

### C. Visual Style & Color

The STONE & LINEN system is genuinely strong (disciplined single bronze accent, AA `--accent-deep`, rad:0 hardware, functional motion, unified filmic grade). The problem is archaeological, not aesthetic — five stacked eras leave a large dead surface and scattered raw hex.

- **[HIGH] Delete the off-brand onyx/gold theme block** (`styles.css:38-53`, `--accent:#CBA75F`). Confirmed unreachable (no `data-theme` anywhere). Single most dangerous dead block — a future dark-mode toggle would silently inherit a gold accent and break the single-accent rule. If dark mode is wanted later, derive from `--bone/--ink` swap with the **same bronze** accent. ✅ PUNCHLIST P0.
- **[HIGH] ~15 component classes fully styled but never rendered** (marquee, topbar, seal/sealSpin, glow-tr/bl, cine-vignette, route-wipe, statline, nav__mark, mo-line, 3 btn variants). ✅ Cross-file grep confirms **0 JSX references** for each (the lone `manifesto` hit is a motion.js binder with no DOM node). ~120-150 lines incl. keyframes + media queries for UI that doesn't exist. Single cleanup pass, verifying each deletion against the grep map.
- **[HIGH] Old-gold + garnet rgba literals survive in glow/cursor** (`rgba(191,164,111,*)` at :673/:685, `rgba(110,31,31,.06)` at :883). These are the *old champagne-gold* and *NOIR garnet*, not bronze — landmines if those (currently dead) features are re-enabled. Cleanest fix: delete with the dead glow/cursor blocks; else recolor via `color-mix(in oklab, var(--accent) …)`.
- **[MED] Same type/section selectors defined 3-4× (append-order wins)** — see Typography §B. `.section--ink` restated 4×; Ivory/Fraunces middle era sets dead optical-sizing/weight 360-380. **#1 readability tax in the file.** Fold final Stone & Linen values into the base definitions; delete the superseded overrides (~812-925). ✅ PUNCHLIST P2 — worth elevating; underpins this whole dimension + Layout §D.
- **[MED] Raw hex bypasses tokens in live rules** — `#fff` on bronze fills (`.chip--active` :268, `.social:hover` :410; system on-accent is the warmer `--on-accent #F2ECDE`), `#050506` footer (:400), `#100D0A` wells (:1084). Swap `#fff`→`var(--on-accent)`; introduce `--footer-bg`/`--well` tokens; drop `#14130D` with the dead gold buttons. ✅ PUNCHLIST P2.
- **[MED] Flat elevation vocabulary** — dark plates (.track/.pillar/.sector) separate from linen by only a 1px rule; the only box-shadows in 1200 lines are on the lightbox. Add 2-3 whisper-soft warm-umber elevation tokens (`--shadow-md: 0 20px 50px -30px rgba(46,42,34,.25)`) and apply to dark-plate groups on light sections. Cheapest single move toward perceived craft; keep it subtle to preserve editorial calm.
- **[MED] Focus-visible ring uses bright `--accent`** (`:73-77`, `2px solid #9A6A3E`) — ~3.5:1 on linen (the exact reason `--accent-deep` exists) and weak on dark plates. Use a context-aware ring: `--accent-deep` + a `--bone` offset halo on light, `outline-color: var(--bone)` under `.section--ink`. WCAG non-negotiable on a site that gates the lead form behind keyboard nav.
- **[LOW] Film grain redefined 3× with conflicting blend modes** (normal/screen/multiply at :648/:886/:1087/:1130; only multiply/.028 wins). The screen/.05 variant was tuned for a black page and would lighten linen if it ever won. Collapse to one definition; keep the "static, not animated" comment.
- **[LOW] Stale "red/bordeaux/garnet" color comments** (:6, :831, :883, :1096, :1134) invite reintroduction of the wrong hue — the live accent is oxidized bronze. Pure comment edits; protect palette integrity at the source. ✅ PROJECT.md §7.

---

### D. Sizing, Spacing, Layout & Responsive

Desktop is strong (12-col/24px grid, fluid clamp scale, 94→180px rhythm). The real weakness is **mobile, inside JSX inline grids that bypass the CSS grid system.**

- **[HIGH] Inquiry form stays two-column on phones** (`Home.jsx:516`, inline `gridTemplateColumns:'1fr 1fr'`, no breakpoint). ✅ verified. On a 360-390px phone the Name/Email/Location/Role inputs (borderless 16px underline style) clip placeholders into ~150px cells — the single most conversion-critical surface looks broken. Give it a class with `@media (max-width:560px){ grid-template-columns:1fr }`. The Message field already spans full width.
- **[HIGH] "How We Invest" principles (repeat(4)) and Founder stats (repeat(3)) never collapse** (`Home.jsx:332`, `:404`). ✅ verified — both inline, no responsive rule. At 360px the four principles wrap titles to 3-4 lines; the three founder stats crush inside an already-narrowed `.col-5`. The page is inconsistent with itself — the WWD pillars right above use `.wwd-grid` which *does* collapse. Move both to classes: principles 4→2 (~760)→1 (~480); founder stats 3→1 once `.col-5` stacks at 900.
- **[MED] Layered, contradictory `.section` padding cascade** — `.section` defined at :135 (80→140), :493 mobile override (56→96, written against the *first* def), :825 desktop winner (94→180). ✅ verified. The mobile/desktop relationship is now coincidental, not designed; editing :825 won't reveal that :493 silently overrides below 760px. Consolidate to one clamp (`clamp(64px,9vw,180px)`); delete :135 and :493. Fold into the PUNCHLIST P2 one-block task — **same era-stacking disease as §B/§C.**
- **[MED] Fragmented breakpoint architecture — 10 distinct thresholds** (480/560/600/640/720/760/860/900/1000/1180), with a real **nav/grid dead-band**: nav burger appears at 860 (:374) but the 12-col grid doesn't stack until 900 (:483). At 861-900px you get a mobile burger above a still-two-column body. Adopt a documented token scale (560/768/1024/1280), snap components to it; at minimum align nav and grid-12 to the same value to kill the dead-band.
- **[MED] Hero CTAs cramp/stagger in the 720-900px band** (`Home.jsx:114-124`, right-aligned `.col-6` with `flexWrap:wrap`). For a 3-second-clarity hero this is the most important CTA placement. At ≤760px switch the button group to `flex-direction:column` + `justify-content:flex-start` (or full-width `flex:1`) for a clean stacked pair.
- **[LOW] Tablet (760-1000px) collapses pillars/sectors/wwd straight to 1-column**, wasting horizontal linen and stretching line length on a device a principal actually uses. Add an intermediate 2-up step (mirror how `.cap-grid`/`.flow`/`.statband` already step).
- **[LOW] Footer micro-link tap targets < 44px** (`Shell.jsx:172-174, 196-197`, 11/10.5px text + 3px padding). WCAG 2.5.5 / Apple HIG want ≥44px. Give `padding:10px 0` (or `min-height:44px`) and ~16px wrap row-gap. (Drawer links + burger are already correctly sized.)
- **[LOW] Reel/cine plates use `vh` not `svh`** (`Home.jsx:262`, `Approach.jsx:84`) while the hero correctly uses `100svh`. On mobile Safari `86vh` overshoots the visible area and can push the caption below the fold until the URL bar collapses. Switch both to `svh` for consistency.
- **[LOW] Hero `minHeight:100svh` not floored for short landscape phones** (`Home.jsx:83`) — content can crowd in `space-between` at ~375px tall. Add `@media (orientation:landscape) and (max-height:520px)` reducing top pad and letting the section grow.
- **[LOW] Triplicated `top:72` magic number** (`app.jsx` NAV_OFFSET, `styles.css` scroll-margin-top, `Projects.jsx:123` sticky). Promote to `--nav-h:72px` referenced everywhere; zero visual change, removes drift risk.

---

### E. Imagery

Sound system (single AVIF Wix helper, unified filmic grade, warm-correction cascade, keyboard lightbox with neighbor preload). Gaps:

- **[HIGH] Responsive delivery: only the hero has srcset/sizes** — every other photo ships one fixed width (collage w:1300, grid w:1100, sectors w:1500, featured w:1900). ✅ verified. Same bytes to a 390px phone and a 1440px desktop → mobile overfetch (hurts LCP/INP + the ≤170KB budget) and retina softening. Add a 3-width srcSet helper from one PHOTO key + `sizes` per slot; wire into collage, pair, sector, featured, gallery-grid. (Lightbox w:2000 acceptable.)
- **[HIGH] Two low-res PNG renderings get full-bleed cover treatment** — Casablanca (2100×1290) & Alexandria (1932×1302) are the *entire* Small-Lot Subdivisions tab (`Placeholder.jsx:52-53`, `Projects.jsx:84-92`), each a one-image "gallery" used as cover too. ✅ verified `.png` site-plan renderings vs 6720px photography elsewhere — visibly soft when the featured slot requests w:1900 from a 2100px source. Closest thing left to the old weak-shot problem, in the most exposed (cover) slot. Replace with real photography if it exists; else request higher-res export, label honestly as "Rendering" with a caption chip, and fold both into one editorial block.
- **[MED] Gallery/lightbox alt text is generic** (`Projects.jsx:144/176/281/295`: `p.name` / `photograph ${i+1}` / `Thumbnail ${k+1}`; `Placeholder.jsx:89` hardcodes `alt=""`). ⚠️ Scope corrected: Home collage + Genesee pair already have good alt. Author descriptive scene+place alt for the gallery (e.g. "One Oak — glass living pavilion over the Sunset Strip at dusk"), make the Placeholder real-image branch accept an `alt` prop, keep `alt=""` only on the decorative cine plates. WCAG-AA + SEO/AI-summarization signal (the photos *are* the proof). **(Cross-listed under A11y.)**
- **[MED] No width/height / intrinsic aspect-ratio on `<img>` app-wide** — CLS rests entirely on CSS wrapper `aspect-ratio`. ✅ Projects has 3 height attrs; Home/Approach have 0. Pixel dims are encoded in the Wix IDs (`_d_6720_4480_`) so a tiny parser can derive ratio. Reserve space on the element. ✅ PUNCHLIST P2. **(Cross-listed under Perf.)**
- **[MED] Strong library underused on the one-pager** — Projects.jsx proves deep high-res inventory (Casa Mani 6720×4480, House G 5760, Le Bijou, etc.) but Investment/Management/What-We-Do are entirely typographic, leaving long proof-less stretches. Curate 2-3 hero-grade interiors into Investment/Management as plates; audit the 6 collage covers to ensure each is the project's single strongest frame (some are `gallery[0]` by default). Selection, not sourcing.
- **[MED] Reel poster requested at only w:1200** for a full-viewport plate (`Home.jsx:263`) → upscaled/soft pre-roll on wide desktop; and the `<video>` itself receives no filmic grade, so poster→video can visibly cool warmer→neutral. Bump poster to a 1200/2000 srcset; after the film re-encode, match the encoded color to the `.img` grade (saturate .86 / sepia .07) or apply a light CSS filter to `.cine__vid`.
- **[LOW] `wix()` overfetch** — defaults `h=w`, mode=fit, so a square bounding box is fetched then CSS crops; q=88 is generous for rail thumbnails (w:220). Let callers pass target aspect (or mode=fill with exact w×h); drop rail quality to ~70. Pairs naturally with the srcset work.

---

### F. Performance, SEO, Accessibility & Content (cross-cutting)

Strong foundation (JSON-LD ProfessionalService, full OG/Twitter, canonical, robots+sitemap, pinned+SRI React, fetchpriority LCP poster, defensive motion layer, single-h1-per-view). Three issues materially undercut the bar:

- **[HIGH] Hero film ~14MB autoplays** (`Home.jsx:87-101`; ✅ 14,096,124 bytes). Dominant CWV/data liability — once in view the full file streams/decodes on the LCP viewport competing with the poster on cellular; risks LCP > 2.5s and INP > 200ms. Playback engineering is already done; only the asset needs work. Re-encode to ~2-4MB (H.264 CRF 26-28 1080p) + a 720p mobile source + WebM/AV1 via `<source>`, served by `(max-width:768px)`/`(prefers-reduced-data)` media attrs; keep `preload=metadata` + play-on-intersection. **Single biggest CWV lever.** ✅ PUNCHLIST P1.
- **[HIGH] Inquiry form has no backend** (`Home.jsx:463` `FORM_ENDPOINT=""`). ✅ verified — `submit()` builds a `mailto:` (`:491`) and unconditionally `setSent(true)` while the success panel asserts "received your message… within one business day" (`:502`). On webmail/locked-down machines the mailto opens nothing and the lead is lost with a *false* confirmation. Every nav path funnels here. Wire to Formspree/Basin/serverless → info@noesisusa.com (the fetch path at :478-487 already handles success/error); until then, gate the "received" headline on real delivery, not on `setSent`. ✅ PUNCHLIST P0.
- **[HIGH] Form labels not associated with inputs** (`Home.jsx:517-530`, bare `<label>` + sibling `<input>`, no htmlFor/id). ✅ verified. SR announces inputs as unlabeled; clicking labels doesn't focus. WCAG 3.3.2 + 4.1.2 failure on the one conversion surface; axe flags serious. (The `role=status`/`aria-live=polite` error region at :531 is correct.) Add unique id + htmlFor (or wrap input in label) + aria-describedby→error region. Trivial, high-impact.
- **[HIGH] Canonical + OG + JSON-LD + sitemap all point at `yahbi.github.io/noesis-site`** (`Noesis Website.html:12/19/26`, build.sh SITE_URL). ✅ verified. Ranking + link-preview equity accrues to a personal GitHub username, and the URL reads unfinished in any shared preview. Launch blocker the moment DNS lands: one SITE_URL source of truth → `https://noesisusa.com`, add a CNAME. ✅ PUNCHLIST P1.
- **[MED] OG image — verify, don't rewrite.** ⚠️ Corrected: the `…/q_85/og.jpg` URL returns **HTTP 200** (curl-confirmed) — it is NOT broken. Keep it; optionally re-validate via LinkedIn Post Inspector before launch and consider a purpose-built 1200×630 OG card (logo + tagline) for stronger previews. Downgraded from the reviewers' "likely 404."
- **[MED] No credibility proof for an institutional audience** — copy asserts "fifteen years" / "a record owners trust" but there are no testimonials, named partners, or a consolidated track-record band, and the team section isn't built (roster + headshot keys exist). ✅ Largest content gap. Add a stat band (projects/years/markets/$ where shareable), 1-2 attributed testimonials, and build the team section. **Blocked on client for testimonials/headshots.** ✅ PUNCHLIST P2.
- **[MED] Footer Disclosures/Privacy dead** — same as §A HIGH; rated MED here purely on the compliance/PII (GDPR/CCPA) angle since the form collects PII and the site invites accredited investors. Treat as one fix.
- **[MED] Fraunces axis** — ✅ The dev `<link>` (HTML:50) is **already Jost-only** (`family=Jost:ital,wght@…`), so there's no render-blocking Fraunces payload. The only Fraunces reference is the dead `__bundler_thumbnail` template (HTML:73-78, garnet `#6E1F1F`). Just delete/re-skin that template; confirm generated index.html/404.html match. Downgraded from "wasted font bytes." ✅ PUNCHLIST P1.
- **[LOW] GSAP/ScrollTrigger/Lenis lack SRI** (HTML:55-57) while React/Babel carry integrity+crossorigin (:103-105). ✅ verified. Add `integrity`+`crossorigin="anonymous"` or self-host the three. Aligns the motion stack with the hardened React stack. ✅ PUNCHLIST P2.
- **[LOW] British/American spelling mix** — same as §A; unify on US "Inquire/Inquiry."
- ✅ **Preserve, don't regress:** the reduced-motion contract (`styles.css:793-805/1041`, `motion.js:51-57`) and the `html.motion-ready` gating are genuinely robust (content never strands at opacity 0). No change; keep `(prefers-reduced-motion) display:none` on `.cine__vid` through the film re-encode.

---

### Cross-cutting theme (do this once, fixes many)

**The single highest-leverage refactor is collapsing styles.css to one authoritative layer (PUNCHLIST P2).** It simultaneously resolves: type defined 3-4× (§B), section-padding cascade (§D), grain redefinition + raw-hex + dead-class surface (§C). Do the dead-CSS deletion + one-block consolidation as one pass, verified against the grep map above.

---

## Ranked top 10

1. **[M] Wire the inquiry form to a real backend (Formspree/Basin/serverless → info@noesisusa.com) and gate the 'received' confirmation on actual delivery, not unconditional setSent(true). Every CTA path funnels here.** — _Perf/SEO/A11y & Content + Links/Nav_ · Critical — primary conversion path silently discards leads with a false success message
2. **[M] Re-encode the ~14MB autoplaying hero film to ~2-4MB (H.264 CRF 26-28 1080p + 720p mobile source + WebM/AV1 via <source>, served by media attrs); keep preload=metadata + play-on-intersection. Playback engineering is already done.** — _Performance_ · Highest single CWV lever — currently risks LCP>2.5s / INP>200ms on mobile
3. **[M] Author real Privacy + Disclosures content and route them (deep views mirroring 'approach' or /legal); remove the dead href='#' footer stubs.** — _Links/Nav + Content/Compliance_ · High — compliance/diligence failure for a firm soliciting accredited capital; PII collected with no privacy notice
4. **[S] Associate every form label with its input (htmlFor/id or wrap), add aria-describedby→error region. WCAG 3.3.2/4.1.2 failure on the one conversion surface.** — _Accessibility_ · High — SR users hear unlabeled inputs; axe-serious on the lead form
5. **[S] Add responsive breakpoints to the three inline JSX grids that never collapse: inquiry form (1fr 1fr), investment principles (repeat(4)), founder stats (repeat(3)). Move to classes with media queries.** — _Sizing/Responsive_ · High — the most conversion-critical surface looks broken on every phone
6. **[S] Point canonical/og:url/JSON-LD/sitemap/robots at noesisusa.com (one SITE_URL source of truth) + add a CNAME, instead of yahbi.github.io/noesis-site.** — _SEO_ · High — SEO + link-preview equity currently accrues to a personal GitHub host; reads unfinished
7. **[M] Wire view state to the URL (pushState hash in go() + popstate listener + read-hash-on-mount) so browser Back, refresh, deep-linking, and sharing the portfolio/approach pages all work.** — _Links/Nav_ · High — native Back gesture currently exits the site; deep pages unshareable
8. **[M] Add srcset/sizes to all non-hero images (collage, pair, sectors, featured, gallery grid) via a 3-width helper. Only the hero has responsive delivery today.** — _Imagery/Performance_ · High — eliminates 2-4x mobile overfetch and retina softening across 30+ images
9. **[L] Consolidate styles.css to one authoritative layer: delete the dead-CSS surface (onyx/gold theme, marquee, topbar, glow, seal, route-wipe, 3 btn variants — all 0 JSX refs) and collapse the 3-4x type/section/grain redefinitions into a single block per selector.** — _Style & Color (+ Typography, Layout)_ · High — removes ~150 lines of brand-drift landmines and the #1 readability tax; fixes type/section/grain findings at once
10. **[S] Fix all bright --accent (#9A6A3E ~3.5:1) AA failures on linen: the global focus-visible ring (context-aware --accent-deep + --bone halo) and the mobile drawer active state (drawer bg is linen, not dark — confirmed failing).** — _Style & Color / Accessibility_ · High — keyboard focus visibility is a WCAG non-negotiable on a form gated behind keyboard nav

## Quick wins (ship now, no client input)

- Change Properties Back-button aria-label from 'Back to home' to 'Back to Projects' to match its actual go('projects') target (app.jsx:104).
- Add unique id + htmlFor to the 5 form fields (or wrap inputs in labels) — pure markup, fixes the axe-serious label-association failure.
- Add a visually-hidden-until-focused 'Skip to content' link as the first focusable element targeting <main id="main"> (standard .skip-link pattern).
- Swap the focus-visible ring and mobile drawer .is-active color from --accent to --accent-deep (or context-aware) — one-token AA fix on linen.
- Delete the dead onyx/gold theme block (styles.css:38-53) — confirmed unreachable, off-brand gold accent landmine.
- Add integrity + crossorigin='anonymous' to the GSAP/ScrollTrigger/Lenis CDN tags to match the already-hardened React/Babel SRI.
- Delete / re-skin the dead __bundler_thumbnail template (HTML:73-78, garnet #6E1F1F) — the last Fraunces/garnet reference on the page.
- Add a single-column @media(max-width:560px) rule to the inquiry form grid — removes the worst mobile layout break in minutes.
- Update stale 'red/bordeaux/garnet' color comments to 'oxidized-bronze' (styles.css:6,831,1096,1134) — zero-behavior, protects the palette from accidental reintroduction.
- Replace setPage('services') with go('management') and retire the dead 'services' alias branch (Projects.jsx:199 / app.jsx:86).

## Blocked on client

- Testimonials / attributed client quotes — none exist; client must supply names + permission for an institutional-grade credibility band.
- Team section content — roster + headshot image keys exist but the section isn't built; needs final bios + approved headshots from the client.
- Quantified track-record figures (projects delivered, aggregate $ value, markets, years) that are shareable/approved for public display alongside Projects.
- Real photography (or higher-res exports) for Casablanca Homes & Alexandria Homes to replace the ~2100px PNG site-plan renderings; otherwise approval to label them 'Rendering'.
- Privacy policy + investment Disclosures legal copy (or sign-off on a drafted no-offer/PII notice) — content decision before the footer links can be wired.
- Production domain DNS / CNAME for noesisusa.com to flip canonical/OG/sitemap off the github.io host.
- Decision to confirm the form delivery endpoint (Formspree/Basin vs serverless relay) and the destination inbox.
- Final call on the British-vs-American spelling convention (recommend US 'Inquire/Inquiry') before the one-pass find/replace.
