#!/usr/bin/env bash
# env bash, not /bin/zsh: the CI runner has no zsh, and the script uses no
# zsh-only syntax — verified byte-identical output under both shells.
# Production build — precompile all JSX into one bundle.js, then generate a REAL
# static page per route (each with its own title/meta/canonical + window.__ROUTE)
# so every destination returns 200 and is crawlable. Dev workflow is untouched:
# "Noesis Website.html" still compiles in-browser.
set -e
cd "$(dirname "$0")"

# Cache-bust stamp. Overridable so a build can be reproduced byte-for-byte:
# CI pins BUILD_V to the stamp already committed, rebuilds, and diffs — any
# difference means source and generated artifacts have drifted apart.
V="${BUILD_V:-$(date +%s)}"

# Where the site is served from (used for <base href>, canonical URLs, OG tags
# and structured data). Override for a custom domain WITHOUT touching any file:
#   SITE_URL="https://noesisusa.com/" BASE_PATH="/" ./build.sh
# See GOLIVE.md for the full cutover sequence.
SITE_URL="${SITE_URL:-https://yahbi.github.io/noesis-site/}"
BASE_PATH="${BASE_PATH:-/noesis-site/}"

# 1) Transform JSX -> plain JS, concatenated in load order (same as the dev HTML).
# Use the LOCAL babel explicitly. `npx babel` silently falls back to the
# deprecated Babel 5.8.38 package from npm when node_modules is missing, which
# cannot parse modern syntax — the build then fails in confusing ways.
if [ ! -x node_modules/.bin/babel ]; then
  echo "babel missing — running npm install" >&2
  npm install --no-audit --no-fund >/dev/null
fi
./node_modules/.bin/babel \
  tweaks-panel.jsx \
  components/Placeholder.jsx \
  components/Shell.jsx \
  components/ScrollHero.jsx \
  pages/Home.jsx \
  pages/Development.jsx \
  pages/Investment.jsx \
  pages/Firm.jsx \
  pages/Inquiries.jsx \
  pages/Approach.jsx \
  pages/Projects.jsx \
  pages/ProjectStory.jsx \
  app.jsx \
  --presets=@babel/preset-react --no-comments -o bundle.js
echo "bundle.js: $(wc -c < bundle.js) bytes"

# 2) Generate the production shell + one static page per route.
python3 - "$V" "$SITE_URL" "$BASE_PATH" <<'PY'
import re, sys, os, html, json, shutil

v, SITE_URL, BASE_PATH = sys.argv[1], sys.argv[2], sys.argv[3]
src = open("Noesis Website.html", encoding="utf-8").read()
# The dev template hardcodes the github.io URL; normalise it to whatever SITE_URL
# is so a domain switch updates canonical, og:url AND the JSON-LD in one move.
src = src.replace("https://yahbi.github.io/noesis-site/", SITE_URL)

prod_scripts = f'''  <!-- Production: precompiled bundle, no in-browser compilation -->
  <script defer src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" integrity="sha384-DGyLxAyjq0f9SPpVevD6IgztCFlnMF6oW/XQGmfe+IsZ8TqEiDrcHkMLKI6fiB/Z" crossorigin="anonymous"></script>
  <script defer src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" integrity="sha384-gTGxhz21lVGYNMcdJOyq01Edg0jhn/c22nsx0kyqP0TxaV5WVdsSH1fSDUf5YJj1" crossorigin="anonymous"></script>
  <script defer src="motion.js?v={v}"></script>
  <script defer src="bundle.js?v={v}"></script>

</body>'''
shell, n = re.subn(r"  <!-- React \+ Babel.*</body>", prod_scripts, src, flags=re.S)
assert n == 1, "script block not found"
# The template carries a hardcoded ?v= on styles.css; without restamping it every
# build, browsers keep serving their cached stylesheet no matter what changed.
shell = re.sub(r'styles\.css\?v=\d+', f'styles.css?v={v}', shell)
# Optional, provider-agnostic analytics: create analytics.html containing the
# snippet your provider gives you (Cloudflare, Plausible, Fathom...) and it is
# injected into every page. Absent file = no tracking, no cookie banner needed.
if os.path.exists("analytics.html"):
    _snippet = open("analytics.html", encoding="utf-8").read().strip()
    if _snippet:
        shell = shell.replace("</head>", "  " + _snippet + "\n</head>", 1)

shell = shell.replace('content="width=device-width, initial-scale=1">',
                      'content="width=device-width, initial-scale=1">\n  <meta name="robots" content="index, follow">', 1)

# ── project list (id + name + loc + year) straight from the data file ────────
proj_src = open("pages/Projects.jsx", encoding="utf-8").read()
projects = [
    {"id": m.group(1), "name": m.group(2), "loc": m.group(3), "year": m.group(4)}
    for m in re.finditer(r'\{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*loc:\s*"([^"]+)",\s*year:\s*"([^"]*)"', proj_src)
]
# small-lot entries carry no year
projects += [
    {"id": m.group(1), "name": m.group(2), "loc": m.group(3), "year": ""}
    for m in re.finditer(r'\{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*loc:\s*"([^"]+)",\s*gallery:', proj_src)
]
seen, uniq = set(), []
for p in projects:
    if p["id"] not in seen:
        seen.add(p["id"]); uniq.append(p)
projects = uniq

FIRM = "Noesis Group"
# The seven top-level destinations, linked from every page's <noscript> fallback.
NOSCRIPT_NAV = [
    ("",             "Home"),
    ("development/", "Development"),
    ("investment/",  "Investment"),
    ("portfolio/",   "Portfolio"),
    ("owners-rep/",  "Owner's Representation"),
    ("firm/",        "The Firm"),
    ("inquiries/",   "Inquiries"),
]

ROUTES = [
    ("",             "home",        f"{FIRM} — Real Estate Development & Investment | Owner's Representation",
     "Noesis is an international real-estate development and investment firm based in Beverly Hills. We build what we invest in — luxury residences, small-lot subdivisions and apartment buildings — and offer owner's representation to a select few owners.",
     "We build what we invest in.",
     "An international real-estate development and investment firm — Beverly Hills, est. 2009."),
    ("development/", "development", f"Development — From Land to Landmark | {FIRM}",
     "Noesis conceives, entitles, designs and builds its own real estate: luxury residences, small-lot subdivisions and apartment buildings — with architecture, interior design and general contracting in house.",
     "From land to landmark.",
     "What we develop, the design philosophy, the craft — architecture, interior design and general contracting — and the five-gate delivery model."),
    ("investment/",  "investment",  f"Investment — Capital, Aligned | {FIRM}",
     "Noesis originates, structures and stewards real-estate investments for an aligned network of private capital, with the operator invested alongside. Opportunistic, value-add and hybrid stabilized strategies.",
     "Capital, aligned.",
     "Three strategies — Opportunistic (2–3 years), Value-Add (7–10 years) and Hybrid Stabilized (long term) — and the principles behind them. No offer or solicitation."),
    ("portfolio/",   "properties",  f"Portfolio · The Record | {FIRM}",
     "Twenty-eight projects by the Noesis team since 2009 — twenty-one delivered, seven in development — across luxury residences, apartment buildings and small-lot subdivisions in Los Angeles, Beverly Hills, Tel Aviv, Joshua Tree and Miami Beach.",
     "The delivered record.",
     "Twenty-eight projects: 21 private residences, 5 apartment buildings and 2 small-lot subdivisions — twenty-one of them delivered."),
    ("owners-rep/",  "owners-rep",  f"Owner's Representation & Project Management | {FIRM}",
     "Noesis Group handles every aspect of your construction project — one point of contact from site preparation through building completion, with all zoning, permitting, approvals and entitlements managed.",
     "Our discipline, your project.",
     "Project management and owner's representation, architecture and design, interior design, general contracting, feasibility and entitlement, and consulting."),
    ("firm/",        "firm",        f"The Firm & Founder | {FIRM}",
     "Noesis is the Greek word for understanding. A real-estate development and investment firm founded in 2009, based in Beverly Hills and working internationally. Founded by Igal N. Azran.",
     "Perception by intellect.",
     "Founded 2009 in Beverly Hills by Igal N. Azran — previously CIM Group and CBRE, MSc Real Estate."),
    ("inquiries/",   "inquiries",   f"Inquiries — Request an Introduction | {FIRM}",
     "Whether you have capital to deploy or a project to deliver, Noesis welcomes a confidential conversation. 8383 Wilshire Blvd, Suite 740, Beverly Hills, CA 90211.",
     "Let's begin.",
     "8383 Wilshire Blvd, Suite 740, Beverly Hills, CA 90211 · T (310) 855-3634 · info@noesisusa.com"),
]
for p in projects:
    where = ", ".join(x for x in [p["loc"], p["year"]] if x)
    ROUTES.append((
        f"portfolio/{p['id']}/", f"story:{p['id']}",
        f"{p['name']} · Portfolio | {FIRM}",
        f"{p['name']} — {where}. Conceived, developed and delivered by Noesis Group.",
        p["name"], where,
    ))

# ── per-route og:image ───────────────────────────────────────────────────────
# Every page used to share Casa Mani's card; a shared story link now previews
# with that project's own cover. CDN covers use fill (exact 1200x630 crop);
# pillar pages use their local hero assets.
gal_first = dict(re.findall(r'"([a-z0-9-]+)":\s*\["(5c383b_[^"]+)"', proj_src))       # GAL key -> first wix id
apt_first = dict(re.findall(r'(\w+):\s+\["(\w+)"', proj_src))                          # APT key -> first PHOTO key
placeholder_src = open("components/Placeholder.jsx", encoding="utf-8").read()
photo_map = dict(re.findall(r'(\w+):\s+"(5c383b_[^"]+)"', placeholder_src))
# Ids the wix() gate serves from LOCAL enhanced files (fully or above 2200px) —
# a CDN preload for these would fight the real request and download twice.
locally_served = set(re.findall(r'"(5c383b_[^"]+)"\s*:\s*"assets/img/', placeholder_src))

def cdn_card(wix_id):
    return f"https://static.wixstatic.com/media/{wix_id}/v1/fill/w_1200,h_630,al_c,q_85/og.jpg"

story_wid = {}
for m in re.finditer(r'\{\s*id:\s*"([^"]+)"[^}]*?gallery:\s*(GAL\["([a-z0-9-]+)"\]|APT\.(\w+))[^}]*?(?:cover:\s*"(\w+)")?', proj_src):
    pid, _, galkey, aptkey, cover = m.group(1), m.group(2), m.group(3), m.group(4), m.group(5)
    wid = None
    if cover and cover in photo_map: wid = photo_map[cover]
    elif galkey and galkey in gal_first: wid = gal_first[galkey]
    elif aptkey and aptkey in apt_first: wid = photo_map.get(apt_first[aptkey])
    if wid: story_wid[pid] = wid
story_cover = {pid: cdn_card(wid) for pid, wid in story_wid.items()}

OG_IMAGES = {
    "development/": SITE_URL + "assets/img/dev-facade.jpg",
    "investment/":  SITE_URL + "assets/img/inv-sunset.jpg",
    "owners-rep/":  SITE_URL + "assets/img/or-living.jpg",
    "firm/":        SITE_URL + "assets/img/firm-living.jpg",
    "portfolio/":   cdn_card("5c383b_38f5ef1da26e4204b8e465e79f378f2e~mv2.jpg"),      # One Oak
}
for pid, url in story_cover.items():
    OG_IMAGES[f"portfolio/{pid}/"] = url

def page(path, route, title, desc, heading, blurb):
    h = shell
    canonical = SITE_URL + path
    # Per-route social card + matching structured-data image.
    og = OG_IMAGES.get(path)
    if og:
        h = re.sub(r'<meta property="og:image" content=".*?">',
                   '<meta property="og:image" content="' + html.escape(og, quote=True) + '">', h, count=1)
        h = re.sub(r'<meta name="twitter:image" content=".*?">',
                   '<meta name="twitter:image" content="' + html.escape(og, quote=True) + '">', h, count=1)
    # Breadcrumb trail for crawlers on every sub-page.
    if path:
        segs = [("Home", SITE_URL)]
        if path.startswith("portfolio/") and path != "portfolio/":
            segs.append(("Portfolio", SITE_URL + "portfolio/"))
        segs.append((heading, canonical))
        crumbs = {"@context": "https://schema.org", "@type": "BreadcrumbList",
                  "itemListElement": [{"@type": "ListItem", "position": i + 1, "name": n, "item": u}
                                       for i, (n, u) in enumerate(segs)]}
        h = h.replace("</head>", '  <script type="application/ld+json">' + json.dumps(crumbs) + "</script>\n</head>", 1)
    # The hero image is the LCP element on home and every story cover — tell the
    # browser before the bundle even parses.
    hero = None
    if route == "home":
        hero = "5c383b_a9f6aa50d3a44559aee6289afe36ebcf~mv2_d_6720_4480_s_4_2.jpg"
    elif route.startswith("story:"):
        hero = story_wid.get(route[6:])
    if hero in locally_served:
        hero = None
    if hero:
        srcset = ", ".join(f"https://static.wixstatic.com/media/{hero}/v1/fit/w_{w},h_{w},al_c,q_88,enc_avif,quality_auto/{hero} {w}w" for w in (1200, 2000, 2600, 3400))
        h = h.replace("</head>", f'  <link rel="preload" as="image" imagesrcset="{srcset}" imagesizes="100vw" fetchpriority="high">\n</head>', 1)
    h = re.sub(r"<title>.*?</title>", "<title>" + html.escape(title) + "</title>", h, count=1, flags=re.S)
    h = re.sub(r'<meta name="description" content=".*?">',
               '<meta name="description" content="' + html.escape(desc, quote=True) + '">', h, count=1, flags=re.S)
    h = re.sub(r'<meta property="og:title" content=".*?">',
               '<meta property="og:title" content="' + html.escape(title, quote=True) + '">', h, count=1, flags=re.S)
    h = re.sub(r'<meta name="twitter:title" content=".*?">',
               '<meta name="twitter:title" content="' + html.escape(title, quote=True) + '">', h, count=1, flags=re.S)
    h = re.sub(r'<meta property="og:description" content=".*?">',
               '<meta property="og:description" content="' + html.escape(desc, quote=True) + '">', h, count=1, flags=re.S)
    h = re.sub(r'<meta name="twitter:description" content=".*?">',
               '<meta name="twitter:description" content="' + html.escape(desc, quote=True) + '">', h, count=1, flags=re.S)
    h = h.replace('<meta property="og:url" content="' + SITE_URL + '">',
                  '<meta property="og:url" content="' + canonical + '">', 1)
    h = h.replace('<link rel="canonical" href="' + SITE_URL + '">',
                  '<link rel="canonical" href="' + canonical + '">', 1)
    # Every page, root included: the app pushStates to sub-paths, so relative
    # assets on the home document would otherwise re-resolve against the new
    # route directory after a nav click and 404.
    h = h.replace("<head>", '<head>\n  <base href="' + BASE_PATH + '">', 1)
    # tell the app which destination this page is, before the bundle runs
    h = h.replace("<body", '<script>window.__ROUTE=' + json.dumps(route) + ';</script>\n<body', 1)
    # a crawlable summary for bots that do not execute JS
    # Without links the fallback was a dead end: a crawler that does not run JS
    # could read one page and had no way to reach the other 23.
    nav_links = ''.join(
        '<li><a href="' + BASE_PATH + p + '" style="color:#7A5236">' + html.escape(t) + '</a></li>'
        for p, t in NOSCRIPT_NAV if p != path)
    noscript = ('  <noscript><div style="max-width:60ch;margin:120px auto;padding:0 24px;font-family:Jost,Helvetica,Arial,sans-serif;color:#2E2A22">'
                '<h1>' + html.escape(heading) + '</h1><p>' + html.escape(blurb) + '</p>'
                '<p>' + html.escape(desc) + '</p>'
                '<nav aria-label="Sections"><ul style="list-style:none;padding:0;line-height:2">'
                + nav_links + '</ul></nav></div></noscript>\n')
    h = h.replace('  <div id="root"></div>', noscript + '  <div id="root"></div>', 1)
    return h

written = []
for path, route, title, desc, heading, blurb in ROUTES:
    out = page(path, route, title, desc, heading, blurb)
    if path:
        os.makedirs(path, exist_ok=True)
        open(path + "index.html", "w", encoding="utf-8").write(out)
    else:
        open("index.html", "w", encoding="utf-8").write(out)
        open("404.html", "w", encoding="utf-8").write(out)   # unknown paths still boot the app
    written.append(path or "/")
print("pages written: %d (%s)" % (len(written), ", ".join(written[:8]) + (" …" if len(written) > 8 else "")))

# 3) SEO files — robots.txt + a sitemap listing every real route
open("robots.txt", "w", encoding="utf-8").write(
    "User-agent: *\nAllow: /\nSitemap: %ssitemap.xml\n" % SITE_URL)

import datetime
# Derived from the pinned cache-bust stamp, in UTC, so a build is reproducible
# regardless of the builder's timezone. Using the local date meant a machine
# west of UTC and the CI runner disagreed, rewriting all 24 <lastmod> lines
# and tripping the drift guard.
today = datetime.datetime.fromtimestamp(int(v), datetime.timezone.utc).date().isoformat()
urls = []
for path, route, *_ in ROUTES:
    pri = "1.0" if path == "" else ("0.9" if route in ("development", "investment", "properties") else "0.7")
    urls.append("  <url>\n    <loc>%s%s</loc>\n    <lastmod>%s</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>%s</priority>\n  </url>"
                % (SITE_URL, path, today, pri))
open("sitemap.xml", "w", encoding="utf-8").write(
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + "\n".join(urls) + "\n</urlset>\n")
print("robots.txt + sitemap.xml written (%d urls)" % len(urls))
PY
