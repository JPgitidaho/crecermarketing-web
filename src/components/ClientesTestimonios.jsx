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
        <h2 className="text-3xl md:text-4xl mb-4 font-handwritten text-transparent bg-clip-text bg-gradient-to-r from-[#f72585] via-[#7209b7] to-[#4cc9f0]">
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
            className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm"
          >
            <h3 className="text-xl font-bold text-[#3a0ca3] mb-3">{item.titulo}</h3>
            <p className="text-gray-700">{item.texto}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ClientesTestimonios
