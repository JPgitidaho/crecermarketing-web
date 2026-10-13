import FadeInSection from "./FadeInSection"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    titulo: "E-commerce – Tienda Online",
    desc: "Desarrollo de una tienda online con catálogo de productos, carrito de compras y una experiencia de usuario clara orientada a facilitar la compra.",
    img: "/assets/mockup-proyecto1.webp",
    srcSet: "/assets/mockup-proyecto1-800.webp 800w, /assets/mockup-proyecto1.webp 1032w",
    width: 1032,
    height: 558,
    link: "https://personal-sleep-outside.netlify.app",
  },
  {
    titulo: "Sitio Web Corporativo",
    desc: "Diseño y desarrollo de un sitio web orientado a transmitir credibilidad, explicar servicios con claridad y fortalecer la presencia digital del negocio.",
    img: "/assets/sitio-clinica-dental.webp",
    width: 1273,
    height: 599,
    link: null,
  },
  {
    titulo: "Sistema de Gestión Interna",
    desc: "Dashboard interno diseñado para organizar procesos administrativos y mejorar la visualización de información dentro de la empresa.",
    img: "/assets/undraw_dashboard_p93p.webp",
    width: 2059,
    height: 1097,
    link: null,
  },
]

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-28 px-6 bg-white text-[#1a1a1f]">
      <FadeInSection>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center">
          Proyectos web y soluciones digitales
        </h2>
      </FadeInSection>

      <FadeInSection delay={0.15}>
        <p className="mt-4 text-center text-lg max-w-3xl mx-auto text-gray-600">
          Una selección de proyectos existentes de comercio electrónico, sitios corporativos y herramientas internas.
        </p>
      </FadeInSection>

      <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto items-stretch">
        {projects.map((project, index) => (
          <FadeInSection delay={0.1 * index} key={project.titulo}>
            <div className="group h-full bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="w-full h-56 bg-white overflow-hidden">
                <img
                  src={project.img}
                  srcSet={project.srcSet}
                  sizes={project.srcSet ? "(min-width: 768px) 360px, calc(100vw - 48px)" : undefined}
                  width={project.width}
                  height={project.height}
                  loading="lazy"
                  decoding="async"
                  alt={project.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="min-h-[64px] text-xl font-bold text-[#0f766e]">
                  {project.titulo}
                </h3>

                <p className="mt-2 text-gray-700 flex-1">{project.desc}</p>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center font-semibold text-[#0f766e] hover:underline"
                  >
                    Ver proyecto <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                ) : (
                  <span className="mt-6 inline-flex items-center font-semibold text-gray-500">
                    Caso privado disponible bajo solicitud
                  </span>
                )}
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}
