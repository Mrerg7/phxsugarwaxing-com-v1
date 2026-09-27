# phxsugarwaxing.com

Static Astro sales page for the premium domain **phxsugarwaxing.com**, deployed to Cloudflare Workers Static Assets.

The site sells the domain. It is not a sugar waxing salon and does not take appointments.

## Stack

- [Astro](https://astro.build) — static output (`output: 'static'`, no adapter)
- [Tailwind CSS](https://tailwindcss.com) via `@astrojs/tailwind`
- [Content Collections](https://docs.astro.build/en/guides/content-collections/) for value props, benefits, and use cases
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) for XML sitemap generation
- [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) via Wrangler

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
npm run deploy
```

`npm run deploy` needs `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`. Pushing to `main` runs the same deploy when those GitHub Actions secrets exist.

Build output goes to `dist/`.

## SEO notes

- Canonical host is `https://phxsugarwaxing.com` (www 301s to apex in the Worker).
- Indexable URLs: `/`, `/acquire/`, `/phoenix-sugar-waxing/`, plus `sitemap-index.xml` and `llms.txt`.
- Schema describes a domain **Product** for sale. It does not mark up a fake local salon.
- Domain Authority is not claimed. Scores like Moz DA come from links over time.

## Acquisition Contact

Offers go to **sales@desertrich.com**. Escrow is preferred.

## Images

Hero and OG image served from Cloudflare Images CDN (`imagedelivery.net`).
