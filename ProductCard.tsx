import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link

interface ProductCardProps {
    name: string;
    description: string;
    imageUrl: string;
    slug: string; // Campo obligatorio para la URL
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, imageUrl, slug }) => {
    return (
        // Usamos Link para navegar a la ruta /product/slug
        <Link to={`/product/${slug}`} className="product-card block group">
            <div className="product-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                    src={imageUrl} 
                    alt={name} 
                    className="product-card__image w-full h-48 object-cover transition duration-300 group-hover:scale-105" 
                />
                <div className="product-card__info p-4">
                    <h3 className="product-card__name text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                        {name}
                    </h3>
                    <p className="product-card__description text-gray-600">
                        {description}
                    </p>
                    <button className="mt-4 text-blue-500 hover:text-blue-700 font-medium">
                        Ver Detalles →
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;