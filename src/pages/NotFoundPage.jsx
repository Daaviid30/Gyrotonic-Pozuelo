import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { SITE } from '../config/site';
import './NotFoundPage.css';

const NotFoundPage = () => (
    <section className="not-found">
        <SEOHead title={`Página no encontrada | ${SITE.shortName}`} description="La página solicitada no existe." noIndex />
        <div className="not-found-card">
            <span className="not-found-code">404</span>
            <h1>Esta página no existe</h1>
            <p>Vuelve al inicio o cuéntanos qué estás buscando y te orientamos.</p>
            <div className="not-found-actions">
                <Link to="/" className="btn btn-primary">Volver al inicio</Link>
                <Link to="/#contact" className="btn btn-outline">Contactar</Link>
            </div>
        </div>
    </section>
);

export default NotFoundPage;
