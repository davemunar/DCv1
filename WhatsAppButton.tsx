import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
    // Reemplaza este número con tu número de WhatsApp
    const whatsappUrl = "https://wa.me/573208713744?text=Hola!%20Quisiera%20más%20información.";

    return (
        <a
            href={whatsappUrl}
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp />
            <div className="whatsapp-notification">$</div>
        </a>
    );
};

export default WhatsAppButton;