import Hero from "./components/Hero"
import Servicios from "./components/Servicios"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import ClientesTestimonios from "./components/ClientesTestimonios"
import Proyectos from "./components/Proyectos"
import Contacto from "./components/Contacto"
import { Toaster } from "react-hot-toast"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Soluciones from "./pages/Soluciones"

function Home() {
  return (
    <>
      <Toaster position="bottom-right" />
      <Hero />
      <Servicios />
      <Proyectos />
      <CTA />
      <ClientesTestimonios />
      <Contacto />
      <Footer />
      <a
        href="https://wa.me/56936274715"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 text-white p-4 rounded-full shadow-lg transition"
      >
        <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100">
            <circle cx="16" cy="16" r="15" fill="#25D366" />
            <path fill="#FFF" d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.22 6.354L4 29l7.646-2.22A11.963 11.963 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 21.8c-1.91 0-3.68-.52-5.2-1.42l-.37-.22-3.88 1.12 1.12-3.88-.22-.37A9.8 9.8 0 0 1 6.2 15c0-5.38 4.42-9.8 9.8-9.8s9.8 4.42 9.8 9.8-4.42 9.8-9.8 9.8zm5.46-7.34c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.77-1.67-2.07-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.6-.5-.52-.67-.52h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.17 4.55.72.3 1.28.47 1.72.6.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
          </svg>
        </div>
      </a>
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soluciones" element={<Soluciones />} />
      </Routes>
    </Router>
  )
}

export default App

