import FadeInSection from "./FadeInSection"
import { Briefcase, CheckSquare } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-gray-50 text-[#1a1a1f]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<FadeInSection>
  <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md">
    <img 
      src="/assets/juanita.webp"
      alt="Juanita Perez - Desarrollo Web para Empresas"
      className="w-full rounded-lg"
    />
  </div>
</FadeInSection>


        <div>
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-extrabold">Soy lo que necesitas — desarrollo web para empresas</h2>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              Diseño y desarrollo soluciones digitales con foco en objetivos de negocio. Trabajo con equipos y áreas técnicas para convertir procesos en plataformas eficientes que aumentan ventas, reducen costos y mejoran la experiencia del cliente.
            </p>
          </FadeInSection>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <FadeInSection delay={0.25}>
              <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-[#3a0ca3]" />
                  <div>
                    <div className="text-sm text-gray-500">Clientes</div>
                    <div className="font-semibold">Empresas B2B y organizaciones</div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <CheckSquare className="w-6 h-6 text-[#3a0ca3]" />
                  <div>
                    <div className="text-sm text-gray-500">Resultados</div>
                    <div className="font-semibold">KPIs claros: conversiones y eficiencia</div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.4}>
            <div className="mt-8 flex gap-4">
              <a href="#proyectos" className="px-6 py-3 rounded-xl bg-[#3a0ca3] text-white font-semibold hover:bg-[#4cc9f0] transition">
                Ver proyectos
              </a>
              <a href="#contacto" className="px-6 py-3 rounded-xl border border-gray-300 font-semibold text-gray-800 hover:bg-gray-100 transition">
                Contactar
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
