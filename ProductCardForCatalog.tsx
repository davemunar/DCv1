import React from 'react';
import { Product } from './types';

interface ProductCardForCatalogProps {
  product: Product;
  onCardClick: (product: Product) => void;
}

const ProductCardForCatalog: React.FC<ProductCardForCatalogProps> = ({ product, onCardClick }) => {
  return (
    <div 
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={() => onCardClick(product)}
    >
      <div className="aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden">
        <img 
          src={product.imageUrls[0]} 
          alt={product.name} 
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-semibold text-gray-900 h-10 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-lg font-bold text-slate-800">${product.price.toLocaleString('es-CO')}</p>
          <div className="mt-4">
            <button 
              className="w-full rounded-md bg-accent bg-opacity-90 py-2 px-4 text-center text-sm font-bold text-primary transition-colors hover:bg-opacity-100"
              onClick={(e) => { e.stopPropagation(); onCardClick(product); }}
            >
              Ver Detalle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardForCatalog;