import FadeInSection from "./FadeInSection"
import { Briefcase, BarChart3, Layout, Code } from "lucide-react"

const items = [
  {
    icon: <Briefcase className="w-10 h-10 text-[#3a0ca3]" />,
    title: "Sitios Corporativos",
    desc: "Presencia profesional, comunicación clara y enfoque en credibilidad. Desarrollo pensado para organizaciones que quieren impacto real."
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-[#3a0ca3]" />,
    title: "Sistemas y Plataformas",
    desc: "Soluciones a medida para optimizar procesos, reducir costos y digitalizar operaciones internas de tu empresa."
  },
  {
    icon: <Layout className="w-10 h-10 text-[#3a0ca3]" />,
    title: "E-commerce Avanzado",
    desc: "Tiendas robustas, rápidas y escalables. Integración con logística, stock, medios de pago y sistemas internos."
  },
  {
    icon: <Code className="w-10 h-10 text-[#3a0ca3]" />,
    title: "Desarrollo a Medida",
    desc: "Herramientas diseñadas según la realidad de tu negocio. Tecnología alineada 100% a tus objetivos empresariales."
  }
]

function Services() {
  return (
    <section id="servicios" className="py-28 bg-white text-[#1a1a1f] px-6">
      
      <FadeInSection>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center">
          Servicios para Empresas
        </h2>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <p className="mt-4 text-center text-lg max-w-3xl mx-auto text-gray-600">
          Desarrollo estratégico enfocado en resultados: eficiencia, crecimiento y presencia digital sólida.
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
