# Personal Page

Modern personal website built with **Next.js** featuring a clean Apple-inspired design and simplified architecture.

🌐 **Live Site**: [oziel.pt](https://oziel.pt)

## 🏗️ Architecture

```
personal-page/
├── frontend/                # Next.js Application
│   ├── app/                # Next.js App Router
│   ├── components/         # React Components
│   ├── public/            # Static Assets (images)
│   ├── package.json       # Dependencies
│   └── ...                # Config Files
├── config.yml             # Cloudflare Tunnel Config
├── *.json                 # Cloudflare Credentials
├── cert.pem              # SSL Certificate
├── Dockerfile            # Container Image
├── docker-compose.yml    # Deployment Orchestration
└── README.md             # This File
```

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React Framework with App Router
- **TypeScript** - Type Safety
- **Tailwind CSS** - Utility-first CSS
- **Static Optimization** - No backend dependencies

### Infrastructure
- **Docker** - Containerization
- **Cloudflare Tunnel** - Secure Public Access
- **Multi-stage Builds** - Optimized Images

## 🛠️ Development

### Prerequisites
- **Docker & Docker Compose** (recommended)
- **Node.js 20+** (for local development)

### Quick Start

```bash
# Clone repository
git clone https://github.com/Oziel-Silva/personal-page.git
cd personal-page

# Option 1: Docker (Production-like)
docker-compose up --build -d

# Option 2: Local Development
cd frontend
npm install
npm run dev
```

### Available URLs
- **Local**: http://localhost:3000
- **Public**: https://oziel.pt (via Cloudflare Tunnel)

## 📦 Deployment Options

### Docker (Recommended)
```bash
# Build and start
docker-compose up --build -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

### Manual Deployment
```bash
cd frontend
npm install
npm run build
npm start
```

### Static Export (Optional)
```bash
cd frontend
npm run build
# Deploy 'out' folder to any static host
```

## 🎨 Features

- ✨ **Apple-inspired Design** - Clean and minimalist
- 🏃‍♂️ **Performance** - Static optimization, fast loading
- 📱 **Responsive** - Mobile-first approach
- 🚀 **Production Ready** - Docker + Cloudflare Tunnel
- 🛡️ **TypeScript** - Type safety
- 📧 **Contact Section** - Direct email integration
- 🖼️ **Optimized Images** - JPG format for faster loading

## 🔧 Customization

### Content
Edit `/frontend/components/page.tsx`:
- Update personal information
- Modify sections (about, services, etc.)
- Change contact details

### Images
Replace `/frontend/public/profile.jpg` with your photo.

### Styling
- Tailwind classes in components
- Global styles in `/frontend/app/globals.css`

### Domain
Update `config.yml` with your Cloudflare tunnel configuration.

## 📝 Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Start production server

# Docker
docker-compose up -d     # Start containers
docker-compose logs -f   # View logs
docker-compose down      # Stop containers
```

## 🌐 Simplified Architecture Benefits

- **No Backend Complexity** - Pure frontend solution
- **Fast Loading** - Static optimization
- **Easy Deployment** - Single container
- **Low Maintenance** - Fewer moving parts
- **Cost Effective** - Minimal resource usage
- **Scalable** - CDN-ready static assets


## 📄 License

This project is under the MIT license.

---

**Developed with ❤️ by [Oziel Santos](https://oziel.pt)**
