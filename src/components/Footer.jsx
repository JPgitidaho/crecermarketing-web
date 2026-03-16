import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  ArrowRight,
} from "lucide-react"
import { Link } from "react-router-dom"
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SOCIAL_LINKS,
  WHATSAPP_URL,
} from "../config/site"

const navigationItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/#contacto" },
]

const socialItems = [
  { href: WHATSAPP_URL, label: "WhatsApp", icon: MessageCircle },
  { href: SOCIAL_LINKS.instagram, label: "Instagram", icon: Instagram },
  { href: SOCIAL_LINKS.facebook, label: "Facebook", icon: Facebook },
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", icon: Linkedin },
]

function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/10 bg-[#020617] px-6 pb-8 pt-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(20,184,166,0.18),transparent_24%),linear-gradient(180deg,rgba(15,23,42,0)_0%,rgba(15,23,42,0.45)_100%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-8 rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <div>
            <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Crecer Marketing
            </span>
            <h2 className="mt-5 max-w-2xl text-3xl font-black tracking-tight text-white md:text-4xl">
              Desarrollo web y SEO con una presencia digital que se vea seria y convierta.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Sitios claros, estrategicos y mejor preparados para competir en Google, generar confianza y transformar visitas en oportunidades reales.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {navigationItems.map(({ label, href }) => (
                <Link
                  key={label}
                  to={href}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[28px] border border-white/10 bg-slate-950/45 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                Contacto directo
              </p>
              <div className="mt-5 space-y-4 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-cyan-300" />
                  <span>Rancagua, Chile</span>
                </div>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-start gap-3 transition hover:text-white"
                >
                  <Mail size={18} className="mt-0.5 text-cyan-300" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
                  className="flex items-start gap-3 transition hover:text-white"
                >
                  <Phone size={18} className="mt-0.5 text-cyan-300" />
                  <span>{CONTACT_PHONE}</span>
                </a>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between rounded-[28px] border border-[#2dd4bf]/25 bg-[#0f766e] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#115e59]"
            >
              <span>Escribir por WhatsApp</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            {socialItems.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Crecer Marketing. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
