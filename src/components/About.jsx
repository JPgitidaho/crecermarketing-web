import FadeInSection from "./FadeInSection"
import { Briefcase, CheckSquare } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-gray-50 text-[#1a1a1f]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<FadeInSection>
  <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md">
    <img 
      src="/assets/juanita.jpg"
      alt="Juanita Perez - Desarrollo Web para Empresas"
      className="w-full rounded-lg"
    />
  </div>
</FadeInSection>


        <div>
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Por qué Crecer Marketing
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              Trabajo con claridad, criterio profesional y comunicación simple. Cada solución se adapta a las prioridades de tu empresa, con acompañamiento durante el proyecto y sin tecnicismos innecesarios.
            </p>
          </FadeInSection>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <FadeInSection delay={0.25}>
              <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-[#0f766e]" />
                  <div>
                    <div className="text-sm text-gray-500">Enfoque</div>
                    <div className="font-semibold">
                      Soluciones adaptadas a cada negocio
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <CheckSquare className="w-6 h-6 text-[#0f766e]" />
                  <div>
                    <div className="text-sm text-gray-500">Objetivo</div>
                    <div className="font-semibold">
                      Comunicación clara y acompañamiento
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>

        </div>
      </div>
    </section>
  )
}
