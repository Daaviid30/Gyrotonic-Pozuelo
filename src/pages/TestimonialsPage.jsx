import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import BackButton from '../components/ui/BackButton';
import { detailedTestimonials } from '../constants/testimonials';
import './TestimonialsPage.css';

const TestimonialsPage = () => {
    const breadcrumbs = [
        { label: 'Inicio', path: '/' },
        { label: 'Testimonios', path: '/testimonials' }
    ];

    const stats = [
        { number: "95%", label: "De satisfacción entre nuestros alumnos" },
        { number: "200+", label: "Personas han transformado su bienestar con nosotros" },
        { number: "8+", label: "Años de experiencia profesional" },
        { number: "100%", label: "Instructores certificados internacionalmente" }
    ];

    return (
        <div className="testimonials-page">
            <PageHero
                title="Historias de Transformación"
                subtitle="Personas reales que han cambiado su vida con GYROTONIC®"
                breadcrumbs={breadcrumbs}
            />

            <div className="container">
                <BackButton />

                {/* Introducción */}
                <motion.section
                    className="testimonials-intro"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title-page">Resultados Reales, Personas Reales</h2>
                    <p className="intro-text">
                        Estas son historias auténticas de personas que, como tú, buscaban una solución a sus problemas físicos o simplemente querían mejorar su bienestar. GYROTONIC® les ayudó a transformar no solo su cuerpo, sino su calidad de vida.
                    </p>
                </motion.section>

                {/* Estadísticas */}
                <section className="stats-section">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stat-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Testimonios Detallados */}
                <section className="detailed-testimonials">
                    {detailedTestimonials.map((testimonial, index) => (
                        <motion.article
                            key={index}
                            className="testimonial-detailed"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="testimonial-header">
                                <div className="testimonial-avatar">
                                    {testimonial.image ? (
                                        <img src={testimonial.image} alt={testimonial.name} />
                                    ) : (
                                        <User size={40} />
                                    )}
                                </div>
                                <div className="testimonial-info">
                                    <h3 className="testimonial-name">{testimonial.name}</h3>
                                    <p className="testimonial-age">{testimonial.age} años</p>
                                    <p className="testimonial-condition">{testimonial.condition}</p>
                                    <div className="testimonial-stars">
                                        {[...Array(testimonial.stars)].map((_, i) => (
                                            <Star key={i} size={18} fill="var(--color-accent)" stroke="none" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="testimonial-quote">
                                <Quote className="quote-icon" size={32} />
                                <p>{testimonial.quote}</p>
                            </div>

                            <div className="testimonial-story">
                                <h4 className="story-title">Su Historia</h4>
                                <p>{testimonial.story}</p>
                            </div>

                            <div className="testimonial-benefits">
                                <h4 className="benefits-title">Beneficios Conseguidos</h4>
                                <ul className="benefits-list">
                                    {testimonial.benefits.map((benefit, i) => (
                                        <li key={i}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.article>
                    ))}
                </section>

                {/* CTA */}
                <motion.section
                    className="testimonials-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="cta-title">¿Quieres Ser la Próxima Historia de Éxito?</h2>
                    <p className="cta-text">
                        Cada transformación comienza con un primer paso. Reserva tu primera sesión y descubre cómo GYROTONIC® puede cambiar tu vida también.
                    </p>
                    <a href="/#contact" className="btn btn-primary cta-button">
                        Comienza tu Transformación
                    </a>
                </motion.section>

                <BackButton />
            </div>
        </div>
    );
};

export default TestimonialsPage;
