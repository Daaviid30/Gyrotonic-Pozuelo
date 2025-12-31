import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import './Team.css';

const instructors = [
    {
        name: "Mª José Cruz",
        role: "Co-Directora e Instructora",
        bio: "Bailarina profesional y experta en movimiento. Tras sufrir lesiones en su carrera, encontró en Gyrotonic la clave para rehabilitarse y potenciar el rendimiento. Su pasión es ayudarte a comprender tu cuerpo para que vivas sin dolor.",
        image: "/images/maria_jose.jpg"
    },
    {
        name: "Antonio Castro",
        role: "Co-Director y Entrenador",
        bio: "Del fútbol profesional a la osteopatía. Antonio combina su visión de entrenador deportivo con terapias manuales. Su enfoque es técnico y rehabilitador, buscando el máximo potencial físico de cada alumno.",
        image: "/images/antonio.jpg"
    }
];

const Team = () => {
    return (
        <section id="team" className="section team-section">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Nuestro Equipo
                    </motion.h2>
                    <p className="section-subtitle">
                        Profesionales certificados dedicados a tu bienestar.
                    </p>
                </div>

                <div className="team-grid">
                    {instructors.map((instructor, index) => (
                        <motion.div
                            key={index}
                            className="instructor-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="instructor-image-container">
                                <img src={instructor.image} alt={instructor.name} className="instructor-image" />
                            </div>
                            <div className="instructor-info">
                                <h3 className="instructor-name">{instructor.name}</h3>
                                <p className="instructor-role">{instructor.role}</p>
                                <p className="instructor-bio">{instructor.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
