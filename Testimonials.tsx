import React, { useState, useEffect } from 'react';

const testimonials = [
    {
        id: 1,
        name: 'Laura Gómez ',
        role: '  Gerente de RRHH, Tech Solutions',
        message: '¡La plataforma es increíblemente fácil de usar! Nuestros empleados se sintieron valorados y el proceso de elección del regalo fue un éxito total. ¡Un acierto para nuestro programa de bienestar!',
    },
    {
        id: 2,
        name: 'Carlos Mendoza  ',
        role: '  Jefe de Personal, Innova Corp',
        message: 'Buscábamos una forma de reconocer a nuestro equipo que fuera más allá de lo tradicional. Detalles Corporativos nos dio la flexibilidad que necesitábamos. La logística fue impecable.',
    },
    {
        id: 3,
        name: 'Sofía Ramírez  ',
        role: '  Coordinadora de Bienestar, Grupo Creativo',
        message: 'El feedback de los colaboradores fue excelente. Les encantó poder elegir su propio regalo. Definitivamente eleva la moral del equipo y fortalece nuestra cultura empresarial.',
    },
    {
        id: 4,
        name: 'Martín Torres  ',
        role: '  Director de Talento Humano, GlobalNet',
        message: 'La gestión de regalos corporativos solía ser un dolor de cabeza. Ahora, con esta solución, el proceso es ágil y nuestros empleados se sienten realmente especiales. ¡Totalmente recomendado!',
    },
    {
        id: 5,
        name: 'Isabella Rojas  ',
        role: '  Especialista en Clima Organizacional, Creativos Unidos',
        message: 'Poder ofrecer una selección curada de regalos y que cada persona elija su favorito ha tenido un impacto muy positivo en la moral del equipo. La logística es transparente y sin complicaciones.',
    },
    {
        id: 6,
        name: 'Javier Núñez  ',
        role: '  Gerente de Compensaciones, LogiTech',
        message: 'Desde que implementamos esta plataforma, el feedback ha sido unánime: es la mejor iniciativa de reconocimiento que hemos tenido. La calidad de los detalles y la experiencia de entrega son de primer nivel.',
    },
];

const getInitials = (name: string) => {
    return name
        .split(' ')
        .map(n => n[0])
        .join('')
        .substring(0, 2)
        .toUpperCase();
};

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userInteracted, setUserInteracted] = useState(false);

    useEffect(() => {
        if (!userInteracted) {
            const slideInterval = setInterval(() => {
                goToNext(false);
            }, 7000); // Change slide every 7 seconds

            return () => clearInterval(slideInterval);
        }
    }, [currentIndex, userInteracted]);

    const goToPrevious = () => {
        setUserInteracted(true);
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = (isUserInteraction = true) => {
        if (isUserInteraction) setUserInteracted(true);
        const isLastSlide = currentIndex === testimonials.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setUserInteracted(true);
        setCurrentIndex(slideIndex);
    };

    return (
        <section className="testimonials-carousel">
            <h2 className="testimonials-carousel__title">Lo que dicen nuestros clientes</h2>
            <div className="testimonials-carousel__slides-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonials-carousel__slide">
                        <p className="testimonial-card__message">"{testimonial.message}"</p>
                        <div className="testimonial-card__author">
                            <div className="testimonial-card__initials-icon">
                                {getInitials(testimonial.name)}
                            </div>
                            <div className="testimonial-card__author-details">
                                <span className="testimonial-card__name">{testimonial.name}</span> 
                                <span className="mx-2 text-gray-400">|</span>
                                <span className="testimonial-card__role">{testimonial.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="testimonials-carousel__controls">
                <div className="testimonials-carousel__arrow-group">
                    <div className="testimonials-carousel__arrow testimonials-carousel__arrow--left" onClick={goToPrevious}>&#10094;</div>
                    <div className="testimonials-carousel__arrow testimonials-carousel__arrow--right" onClick={() => goToNext()}>&#10095;</div>
                </div>
                <div className="testimonials-carousel__dots">
                    {testimonials.map((_, slideIndex) => (
                        <div key={slideIndex} className={`testimonials-carousel__dot ${currentIndex === slideIndex ? 'active' : ''}`} onClick={() => goToSlide(slideIndex)}></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;