import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import BackButton from '../components/ui/BackButton';
import SEOHead from '../components/seo/SEOHead';
import SchemaMarkup from '../components/seo/SchemaMarkup';
import { detailedTestimonials } from '../constants/testimonials';
import './TestimonialsPage.css';

const TestimonialsPage = () => {
    const breadcrumbs = [
        { label: 'Inicio', path: '/' },
        { label: 'Testimonios', path: '/testimonios' }
    ];

    const stats = [
        { number: "60 min", label: "De práctica en cada clase" },
        { number: "4", label: "Personas como máximo por grupo" },
        { number: "1:1", label: "Atención en las sesiones privadas" },
        { number: "2", label: "Formas de continuar: grupo o privado" }
    ];

    return (
        <div className="testimonials-page">
            {/* SEO Optimization */}
            <SEOHead
                title="Testimonios GYROTONIC® Pozuelo | Opiniones Reales de Clientes Madrid"
                description="Conoce experiencias compartidas por alumnos de GYROTONIC® Pozuelo sobre las clases, el acompañamiento y la atención del equipo."
                canonical="/testimonios"
                ogType="website"
            />
            <SchemaMarkup type="testimonials" />
            <PageHero
                title="Experiencias de alumnos"
                subtitle="Lo que más valoran de las clases y del acompañamiento"
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
                    <h2 className="section-title-page">Experiencias personales</h2>
                    <p className="intro-text">
                        Cada testimonio refleja una experiencia individual. Los resultados pueden variar, pero todos ayudan a entender cómo se vive una clase y qué diferencia al equipo del centro.
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
                                <h4 className="benefits-title">Lo que destaca de su experiencia</h4>
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
                    <h2 className="cta-title">¿Quieres conocer el método?</h2>
                    <p className="cta-text">
                        Solicita una primera sesión y descubre cómo se siente el movimiento con atención individual.
                    </p>
                    <a href="/#contact" className="btn btn-primary cta-button">
                        Solicitar primera sesión
                    </a>
                </motion.section>

                <BackButton />
            </div>
        </div>
    );
};

export default TestimonialsPage;
