'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
import MobileMenu from './mobile-menu'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden pt-4 md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end gap-4 flex-wrap items-center">

              <li>

                <Link
                  className="btn
                 w-[200px]
                 rounded-full
                 bg-gradient-to-tl from-lime-200 to-green-600
                 hover:bg-gradient-to-tl
                 border-none
                 [box-shadow:2px_2px_6px_#c2c2c2,_-2px_-2px_6px_#ffffff]
                 active:bg-gradient-to-tl
                 active:from-green-600
                 active:to-lime-200
                 active:[box-shadow:inset_5px_5px_10px_#117f3a,_inset_-2px_-2px_10px_#fcffb6]
                 text-white
                 "
                  href={"/signup"}
                >Registrate</Link>
              </li>
              <li>
                <Link
                  className="btn
                 w-[200px]
                 rounded-full
                
                 hover:bg-gradient-to-tl
                 border
                 border-green-600
                 [box-shadow:2px_2px_6px_#c2c2c2,_-2px_-2px_6px_#ffffff]
                 active:bg-gradient-to-tl
                 active:[box-shadow:inset_3px_3px_6px_#c2c2c2,_inset_-2px_-2px_10px_#ffffff]
                 text-green-600
                 "
                  href={"/download"}
                >Descargalo !</Link>
              </li>

            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
