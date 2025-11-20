import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-32 overflow-hidden bg-gradient-to-br from-[#0f0f12] via-[#1a1a1f] to-[#3a0ca3]">
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative max-w-4xl mx-auto text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Desarrollo Web Estratégico
          <span className="block text-[#4cc9f0] mt-2">
            para Empresas que Exigen Resultados.
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Diseño, tecnología y estrategia en un solo lugar. Creo plataformas, sistemas y sitios corporativos 
          que optimizan procesos, mejoran ventas y elevan tu presencia digital.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#servicios"
            className="px-8 py-3 font-semibold rounded-xl bg-white text-[#3a0ca3] hover:bg-[#4cc9f0] hover:text-black transition-all duration-300 shadow-lg"
          >
            Ver cómo puedo ayudarte
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
