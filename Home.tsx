import React from 'react';
import ProductCard from './ProductCard';
import Hero from './Hero';
import Testimonials from './Testimonials';
import { FaGift, FaShoppingBasket, FaRegistered } from 'react-icons/fa';
import kitsImage from './src/assets/imagenes/imgProductos/imgKitsPortada1.png';
import anchetasImage from './src/assets/imagenes/imgProductos/imgAnchetasPortada1.png';
import personalizadosImage from './src/assets/imagenes/imgProductos/imgPersonalizadosPortada1.png';
import bannerImage from './src/assets/imagenes/imgBanner.png';
// import Marquee from './Marquee'; // Ya no es necesario aquí

function Home() {

    const featuredProducts = [
        {
            name: 'Kits Empresariales',
            description: 'Elige por por precio, intereses o temáticas.',
            icon: <FaGift />,
            imageUrl: kitsImage,
            slug: 'kits-empresariales' // Añadido
        },

        {
            name: 'Anchetas Gourmet',
            description: 'Una selección de productos premium para paladares exigentes.',
            icon: <FaShoppingBasket />,
            imageUrl: anchetasImage,
            slug: 'anchetas-gourmet' // Añadido
        },

        {
            name: 'Productos personalizados',
            description: 'Productos creativos y modernos para sorprender a tus clientes VIP.',
            icon: <FaRegistered />,
            imageUrl: personalizadosImage,
            slug: 'productos-personalizados' // Añadido
        }
    ];

    return (
        <div>
            {/* El Marquee ahora se renderiza en App.tsx */}
            <Hero />

            <section className="featured-products py-12">
                <h2 className="featured-products__title text-3xl font-bold text-center mb-8">Regalos de Navidad y fin de año</h2>
                <div className="featured-products__grid grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {featuredProducts.map((product, index) => (
                        // Asegúrate de que ProductCard ahora recibe el slug
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </section>

            <section className="promotional-section bg-gray-50 py-12 mt-12">
                <div className="promotional-section__container flex flex-col md:flex-row items-center max-w-6xl mx-auto p-4">
                    <div className="promotional-section__image-container md:w-1/2 p-4">
                        <img src={bannerImage} alt="Regalos corporativos personalizados" className="promotional-section__image w-full h-auto rounded-lg shadow-md" />
                    </div>
                    <div className="promotional-section__content md:w-1/2 p-4">
                        <h2 className="promotional-section__title text-3xl font-semibold mb-4 text-gray-800">Déjalos elegir. Haz que tu regalo sea el detalle corporativo perfecto.</h2>
                        <p className="promotional-section__body text-gray-600 mb-6">
                            Envía un e-mail con una colección personalizada <strong>(por presupuesto, tema o interés)</strong> y deja que el <strong>receptor elija</strong> su detalle favorito entre tus opciones. Solo necesitas su correo electrónico para gestionar la entrega y garantizar <strong>detalles que realmente se aprecian</strong>.
                        </p>
                        <div className="promotional-section__cta-container">
                            <a href="/contact" className="cta-button cta-button--secondary bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">Descubre Cómo</a>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
            {/* <Testimonials /> */}
        </div>
    );
}

export default Home;