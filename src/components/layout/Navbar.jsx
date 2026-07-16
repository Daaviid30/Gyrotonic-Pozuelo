import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
    { name: 'Método', to: '/#method' },
    { name: 'Servicios', to: '/#services' },
    { name: 'Equipo', to: '/#team' },
    { name: 'Precios', to: '/#pricing' },
    { name: 'Contacto', to: '/#contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const isHome = pathname === '/';

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        if (!isMobileMenuOpen) return undefined;
        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setIsMobileMenuOpen(false);
        };
        document.addEventListener('keydown', closeOnEscape);
        return () => document.removeEventListener('keydown', closeOnEscape);
    }, [isMobileMenuOpen]);

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''} ${isHome ? '' : 'inner-page'}`}>
            <div className="container navbar-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    GYROTONIC<span className="logo-suffix">POZUELO</span>
                </Link>

                <nav className="desktop-nav" aria-label="Navegación principal">
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link to={link.to} className="nav-link">{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="/#contact" className="btn btn-primary">Solicitar primera sesión</Link>
                </nav>

                <button
                    type="button"
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen((open) => !open)}
                    aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-navigation"
                >
                    {isMobileMenuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
                </button>

                {isMobileMenuOpen && (
                    <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegación móvil">
                        <ul className="mobile-nav-links">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.to} onClick={closeMenu}>{link.name}</Link>
                                </li>
                            ))}
                            <li>
                                <Link to="/#contact" className="btn btn-primary" onClick={closeMenu}>
                                    Solicitar primera sesión
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Navbar;
