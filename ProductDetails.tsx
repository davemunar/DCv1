import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails: React.FC = () => {
  // Capturamos el slug del producto desde la URL
  const { slug } = useParams<{ slug: string }>(); 
  
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">Detalles del Producto: {slug}</h1>
      <p className="text-gray-600">Esta es la página de detalle. Actualmente muestra el slug de la URL.</p>
      {/* Placeholder temporal */}
      <div className="mt-8 p-4 bg-blue-100 border border-blue-300 rounded">
        <p>En desarrollo: Mostrar información detallada, precio y botón de cotización/compra para el producto <strong>{slug}</strong>.</p>
      </div>
    </div>
  );
};

export default ProductDetails;