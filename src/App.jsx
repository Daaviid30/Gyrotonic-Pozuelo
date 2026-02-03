import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ui/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Team from './components/sections/Team';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import MethodPage from './pages/MethodPage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import TestimonialsPage from './pages/TestimonialsPage';
import SEOHead from './components/seo/SEOHead';
import SchemaMarkup from './components/seo/SchemaMarkup';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/method" element={<MethodPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

const Home = () => (
  <>
    {/* SEO Optimization for Homepage */}
    <SEOHead
      title="GYROTONIC Pozuelo - Centro Especializado Madrid | Entrenamiento Tridimensional"
      description="Centro GYROTONIC® líder en Pozuelo de Alarcón, Madrid. Método revolucionario de movimiento tridimensional sin impacto. Rehabilita dolores, fortalece tu cuerpo y mejora tu bienestar. Primera clase gratis."
      keywords="gyrotonic pozuelo, gyrotonic madrid, centro gyrotonic pozuelo de alarcón, ejercicio sin impacto madrid, rehabilitación espalda pozuelo, clases gyrotonic madrid, entrenamiento funcional, dolor crónico madrid, pulley tower pozuelo"
      canonical="https://gyrotonic-pozuelo.com"
    />
    <SchemaMarkup type="all" />

    <Hero />
    <About />
    <Services />
    <Team />
    <Testimonials />
    <Pricing />
    <Contact />
  </>
);

export default App;
