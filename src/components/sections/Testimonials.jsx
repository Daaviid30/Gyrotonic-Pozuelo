import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Testimonials.css';

const reviews = [
    {
        name: "María Garcia",
        role: "Paciente de Rehabilitación",
        text: "Llegué con dolores lumbares crónicos y en pocas sesiones noté una diferencia abismal. El enfoque sin impacto es justo lo que necesitaba.",
        stars: 5
    },
    {
        name: "Pablo Rodríguez",
        role: "Corredor Amateur",
        text: "Mejora mi flexibilidad y mi respiración. Siento que corro con más ligereza y menos tensión.",
        stars: 5
    },
    {
        name: "Ana Martínez",
        role: "Oficinista",
        text: "Después de estar sentada todo el día, las clases son un respiro. Me siento más alta y descomprimida al salir.",
        stars: 5
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section testimonials-section bg-off-white">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">Lo que dicen nuestros alumnos</h2>
                    <p className="section-subtitle">Historias reales de transformación.</p>
                </div>

                <div className="testimonials-grid">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="stars">
                                {[...Array(review.stars)].map((_, i) => (
                                    <Star key={i} size={18} fill="var(--color-accent)" stroke="none" />
                                ))}
                            </div>
                            <p className="testimonial-text">"{review.text}"</p>
                            <div className="testimonial-author">
                                <span className="author-name">{review.name}</span>
                                <span className="author-role">{review.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
