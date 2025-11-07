
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
    <head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
    </head>
  )
}
