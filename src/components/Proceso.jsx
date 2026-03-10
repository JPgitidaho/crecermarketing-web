import FadeInSection from "./FadeInSection"

const pasos = [
  {
    titulo: "Análisis del negocio",
    desc: "Revisamos tu negocio, tu público y tus objetivos para entender qué necesita realmente tu sitio web."
  },
  {
    titulo: "Estructura estratégica",
    desc: "Definimos la estructura del sitio para que sea clara, profesional y comunique correctamente lo que ofreces."
  },
  {
    titulo: "Diseño y desarrollo",
    desc: "Construyo el sitio web con un diseño moderno, rápido y adaptado a todos los dispositivos."
  },
  {
    titulo: "Optimización y lanzamiento",
    desc: "El sitio se publica optimizado para ofrecer una buena experiencia y ayudar a tu negocio a generar confianza."
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
          Cada proyecto sigue un proceso claro para asegurar que el sitio web 
          realmente ayude a tu negocio a comunicar mejor y verse profesional.
        </p>
      </FadeInSection>

      <div className="grid md:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
        {pasos.map((paso, i) => (
          <FadeInSection delay={0.1 * i} key={i}>
            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md h-full">
              
              <div className="text-3xl font-bold text-[#3a0ca3] mb-4">
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