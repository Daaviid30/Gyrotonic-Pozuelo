import React from 'react';
import { Instagram, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MAP_DIRECTIONS_URL, SITE } from '../../config/site';
import './Footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="container footer-content">
            <div className="footer-brand">
                <img
                    className="footer-logo"
                    src="/logos/logo-gyrotonic-pozuelo-blanco-turquesa.png"
                    alt="Gyrotonic Pozuelo"
                    width="450"
                    height="510"
                    loading="lazy"
                />
                <p>Movimiento consciente, atención cercana y sesiones de 60 minutos en Pozuelo de Alarcón.</p>
            </div>

            <div className="footer-links">
                <h3>Explora</h3>
                <ul>
                    <li><Link to="/#method">Método</Link></li>
                    <li><Link to="/#services">Servicios</Link></li>
                    <li><Link to="/equipo">Equipo</Link></li>
                    <li><Link to="/testimonios">Testimonios</Link></li>
                    <li><Link to="/precios">Precios</Link></li>
                    <li><Link to="/#contact">Contacto</Link></li>
                </ul>
            </div>

            <div className="footer-links footer-contact">
                <h3>Encuéntranos</h3>
                <ul>
                    <li><a href={`tel:${SITE.phoneHref}`}><Phone size={17} aria-hidden="true" />{SITE.phoneDisplay}</a></li>
                    <li><a href={MAP_DIRECTIONS_URL} target="_blank" rel="noreferrer"><MapPin size={17} aria-hidden="true" />Avenida de Europa 7</a></li>
                    <li><a href={SITE.instagram} target="_blank" rel="noreferrer"><Instagram size={17} aria-hidden="true" />Instagram</a></li>
                </ul>
            </div>

            <div className="footer-legal">
                <p>© {new Date().getFullYear()} Gyrotonic Pozuelo.</p>
                <nav aria-label="Enlaces legales">
                    <Link to="/aviso-legal">Aviso legal</Link>
                    <Link to="/privacidad">Privacidad</Link>
                    <Link to="/cookies">Cookies</Link>
                </nav>
            </div>
        </div>
    </footer>
);

export default Footer;
