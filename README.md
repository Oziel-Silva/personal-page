# Personal Page

Modern personal website with microservices architecture using Next.js and Go.

## 🏗️ Architecture

```
personal-page/
├── frontend/                 # Next.js Application
│   ├── app/                 # Next.js App Router
│   ├── components/          # React Components
│   ├── public/             # Static Assets
│   ├── package.json        # Frontend Dependencies
│   └── ...                 # Next.js Config Files
├── backend/                 # Go API Server
│   ├── cmd/server/         # Main Application
│   ├── internal/          # Business Logic
│   ├── data/              # Data Files
│   ├── go.mod             # Go Dependencies
│   └── go.sum             # Dependency Checksums
├── docs/                   # Documentation
├── scripts/                # Development Scripts
├── Dockerfile             # Backend Container
├── Dockerfile.frontend    # Frontend Container
├── docker-compose.yml     # Multi-service Orchestration
└── README.md              # This File
```

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React Framework with App Router
- **TypeScript** - Type Safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations

### Backend
- **Go 1.23** - High-performance API
- **Gin** - HTTP Web Framework
- **YAML** - Data Storage

### Infrastructure
- **Docker** - Containerization
- **Cloudflare Tunnel** - Secure Public Access
- **Multi-stage Builds** - Optimized Images

## 🛠️ Development

### Prerequisites
- Docker & Docker Compose
- Node.js 20+ (for local development)  
- Go 1.23+ (for local development)

### Quick Start

```bash
# Clone repository
git clone <repo-url>
cd personal-page

# Start entire application
docker compose up -d

# Check status
docker ps
```

### Available URLs
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080
- **Public**: https://oziel.pt (via Cloudflare Tunnel)

### Local Development

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

#### Backend
```bash
cd backend
go mod tidy
go run cmd/server/main.go
```

## 📝 Useful Scripts

```bash
# Complete build and deploy
docker compose up -d --build

# View logs in real-time
docker compose logs -f

# Stop all services
docker compose down

# Rebuild frontend only
docker compose build frontend

# Rebuild backend only
docker compose build api
```

## 🔒 Security

- Sensitive files protected via `.gitignore`
- Cloudflare credentials not committed
- SSL certificates ignored
- Multi-stage builds for optimized images

## 🌐 Deployment

The application is configured for automatic deployment via:
- **Cloudflare Tunnel** for public access
- **Docker Compose** for orchestration
- **Health Checks** for monitoring

## 📚 Development Structure

### Standards Followed
- **Modular monorepo** with clear separation of responsibilities
- **Complete containerization** for environment consistency
- **Declarative configuration** via Docker Compose
- **Type Safety** with TypeScript in frontend
- **Clean Architecture** in Go backend

### Suggested Next Steps
- CI/CD Pipeline (GitHub Actions)
- Automated testing (frontend and backend)
- Monitoring and observability
- Database integration (PostgreSQL/MongoDB)
- API versioning and documentation (Swagger)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add: new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## � License

This project is under the MIT license. See the [LICENSE](LICENSE) file for details.

---

**Developed with ❤️ by Oziel Santos**

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Estilos globais + Tailwind
│   ├── layout.tsx         # Layout raiz
│   └── page.tsx           # Página inicial
├── cmd/server/            # Aplicação Go
├── internal/              # Lógica interna Go
├── data/                  # Dados YAML
├── apple-style-personal-page.tsx  # Componente principal
├── docker-compose.yml     # Orquestração Docker
├── Dockerfile             # Backend image
├── Dockerfile.frontend    # Frontend image
└── next.config.js         # Configuração Next.js
```

## 🎨 Características

- ✨ **Design no estilo Apple** - Elegante e minimalista
- 🏃‍♂️ **Performance** - Next.js com SSG/SSR
- 🔄 **Animações** - Framer Motion
- 📱 **Responsivo** - Mobile-first
- 🚀 **Produção** - Docker + Cloudflare Tunnel
- 🛡️ **TypeScript** - Type safety completo

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev:full          # Inicia tudo
npm run dev              # Só frontend
go run cmd/server/main.go # Só backend

# Produção
npm run build            # Build frontend
npm run start            # Start frontend

# Docker
npm run docker:build     # Build images
npm run docker:up        # Start containers
npm run docker:down      # Stop containers
npm run docker:logs      # Ver logs
```

## 🌐 URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080
- **Health Check**: http://localhost:8080/healthz

## 📝 Customização

1. **Conteúdo**: Edite `apple-style-personal-page.tsx`
2. **Dados**: Modifique `data/datal.yaml`
3. **Estilos**: Customize `app/globals.css` e classes Tailwind
4. **API**: Adicione endpoints em `internal/handlers.go`

---

> 💡 **Dica**: Use `npm run dev:full` para desenvolvimento e `npm run docker:up` para produção!