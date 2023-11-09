import './css/style.css'

import { Inter } from 'next/font/google'

import Header from '@/components/ui/header'
import { Metadata } from 'next'
import Favicon from "@/public/images/icon-bot-master.png"
import metaImg from "@/public/images/wambor-page.png"
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'WAMBOT',
  description: 'Automatiza y Envía Mensajes Masivos en WhatsApp con WhatsAppMasterBot - ¡Descárgalo Ahora!',
  icons: [{ rel: 'icon', url: Favicon.src }],
  openGraph: {
    title: 'WAMBOT',
    description: 'Automatiza y Envía Mensajes Masivos en WhatsApp con WhatsAppMasterBot - ¡Descárgalo Ahora!',
    siteName: 'WAMBOT',
    images: [
      {
        url: metaImg.src,
        width: 800,
        height: 600,
      },
      {
        url: metaImg.src,
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
