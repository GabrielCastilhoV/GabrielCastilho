import Image from "next/image"

// components
import { MainNav } from "components"

// config
import { siteConfig } from "config"

export function Header() {
  return (
    <header className="sticky top-0 z-40">
      <div className="container m-auto flex h-16 max-w-5xl items-center justify-between space-x-4">
        <Image src="./logo.svg" alt="GC" width={64} height={40} />

        <MainNav items={siteConfig.nav} />
      </div>
    </header>
  )
}
