import Link from "next/link"
import clsx from "clsx"

// types
import type { NavItem } from "types"

type MainNavProps = {
  items: NavItem[]
  isMobile?: boolean
}

export function MainNav({ items, isMobile = false }: MainNavProps) {
  return (
    <nav className={clsx("flex gap-6", isMobile && "flex-col text-center")}>
      {items?.length &&
        items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="text-lg hover:text-green"
          >
            {item.title}
          </Link>
        ))}
    </nav>
  )
}
