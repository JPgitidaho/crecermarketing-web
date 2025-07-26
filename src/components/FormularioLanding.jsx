import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "react-hot-toast"

function FormularioLanding() {
  const form = useRef()
  const [enviando, setEnviando] = useState(false)

  const enviarMensaje = (e) => {
    e.preventDefault()
    setEnviando(true)

    emailjs
      .sendForm(
        "service_i4rxzlc",
        "template_c62v1ir",
        form.current,
        "83EWTN4t8yyyKqrU9"
      )
      .then(() => {
        toast.success("Mensaje enviado correctamente 🎉")
        form.current.reset()
      })
      .catch(() => {
        toast.error("Ocurrió un error al enviar el mensaje")
      })
      .finally(() => {
        setEnviando(false)
      })
  }

  return (
    <section id="formulario" className="py-20 px-6 bg-gradient-to-br from-[#f72585]/10 to-[#7209b7]/5 text-gray-800">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#7209b7] via-[#3a0ca3] to-[#4cc9f0]">
          ¿Quieres que revisemos tu web actual?
        </h2>
        <p className="mb-10 text-gray-600">Completa el formulario y te daré recomendaciones reales y sin compromiso.</p>

        <form ref={form} onSubmit={enviarMensaje} className="space-y-6 text-left">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-[#7209b7] focus:border-[#7209b7] outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Correo electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-[#7209b7] focus:border-[#7209b7] outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje o problema actual</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-[#7209b7] focus:border-[#7209b7] outline-none resize-none"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={enviando}
              className={`px-8 py-3 font-semibold text-white rounded-xl transition ${
                enviando ? "bg-gray-400 cursor-not-allowed" : "bg-[#7209b7] hover:bg-[#3a0ca3]"
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
