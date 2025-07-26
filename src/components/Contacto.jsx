import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "react-hot-toast"

function Contacto() {
  const form = useRef()
  const [enviando, setEnviando] = useState(false)

const enviarMensaje = (e) => {
  e.preventDefault()

  const nombre = form.current.name.value.trim()
  const email = form.current.email.value.trim()
  const mensaje = form.current.message.value.trim()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!nombre || nombre.length < 2) {
    toast.error("Por favor ingresa un nombre válido")
    return
  }

  if (!emailRegex.test(email)) {
    toast.error("Correo inválido")
    return
  }

  if (!mensaje || mensaje.length < 5) {
    toast.error("El mensaje es muy corto")
    return
  }

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
    <section className="py-20 bg-white text-gray-800 px-6" id="contacto">
      <div className="max-w-2xl mx-auto text-center">
       <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#f72585] via-[#7209b7] to-[#4cc9f0]">
  🤝 Hablemos
</h2>

        <p className="text-lg mb-12 text-gray-600">
          ¿Tienes un proyecto o una idea en mente? Envíame un mensaje y te responderé en menos de 24 horas.
        </p>
        <form ref={form} onSubmit={enviarMensaje} className="space-y-6 text-left">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input type="text" name="name" id="name" required className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-[#7209b7] focus:border-[#7209b7] outline-none" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-[#7209b7] focus:border-[#7209b7] outline-none" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea name="message" id="message" rows="5" required className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-[#7209b7] focus:border-[#7209b7] outline-none resize-none"></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={enviando}
              className={`inline-block px-8 py-3 font-semibold text-white rounded-xl transition ${
                enviando
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#7209b7] hover:bg-[#3a0ca3]"
              }`}
            >
              {enviando ? "Enviando..." : "Enviar mensaje"}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contacto
