export default function SEOTags({ title, description, canonical }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Crecer Marketing",
    url: "https://crecermarketing-web.vercel.app/",
    logo: "https://crecermarketing-web.vercel.app/assets/1.png",
    description:
      "Sitios web profesionales, landing pages y rediseño web estratégico para negocios que necesitan transmitir confianza y atraer clientes."
  }

  return (
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </>
  )
}