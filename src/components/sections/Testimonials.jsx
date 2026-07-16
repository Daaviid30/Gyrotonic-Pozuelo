import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { briefTestimonials } from '../../constants/testimonials';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section id="testimonials" className="section testimonials-section bg-off-white">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">Lo que dicen nuestros alumnos</h2>
                    <p className="section-subtitle">Experiencias reales de alumnos del centro.</p>
                </div>

                <div className="testimonials-grid">
                    {briefTestimonials.map((review, index) => (
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
                            <p className="testimonial-text">“{review.text}”</p>
                            <div className="testimonial-author">
                                <span className="author-name">{review.name}</span>
                                <span className="author-role">{review.role}</span>
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
                    <Link to="/testimonios" className="btn btn-outline">
                        Lee Más Historias de Éxito
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
