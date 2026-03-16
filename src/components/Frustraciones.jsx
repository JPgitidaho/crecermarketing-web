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
    <section className="bg-gray-50 py-20 px-6 text-center text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#f72585] via-[#7209b7] to-[#4cc9f0]">
          ¿Te sientes identificado con esto?
        </h2>
        <ul className="space-y-4 text-lg text-gray-700 text-left">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CircleAlert className="mt-1 shrink-0 text-[#f72585]" size={22} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Frustraciones
