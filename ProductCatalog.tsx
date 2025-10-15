import React, { useState } from 'react';
import { productos } from './src/assets/productos'; // Importamos el array de productos
import ProductCard from './ProductCard'; // Usamos la tarjeta de catálogo con el diseño correcto

const ProductCatalog = () => {
  const [categoriaFiltro, setCategoriaFiltro] = useState<string[]>([]);
  const [rangoFiltro, setRangoFiltro] = useState<string[]>([]);
  const [interesFiltro, setInteresFiltro] = useState<string[]>([]);

  const categorias = ["Kits", "Anchetas", "Personalizados"];
  const rangos = ["Entrada", "Premium", "VIP"];
  const intereses = ["Tecnología", "Bienestar", "Productividad"];

  // 🔹 Maneja selección múltiple con checkbox
  const handleFiltro = (filtro: string, valor: string) => {
    if (filtro === "categoria") {
      setCategoriaFiltro((prev) =>
        prev.includes(valor)
          ? prev.filter((c) => c !== valor)
          : [...prev, valor]
      );
    } else if (filtro === "rango") {
      setRangoFiltro((prev) =>
        prev.includes(valor)
          ? prev.filter((r) => r !== valor)
          : [...prev, valor]
      );
    } else {
      setInteresFiltro((prev) =>
        prev.includes(valor) ? prev.filter((i) => i !== valor) : [...prev, valor]
      );
    }
  };

  // 🔹 Filtra los productos
  const productosFiltrados = productos.filter((producto) => {
    // Normalizamos a minúsculas para una comparación robusta
    const categoriaProducto = producto.categoria.toLowerCase();
    const rangoProducto = producto.rango.toLowerCase();
    const subcategoriaProducto = producto.subcategoria.toLowerCase();
    const categoriasSeleccionadas = categoriaFiltro.map(c => c.toLowerCase());
    const rangosSeleccionados = rangoFiltro.map(r => r.toLowerCase());
    const interesesSeleccionados = interesFiltro.map(i => i.toLowerCase());

    const matchCategoria =
      categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(categoriaProducto);
    const matchRango = rangosSeleccionados.length === 0 || rangosSeleccionados.includes(rangoProducto);
    const matchInteres =
      interesesSeleccionados.length === 0 || interesesSeleccionados.includes(subcategoriaProducto);
    return matchCategoria && matchRango && matchInteres;
  });

  return (
    <section className="p-4 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        🎁 Catálogo Corporativo
      </h2>

      {/* Filtros */}
      <div className="bg-white rounded-2xl shadow p-4 mb-6">
        <h3 className="font-semibold text-lg mb-2 text-gray-700">
          Filtrar por:
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Categorías */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Tipo</p>
            {categorias.map((cat) => (
              <label key={cat} className="block text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={categoriaFiltro.includes(cat)}
                  onChange={() => handleFiltro("categoria", cat)}
                  className="mr-2 accent-green-600"
                />
                {cat}
              </label>
            ))}
          </div>
          {/* Rangos */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Precio</p>
            {rangos.map((r) => (
              <label key={r} className="block text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={rangoFiltro.includes(r)}
                  onChange={() => handleFiltro("rango", r)}
                  className="mr-2 accent-green-600"
                />
                {r}
              </label>
            ))}
          </div>
          {/* Intereses */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Interés</p>
            {intereses.map((interes) => (
              <label key={interes} className="block text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={interesFiltro.includes(interes)}
                  onChange={() => handleFiltro("interes", interes)}
                  className="mr-2 accent-green-600"
                />
                {interes}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCTOS */}
      {productosFiltrados.length === 0 ? (
        <p className="text-center text-gray-500">No hay productos que coincidan.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {productosFiltrados.map((p) => (
            <ProductCard 
              key={p.id}
              id={p.id}
              nombre={p.nombre}
              descripcion={`${p.categoria} - ${p.rango}`}
              imagen={p.imagen} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductCatalog;
