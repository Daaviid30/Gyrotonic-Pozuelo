import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import ScrollToTop from './components/ui/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Team from './components/sections/Team';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import Contact from './components/sections/Contact';
import MethodPage from './pages/MethodPage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import TestimonialsPage from './pages/TestimonialsPage';
import PricingPage from './pages/PricingPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';
import SEOHead from './components/seo/SEOHead';
import SchemaMarkup from './components/seo/SchemaMarkup';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="app">
          <a className="skip-link" href="#main-content">Saltar al contenido</a>
          <Navbar />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/metodo" element={<MethodPage />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/equipo" element={<TeamPage />} />
              <Route path="/testimonios" element={<TestimonialsPage />} />
              <Route path="/precios" element={<PricingPage />} />
              <Route path="/aviso-legal" element={<LegalPage type="aviso" />} />
              <Route path="/privacidad" element={<LegalPage type="privacidad" />} />
              <Route path="/cookies" element={<LegalPage type="cookies" />} />
              <Route path="/method" element={<Navigate to="/metodo" replace />} />
              <Route path="/services" element={<Navigate to="/servicios" replace />} />
              <Route path="/team" element={<Navigate to="/equipo" replace />} />
              <Route path="/testimonials" element={<Navigate to="/testimonios" replace />} />
              <Route path="*" element={<NotFoundPage />} />
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
    <SEOHead
      title="GYROTONIC® Pozuelo | Clases individuales y grupos reducidos"
      description="Clases de GYROTONIC® de 60 minutos en Pozuelo de Alarcón. Atención individual y grupos de hasta 4 personas, con una primera sesión para conocer el método."
      canonical="/"
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
