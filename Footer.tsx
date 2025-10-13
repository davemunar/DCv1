import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__main-content max-w-6xl mx-auto">
                <div className="footer__column">
                    <h4 className="footer__heading">Catálogo</h4>
                    <ul className="footer__links">
                        <li><Link to="/product/kits-empresariales">Kits Empresariales</Link></li>
                        <li><Link to="/product/anchetas-gourmet">Anchetas Gourmet</Link></li>
                        <li><Link to="/product/productos-personalizados">Productos Personalizados</Link></li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h4 className="footer__heading">Información</h4>
                    <ul className="footer__links">
                        <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
                        <li><Link to="/politicas">Políticas de Entrega</Link></li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h4 className="footer__heading">Contacto</h4>
                    <p>Teléfono: +57 318 6060606</p>
                    <p>Correo: info@detallescorporativos.com</p>
                    <p>Dirección: Bogotá, Colombia</p>
                </div>
            </div>
            <div className="footer__bottom-bar">
                <div className="max-w-6xl mx-auto">
                    <div className="footer__copyright">
                        <p>&copy; {currentYear} Detalles Corporativos. Todos los derechos reservados.</p>
                        <p>Una marca de Asocia Tech SAS</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
