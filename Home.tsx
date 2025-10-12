import React from 'react';
import ProductCard from './ProductCard';
import Hero from './Hero';
import Testimonials from './Testimonials';
// import Marquee from './Marquee'; // COMENTADO

const Home: React.FC = () => {

    const featuredProducts = [
        {
            name: 'Kits Empresariales',
            description: 'Personaliza el impacto. Elige entre tecnología, bienestar o productividad.',
            imageUrl: './imagenes/imgProductos/imgKitsPortada1.png',
            slug: 'kits-empresariales' // Añadido
        },

        {
            name: 'Anchetas Gourmet',
            description: 'Una selección de productos premium para el paladar más exigente.',
            imageUrl: './imagenes/imgProductos/imgAnchetasPortada1.png',
            slug: 'anchetas-gourmet' // Añadido
        },

        {
            name: 'Productos personalizados',
            description: 'Gadgets de última generación para sorprender a tus clientes.',
            imageUrl: './imagenes/imgProductos/imgPersonalizadosPortada1.png',
            slug: 'productos-personalizados' // Añadido
        }
    ];

    return (
        <div>
            {/* <Marquee /> // COMENTADO */}
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
                        <img src="/imagenes/imgBanner.png" alt="Regalos corporativos personalizados" className="promotional-section__image w-full h-auto rounded-lg shadow-md" />
                    </div>
                    <div className="promotional-section__content md:w-1/2 p-4">
                        <h2 className="promotional-section__title text-3xl font-semibold mb-4 text-gray-800">Déjalos elegir y haz que tu regalo sea el detalle corporativo perfecto:</h2>
                        <p className="promotional-section__body text-gray-600 mb-6">
                            Envía una colección personalizada <strong>(por presupuesto, tema o interés)</strong> y deja que el receptor elija su detalle favorito entre 3 opciones. Solo necesitas su correo electrónico para gestionar la entrega y garantizar <strong>detalles que realmente se aprecian</strong>.
                        </p>
                        <div className="promotional-section__cta-container">
                            <a href="/contact" className="cta-button cta-button--secondary bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">Descubre Cómo</a>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default Home;