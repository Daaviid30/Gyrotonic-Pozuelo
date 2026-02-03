import React from 'react';

/**
 * SchemaMarkup - Componente para agregar Schema.org structured data
 * Ayuda a Google a entender mejor el contenido y aparecer en rich snippets
 */
const SchemaMarkup = ({ type = "all" }) => {
    // Schema de Organización
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://gyrotonic-pozuelo.com/#organization",
        "name": "GYROTONIC Pozuelo",
        "description": "Centro especializado en método GYROTONIC® en Pozuelo de Alarcón, Madrid. Entrenamiento tridimensional sin impacto para rehabilitación, fortalecimiento y bienestar integral.",
        "url": "https://gyrotonic-pozuelo.com",
        "telephone": "+34-XXX-XXX-XXX", // TODO: Actualizar con teléfono real
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Calle Ejemplo 123", // TODO: Actualizar dirección real
            "addressLocality": "Pozuelo de Alarcón",
            "addressRegion": "Madrid",
            "postalCode": "28223",
            "addressCountry": "ES"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.4378,
            "longitude": -3.8115
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "21:00"
            }
        ],
        "sameAs": [
            // TODO: Agregar redes sociales cuando estén disponibles
            // "https://www.facebook.com/gyrotonic-pozuelo",
            // "https://www.instagram.com/gyrotonic-pozuelo"
        ]
    };

    // Schema de Servicio GYROTONIC
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "GYROTONIC® Training",
        "provider": {
            "@id": "https://gyrotonic-pozuelo.com/#organization"
        },
        "areaServed": {
            "@type": "City",
            "name": "Madrid"
        },
        "description": "Método GYROTONIC® - Sistema revolucionario de movimiento tridimensional que fusiona danza, yoga, tai chi y natación. Ideal para rehabilitación, fortalecimiento muscular, mejora de postura y bienestar integral sin impacto articular.",
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios GYROTONIC",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Clases Individuales GYROTONIC",
                        "description": "Sesiones personalizadas uno a uno adaptadas a tus objetivos"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Clases Grupales GYROTONIC",
                        "description": "Sesiones en grupos reducidos para máxima atención"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Rehabilitación y Fisioterapia",
                        "description": "Recuperación de lesiones y alivio de dolores crónicos"
                    }
                }
            ]
        }
    };

    // Schema de BreadcrumbList (para páginas internas)
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://gyrotonic-pozuelo.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Método GYROTONIC",
                "item": "https://gyrotonic-pozuelo.com/method"
            }
        ]
    };

    // Determinar qué schemas incluir
    const getSchemas = () => {
        switch (type) {
            case "organization":
                return [organizationSchema];
            case "service":
                return [serviceSchema];
            case "breadcrumb":
                return [breadcrumbSchema];
            case "method":
                return [serviceSchema, breadcrumbSchema];
            case "all":
            default:
                return [organizationSchema, serviceSchema];
        }
    };

    const schemas = getSchemas();

    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
};

export default SchemaMarkup;
