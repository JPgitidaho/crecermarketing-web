import { useEffect } from "react"

export default function Analytics() {
  useEffect(() => {
    const GA_ID = "G-6DLESMEW0B" 
    if (!GA_ID) return

    
    const script1 = document.createElement("script")
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`

    const script2 = document.createElement("script")
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `

    document.head.appendChild(script1)
    document.head.appendChild(script2)
  }, [])

  return null
}
