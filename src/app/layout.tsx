// components
import Header from "components/shared/header"
import { Footer } from "components"

// styles
import "styles/globals.css"

// assets
import { Inter } from "@next/font/google"

const interVariable = Inter()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen px-5 ${interVariable.className} m-auto max-w-4xl bg-dark text-white`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
