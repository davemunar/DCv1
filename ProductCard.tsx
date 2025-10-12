import React from 'react';

interface ProductCardProps {
    name: string;
    description: string;
    imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, imageUrl }) => {
    return (
        <div className="product-card">
            <img src={imageUrl} alt={name} className="product-card__image" />
            <div className="product-card__info">
                <h3 className="product-card__name">{name}</h3>
                <p className="product-card__description">{description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
