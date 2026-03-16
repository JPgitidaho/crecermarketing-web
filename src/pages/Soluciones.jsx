import SEOTags from "../components/SEOTags"
import Frustraciones from "../components/Frustraciones"
import Beneficios from "../components/Beneficios"
import FormularioLanding from "../components/FormularioLanding"
import CTAFinal from "../components/CTAFinal"
import { SITE_URL } from "../config/site"



function Soluciones() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_30%,#ecfeff_100%)] px-6 py-20 text-gray-800">
      <SEOTags
        title="Soluciones | Crecer Marketing"
        description="Diagnóstico y soluciones web para negocios que necesitan una web más clara, rápida y preparada para convertir visitas en oportunidades."
        canonical={`${SITE_URL}/soluciones`}
      />
      <section className="mx-auto max-w-3xl rounded-[32px] border border-slate-200 bg-white/85 px-8 py-12 text-center shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur">
        <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
          ¿Tu sitio web no funciona como debería?
        </h1>
        <p className="mb-12 text-lg text-gray-600">
          Diseño y desarrollo sitios web que no solo se ven bien, sino que atraen, posicionan y convierten. Si tu web no genera resultados, estás perdiendo dinero.
        </p>
        <a
          href="#contacto"
          className="inline-block rounded-lg bg-[#0f766e] px-8 py-3 font-semibold text-white transition hover:bg-[#115e59]"
        >
          Solicitar diagnóstico gratuito
        </a>
      </section>
      <Frustraciones />
      <Beneficios />
      <FormularioLanding />
      <CTAFinal />
    </main>
  )
}

export default Soluciones
