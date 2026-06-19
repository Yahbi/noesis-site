# Noesis Group — Website Source of Truth (PROJECT.md)

> Single-page marketing site for an international owner's-representation, development-management & investment firm.
> No-build React + GSAP, served from GitHub Pages. This doc is the canonical reference — keep it current.

---

## 1. Positioning

International **owner's-representation, development-management & investment** firm. Beverly Hills + international, **founded 2009**. Delivers landmark luxury residential ($5M+) and large commercial projects **from entitlement to delivery**, and invests private capital alongside the work. Audience: HNW principals/owners, developers, and institutional/accredited investors.

**Voice:** affirmative, first-person plural, no contrastive framing. "We build what endures." "We are an international development and investment firm." "We have stood where our clients stand." Never "unlike / not just / rather than."

**Spelling:** US section header **"Inquiries"** coexists with British CTA **"Enquire / Make an Enquiry."** This is currently a mix — pick one convention and apply it across nav CTA, drawer, and form button (US identity → "Inquire/Inquiry" recommended).

---

## 2. Information Architecture

**One continuous home page** (`view="home"`) + two deep sub-views reached by `go()`:
- `view="properties"` → full `Projects` gallery (entered via "View the full portfolio"; Back → `projects`)
- `view="approach"` → `Approach` page (entered from "What We Do"; Back → `what-we-do`)

**Home section order:** Hero → About → Projects → What We Do → (cinematic plate) → Investment → Management → Inquiries.

**Section IDs** (`app.jsx` `SECTION_IDS`): `about, projects, what-we-do, investment, management, inquiries`. Nav labels in `Shell.jsx` map 1:1: About, Projects, What We Do, Investment, Management, Inquiries. `investment` and `management` are in-page sections of `Home.jsx`, not separate page components.

**Named projects (Home collage, all real, match `Projects.jsx`):** Casa Mani (Beverly Hills), One Oak (Sunset Strip), Aura House (Tel Aviv), C Thru (Beverly Grove), House G (Melrose), L'Olivier House (Los Angeles).

**Contact:** info@noesisusa.com · T (310) 855·3634 · F (424) 282·8414 (consistent across nav drawer + footer).

---

## 3. Design System — "STONE & LINEN"

Warm light-earth surface, umber text, **single oxidized-bronze accent**, set entirely in **Jost**. Square corners everywhere.

### ⚠️ THEME TOKEN GOTCHA (read before touching colors)
Token names predate the theme and are used **semantically, not literally** (documented `styles.css:6-8`):
- `--bone` = the light **SURFACE** (linen page bg), NOT a bone-white text color
- `--ink` = the dark **FOREGROUND** (umber text)
- `body { background: var(--bone); color: var(--ink) }`. **Swapping the two values flips the whole theme light↔dark.**

### Authoritative cascade
`styles.css` is three stacked eras (Fraunces "Ivory Gallery" → bronze "Stone & Linen") layered by **append order**, not edited in place. The **final appended block (~line 1095, "STONE & LINEN")** wins. Same selectors (`.h-display`, `.h-1`, `.serif`, `.eyebrow`) are defined 3–4× — only the last wins. Always edit the final block or consolidate; never trust an early definition.

### Color tokens (`:root`, final values)
| Role | Token | Value |
|---|---|---|
| Surface / linen page | `--bone` | `#E7E0D2` |
| Surface variants | `--paper` `#DED6C6` · `--paper-2` `#DBD2C2` · `--bone-soft` `rgba(236,230,216,.78)` |
| Dark plates | `--bone-2` `#28231B` · `--bone-3` `#201C15` (`.section--ink`, media wells) |
| Foreground (umber) | `--ink` | `#2E2A22` |
| Ink variants | `--ink-2` `#4A4234` · `--ink-soft` `#6F6757` · `--muted` `#948B78` · `--muted-2` `#B0A892` |
| **Accent (oxidized bronze)** | `--accent` | `#9A6A3E` |
| Accent variants | `--accent-deep` `#7A5236` · `--accent-soft` `rgba(154,106,62,.10)` · `--on-accent` `#F2ECDE` |
| Status | `--ok` `#5E8C6E` |
| Rules | `--rule` `rgba(46,42,34,.16)` · `--rule-soft` `.08` · `--rule-on-dark` `rgba(236,230,216,.18)` |

> **Contrast rule (a11y):** `--accent #9A6A3E` on `--bone` is ~3.5:1 — **fails WCAG AA for normal-size text.** Use `--accent-deep #7A5236` (~5:1) for all small/normal-size accent text; reserve bright `--accent` for fills, dots, the logo stroke, and large stat numbers.

### Typography — single family
`--serif`, `--sans`, **and** `--mono` all resolve to `"Jost", "Helvetica Neue", Arial, sans-serif` (`styles.css:29-31`). The "serif/mono" names are legacy labels — **nothing renders a real serif or monospace face.**

Scale (final block): `h-display` clamp(56→148px) wt 200 · `h-1` clamp(34→70px) wt 200 · `h-2` clamp(26→46px) wt 300 · `h-3` wt 300 · `lede` clamp(19→26px) wt 300 (`--ink-2`) · `eyebrow` 10.5px wt 500 ls .26em uppercase `--muted` · `num` wt 200 tnum · base body 15px/1.6.

### Spacing / layout
`--maxw 1480px` · `--pad-x clamp(22px,4.5vw,72px)` · `--rad 0px` (square corners) · `.section` padding clamp(94px→180px) · `grid-12` = 12 cols / 24px gap.

### Logo mechanics (`components/Shell.jsx` `Logo()`)
`<span.logo__word>NOESIS</span>` + `<span.logo__bar>`. A `useLayoutEffect` uses `document.createRange` to measure live glyph rects of index 1 (O) and index 2 (E) and sets `bar.style.left/width` to span center-of-O → center-of-E. Re-runs on rAF, window resize, and `document.fonts.ready`. CSS fallback before measurement: `left:27% width:20%`. Bar is 1.5px, `background: var(--accent)` (bronze), `border-radius:999px`, vertically centered. `.nav--over` flips the word to `--bone`.
> The bar is **bronze `#9A6A3E`**. Code comments still call it the "red line" / "red-line logo" — **stale wording, correct color.**

### Motion safety contract
Content is pre-hidden (`opacity:0`) **only** under `html.motion-ready` (`styles.css:507-514`), which is set only when gsap+ScrollTrigger are present, motion isn't reduced, and the tab is visible. So a CDN failure, reduced-motion, or a frozen-rAF hidden tab **never strands content invisible.** Reveal is driven by `motion.js`/ScrollTrigger; `prefers-reduced-motion` forces `.reveal` opacity:1. Preloader lift is pure CSS (`plLift`) so it always clears.
> **Preview rAF gotcha:** never gate content visibility on `requestAnimationFrame` — the preview runs as a hidden tab where rAF is frozen.

---

## 4. Architecture (one page)

**Dual runtime, one HTML template:**
- **Dev** = `Noesis Website.html` — loads dev React 18.3.1 + `@babel/standalone` 7.29.0 and compiles each `.jsx` in-browser via `<script type="text/babel">`.
- **Prod** = `build.sh` precompiles all JSX → one `bundle.js`, emits `index.html` + `404.html` wired to `react.production.min` + `bundle.js` (no in-browser Babel).

**Runtime model:** `app.jsx` `App` holds `view` (`"home" | "properties" | "approach"`) and `active` (scroll-spy). `go(id)` is the single nav entry point: `properties`/`approach` switch view + scroll-to-top; otherwise if not on home it stashes `pending.current`, jumps home, then scrolls once mounted; else `scrollToId`.

**Smooth scroll:** `scrollToId` uses Lenis (`window.__motion.lenis`) with `offset: -NAV_OFFSET (72)`, duration 1.1, falling back to native scroll. `top`/`hero` → 0.

**Scroll-spy:** IntersectionObserver over `SECTION_IDS`, `rootMargin '-45% 0px -50% 0px'`; disabled (`active=null`) when `view!=='home'`.

**Nav:** `Shell.jsx` fixed header; scroll listener toggles `nav--scrolled` (y>12) and `nav--over` (light text over hero film while `y < innerHeight-110`); burger drawer locks body overflow.

**Motion contract:** `motion.js` exposes `window.__motion = { refresh, lenis }`; `app.jsx` calls `__motion.refresh()` after every view switch.

### File map
| File | Role |
|---|---|
| `app.jsx` | App shell, view state, scroll-spy, nav routing (**the only tracked entry; `App.jsx` is an untracked byte-identical duplicate — delete it**) |
| `components/Shell.jsx` | Nav, Logo, Footer, SocialRow |
| `components/Placeholder.jsx` | **Load-bearing:** exports `window.wix` (Wix URL builder) + `window.PHOTO` (photo map) used live by Home/Projects. Also defines a dead `<Placeholder>` component. |
| `pages/Home.jsx` | The one-pager (incl. investment + management sections) |
| `pages/Projects.jsx` | Full gallery (`properties` view) + lightbox |
| `pages/Approach.jsx` | **LIVE** `approach` sub-view |
| `pages/Services.jsx`, `About.jsx`, `Contact.jsx`, `Investment.jsx` | **DEAD** — assigned to `window.*` but never rendered (content inlined into Home). ~36.7 KB raw source. |
| `tweaks-panel.jsx` | Internal `?tweaks=1` design panel |
| `motion.js` | GSAP/Lenis/ScrollTrigger layer |
| `styles.css` | Three stacked eras; final block authoritative |
| `bundle.js`, `index.html`, `404.html` | **Generated artifacts, git-tracked** (Pages serves them) — never hand-edit; regenerate via `build.sh` |

---

## 5. Deploy Flow

1. (Dev) Hand-bump the single `?v=` value across the 12 dev-HTML `<script>`/`<link>` tags (currently `?v=1781906511`) — **manual, error-prone**.
2. Run `./build.sh` — concatenates JSX **in load order** (must match the dev HTML order by hand), auto-stamps prod with `V=$(date +%s)`, writes `index.html` + `404.html` (404 mirrors index, injects `robots: index,follow`).
3. Commit/push branch `main` → `origin https://github.com/Yahbi/noesis-site.git`. Served by **GitHub Pages**. Only `.DS_Store` + `node_modules` are gitignored.
4. Poll the live site.

> ⚠️ **Two hand-maintained load-order lists** (build.sh babel line + dev HTML script tags) must stay in lockstep or dev and prod diverge silently.

---

## 6. SEO / Credibility State (gaps)

Present: title, ~330-char description, og:title/description/type/image, twitter:card, theme-color, canonical. **Missing/broken:** JSON-LD Organization schema (none); `og:image` URL malformed (`/og.jpg` appended to a Wix transform path — likely 404 in link previews); canonical points to `yahbi.github.io/noesis-site` not `noesisusa.com`; no `og:url`/`og:site_name`/`twitter:title`/`twitter:image`; no robots.txt/sitemap.xml. **Dead links:** all social icons + footer Disclosures/Privacy are `href="#" preventDefault`. **No backend:** inquiry form only `setSent(true)` — submissions silently discarded despite "we'll respond" confirmation. **No proof:** no quantified track record, named partners, bios, or testimonials for a $5M+/institutional audience.

---

## 7. Known Cruft (full list in punch-list)
Dead onyx/gold theme block (`styles.css:38-53`, off-brand gold `#CBA75F`); NOIR-era garnet+Fraunces `__bundler_thumbnail` template (dev HTML 43-50); unused Fraunces font payload; triple-stacked type definitions; unused `.btn--gold/--gline/--light`; hardcoded hex (`#fff`, `#050506`, `#100D0A`, `#14130D`) bypassing tokens; stale "red"/"bordeaux" comments.
