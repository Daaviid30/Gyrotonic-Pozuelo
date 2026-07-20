import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackButton from '../components/ui/BackButton';
import PageHero from '../components/ui/PageHero';
import SchemaMarkup from '../components/seo/SchemaMarkup';
import SEOHead from '../components/seo/SEOHead';
import { detailedTestimonials } from '../constants/testimonials';
import './TestimonialsPage.css';

const TestimonialsPage = () => (
    <div className="testimonials-page">
        <SEOHead
            title="Testimonios de alumnos | Gyrotonic Pozuelo"
            description="Experiencias personales de alumnos de Gyrotonic Pozuelo sobre las clases, el acompañamiento y la atención del equipo."
            canonical="/testimonios"
        />
        <SchemaMarkup type="testimonials" />
        <PageHero
            title="Historias de transformación"
            subtitle="Personas reales que comparten su experiencia con GYROTONIC®"
            breadcrumbs={[{ label: 'Inicio', path: '/' }, { label: 'Testimonios', path: '/testimonios' }]}
            image="/images/web/grupo-reducido.jpg"
            imagePosition="center 48%"
        />

        <div className="container">
            <BackButton />

            <motion.section className="testimonials-intro" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="eyebrow">Sus propias palabras</span>
                <h2 className="section-title-page">Experiencias reales, personas reales</h2>
                <p className="intro-text">Estas son historias auténticas de alumnos que buscaban moverse mejor, recuperar confianza o enriquecer su práctica. Publicamos sus testimonios con autorización y respetando el relato original de cada persona.</p>
                <p className="testimonial-disclaimer">Cada testimonio describe una experiencia personal; los resultados pueden variar de una persona a otra.</p>
            </motion.section>

            <section className="detailed-testimonials" aria-label="Testimonios de alumnos">
                {detailedTestimonials.map((testimonial, index) => (
                    <motion.article
                        key={testimonial.name}
                        className="testimonial-detailed"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: Math.min(index * 0.08, 0.24) }}
                    >
                        <header className="testimonial-header">
                            <div className="testimonial-avatar"><User size={36} aria-hidden="true" /></div>
                            <div className="testimonial-info">
                                <h2 className="testimonial-name">{testimonial.name}</h2>
                                <p className="testimonial-condition">{testimonial.condition}</p>
                                <div className="testimonial-stars" aria-label={`${testimonial.stars} de 5 estrellas`}>
                                    {[...Array(testimonial.stars)].map((_, starIndex) => (
                                        <Star key={starIndex} size={18} fill="currentColor" aria-hidden="true" />
                                    ))}
                                </div>
                            </div>
                        </header>

                        <blockquote className="testimonial-quote">
                            <Quote className="quote-icon" size={30} aria-hidden="true" />
                            <p>{testimonial.quote}</p>
                        </blockquote>

                        <div className="testimonial-story">
                            <h3>Su historia</h3>
                            <p>{testimonial.story}</p>
                        </div>

                        <div className="testimonial-benefits">
                            <h3>Lo que destaca de su experiencia</h3>
                            <ul>
                                {testimonial.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
                            </ul>
                        </div>
                    </motion.article>
                ))}
            </section>

            <section className="testimonials-cta">
                <h2 className="cta-title">Cada proceso comienza con un primer paso</h2>
                <p className="cta-text">Conoce el método en persona y descubre cómo se adapta a tu forma de moverte, tu experiencia y tus objetivos.</p>
                <Link to="/#contact" className="btn btn-primary cta-button">Solicitar primera sesión</Link>
            </section>
            <BackButton />
        </div>
    </div>
);

export default TestimonialsPage;
