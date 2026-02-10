import React from 'react';
import { motion } from 'framer-motion';
import { Euro, Users2, User, Calendar, Clock, CheckCircle, Sparkles, HelpCircle } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import BackButton from '../components/ui/BackButton';
import SEOHead from '../components/seo/SEOHead';
import SchemaMarkup from '../components/seo/SchemaMarkup';
import './PricingPage.css';

const PricingPage = () => {
    const breadcrumbs = [
        { label: 'Inicio', path: '/' },
        { label: 'Precios y Bonos', path: '/precios' }
    ];

    const pricingOptions = [
        {
            icon: <Sparkles size={48} />,
            title: "Pack de Iniciación",
            subtitle: "Tu Primer Paso en GYROTONIC®",
            price: "175€",
            description: "Este pack es obligatorio para todos los nuevos alumnos. Antes de unirte a las clases grupales, necesitas aprender los fundamentos del método y el manejo seguro de la Pulley Tower. Es tu inversión inicial en movimiento inteligente.",
            features: [
                "4 Clases Privadas de iniciación: Sesiones individuales de 45-60 minutos donde aprenderás los patrones básicos del movimiento.",
                "Aprendizaje de la máquina: Dominarás el uso de la Pulley Tower con total seguridad y confianza.",
                "Valoración funcional completa: Analizamos tu postura, rango de movimiento y necesidades específicas para personalizar tu entrenamiento.",
                "Clase de Prueba disponible: Puedes probar una clase suelta por 25€, descontable del pack si decides continuar."
            ],
            idealFor: "Todas las personas que quieran iniciarse en GYROTONIC®, sin importar su nivel de forma física o experiencia previa.",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"
        },
        {
            icon: <Users2 size={48} />,
            title: "Clases en Grupo",
            subtitle: "Constancia y Energía Compartida",
            price: "100€ - 190€/mes",
            description: "Una vez completado el Pack de Iniciación, accedes a nuestras clases grupales reducidas. Ideal para mantener tu práctica regular con una inversión más accesible, mientras disfrutas de la energía motivadora del grupo.",
            features: [
                "1 día por semana (4 clases/mes): 100€/mes - Perfecto para mantener la movilidad y complementar otros entrenamientos.",
                "2 días por semana (8 clases/mes): 190€/mes - Ideal para resultados más profundos y constantes.",
                "Grupos reducidos (máx. 3-4 personas): Atención personalizada garantizada en cada sesión.",
            ],
            duration: "60 minutos por sesión",
            idealFor: "Alumnos que han completado el Pack de Iniciación, buscan constancia y disfrutan del ambiente grupal.",
            image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=800&auto=format&fit=crop"
        },
        {
            icon: <User size={48} />,
            title: "Entrenamiento Privado",
            subtitle: "Atención Exclusiva y Personalización Total",
            price: "Variable",
            description: "La experiencia premium de GYROTONIC®. Tú y tu instructor, uno a uno. Ideal para rehabilitación, objetivos deportivos específicos, o si simplemente prefieres la flexibilidad y privacidad de las sesiones individuales.",
            pricingOptions: [
                {
                    category: "Cuotas Mensuales",
                    description: "Tu rutina fija con pago recurrente y plaza asegurada",
                    items: [
                        "1 día/semana (4 clases): 190€/mes",
                        "2 días/semana (8 clases): 375€/mes"
                    ]
                },
                {
                    category: "Bonos Flexibles",
                    description: "Compra un pack y úsalo cuando quieras (caducidad 2 meses)",
                    items: [
                        "Bono 5 clases: 235€ (47€/clase)",
                        "Bono 10 clases: 470€ (47€/clase)"
                    ]
                },
                {
                    category: "Otras Opciones",
                    description: null,
                    items: [
                        "Clase suelta: 55€ - Sesiones puntuales sin compromiso",
                        "Diseño 100% personalizado según tus necesidades"
                    ]
                }
            ],
            duration: "60 minutos por sesión",
            idealFor: "Rehabilitación de lesiones, atletas de alto rendimiento, personas con poco tiempo o quienes buscan máxima privacidad.",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop"
        }
    ];

    const faqs = [
        {
            question: "¿Por qué es obligatorio el Pack de Iniciación?",
            answer: "GYROTONIC® utiliza una máquina específica (Pulley Tower) con patrones de movimiento únicos. El Pack de Iniciación garantiza que aprendas a usarla de forma segura y eficaz, además de permitirnos conocer tu cuerpo y adaptar las clases a tus necesidades. Es la base para aprovechar al máximo las clases grupales."
        },
        {
            question: "¿Puedo combinar diferentes tipos de clases?",
            answer: "Por supuesto. Muchos alumnos combinan clases grupales para mantener su práctica regular con clases privadas puntuales cuando necesitan trabajar algo específico o tienen una lesión. Te asesoraremos sobre la mejor combinación según tus objetivos."
        },
        {
            question: "¿Qué caducidad tienen los bonos?",
            answer: "Los bonos de clases privadas tienen una caducidad de 2 meses desde la fecha de compra. Esto asegura que mantengas la continuidad de tu práctica, que es clave para obtener resultados."
        }
    ];

    return (
        <div className="pricing-page">
            {/* SEO Optimization */}
            <SEOHead
                title="Precios GYROTONIC® Pozuelo | Tarifas y Bonos Madrid"
                description="Consulta nuestras tarifas de GYROTONIC® en Pozuelo: Pack de Iniciación 175€, Clases Grupales desde 100€/mes, Clases Privadas y Bonos flexibles. Inversión en tu salud con opciones para todos."
                keywords="precios gyrotonic pozuelo, tarifas gyrotonic madrid, bonos gyrotonic, clases privadas precio, clases grupales precio, pack iniciación gyrotonic, cuánto cuesta gyrotonic pozuelo"
                canonical="https://gyrotonic-pozuelo.com/precios"
                ogType="website"
            />
            <SchemaMarkup type="pricing" />
            <PageHero
                title="Precios y Bonos"
                subtitle="Invierte en tu salud con tarifas flexibles y transparentes"
                breadcrumbs={breadcrumbs}
            />

            <div className="container">
                <BackButton />

                {/* Introducción */}
                <motion.section
                    className="pricing-intro"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title-page">Tarifas Claras y Sin Sorpresas</h2>
                    <p className="intro-text">
                        Creemos en la transparencia total. Aquí encontrarás todos nuestros precios detallados, desde el Pack de Iniciación obligatorio hasta las opciones de continuidad en grupo o privado. Elige la modalidad que mejor se adapte a tu ritmo y objetivos.
                    </p>
                </motion.section>

                {/* Opciones de Pricing Detalladas */}
                <section className="detailed-pricing">
                    {pricingOptions.map((option, index) => (
                        <motion.div
                            key={index}
                            className={`pricing-detail ${index % 2 === 1 ? 'reverse' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="pricing-detail-image">
                                <img src={option.image} alt={option.title} />
                                <div className="pricing-overlay">
                                    <div className="pricing-icon-large">{option.icon}</div>
                                </div>
                            </div>
                            <div className="pricing-detail-content">
                                <h3 className="pricing-detail-title">{option.title}</h3>
                                <p className="pricing-detail-subtitle">{option.subtitle}</p>
                                <div className="pricing-detail-price">
                                    <Euro size={24} />
                                    <span>{option.price}</span>
                                </div>
                                <p className="pricing-detail-description">{option.description}</p>

                                <div className="pricing-features">
                                    <h4 className="features-title">¿Qué incluye?</h4>

                                    {option.features && (
                                        <ul className="features-list">
                                            {option.features.map((feature, i) => {
                                                const [title, ...rest] = feature.split(':');
                                                const description = rest.join(':');

                                                return (
                                                    <li key={i} className="feature-item">
                                                        <CheckCircle size={18} />
                                                        <span>
                                                            <span className="feature-title-bold">{title}</span>
                                                            {description && `:${description}`}
                                                        </span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}

                                    {option.pricingOptions && (
                                        <div className="pricing-options-grid">
                                            {option.pricingOptions.map((pricingOpt, i) => (
                                                <div key={i} className="pricing-option-block">
                                                    <h5 className="pricing-option-category">{pricingOpt.category}</h5>
                                                    {pricingOpt.description && (
                                                        <p className="pricing-option-desc">{pricingOpt.description}</p>
                                                    )}
                                                    <ul className="pricing-option-items">
                                                        {pricingOpt.items.map((item, j) => (
                                                            <li key={j}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="pricing-meta">
                                    {option.duration && (
                                        <div className="meta-item">
                                            <Clock size={20} />
                                            <span><strong>Duración:</strong> {option.duration}</span>
                                        </div>
                                    )}
                                    <div className="meta-item">
                                        <Calendar size={20} />
                                        <span><strong>Ideal para:</strong> {option.idealFor}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* FAQ Section */}
                <section className="faq-section">
                    <h2 className="section-title-page text-center">Preguntas Frecuentes</h2>
                    <p className="section-subtitle-page">
                        Resolvemos tus dudas sobre precios y formatos
                    </p>
                    <div className="faq-grid">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className="faq-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="faq-icon">
                                    <HelpCircle size={28} />
                                </div>
                                <h3 className="faq-question">{faq.question}</h3>
                                <p className="faq-answer">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <motion.section
                    className="pricing-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="cta-title">¿Listo para Empezar?</h2>
                    <p className="cta-text">
                        Contáctanos y te ayudaremos a elegir la mejor opción para ti. Comienza tu viaje con GYROTONIC® hoy mismo.
                    </p>
                    <a href="/#contact" className="btn btn-primary cta-button">
                        Reserva tu Clase de Prueba
                    </a>
                </motion.section>

                <BackButton />
            </div>
        </div>
    );
};

export default PricingPage;
