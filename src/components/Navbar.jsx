import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Servicios", to: "/#servicios" },
  { label: "Enfoque", to: "/#about" },
  { label: "Proyectos", to: "/#proyectos" },
  { label: "Blog", to: "/blog" },
  { label: "Contacto", to: "/#contacto" },
]

function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isHome = pathname === "/"
  const isSolid = !isHome || scrolled || mobileOpen
  const navClasses = isSolid
    ? "bg-white/92 border-gray-200 shadow-[0_18px_60px_rgba(15,23,42,0.12)]"
    : "bg-[#0f172a]/55 border-white/10 shadow-[0_18px_50px_rgba(15,23,42,0.28)]"
  const textClasses = isSolid ? "text-slate-900" : "text-white"
  const mutedTextClasses = isSolid
    ? "text-slate-700 hover:text-[#0f766e]"
    : "text-white/90 hover:text-[#67e8f9]"
  const buttonClasses = isSolid
    ? "bg-[#0f766e] text-white hover:bg-[#115e59]"
    : "bg-white text-[#0f172a] hover:bg-[#67e8f9]"

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55 }}
      className={`fixed top-4 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-[28px] border px-5 py-3 backdrop-blur-xl transition-all duration-300 ${navClasses}`}
    >
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/"
          className={`flex items-center gap-3 text-lg font-black tracking-[0.08em] uppercase transition ${textClasses}`}
        >
          <span className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border ${isSolid ? "border-slate-200 bg-slate-50" : "border-white/15 bg-white/10"}`}>
            <img
              src="/assets/logo_master.svg"
              alt="Logo de Crecer Marketing"
              className="h-8 w-8 object-contain"
            />
          </span>
          Crecer Marketing
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.to === "/blog"
                ? pathname.startsWith("/blog")
                : item.to === pathname

            return (
              <Link
                key={item.label}
                to={item.to}
                className={`text-sm font-semibold transition ${isActive ? "text-[#0f766e]" : mutedTextClasses}`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/#contacto"
            className={`hidden rounded-2xl px-5 py-2 text-sm font-semibold transition md:inline-flex ${buttonClasses}`}
          >
            Solicitar diagnostico
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
            onClick={() => setMobileOpen((open) => !open)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition md:hidden ${isSolid ? "border-gray-200 text-slate-900" : "border-white/15 text-white"}`}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="mt-4 space-y-2 border-t border-gray-200 pt-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/#contacto"
            className="block rounded-2xl bg-[#0f766e] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#115e59]"
          >
            Solicitar diagnostico
          </Link>
        </div>
      ) : null}
    </motion.nav>
  )
}

export default Navbar
