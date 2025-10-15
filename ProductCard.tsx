import React from 'react';
import { Link } from 'react-router-dom';
import { FaGift } from 'react-icons/fa'; // O el ícono que corresponda

interface ProductCardProps {
  name: string;
  descripcion: string;
  imageUrl: string;
  slug: string;
  icon?: React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, descripcion, imageUrl, slug, icon }) => {

  return (
    <Link to={`/product/${slug}`} className="product-card block group">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <img src={imageUrl} alt={name} className="product-card__image w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="product-card__info p-4 flex flex-col flex-grow">
          <h3 className="product-card__name text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors text-center flex items-center justify-center gap-2">
            {icon} {name}
          </h3>
          <p className="product-card__description text-gray-600 flex-grow">{descripcion}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;