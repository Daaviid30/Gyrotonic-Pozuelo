import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import TextReveal from '../ui/TextReveal';
import './Services.css';

const services = [
    {
        title: "Clases Individuales",
        price: "Atención 100% personalizada",
        description: "Sesiones privadas diseñadas específicamente para tus necesidades y objetivos. Ideal para comenzar o profundizar.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Clases Dúo",
        price: "Comparte la experiencia",
        description: "Entrena con un amigo o pareja. Manteniendo la atención personalizada en un ambiente dinámico.",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Rehabilitación",
        price: "Recupera tu movilidad",
        description: "Enfoque terapéutico para lesiones de espalda, hombros, caderas y post-operatorios.",
        image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "GYROKINESIS®",
        price: "Fluidez sin máquinas",
        description: "El formato original del método. Clases grupales en taburete y suelo. Respiración y movimiento rítmico.",
        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop"
    }
];

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
            </div>
        </section>
    );
};

export default Services;
