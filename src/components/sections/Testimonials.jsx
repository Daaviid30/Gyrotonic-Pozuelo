import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { briefTestimonials } from '../../constants/testimonials';
import './Testimonials.css';

const Testimonials = () => (
    <section id="testimonials" className="section testimonials-section">
        <div className="container">
            <div className="text-center mb-16">
                <span className="eyebrow">Experiencias reales</span>
                <h2 className="section-title">Lo que dicen nuestros alumnos</h2>
                <p className="section-subtitle">Testimonios personales publicados con autorización.</p>
            </div>

            <div className="testimonials-grid">
                {briefTestimonials.map((review, index) => (
                    <motion.blockquote
                        key={review.name}
                        className="testimonial-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="stars" aria-label={`${review.stars} de 5 estrellas`}>
                            {[...Array(review.stars)].map((_, starIndex) => (
                                <Star key={starIndex} size={18} fill="currentColor" aria-hidden="true" />
                            ))}
                        </div>
                        <p className="testimonial-text">“{review.text}”</p>
                        <footer className="testimonial-author">
                            <cite className="author-name">{review.name}</cite>
                            <span className="author-role">{review.role}</span>
                        </footer>
                    </motion.blockquote>
                ))}
            </div>

            <motion.div className="section-cta" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Link to="/testimonios" className="btn btn-outline">Leer todos los testimonios</Link>
            </motion.div>
        </div>
    </section>
);

export default Testimonials;
