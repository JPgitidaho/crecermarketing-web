import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react"
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

function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((entry) => entry.slug === slug)
  const relatedPosts = posts.filter((entry) => entry.slug !== slug).slice(0, 2)

  if (!post) {
    return (
      <>
        <SEOTags
          title="Articulo no encontrado | Crecer Marketing"
          description="El articulo que buscas no esta disponible."
          canonical={`${SITE_URL}/blog`}
        />
        <Navbar />
        <main className="min-h-screen bg-[linear-gradient(180deg,#e2e8f0_0%,#ffffff_45%)] px-6 pb-24 pt-40 text-slate-950">
          <section className="mx-auto max-w-3xl rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Blog</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight">Articulo no encontrado</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Revisa los contenidos publicados o vuelve al inicio para seguir navegando.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f766e]"
              >
                Volver al blog
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                Ir al inicio
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <SEOTags
        title={`${post.title} | Blog | Crecer Marketing`}
        description={post.description}
        canonical={`${SITE_URL}/blog/${post.slug}`}
        image={post.image}
        type="article"
      />
      <Navbar />

      <main className="overflow-hidden bg-[linear-gradient(180deg,#e0f2fe_0%,#f8fafc_24%,#ffffff_100%)] text-slate-950">
        <section className="relative isolate px-6 pb-28 pt-40 md:pb-32">
          <div className={`absolute inset-x-0 top-0 -z-10 h-[680px] bg-gradient-to-br ${post.accent}`} />
          <div className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_30%),linear-gradient(180deg,rgba(2,6,23,0.3),rgba(2,6,23,0.75))]" />

          <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.18fr_0.82fr]">
            <div className="text-white">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition hover:text-white"
              >
                <ArrowLeft size={16} />
                Volver al blog
              </Link>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/80">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-semibold uppercase tracking-[0.24em] backdrop-blur">
                  {post.category}
                </span>
                <span>{formatDate(post.date)}</span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 size={16} />
                  {post.readTime}
                </span>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight md:text-5xl xl:text-6xl">
                {post.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
                {post.description}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-white/10 shadow-[0_24px_80px_rgba(15,23,42,0.35)] backdrop-blur lg:mt-4">
              <img
                src={post.image}
                alt={post.title}
                className="h-full min-h-[320px] w-full object-cover object-[24%_18%] lg:object-[30%_20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <article className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:p-12">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            <aside className="space-y-6">
              <section className="rounded-[32px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  Idea central
                </p>
                <h2 className="mt-4 text-2xl font-black tracking-tight">
                  Un sitio claro y bien posicionado compite mejor.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  La mayoria de los negocios pierde oportunidades por tener una web lenta, confusa o invisible en Google. El trabajo digital empieza por corregir esa base.
                </p>
              </section>

              <section className="rounded-[32px] border border-[#99f6e4] bg-[#f0fdfa] p-8 shadow-[0_20px_60px_rgba(20,184,166,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f766e]">
                  Siguiente paso
                </p>
                <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950">
                  Llevemos esto a tu sitio.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  Si tu web no transmite confianza o no esta captando contactos, conviene revisar estructura, mensaje y SEO local.
                </p>
                <Link
                  to="/#contacto"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0f766e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#115e59]"
                >
                  Solicitar diagnostico
                  <ArrowRight size={16} />
                </Link>
              </section>

              {relatedPosts.length > 0 ? (
                <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                    Sigue leyendo
                  </p>
                  <div className="mt-5 space-y-5">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        to={`/blog/${relatedPost.slug}`}
                        className="block rounded-3xl border border-slate-200 p-4 transition hover:border-slate-300 hover:bg-slate-50"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0f766e]">
                          {relatedPost.category}
                        </p>
                        <h3 className="mt-2 text-lg font-bold text-slate-950">
                          {relatedPost.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {relatedPost.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : null}
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default BlogPost
