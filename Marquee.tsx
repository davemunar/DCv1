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
            ¡🎄Adelántate a diciembre y obtén 35% OFF$!🎁
        </div>
    );
};

export default Marquee;