# Personal Page - Oziel

Uma página pessoal elegante no estilo Apple, construída com **Next.js** (frontend) e **Go + Gin** (backend).

## 🚀 Começando

### Pré-requisitos

- **Node.js** 18+ 
- **Go** 1.23+
- **Docker** (opcional)

### Instalação

1. **Clone e instale dependências:**
   ```bash
   npm install
   ```

### Desenvolvimento

#### Opção 1: Desenvolvimento Completo (Recomendado)
```bash
npm run dev:full
```
Isso iniciará:
- 🎨 Frontend Next.js em `http://localhost:3000`
- 📡 Backend Go API em `http://localhost:8080`

#### Opção 2: Desenvolvimento Separado

**Terminal 1 - Backend:**
```bash
go run cmd/server/main.go
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### Produção

#### Com Docker (Recomendado)
```bash
npm run docker:build
npm run docker:up
```

#### Manual
```bash
# Build do frontend
npm run build

# Start do frontend
npm start &

# Start do backend
go run cmd/server/main.go
```

## 📁 Estrutura do Projeto

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