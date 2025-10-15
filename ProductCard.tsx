import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
}

const ProductCard: React.FC<ProductCardProps> = (producto) => {
  const { id, nombre, descripcion, imagen } = producto;

  return (
    <Link to={`/product/${id}`} className="block group">
      <div className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
        <img src={imagen} alt={nombre} className="product-card__image w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="product-card__info p-4 flex flex-col flex-grow">
          <h3 className="product-card__name text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors text-center">{nombre}</h3>
          <p className="product-card__description text-gray-600 flex-grow">{descripcion}</p>
          <div className="text-center mt-4">
            <div className="cta-button inline-block text-sm">Ver Opciones</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;