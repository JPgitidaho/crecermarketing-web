import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { ChevronDown, Menu, X } from "lucide-react"

const navItems = [
  { label: "Proyectos", to: "/#proyectos" },
  { label: "Blog", to: "/blog" },
  { label: "Contacto", to: "/#contacto" },
]

const serviceItems = [
  { label: "Desarrollo web", to: "/desarrollo-web" },
  { label: "SEO local", to: "/seo-rancagua" },
  { label: "Auditoría web", to: "/auditoria-web" },
  { label: "Soluciones digitales", to: "/soluciones" },
]

function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const servicesDropdownRef = useRef(null)
  const servicesButtonRef = useRef(null)
  const mobileServicesButtonRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    const closeOnOutsidePointer = (event) => {
      if (!servicesDropdownRef.current?.contains(event.target)) {
        setServicesOpen(false)
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer)
    return () => document.removeEventListener("pointerdown", closeOnOutsidePointer)
  }, [])

  const isHome = pathname === "/"
  const isSolid = !isHome || scrolled || mobileOpen
  const navClasses = isSolid
    ? "bg-white/92 border-gray-200 shadow-[0_18px_60px_rgba(15,23,42,0.12)]"
    : "bg-[#0f172a]/55 border-white/10 shadow-[0_18px_50px_rgba(15,23,42,0.28)]"
  const textClasses = isSolid ? "text-slate-900" : "text-white"
  const mutedTextClasses = isSolid
    ? "text-slate-700 hover:text-[#0f766e]"
    : "text-white/90 hover:text-[#67e8f9]"
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
              src="/assets/logo-crecer-160.webp"
              alt="Logo de Crecer Marketing"
              className="h-9 w-9 object-contain"
              width="160"
              height="160"
            />
          </span>
          Crecer Marketing
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <Link
            to="/"
            className={`text-sm font-semibold transition ${pathname === "/" ? "text-[#0f766e]" : mutedTextClasses}`}
          >
            Inicio
          </Link>
          <div className="relative" ref={servicesDropdownRef}>
            <button
              ref={servicesButtonRef}
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="desktop-services-menu"
              onClick={() => setServicesOpen((open) => !open)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setServicesOpen(false)
                }
              }}
              className={`inline-flex items-center gap-1 text-sm font-semibold transition ${mutedTextClasses}`}
            >
              Servicios
              <ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen ? (
              <div
                id="desktop-services-menu"
                className="absolute left-0 top-full z-50 mt-3 w-60 rounded-xl border border-gray-200 bg-white p-2 shadow-xl"
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setServicesOpen(false)
                    servicesButtonRef.current?.focus()
                  }
                }}
              >
                {serviceItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setServicesOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 hover:text-[#0f766e] focus:bg-slate-50 focus:text-[#0f766e] focus:outline-none"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          {navItems.map((item) => {
            const isActive =
              item.to === "/blog"
                ? pathname.startsWith("/blog")
                : false

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
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Inicio
          </Link>
          <div>
            <button
              ref={mobileServicesButtonRef}
              type="button"
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services-menu"
              onClick={() => setMobileServicesOpen((open) => !open)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setMobileServicesOpen(false)
                }
              }}
              className="flex w-full items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Servicios
              <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen ? (
              <div
                id="mobile-services-menu"
                className="mt-2 space-y-1 pl-4"
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setMobileServicesOpen(false)
                    mobileServicesButtonRef.current?.focus()
                  }
                }}
              >
                {serviceItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-[#0f766e] focus:bg-slate-100 focus:text-[#0f766e] focus:outline-none"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </motion.nav>
  )
}

export default Navbar
