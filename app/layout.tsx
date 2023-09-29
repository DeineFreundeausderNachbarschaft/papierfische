import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Papierfische',
  description: 'Papierfische Infomaterial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00F236] via-[#0BC10A] to-[#008A34]">{children}</body>
    </html>
  )
}
