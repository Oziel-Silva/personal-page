#!/bin/bash
echo "🚀 Starting development environment..."

# Terminal 1: Backend Go
echo "📡 Starting Go backend..."
cd backend && go run cmd/server/main.go &
BACKEND_PID=$!

# Wait for backend to start
sleep 2

# Terminal 2: Frontend Next.js
echo "🎨 Starting Next.js frontend..."
cd frontend && npm run dev &
FRONTEND_PID=$!

echo "✅ Environment started!"
echo "🌐 Frontend: http://localhost:3000"
echo "📡 Backend API: http://localhost:8080"
echo ""
echo "To stop: Ctrl+C"

# Wait for signals to terminate
cleanup() {
    echo "🛑 Stopping services..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    exit 0
}

trap cleanup SIGINT SIGTERM

# Wait indefinitely
wait