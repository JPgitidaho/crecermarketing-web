import { Link } from "react-router-dom"
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  CircleHelp,
  ClipboardCheck,
  Code2,
  Compass,
  Gauge,
  LayoutDashboard,
  MapPin,
  MousePointerClick,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react"
import SEOTags from "../components/SEOTags"
import Navbar from "../components/Navbar"
import FadeInSection from "../components/FadeInSection"
import Contacto from "../components/Contacto"
import Footer from "../components/Footer"
import { SITE_URL } from "../config/site"

const auditAreas = [
  {
    icon: Gauge,
    title: "Rendimiento",
    description: "Reviso velocidad, carga y elementos que pueden ralentizar tu sitio.",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Detecto aspectos que afectan la comprensión y visibilidad de tu web en Google.",
  },
  {
    icon: Smartphone,
    title: "Experiencia móvil",
    description: "Analizo cómo se ve y funciona el sitio en celulares y pantallas pequeñas.",
  },
  {
    icon: LayoutDashboard,
    title: "Estructura",
    description: "Reviso organización, navegación y claridad del contenido.",
  },
  {
    icon: MousePointerClick,
    title: "Conversión",
    description: "Evalúo si los llamados a la acción y formularios facilitan el contacto.",
  },
  {
    icon: ShieldCheck,
    title: "Errores técnicos",
    description: "Busco fallas básicas en enlaces, indexación, seguridad y configuración.",
  },
]

const auditFlow = [
  ["Tu sitio web", "Punto de partida"],
  ["Análisis", "Revisión estructurada"],
  ["Hallazgos", "Qué funciona y qué no"],
  ["Prioridades", "Qué conviene atender"],
  ["Plan de mejora", "Próximos pasos claros"],
]

const deliverables = [
  ["Hallazgos", "Problemas detectados y aspectos que ya están funcionando."],
  ["Prioridades", "Una guía para distinguir lo urgente de lo que puede esperar."],
  ["Recomendaciones", "Acciones concretas y explicadas en lenguaje claro."],
  ["Próximos pasos", "Opciones para avanzar según las necesidades de tu negocio."],
]

const situations = [
  "Ya tienes una página web, pero no sabes si está funcionando bien.",
  "Tu sitio se ve antiguo, desordenado o confuso.",
  "Recibes pocas consultas y no sabes qué puede estar influyendo.",
  "No sabes si el problema está en el diseño, el SEO o la estructura.",
  "Quieres mejorar antes de invertir en un rediseño o posicionamiento.",
]

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description: "Para crear o renovar una página.",
    href: "/desarrollo-web-rancagua",
  },
  {
    icon: Search,
    title: "SEO Local",
    description: "Para mejorar la posibilidad de ser encontrado en Google.",
    href: "/seo-rancagua",
  },
  {
    icon: ClipboardCheck,
    title: "Auditoría Web",
    description: "Para detectar qué está fallando y qué conviene mejorar.",
    href: null,
  },
  {
    icon: Compass,
    title: "Soluciones Digitales",
    description: "Para resolver necesidades digitales más amplias del negocio.",
    href: "/soluciones",
  },
]

const processSteps = [
  ["Reviso", "Conozco tu sitio y el contexto de tu negocio."],
  ["Analizo", "Evalúo sus aspectos clave con una mirada técnica y práctica."],
  ["Priorizo", "Ordeno los hallazgos según su relevancia."],
  ["Explico", "Presento lo observado en un lenguaje claro."],
  ["Defino", "Converso sobre las alternativas y próximos pasos."],
]

const reasons = [
  "Enfoque técnico con experiencia en desarrollo web y SEO.",
  "Análisis antes de recomendar cambios o servicios.",
  "Explicaciones claras, sin tecnicismos innecesarios.",
  "Recomendaciones adaptadas a la realidad de cada empresa o pyme.",
]

const questions = [
  {
    question: "¿Qué diferencia hay entre una auditoría web y un rediseño?",
    answer:
      "La auditoría analiza el sitio actual y entrega hallazgos y prioridades. Un rediseño es un proyecto de creación o renovación; no siempre es necesario para resolver lo detectado.",
  },
  {
    question: "¿La auditoría incluye SEO?",
    answer:
      "Sí, reviso aspectos de SEO relacionados con la estructura y comprensión del sitio. La auditoría no garantiza posiciones específicas ni reemplaza un servicio continuo de posicionamiento.",
  },
  {
    question: "¿Necesito tener una página ya creada?",
    answer:
      "Sí. Este servicio analiza un sitio web que ya está publicado o disponible para revisión. Si todavía no tienes web, puedo orientarte sobre desarrollo web.",
  },
  {
    question: "¿La auditoría me sirve si mi web ya está publicada?",
    answer:
      "Sí. Está pensada precisamente para revisar una web existente y entender qué funciona, qué puede mejorar y qué conviene priorizar.",
  },
  {
    question: "¿Después de la auditoría puedes implementar las mejoras?",
    answer:
      "Puedo conversar sobre las mejoras que correspondan y su alcance. La auditoría por sí sola no implica contratar una implementación.",
  },
  {
    question: "¿Trabajas solo con empresas de Rancagua?",
    answer:
      "El servicio tiene foco local en Rancagua y la Región de O’Higgins, y también puedo trabajar a distancia con empresas de otras zonas de Chile.",
  },
]

function AuditoriaWebRancagua() {
  return (
    <>
      <SEOTags
        title="Auditoría Web en Rancagua para Empresas | Crecer Web y Marketing"
        description="Auditoría web en Rancagua para empresas y pymes. Detecta problemas de rendimiento, experiencia, SEO y estructura para definir qué mejorar primero."
        canonical={`${SITE_URL}/auditoria-web-rancagua`}
      />
      <Navbar />

      <main className="overflow-hidden text-[#1a1a1f]">
        <section className="relative overflow-hidden bg-[#0f172a] px-6 pb-12 pt-28 text-white md:pb-16 md:pt-32">
          <div aria-hidden="true" className="absolute -right-32 -top-24 h-96 w-96 rounded-full bg-[#0f766e]/30 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative mx-auto max-w-6xl">
            <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_0.85fr] lg:gap-10">
              <FadeInSection>
                <p className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[#99f6e4]">
                  <MapPin className="h-4 w-4" aria-hidden="true" /> Análisis web · Rancagua y O’Higgins
                </p>
                <h1 className="max-w-2xl text-4xl font-extrabold leading-tight md:text-5xl">
                  Auditoría web en Rancagua para detectar qué está frenando tu sitio
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
                  Analizo rendimiento, experiencia, SEO y estructura para ayudarte a decidir qué mejorar primero.
                </p>
                <a
                  href="#contacto"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-semibold text-[#0f172a] transition hover:bg-[#99f6e4]"
                >
                  Solicitar auditoría <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <p className="mt-4 text-sm text-slate-400">Primero analizo. Después recomiendo.</p>
              </FadeInSection>

              <div className="relative mx-auto w-full max-w-sm pb-0 sm:max-w-md lg:max-w-[480px] lg:pb-8">
                <div className="relative aspect-[4/3] max-h-[300px] w-full overflow-hidden rounded-[28px] border border-white/15 bg-slate-800 shadow-2xl shadow-black/30 sm:max-h-[340px] lg:aspect-auto lg:h-[480px] lg:max-h-none">
                  <img
                    src="/assets/juanita.jpg"
                    alt="Representante de Crecer Web y Marketing en su espacio de trabajo"
                    width="640"
                    height="640"
                    fetchPriority="high"
                    className="h-full w-full object-cover object-[center_20%]"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/35 via-transparent to-transparent" />
                </div>

                <div aria-label="Panel conceptual de auditoría web" className="relative mt-4 w-full rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 shadow-xl sm:p-5 lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:w-72">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ccfbf1] text-[#0f766e]">
                      <LayoutDashboard className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-bold">Panel de diagnóstico</p>
                      <p className="text-xs text-slate-500">Vista ilustrativa</p>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {[
                      ["Rendimiento", "Bien", "bg-emerald-50 text-emerald-700", Gauge],
                      ["SEO", "Mejorable", "bg-cyan-50 text-cyan-800", Search],
                      ["Experiencia móvil", "Revisar", "bg-amber-50 text-amber-700", Smartphone],
                      ["Conversión", "Revisar", "bg-amber-50 text-amber-700", MousePointerClick],
                    ].map(([title, status, statusStyle, Icon]) => (
                      <div key={title} className="min-w-0 rounded-xl border border-slate-100 bg-slate-50 p-2.5">
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <Icon className="h-3.5 w-3.5 shrink-0 text-[#0f766e]" aria-hidden="true" />
                          <span className="truncate text-[11px] font-semibold">{title}</span>
                        </div>
                        <span className={`mt-2 inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold ${statusStyle}`}>{status}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-center text-[11px] leading-4 text-slate-500">
                    Estados ilustrativos, no corresponden a resultados reales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-6 rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm md:grid-cols-[0.7fr_1.3fr] md:items-center md:p-10">
            <FadeInSection>
              <p className="text-sm font-bold uppercase tracking-wide text-[#0f766e]">Analizar antes de invertir</p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">¿Qué es una auditoría web?</h2>
            </FadeInSection>
            <p className="text-lg leading-8 text-gray-600">
              Es una revisión estructurada de tu sitio para detectar problemas y oportunidades de mejora. Así puedes entender qué está funcionando, qué no y qué conviene atender primero, antes de tomar decisiones o invertir a ciegas.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-extrabold md:text-4xl">Qué reviso en tu sitio web</h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Una mirada completa a los elementos que influyen en la experiencia, la visibilidad y el contacto.
                </p>
              </div>
            </FadeInSection>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {auditAreas.map(({ icon: Icon, title, description }) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ccfbf1] text-[#0f766e]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-[#0f172a]">{title}</h3>
                  <p className="mt-2 leading-7 text-gray-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-wide text-[#0f766e]">Del análisis a la acción</p>
                <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Analizo antes de recomendar</h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Cada paso conecta lo que observo con una decisión útil para tu empresa.
                </p>
              </div>
            </FadeInSection>
            <ol className="mt-10 grid gap-3 lg:grid-cols-5">
              {auditFlow.map(([title, description], index) => (
                <li key={title} className="relative flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 lg:flex-col">
                  {index < auditFlow.length - 1 && (
                    <ArrowDown className="absolute -bottom-4 left-1/2 z-10 h-5 w-5 -translate-x-1/2 text-[#0f766e] lg:bottom-auto lg:-right-4 lg:left-auto lg:top-1/2 lg:rotate-[-90deg]" aria-hidden="true" />
                  )}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0f766e] text-sm font-bold text-white">{index + 1}</span>
                  <div>
                    <h3 className="font-bold text-[#0f172a]">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#f0fdfa] px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <FadeInSection>
                <p className="text-sm font-bold uppercase tracking-wide text-[#0f766e]">Un resultado que puedes usar</p>
                <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Qué recibes después de la auditoría</h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Una revisión debe ayudarte a decidir, no quedarse en una lista de observaciones.
                </p>
              </FadeInSection>
              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {deliverables.map(([title, description]) => (
                  <li key={title} className="flex gap-3 rounded-xl border border-teal-100 bg-white p-4">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-[#0f766e]" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-[#0f172a]">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg shadow-teal-950/5 sm:p-8">
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-[#0f766e]">
                    <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bold text-[#0f172a]">Resumen de auditoría</p>
                    <p className="text-xs text-slate-500">Ejemplo ilustrativo</p>
                  </div>
                </div>
                <BarChart3 className="h-5 w-5 text-[#0f766e]" aria-hidden="true" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  ["5", "aspectos correctos", "bg-emerald-50 text-emerald-700"],
                  ["4", "oportunidades", "bg-cyan-50 text-cyan-800"],
                  ["2", "acciones prioritarias", "bg-amber-50 text-amber-800"],
                ].map(([value, label, style]) => (
                  <div key={label} className={`min-w-0 rounded-2xl p-3 text-center sm:p-4 ${style}`}>
                    <p className="text-2xl font-extrabold sm:text-3xl">{value}</p>
                    <p className="mt-1 text-xs font-semibold leading-4 sm:text-sm">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Siguiente paso</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">Revisar las prioridades y definir qué mejoras tienen más sentido para el negocio.</p>
              </div>
              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                Cifras de muestra, no son resultados de un cliente ni una promesa de resultados.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-8 rounded-[28px] bg-[#0f172a] p-7 text-white md:grid-cols-[auto_1fr] md:items-center md:p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#99f6e4]">
              <Sparkles className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-2xl font-extrabold md:text-3xl">No todo necesita rehacerse</h2>
              <p className="mt-3 text-lg leading-8 text-slate-300">
                A veces basta con corregir puntos específicos; otras, conviene replantear la estructura. Analizo primero para recomendar una solución adecuada, sin asumir que necesitas una web nueva.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-center text-3xl font-extrabold md:text-4xl">Cuándo te conviene una auditoría web</h2>
            </FadeInSection>
            <ul className="mx-auto mt-9 grid max-w-5xl gap-3 sm:grid-cols-2">
              {situations.map((situation) => (
                <li key={situation} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 text-gray-700">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[#0f766e]" aria-hidden="true" />
                  <span className="leading-7">{situation}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-extrabold md:text-4xl">Elige el servicio según lo que necesitas</h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">La auditoría ayuda a entender el punto de partida; cada servicio resuelve una necesidad distinta.</p>
              </div>
            </FadeInSection>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, description, href }) => (
                <article key={title} className={`rounded-2xl border p-5 ${href ? "border-slate-200 bg-white" : "border-teal-200 bg-[#f0fdfa]"}`}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ccfbf1] text-[#0f766e]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-bold text-[#0f172a]">{title}</h3>
                  <p className="mt-2 min-h-14 text-sm leading-6 text-gray-600">{description}</p>
                  {href ? (
                    <Link to={href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0f766e] hover:underline">
                      Conocer servicio <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  ) : (
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0f766e]">
                      Estás aquí <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f172a] px-6 py-16 text-white md:py-20">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-bold uppercase tracking-wide text-[#99f6e4]">Un proceso claro</p>
                <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Cómo es el proceso</h2>
              </div>
            </FadeInSection>
            <ol className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map(([title, description], index) => (
                <li key={title} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#99f6e4] font-bold text-[#0f172a]">{index + 1}</span>
                  <h3 className="mt-4 font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <FadeInSection>
              <p className="text-sm font-bold uppercase tracking-wide text-[#0f766e]">Crecer Web y Marketing</p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Análisis técnico, explicado con claridad</h2>
            </FadeInSection>
            <ul className="grid gap-3 sm:grid-cols-2">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 leading-7 text-gray-700">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[#0f766e]" aria-hidden="true" />
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <FadeInSection>
              <div className="text-center">
                <CircleHelp className="mx-auto h-8 w-8 text-[#0f766e]" aria-hidden="true" />
                <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Preguntas frecuentes</h2>
              </div>
            </FadeInSection>
            <div className="mt-8 space-y-3">
              {questions.map(({ question, answer }) => (
                <details key={question} className="group rounded-xl border border-slate-200 bg-white p-5 open:border-teal-200">
                  <summary className="cursor-pointer list-none font-bold text-[#0f172a] marker:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {question}
                      <ArrowDown className="mt-0.5 h-5 w-5 shrink-0 text-[#0f766e] transition group-open:rotate-180" aria-hidden="true" />
                    </span>
                  </summary>
                  <p className="mt-4 pr-8 leading-7 text-gray-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f172a] px-6 py-16 text-center text-white md:py-20">
          <FadeInSection>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-extrabold md:text-4xl">Descubre qué conviene mejorar antes de invertir</h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Cuéntame sobre tu sitio y las prioridades de tu empresa.
              </p>
              <a href="#contacto" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-semibold text-[#0f172a] transition hover:bg-[#99f6e4]">
                Solicitar auditoría <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </FadeInSection>
        </section>

        <Contacto />
      </main>

      <Footer />
    </>
  )
}

export default AuditoriaWebRancagua
