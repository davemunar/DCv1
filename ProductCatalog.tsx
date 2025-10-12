import React from 'react';

const ProductCatalog: React.FC = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">Catálogo de Regalos Corporativos</h1>
      <p className="text-gray-600">Aquí se mostrarán todos los kits, anchetas y productos disponibles para compra.</p>
      {/* Placeholder temporal */}
      <div className="mt-8 p-4 bg-gray-100 border rounded">
        <p>En desarrollo: Búsqueda y listado de productos...</p>
      </div>
    </div>
  );
};

export default ProductCatalog;
