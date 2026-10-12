import SEOTags from "./components/SEOTags"
import Hero from "./components/Hero"
import Servicios from "./components/Servicios"
import Proyectos from "./components/Proyectos"
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
import Proceso from "./components/Proceso"
import PreguntasFrecuentes from "./components/PreguntasFrecuentes"
import WhatsAppButton from "./components/WhatsAppButton"
import ScrollToHash from "./components/ScrollToHash"
import { SITE_URL } from "./config/site"
import DesarrolloWebRancagua from "./pages/DesarrolloWebRancagua"
import SeoRancagua from "./pages/SeoRancagua"
import AuditoriaWebRancagua from "./pages/AuditoriaWebRancagua"


function Home() {
  return (
    <>
      <SEOTags
        title="Crecer Marketing | Desarrollo Web y SEO en Rancagua"
        description="Desarrollo web profesional para empresas y pymes en Rancagua y O’Higgins, con SEO integrado desde la estructura. Atención en todo Chile."
        canonical={`${SITE_URL}/`}
      />
      <Navbar />
      <Hero />
      <Servicios />
      <About />
      <Proceso />
      <Proyectos />
      <PreguntasFrecuentes />
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
        <Route path="/desarrollo-web-rancagua" element={<DesarrolloWebRancagua />} />
        <Route path="/seo-rancagua" element={<SeoRancagua />} />
        <Route path="/auditoria-web-rancagua" element={<AuditoriaWebRancagua />} />
        <Route path="/soluciones" element={<Soluciones />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App
