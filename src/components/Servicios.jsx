import FadeInSection from "./FadeInSection"
import { Briefcase, BarChart3, Layout, Code } from "lucide-react"
import { Link } from "react-router-dom"

const items = [
  {
    icon: <Briefcase className="w-10 h-10 text-[#0f766e]" />,
    title: "Desarrollo web",
    desc: "Una web profesional para explicar tus servicios y facilitar el contacto.",
    href: "/desarrollo-web",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-[#0f766e]" />,
    title: "SEO local",
    desc: "Una estructura clara ayuda a que los buscadores comprendan tu sitio y su contexto local.",
    href: "/seo-rancagua",
  },
  {
    icon: <Code className="w-10 h-10 text-[#0f766e]" />,
    title: "Auditoría web",
    desc: "En la auditoría, detecto qué puede estar dificultando la navegación o comprensión de tu sitio.",
    href: "/auditoria-web",
  },
  {
    icon: <Layout className="w-10 h-10 text-[#0f766e]" />,
    title: "Soluciones digitales",
    desc: "Mejoras y herramientas web pensadas para necesidades concretas de tu negocio.",
    href: "/soluciones",
  }
]

function Services() {
  return (
    <section id="servicios" className="py-28 bg-white text-[#1a1a1f] px-6">
      
      <FadeInSection>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center">
          Servicios web para empresas y pymes
        </h2>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <p className="mt-4 text-center text-lg max-w-3xl mx-auto text-gray-600">
          Conoce las áreas en las que puedo apoyar a tu empresa.
        </p>
      </FadeInSection>

      <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <FadeInSection delay={0.1 * i} key={i}>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#99f6e4] hover:shadow-xl">
              <div>{item.icon}</div>
              <h3 className="mt-4 text-2xl font-bold">
                {item.href ? (
                  <Link to={item.href} className="hover:text-[#0f766e]">
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
              </h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
              <Link
                to={item.href}
                className="mt-5 inline-flex font-semibold text-[#0f766e] underline-offset-4 hover:underline"
                aria-label={`Ver servicio: ${item.title}`}
              >
                Ver servicio
              </Link>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}

export default Services
