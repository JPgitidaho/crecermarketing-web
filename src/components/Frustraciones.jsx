import { CircleAlert } from "lucide-react"

function Frustraciones() {
  const items = [
    "Tu web no aparece en Google ni recibe visitas de calidad.",
    "Se ve mal en celulares o tarda demasiado en cargar.",
    "No tienes una forma clara de actualizarla o presentar tus servicios.",
    "No genera consultas, ventas ni oportunidades reales.",
    "Terminaste dependiendo de Instagram o WhatsApp porque la web no ayuda.",
  ]

  return (
    <section className="bg-slate-50 px-6 py-20 text-center text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="mb-8 bg-gradient-to-r from-[#0f172a] via-[#0f766e] to-[#67e8f9] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          ¿Te sientes identificado con esto?
        </h2>
        <ul className="space-y-4 text-lg text-gray-700 text-left">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CircleAlert className="mt-1 shrink-0 text-[#0f766e]" size={22} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Frustraciones
