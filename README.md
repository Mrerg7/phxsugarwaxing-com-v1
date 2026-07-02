# phxsugarwaxing.com

Static Astro landing page for the premium domain **phxsugarwaxing.com**, deployed to Cloudflare Workers Static Assets.

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

Build output goes to `dist/`. Wrangler serves it globally at the edge with no Worker script.

## Acquisition Contact

All CTAs route to **sales@desertrich.com**.

## Images

Hero and OG image served from Cloudflare Images CDN (`imagedelivery.net`).
