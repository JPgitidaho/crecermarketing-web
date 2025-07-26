import { CheckCircle } from "lucide-react"

function Beneficios() {
  const beneficios = [
    "Tu web visible en Google con SEO real",
    "Carga rápida y diseño responsive",
    "Visualmente atractiva, pero también estratégica",
    "Fácil de usar, actualizar y escalar",
    "Optimizada para convertir visitas en contactos o ventas",
  ]

  return (
    <section className="bg-white py-20 px-6 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#4361ee] via-[#7209b7] to-[#f72585]">
          ¿Y si tu web hiciera lo que esperas?
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 text-left mt-10">
          {beneficios.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="text-[#7209b7]" size={24} />
              <span className="text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Beneficios
