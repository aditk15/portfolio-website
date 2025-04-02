import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adit Khandelwal | Portfolio',
  description: 'Computer Engineering student specializing in mobile development and web technologies. Passionate about creating innovative solutions through code.',
  generator: 'v0.dev',
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
