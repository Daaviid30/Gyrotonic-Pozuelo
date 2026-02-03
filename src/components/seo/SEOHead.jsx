import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';

/**
 * SEOHead - Componente reutilizable para gestionar metadata SEO
 * @param {string} title - Título de la página
 * @param {string} description - Descripción meta
 * @param {string} keywords - Keywords separadas por comas
 * @param {string} canonical - URL canónica
 * @param {string} ogImage - URL de imagen para Open Graph
 * @param {string} ogType - Tipo de contenido OG (default: website)
 */
const SEOHead = ({
    title = "GYROTONIC Pozuelo - Centro Especializado en Madrid",
    description = "Centro GYROTONIC® en Pozuelo de Alarcón, Madrid. Método único de movimiento tridimensional para fortalecer, rehabilitar y transformar tu cuerpo sin impacto articular.",
    keywords = "gyrotonic pozuelo, gyrotonic madrid, ejercicio tridimensional, rehabilitación columna, dolor espalda madrid, entrenamiento funcional pozuelo, gyrotonic españa, pilates pozuelo alternativo",
    canonical = "https://gyrotonic-pozuelo.com",
    ogImage = "/images/og-image.jpg",
    ogType = "website"
}) => {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Canonical URL */}
            <link rel="canonical" href={canonical} />

            {/* Language */}
            <meta httpEquiv="content-language" content="es-ES" />
            <html lang="es" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:site_name" content="GYROTONIC Pozuelo" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonical} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />

            {/* Geo Tags para búsqueda local */}
            <meta name="geo.region" content="ES-M" />
            <meta name="geo.placename" content="Pozuelo de Alarcón" />
            <meta name="geo.position" content="40.4378;-3.8115" />
            <meta name="ICBM" content="40.4378, -3.8115" />

            {/* Robots */}
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        </Helmet>
    );
};

export default SEOHead;
