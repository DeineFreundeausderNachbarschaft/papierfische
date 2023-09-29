import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Papierfische',
  description: 'Papierfische Infomaterial',
  other: {
    'theme-color': '#082e0b',
    //the color on mobile devices
    "color-scheme": "dark only",
    "twitter:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    //the image/info ppl see if u share a link
    "twitter:card": "summary_large_image",
    "og:url": "papierfische",
    //describe main url
    "og:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    //if u share the webapp eg in discord or messengers/apps this appears
    "og:type": "website",
  }
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
