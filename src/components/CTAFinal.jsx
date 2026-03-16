import { MessageCircle } from "lucide-react"
import { WHATSAPP_URL } from "../config/site"

function CTAFinal() {
  return (
    <section className="bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#115e59] px-6 py-20 text-center text-white">
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
        className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#0f172a] transition hover:bg-[#ccfbf1]"
      >
        <MessageCircle className="h-5 w-5" />
        Escribir por WhatsApp
      </a>
    </section>
  )
}

export default CTAFinal
