import { ArrowRight } from "lucide-react"

function CTAFinal() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#3a0ca3] to-[#f72585] text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Tu web puede hacer mucho más. ¿Hablamos?
        </h2>
        <p className="mb-8 text-lg text-white/90">
          Déjame mostrarte lo que una web bien hecha puede lograr para tu negocio.
        </p>
        <a
          href="#formulario"
          className="inline-flex items-center gap-2 bg-white text-[#7209b7] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Solicitar diagnóstico gratuito
          <ArrowRight size={20} />
        </a>
      </div>
      <section className="mt-20 text-center">
  <div className="max-w-xl mx-auto bg-gradient-to-br from-[#f72585] to-[#4361ee] text-white rounded-3xl p-10 shadow-xl hover:scale-105 transition">
    <h3 className="text-2xl font-bold mb-4">¿Quieres ver todo lo que puedo hacer?</h3>
    <p className="text-sm mb-6">Explora mi sitio completo, conoce mis proyectos, servicios, filosofía y cómo Crecer Marketing puede ayudarte a crecer en serio.</p>
    <a
      href="https://crecermarketing.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-white text-[#7209b7] font-semibold px-6 py-3 rounded-lg hover:bg-[#f1f1f1] transition"
    >
      Ir a Crecer Marketing →
    </a>
  </div>
</section>

    </section>
    
  )
}

export default CTAFinal
