import { useState } from "react"
import { MessageCircle } from "lucide-react"

const WHATSAPP_ICON_SRC = `${import.meta.env.BASE_URL}assets/wsp.jpg`

function WhatsAppButton() {
  const [imageError, setImageError] = useState(false)

  return (
    <a
      href="https://wa.me/56936274715"
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-[999] flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#25D366] text-white shadow-2xl ring-2 ring-white transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
    >
      {imageError ? (
        <MessageCircle className="h-7 w-7" />
      ) : (
        <img
          src={WHATSAPP_ICON_SRC}
          alt="WhatsApp"
          className="h-full w-full object-cover"
          onError={() => setImageError(true)}
        />
      )}
    </a>
  )
}

export default WhatsAppButton
