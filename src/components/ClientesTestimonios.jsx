const testimonios = [
  {
    nombre: "Ana ",
    texto: "Gracias al rediseño web comenzamos a recibir más clientes reales.",
  },
  {
    nombre: "Carlos de Startup ",
    texto: "Mejoramos el SEO y subimos al top 5 de Google en 2 meses.",
  },
  {
    nombre: "Marta de Tienda ",
    texto: "Nuestro e-commerce duplicó las conversiones tras su intervención.",
  },
]

function ClientesTestimonios() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto mb-6 text-center">
<h2 className="text-3xl md:text-4xl mb-10 font-handwritten text-transparent bg-clip-text bg-gradient-to-r from-[#f72585] via-[#7209b7] to-[#4cc9f0]">
  Lo que dicen nuestros clientes felices
</h2>

      </div>
      <div className="relative w-full overflow-hidden">
        <div className="animate-slide flex w-max gap-8 px-4">
          {testimonios.concat(testimonios).map((item, i) => (
            <div
              key={i}
              className="min-w-[300px] min-h-[180px] bg-gray-100 p-20 rounded-lg shadow-md"
            >
              <p className="text-gray-700 text-md mb-2">“{item.texto}”</p>
              <p className="text-right text-gray-500 text-xs">– {item.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientesTestimonios
