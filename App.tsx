import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Marquee from './Marquee';
import Home from './Home';
// Nuevos componentes necesarios
import ProductCatalog from './ProductCatalog'; 
import ProductDetails from './ProductDetails'; 

const App: React.FC = () => {
  const [isMarqueeVisible, setMarqueeVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <Router>
      <Header />
      <Marquee className={isMarqueeVisible ? '' : 'marquee-section--hidden'} />
      {/* Añadí una clase min-h-screen para asegurar que el footer esté abajo */}
      <main className="container mx-auto p-4 min-h-screen"> 
        <Routes>
          {/* Ruta principal (Inicio) */}
          <Route path="/" element={<Home />} />
          
          {/* Ruta para el catálogo completo de productos */}
          <Route path="/products" element={<ProductCatalog />} />
          
          {/* Ruta para ver los detalles de un producto específico */}
          <Route path="/product/:slug" element={<ProductDetails />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;