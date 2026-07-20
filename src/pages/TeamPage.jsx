import React from 'react';
import { motion } from 'framer-motion';
import { Award, Fingerprint, HeartHandshake, Infinity as InfinityIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import BackButton from '../components/ui/BackButton';
import SEOHead from '../components/seo/SEOHead';
import SchemaMarkup from '../components/seo/SchemaMarkup';
import { instructors } from '../constants/team';
import './TeamPage.css';

const TeamPage = () => (
    <div className="team-page">
        <SEOHead
            title="Equipo GYROTONIC® Pozuelo | Instructores certificados"
            description="Conoce a María José Cruz y Antonio Castro, instructores certificados de GYROTONIC® en Pozuelo con experiencia en danza, osteopatía y entrenamiento."
            canonical="/equipo"
        />
        <SchemaMarkup type="team" />
        <PageHero
            title="Nuestro equipo"
            subtitle="Profesionales certificados que te guiarán con rigor técnico y atención cercana"
            breadcrumbs={[{ label: 'Inicio', path: '/' }, { label: 'Nuestro equipo', path: '/equipo' }]}
            image="/images/web/acompanamiento.jpg"
            imagePosition="center 8%"
            imagePositionMobile="center 34%"
        />

        <div className="container">
            <BackButton />
            <section className="team-intro">
                <span className="eyebrow">Experiencia y dedicación</span>
                <h2 className="section-title-page">Un equipo que conoce el movimiento</h2>
                <p className="intro-text">
                    Nuestro equipo está formado por profesionales certificados con trayectorias complementarias en danza, deporte, osteopatía y enseñanza. Esa experiencia compartida se traduce en una atención precisa, cercana y adaptada a cada alumno.
                </p>
            </section>

            <section className="team-profiles" aria-label="Equipo del centro">
                {instructors.map((member) => (
                    <motion.article
                        key={member.name}
                        className="profile-section"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="profile-header">
                            <div className="profile-image-wrapper">
                                <img src={member.image} alt={member.name} className="profile-image" loading="lazy" width="680" height="680" />
                            </div>
                            <div className="profile-info">
                                <h2 className="profile-name">{member.name}</h2>
                                <p className="profile-role">{member.role}</p>
                            </div>
                        </div>
                        <div className="profile-content">
                            <div className="profile-story">
                                <p className="story-paragraph">{member.bio}</p>
                            </div>

                            <div className="profile-details-grid">
                                <section className="detail-box" aria-labelledby={`${member.slug}-specialties`}>
                                    <h3 id={`${member.slug}-specialties`} className="detail-title">Áreas de experiencia</h3>
                                    <ul className="detail-list">
                                        {member.specialties.map((specialty) => <li key={specialty}>{specialty}</li>)}
                                    </ul>
                                </section>
                                <section className="detail-box" aria-labelledby={`${member.slug}-certifications`}>
                                    <h3 id={`${member.slug}-certifications`} className="detail-title">Formación y certificaciones</h3>
                                    <ul className="detail-list">
                                        {member.certifications.map((certification) => <li key={certification}>{certification}</li>)}
                                    </ul>
                                </section>
                            </div>

                            <blockquote className="philosophy-box">
                                <p className="philosophy-title">Su forma de acompañar</p>
                                <p className="philosophy-text">“{member.philosophy}”</p>
                            </blockquote>
                        </div>
                    </motion.article>
                ))}
            </section>

            <section className="values-section">
                <h2 className="section-title-page text-center">Nuestros valores</h2>
                <p className="section-subtitle-page">Los principios que guían nuestra forma de enseñar y acompañarte</p>
                <div className="values-grid">
                    <article className="value-card">
                        <div className="value-icon"><HeartHandshake size={40} aria-hidden="true" /></div>
                        <h3 className="value-title">Empatía en movimiento</h3>
                        <p className="value-description">Entendemos que cada persona llega con una historia distinta. Escuchamos tu punto de partida y acompañamos tu proceso sin juicios.</p>
                    </article>
                    <article className="value-card">
                        <div className="value-icon"><Fingerprint size={40} aria-hidden="true" /></div>
                        <h3 className="value-title">Atención personalizada</h3>
                        <p className="value-description">Cada cuerpo es único. Ajustamos la resistencia, el ritmo y las secuencias a lo que necesitas en cada sesión.</p>
                    </article>
                    <article className="value-card">
                        <div className="value-icon"><Award size={40} aria-hidden="true" /></div>
                        <h3 className="value-title">Rigor técnico</h3>
                        <p className="value-description">La pasión se apoya en el conocimiento. Cuidamos la ejecución y continuamos formándonos para enseñar con precisión.</p>
                    </article>
                    <article className="value-card">
                        <div className="value-icon"><InfinityIcon size={40} aria-hidden="true" /></div>
                        <h3 className="value-title">Bienestar sostenible</h3>
                        <p className="value-description">Buscamos construir una base de movilidad, fuerza y autonomía que puedas mantener a lo largo del tiempo.</p>
                    </article>
                </div>
            </section>

            <section className="team-cta">
                <h2 className="cta-title">¿Quieres conocernos?</h2>
                <p className="cta-text">Cuéntanos tus objetivos y te orientaremos sobre la mejor forma de empezar a trabajar con nosotros.</p>
                <Link to="/#contact" className="btn btn-primary cta-button">Solicitar primera sesión</Link>
            </section>
            <BackButton />
        </div>
    </div>
);

export default TeamPage;
