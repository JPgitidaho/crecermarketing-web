const proyectos = [
  {
    imagen: "/assets/proyecto-ecommerce-rancagua.webp",
    titulo: "Ecommerce Minimal",
    resultado: "+300% en conversiones",
    descripcion: "Diseño limpio, enfocado en velocidad y UX clara.",
  },
  {
    imagen: "/assets/sitio-clinica-dental.webp",
    titulo: "Web Institucional",
    resultado: "Mejor reputación online",
    descripcion: "Rediseño moderno para destacar servicios y confianza.",
  },
  {
    imagen: "/assets/undraw_dashboard_p93p.webp",
    titulo: "Dashboard Interno",
    resultado: "+50% eficiencia operativa",
    descripcion: "Herramienta personalizada para gestión interna de datos.",
  },
]

function Proyectos() {
  return (
    <section className="py-20 bg-white text-gray-800 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#4361ee] via-[#7209b7] to-[#f72585]">
  Proyectos que transforman negocios
</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {proyectos.map((proyecto, i) => (
            <div
              key={i}
              className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-[#3a0ca3]/90 text-white opacity-0 group-hover:opacity-100 transition duration-300 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2">{proyecto.titulo}</h3>
                <p className="text-sm mb-1">{proyecto.descripcion}</p>
                <p className="text-xs text-[#4cc9f0]">{proyecto.resultado}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proyectos
