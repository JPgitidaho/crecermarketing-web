import { useRef, useState } from "react"
import { toast } from "react-hot-toast"
import {
  getContactPayload,
  sendContactForm,
  validateContactFields,
} from "../lib/contact"

function FormularioLanding() {
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
    <section id="contacto" className="bg-gradient-to-br from-[#ecfeff] via-white to-[#f0fdfa] px-6 py-20 text-gray-800">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="mb-6 bg-gradient-to-r from-[#0f172a] via-[#0f766e] to-[#67e8f9] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          ¿Quieres que revisemos tu web actual?
        </h2>
        <p className="mb-10 text-gray-600">Completa el formulario y te daré recomendaciones reales y sin compromiso.</p>

        <form ref={form} onSubmit={enviarMensaje} className="space-y-6 rounded-[28px] border border-slate-200 bg-white p-8 text-left shadow-sm">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              autoComplete="name"
              minLength="2"
              className="w-full rounded-md border border-slate-300 px-4 py-2 outline-none focus:border-[#0f766e] focus:ring-[#0f766e]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Correo electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="email"
              className="w-full rounded-md border border-slate-300 px-4 py-2 outline-none focus:border-[#0f766e] focus:ring-[#0f766e]"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje o problema actual</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              minLength="10"
              className="w-full rounded-md border border-slate-300 px-4 py-2 outline-none resize-none focus:border-[#0f766e] focus:ring-[#0f766e]"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={enviando}
              aria-busy={enviando}
              className={`px-8 py-3 font-semibold text-white rounded-xl transition ${
                enviando ? "bg-gray-400 cursor-not-allowed" : "bg-[#0f766e] hover:bg-[#115e59]"
              }`}
            >
              {enviando ? "Enviando..." : "Solicitar diagnóstico"}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default FormularioLanding
