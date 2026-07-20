import React from 'react';
import { PRICING } from '../../constants/pricing';
import { instructors } from '../../constants/team';
import { SITE, SITE_ADDRESS, absoluteUrl } from '../../config/site';

const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    description: 'Centro especializado en GYROTONIC® en Pozuelo de Alarcón, con clases individuales y grupos de hasta cuatro personas en sesiones de 60 minutos.',
    url: SITE.url,
    telephone: SITE.phoneHref,
    priceRange: '€€',
    image: absoluteUrl('/images/web/grupo-reducido.jpg'),
    address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.locality,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postalCode,
        addressCountry: SITE.address.country,
    },
    openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '21:30',
    }],
    sameAs: [SITE.instagram],
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Clases de GYROTONIC® en Pozuelo',
    serviceType: 'Entrenamiento GYROTONIC®',
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: { '@type': 'City', name: SITE.address.locality },
    description: 'Sistema de movimiento tridimensional con Pulley Tower. Sesiones de 60 minutos, individuales o en grupos reducidos, adaptadas a la experiencia y los objetivos de cada persona.',
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Modalidades GYROTONIC®',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Pack de iniciación GYROTONIC®',
                    description: 'Cuatro sesiones privadas para aprender los patrones fundamentales y el manejo de la Pulley Tower.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Clases privadas GYROTONIC®',
                    description: 'Sesiones individuales con resistencia, ritmo y progresión personalizados.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Clases grupales GYROTONIC®',
                    description: 'Sesiones de 60 minutos en grupos de hasta cuatro personas.',
                },
            },
        ],
    },
};

const personSchemas = instructors.map((instructor) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.url}/equipo#${instructor.slug}`,
    name: instructor.name,
    jobTitle: instructor.role,
    description: instructor.summary,
    image: absoluteUrl(instructor.image),
    worksFor: { '@id': `${SITE.url}/#organization` },
    knowsAbout: instructor.specialties,
    hasCredential: instructor.certifications.map((certification) => ({
        '@type': 'EducationalOccupationalCredential',
        name: certification,
    })),
}));

const pricingFAQSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: '¿Por qué hay un pack de iniciación?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: `El pack incluye ${PRICING.initiation.sessions} clases privadas para conocer el método y aprender a utilizar la Pulley Tower antes de incorporarse a un grupo.`,
            },
        },
        {
            '@type': 'Question',
            name: '¿Cuánto cuestan las clases grupales?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'La cuota es de 100 € al mes por 4 clases o 190 € al mes por 8 clases. Los grupos tienen un máximo de 4 personas.',
            },
        },
        {
            '@type': 'Question',
            name: '¿Cuánto dura cada clase?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: SITE.sessionDuration,
            },
        },
        {
            '@type': 'Question',
            name: '¿La clase de prueba de 25 € se descuenta del pack de iniciación?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. La clase privada de prueba y el pack de iniciación son servicios independientes.',
            },
        },
    ],
};

const breadcrumbSchema = (label, path) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: label, item: absoluteUrl(path) },
    ],
});

const schemasByType = {
    all: [organizationSchema, serviceSchema],
    organization: [organizationSchema],
    service: [serviceSchema, breadcrumbSchema('Servicios', '/servicios')],
    method: [serviceSchema, breadcrumbSchema('Método GYROTONIC®', '/metodo')],
    team: [...personSchemas, breadcrumbSchema('Equipo', '/equipo')],
    testimonials: [breadcrumbSchema('Testimonios', '/testimonios')],
    pricing: [pricingFAQSchema, breadcrumbSchema('Precios y bonos', '/precios')],
};

const SchemaMarkup = ({ type = 'all' }) => {
    const schemas = schemasByType[type] ?? schemasByType.all;

    return schemas.map((schema, index) => (
        <script
            key={`${type}-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    ));
};

export { SITE_ADDRESS };
export default SchemaMarkup;
