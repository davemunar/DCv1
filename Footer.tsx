import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__socials">
                    <ul className="footer__socials-list">
                        <li><a href="#" className="footer__social-link" aria-label="Facebook">FACEBOOK</a></li>
                        <li><a href="#" className="footer__social-link" aria-label="Instagram">INSTAGRAM</a></li>
                        <li><a href="#" className="footer__social-link" aria-label="WhatsApp">WHATSAPP</a></li>
                    </ul>
                </div>
                <div className="footer__copyright">
                    <p>&copy; {currentYear} Detalles Corporativos. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
