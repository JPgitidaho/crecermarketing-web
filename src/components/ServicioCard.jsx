import { motion } from "framer-motion"

function ServicioCard({ titulo, descripcion, icono }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#99f6e4] hover:shadow-xl"
    >
      <div className="mb-4">
        {icono}
      </div>

      <h3 className="text-2xl font-bold text-[#0f766e]">{titulo}</h3>
      <p className="text-gray-700 mt-2">{descripcion}</p>
    </motion.div>
  )
}

export default ServicioCard
