import React from 'react';
import { FaGift } from 'react-icons/fa';
import { HiShieldCheck, HiCalculator, HiUserGroup } from 'react-icons/hi2';

const pillarsData = [
    { icon: <HiCalculator />, text: 'Cotiza Rápido', important: true },
      { icon: <HiUserGroup />, text: 'Atención Personalizada', important: false },
    { icon: <FaGift />, text: 'Envíos a toda Colombia', important: false },
    { icon: <HiShieldCheck />, text: 'Entrega Garantizada', important: false },

  
];

const Pillars: React.FC = () => {
    return (
        <section className="marquee-section">
            <div className="marquee-section__container max-w-6xl mx-auto">
                {pillarsData.map((pillar, index) => (
                    <div 
                        key={index} 
                        className="marquee-section__item"
                    >
                        <span className="marquee-section__icon">{pillar.icon}</span>
                        <span className="marquee-section__text">{pillar.text}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pillars;