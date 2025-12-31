import React from 'react';
import { motion } from 'framer-motion';
import { Waves, ShieldCheck, Zap, Activity, Heart, Wind } from 'lucide-react';
import TextReveal from '../ui/TextReveal';
import './About.css';

const features = [
    {
        icon: <Waves size={32} />,
        title: "Movimiento Tridimensional",
        description: "Ejercicios circulares y espirales que movilizan la columna en todas sus direcciones naturales."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Sin Impacto Articular",
        description: "Entrenamiento fluido que descomprime las articulaciones y evita lesiones."
    },
    {
        icon: <Zap size={32} />,
        title: "Fuerza y Flexibilidad",
        description: "Desarrolla una musculatura fuerte y alargada simultáneamente."
    },
    {
        icon: <Activity size={32} />,
        title: "Coordinación",
        description: "Mejora la conexión neuromuscular y la conciencia corporal."
    },
    {
        icon: <Wind size={32} />,
        title: "Respiración",
        description: "Patrones respiratorios que estimulan el sistema nervioso y oxigenan el cuerpo."
    },
    {
        icon: <Heart size={32} />,
        title: "Bienestar Integral",
        description: "Sensación de ligereza, energía y apertura desde la primera sesión."
    }
];

const About = () => {
    return (
        <section id="method" className="section about-section">
            <div className="container">
                <div className="text-center mb-16">
                    <TextReveal className="section-title">
                        ¿Qué es GYROTONIC®?
                    </TextReveal>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Es un método único que fusiona la fluidez de la danza, la relajación del taichí y la fuerza de la gimnasia deportiva para trabajar tu cuerpo de forma integral.
                    </motion.p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-text">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
