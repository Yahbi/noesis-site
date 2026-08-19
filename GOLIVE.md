# Go-Live Checklist — Noesis

Three items. Each is short; together they turn the site from a good-looking
demo into a working business asset. Nothing here requires touching design code.

---

## 1. Make the enquiry form actually deliver  ⚠️ HIGHEST PRIORITY

**The problem today:** `INQ_ENDPOINT` in `pages/Inquiries.jsx` is empty, so the
form opens the visitor's mail client instead of sending. Phones without a
configured mail app, and anyone using Gmail in a browser, frequently get
nothing at all. Real enquiries are being lost right now.

**Fix (about 5 minutes):**
1. Sign up free at <https://formspree.io> (or <https://usebasin.com>).
2. Create a form; set the destination to `info@noesisusa.com`.
3. Copy the endpoint URL it gives you (looks like `https://formspree.io/f/abcdwxyz`).
4. In `pages/Inquiries.jsx`, set:
   ```js
   const INQ_ENDPOINT = "https://formspree.io/f/abcdwxyz";
   ```
5. `./build.sh` then commit + push.

Already handled for you: POST wiring, error handling, a proper confirmation
state, and a hidden honeypot field that silently absorbs spam bots.

**Test after deploying:** submit the form yourself and confirm the email lands.

---

## 2. Point the site at your own domain

Today the site lives at `yahbi.github.io/noesis-site/`. For a firm sending
links to principals and institutions, that URL undercuts the work.

### ⚠️ Read first
`noesisusa.com` currently serves your existing site. Repointing DNS **takes
that site down and replaces it.** Decide deliberately. Two safe paths:

### Path A — Preview on a subdomain first (recommended)
Publish to `new.noesisusa.com`, leave the live site untouched, review, then
switch the root domain when you're happy.

1. At your DNS provider add:
   | Type  | Name  | Value                  |
   |-------|-------|------------------------|
   | CNAME | `new` | `yahbi.github.io`      |
2. In this folder: `echo "new.noesisusa.com" > CNAME`
3. Rebuild with the new address (note `BASE_PATH="/"` — no subfolder now):
   ```bash
   SITE_URL="https://new.noesisusa.com/" BASE_PATH="/" ./build.sh
   ```
4. Commit + push. In GitHub → Settings → Pages, set the custom domain and
   tick **Enforce HTTPS** (may take ~15 min for the certificate).

### Path B — Cut the root domain over
1. At your DNS provider, replace the existing A records for the root with
   GitHub's four:
   | Type | Name | Value             |
   |------|------|-------------------|
   | A    | `@`  | `185.199.108.153` |
   | A    | `@`  | `185.199.109.153` |
   | A    | `@`  | `185.199.110.153` |
   | A    | `@`  | `185.199.111.153` |
   | CNAME| `www`| `yahbi.github.io` |
2. `echo "noesisusa.com" > CNAME`
3. ```bash
   SITE_URL="https://noesisusa.com/" BASE_PATH="/" ./build.sh
   ```
4. Commit + push, then set the custom domain in GitHub Pages and enforce HTTPS.

**Order matters:** add the DNS records *first*, then the CNAME file. Doing it
the other way round can leave the site unreachable while DNS propagates.

---

## 3. Turn on analytics

You currently have no visibility into who visits, which projects hold
attention, or where people leave.

**Fix (about 5 minutes), no cookie banner required if you pick a cookieless tool:**
- **Cloudflare Web Analytics** — free, privacy-first: <https://www.cloudflare.com/web-analytics/>
- **Plausible** (~$9/mo) or **Fathom** — also cookieless.

Then simply create a file named `analytics.html` in this folder containing the
snippet your provider gives you. The build injects it into all 24 pages
automatically. Delete the file to turn tracking off. Example:

```html
<script defer src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
```

---

## Still open (need your input)

- **Privacy policy + disclosures pages** — standard for a site with an
  investor-facing section. Ready to draft on request; needs counsel review.
- **The "matching or exceeding projected returns" claim** from `INVEST.docx`
  remains deliberately omitted pending your counsel.
- **Video bandwidth** — 413 MB of film on GitHub Pages against a ~100 GB/month
  soft cap is roughly 1,500 desktop visits. If traffic grows, move
  `assets/*.mp4` to a CDN (Cloudflare R2, Bunny, Mux).
- **The Box folder** — never arrived. New projects, updated numbers and newer
  photography are the honest way to finish weighting Owner's Rep toward the
  30–40% you asked for.

---

## Build reference

```bash
./build.sh                                                   # current github.io address
SITE_URL="https://noesisusa.com/" BASE_PATH="/" ./build.sh   # custom domain
```

The build self-heals a missing `node_modules` and is pinned to the local Babel
(a bare `npx babel` silently falls back to a deprecated 2015 version that
cannot parse this code).
