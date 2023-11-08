'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2 h-full flex flex-col justify-center gap-6">
            <li>
              <Link
                className="btn
                w-full
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
                w-full
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
        </Transition>
      </div>
    </div>
  )
}
