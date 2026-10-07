# Personal Page

Personal website — a single static HTML page served by **nginx**, exposed through a **Cloudflare Tunnel**.

🌐 **Live Site**: [app.oziel.pt](https://app.oziel.pt)

## 🏗️ Structure

```
personal-page/
├── site/
│   ├── index.html          # The whole site (inline CSS, no JS)
│   ├── profile.jpg         # Profile photo
│   ├── nginx.conf          # nginx on :3000 + security headers / CSP
│   ├── Dockerfile          # nginx:alpine image
│   └── docker-compose.yml  # Site + cloudflared tunnel
└── cloudflared/            # Tunnel config + credentials (git-ignored)
    ├── config.yml
    └── <tunnel-id>.json
```

## 🚀 Deploy

This folder is synced to the NAS. On the NAS:

```bash
cd site
docker compose up -d --build   # build image homepage-html:v001 and start site + tunnel
docker compose logs -f
docker compose down
```

Local preview: same commands, then open http://localhost:3000.

## 🔧 Editing

- Content and styles: `site/index.html`
- Photo: `site/profile.jpg`
- Headers / CSP: `site/nginx.conf` — CSP is `script-src 'self'`, so inline `<script>` tags are blocked.
- Hostnames: `cloudflared/config.yml`

## 📄 License

MIT

---

**Developed with ❤️ by [Oziel Santos](https://app.oziel.pt)**

