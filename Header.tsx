import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logoSrc from './src/assets/imagenes/DCiso.png';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { name: 'Kits', href: '/product/kits-empresariales' },
        { name: 'Anchetas', href: '/product/anchetas-gourmet' },
        { name: 'Personalizados', href: '/product/productos-personalizados' },
        { name: 'Contacto', href: '/contact' },
    ];

    return (
        <header className="header">
            <Link to="/" className="header__logo-link">
                <img src={logoSrc} alt="Detalles Corporativos Logo" className="header__logo" />
                <div className="header__logotext">
                    <span className="header__logotext--details">Detalles</span>
                    <span className="header__logotext--corp">Corporativos</span>
                </div>
            </Link>
            <nav className="header__nav" aria-label="Main navigation">
                <ul className="header__nav-list">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link to={link.href} className="header__nav-link">{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <button className="header__menu-icon" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
                &#9776; {/* Hamburger Icon */}
            </button>
            <div className={`header__mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                <nav aria-label="Mobile navigation">
                   <ul className="header__nav-list">
                       {navLinks.map((link) => (
                           <li key={link.name}>
                               <Link to={link.href} className="header__nav-link" onClick={() => setIsMenuOpen(false)}>{link.name}</Link>
                           </li>
                       ))}
                   </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
