import Image from "next/image"
import Link from "next/link"
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-lightgreen py-2 gradient_green_box">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16 drop-shadow-[1.5px_1.2px_1.2px_#082d0b]">
        <Link href="/">
          <Image 
          src='/humanrightslogofreebirdgreen.svg' 
          alt="Bildung ist ein Menschenrecht"
          width={55}
          height={56}
          />
        </Link>

          <ul className="flex-center gap-x-3 max-md:text-center md:gap-x-10">
            <li className="header-text text-4xl text-gradient_lightgreen-yellow max-md:text-2xl max-md:leading-[1.5rem]">
              <Link
              href="https://jsmastery.pro/next13"
              target="_blank"
              >
              Papierfische Informationen &#39;23
              </Link>
            </li>
            <Image className="md:hidden"
          src="/hamburger-menu.svg"
          width={30.5}
          height={30.5}
          alt="Hamburger menu"
          style={{paddingBottom:3.9}}
          />
          </ul>
          <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
            <li className="navi-text text-lightgreen !font-normal">
              <Link
              href="https://jsmastery.pro/masterclass"
              target="_blank"
              >
              Infomaterial als PDF
              </Link>
            </li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar