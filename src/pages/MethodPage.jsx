import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Sparkles, BookOpen, Heart, TrendingUp } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import BackButton from '../components/ui/BackButton';
import './MethodPage.css';

const MethodPage = () => {
    const breadcrumbs = [
        { label: 'Inicio', path: '/' },
        { label: 'Método GYROTONIC®', path: '/method' }
    ];

    const principles = [
        {
            icon: <Target size={40} />,
            title: "Movimiento Esférico",
            description: "A diferencia de los ejercicios lineales tradicionales, GYROTONIC® trabaja en todas las direcciones del espacio. Los movimientos circulares y espirales imitan la forma natural en que el cuerpo humano está diseñado para moverse, creando una experiencia tridimensional única."
        },
        {
            icon: <Heart size={40} />,
            title: "Sin Compresión Articular",
            description: "El sistema utiliza resistencia constante y controlada que descomprime las articulaciones mientras las fortalece. Esto significa que puedes desarrollar fuerza sin el desgaste típico del entrenamiento convencional, siendo ideal para personas de todas las edades."
        },
        {
            icon: <Sparkles size={40} />,
            title: "Ritmo y Fluidez",
            description: "Cada ejercicio fluye hacia el siguiente como una danza. Esta continuidad rítmica estimula el sistema cardiovascular de forma suave, mejora la coordinación neuromuscular y crea una sensación meditativa que calma el sistema nervioso."
        },
        {
            icon: <BookOpen size={40} />,
            title: "Respiración Inteligente",
            description: "Los patrones respiratorios están sincronizados con cada movimiento. Esta respiración consciente y rítmica oxigena profundamente los tejidos, estimula los órganos internos y potencia la eliminación de toxinas, creando energía desde dentro."
        }
    ];

    const benefits = [
        {
            category: "Físicos",
            items: [
                "Mejora la postura y alineación corporal",
                "Aumenta la flexibilidad y rango de movimiento",
                "Desarrolla fuerza funcional sin crear volumen muscular excesivo",
                "Alivia dolores crónicos de espalda, cuello y articulaciones",
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
                "Aumenta la energía vital",
                "Favorece un sueño reparador",
                "Promueve la conexión mente-cuerpo"
            ]
        }
    ];

    const forWho = [
        {
            icon: <Users size={32} />,
            title: "Personas con Dolor Crónico",
            description: "Si sufres de dolores de espalda, cuello, hombros o caderas, GYROTONIC® puede ayudarte a recuperar movilidad sin dolor. El enfoque sin impacto es perfecto para rehabilitación."
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Atletas y Bailarines",
            description: "Para quienes buscan mejorar su rendimiento deportivo o artístico. El método desarrolla fuerza funcional, flexibilidad dinámica y previene lesiones."
        },
        {
            icon: <Sparkles size={32} />,
            title: "Personas Mayores",
            description: "El movimiento suave y controlado es ideal para mantener la movilidad, fuerza y equilibrio con la edad, mejorando significativamente la calidad de vida."
        },
        {
            icon: <Heart size={32} />,
            title: "Personas Sedentarias",
            description: "Si pasas muchas horas sentado/a o tienes un estilo de vida poco activo, GYROTONIC® te ayudará a descomprimir, elongar y fortalecer tu cuerpo de forma progresiva."
        }
    ];

    return (
        <div className="method-page">
            <PageHero
                title="El Método GYROTONIC®"
                subtitle="Descubre cómo este sistema revolucionario puede transformar tu cuerpo y tu bienestar"
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
                    <h2 className="section-title-page">¿Qué Hace Único a GYROTONIC®?</h2>
                    <p className="intro-text">
                        GYROTONIC® es mucho más que un método de ejercicio. Es un sistema completo de movimiento que fusiona principios de yoga, danza, natación, tai chi y gimnasia, creado por el bailarín Juliu Horvath en los años 80.
                    </p>
                    <p className="intro-text">
                        Utilizando equipos especialmente diseñados que trabajan con resistencia constante y controlada, GYROTONIC® permite que tu cuerpo se mueva de forma tridimensional, fluida y sin impacto, al ritmo de tu propia respiración.
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
                        La mejor forma de entender GYROTONIC® es probarlo. Reserva tu primera sesión y descubre cómo este método puede transformar tu bienestar.
                    </p>
                    <a href="/#contact" className="btn btn-primary cta-button">
                        Reserva tu Primera Clase
                    </a>
                </motion.section>

                <BackButton />
            </div>
        </div>
    );
};

export default MethodPage;
