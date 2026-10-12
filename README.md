# Personal Page

Personal website — a single static HTML page served by **nginx**, exposed through a **Cloudflare Tunnel**. The image is built by **GitHub Actions** and published to **GHCR**.

🌐 **Live Site**: [app.oziel.pt](https://app.oziel.pt)

## 🏗️ Structure

```
personal-page/
├── docker-compose.yml       # Site (pinned image) + cloudflared tunnel
├── site/
│   ├── index.html           # The whole site (inline CSS, no JS)
│   ├── profile.jpg          # Profile photo
│   ├── favicon.ico          # Favicon
│   ├── nginx.conf           # nginx on :3000 + security headers / CSP
│   └── Dockerfile           # nginx:alpine image (injects the version in the footer)
├── scripts/
│   ├── release.sh           # Bump image tag in compose, commit and tag vX.Y.Z
│   └── update.sh            # Pull + restart the site (used by cron on the NAS)
├── .github/workflows/
│   └── docker.yml           # Build and push multi-arch image on tag v*
└── cloudflared/             # Tunnel config + credentials (git-ignored)
    ├── config.yml
    └── <tunnel-id>.json
```

## 🚀 Release

```bash
scripts/release.sh 0.0.5          # updates docker-compose.yml, commits, tags v0.0.5
git push origin main v0.0.5       # CI builds and pushes ghcr.io/oziel-silva/personal-page:0.0.5
```

The footer version is injected at build time from the tag (`v__VERSION__` placeholder in `index.html`). The image is built for `linux/amd64` and `linux/arm64`.

## 📦 Deploy (NAS)

This folder is synced to the NAS. On the NAS, from the repo root:

```bash
docker compose pull personal-page
docker compose up -d personal-page
```

Don't use `--build` in production: it rebuilds locally and the footer shows `vdev`.

Daily automatic update at 09:00 (`crontab -e`, quote the path):

```cron
0 9 * * * "/path/to/personal-page/scripts/update.sh" >> "$HOME/personal-page-update.log" 2>&1
```

## 🧪 Local preview

```bash
docker compose up -d --build personal-page   # http://localhost:3000
```

Start only `personal-page`. **Never start `cloudflare-tunnel` locally**: it uses the production credentials and would serve production traffic from your machine.

## 🔧 Editing

- Content and styles: `site/index.html`
- Photo / favicon: `site/profile.jpg`, `site/favicon.ico` (new files must also be added to the `Dockerfile` and `site/.dockerignore`)
- Headers / CSP: `site/nginx.conf` — CSP is `script-src 'self'`, so inline `<script>` tags are blocked.
- Hostnames: `cloudflared/config.yml`

## 📄 License

MIT

---

**Developed with ❤️ by [Oziel Santos](https://app.oziel.pt)**
