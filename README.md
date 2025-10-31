# Aica Sunmica — Decorative Laminates Landing (Next.js 14 + Tailwind)

A production-ready, App Router Next.js landing page for lead generation.

## Quick Start (Local)
```bash
npm i
npm run dev
# open http://localhost:3000
```

## Production
```bash
npm run build
npm run start  # default port 3000
```

## Deploy on Your Own Server
1. Copy the folder to your server (e.g., `/var/www/aica-landing`).
2. Install Node.js 18+.
3. Run:
```bash
npm ci
npm run build
NODE_ENV=production PORT=3000 npm run start
```
4. (Optional) Keep alive with PM2:
```bash
npm i -g pm2
pm2 start npm --name aica-landing -- start
pm2 save
```

### Nginx reverse proxy
```
server {
  listen 80;
  server_name your.domain.com;
  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

## Assets
- Place your **logo** at `public/logo.svg` (already included if you uploaded it).
- Replace placeholders in `public/placeholders/*` or change paths in `app/page.tsx`.

## Form handling
- `POST /api/lead` logs leads to server console. Replace with your CRM/webhook:
  - change fetch URL in `app/page.tsx` to your endpoint, or
  - add provider code in `app/api/lead/route.ts`.

## Tracking
Add GA4/Meta/LinkedIn pixels in `app/layout.tsx` or via `<Script>` in `app/page.tsx`.

## Theming
- Colors in `app/globals.css` and `BRAND` in `app/page.tsx`.
- Primary brand color: `#8e082e`.