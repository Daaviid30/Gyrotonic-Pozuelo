import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import TextReveal from '../ui/TextReveal';
import { services } from '../../constants/services';
import './Services.css';

const Services = () => {
    return (
        <section id="services" className="section services-section bg-off-white">
            <div className="container">
                <div className="text-center mb-16">
                    <TextReveal className="section-title">
                        Nuestros Servicios
                    </TextReveal>
                    <p className="section-subtitle">
                        Opciones adaptadas a tu ritmo y objetivos.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="service-image-wrapper">
                                <img src={service.image} alt={service.title} className="service-image" />
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-price-tag">{service.price}</p>
                                <p className="service-description">{service.description}</p>
                                <Button href="#contact" variant="outline" className="w-full">
                                    Solicitar Info
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="section-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <Link to="/servicios" className="btn btn-outline">
                        Conoce Todos Nuestros Servicios
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
