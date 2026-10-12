import { Link } from "react-router-dom"
import SEOTags from "../components/SEOTags"
import Navbar from "../components/Navbar"
import FadeInSection from "../components/FadeInSection"
import Proyectos from "../components/Proyectos"
import Contacto from "../components/Contacto"
import Footer from "../components/Footer"
import { DEFAULT_OG_IMAGE } from "../config/site"

const pageUrl = "https://crecerwebymarketing.cl/desarrollo-web-rancagua"

const audiences = [
  "Empresas y pymes",
  "Profesionales independientes",
  "Empresas de servicios",
  "Construcción y limpieza",
  "Servicios técnicos",
  "Negocios locales",
]

const includes = [
  {
    title: "Diseño adaptable a celulares",
    description: "El contenido se ajusta a teléfonos, tablets y computadores.",
  },
  {
    title: "Estructura profesional",
    description: "Organizo las páginas para presentar tu empresa y sus servicios con claridad.",
  },
  {
    title: "Navegación clara",
    description: "Ayudo a que las personas encuentren fácilmente la información que buscan.",
  },
  {
    title: "Formularios de contacto",
    description: "Incluyo una forma sencilla para que potenciales clientes consulten por tus servicios.",
  },
  {
    title: "Acceso a WhatsApp",
    description: "Facilito el inicio de una conversación desde el sitio web.",
  },
  {
    title: "SEO técnico básico",
    description: "Considero títulos, descripciones y una estructura que ayude a los buscadores a entender el contenido.",
  },
  {
    title: "Velocidad y rendimiento",
    description: "Cuido que las páginas carguen de forma eficiente y funcionen correctamente.",
  },
  {
    title: "Dominio y publicación",
    description: "Te acompaño con la configuración del dominio y dejo el sitio publicado.",
  },
]

const siteTypes = [
  {
    title: "Sitio web corporativo",
    description: "Para presentar una empresa, sus áreas y su información institucional.",
  },
  {
    title: "Web para empresa de servicios",
    description: "Para explicar qué haces, a quién atiendes y cómo solicitar información.",
  },
  {
    title: "Landing page",
    description: "Una página enfocada en un servicio, una campaña o una necesidad concreta.",
  },
  {
    title: "Rediseño web",
    description: "Para actualizar y reorganizar un sitio existente según las necesidades actuales del negocio.",
  },
]

const steps = [
  ["Diagnóstico", "Converso sobre tu negocio, tus objetivos y lo que necesitas resolver."],
  ["Propuesta", "Defino el alcance del proyecto y los próximos pasos."],
  ["Estructura", "Ordeno las páginas y la información que verá cada visitante."],
  ["Desarrollo", "Diseño y construyo el sitio según lo acordado."],
  ["Revisión", "Reviso el contenido y el funcionamiento antes de publicar."],
  ["Publicación", "Conecto el dominio y dejo el sitio disponible en internet."],
  ["Seguimiento inicial", "Acompaño los primeros pasos y aclaro tus dudas."],
]

const reasons = [
  "Comunicación clara durante cada etapa del proyecto.",
  "Soluciones pensadas para las necesidades de tu empresa.",
  "Diseño profesional y navegación fácil de entender.",
  "Estructura web orientada a facilitar consultas y contactos.",
  "SEO técnico básico considerado desde el desarrollo, sin prometer posiciones en buscadores.",
  "Acompañamiento desde la planificación hasta la entrega.",
]

const questions = [
  {
    question: "¿Cuánto demora desarrollar una página web?",
    answer: "El tiempo depende del alcance, la cantidad de páginas y la disponibilidad del contenido. Reviso estos puntos en el diagnóstico y acuerdo un plazo para cada proyecto.",
  },
  {
    question: "¿Qué necesito entregar para comenzar?",
    answer: "Necesitaré conocer tu empresa y sus servicios, además de los datos de contacto y los materiales que ya tengas, como logo, textos e imágenes. Te oriento sobre lo que falte.",
  },
  {
    question: "¿Trabajas solamente con empresas de Rancagua?",
    answer: "Atiendo empresas y pymes de Rancagua y la Región de O’Higgins, y también puedo trabajar de forma remota con clientes de otras regiones de Chile.",
  },
  {
    question: "¿La página queda adaptada para celulares?",
    answer: "Sí. El diseño se adapta a celulares, tablets y computadores para facilitar la navegación desde distintos dispositivos.",
  },
  {
    question: "¿El desarrollo incluye SEO?",
    answer: "Incluye una base técnica inicial, con estructura clara y elementos como títulos y descripciones. Esto ayuda a que los buscadores entiendan el sitio, pero no garantiza posiciones ni resultados específicos.",
  },
  {
    question: "¿Puedo mejorar una página que ya tengo?",
    answer: "Sí. Reviso el sitio actual y defino si conviene mejorar su estructura, actualizar el diseño o desarrollar una nueva versión.",
  },
]

function DesarrolloWebRancagua() {
  return (
    <>
      <SEOTags
        title="Desarrollo Web en Rancagua para Empresas | Crecer Marketing"
        description="Desarrollo web profesional en Rancagua para empresas y pymes. Sitios claros, rápidos y optimizados para fortalecer tu presencia digital y facilitar nuevos contactos."
        canonical={pageUrl}
        image={DEFAULT_OG_IMAGE}
      />
      <Navbar />

      <main className="text-[#1a1a1f]">
        <section className="overflow-hidden bg-[#0f172a] px-6 pb-20 pt-32 text-white md:pt-36">
          <div className="mx-auto max-w-6xl">
            <nav aria-label="Migas de pan" className="mb-8 text-sm text-slate-300">
              <Link to="/" className="underline-offset-4 hover:underline">Inicio</Link>
              <span aria-hidden="true"> / </span>
              <span>Desarrollo web en Rancagua</span>
            </nav>
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
              <FadeInSection>
                <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                  Desarrollo web profesional en Rancagua para empresas
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-200">
                  Crecer Marketing desarrolla sitios web profesionales, claros, rápidos y adaptados a las necesidades de cada negocio.
                </p>
                <a
                  href="#contacto"
                  className="mt-8 inline-flex rounded-xl bg-white px-7 py-3 font-semibold text-[#0f172a] transition hover:bg-[#99f6e4]"
                >
                  Solicitar diagnóstico
                </a>
              </FadeInSection>
              <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
                <img
                  src="/assets/mockup-desarrollo-web-laptop-01-1000.webp"
                  srcSet="/assets/mockup-desarrollo-web-laptop-01-600.webp 600w, /assets/mockup-desarrollo-web-laptop-01-1000.webp 1000w"
                  sizes="(min-width: 640px) 510px, 90vw"
                  alt="Ejemplo de desarrollo web profesional en laptop"
                  width="1448"
                  height="1086"
                  fetchPriority="high"
                  className="absolute left-0 top-0 h-[92%] w-[88%] object-contain"
                />
                <img
                  src="/assets/mockup-desarrollo-web-mobile-01.webp"
                  alt="Versión móvil de sitio web profesional"
                  width="1086"
                  height="1448"
                  className="absolute bottom-0 right-0 h-[62%] w-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <h2 className="text-3xl font-extrabold md:text-4xl">¿Para quién es este servicio?</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
                Para quienes necesitan presentar su empresa y sus servicios en internet con claridad.
              </p>
            </FadeInSection>
            <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
              {audiences.map((item) => (
                <li key={item} className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 font-semibold text-[#0f172a]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-center text-3xl font-extrabold md:text-4xl">Qué incluye el desarrollo web</h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600">
                Una base profesional para que tu sitio sea fácil de usar, mantener y entender.
              </p>
            </FadeInSection>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {includes.map((item) => (
                <article key={item.title} className="rounded-xl border border-gray-200 bg-white p-6">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 leading-7 text-gray-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#f0fdfa] px-6 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
              <img
                src="/assets/mockup-desarrollo-web-laptop-01-1000.webp"
                srcSet="/assets/mockup-desarrollo-web-laptop-01-600.webp 600w, /assets/mockup-desarrollo-web-laptop-01-1000.webp 1000w"
                sizes="(min-width: 640px) 510px, 90vw"
                alt="Ejemplo de desarrollo web profesional en laptop"
                width="1448"
                height="1086"
                loading="lazy"
                className="absolute left-0 top-0 h-[92%] w-[88%] object-contain"
              />
              <img
                src="/assets/mockup-desarrollo-web-mobile-01.webp"
                alt="Versión móvil de sitio web profesional"
                width="1086"
                height="1448"
                loading="lazy"
                className="absolute bottom-0 right-0 h-[62%] w-auto object-contain drop-shadow-xl"
              />
            </div>
            <FadeInSection>
              <h2 className="text-3xl font-extrabold md:text-4xl">Diseño adaptable a computador y celular</h2>
              <p className="mt-5 text-lg leading-8 text-gray-700">
                Una misma web debe verse y funcionar bien en pantallas grandes y pequeñas.                 Ajusto textos, imágenes y botones para que la información se lea con comodidad en cualquier dispositivo.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-center text-3xl font-extrabold md:text-4xl">Tipos de sitios web</h2>
            </FadeInSection>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {siteTypes.map((item) => (
                <article key={item.title} className="border-l-4 border-[#0f766e] bg-gray-50 p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 leading-7 text-gray-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-gray-50 px-6 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <FadeInSection>
              <h2 className="text-3xl font-extrabold md:text-4xl">Distintos estilos para distintos negocios</h2>
              <p className="mt-5 text-lg leading-8 text-gray-700">
                El diseño cambia según el tipo de empresa, el público al que se dirige, el servicio que ofrece y el objetivo de la web.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Imágenes de ejemplo conceptual. Las marcas, personas y datos que aparecen son ficticios y no corresponden a clientes ni resultados reales.
              </p>
            </FadeInSection>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
              <img
                src="/assets/mockup-desarrollo-web-mobile-02.webp"
                alt="Segundo ejemplo de diseño web responsive en celular"
                width="1086"
                height="1448"
                loading="lazy"
                className="absolute bottom-0 left-0 h-[70%] w-auto object-contain drop-shadow-xl"
              />
              <img
                src="/assets/mockup-desarrollo-web-laptop-02.webp"
                alt="Segundo ejemplo de diseño web profesional en computador"
                width="1448"
                height="1086"
                loading="lazy"
                className="absolute right-0 top-0 h-[92%] w-[80%] object-contain"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#0f172a] px-6 py-20 text-white">
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <h2 className="text-3xl font-extrabold md:text-4xl">Desarrollo web en Rancagua y la Región de O’Higgins</h2>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-200">
                Conozco las necesidades de empresas y negocios locales que buscan explicar sus servicios y facilitar consultas desde su sitio. También trabajo a distancia con clientes de otras regiones de Chile.
              </p>
              <p className="mt-4 text-slate-200">
                El SEO se considera como parte de una estructura web ordenada. Puedes leer más sobre <Link to="/blog/seo-rancagua" className="font-semibold text-white underline underline-offset-4">SEO local en Rancagua</Link> en el blog.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-center text-3xl font-extrabold md:text-4xl">Un proceso claro, de principio a fin</h2>
            </FadeInSection>
            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(([title, description], index) => (
                <li key={title} className="rounded-xl border border-gray-200 p-6">
                  <p className="text-sm font-bold text-[#0f766e]">ETAPA {index + 1}</p>
                  <h3 className="mt-2 text-xl font-bold">{title}</h3>
                  <p className="mt-2 leading-7 text-gray-600">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <FadeInSection>
              <h2 className="text-3xl font-extrabold md:text-4xl">Por qué trabajar con Crecer Marketing</h2>
            </FadeInSection>
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="border-b border-gray-200 pb-4 text-lg leading-7 text-gray-700">
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Proyectos />

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <FadeInSection>
              <h2 className="text-center text-3xl font-extrabold md:text-4xl">Preguntas frecuentes</h2>
            </FadeInSection>
            <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
              {questions.map(({ question, answer }) => (
                <details key={question} className="py-5">
                  <summary className="cursor-pointer text-lg font-semibold">{question}</summary>
                  <p className="mt-3 max-w-3xl leading-7 text-gray-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 text-center">
          <FadeInSection>
            <h2 className="text-3xl font-extrabold md:text-4xl">Cuéntame sobre la web de tu empresa</h2>
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

export default DesarrolloWebRancagua