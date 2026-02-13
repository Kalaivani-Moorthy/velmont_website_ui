import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/donate" element={<div className="pt-24 min-h-screen"><h1 className="text-center text-4xl py-20">Donate Page - Coming Soon</h1></div>} />
          <Route path="/events" element={<div className="pt-24 min-h-screen"><h1 className="text-center text-4xl py-20">Events Page - Coming Soon</h1></div>} />
          <Route path="/photos" element={<div className="pt-24 min-h-screen"><h1 className="text-center text-4xl py-20">Photos Page - Coming Soon</h1></div>} />
          <Route path="/contact" element={<div className="pt-24 min-h-screen"><h1 className="text-center text-4xl py-20">Contact Page - Coming Soon</h1></div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
