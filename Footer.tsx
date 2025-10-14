import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGift, FaShoppingBasket, FaRegistered } from 'react-icons/fa';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__main-content max-w-6xl mx-auto">
                <div className="footer__column">
                    <h2 className="footer__heading">Catálogo 2025</h2>
                    <ul className="footer__links footer__links--icons">
                        <li className="footer__link-item">
                            <FaGift />
                            <Link to="/product/kits-empresariales">Kits Empresariales</Link>
                        </li>
                        <li className="footer__link-item">
                            <FaShoppingBasket />
                            <Link to="/product/anchetas-gourmet">Anchetas Gourmet</Link>
                        </li>
                        <li className="footer__link-item">
                            <FaRegistered />
                            <Link to="/product/productos-personalizados">Productos Personalizados</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3 className="footer__heading">Información</h3>
                    <ul className="footer__links">
                        <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
                        <li><Link to="/politicas">Políticas de Entrega y Devoluciones</Link></li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h4 className="footer__heading">Contacto</h4>
                    <div className="footer__contact-item">
                        <FaPhone />
                        <a href="tel:+573208713744" className="footer__contact-link">+57 320 8713744</a>
                    </div>
                    <div className="footer__contact-item">
                        <FaEnvelope />
                        <a href="mailto:ventas@detallescorporativos.com" className="footer__contact-link">ventas@detallescorporativos.com</a>
                    </div>
                    <div className="footer__contact-item">
                        <FaMapMarkerAlt />
                        <span>Gobernación de Cundinamarca, Cl. 26 #51-53,<br />Bogotá, Colombia.</span>
                    
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
