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
    <footer className="bg-gradient-to-br from-[#3a0ca3] to-[#f72585] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

        <div className="flex flex-col items-start">
          <img
            src="/assets/CRECERMARKETINGLOGO.png"
            alt="Crecer Marketing"
            className="h-40 mb-4 w-auto"
          />

        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200">
              <MapPin size={18} className="text-white/70 group-hover:text-white" />
              <span>Rancagua, Chile</span>
            </li>
            <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200">
              <Mail size={18} className="text-white/70 group-hover:text-white" />
              <span>contacto@crecermarketing.cl</span>
            </li>
            <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200">
              <Phone size={18} className="text-white/70 group-hover:text-white" />
              <span>+56 9 3627 4715</span>
            </li>
          </ul>
          <div className="flex gap-6 text-white/80">
            {[
              { href: "https://wa.me/56936274715", icon: <MessageCircle /> },
              { href: "https://www.instagram.com/crecermarketing.ia/", icon: <Instagram /> },
              { href: "https://www.facebook.com/profile.php?id=61570476448066", icon: <Facebook /> },

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
      <div className="text-center mt-10 text-sm text-white/60">
        © {new Date().getFullYear()} Crecer Marketing — Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
