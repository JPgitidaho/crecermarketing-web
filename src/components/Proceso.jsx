import FadeInSection from "./FadeInSection"

const pasos = [
  {
    titulo: "Diagnóstico",
    desc: "Entiendo tu negocio y lo que necesitas resolver."
  },
  {
    titulo: "Propuesta",
    desc: "Defino prioridades, alcance y próximos pasos contigo."
  },
  {
    titulo: "Desarrollo",
    desc: "Desarrollo la solución según lo acordado."
  },
  {
    titulo: "Optimización",
    desc: "Reviso el proyecto y hago los ajustes definidos."
  },
  {
    titulo: "Entrega",
    desc: "Entrego el trabajo y aclaro las dudas iniciales."
  }
]

export default function Proceso() {
  return (
    <section className="py-28 px-6 bg-gray-50 text-[#1a1a1f]">

      <FadeInSection>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center">
          Cómo trabajo
        </h2>
      </FadeInSection>

      <FadeInSection delay={0.15}>
        <p className="mt-4 text-center text-lg max-w-3xl mx-auto text-gray-600">
          Un recorrido simple para avanzar desde la primera conversación hasta la entrega.
        </p>
      </FadeInSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16 max-w-6xl mx-auto">
        {pasos.map((paso, i) => (
          <FadeInSection delay={0.1 * i} key={i}>
            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md h-full">

              <div className="mb-4 text-3xl font-bold text-[#0f766e]">
                {i + 1}
              </div>

              <h3 className="text-xl font-bold mb-2">
                {paso.titulo}
              </h3>

              <p className="text-gray-600">
                {paso.desc}
              </p>

            </div>
          </FadeInSection>
        ))}
      </div>

    </section>
  )
}
