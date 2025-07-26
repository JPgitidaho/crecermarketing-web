import Frustraciones from "../components/Frustraciones"
import Beneficios from "../components/Beneficios"
import FormularioLanding from "../components/FormularioLanding"
import CTAFinal from "../components/CTAFinal"



function Soluciones() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-20">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          ¿Tu sitio web no funciona como debería?
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Diseño y desarrollo sitios web que no solo se ven bien, sino que atraen, posicionan y convierten. Si tu web no genera resultados, estás perdiendo dinero.
        </p>
        <a
          href="#contacto"
          className="inline-block bg-[#7209b7] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a0ca3] transition"
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
