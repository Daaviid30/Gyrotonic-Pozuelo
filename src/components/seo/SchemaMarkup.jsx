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

    // Schema de Personas (Instructores)
    const personSchemas = [
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "María José Cruz",
            "jobTitle": "Co-Directora e Instructora Certificada GYROTONIC®",
            "description": "Instructora certificada de GYROTONIC® con formación en Ballet clásico, Arte Dramático y Danza, especializada en trabajo con bailarines, atletas y salud pélvica.",
            "knowsAbout": ["GYROTONIC®", "Ballet", "Pilates", "Rehabilitación", "Salud Pélvica"],
            "hasCredential": [
                "GYROTONIC® Trainer Level 1",
                "GYROTONIC® Pelvic Girdle y Jumping Stretching Board",
                "Licenciada en Arte Dramático y Danza",
                "Instructora de Pilates: Suelo, Máquinas y Rehabilitación"
            ],
            "worksFor": {
                "@id": "https://gyrotonic-pozuelo.com/#organization"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Antonio Castro",
            "jobTitle": "Co-Director y Entrenador Certificado GYROTONIC®",
            "description": "Entrenador certificado GYROTONIC® Level 1 & 2, Diplomado en Osteopatía, especializado en visión osteopática, prevención de lesiones y optimización del rendimiento físico.",
            "knowsAbout": ["GYROTONIC®", "Osteopatía", "Fisioterapia", "Pilates", "Prevención de Lesiones"],
            "hasCredential": [
                "GYROTONIC® Trainer Level 1 & Level 2",
                "Diplomado en Osteopatía: Escuela Diaphragma",
                "Instructor de Pilates Terapéutico",
                "Certificado en Quiromasaje, Drenaje Linfático y Kinesiotape"
            ],
            "worksFor": {
                "@id": "https://gyrotonic-pozuelo.com/#organization"
            }
        }
    ];

    // Schema de Reviews (Testimonios)
    const reviewSchemas = [
        {
            "@context": "https://schema.org",
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "Meritxel"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody": "Antes tenía que ir al fisio una vez al mes para descontracturar la espalda. Desde que estoy con ellos, no he vuelto a ir. Me han cambiado los hábitos posturales.",
            "itemReviewed": {
                "@type": "LocalBusiness",
                "@id": "https://gyrotonic-pozuelo.com/#organization",
                "name": "GYROTONIC Pozuelo"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "Macarena"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody": "El dolor ha desaparecido y noto que me ha cambiado el cuerpo. He apuntado a mi hija de 15 años y está encantada. Son 100% recomendables.",
            "itemReviewed": {
                "@type": "LocalBusiness",
                "@id": "https://gyrotonic-pozuelo.com/#organization",
                "name": "GYROTONIC Pozuelo"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "Bárbara"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody": "Son los mejores profesores que he tenido en 10 años. Lo que les diferencia es cómo cuidan los detalles. Es difícil encontrar hoy en día profesionales con tanto rigor.",
            "itemReviewed": {
                "@type": "LocalBusiness",
                "@id": "https://gyrotonic-pozuelo.com/#organization",
                "name": "GYROTONIC Pozuelo"
            }
        }
    ];

    // Schema de FAQPage (para página de precios)
    const pricingFAQSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Por qué es obligatorio el Pack de Iniciación?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "GYROTONIC® utiliza una máquina específica (Pulley Tower) con patrones de movimiento únicos. El Pack de Iniciación garantiza que aprendas a usarla de forma segura y eficaz, además de permitirnos conocer tu cuerpo y adaptar las clases a tus necesidades. Es la base para aprovechar al máximo las clases grupales."
                }
            },
            {
                "@type": "Question",
                "name": "¿Puedo combinar diferentes tipos de clases?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Por supuesto. Muchos alumnos combinan clases grupales para mantener su práctica regular con clases privadas puntuales cuando necesitan trabajar algo específico o tienen una lesión. Te asesoraremos sobre la mejor combinación según tus objetivos."
                }
            },
            {
                "@type": "Question",
                "name": "¿Qué caducidad tienen los bonos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Los bonos de clases privadas tienen una caducidad de 2 meses desde la fecha de compra. Esto asegura que mantengas la continuidad de tu práctica, que es clave para obtener resultados."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cuál es el precio del Pack de Iniciación GYROTONIC en Pozuelo?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El Pack de Iniciación tiene un precio de 175€ e incluye 4 clases privadas de iniciación, aprendizaje de la Pulley Tower y una valoración funcional completa. Puedes probar una clase suelta por 25€ descontable del pack."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cuánto cuestan las clases grupales de GYROTONIC?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Las clases grupales tienen un precio de 100€/mes para 1 día por semana (4 clases/mes) o 190€/mes para 2 días por semana (8 clases/mes). Los grupos son reducidos con máximo 3-4 personas para garantizar atención personalizada."
                }
            }
        ]
    };

    // Schema de BreadcrumbList (para páginas internas)
    const methodBreadcrumbSchema = {
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

    const servicesBreadcrumbSchema = {
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
                "name": "Servicios",
                "item": "https://gyrotonic-pozuelo.com/services"
            }
        ]
    };

    const teamBreadcrumbSchema = {
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
                "name": "Equipo",
                "item": "https://gyrotonic-pozuelo.com/team"
            }
        ]
    };

    const testimonialsBreadcrumbSchema = {
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
                "name": "Testimonios",
                "item": "https://gyrotonic-pozuelo.com/testimonials"
            }
        ]
    };

    const pricingBreadcrumbSchema = {
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
                "name": "Precios y Bonos",
                "item": "https://gyrotonic-pozuelo.com/precios"
            }
        ]
    };

    // Determinar qué schemas incluir
    const getSchemas = () => {
        switch (type) {
            case "organization":
                return [organizationSchema];
            case "service":
                return [serviceSchema, servicesBreadcrumbSchema];
            case "breadcrumb":
                return [methodBreadcrumbSchema];
            case "method":
                return [serviceSchema, methodBreadcrumbSchema];
            case "team":
                return [...personSchemas, teamBreadcrumbSchema];
            case "testimonials":
                return [...reviewSchemas, testimonialsBreadcrumbSchema];
            case "pricing":
                return [pricingFAQSchema, pricingBreadcrumbSchema];
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
