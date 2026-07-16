import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import BackButton from '../components/ui/BackButton';
import SEOHead from '../components/seo/SEOHead';
import { instructors } from '../constants/team';
import './TeamPage.css';

const TeamPage = () => (
    <div className="team-page">
        <SEOHead
            title="Equipo de Gyrotonic Pozuelo | Atención cercana"
            description="Conoce a las personas que acompañan las sesiones de Gyrotonic Pozuelo con atención cercana y grupos reducidos."
            canonical="/equipo"
        />
        <PageHero
            title="Nuestro equipo"
            subtitle="Atención cercana y acompañamiento durante todo el aprendizaje"
            breadcrumbs={[{ label: 'Inicio', path: '/' }, { label: 'Nuestro equipo', path: '/equipo' }]}
        />

        <div className="container">
            <BackButton />
            <section className="team-intro">
                <span className="eyebrow">Personas y método</span>
                <h2 className="section-title-page">Conoce a quienes te acompañarán</h2>
                <p className="intro-text">
                    En cada sesión prestamos atención a tu experiencia, tu ritmo y tus objetivos generales. Las titulaciones y especialidades detalladas se publicarán cuando el centro termine de verificarlas.
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
                            <p className="story-paragraph">{member.bio}</p>
                        </div>
                    </motion.article>
                ))}
            </section>

            <section className="values-section">
                <h2 className="section-title-page text-center">Cómo son las sesiones</h2>
                <div className="values-grid">
                    <article className="value-card">
                        <div className="value-icon"><HeartHandshake size={40} aria-hidden="true" /></div>
                        <h3 className="value-title">Atención cercana</h3>
                        <p className="value-description">Escuchamos tu punto de partida y ajustamos el aprendizaje a tu experiencia.</p>
                    </article>
                    <article className="value-card">
                        <div className="value-icon"><Users size={40} aria-hidden="true" /></div>
                        <h3 className="value-title">Grupos reducidos</h3>
                        <p className="value-description">Un máximo de cuatro personas permite mantener la atención durante los 60 minutos.</p>
                    </article>
                </div>
            </section>

            <section className="team-cta">
                <h2 className="cta-title">¿Quieres conocernos?</h2>
                <p className="cta-text">Cuéntanos qué buscas y confirma personalmente con el centro la disponibilidad.</p>
                <Link to="/#contact" className="btn btn-primary cta-button">Solicitar información</Link>
            </section>
            <BackButton />
        </div>
    </div>
);

export default TeamPage;
