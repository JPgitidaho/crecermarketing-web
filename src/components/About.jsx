import FadeInSection from "./FadeInSection"
import { Briefcase, CheckSquare } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-gray-50 text-[#1a1a1f]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <FadeInSection>
          <div className="relative flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#7209b7] to-[#4cc9f0] rounded-3xl blur-xl opacity-20"></div>

            <div className="relative bg-white p-6 rounded-2xl shadow-xl">
              <img
                src="/assets/juanita.webp"
                alt="Juanita Perez - Desarrollo web profesional"
                className="w-full max-w-sm rounded-xl"
              />
            </div>
          </div>
        </FadeInSection>

        <div>
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Desarrollo sitios web pensados para dar una imagen profesional y generar confianza
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              Ayudo a negocios y empresas a tener una presencia digital clara, moderna y estratégica.
              Mi enfoque combina diseño, estructura y desarrollo web para que tu sitio no solo se vea bien,
              sino que también comunique mejor lo que haces y te ayude a atraer clientes.
            </p>
          </FadeInSection>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <FadeInSection delay={0.25}>
              <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-[#3a0ca3]" />
                  <div>
                    <div className="text-sm text-gray-500">Enfoque</div>
                    <div className="font-semibold">
                      Sitios web claros, profesionales y estratégicos
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <CheckSquare className="w-6 h-6 text-[#3a0ca3]" />
                  <div>
                    <div className="text-sm text-gray-500">Objetivo</div>
                    <div className="font-semibold">
                      Transmitir confianza y ayudarte a captar clientes
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.4}>
            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="#proyectos"
                className="px-6 py-3 rounded-xl bg-[#3a0ca3] text-white font-semibold hover:bg-[#4cc9f0] hover:text-black transition"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="px-6 py-3 rounded-xl border border-gray-300 font-semibold text-gray-800 hover:bg-gray-100 transition"
              >
                Solicitar diagnóstico
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}