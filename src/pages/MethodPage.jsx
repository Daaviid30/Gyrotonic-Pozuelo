import React from 'react';
import { motion } from 'framer-motion';
import { AlignVerticalJustifyCenter, Expand, HeartPulse, Laptop, Medal, Settings2, Sun, Target, Waves, Wind } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import BackButton from '../components/ui/BackButton';
import SEOHead from '../components/seo/SEOHead';
import SchemaMarkup from '../components/seo/SchemaMarkup';
import './MethodPage.css';

const MethodPage = () => {
    const breadcrumbs = [
        { label: 'Inicio', path: '/' },
        { label: 'Método GYROTONIC®', path: '/metodo' }
    ];

    const principles = [
        {
            icon: <Target size={40} />,
            title: "Movimiento esférico",
            description: "Rompemos con la rigidez lineal mediante círculos, espirales y ondas que siguen la biomecánica natural de las articulaciones y recorren los distintos planos del espacio."
        },
        {
            icon: <Expand size={40} />,
            title: "Descompresión articular",
            description: "El sistema de poleas y contrapesos proporciona asistencia y resistencia uniformes. Así se combinan longitud axial, movilidad, control y fuerza sin impactos ni movimientos bruscos."
        },
        {
            icon: <Waves size={40} />,
            title: "Ritmo y fluidez",
            description: "Cada ejercicio enlaza con el siguiente en secuencias continuas. La cadencia exige coordinación neuromuscular, atención y control preciso del ritmo."
        },
        {
            icon: <AlignVerticalJustifyCenter size={40} />,
            title: "El eje central",
            description: "La columna actúa como eje central del método. Las secuencias combinan flexión, extensión, inclinación y rotación para desarrollar movilidad y estabilidad."
        },
        {
            icon: <Wind size={40} />,
            title: "Respiración inteligente",
            description: "Sincronizamos patrones respiratorios específicos con el movimiento para organizar el esfuerzo, sostener el ritmo y aumentar la consciencia corporal."
        },
        {
            icon: <Settings2 size={40} />,
            title: "Soporte personalizado",
            description: "La Pulley Tower asiste o desafía el movimiento según la resistencia elegida y se regula en función de tu altura, fuerza, experiencia y rango articular."
        }

    ];

    const benefits = [
        {
            category: "Físicos",
            items: [
                "Mejora la organización postural y la alineación corporal",
                "Aumenta la flexibilidad y el rango de movimiento",
                "Desarrolla fuerza funcional sin buscar un volumen muscular excesivo",
                "Favorece la movilidad de la columna y las articulaciones",
                "Mejora la coordinación, la estabilidad y el equilibrio",
                "Integra trabajo muscular y cardiovascular de forma progresiva"
            ]
        },
        {
            category: "Mentales y emocionales",
            items: [
                "Favorece la regulación del estrés a través del movimiento y la respiración",
                "Mejora la concentración y la consciencia corporal",
                "Genera una práctica atenta, dinámica y fluida",
                "Ayuda a reconocer patrones y hábitos de movimiento",
                "Contribuye a construir una rutina de bienestar constante",
                "Refuerza la conexión entre intención, respiración y gesto"
            ]
        }
    ];

    const forWho = [
        {
            icon: <HeartPulse size={32} />,
            title: "Personas con molestias o rigidez",
            description: "Si buscas recuperar confianza y amplitud de movimiento, el trabajo puede adaptarse a tu punto de partida con una progresión individual y sin impactos bruscos."
        },
        {
            icon: <Medal size={32} />,
            title: "Atletas y bailarines",
            description: "Para quienes quieren complementar su preparación deportiva o artística con movilidad tridimensional, coordinación y fuerza funcional."
        },
        {
            icon: <Sun size={32} />,
            title: "Personas mayores",
            description: "El movimiento controlado permite mantener movilidad, fuerza y equilibrio con una resistencia adaptable y una atención cercana."
        },
        {
            icon: <Laptop size={32} />,
            title: "Personas sedentarias",
            description: "Si pasas muchas horas sentado o llevas tiempo sin entrenar, puedes movilizar y fortalecer el cuerpo mediante una iniciación individual y progresiva."
        }
    ];

    return (
        <div className="method-page">
            {/* SEO Optimization */}
            <SEOHead
                title="Método GYROTONIC® en Pozuelo | Pulley Tower"
                description="Descubre GYROTONIC® en Pozuelo: movimiento esférico, respiración, coordinación neuromuscular, fuerza y movilidad con la Pulley Tower."
                canonical="/metodo"
                ogType="article"
            />
            <SchemaMarkup type="method" />

            <PageHero
                title="El método GYROTONIC®"
                subtitle="Un sistema de movimiento inteligente, tridimensional y sin impactos bruscos"
                breadcrumbs={breadcrumbs}
                image="/images/web/torre-poleas.jpg"
                imagePosition="center 64%"
            />

            <div className="container">
                <BackButton />

                {/* Introducción */}
                <motion.section
                    className="method-intro"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title-page">¿Qué hace único a GYROTONIC®?</h2>
                    <p className="intro-text">
                        GYROTONIC® es mucho más que ejercicio: es un sistema de movimiento inteligente creado por Juliu Horvath que integra la fluidez de la danza, la precisión de la gimnasia y principios presentes en el yoga y el taichí. Su premisa fundamental es trabajar con el cuerpo, no contra él.
                    </p>
                    <p className="intro-text">
                        Utilizamos la Pulley Tower, una torre de poleas y contrapesos diseñada para guiar movimientos tridimensionales con una resistencia continua y ajustable. Esto permite trabajar fuerza, movilidad, coordinación y control dentro de una misma secuencia fluida.
                    </p>
                </motion.section>

                {/* Principios Fundamentales */}
                <section className="principles-section">
                    <h2 className="section-title-page text-center">Principios fundamentales</h2>
                    <div className="principles-grid">
                        {principles.map((principle, index) => (
                            <motion.div
                                key={index}
                                className="principle-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="principle-icon">{principle.icon}</div>
                                <h3 className="principle-title">{principle.title}</h3>
                                <p className="principle-description">{principle.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Beneficios */}
                <section className="benefits-section">
                    <h2 className="section-title-page text-center">Beneficios integrales</h2>
                    <div className="benefits-grid">
                        {benefits.map((benefitCategory, index) => (
                            <motion.div
                                key={index}
                                className="benefit-category"
                                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="benefit-category-title">{benefitCategory.category}</h3>
                                <ul className="benefit-list">
                                    {benefitCategory.items.map((item, i) => (
                                        <li key={i} className="benefit-item">{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Para Quién */}
                <section className="for-who-section">
                    <h2 className="section-title-page text-center">¿Es GYROTONIC® para ti?</h2>
                    <p className="section-subtitle-page">
                        El método puede adaptarse a diferentes edades, niveles de condición física y experiencias previas. Resulta especialmente interesante para:
                    </p>
                    <div className="for-who-grid">
                        {forWho.map((item, index) => (
                            <motion.div
                                key={index}
                                className="for-who-card"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="for-who-icon">{item.icon}</div>
                                <h3 className="for-who-title">{item.title}</h3>
                                <p className="for-who-description">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA Final */}
                <motion.section
                    className="method-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="cta-title">¿Listo para experimentarlo?</h2>
                    <p className="cta-text">
                        La mejor forma de entender GYROTONIC® es experimentarlo. Solicita tu primera sesión y descubre cómo responde tu cuerpo al movimiento tridimensional.
                    </p>
                    <a href="/#contact" className="btn btn-primary cta-button">
                        Solicitar primera sesión
                    </a>
                </motion.section>

                <BackButton />
            </div>
        </div>
    );
};

export default MethodPage;
