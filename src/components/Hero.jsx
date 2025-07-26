import { motion } from "framer-motion"


function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6 bg-gradient-to-br from-[#f72585] via-[#7209b7] to-[#3a0ca3] text-white">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl"
        >
          No hago solo páginas lindas. <br />
          <span className="inline-block mt-6 bg-white text-[#7209b7] px-3 py-1 rounded-lg">
            Hago que tu web funcione.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg md:text-xl max-w-xl mx-auto"
        >
          Tienda online, plataforma, sitio institucional o herramienta a medida. Si tienes una meta clara, puedo ayudarte
          a lograrla con tecnología, diseño y estrategia.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <a
            href="#servicios"
            className="relative inline-block px-8 py-3 font-semibold border-2 border-white group"
          >
            <span className="absolute inset-0 bg-white transition-all duration-300 ease-out transform scale-0 group-hover:scale-100 group-hover:opacity-100"></span>
            <span className="relative text-white group-hover:text-[#7209b7] z-10">Ver Servicios</span>
          </a>
        </motion.div>
      </div>
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
  <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="w-full h-24">
    <path
      d="M0,0 C480,120 960,0 1440,100 L1440,150 L0,150 Z"
      fill="#ffffff"
    />
  </svg>
</div>
    </section>
    
  )
}

export default Hero
