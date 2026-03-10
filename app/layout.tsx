import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OpenClaw Setup Service | Your AI Employee in 24 Hours',
  description: 'Done-for-you OpenClaw setup. Get your AI employee configured, tested, and ready to work in 24 hours. No technical skills required.',
  keywords: ['OpenClaw', 'AI employee', 'AI automation', 'setup service', 'done-for-you'],
  openGraph: {
    title: 'OpenClaw Setup Service | Your AI Employee in 24 Hours',
    description: 'Done-for-you OpenClaw setup. Get your AI employee configured, tested, and ready to work in 24 hours.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-gray-950 text-gray-100">
        {children}
      </body>
    </html>
  )
}
