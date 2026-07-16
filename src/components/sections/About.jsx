import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TextReveal from '../ui/TextReveal';
import { methodFeatures } from '../../constants/method';
import './About.css';

const About = () => {
    return (
        <section id="method" className="section about-section" itemScope itemType="https://schema.org/Service">
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
                        itemProp="description"
                    >
                        Un método de movimiento fluido y tridimensional que combina respiración, coordinación, movilidad y fuerza de forma progresiva.
                    </motion.p>
                </div>


                <div className="features-grid">
                    {methodFeatures.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                className="feature-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="feature-icon">
                                    <IconComponent size={32} />
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-text">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    className="section-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <Link to="/metodo" className="btn btn-outline">
                        Saber Más sobre el Método
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
