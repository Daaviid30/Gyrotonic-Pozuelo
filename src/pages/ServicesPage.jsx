import React from 'react';
import { motion } from 'framer-motion';
import { User, Users2, HeartPulse, Wind, Clock, Target, CheckCircle } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import BackButton from '../components/ui/BackButton';
import './ServicesPage.css';

const ServicesPage = () => {
    const breadcrumbs = [
        { label: 'Inicio', path: '/' },
        { label: 'Nuestros Servicios', path: '/services' }
    ];

    const services = [
        {
            icon: <User size={48} />,
            title: "Clases Individuales",
            subtitle: "Atención 100% Personalizada",
            description: "Las sesiones individuales son la forma más profunda y efectiva de experimentar GYROTONIC®. Tu instructor diseña cada clase específicamente para ti, adaptándose a tus necesidades, objetivos y ritmo de progreso.",
            features: [
                "Evaluación inicial completa de tu postura y movimiento",
                "Programa personalizado según tus objetivos",
                "Corrección detallada en tiempo real",
                "Progresión adaptada a tu ritmo",
                "Ideal para principiantes o necesidades específicas",
                "Máxima atención a la técnica y seguridad"
            ],
            duration: "60 minutos",
            idealFor: "Personas con lesiones, objetivos específicos, o que buscan la máxima personalización",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"
        },
        {
            icon: <Users2 size={48} />,
            title: "Clases Dúo",
            subtitle: "Comparte la Experiencia",
            description: "Entrena con un amigo, pareja o familiar en un formato semi-privado. Mantiene la atención personalizada mientras creas un ambiente dinámico y motivador compartido.",
            features: [
                "Máximo 2 personas por sesión",
                "Programa adaptado a ambos participantes",
                "Atención personalizada para cada uno",
                "Motivación compartida",
                "Ideal para parejas o amistades",
                "Precio más accesible que las individuales"
            ],
            duration: "60 minutos",
            idealFor: "Parejas, amigos o familiares que quieren entrenar juntos",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop"
        },
        {
            icon: <HeartPulse size={48} />,
            title: "Rehabilitación",
            subtitle: "Recupera tu Movilidad",
            description: "Enfoque terapéutico especializado para recuperación de lesiones, post-operatorios y dolor crónico. Trabajamos en colaboración con tu tratamiento médico para acelerar tu recuperación de forma segura.",
            features: [
                "Enfoque sin impacto ideal para lesiones",
                "Trabajo específico en áreas problemáticas",
                "Descompresión articular y alivio del dolor",
                "Recuperación progresiva y segura",
                "Complementa tratamientos de fisioterapia",
                "Especialmente efectivo en columna, hombros y caderas"
            ],
            duration: "60 minutos (sesiones individuales)",
            idealFor: "Personas con lesiones de espalda, hernias, post-operatorios, dolores crónicos",
            image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=800&auto=format&fit=crop"
        },
        {
            icon: <Wind size={48} />,
            title: "GYROKINESIS®",
            subtitle: "Fluidez sin Máquinas",
            description: "El formato original del método creado por Juliu Horvath. Clases grupales donde el propio cuerpo es la resistencia. Movimientos fluidos en taburete y suelo sincronizados con la respiración.",
            features: [
                "Clases grupales (máximo 8 personas)",
                "No requiere equipamiento especializado",
                "Secuencias rítmicas y meditativas",
                "Énfasis en respiración consciente",
                "Mejora flexibilidad y movilidad articular",
                "Fortalecimiento del core y estabilidad"
            ],
            duration: "75 minutos",
            idealFor: "Personas que buscan clases grupales, movilidad funcional y bienestar integral",
            image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop"
        }
    ];

    const process = [
        {
            step: "1",
            title: "Primera Consulta",
            description: "Conversamos sobre tus objetivos, historial médico y necesidades específicas. Esta consulta es gratuita y sin compromiso."
        },
        {
            step: "2",
            title: "Evaluación Inicial",
            description: "En tu primera sesión, evaluamos tu postura, movilidad y patrones de movimiento para crear tu programa personalizado."
        },
        {
            step: "3",
            title: "Programa Personalizado",
            description: "Diseñamos un plan de entrenamiento adaptado a ti, con objetivos claros y progresión estructurada."
        },
        {
            step: "4",
            title: "Seguimiento Continuo",
            description: "Ajustamos y evolucionamos tu programa según tu progreso, asegurando resultados constantes."
        }
    ];

    return (
        <div className="services-page">
            <PageHero
                title="Nuestros Servicios"
                subtitle="Encuentra el formato perfecto para tu camino hacia el bienestar"
                breadcrumbs={breadcrumbs}
            />

            <div className="container">
                <BackButton />

                {/* Introducción */}
                <motion.section
                    className="services-intro"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title-page">Elige Tu Camino</h2>
                    <p className="intro-text">
                        Ofrecemos diferentes formatos para que encuentres el que mejor se adapte a tus necesidades, objetivos y estilo de vida. Todos nuestros servicios están impartidos por instructores certificados con años de experiencia.
                    </p>
                </motion.section>

                {/* Servicios Detallados */}
                <section className="detailed-services">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`service-detail ${index % 2 === 1 ? 'reverse' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="service-detail-image">
                                <img src={service.image} alt={service.title} />
                                <div className="service-overlay">
                                    <div className="service-icon-large">{service.icon}</div>
                                </div>
                            </div>
                            <div className="service-detail-content">
                                <h3 className="service-detail-title">{service.title}</h3>
                                <p className="service-detail-subtitle">{service.subtitle}</p>
                                <p className="service-detail-description">{service.description}</p>

                                <div className="service-features">
                                    <h4 className="features-title">¿Qué incluye?</h4>
                                    <ul className="features-list">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="feature-item">
                                                <CheckCircle size={18} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="service-meta">
                                    <div className="meta-item">
                                        <Clock size={20} />
                                        <span><strong>Duración:</strong> {service.duration}</span>
                                    </div>
                                    <div className="meta-item">
                                        <Target size={20} />
                                        <span><strong>Ideal para:</strong> {service.idealFor}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Proceso */}
                <section className="process-section">
                    <h2 className="section-title-page text-center">¿Cómo Empezar?</h2>
                    <p className="section-subtitle-page">
                        Tu viaje con GYROTONIC® comienza con estos sencillos pasos
                    </p>
                    <div className="process-grid">
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                className="process-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="process-step">{item.step}</div>
                                <h3 className="process-title">{item.title}</h3>
                                <p className="process-description">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <motion.section
                    className="services-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="cta-title">¿Tienes Dudas?</h2>
                    <p className="cta-text">
                        Estamos aquí para ayudarte a elegir el servicio perfecto para ti. Contáctanos y te asesoraremos sin compromiso.
                    </p>
                    <a href="/#contact" className="btn btn-primary cta-button">
                        Contáctanos
                    </a>
                </motion.section>

                <BackButton />
            </div>
        </div>
    );
};

export default ServicesPage;
