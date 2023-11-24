import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative">
      <div className="lamp">
        <div className="lava">
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob top"></div>
          <div className="blob bottom"></div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      {/* Illustration behind hero content */}
     
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-1 pb-12 md:pt-10 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-3xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
              Envío Masivo y Automatización
              <span
                className="bg-clip-text text-2xl md:text-6xl text-transparent bg-gradient-to-tl from-lime-200 to-green-600 "
              >
                {" "} WhatsAppMasterBot
              </span>
            </h1>

            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8 text-strong-fff"
                data-aos="zoom-y-out" data-aos-delay="150"
              >
                Automatiza y Envía Mensajes Masivos en WhatsApp con WhatsAppMasterBot - ¡Descárgalo Ahora!
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <Link
                  className="btn 
                  text-white 
                  bg-green-600 
                  hover:bg-green-700 
                  w-full 
                  mb-4 
                  sm:w-auto 
                  sm:mb-0" 
                  href={"/signup"}
                  >Pruebalo gratis!</Link>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#layers">Leer mas</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>

      </div>
    </section>
  )
}