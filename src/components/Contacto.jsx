import { useRef, useState } from "react"
import { toast } from "react-hot-toast"
import {
  getContactPayload,
  sendContactForm,
  validateContactFields,
} from "../lib/contact"

function Contacto() {
  const form = useRef()
  const [enviando, setEnviando] = useState(false)

  const enviarMensaje = (e) => {
    e.preventDefault()

    const payload = getContactPayload(form.current)
    const validationError = validateContactFields(payload)

    if (validationError) {
      toast.error(validationError)
      return
    }

    setEnviando(true)

    sendContactForm(form.current)
      .then(() => {
        toast.success("Mensaje enviado correctamente.")
        form.current.reset()
      })
      .catch(() => {
        toast.error("Ocurrió un error al enviar el mensaje.")
      })
      .finally(() => {
        setEnviando(false)
      })
  }

  return (
    <section className="bg-white px-6 py-20 text-gray-800" id="contacto">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="mb-8 bg-gradient-to-r from-[#0f172a] via-[#0f766e] to-[#67e8f9] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Solicita un diagnóstico
        </h2>

        <p className="text-lg mb-12 text-gray-600">
          Si tu negocio necesita una web más clara, profesional o estratégica, cuéntame tu proyecto y te responderé con una orientación inicial.
        </p>

        <form ref={form} onSubmit={enviarMensaje} className="space-y-6 rounded-[28px] border border-slate-200 bg-slate-50 p-8 text-left shadow-sm">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              autoComplete="name"
              minLength="2"
              className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-4 py-2 shadow-sm outline-none focus:border-[#0f766e] focus:ring-[#0f766e]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="email"
              className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-4 py-2 shadow-sm outline-none focus:border-[#0f766e] focus:ring-[#0f766e]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Cuéntame sobre tu proyecto
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              minLength="10"
              className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-4 py-2 shadow-sm outline-none resize-none focus:border-[#0f766e] focus:ring-[#0f766e]"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={enviando}
              aria-busy={enviando}
              className={`inline-block px-8 py-3 font-semibold text-white rounded-xl transition ${
                enviando
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#0f766e] hover:bg-[#115e59]"
              }`}
            >
              {enviando ? "Enviando..." : "Enviar solicitud"}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contacto
