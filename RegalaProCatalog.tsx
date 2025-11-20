
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCardForCatalog from './ProductCardForCatalog'; // Usaremos una tarjeta de producto limpia

// --- 1. DEFINICIÓN DE TIPOS Y DATOS ---

// Tipos de Categorías
type PriceCategory = 
  | 'Esencial' 
  | 'Premium' 
  | 'VIP Pro';

type KitType = 
  | 'Kits Empresariales' 
  | 'Anchetas' 
  | 'Promocionales';

type Experience = 
  | 'Navidad y fin de año' 
  | 'Agradecimiento y Lealtad' 
  | 'Promoción de Tú Logo / Marca' 
  | 'Bienvenida / Onboarding';

// Interfaces de Datos
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrls: string[];
  category: string;
  priceCategory: PriceCategory;
  kitType: KitType;
  experience: Experience;
}

// Generador de URLs de Imágenes (Mock)
const generateImageUrls = (keywords: string): string[] => {
  // Se usa una única imagen de prueba cuadrada (400x400) para cada producto.
  const baseUrl = 'https://placehold.co/400x400/e2e8f0/475569?text=';
  const keyword = keywords.split(',')[0] || 'Producto';
  return [`${baseUrl}${encodeURIComponent(keyword)}`];
};

// Datos de Productos (Mock)
const allProducts: Product[] = [
  { id: '1', name: 'Taza Navideña Corporativa', description: 'Taza de cerámica con motivos navideños y espacio para tu logo.', price: 35000, imageUrls: generateImageUrls('christmas,mug'), category: 'Promocional', priceCategory: 'Esencial', kitType: 'Promocionales', experience: 'Navidad y fin de año' },
  { id: '2', name: 'Mini Ancheta Dulce Navidad', description: 'Pequeña caja con una selección de dulces y galletas de temporada.', price: 45000, imageUrls: generateImageUrls('christmas,sweets,box'), category: 'Snacks', priceCategory: 'Esencial', kitType: 'Anchetas', experience: 'Navidad y fin de año' },
  { id: '3', name: 'Kit Básico de Celebración', description: 'Incluye un bolígrafo brandeado y una libreta con temática de fin de año.', price: 48000, imageUrls: generateImageUrls('christmas,notebook,pen'), category: 'Oficina', priceCategory: 'Esencial', kitType: 'Kits Empresariales', experience: 'Navidad y fin de año' },
  { id: '4', name: 'Botella de Agua Navideña', description: 'Botella térmica con logo y motivos festivos.', price: 75000, imageUrls: generateImageUrls('water,bottle,christmas'), category: 'Promocional', priceCategory: 'Premium', kitType: 'Promocionales', experience: 'Navidad y fin de año' },
  { id: '5', name: 'Ancheta Café de Origen', description: 'Selección de café colombiano premium y galletas artesanales.', price: 80000, imageUrls: generateImageUrls('christmas,hamper,coffee'), category: 'Snacks', priceCategory: 'Premium', kitType: 'Anchetas', experience: 'Navidad y fin de año' },
  { id: '6', name: 'Kit de Aromaterapia Festiva', description: 'Vela aromática de canela y pino, y un aceite esencial.', price: 85000, imageUrls: generateImageUrls('christmas,candle,relax'), category: 'Cuidado Personal', priceCategory: 'Premium', kitType: 'Kits Empresariales', experience: 'Navidad y fin de año' },
  { id: '7', name: 'Manta Personalizada y Kit de Cine', description: 'Manta tejida con logo y snacks para una tarde de películas.', price: 160000, imageUrls: generateImageUrls('blanket,movie,cozy'), category: 'Promocional', priceCategory: 'VIP Pro', kitType: 'Promocionales', experience: 'Navidad y fin de año' },
  { id: '8', name: 'Ancheta Gourmet Navideña', description: 'Vino, quesos maduros, jamón serrano y mermeladas.', price: 240000, imageUrls: generateImageUrls('gourmet,hamper,christmas'), category: 'Gourmet', priceCategory: 'VIP Pro', kitType: 'Anchetas', experience: 'Navidad y fin de año' },
  { id: '9', name: 'Kit Spa Fin de Año', description: 'Aceites esenciales, difusor, antifaz de gel y una suave toalla.', price: 150000, imageUrls: generateImageUrls('spa,kit,relax'), category: 'Cuidado Personal', priceCategory: 'VIP Pro', kitType: 'Kits Empresariales', experience: 'Navidad y fin de año' },
  { id: '10', name: 'Llavero de Cuero Grabado', description: 'Detalle elegante y duradero con mensaje de gratitud.', price: 38000, imageUrls: generateImageUrls('leather,keychain'), category: 'Promocional', priceCategory: 'Esencial', kitType: 'Promocionales', experience: 'Agradecimiento y Lealtad' },
  { id: '11', name: 'Caja de Chocolates "Gracias"', description: 'Selección de bombones en caja con mensaje.', price: 48000, imageUrls: generateImageUrls('chocolate,box,thankyou'), category: 'Snacks', priceCategory: 'Esencial', kitType: 'Anchetas', experience: 'Agradecimiento y Lealtad' },
  { id: '12', name: 'Kit de Notas de Agradecimiento', description: 'Set de tarjetas de alta calidad y bolígrafo.', price: 49000, imageUrls: generateImageUrls('thankyou,cards,pen'), category: 'Oficina', priceCategory: 'Esencial', kitType: 'Kits Empresariales', experience: 'Agradecimiento y Lealtad' },
  { id: '13', name: 'Mug de Agradecimiento Especial', description: 'Mug de alta calidad con diseño de gratitud y dulces.', price: 82000, imageUrls: generateImageUrls('mug,gift,corporate'), category: 'Promocional', priceCategory: 'Premium', kitType: 'Promocionales', experience: 'Agradecimiento y Lealtad' },
  { id: '14', name: 'Ancheta Gracias por tu Esfuerzo', description: 'Chocolates gourmet, caramelos y tarjeta personalizada.', price: 88000, imageUrls: generateImageUrls('chocolate,gift,box'), category: 'Snacks', priceCategory: 'Premium', kitType: 'Anchetas', experience: 'Agradecimiento y Lealtad' },
  { id: '15', name: 'Set de Escritura Inspirador', description: 'Libreta premium, bolígrafos de colores y stickers.', price: 90000, imageUrls: generateImageUrls('notebook,pen,stationery'), category: 'Oficina', priceCategory: 'Premium', kitType: 'Kits Empresariales', experience: 'Agradecimiento y Lealtad' },
  { id: '16', name: 'Kit Onboarding Plus Tech', description: 'Termo, agenda de cuero y power bank.', price: 175000, imageUrls: generateImageUrls('corporate,gift,tech'), category: 'Tecnología', priceCategory: 'VIP Pro', kitType: 'Kits Empresariales', experience: 'Bienvenida / Onboarding' },
  { id: '17', name: 'Kit de Inicio Esencial', description: 'Libreta, bolígrafo y nota de bienvenida.', price: 49000, imageUrls: generateImageUrls('welcome,kit,office'), category: 'Oficina', priceCategory: 'Esencial', kitType: 'Kits Empresariales', experience: 'Bienvenida / Onboarding' },
  // Nuevos productos para llegar a 36
  // === 2. PROPÓSITO: Agradecimiento y Lealtad (VIP Pro) ===
  { id: '18', name: 'Set de Arte Premium', description: 'Acuarelas profesionales, pinceles y papel especializado.', price: 180000, imageUrls: generateImageUrls('art,supplies,paint'), category: 'Hobbies', priceCategory: 'VIP Pro', kitType: 'Kits Empresariales', experience: 'Agradecimiento y Lealtad' },
  { id: '19', name: 'Ancheta de Mixología "Gracias"', description: 'Kit para preparar cócteles premium.', price: 190000, imageUrls: generateImageUrls('cocktail,kit,mixology'), category: 'Gourmet', priceCategory: 'VIP Pro', kitType: 'Anchetas', experience: 'Agradecimiento y Lealtad' },
  { id: '20', name: 'Pluma Fuente Grabada "Lealtad"', description: 'Pluma fuente grabada y cuaderno de cuero.', price: 200000, imageUrls: generateImageUrls('fountain,pen,leather'), category: 'Promocional', priceCategory: 'VIP Pro', kitType: 'Promocionales', experience: 'Agradecimiento y Lealtad' },

  // === 3. PROPÓSITO: Promoción de Tú Logo / Marca ===
  // Esencial
  { id: '21', name: 'Bolígrafo Metálico con Logo', description: 'Bolígrafo elegante con grabado láser.', price: 25000, imageUrls: generateImageUrls('pen,logo'), category: 'Promocional', priceCategory: 'Esencial', kitType: 'Promocionales', experience: 'Promoción de Tú Logo / Marca' },
  { id: '22', name: 'Mini Ancheta Corporativa', description: 'Snacks básicos en empaque con logo.', price: 49000, imageUrls: generateImageUrls('snack,logo,box'), category: 'Snacks', priceCategory: 'Esencial', kitType: 'Anchetas', experience: 'Promoción de Tú Logo / Marca' },
  { id: '23', name: 'Kit Básico de Oficina', description: 'Libreta y post-its con tu logo.', price: 47000, imageUrls: generateImageUrls('office,supplies,logo'), category: 'Oficina', priceCategory: 'Esencial', kitType: 'Kits Empresariales', experience: 'Promoción de Tú Logo / Marca' },
  // Premium
  { id: '24', name: 'Agenda Corporativa 2025', description: 'Agenda premium con logo en relieve.', price: 98000, imageUrls: generateImageUrls('planner,diary,2025'), category: 'Promocional', priceCategory: 'Premium', kitType: 'Promocionales', experience: 'Promoción de Tú Logo / Marca' },
  { id: '25', name: 'Ancheta Snack Saludable', description: 'Barras de cereal, fruta deshidratada y bebida.', price: 92000, imageUrls: generateImageUrls('snack,box,healthy'), category: 'Snacks', priceCategory: 'Premium', kitType: 'Anchetas', experience: 'Promoción de Tú Logo / Marca' },
  { id: '26', name: 'Kit de Escritorio con Logo', description: 'Organizador de escritorio y temporizador.', price: 95000, imageUrls: generateImageUrls('desk,organizer,office'), category: 'Oficina', priceCategory: 'Premium', kitType: 'Kits Empresariales', experience: 'Promoción de Tú Logo / Marca' },
  // VIP Pro
  { id: '27', name: 'Mochila Antirrobo Corporativa', description: 'Mochila para laptop con logo y power bank.', price: 250000, imageUrls: generateImageUrls('backpack,tech,corporate'), category: 'Promocional', priceCategory: 'VIP Pro', kitType: 'Promocionales', experience: 'Promoción de Tú Logo / Marca' },
  { id: '28', name: 'Ancheta Café del Mundo', description: 'Cafés premium y prensa francesa en caja elegante.', price: 210000, imageUrls: generateImageUrls('coffee,hamper,world'), category: 'Gourmet', priceCategory: 'VIP Pro', kitType: 'Anchetas', experience: 'Promoción de Tú Logo / Marca' },
  { id: '29', name: 'Kit Tech con Tu Marca', description: 'Cargador inalámbrico, organizador y soporte laptop.', price: 220000, imageUrls: generateImageUrls('tech,gadgets,corporate'), category: 'Tecnología', priceCategory: 'VIP Pro', kitType: 'Kits Empresariales', experience: 'Promoción de Tú Logo / Marca' },

  // === 4. PROPÓSITO: Bienvenida / Onboarding ===
  // Esencial
  { id: '30', name: 'Pin de Bienvenida y Lanyard', description: 'Pin esmaltado y lanyard corporativo.', price: 30000, imageUrls: generateImageUrls('pin,lanyard,corporate'), category: 'Promocional', priceCategory: 'Esencial', kitType: 'Promocionales', experience: 'Bienvenida / Onboarding' },
  { id: '31', name: 'Caja de Snacks "Primer Día"', description: 'Snacks energéticos para el inicio.', price: 46000, imageUrls: generateImageUrls('welcome,snacks,firstday'), category: 'Snacks', priceCategory: 'Esencial', kitType: 'Anchetas', experience: 'Bienvenida / Onboarding' },
  // Premium
  { id: '32', name: 'Gorra y Lanyard Corporativo', description: 'Identificación y estilo desde el primer día.', price: 79000, imageUrls: generateImageUrls('cap,lanyard,corporate'), category: 'Promocional', priceCategory: 'Premium', kitType: 'Promocionales', experience: 'Bienvenida / Onboarding' },
  { id: '33', name: 'Ancheta Bienvenida Energética', description: 'Snacks saludables y bebida con nota del CEO.', price: 84000, imageUrls: generateImageUrls('welcome,snacks,hamper'), category: 'Snacks', priceCategory: 'Premium', kitType: 'Anchetas', experience: 'Bienvenida / Onboarding' },
  { id: '34', name: 'Kit de Bienvenida Estándar', description: 'Taza, libreta y bolígrafo de calidad.', price: 89000, imageUrls: generateImageUrls('welcome,kit,corporate'), category: 'Oficina', priceCategory: 'Premium', kitType: 'Kits Empresariales', experience: 'Bienvenida / Onboarding' },
  // VIP Pro
  { id: '35', name: 'Sudadera con Capucha Brandeada', description: 'Sudadera cómoda con logo de la empresa.', price: 230000, imageUrls: generateImageUrls('hoodie,branded,apparel'), category: 'Promocional', priceCategory: 'VIP Pro', kitType: 'Promocionales', experience: 'Bienvenida / Onboarding' },
  { id: '36', name: 'Caja de Bienvenida Gourmet', description: 'Café, chocolates y galletas finas.', price: 195000, imageUrls: generateImageUrls('gourmet,welcome,box'), category: 'Gourmet', priceCategory: 'VIP Pro', kitType: 'Anchetas', experience: 'Bienvenida / Onboarding' },
];

// Datos para los filtros
const priceFilters: { label: string; category: PriceCategory }[] = [
  { label: 'Esencial (hasta $50k)', category: 'Esencial' },
  { label: 'Premium ($50k - $100k)', category: 'Premium' },
  { label: 'VIP Pro (más de $100k)', category: 'VIP Pro' },
];
const kitTypeFilters: KitType[] = ['Kits Empresariales', 'Anchetas', 'Promocionales'];
const experienceFilters: Experience[] = ['Navidad y fin de año', 'Agradecimiento y Lealtad', 'Promoción de Tú Logo / Marca', 'Bienvenida / Onboarding'];


// --- 3. COMPONENTE PRINCIPAL ---

interface RegalaProCatalogProps {
  onProductClick: (product: Product) => void;
}

const RegalaProCatalog: React.FC<RegalaProCatalogProps> = ({ onProductClick }) => {
  const location = useLocation();
  const initialState = location.state as { kitType?: KitType } | null;

  const [selectedExperiences, setSelectedExperiences] = useState<Experience[]>(experienceFilters);
  const [selectedKitTypes, setSelectedKitTypes] = useState<KitType[]>(initialState?.kitType ? [initialState.kitType] : kitTypeFilters);
  const [selectedPrice, setSelectedPrice] = useState<PriceCategory[]>(priceFilters.map(p => p.category));

  // Efecto para actualizar filtros si el usuario navega a la misma página con diferente estado
  useEffect(() => {
    const navigationState = location.state as { kitType?: KitType } | null;
    if (navigationState?.kitType) {
      setSelectedKitTypes([navigationState.kitType]);
    }
  }, [location.state]);


  // --- LÓGICA DE FILTROS CRUZADOS (CRÍTICO) ---
  const isAnchetasDisabled = useMemo(() => {
    return selectedExperiences.length === 1 && selectedExperiences[0] === 'Bienvenida / Onboarding';
  }, [selectedExperiences]);

  const isBienvenidaDisabled = useMemo(() => {
    return selectedKitTypes.length === 1 && selectedKitTypes[0] === 'Anchetas';
  }, [selectedKitTypes]);

  useEffect(() => {
    if (isAnchetasDisabled && selectedKitTypes.includes('Anchetas')) {
      setSelectedKitTypes(prev => prev.filter(k => k !== 'Anchetas'));
    }
  }, [isAnchetasDisabled, selectedKitTypes]);

  useEffect(() => {
    if (isBienvenidaDisabled && selectedExperiences.includes('Bienvenida / Onboarding')) {
      setSelectedExperiences(prev => prev.filter(e => e !== 'Bienvenida / Onboarding'));
    }
  }, [isBienvenidaDisabled, selectedExperiences]);
  // --- FIN LÓGICA CRÍTICA ---

  const toggleFilter = useCallback(<T extends string>(setter: React.Dispatch<React.SetStateAction<T[]>>, item: T) => {
    setter(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  }, []);

  const filteredProducts = useMemo(() => {
    return allProducts.filter(p => 
      (selectedPrice.length === 0 || selectedPrice.includes(p.priceCategory)) &&
      (selectedKitTypes.length === 0 || selectedKitTypes.includes(p.kitType)) &&
      (selectedExperiences.length === 0 || selectedExperiences.includes(p.experience))
    );
  }, [selectedPrice, selectedKitTypes, selectedExperiences]);

  return (
    <div className="w-full h-auto relative bg-slate-50 font-sans text-slate-800 rounded-lg overflow-hidden">
      <div className="p-4 md:p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">🎁 Nuestro Catálogo Corporativo</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6 border border-gray-100">
          <h2 className="text-lg font-bold text-indigo-900 mb-4">Filtrar Regalos Por:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wider">Experiencia</h3>
              <div className="flex flex-col">
                {experienceFilters.map(exp => (
                  <label key={exp} className={`flex items-center mb-1 text-sm ${exp === 'Bienvenida / Onboarding' && isBienvenidaDisabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}>
                    <input type="checkbox" checked={selectedExperiences.includes(exp)} onChange={() => toggleFilter(setSelectedExperiences, exp)} disabled={isBienvenidaDisabled && exp === 'Bienvenida / Onboarding'} className="mr-2 rounded text-indigo-800 focus:ring-indigo-700" />
                    {exp}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wider">Tipo de Kit</h3>
              <div className="flex flex-col">
                {kitTypeFilters.map(kit => (
                  <label key={kit} className={`flex items-center mb-1 text-sm ${kit === 'Anchetas' && isAnchetasDisabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}>
                    <input type="checkbox" checked={selectedKitTypes.includes(kit)} onChange={() => toggleFilter(setSelectedKitTypes, kit)} disabled={isAnchetasDisabled && kit === 'Anchetas'} className="mr-2 rounded text-indigo-800 focus:ring-indigo-700" />
                    {kit}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wider">Presupuesto</h3>
              <div className="flex flex-col">
                {priceFilters.map(p => (
                  <label key={p.category} className="flex items-center mb-1 text-sm cursor-pointer">
                    <input type="checkbox" checked={selectedPrice.includes(p.category)} onChange={() => toggleFilter(setSelectedPrice, p.category)} className="mr-2 rounded text-indigo-800 focus:ring-indigo-700" />
                    {p.label}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 text-sm text-gray-600 font-medium">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'producto encontrado' : 'productos encontrados'}
        </div>

        <div className="catalog-grid-container">
          {filteredProducts.map(product => (
            <ProductCardForCatalog key={product.id} product={product} onCardClick={() => onProductClick(product)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegalaProCatalog;
