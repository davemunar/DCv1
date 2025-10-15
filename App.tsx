import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Marquee from './Marquee'; // Ya no es necesario aquí
import Pillars from './Pillars'; // Importamos el componente de los pilares
import Cta from './Cta'; // Importamos el nuevo componente CTA
import WhatsAppButton from './WhatsAppButton'; // Importamos el botón de WhatsApp
import Home from './Home';
// Nuevos componentes necesarios
import ProductCatalog from './ProductCatalog'; 
import ProductDetails from './ProductDetails'; 

// Placeholder components for new routes
const Contact = () => <div className="py-8"><h1 className="text-3xl font-bold">Página de Contacto</h1><p>Información de contacto aquí.</p></div>;
const About = () => <div className="py-8"><h1 className="text-3xl font-bold">Sobre Nosotros</h1><p>Información sobre la empresa aquí.</p></div>;
const Policies = () => <div className="py-8"><h1 className="text-3xl font-bold">Políticas</h1><p>Políticas de entregas y devoluciones aquí.</p></div>;


const ConditionalCta: React.FC = () => {
  const location = useLocation();
  // Mostrar el CTA solo en la página de inicio ("/")
  if (location.pathname !== '/') {
    return null;
  }
  return <Cta />;
};


const App: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isMarqueeVisible, setMarqueeVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isFooterVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Mostrar si se hace scroll hacia arriba o si está cerca del tope
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setMarqueeVisible(true);
      } else {
        setMarqueeVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Se activa cuando al menos el 10% del footer es visible
      }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <Header />
      <Marquee className={isMarqueeVisible ? '' : 'marquee-section--hidden'} />
      <main className="min-h-screen">
        <Routes>
          {/* Ruta principal (Inicio) */}
          <Route path="/" element={<Home />} />
          
          {/* Ruta para el catálogo completo de productos */}
          <Route path="/products" element={<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                              <ProductCatalog />
                                            </div>} />
          
          {/* Ruta para ver los detalles de un producto específico */}
          <Route path="/product/:slug" element={<ProductDetails />} />

          {/* Nuevas rutas */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/politicas" element={<Policies />} />
        </Routes>
      </main>
      <ConditionalCta /> {/* El CTA ahora se muestra condicionalmente */}
      <div ref={footerRef}>
        <Pillars /> {/* Añadimos la sección de pilares aquí */}
        <Footer />
      </div>
      <WhatsAppButton isFooterVisible={isFooterVisible} /> {/* Añadimos el botón flotante de WhatsApp */}
    </Router>
  );
};

export default App;