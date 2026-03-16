import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#134e4a] px-6 pb-32 pt-32">
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative max-w-4xl mx-auto text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Sitios Web Profesionales
          <span className="mt-2 block text-[#67e8f9]">
            para negocios que necesitan crecer y verse serios.
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Desarrollo sitios web claros, rápidos y estratégicos que ayudan a tu negocio 
          a transmitir confianza, explicar mejor lo que haces y convertir visitantes en clientes.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#contacto"
            className="rounded-xl bg-white px-8 py-3 font-semibold text-[#0f172a] shadow-lg transition-all duration-300 hover:bg-[#99f6e4] hover:text-[#0f172a]"
          >
            Solicitar diagnóstico
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
