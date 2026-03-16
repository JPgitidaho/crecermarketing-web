import FadeInSection from "./FadeInSection"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    titulo: "E-commerce – Tienda Online",
    desc: "Desarrollo de una tienda online con catálogo de productos, carrito de compras y una experiencia de usuario clara orientada a facilitar la compra.",
    img: "/assets/mockup-proyecto1.png",
    link: "https://personal-sleep-outside.netlify.app"
  },
  {
    titulo: "Sitio Web Corporativo",
    desc: "Diseño y desarrollo de un sitio web orientado a transmitir credibilidad, explicar servicios con claridad y fortalecer la presencia digital del negocio.",
    img: "/assets/sitio-clinica-dental.webp",
    link: "#"
  },
  {
    titulo: "Sistema de Gestión Interna",
    desc: "Dashboard interno diseñado para organizar procesos administrativos y mejorar la visualización de información dentro de la empresa.",
    img: "/assets/undraw_dashboard_p93p.webp",
    link: "#"
  }
]

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-28 px-6 bg-white text-[#1a1a1f]">
      <FadeInSection>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center">
          Algunos proyectos desarrollados
        </h2>
      </FadeInSection>

      <FadeInSection delay={0.15}>
        <p className="mt-4 text-center text-lg max-w-3xl mx-auto text-gray-600">
          Ejemplos de soluciones web creadas para mejorar la presencia digital,
          comunicar mejor un negocio y ofrecer experiencias digitales claras.
        </p>
      </FadeInSection>

      <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto items-stretch">
        {projects.map((p, i) => (
          <FadeInSection delay={0.1 * i} key={i}>
            <div className="group h-full bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="w-full h-56 bg-white overflow-hidden">
                <img
                  src={p.img}
                  alt={p.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#3a0ca3] min-h-[64px]">
                  {p.titulo}
                </h3>

                <p className="mt-2 text-gray-700 flex-1">
                  {p.desc}
                </p>

                <a
                  href={p.link}
                  className="mt-6 inline-flex items-center text-[#3a0ca3] font-semibold hover:underline"
                >
                  Ver detalle <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}