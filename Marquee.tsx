import React from 'react';

const Marquee: React.FC = () => {
    // Si no tienes contenido aún, simplemente devuelve un fragmento vacío o null.
    // Esto asegura que el componente se renderice correctamente sin romper la aplicación.
    return (
        <div className="py-2 bg-blue-100 text-center text-sm text-blue-800">
            {/* Mensaje temporal de Marquee */}
            ¡Atención: Diseños exclusivos para regalos de fin de año! Solicita tu cotización ahora.
        </div>
    );
};

export default Marquee;