import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav 
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[80%] 
        px-6 py-3 flex items-center justify-between 
        rounded-2xl backdrop-blur-xl border transition-all duration-300
        ${scrolled ? "bg-[#1a1a1f]/80 border-white/10 shadow-xl" : "bg-white/5 border-white/5"}
      `}
    >
      <a href="#" className="text-white text-xl font-bold tracking-tight">
        Crecer Marketing Web
      </a>

      <div className="hidden md:flex gap-8 text-white font-medium">
        <a href="#servicios" className="hover:text-[#4cc9f0] transition">Servicios</a>
        <a href="#proyectos" className="hover:text-[#4cc9f0] transition">Proyectos</a>
        <a href="#contacto" className="hover:text-[#4cc9f0] transition">Contacto</a>
      </div>

      <a 
        href="#contacto"
        className="hidden md:block px-5 py-2 rounded-xl font-semibold 
        bg-white text-[#3a0ca3] hover:bg-[#4cc9f0] hover:text-black 
        transition-all duration-300 shadow-md"
      >
        Hablemos
      </a>
    </motion.nav>
  )
}

export default Navbar
