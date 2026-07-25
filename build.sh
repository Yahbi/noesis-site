#!/bin/zsh
# Production build — precompile all JSX into one bundle.js and generate
# index.html (production React, no in-browser Babel). 404.html mirrors index.
# Dev workflow is untouched: "Noesis Website.html" still compiles in-browser.
set -e
cd "$(dirname "$0")"

V=$(date +%s)

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

# 2) Generate production index.html from the dev HTML:
#    swap the dev-React + Babel + per-file scripts for prod React + bundle.js.
python3 - "$V" <<'PY'
import re, sys
v = sys.argv[1]
src = open("Noesis Website.html", encoding="utf-8").read()
prod_scripts = f'''  <!-- Production: precompiled bundle, no in-browser compilation -->
  <script defer src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>
  <script defer src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>
  <script defer src="motion.js?v={v}"></script>
  <script defer src="bundle.js?v={v}"></script>

</body>'''
out, n = re.subn(r"  <!-- React \+ Babel.*</body>", prod_scripts, src, flags=re.S)
assert n == 1, "script block not found"
out = out.replace('content="width=device-width, initial-scale=1">',
                  'content="width=device-width, initial-scale=1">\n  <meta name="robots" content="index, follow">', 1)
open("index.html", "w", encoding="utf-8").write(out)
open("404.html", "w", encoding="utf-8").write(out)
print("index.html + 404.html written (v=%s)" % v)
PY

# 3) SEO files — robots.txt + sitemap.xml (update SITE_URL when a custom domain lands)
SITE_URL="https://yahbi.github.io/noesis-site/"
TODAY=$(date +%F)
cat > robots.txt <<EOF
User-agent: *
Allow: /
Sitemap: ${SITE_URL}sitemap.xml
EOF
cat > sitemap.xml <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
EOF
echo "robots.txt + sitemap.xml written"
