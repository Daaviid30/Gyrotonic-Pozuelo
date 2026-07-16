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
            title: "Movimiento Esférico",
            description: "Trabajamos con círculos, espirales y ondas para explorar el movimiento en diferentes planos de forma coordinada y progresiva."
        },
        {
            icon: <Expand size={40} />,
            title: "Descompresión Articular",
            description: "Las poleas y contrapesos ofrecen asistencia y resistencia ajustables para combinar movilidad, control y fuerza sin movimientos bruscos."
        },
        {
            icon: <Waves size={40} />,
            title: "Ritmo y Fluidez",
            description: "Cada ejercicio enlaza con el siguiente para crear secuencias continuas que exigen coordinación, atención y control del ritmo."
        },
        {
            icon: <AlignVerticalJustifyCenter size={40} />,
            title: "El Eje Central",
            description: "La columna participa como eje central de muchas secuencias, combinando flexión, extensión, inclinación y rotación."
        },
        {
            icon: <Wind size={40} />,
            title: "Respiración Inteligente",
            description: "Sincronizamos patrones respiratorios con el movimiento para favorecer el ritmo, la concentración y la conciencia corporal."
        },
        {
            icon: <Settings2 size={40} />,
            title: "Soporte Personalizado",
            description: "La Pulley Tower permite regular la resistencia y ajustar el trabajo a tu altura, experiencia y rango de movimiento."
        }

    ];

    const benefits = [
        {
            category: "Físicos",
            items: [
                "Mejora la postura y alineación corporal",
                "Aumenta la flexibilidad y rango de movimiento",
                "Desarrolla fuerza funcional sin crear volumen muscular excesivo",
                "Favorece una práctica de movimiento variada y consciente",
                "Mejora la coordinación y el equilibrio",
                "Estimula el sistema cardiovascular de forma suave"
            ]
        },
        {
            category: "Mentales y Emocionales",
            items: [
                "Reduce el estrés y la ansiedad",
                "Mejora la concentración y la conciencia corporal",
                "Genera una sensación profunda de bienestar",
                "Ofrece un espacio de atención y práctica consciente",
                "Puede contribuir a una rutina de bienestar constante",
                "Promueve la conexión mente-cuerpo"
            ]
        }
    ];

    const forWho = [
        {
            icon: <HeartPulse size={32} />,
            title: "Personas que quieren moverse mejor",
            description: "Si buscas recuperar confianza en el movimiento o volver a una práctica física progresiva, el trabajo puede adaptarse a tu punto de partida."
        },
        {
            icon: <Medal size={32} />,
            title: "Atletas y Bailarines",
            description: "Para quienes quieren complementar su preparación deportiva o artística con movilidad, coordinación y fuerza."
        },
        {
            icon: <Sun size={32} />,
            title: "Personas Mayores",
            description: "El ritmo controlado permite trabajar movilidad, fuerza y coordinación de forma progresiva con el paso de los años."
        },
        {
            icon: <Laptop size={32} />,
            title: "Personas Sedentarias",
            description: "Si pasas muchas horas sentado o llevas tiempo sin entrenar, puedes empezar con una atención individual y progresiva."
        }
    ];

    return (
        <div className="method-page">
            {/* SEO Optimization */}
            <SEOHead
                title="Método GYROTONIC® en Pozuelo | Centro Especializado Madrid"
                description="Descubre el método GYROTONIC® en Pozuelo: movimiento tridimensional, respiración, coordinación y fuerza con la Pulley Tower."
                canonical="/metodo"
                ogType="article"
            />
            <SchemaMarkup type="method" />

            <PageHero
                title="El Método GYROTONIC®"
                subtitle="Movimiento tridimensional, respiración y fuerza en secuencias fluidas"
                breadcrumbs={breadcrumbs}
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
                        GYROTONIC® es mucho más que ejercicio; es un sistema de movimiento inteligente que fusiona la fluidez de la danza, la precisión de la gimnasia y la conexión interior del yoga y el tai chi. Creado por Juliu Horvath, este método se rige por una premisa fundamental: trabajar con tu cuerpo, no contra él.
                    </p>
                    <p className="intro-text">
                        Utilizamos la Pulley Tower, una torre de poleas y contrapesos diseñada para guiar movimientos tridimensionales con una resistencia ajustable. La experiencia se entiende especialmente bien al probarla.
                    </p>
                </motion.section>

                {/* Principios Fundamentales */}
                <section className="principles-section">
                    <h2 className="section-title-page text-center">Principios Fundamentales</h2>
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
                    <h2 className="section-title-page text-center">Beneficios Integrales</h2>
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
                    <h2 className="section-title-page text-center">¿Es GYROTONIC® Para Ti?</h2>
                    <p className="section-subtitle-page">
                        GYROTONIC® es apto para todos, sin importar tu edad, condición física o experiencia previa. Es especialmente beneficioso para:
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
                    <h2 className="cta-title">¿Listo para Experimentarlo?</h2>
                    <p className="cta-text">
                        La mejor forma de entender GYROTONIC® es probarlo. Solicita tu primera sesión y conoce el método con atención individual.
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
