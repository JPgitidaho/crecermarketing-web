import { Helmet } from "react-helmet-async"

export default function SEOTags({ title, description, canonical }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Crecer Marketing",
    "url": "https://crecermarketing.vercel.app/",
    "logo": "https://crecermarketing.vercel.app/assets/1.png",
    "description": "Soluciones web estratégicas: desarrollo web, diseño moderno y SEO para tu negocio.",
    "sameAs": [
      "https://www.facebook.com/crecermarketing",
      "https://www.instagram.com/crecermarketing"
    ]
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />


      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://crecermarketing.vercel.app/assets/1.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Crecer Marketing" />
      <meta property="og:locale" content="es_CL" />

      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://crecermarketing.vercel.app/assets/1.png" />

     
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  )
}
