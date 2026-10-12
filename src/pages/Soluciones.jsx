import { Link } from "react-router-dom"
import { ArrowRight, ClipboardCheck, Globe, MapPin, Wrench } from "lucide-react"
import SEOTags from "../components/SEOTags"
import Navbar from "../components/Navbar"
import FadeInSection from "../components/FadeInSection"
import Contacto from "../components/Contacto"
import Footer from "../components/Footer"
import { SITE_URL } from "../config/site"

const problems = [
  "Tengo una página que no genera contactos.",
  "Mi negocio no aparece correctamente en Google.",
  "Mi web está desactualizada.",
  "No sé qué debería mejorar digitalmente.",
  "Necesito una solución adaptada a mi negocio.",
]

const solutions = [
  {
    icon: Globe,
    title: "Desarrollo web",
    description: "Sitios web profesionales, claros, rápidos y adaptados a computador y celular.",
    href: "/desarrollo-web-rancagua",
    cta: "Ver desarrollo web",
  },
  {
    icon: MapPin,
    title: "SEO local",
    description: "Mejorar la presencia de una empresa en búsquedas locales y ayudar a que potenciales clientes la encuentren.",
    href: "/seo-rancagua",
    cta: "Ver servicio SEO local",
  },
  {
    icon: ClipboardCheck,
    title: "Auditoría web",
    description: "Analizar una página existente para detectar problemas técnicos, de estructura, experiencia y presencia digital.",
    href: "/auditoria-web-rancagua",
    cta: "Ver servicio de auditoría web",
  },
  {
    icon: Wrench,
    title: "Soluciones digitales",
    description: "Soluciones para procesos o necesidades específicas de una empresa, como mejoras digitales y automatizaciones simples cuando corresponden.",
  },
]

const guide = [
  ["Necesito una página nueva", "Desarrollo web"],
  ["Ya tengo web, pero no funciona como espero", "Auditoría web"],
  ["No me encuentran en Google", "SEO local"],
  ["Tengo una necesidad específica", "Solución digital"],
]

const steps = [
  ["Converso", "Escucho qué necesita tu negocio."],
  ["Analizo", "Reviso la necesidad y el punto de partida."],
  ["Defino", "Elijo la solución que corresponde."],
  ["Implemento", "Desarrollo lo acordado."],
  ["Reviso", "Valido el resultado antes de la entrega."],
]

const differentials = [
  "Cada solución responde a las necesidades de la empresa.",
  "Uso un lenguaje claro, sin tecnicismos innecesarios.",
  "Las decisiones parten de la necesidad real del negocio.",
  "Tengo una base técnica sólida en desarrollo web.",
  "El SEO se considera desde la estructura del sitio.",
  "Trabajo con un enfoque práctico.",
]

function Soluciones() {
  return (
    <>
      <SEOTags
        title="Soluciones Digitales para Empresas | Crecer Marketing"
        description="Desarrollo web, SEO local, auditoría web y soluciones digitales para empresas y pymes. Identifica qué necesita tu negocio para mejorar su presencia digital."
        canonical={`${SITE_URL}/soluciones`}
      />
      <Navbar />

      <main className="text-[#1a1a1f]">
        <section className="bg-[#0f172a] px-6 pb-20 pt-36 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <FadeInSection>
              <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                Soluciones digitales para empresas y pymes
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                Ayudo a empresas y pymes a mejorar su presencia digital mediante desarrollo web, SEO local, auditoría web y soluciones digitales adaptadas al negocio.
              </p>
              <a
                href="#contacto"
                className="mt-8 inline-flex rounded-xl bg-white px-7 py-3 font-semibold text-[#0f172a] transition hover:bg-[#99f6e4]"
              >
                Solicitar diagnóstico
              </a>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <h2 className="text-3xl font-extrabold md:text-4xl">¿Te suena familiar?</h2>
            </FadeInSection>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {problems.map((item) => (
                <li key={item} className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-lg text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-center text-3xl font-extrabold md:text-4xl">Servicios para tu negocio</h2>
            </FadeInSection>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {solutions.map(({ icon: Icon, title, description, href, cta }) => (
                <article key={title} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ccfbf1] text-[#0f766e]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-[#0f172a]">{title}</h3>
                  <p className="mt-2 flex-1 leading-7 text-gray-600">{description}</p>
                  {href && (
                    <Link to={href} className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0f766e] hover:underline">
                      {cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <FadeInSection>
              <h2 className="text-center text-3xl font-extrabold md:text-4xl">¿Cómo saber qué necesito?</h2>
            </FadeInSection>
            <ul className="mt-10 space-y-4">
              {guide.map(([need, solution]) => (
                <li key={need} className="flex flex-col gap-2 rounded-xl border border-gray-200 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-lg">“{need}”</span>
                  <span className="inline-flex items-center gap-2 font-semibold text-[#0f766e]">
                    <ArrowRight className="h-4 w-4" aria-hidden="true" /> {solution}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#0f172a] px-6 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-center text-3xl font-extrabold md:text-4xl">Forma de trabajo</h2>
            </FadeInSection>
            <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map(([title, description], index) => (
                <li key={title} className="rounded-xl border border-white/15 p-5">
                  <p className="text-sm font-bold text-[#99f6e4]">{index + 1}</p>
                  <h3 className="mt-1 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <FadeInSection>
              <h2 className="text-3xl font-extrabold md:text-4xl">Soluciones según tu negocio</h2>
            </FadeInSection>
            <ul className="space-y-4">
              {differentials.map((item) => (
                <li key={item} className="border-b border-gray-200 pb-4 text-lg leading-7 text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-16 text-center">
          <FadeInSection>
            <h2 className="text-3xl font-extrabold md:text-4xl">Cuéntanos qué necesita tu empresa</h2>
            <a
              href="#contacto"
              className="mt-6 inline-flex rounded-xl bg-[#0f766e] px-7 py-3 font-semibold text-white transition hover:bg-[#115e59]"
            >
              Solicitar diagnóstico
            </a>
          </FadeInSection>
        </section>

        <Contacto />
      </main>

      <Footer />
    </>
  )
}

export default Soluciones
