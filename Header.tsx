import React, { useState } from 'react';

// Base64 encoded logo
const logoSrc = "/imagenes/DCiso.png";
const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { name: 'Kits', href: '#' },
        { name: 'Anchetas', href: '#' },
        { name: 'Personalizados', href: '#' },
        { name: 'Contacto', href: '#' },
    ];

    return (
        <header className="header">
            <a href="#" className="header__logo-link">
                <img src={logoSrc} alt="Detalles Corporativos Logo" className="header__logo" />
                <div className="header__logotext">
                    <span className="header__logotext--details">Detalles</span>
                    <span className="header__logotext--corp">Corporativos</span>
                </div>
            </a>
            <nav className="header__nav" aria-label="Main navigation">
                <ul className="header__nav-list">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="header__nav-link">{link.name}</a>
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
                               <a href={link.href} className="header__nav-link" onClick={() => setIsMenuOpen(false)}>{link.name}</a>
                           </li>
                       ))}
                   </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
