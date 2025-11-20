import { motion } from "framer-motion"

function CTA() {
  return (
    <section className="py-20 px-6 bg-white text-[#3a0ca3] text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para mejorar tu presencia online?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Escríbeme y cuéntame tu situación. Te responderé en menos de 24 horas con una propuesta clara y efectiva.
        </p>
        <a
          href="#contacto"
          className="inline-block px-8 py-3 text-white font-semibold bg-[#3a0ca3] rounded-xl hover:bg-[#7209b7] transition"
        >
          Quiero una solución
        </a>
      </motion.div>
    </section>
  )
}

export default CTA
