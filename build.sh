#!/bin/zsh
# Production build — precompile all JSX into one bundle.js, then generate a REAL
# static page per route (each with its own title/meta/canonical + window.__ROUTE)
# so every destination returns 200 and is crawlable. Dev workflow is untouched:
# "Noesis Website.html" still compiles in-browser.
set -e
cd "$(dirname "$0")"

V=$(date +%s)

# Where the site is served from (used for <base href> and canonical URLs).
SITE_URL="https://yahbi.github.io/noesis-site/"
BASE_PATH="/noesis-site/"

# 1) Transform JSX -> plain JS, concatenated in load order (same as the dev HTML).
npx babel \
  tweaks-panel.jsx \
  components/Placeholder.jsx \
  components/Shell.jsx \
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

prod_scripts = f'''  <!-- Production: precompiled bundle, no in-browser compilation -->
  <script defer src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>
  <script defer src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>
  <script defer src="motion.js?v={v}"></script>
  <script defer src="bundle.js?v={v}"></script>

</body>'''
shell, n = re.subn(r"  <!-- React \+ Babel.*</body>", prod_scripts, src, flags=re.S)
assert n == 1, "script block not found"
# The template carries a hardcoded ?v= on styles.css; without restamping it every
# build, browsers keep serving their cached stylesheet no matter what changed.
shell = re.sub(r'styles\.css\?v=\d+', f'styles.css?v={v}', shell)
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
    ("portfolio/",   "properties",  f"Portfolio · The Delivered Record | {FIRM}",
     "Twenty-three projects conceived, developed and delivered by the Noesis team since 2009 — luxury residences, apartment buildings and small-lot subdivisions across Los Angeles, Beverly Hills and Tel Aviv.",
     "The delivered record.",
     "Twenty-three delivered projects: 16 private residences, 5 apartment buildings and 2 small-lot subdivisions."),
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

def page(path, route, title, desc, heading, blurb):
    h = shell
    canonical = SITE_URL + path
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
    # sub-pages resolve every relative asset against the site root
    if path:
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
today = datetime.date.today().isoformat()
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
