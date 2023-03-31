/* eslint-disable tailwindcss/migration-from-tailwind-2 */

import Link from "next/link"
import Image from "next/image"

// configs
import { siteConfig } from "config"

function Footer() {
  return (
    <footer className="absolute bottom-5 m-auto flex w-full max-w-[90%] justify-between border-t border-green border-opacity-50 pt-4 lg:max-w-4xl">
      <Link href="/">Download CV</Link>

      <ul role="menu" className="flex gap-4 lg:gap-10">
        {siteConfig.footer.map((item) => (
          <li key={item.title} role="menuitem">
            <Link href={item.href} target="_blank" className="flex gap-4 ">
              <Image
                src={item.icon}
                alt={`Icon of ${item.title}`}
                width={20}
                height={20}
              />

              <span className="hidden lg:block">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export { Footer }
