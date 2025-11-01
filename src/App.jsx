import SEOTags from "./components/SEOTags"
import Hero from "./components/Hero"
import Servicios from "./components/Servicios"
import Proyectos from "./components/Proyectos"
import CTA from "./components/CTA"
import ClientesTestimonios from "./components/ClientesTestimonios"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"
import { Toaster } from "react-hot-toast"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Soluciones from "./pages/Soluciones"
import Analytics from "./components/Analytics"


function Home() {
  return (
    <>
      <SEOTags
        title="Crecer Marketing | Desarrollo Web y SEO en Rancagua"
        description="Desarrollo web, SEO y estrategias digitales que generan resultados. Sitios modernos, rápidos y optimizados desde Rancagua para todo Chile."
        canonical="https://crecermarketingweb.vercel.app/"
      />
      <Toaster position="bottom-right" />
      <Hero />
      <Servicios />
      <Proyectos />
      <CTA />
      <ClientesTestimonios />
      <Contacto />
      <Footer />
    </>
  )
}


function App() {
  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soluciones" element={<Soluciones />} />
      </Routes>
    </Router>
  )
}

export default App
