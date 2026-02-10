import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Sparkles, BookOpen, Heart, TrendingUp, Minimize2, Expand, AlignVerticalJustifyCenter, Music, Waves, Wind, Settings2, HeartPulse, Medal, Sun, Laptop } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import BackButton from '../components/ui/BackButton';
import SEOHead from '../components/seo/SEOHead';
import SchemaMarkup from '../components/seo/SchemaMarkup';
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
            description: "Rompemos la rigidez lineal. Trabajamos en círculos, espirales y ondas, imitando la biomecánica natural de tus articulaciones para desbloquear el cuerpo en todas las direcciones del espacio."
        },
        {
            icon: <Expand size={40} />,
            title: "Descompresión Articular",
            description: "Gracias a la tracción constante de las poleas, creamos espacio entre las vértebras y articulaciones. Fortaleces la musculatura mientras la alargas, evitando el desgaste típico del fitness tradicional."
        },
        {
            icon: <Waves size={40} />,
            title: "Ritmo y Fluidez",
            description: "Sin paradas bruscas. Cada ejercicio fluye hacia el siguiente como una danza continua. Esta cadencia calma el sistema nervioso y mejora la coordinación neuromuscular."
        },
        {
            icon: <AlignVerticalJustifyCenter size={40} />,
            title: "El Eje Central",
            description: "Tu columna es el pilar de tu salud. El método se enfoca en movilizarla para hacerla más elástica y resistente, corrigiendo desequilibrios y mejorando tu postura de forma natural."
        },
        {
            icon: <Wind size={40} />,
            title: "Respiración Inteligente",
            description: "Sincronizamos patrones respiratorios específicos con cada movimiento. Esto oxigena la sangre, estimula los órganos internos y proporciona un efecto de \"lavado interno\" que revitaliza."
        },
        {
            icon: <Settings2 size={40} />,
            title: "Soporte Personalizado",
            description: "La máquina Pulley Tower actúa como un compañero de baile: te asiste si necesitas rehabilitación y te reta si buscas rendimiento. Se adapta totalmente a tu altura, fuerza y rango de movimiento."
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
                "Ayuda a retrasar el envejecimiento celular gracias a la oxigenación profunda.",
                "Favorece un sueño reparador",
                "Promueve la conexión mente-cuerpo"
            ]
        }
    ];

    const forWho = [
        {
            icon: <HeartPulse size={32} />,
            title: "Personas con Dolor Crónico",
            description: "Si sufres de dolores de espalda, cuello, hombros o caderas, GYROTONIC® puede ayudarte a recuperar movilidad sin dolor. El enfoque sin impacto es perfecto para rehabilitación."
        },
        {
            icon: <Medal size={32} />,
            title: "Atletas y Bailarines",
            description: "Para quienes buscan mejorar su rendimiento deportivo o artístico. El método desarrolla fuerza funcional, flexibilidad dinámica y previene lesiones."
        },
        {
            icon: <Sun size={32} />,
            title: "Personas Mayores",
            description: "El movimiento suave y controlado es ideal para mantener la movilidad, fuerza y equilibrio con la edad, mejorando significativamente la calidad de vida."
        },
        {
            icon: <Laptop size={32} />,
            title: "Personas Sedentarias",
            description: "Si pasas muchas horas sentado/a o tienes un estilo de vida poco activo, GYROTONIC® te ayudará a descomprimir y fortalecer tu cuerpo de forma progresiva."
        }
    ];

    return (
        <div className="method-page">
            {/* SEO Optimization */}
            <SEOHead
                title="Método GYROTONIC® en Pozuelo | Centro Especializado Madrid"
                description="Descubre el método GYROTONIC® en Pozuelo de Alarcón. Movimiento tridimensional sin impacto para fortalecer, rehabilitar y transformar tu cuerpo. Primera clase de prueba."
                keywords="gyrotonic pozuelo, gyrotonic madrid, ejercicio tridimensional pozuelo, rehabilitación columna madrid, dolor espalda pozuelo, entrenamiento funcional madrid, gyrotonic españa, clases gyrotonic, pulley tower, movimiento circular"
                canonical="https://gyrotonic-pozuelo.com/method"
                ogType="article"
            />
            <SchemaMarkup type="method" />

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
                    <h1 className="section-title-page">¿Qué hace único a GYROTONIC®?</h1>
                    <p className="intro-text">
                        GYROTONIC® es mucho más que ejercicio; es un sistema de movimiento inteligente que fusiona la fluidez de la danza, la precisión de la gimnasia y la conexión interior del yoga y el tai chi. Creado por Juliu Horvath, este método se rige por una premisa fundamental: trabajar con tu cuerpo, no contra él.
                    </p>
                    <p className="intro-text">
                        A diferencia de cualquier otro entrenamiento, utilizamos la Pulley Tower, una torre de poleas y contrapesos diseñada para guiarte en movimientos tridimensionales sin impacto. El resultado es una columna vertebral liberada y una musculatura tonificada desde la primera sesión.
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
