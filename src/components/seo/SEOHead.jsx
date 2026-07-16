import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { SITE, absoluteUrl } from '../../config/site';

const DEFAULT_DESCRIPTION = 'Clases de GYROTONIC® individuales y en grupos reducidos en Pozuelo de Alarcón. Sesiones de 60 minutos con acompañamiento cercano y adaptado.';

const SEOHead = ({
    title = 'GYROTONIC® Pozuelo | Movimiento y atención personalizada',
    description = DEFAULT_DESCRIPTION,
    canonical = '/',
    ogImage = '/images/clase.jpg',
    ogType = 'website',
    noIndex = false,
}) => {
    const canonicalUrl = canonical.startsWith('http') ? canonical : absoluteUrl(canonical);
    const imageUrl = ogImage.startsWith('http') ? ogImage : absoluteUrl(ogImage);

    return (
        <Helmet>
            <html lang="es" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="author" content={SITE.shortName} />
            <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
            <link rel="canonical" href={canonicalUrl} />

            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:alt" content="Clase en Gyrotonic Pozuelo" />
            <meta property="og:locale" content={SITE.locale} />
            <meta property="og:site_name" content={SITE.shortName} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
            <meta name="theme-color" content="#0f766e" />
        </Helmet>
    );
};

export default SEOHead;
