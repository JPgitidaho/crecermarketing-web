import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react"

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#3a0ca3] to-[#f72585] text-white pt-16 pb-8 px-6 border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo + descripción */}
        <div className="flex flex-col items-start">
          <img
            src="/assets/CRECERMARKETINGLOGO.png"
            alt="Crecer Marketing"
            className="h-28 mb-3 w-auto"
          />
          <p className="text-base text-white/90 leading-relaxed">
            Desarrollamos sitios estratégicos que convierten. Tecnología, diseño y resultados reales desde Rancagua.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Navegación</h3>
          <ul className="space-y-3 text-base text-white/90">
            {[
              { label: "Inicio", href: "/" },
              { label: "Servicios", href: "#servicios" },
              { label: "Soluciones", href: "/soluciones" },
              { label: "Contacto", href: "#contacto" },
            ].map(({ label, href }, idx) => (
              <li key={idx}>
                <a
                  href={href}
                  className="hover:text-white hover:underline transition-all duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contacto</h3>
          <ul className="space-y-3 text-base text-white/90">
            <li className="flex items-center gap-3 group hover:text-white transition-all duration-200">
              <MapPin size={18} className="text-white/70 group-hover:text-white" />
              <span>Rancagua, Chile</span>
            </li>
            <li className="flex items-center gap-3 group hover:text-white transition-all duration-200">
              <Mail size={18} className="text-white/70 group-hover:text-white" />
              <span>contacto@crecermarketing.cl</span>
            </li>
            <li className="flex items-center gap-3 group hover:text-white transition-all duration-200">
              <Phone size={18} className="text-white/70 group-hover:text-white" />
              <span>+56 9 3627 4715</span>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Redes sociales</h3>
          <div className="flex gap-6 text-white/80 mt-2">
            {[
              { href: "https://wa.me/56936274715", icon: <MessageCircle /> },
              { href: "https://www.instagram.com/crecermarketing.ia/", icon: <Instagram /> },
              { href: "https://www.facebook.com/profile.php?id=61570476448066", icon: <Facebook /> },
              { href: "https://linkedin.com/company/crecermarketing", icon: <Linkedin /> },
            ].map(({ href, icon }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-300 hover:scale-125 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Créditos */}
      <div className="text-center mt-12 text-sm text-white/70 font-light">
        © {new Date().getFullYear()} Crecer Marketing — Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
