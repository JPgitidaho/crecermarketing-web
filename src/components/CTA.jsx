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
          ¿Tu negocio necesita una web más clara y profesional?
        </h2>

        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Cuéntame tu situación y revisamos juntos cómo mejorar tu presencia digital 
          con un sitio web estratégico que comunique mejor tu negocio y genere confianza.
        </p>

        <a
          href="#contacto"
          className="inline-block px-8 py-3 text-white font-semibold bg-[#3a0ca3] rounded-xl hover:bg-[#7209b7] transition"
        >
          Solicitar diagnóstico
        </a>
      </motion.div>
    </section>
  )
}

export default CTA