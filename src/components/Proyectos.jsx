import FadeInSection from "./FadeInSection"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    titulo: "SleepOutside – E-commerce",
    desc: "Tienda online con catálogo, carrito y diseño limpio orientado al usuario.",
    img: "/assets/mockup-proyecto1.png", 
    link: "https://personal-sleep-outside.netlify.app"
  },
  {
    titulo: "Sitio Corporativo Profesional",
    desc: "Rediseño completo orientado a credibilidad, posicionamiento y conversión.",
    img: "/assets/sitio-clinica-dental.webp",  
    link: "#"
  },
  {
    titulo: "Sistema Interno Empresarial",
    desc: "Dashboard interno diseñado para mejorar procesos administrativos.",
    img: "/assets/undraw_dashboard_p93p.webp",
    link: "#"
  }
]


export default function Proyectos() {
  return (
    <section id="proyectos" className="py-28 px-6 bg-white text-[#1a1a1f]">
      <FadeInSection>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center">
          Proyectos Destacados
        </h2>
      </FadeInSection>

      <FadeInSection delay={0.15}>
        <p className="mt-4 text-center text-lg max-w-3xl mx-auto text-gray-600">
          Algunos de los proyectos que he desarrollado para empresas, 
          enfocados en resultados, eficiencia y experiencia digital.
        </p>
      </FadeInSection>

      <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <FadeInSection delay={0.1 * i} key={i}>
            <div className="group bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              
              <div className="w-full h-48 bg-white flex items-center justify-center overflow-hidden">
<img 
  src={p.img}
  alt={p.titulo}
  className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
/>

              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3a0ca3]">
                  {p.titulo}
                </h3>
                <p className="mt-2 text-gray-700">
                  {p.desc}
                </p>

                <a 
                  href={p.link} 
                  className="mt-4 inline-flex items-center text-[#3a0ca3] font-semibold hover:underline"
                >
                  Ver proyecto <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </div>

            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}
