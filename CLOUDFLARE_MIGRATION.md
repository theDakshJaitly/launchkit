# Cloudflare Pages Migration Runbook

If Vercel free tier limits are hit, migrate to Cloudflare Pages in ~10 minutes.

## Prerequisites

- Cloudflare account (free tier gives unlimited bandwidth)
- Wrangler CLI: `npm i -g wrangler`

## Steps

### 1. Install the adapter

```bash
npm install @cloudflare/next-on-pages
npm install -D wrangler
```

### 2. Add `wrangler.toml`

```toml
name = "launchx"
compatibility_date = "2025-01-01"
compatibility_flags = ["nodejs_compat"]
pages_build_output_dir = ".vercel/output/static"
```

### 3. Update `package.json` scripts

```json
{
  "scripts": {
    "pages:build": "npx @cloudflare/next-on-pages",
    "pages:preview": "npx wrangler pages dev .vercel/output/static",
    "pages:deploy": "npx wrangler pages deploy .vercel/output/static"
  }
}
```

### 4. Set environment variables

In the Cloudflare dashboard → Pages → your project → Settings → Environment variables:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | Your Resend API key |
| `RESEND_AUDIENCE_ID` | Your Resend audience ID |

### 5. Build & deploy

```bash
npm run pages:build
npm run pages:deploy
```

### 6. Custom domain (optional)

In Cloudflare dashboard → Pages → Custom domains → Add `launchx.page`.

## Compatibility Notes

- Server actions (`join-waitlist`, `get-waitlist-spots`) use standard fetch-compatible APIs — no Node-specific code, so they work on Cloudflare Workers.
- `next/image` optimization works via Cloudflare's built-in image resizing.
- The in-memory cache in `get-waitlist-spots.ts` will reset per worker instance — this is fine for a waitlist counter.
