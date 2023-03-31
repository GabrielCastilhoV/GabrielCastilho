"use client"

import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"

// types
import type { NavItem } from "types"

type MainNavProps = {
  items: NavItem[]
  isMobile?: boolean
}

export function MainNav({ items, isMobile = false }: MainNavProps) {
  const pathname = usePathname()

  return (
    <nav className={clsx("flex gap-6", isMobile && "flex-col text-center")}>
      {items?.length &&
        items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={
              (clsx("text-lg hover:text-green"),
              pathname === item.href ? "text-green" : "text-white")
            }
          >
            {item.title}
          </Link>
        ))}
    </nav>
  )
}
