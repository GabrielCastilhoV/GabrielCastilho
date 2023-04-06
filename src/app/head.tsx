export default function Head() {
  const meta = {
    title: "Home | Gabriel Castilho",
    description:
      "I'm a front-end developer, I like to program and whenever I can I try to learn new things.",
  }

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Gabriel Castilho" />
      <meta property="og:url" content="https://gabrielcastilho.dev" />

      <link rel="icon" href="/logo.svg" />
    </>
  )
}
