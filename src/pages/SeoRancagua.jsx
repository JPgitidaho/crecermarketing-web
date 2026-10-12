import { Link } from "react-router-dom"
import {
  BarChart3,
  BookOpen,
  Check,
  ClipboardCheck,
  Code2,
  FileSearch,
  MapPin,
  MousePointerClick,
  Search,
  Wrench,
} from "lucide-react"
import SEOTags from "../components/SEOTags"
import Navbar from "../components/Navbar"
import FadeInSection from "../components/FadeInSection"
import Contacto from "../components/Contacto"
import Footer from "../components/Footer"
import { SITE_URL } from "../config/site"

const serviceItems = [
  { icon: Code2, title: "Estructura web", description: "Organizo las páginas para que las personas y Google entiendan tus servicios." },
  { icon: Wrench, title: "SEO técnico básico", description: "Reviso aspectos técnicos esenciales que pueden dificultar que tu sitio aparezca." },
  { icon: Search, title: "Búsquedas relevantes", description: "Identifico cómo buscan tus potenciales clientes y qué servicios quieren encontrar." },
  { icon: MapPin, title: "Enfoque local", description: "Ajusto la información para conectar tu empresa con Rancagua y las zonas que atiendes." },
  { icon: ClipboardCheck, title: "Perfil de Negocio en Google", description: "Lo reviso cuando corresponde a tu tipo de negocio y forma de atención." },
  { icon: BookOpen, title: "Títulos y contenido", description: "Mejoro títulos, descripciones y contenido según lo que busca cada persona." },
  { icon: FileSearch, title: "Enlaces e indexación", description: "Reviso la conexión entre páginas y si Google puede incluirlas en sus resultados." },
  { icon: BarChart3, title: "Seguimiento básico", description: "Observo la evolución de la visibilidad y priorizo próximos ajustes." },
]

const journey = ["Persona busca", "Google muestra resultados", "Encuentra una empresa", "Visita la web", "Contacta"]
const audiences = ["Construcción y servicios técnicos", "Limpieza y empresas de servicios", "Profesionales y negocios locales", "Pymes de Rancagua y O’Higgins"]
const workSteps = ["Diagnóstico", "Análisis", "Priorización", "Optimización", "Seguimiento"]
const measures = ["Visibilidad", "Impresiones", "Clics", "Búsquedas", "Tráfico orgánico", "Consultas recibidas"]

const questions = [
  {
    question: "¿Cuánto demora el SEO en mostrar resultados?",
    answer: "El SEO es un trabajo gradual. El tiempo depende del estado de tu web, la competencia y las búsquedas de tu rubro; no es posible establecer un plazo único.",
  },
  {
    question: "¿Necesito tener una página web?",
    answer: "Una web propia ayuda a presentar tus servicios y es una base importante para trabajar el SEO. Si todavía no tienes una, puedo orientarte sobre desarrollo web.",
  },
  {
    question: "¿SEO y Google Ads son lo mismo?",
    answer: "No. SEO trabaja la visibilidad orgánica en los resultados. Google Ads muestra anuncios pagados. Son canales distintos y pueden complementarse.",
  },
  {
    question: "¿El SEO garantiza aparecer primero en Google?",
    answer: "No. Ningún servicio puede garantizar una posición específica. El trabajo busca mejorar las condiciones para que tu empresa sea comprendida y encontrada.",
  },
  {
    question: "¿Trabajas solo con empresas de Rancagua?",
    answer: "El foco local está en Rancagua y la Región de O’Higgins. También puedo trabajar de forma remota con empresas de otras zonas.",
  },
  {
    question: "¿Puedo hacer SEO si mi web ya existe?",
    answer: "Sí. Reviso el sitio actual, identifico oportunidades y priorizo mejoras según su punto de partida.",
  },
]

function SeoRancagua() {
  return (
    <>
      <SEOTags
        title="SEO en Rancagua para Empresas | Crecer Web y Marketing"
        description="SEO en Rancagua para empresas y pymes. Mejora tu visibilidad en Google y facilita que potenciales clientes encuentren tus servicios."
        canonical={`${SITE_URL}/seo-rancagua`}
      />
      <Navbar />

      <main className="overflow-hidden text-[#1a1a1f]">
        <section className="bg-[#0f172a] px-6 pb-16 pt-32 text-white md:pb-20 md:pt-40">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeInSection>
              <p className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[#99f6e4]">
                <MapPin className="h-4 w-4" aria-hidden="true" /> SEO local · Rancagua y O’Higgins
              </p>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
                SEO en Rancagua para empresas que quieren ser encontradas
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Tener una página web no basta si tus clientes no logran encontrarla. El SEO ayuda a mejorar tu presencia en Google cuando buscan los servicios que ofreces.
              </p>
              <a
                href="#contacto"
                className="mt-8 inline-flex rounded-xl bg-white px-7 py-3 font-semibold text-[#0f172a] transition hover:bg-[#99f6e4]"
              >
                Solicitar diagnóstico SEO
              </a>
            </FadeInSection>
            <div aria-hidden="true" className="mx-auto w-full max-w-md">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-sm sm:p-7">
                <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-slate-700">
                  <Search className="h-5 w-5 shrink-0 text-[#0f766e]" />
                  <span className="text-sm sm:text-base">Un servicio que ofreces en Rancagua</span>
                </div>
                <div className="mt-5 space-y-3">
                  <div className="h-3 w-4/5 rounded-full bg-white/80" />
                  <div className="h-2.5 w-full rounded-full bg-white/30" />
                  <div className="h-2.5 w-3/5 rounded-full bg-white/30" />
                </div>
                <div className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5 text-sm font-semibold text-[#99f6e4]">
                  <MousePointerClick className="h-5 w-5" /> Que te encuentren y puedan contactarte
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0fdfa] px-6 py-16 md:py-20">
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-extrabold md:text-4xl">¿Por qué tu empresa necesita SEO?</h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  En pocos segundos puedes entender por qué aparecer cuando tus clientes buscan tus servicios puede marcar una diferencia.
                </p>
              </div>
              <div className="mt-9 overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-xl">
                <video
                  className="block aspect-video h-auto w-full object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label="Video sobre la importancia del SEO para empresas de Rancagua"
                >
                  <source src="/assets/seo-rancagua-crecer-marketing.mp4" type="video/mp4" />
                  Tu navegador no puede reproducir este video.
                </video>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <FadeInSection>
              <p className="text-sm font-bold uppercase text-[#0f766e]">El desafío</p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Tus clientes ya están buscando. ¿Encuentran tu empresa?</h2>
            </FadeInSection>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Alguien busca un servicio en Google.",
                "Puede encontrar otras empresas primero.",
                "Tu negocio quizá no está siendo visible.",
                "Tener una web no garantiza aparecer bien posicionada.",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ccfbf1] text-[#0f766e]">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="leading-7 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <FadeInSection>
              <h2 className="text-3xl font-extrabold md:text-4xl">¿Qué es el SEO local?</h2>
            </FadeInSection>
            <p className="text-lg leading-8 text-gray-600">
              El SEO local ayuda a que Google entienda qué hace tu empresa, dónde trabaja y cuándo mostrarla a personas que buscan esos servicios. Se trata de hacer más clara y útil tu presencia en búsquedas de tu zona.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-center text-3xl font-extrabold md:text-4xl">Qué incluye el servicio de SEO</h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600">
                Un trabajo ordenado, adaptado al punto de partida y a las búsquedas de tu negocio.
              </p>
            </FadeInSection>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {serviceItems.map(({ icon: Icon, title, description }) => (
                <article key={title} className="rounded-xl border border-gray-200 bg-white p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ccfbf1] text-[#0f766e]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-bold text-[#0f172a]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f172a] px-6 py-16 text-white md:py-20">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-center text-3xl font-extrabold md:text-4xl">De una búsqueda a una oportunidad de contacto</h2>
            </FadeInSection>
            <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {journey.map((step, index) => (
                <li key={step} className="flex items-center gap-3 rounded-xl border border-white/15 p-4 lg:flex-col lg:items-start">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#99f6e4] font-bold text-[#0f172a]">{index + 1}</span>
                  <span className="font-semibold text-slate-100">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-center text-3xl font-extrabold md:text-4xl">¿Para qué negocios sirve?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
                Para empresas y pymes que ofrecen servicios y quieren conectar con búsquedas relevantes de su zona.
              </p>
            </FadeInSection>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {audiences.map((item) => (
                <li key={item} className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-5 font-semibold text-[#0f172a]">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#f0fdfa] px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1fr_auto]">
            <FadeInSection>
              <p className="text-sm font-bold uppercase text-[#0f766e]">Una base que trabaja en conjunto</p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">SEO y desarrollo web se complementan</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-700">
                Una buena web debe ser clara para las personas y también comprensible para Google. El desarrollo construye esa base; el SEO ayuda a mejorar cómo se presenta en las búsquedas.
              </p>
            </FadeInSection>
            <Link to="/desarrollo-web-rancagua" className="inline-flex items-center gap-2 font-semibold text-[#0f766e] underline underline-offset-4">
              Ver servicio de desarrollo web <Code2 className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-center text-3xl font-extrabold md:text-4xl">Un proceso claro, paso a paso</h2>
            </FadeInSection>
            <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {workSteps.map((step, index) => (
                <li key={step} className="border-l-4 border-[#0f766e] bg-gray-50 px-5 py-4">
                  <p className="text-sm font-bold text-[#0f766e]">0{index + 1}</p>
                  <h3 className="mt-1 text-lg font-bold">{step}</h3>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <FadeInSection>
              <h2 className="text-3xl font-extrabold md:text-4xl">Qué se puede medir</h2>
              <p className="mt-4 leading-7 text-gray-600">Reviso indicadores para entender la evolución y decidir qué conviene mejorar. Los resultados dependen de cada sitio y su contexto.</p>
            </FadeInSection>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {measures.map((item) => (
                <li key={item} className="rounded-lg border border-gray-200 bg-white px-4 py-4 text-center font-semibold text-[#0f172a]">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-center text-3xl font-extrabold md:text-4xl">SEO local con base técnica y comunicación clara</h2>
            </FadeInSection>
            <ul className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {[
                "Desarrollo web y SEO trabajados en conjunto.",
                "Explicaciones claras, sin tecnicismos innecesarios.",
                "Soluciones adaptadas a las necesidades reales de cada empresa.",
                "Foco local en Rancagua y la Región de O’Higgins.",
              ].map((item) => (
                <li key={item} className="flex gap-3 border-b border-gray-200 pb-4 text-lg text-gray-700">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[#0f766e]" aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <FadeInSection>
              <h2 className="text-center text-3xl font-extrabold md:text-4xl">Preguntas frecuentes sobre SEO</h2>
            </FadeInSection>
            <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
              {questions.map(({ question, answer }) => (
                <details key={question} className="py-5">
                  <summary className="cursor-pointer font-bold text-[#0f172a] marker:text-[#0f766e]">{question}</summary>
                  <p className="mt-3 max-w-3xl leading-7 text-gray-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f172a] px-6 py-16 text-center text-white md:py-20">
          <FadeInSection>
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold md:text-4xl">Haz que tu empresa tenga más posibilidades de ser encontrada</h2>
            <a href="#contacto" className="mt-7 inline-flex rounded-xl bg-white px-7 py-3 font-semibold text-[#0f172a] transition hover:bg-[#99f6e4]">
              Solicitar diagnóstico SEO
            </a>
          </FadeInSection>
        </section>

        <Contacto />
      </main>

      <Footer />
    </>
  )
}

export default SeoRancagua