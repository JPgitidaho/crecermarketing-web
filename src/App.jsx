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
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import Analytics from "./components/Analytics"
import Navbar from "./components/Navbar"
import About from "./components/About"
import WhatsAppButton from "./components/WhatsAppButton"
import ScrollToHash from "./components/ScrollToHash"
import { SITE_URL } from "./config/site"


function Home() {
  return (
    <>
      <SEOTags
        title="Crecer Marketing | Desarrollo Web y SEO en Rancagua"
        description="Desarrollo web, SEO y estrategias digitales que generan resultados. Sitios modernos, rápidos y optimizados desde Rancagua para todo Chile."
        canonical={`${SITE_URL}/`}
      />
      <Navbar />
      <Hero />
      <About />
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
      <ScrollToHash />
      <Toaster position="bottom-right" />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soluciones" element={<Soluciones />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App
