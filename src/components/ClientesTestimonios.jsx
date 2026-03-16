const resultados = [
  {
    titulo: "Más claridad",
    texto:
      "Una propuesta clara y bien estructurada ayuda a que tus visitas entiendan en segundos qué haces y por qué deberían contactarte.",
  },
  {
    titulo: "Más confianza",
    texto:
      "Un sitio rápido, actualizado y profesional transmite seriedad antes de la primera conversación comercial.",
  },
  {
    titulo: "Más oportunidades",
    texto:
      "Cuando la web guía bien al usuario, es más fácil convertir visitas en consultas, reuniones o ventas.",
  },
]

function ClientesTestimonios() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="mb-4 bg-gradient-to-r from-[#0f172a] via-[#0f766e] to-[#67e8f9] bg-clip-text text-3xl font-handwritten text-transparent md:text-4xl">
          Lo que debería lograr tu sitio web
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Un buen sitio no solo se ve bien. Tiene que explicar tu oferta, dar confianza y facilitar el contacto.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-12 grid gap-8 md:grid-cols-3 px-6">
        {resultados.map((item) => (
          <article
            key={item.titulo}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
          >
            <h3 className="mb-3 text-xl font-bold text-[#0f766e]">{item.titulo}</h3>
            <p className="text-gray-700">{item.texto}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ClientesTestimonios
