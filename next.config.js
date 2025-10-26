/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NODE_ENV === 'production' 
          ? 'http://api:8080/:path*'  // Em produção (Docker)
          : 'http://localhost:8080/:path*', // Em desenvolvimento
      },
    ]
  },
}

module.exports = nextConfig