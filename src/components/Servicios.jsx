import FadeInSection from "./FadeInSection"
import { Briefcase, BarChart3, Layout, Code } from "lucide-react"

const items = [
  {
    icon: <Briefcase className="w-10 h-10 text-[#3a0ca3]" />,
    title: "Sitio Web Profesional para Negocios",
    desc: "Diseño y desarrollo de sitios web claros, rápidos y bien estructurados para que tu negocio transmita confianza y explique mejor lo que ofrece."
  },
  {
    icon: <Layout className="w-10 h-10 text-[#3a0ca3]" />,
    title: "Landing Pages para Captar Clientes",
    desc: "Páginas enfocadas en convertir visitantes en contactos o ventas. Ideales para campañas, servicios específicos o lanzamientos."
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-[#3a0ca3]" />,
    title: "Rediseño Web Estratégico",
    desc: "Si tu sitio actual se ve antiguo o no comunica bien tu negocio, lo reorganizo y rediseño para que sea claro, moderno y efectivo."
  },
  {
    icon: <Code className="w-10 h-10 text-[#3a0ca3]" />,
    title: "Auditoría Web Inicial",
    desc: "Análisis de tu sitio web para detectar problemas de estructura, mensaje o presencia digital, con recomendaciones claras de mejora."
  }
]

function Services() {
  return (
    <section id="servicios" className="py-28 bg-white text-[#1a1a1f] px-6">
      
      <FadeInSection>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center">
          Soluciones Web para Negocios
        </h2>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <p className="mt-4 text-center text-lg max-w-3xl mx-auto text-gray-600">
          Desarrollo de sitios web profesionales pensados para transmitir confianza, explicar claramente tu negocio y ayudarte a atraer más clientes.
        </p>
      </FadeInSection>

      <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <FadeInSection delay={0.1 * i} key={i}>
            <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300">
              <div>{item.icon}</div>
              <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}

export default Services