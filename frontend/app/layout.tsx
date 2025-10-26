import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oziel - Platform Engineer',
  description: 'Elegantly engineered platforms by Oziel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}