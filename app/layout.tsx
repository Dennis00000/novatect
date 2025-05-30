import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Novatect",
  description: "The next generation of AI-powered software development",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
