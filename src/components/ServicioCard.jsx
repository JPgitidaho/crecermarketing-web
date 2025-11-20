import { motion } from "framer-motion"

function ServicioCard({ titulo, descripcion, icono }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="p-8 rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="mb-4">
        {icono}
      </div>

      <h3 className="text-2xl font-bold text-[#3a0ca3]">{titulo}</h3>
      <p className="text-gray-700 mt-2">{descripcion}</p>
    </motion.div>
  )
}

export default ServicioCard
