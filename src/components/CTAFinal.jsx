import { MessageCircle } from "lucide-react"
import { WHATSAPP_URL } from "../config/site"

function CTAFinal() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#3a0ca3] to-[#f72585] text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Tu sitio web debería ayudarte a vender mejor.
      </h2>
      <p className="max-w-2xl mx-auto text-white/90 mb-8">
        Si prefieres una respuesta rápida, escríbeme por WhatsApp y revisamos tu caso sin compromiso.
      </p>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 bg-white text-[#7209b7] font-semibold px-6 py-3 rounded-lg hover:bg-[#f1f1f1] transition"
      >
        <MessageCircle className="h-5 w-5" />
        Escribir por WhatsApp
      </a>
    </section>
  )
}

export default CTAFinal
