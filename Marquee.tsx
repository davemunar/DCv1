import React from 'react';

interface MarqueeProps {
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ className = '' }) => {
    // Si no tienes contenido aún, simplemente devuelve un fragmento vacío o null.
    // Esto asegura que el componente se renderice correctamente sin romper la aplicación.
    return (
        <div className={`marquee-section ${className}`}>
            {/* Mensaje temporal de Marquee */}
            ¡🎄 Adelántate a la Navidad! 35% OFF💰 en tus pedidos🎁.
        </div>
    );
};

export default Marquee;