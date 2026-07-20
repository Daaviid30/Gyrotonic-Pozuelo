import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { instructors } from '../../constants/team';
import './Team.css';

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
                                <img src={instructor.image} alt={instructor.name} className="instructor-image" loading="lazy" width="680" height="680" />
                            </div>
                            <div className="instructor-info">
                                <h3 className="instructor-name">{instructor.name}</h3>
                                <p className="instructor-role">{instructor.role}</p>
                                <p className="instructor-bio">{instructor.summary}</p>
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
                    <Link to="/equipo" className="btn btn-outline">
                        Conoce más sobre nuestro equipo
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Team;
