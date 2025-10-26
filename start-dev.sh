#!/bin/bash
echo "🚀 Iniciando ambiente de desenvolvimento..."

# Terminal 1: Backend Go
echo "📡 Iniciando backend Go..."
go run cmd/server/main.go &
BACKEND_PID=$!

# Aguarda o backend iniciar
sleep 2

# Terminal 2: Frontend Next.js
echo "🎨 Iniciando frontend Next.js..."
npm run dev &
FRONTEND_PID=$!

echo "✅ Ambiente iniciado!"
echo "🌐 Frontend: http://localhost:3000"
echo "📡 Backend API: http://localhost:8080"
echo ""
echo "Para parar: Ctrl+C ou execute 'npm run stop'"

# Aguarda sinais para encerrar
cleanup() {
    echo "🛑 Encerrando serviços..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    exit 0
}

trap cleanup SIGINT SIGTERM

# Aguarda indefinidamente
wait