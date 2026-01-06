import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Heart, Target, Mail, Phone } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import BackButton from '../components/ui/BackButton';
import './TeamPage.css';

const TeamPage = () => {
    const breadcrumbs = [
        { label: 'Inicio', path: '/' },
        { label: 'Nuestro Equipo', path: '/team' }
    ];

    const team = [
        {
            name: "Mª José Cruz",
            role: "Co-Directora e Instructora Certificada",
            image: "/images/maria_jose.jpg",
            bio: "María José descubrió GYROTONIC® durante su carrera como bailarina profesional. Tras años de entrenamiento intensivo en danza contemporánea y ballet, sufrió lesiones recurrentes que amenazaban su carrera artística.",
            story: "Fue entonces cuando conoció el método GYROTONIC® y experimentó una transformación completa. No solo se rehabilitó completamente, sino que descubrió un rendimiento físico que nunca antes había alcanzado. Esta experiencia la llevó a certificarse como instructora, dedicando su vida a ayudar a otros a comprender su cuerpo y moverse sin dolor.",
            specialties: [
                "Rehabilitación de lesiones de columna",
                "Trabajo con bailarines y atletas",
                "Mejora del rendimiento artístico",
                "Consciencia corporal y movimiento"
            ],
            certifications: [
                "GYROTONIC® Level 2 Certified Trainer",
                "GYROKINESIS® Certified Instructor",
                "Formación en Anatomía del Movimiento",
                "Especialización en Rehabilitación Funcional"
            ],
            philosophy: "Creo que cada cuerpo tiene su propia historia y su propio potencial. Mi misión es ayudarte a descubrirlo, respetando tu ritmo y celebrando cada pequeño avance."
        },
        {
            name: "Antonio Castro",
            role: "Co-Director y Entrenador Certificado",
            image: "/images/antonio.jpg",
            bio: "Antonio llegó a GYROTONIC® desde el mundo del fútbol profesional y la osteopatía. Como jugador, experimentó de primera mano las limitaciones de los métodos de entrenamiento tradicionales y las lesiones que estos pueden causar.",
            story: "Tras retirarse del fútbol, estudió osteopatía y terapias manuales, buscando formas más inteligentes de entrenar y recuperar el cuerpo. Al descubrir GYROTONIC®, encontró el eslabón perdido: un sistema que combina fuerza, movilidad y recuperación en un solo método. Su enfoque técnico y rehabilitador ayuda a que cada alumno alcance su máximo potencial físico de forma segura.",
            specialties: [
                "Rehabilitación deportiva",
                "Prevención de lesiones",
                "Optimización del rendimiento físico",
                "Trabajo postural y biomecánico"
            ],
            certifications: [
                "GYROTONIC® Certified Trainer",
                "Diplomado en Osteopatía",
                "Certificación en Terapias Manuales",
                "Entrenador Personal Certificado"
            ],
            philosophy: "El cuerpo es increíblemente inteligente cuando le das las herramientas adecuadas. Mi trabajo es guiarte hacia un movimiento que sea fuerte, eficiente y sostenible en el tiempo."
        }
    ];

    const values = [
        {
            icon: <Heart size={40} />,
            title: "Pasión por el Bienestar",
            description: "Creemos profundamente en el poder transformador del movimiento consciente"
        },
        {
            icon: <Target size={40} />,
            title: "Atención Personalizada",
            description: "Cada persona es única y merece un enfoque adaptado a sus necesidades"
        },
        {
            icon: <Award size={40} />,
            title: "Excelencia Profesional",
            description: "Formación continua y compromiso con los más altos estándares de calidad"
        },
        {
            icon: <GraduationCap size={40} />,
            title: "Educación Continua",
            description: "Aprender y evolucionar constantemente para ofrecer lo mejor a nuestros alumnos"
        }
    ];

    return (
        <div className="team-page">
            <PageHero
                title="Nuestro Equipo"
                subtitle="Conoce a los profesionales que te guiarán en tu transformación"
                breadcrumbs={breadcrumbs}
            />

            <div className="container">
                <BackButton />

                {/* Introducción */}
                <motion.section
                    className="team-intro"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title-page">Experiencia y Dedicación</h2>
                    <p className="intro-text">
                        Nuestro equipo está formado por profesionales certificados internacionalmente, con años de experiencia tanto en la práctica del método como en la enseñanza. Cada uno de nosotros ha experimentado personalmente el poder transformador de GYROTONIC®, y esa pasión es lo que nos impulsa a compartirlo contigo.
                    </p>
                </motion.section>

                {/* Perfiles del Equipo */}
                <section className="team-profiles">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            className="profile-section"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="profile-header">
                                <div className="profile-image-wrapper">
                                    <img src={member.image} alt={member.name} className="profile-image" />
                                </div>
                                <div className="profile-info">
                                    <h3 className="profile-name">{member.name}</h3>
                                    <p className="profile-role">{member.role}</p>
                                </div>
                            </div>

                            <div className="profile-content">
                                <div className="profile-story">
                                    <p className="story-paragraph">{member.bio}</p>
                                    <p className="story-paragraph">{member.story}</p>
                                </div>

                                <div className="profile-details-grid">
                                    <div className="detail-box">
                                        <h4 className="detail-title">Especialidades</h4>
                                        <ul className="detail-list">
                                            {member.specialties.map((specialty, i) => (
                                                <li key={i}>{specialty}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="detail-box">
                                        <h4 className="detail-title">Certificaciones</h4>
                                        <ul className="detail-list">
                                            {member.certifications.map((cert, i) => (
                                                <li key={i}>{cert}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="philosophy-box">
                                    <h4 className="philosophy-title">Filosofía</h4>
                                    <p className="philosophy-text">"{member.philosophy}"</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Valores */}
                <section className="values-section">
                    <h2 className="section-title-page text-center">Nuestros Valores</h2>
                    <p className="section-subtitle-page">
                        Los principios que guían nuestra forma de trabajar y conectar contigo
                    </p>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="value-card"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="value-icon">{value.icon}</div>
                                <h3 className="value-title">{value.title}</h3>
                                <p className="value-description">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <motion.section
                    className="team-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="cta-title">¿Quieres Conocernos?</h2>
                    <p className="cta-text">
                        Visítanos para una consulta gratuita. Estaremos encantados de conocerte, escuchar tus objetivos y mostrarte cómo podemos ayudarte.
                    </p>
                    <a href="/#contact" className="btn btn-primary cta-button">
                        Reserva tu Consulta Gratuita
                    </a>
                </motion.section>

                <BackButton />
            </div>
        </div>
    );
};

export default TeamPage;
