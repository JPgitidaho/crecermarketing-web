import ServicioCard from "./ServicioCard"

const servicios = [
  {
    titulo: "Desarrollo Web",
    descripcion: "Sitios modernos, rápidos y adaptados a tu marca.",
  },
  {
    titulo: "E-commerce Estratégico",
    descripcion: "Tiendas online que convierten, enfocadas en usabilidad y ventas.",
  },
  {
    titulo: "SEO Técnico y de Contenido",
    descripcion: "Optimización completa para aparecer y destacar en Google.",
  },
]

function Servicios() {
  return (
    <section id="servicios" className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#f72585] via-[#7209b7] to-[#4361ee]">
  Servicios que te hacen crecer
</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {servicios.map((servicio, i) => (
            <ServicioCard
              key={i}
              titulo={servicio.titulo}
              descripcion={servicio.descripcion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicios
