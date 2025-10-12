import React from 'react';
import ProductCard from './ProductCard';
import Hero from './Hero';
import Testimonials from './Testimonials';
import Marquee from './Marquee';

const Home: React.FC = () => {

    const featuredProducts = [
        {
            name: ' Kits Empresariales',
            description: ' Personaliza el impacto. Elige entre tecnología, bienestar o productividad.',
            imageUrl: './imagenes/imgProductos/imgKitsPortada1.png'
        },

        {
            name: 'Anchetas Gourmet',
            description: 'Una selección de productos premium para el paladar más exigente.',
            imageUrl: './imagenes/imgProductos/imgAnchetasPortada1.png'
        },

        {
            name: 'Productos personalizados',
            description: 'Gadgets de última generación para sorprender a tus clientes.',
            imageUrl: './imagenes/imgProductos/imgPersonalizadosPortada1.png'
        }
        
    ];

    return (
        <div>
            <Marquee />
            <Hero />

            <section className="featured-products">
                <h2 className="featured-products__title">Regalos de Navidad y fin de año</h2>
                <div className="featured-products__grid">
                    {featuredProducts.map((product, index) => (
                       <ProductCard key={index} {...product} />
                    ))}
                </div>
            </section>

            <section className="promotional-section">
                <div className="promotional-section__container">
                    <div className="promotional-section__image-container">
                        <img src="/imagenes/imgBanner.png" alt="Regalos corporativos personalizados" className="promotional-section__image" />
                    </div>
                    <div className="promotional-section__content">
                        <h2 className="promotional-section__title">Déjalos elegir y haz que tu regalo sea el detalle corporativo perfecto:</h2>
                        <p className="promotional-section__body">
                            Envía una colección personalizada <strong>(por presupuesto, tema o interés)</strong> y deja que el receptor elija su detalle favorito entre 3 opciones. Solo necesitas su correo electrónico para gestionar la entrega y garantizar <strong>detalles que realmente se aprecian</strong>.
                        </p>
                        <div className="promotional-section__cta-container">
                            <a href="#" className="cta-button cta-button--secondary">Descubre Cómo</a>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default Home;
