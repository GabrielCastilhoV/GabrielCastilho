// components
import { CurrentTechnologies } from "components"

export default function Home() {
  return (
    <div className="mt-10 lg:mt-16">
      <h1 className="text-3xl font-semibold lg:text-5xl">Gabriel Castilho</h1>
      <h2 className="mt-2 text-xl">Front-end Engineer</h2>

      <p className="mt-5 text-grey">
        I enjoy programming and whenever I can I try to learn new things.
      </p>

      <p className="mt-8 text-grey">Current favorite tech stack/tools:</p>
      <CurrentTechnologies />
    </div>
  )
}
