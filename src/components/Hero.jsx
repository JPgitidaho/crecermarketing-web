import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pb-32 pt-32">
      <motion.img
        src="asset/hero-marketing.png"
        alt="digital marketing background"
        animate={{ scale: [1, 1.35, 1] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 h-full w-full object-cover object-center will-change-transform"
      />

      <div className="absolute inset-0 bg-black/55" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-xl md:p-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
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
            className="rounded-xl bg-white px-8 py-3 font-semibold text-[#0f172a] shadow-lg transition-all duration-300 hover:bg-[#99f6e4]"
          >
            Solicitar diagnóstico
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero