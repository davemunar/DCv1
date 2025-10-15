import React from 'react';
import { FaWhatsapp, FaGift } from 'react-icons/fa';

interface WhatsAppButtonProps {
    isFooterVisible: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ isFooterVisible }) => {
    // Reemplaza este número con tu número de WhatsApp
    const whatsappUrl = "https://wa.me/573208713744?text=Hola!%20Quisiera%20más%20información.";

    return (
        <a
            href={whatsappUrl}
            className={`whatsapp-button ${isFooterVisible ? 'show-popup' : ''}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp />
            <div className="whatsapp-notification">
                <FaGift />
            </div>
            <div className="whatsapp-popup">
                <p>🎄¡Aprovecha el <strong>20% OFF</strong>!</p>
            </div>
        </a>
    );
};

export default WhatsAppButton;