const logos = [
  "/assets/CRECERMARKETINGLOGO.png",
"/assets/CRECERMARKETINGLOGO.png",
"/assets/CRECERMARKETINGLOGO.png",
"/assets/CRECERMARKETINGLOGO.png",

]

function ClientesLogos() {
  const allLogos = [...logos, ...logos, ...logos]

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto mb-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Marcas que confían</h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center gap-12 animate-slide w-max">
          {allLogos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Logo ${i}`}
              className="w-28 h-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientesLogos