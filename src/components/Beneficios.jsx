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
    <section className="bg-white px-6 py-20 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-10 bg-gradient-to-r from-[#0f172a] via-[#0f766e] to-[#67e8f9] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          ¿Y si tu web hiciera lo que esperas?
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 text-left mt-10">
          {beneficios.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle className="text-[#0f766e]" size={24} />
              <span className="text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Beneficios
