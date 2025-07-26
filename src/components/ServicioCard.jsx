import { motion } from "framer-motion"

function ServicioCard({ titulo, descripcion }) {
    return (
        <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="bg-gradient-to-br from-[#4cc9f0] via-white to-[#f1f1f1] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
        >


            <h3 className="text-2xl font-bold mb-3 text-[#3a0ca3]">{titulo}</h3>
            <p className="text-gray-700">{descripcion}</p>
        </motion.div>
    )
}

export default ServicioCard
