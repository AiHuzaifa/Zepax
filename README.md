# ZEPAX Technology website

Marketing site for [zepaxtechnology.com](https://zepaxtechnology.com), built with Next.js and exported as a **plain static site**: just HTML, CSS, JS and images. You can host it anywhere (Hostinger, Netlify, cPanel, Cloudflare Pages…). There is no database or server.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # writes the static site to /out
npm start          # preview /out locally
```

Requires Node.js 20.9+.

## Deploy

1. Set your Make.com webhook URL (see below).
2. Run `npm run build`.
3. Upload the **contents** of the `out/` folder to your host's web root (e.g. `public_html` on Hostinger).
   * Netlify / Cloudflare Pages: build command `npm run build`, publish directory `out`, and add `NEXT_PUBLIC_MAKE_WEBHOOK_URL` as an environment variable.

## Contact form → Make.com → your email

The form posts directly from the browser to a Make.com custom webhook.

1. In Make, create a scenario that starts with **Webhooks → Custom webhook**, then copy its URL (e.g. `https://hook.eu2.make.com/abc123…`).
2. Give the URL to the site in **one** of these ways:
   * create a `.env.local` file containing `NEXT_PUBLIC_MAKE_WEBHOOK_URL=https://hook.eu2.make.com/abc123…`, or
   * set the same variable in your host's build settings, or
   * paste it directly into `MAKE_WEBHOOK_URL` in `content/site.ts`.
3. Rebuild and deploy, then submit the form once so Make can detect the data structure.
4. Add an **Email** (or Gmail) module after the webhook that sends the fields to your inbox.

Fields sent (URL-encoded): `name`, `email`, `phone`, `company`, `service`, `budget`, `message`, `source_page`, `referrer`, `utm_source`, `utm_medium`, `utm_campaign`, `submitted_at`.

Spam protection: bots that fill the hidden honeypot field are silently dropped in the browser. The webhook URL is visible in the page source, so if spam ever becomes an issue, add a Make filter (e.g. `message` length > 10) or rotate the webhook URL.

## Editing content

All copy lives in `content/`, so you don't need to touch the page layouts.

| File | What it controls |
| --- | --- |
| `content/site.ts` | Hero trust points, stats, pain points, process steps, FAQs, social links, webhook URL |
| `content/services.ts` | The 4 services: copy, hook lines, bullets, tools, example workflow, related case study |
| `content/cases.json` | Case studies (text + screenshot paths in `public/cases/`) |
| `content/reviews.ts` | Client reviews (quotes are verbatim; "delivered" is our own project summary) |
| `content/blog.ts` | Blog articles |
| `content/tools.ts` | Platform logos (files in `public/logos/`) |

## Project structure

```
app/            pages (home, services, case studies, blog, about, clients, contact)
components/     shared UI (header, footer, cards, CTA, contact form…)
content/        all editable text and data
public/         images, logos, case-study screenshots
design/         source files for the service thumbnails (see below)
```

## Service thumbnails

The images in `public/images/` are HTML mock-ups rendered to WebP. To change one, edit the HTML in `design/thumbnails/`, then run `node design/thumbnails/render.cjs` (needs Playwright) and convert the resulting PNG to WebP.
