import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const scrollToTarget = () => {
      if (!hash) {
        window.scrollTo({ top: 0, behavior: "auto" })
        return
      }

      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }

    window.requestAnimationFrame(scrollToTarget)
  }, [pathname, hash])

  return null
}
