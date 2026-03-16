import { useEffect } from "react"
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "../config/site"

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement("meta")
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute("content", content)
}

function upsertCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]')

  if (!element) {
    element = document.createElement("link")
    element.setAttribute("rel", "canonical")
    document.head.appendChild(element)
  }

  element.setAttribute("href", href)
}

export default function SEOTags({
  title = DEFAULT_TITLE,
  description = SITE_DESCRIPTION,
  canonical = SITE_URL,
  image = DEFAULT_OG_IMAGE,
  type = "website",
}) {
  useEffect(() => {
    document.documentElement.lang = "es"
    document.title = title

    upsertMeta("name", "description", description)
    upsertMeta("name", "author", SITE_NAME)
    upsertMeta("property", "og:title", title)
    upsertMeta("property", "og:description", description)
    upsertMeta("property", "og:type", type)
    upsertMeta("property", "og:url", canonical)
    upsertMeta("property", "og:site_name", SITE_NAME)
    upsertMeta("property", "og:locale", "es_CL")
    upsertMeta("property", "og:image", image)
    upsertMeta("name", "twitter:card", "summary_large_image")
    upsertMeta("name", "twitter:title", title)
    upsertMeta("name", "twitter:description", description)
    upsertMeta("name", "twitter:image", image)
    upsertCanonical(canonical)

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: SITE_NAME,
      url: canonical,
      image,
      logo: `${SITE_URL}/assets/logo_master.svg`,
      description,
      areaServed: ["Rancagua", "Región de O'Higgins", "Chile"],
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Málaga 501",
        addressLocality: "Rancagua",
        addressRegion: "O'Higgins",
        addressCountry: "CL",
      },
      sameAs: Object.values(SOCIAL_LINKS),
    }

    let schemaScript = document.getElementById("seo-schema")

    if (!schemaScript) {
      schemaScript = document.createElement("script")
      schemaScript.type = "application/ld+json"
      schemaScript.id = "seo-schema"
      document.head.appendChild(schemaScript)
    }

    schemaScript.textContent = JSON.stringify(schemaData)
  }, [canonical, description, image, title, type])

  return null
}
