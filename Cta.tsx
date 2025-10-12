import React from 'react';

const Cta: React.FC = () => {
    return (
        <section className="cta-section">
            <div className="cta-section__container max-w-6xl mx-auto">
                <a href="/contact" className="cta-section__button">
                    $ Cotizar
                </a>
                <p className="cta-section__text">¡es muy fácil!</p>
            </div>
        </section>
    );
};

export default Cta;