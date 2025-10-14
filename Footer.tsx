import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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
                    <div className="footer__contact-item">
                        <FaPhone />
                        <span>+57 320 8713744</span>
                    </div>
                    <div className="footer__contact-item">
                        <FaEnvelope />
                        <span>ventas@detallescorporativos.com</span>
                    </div>
                    <div className="footer__contact-item">
                        <FaMapMarkerAlt />
                        <span>Gobernación de Cundinamarca, Cl. 26 #51-53, Bogotá</span>
                    </div>
                </div>
            </div>
            <div className="footer__bottom-bar">
                <div className="max-w-6xl mx-auto">
                    <div className="footer__copyright">
                        <p>Detalles Corporativos &copy; {currentYear} . Todos los derechos reservados.</p>
                        <p>Una marca de Asocia Tech SAS</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
