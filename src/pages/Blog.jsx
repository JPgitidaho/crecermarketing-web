import { Link } from "react-router-dom"
import { ArrowRight, Clock3, MapPin, Search, Sparkles } from "lucide-react"
import SEOTags from "../components/SEOTags"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { posts } from "../data/blog"
import { SITE_URL } from "../config/site"

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

const highlights = [
  {
    title: "Contenido con enfoque local",
    description: "Temas pensados para negocios que quieren vender mejor en Rancagua y O'Higgins.",
    icon: MapPin,
  },
  {
    title: "SEO aplicado",
    description: "Ideas concretas para mejorar visibilidad, estructura y captacion de contactos.",
    icon: Search,
  },
  {
    title: "Diseno que convierte",
    description: "Buenas practicas para que tu sitio no solo se vea bien, sino que explique y venda.",
    icon: Sparkles,
  },
]

function PostCard({ post, featured = false }) {
  return (
    <article
      className={`group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)] ${featured ? "lg:grid lg:grid-cols-[1.15fr_0.85fr]" : ""}`}
    >
      <div className={`relative overflow-hidden ${featured ? "min-h-[320px]" : "h-64"}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${post.accent} opacity-90`} />
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover mix-blend-overlay transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
        <div className="absolute left-6 top-6 flex items-center gap-3">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur">
            {post.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between p-7 md:p-8">
        <div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span>{formatDate(post.date)}</span>
            <span className="inline-flex items-center gap-2">
              <Clock3 size={16} />
              {post.readTime}
            </span>
          </div>

          <h2 className={`mt-4 font-black tracking-tight text-slate-950 ${featured ? "text-3xl md:text-4xl" : "text-2xl"}`}>
            {post.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">{post.description}</p>
        </div>

        <div className="mt-8">
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f766e]"
          >
            Leer articulo
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  )
}

function Blog() {
  const featuredPost = posts[0]
  const secondaryPosts = posts.slice(1)

  return (
    <>
      <SEOTags
        title="Blog | Crecer Marketing"
        description="Articulos sobre diseno web, SEO local y marketing digital para negocios que quieren destacar en Rancagua."
        canonical={`${SITE_URL}/blog`}
        image={featuredPost?.image}
      />
      <Navbar />

      <main className="overflow-hidden bg-[linear-gradient(180deg,#eff6ff_0%,#f8fafc_26%,#ffffff_100%)] text-slate-950">
        <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_58%,#134e4a_100%)] px-6 pb-28 pt-36">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(2,6,23,0.12)_0%,rgba(2,6,23,0.18)_60%,rgba(2,6,23,0.04)_100%)]" />
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_340px]">
            <div className="text-white">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] backdrop-blur">
                Blog de crecimiento digital
              </span>
              <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
                Ideas claras para que tu sitio web genere negocio de verdad.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Publicamos contenido pensado para empresas que necesitan verse mejor, posicionarse en Google y convertir visitas en contactos reales.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(255,255,255,0.16)] transition hover:bg-[#99f6e4]"
                >
                  Leer articulo destacado
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/#contacto"
                  className="inline-flex items-center rounded-full border border-[#5eead4]/40 bg-[#0f766e] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(15,118,110,0.32)] transition hover:bg-[#115e59]"
                >
                  Solicitar asesoria
                </Link>
              </div>
            </div>

            <div className="grid gap-4 self-end">
              {highlights.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded-[28px] border border-white/12 bg-slate-900/35 p-5 text-white shadow-[0_16px_50px_rgba(15,23,42,0.22)] backdrop-blur-md"
                >
                  <Icon size={18} className="text-[#99f6e4]" />
                  <h2 className="mt-4 text-lg font-bold">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-100/90">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-12 pt-12 md:pt-16">
          <div className="mx-auto max-w-6xl">
            <PostCard post={featuredPost} featured />
          </div>
        </section>

        <section className="px-6 pb-24 pt-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[320px_1fr]">
            <aside className="rounded-[32px] border border-[#99f6e4] bg-[#f0fdfa] p-8 shadow-[0_18px_50px_rgba(20,184,166,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f766e]">
                Que vas a encontrar
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
                Contenido breve, local y accionable.
              </h2>
              <p className="mt-4 leading-7 text-slate-700">
                El objetivo no es llenar el blog. Es publicar piezas utiles para tomar mejores decisiones sobre tu presencia digital.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "SEO local para captar clientes desde Google.",
                  "Diseno web orientado a transmitir confianza.",
                  "Ideas de contenido para negocios de servicios.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#99f6e4] bg-white px-4 py-3 text-sm font-medium text-slate-800"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </aside>

            <div className="grid gap-8 md:grid-cols-2">
              {secondaryPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Blog
