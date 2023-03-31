import Link from "next/link"

// types
import type { NavItem } from "types"

type MainNavProps = {
  items: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <nav className="flex gap-6">
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
