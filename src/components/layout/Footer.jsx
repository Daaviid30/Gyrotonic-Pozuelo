import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>GYROTONIC<span className="logo-suffix-white">POZUELO</span></h3>
                    <p>Movimiento inteligente para una vida mejor.</p>
                </div>

                <div className="footer-links">
                    <h4>Enlaces</h4>
                    <ul>
                        <li><a href="#method">Método</a></li>
                        <li><a href="#services">Servicios</a></li>
                        <li><a href="#team">Equipo</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </div>

                <div className="footer-legal">
                    <p>&copy; {new Date().getFullYear()} Gyrotonic Pozuelo. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
