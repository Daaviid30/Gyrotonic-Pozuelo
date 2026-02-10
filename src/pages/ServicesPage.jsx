import React from 'react';
import { motion } from 'framer-motion';
import { User, Users2, HeartPulse, Wind, Clock, Target, CheckCircle, ClipboardCheck } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import BackButton from '../components/ui/BackButton';
import SEOHead from '../components/seo/SEOHead';
import SchemaMarkup from '../components/seo/SchemaMarkup';
import './ServicesPage.css';

const ServicesPage = () => {
    const breadcrumbs = [
        { label: 'Inicio', path: '/' },
        { label: 'Nuestros Servicios', path: '/services' }
    ];

    const services = [
        {
            icon: <ClipboardCheck size={48} />,
            title: "Pack de Iniciación",
            subtitle: "Comienza tu Viaje con Sólidas Bases",
            description: "Es el punto de partida obligatorio y esencial para todos los nuevos alumnos. Antes de unirte a un grupo, necesitamos que tu cuerpo entienda el lenguaje de la máquina y los principios del movimiento. Es un periodo de aprendizaje y autodescubrimiento.",
            features: [
                "1 Clase de Prueba + 4 Sesiones Fundamentales: Un recorrido completo por los básicos del sistema.",
                "Diagnóstico Corporal: Analizamos tu postura, lesiones previas y condición física actual para personalizar tu futuro entrenamiento.",
                "Manejo de la Pulley Tower: Aprenderás a usar la máquina y a moverte con seguridad.",
                "Atención 1 a 1: Un instructor dedicado exclusivamente a ti durante este proceso."
            ],
            duration: "60 minutos",
            idealFor: "Cualquier persona que se inicie en GYROTONIC®, independientemente de su nivel previo en otros deportes.",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"
        },
        {
            icon: <User size={48} />,
            title: "Clases Privadas",
            subtitle: "Máxima Precisión y Personalización",
            description: "La experiencia premium de GYROTONIC®. En estas sesiones, toda la atención del instructor está centrada en ti. Es el espacio donde pulimos detalles, tratamos dolencias específicas y avanzamos más rápido hacia tus objetivos.",
            features: [
                "Diseño a Medida: Cada ejercicio se selecciona según cómo te sientas ese día y tus metas a largo plazo.",
                "Enfoque Terapéutico: Ideal si necesitas rehabilitar lesiones (hernias, post-operatorios) o aliviar dolores crónicos.",
                "Corrección Milimétrica: Ajustes táctiles constantes para asegurar la máxima eficacia del movimiento.",
                "Horario Flexible: Adaptado totalmente a tu agenda."
            ],
            duration: "60 minutos",
            idealFor: "Quienes buscan rehabilitación, atletas que quieren mejorar técnica, o personas que prefieren la exclusividad y privacidad.",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop"
        },
        {
            icon: <Users2 size={48} />,
            title: "Clases en Grupo",
            subtitle: "Fluidez y Energía Compartida",
            description: "Una vez completado el Pack de Iniciación, puedes unirte a nuestras clases grupales reducidas. Aquí el ritmo es más continuo y dinámico, permitiéndote disfrutar del movimiento en un ambiente motivador.",
            features: [
                "Grupos Reducidos: Pocos alumnos por sesión para no perder la calidad de la supervisión.",
                "Ritmo y Coreografía: Clases más fluidas donde el movimiento no se detiene, aumentando el trabajo cardiovascular.",
                "Autonomía Guiada: Ya conoces la máquina, por lo que el instructor te guía verbalmente y con toques puntuales.",
                "Comunidad: La energía del grupo te impulsa a dar un poco más en cada sesión."
            ],
            duration: "60 minutos (sesiones individuales)",
            idealFor: "Alumnos que ya han superado la fase de iniciación, no tienen lesiones agudas que requieran atención exclusiva y disfrutan de la dinámica grupal.",
            image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=800&auto=format&fit=crop"
        }
    ];

    const process = [
        {
            step: "1",
            title: "Contacto y Bienvenida",
            description: "Escríbenos o llámanos. Resolveremos tus dudas iniciales y agendaremos tu primera cita para el Pack de Iniciación."
        },
        {
            step: "2",
            title: "Tu Primera Sesión",
            description: "En la primera clase del pack de iniciación, no solo nos movemos. Evaluamos tu postura y rango de movimiento para entender \"el mapa\" de tu cuerpo y sus necesidades."
        },
        {
            step: "3",
            title: "Aprendizaje y Diagnóstico",
            description: "Durante las siguientes sesiones del pack, te enseñamos a \"respirar\" el método y a usar la máquina. Es vital para garantizar tu aprendizaje y confianza."
        },
        {
            step: "4",
            title: "Elige tu Continuidad",
            description: "Al finalizar el pack, tu instructor te asesorará: ¿Estás listo para la dinámica de las Clases Grupales o tu cuerpo agradecería continuar con Clases Privadas un tiempo más? Tú decides cómo seguir."
        }
    ];

    return (
        <div className="services-page">
            {/* SEO Optimization */}
            <SEOHead
                title="Servicios GYROTONIC® Pozuelo | Clases Privadas y Grupales Madrid"
                description="Descubre nuestros servicios GYROTONIC® en Pozuelo: Pack de Iniciación, Clases Privadas personalizadas y Clases Grupales. Entrenamiento adaptado a tus necesidades con instructores certificados."
                keywords="clases gyrotonic pozuelo, sesiones gyrotonic madrid, entrenamiento personalizado pozuelo, clases grupales gyrotonic, clases privadas gyrotonic, pack iniciación gyrotonic, gyrotonic pozuelo precios"
                canonical="https://gyrotonic-pozuelo.com/services"
                ogType="website"
            />
            <SchemaMarkup type="service" />
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
                    <h2 className="section-title-page">Experiencias a Tú Medida</h2>
                    <p className="intro-text">
                        Hemos diseñado una estructura progresiva para garantizar tu aprendizaje y seguridad. Tanto si buscas recuperarte de una lesión como si quieres potenciar tu rendimiento, tenemos el formato perfecto para ti.
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
                                        {service.features.map((feature, i) => {
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
