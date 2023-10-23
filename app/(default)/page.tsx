export const metadata = {
  title: 'WAMBOT',
  description: 'Automatiza y Envía Mensajes Masivos en WhatsApp con WhatsAppMasterBot - ¡Descárgalo Ahora!',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Newsletter />
    </>
  )
}
