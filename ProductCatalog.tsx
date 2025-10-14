import React, { useState } from 'react';
import catalogoData from './src/assets/catalogo.json';

const ProductCatalog: React.FC = () => {
  const [filtro, setFiltro] = useState('');

  const productosFiltrados = catalogoData.filter(
    (producto) => (filtro === '' ? true : producto.categoria === filtro)
  );

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Catálogo de Regalos Corporativos
      </h1>

      <div className="flex justify-center mb-6">
        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="border border-gray-300 p-2 rounded-md shadow-sm"
        >
          <option value="">Todos</option>
          <option value="Gourmet">Gourmet</option>
          <option value="Navidad">Navidad</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {productosFiltrados.map((producto) => (
          <div
            key={producto.id}
            className="border rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-3">{producto.nombre}</h2>
            <p className="text-gray-600 text-sm">{producto.descripcion}</p>
            <p className="mt-2 font-bold text-green-700">
              ${producto.precio.toLocaleString('es-CO')}
            </p>
            <button
              onClick={() => alert(`Cotizar: ${producto.nombre}`)}
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Cotizar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
