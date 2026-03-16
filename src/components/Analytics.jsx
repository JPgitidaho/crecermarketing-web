import { useEffect } from "react"
import { GA_ID } from "../config/site"

export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) return

    const scriptSrc = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    const existingScript = document.head.querySelector(
      `script[src="${scriptSrc}"]`
    )

    if (!existingScript) {
      const script = document.createElement("script")
      script.async = true
      script.src = scriptSrc
      document.head.appendChild(script)
    }

    window.dataLayer = window.dataLayer || []
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer.push(arguments)
      }

    window.gtag("js", new Date())
    window.gtag("config", GA_ID)
  }, [])

  return null
}
