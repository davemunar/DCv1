import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Marquee from './Marquee';
import Pillars from './Pillars';
import Cta from './Cta';
import WhatsAppButton from './WhatsAppButton';
import Home from './Home';
import RegalaProCatalog from './RegalaProCatalog';
import { useQuote } from './useQuote';
import QuoteModal from './QuoteModal';
import { Product } from './types';

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

const AppContent: React.FC = () => {
  const { quoteItems, isQuoteModalOpen, addToQuote, removeFromQuote, updateQuoteItemQuantity, openQuoteModal, closeQuoteModal, clearQuote } = useQuote();
  const quoteItemCount = quoteItems.reduce((acc, item) => acc + item.quantity, 0);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [wantsAdvisory, setWantsAdvisory] = useState(false);

  const handleProductCardClick = useCallback((product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setWantsAdvisory(false);
  }, []);

  const handleCloseDetailModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  const handleAddToQuote = () => {
    if (selectedProduct) {
      addToQuote(selectedProduct, quantity, wantsAdvisory);
      handleCloseDetailModal();
    }
  };

  return (
    <>
      <Header quoteItemCount={quoteItemCount} onQuoteClick={() => {}} />
      <Marquee className="" />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home onProductClick={handleProductCardClick} />} />
          <Route 
            path="/products" 
            element={
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RegalaProCatalog onProductClick={handleProductCardClick} />
              </div>
            } 
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/politicas" element={<Policies />} />
        </Routes>
      </main>
      <Pillars />
      <Footer />
      <WhatsAppButton isFooterVisible={false} />
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={closeQuoteModal}
        quoteItems={quoteItems}
        onRemoveItem={removeFromQuote}
        onUpdateItemQuantity={updateQuoteItemQuantity}
        onClearQuote={clearQuote}
      />
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex justify-center items-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg relative p-6">
            <button onClick={handleCloseDetailModal} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 z-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h2 className="text-2xl font-bold text-primary mb-4">{selectedProduct.name}</h2>
            {/* ... Contenido del modal de detalle ... */}
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <div className="flex justify-between items-center mb-6">
              <span className="text-2xl font-bold text-primary">${selectedProduct.price.toLocaleString('es-CO')}</span>
              <div className="flex items-center">
                <label htmlFor="quantity" className="mr-2 font-semibold text-gray-700">Cantidad:</label>
                <input id="quantity" type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="w-20 text-center border border-gray-300 rounded-md shadow-sm" min="1" />
              </div>
            </div>
            <div className="mb-6">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" checked={wantsAdvisory} onChange={(e) => setWantsAdvisory(e.target.checked)} className="h-5 w-5 rounded text-primary focus:ring-secondary border-gray-300" />
                <span className="ml-3 text-sm text-gray-700">Sí, deseo recibir una consulta de asesoría gratuita para la personalización de mi logo.</span>
              </label>
            </div>
            <button onClick={handleAddToQuote} className="w-full bg-accent text-primary font-bold py-3 px-4 rounded-lg hover:bg-yellow-400 transition-transform transform hover:scale-105">
              Añadir a la Cotización
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;