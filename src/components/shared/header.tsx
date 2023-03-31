"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

// config
import { siteConfig } from "config"

// components
import { MainNav } from "components"

// icons
import { Menu, X } from "lucide-react"

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  return (
    <>
      <header className="sticky top-0 z-40 mb-5">
        <div className="container m-auto flex h-16 max-w-5xl items-center justify-between space-x-4">
          <Link href="/">
            <Image src="./logo.svg" alt="GC" width={64} height={40} />
          </Link>

          <div className="h-[24px] w-[24px] md:hidden">
            <button onClick={() => setMenuIsOpen(!menuIsOpen)}>
              {menuIsOpen ? <X /> : <Menu />}
            </button>
          </div>

          <div className="hidden md:block">
            <MainNav items={siteConfig.nav} />
          </div>
        </div>
      </header>

      {menuIsOpen && (
        <div className="absolute inset-0 top-16 z-50 flex items-center justify-center bg-dark md:hidden">
          <MainNav items={siteConfig.nav} isMobile />
        </div>
      )}
    </>
  )
}

export default Header
