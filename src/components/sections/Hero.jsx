import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import './Hero.css';

const Hero = () => {
    // Placeholder image that looks like a clean studio or movement
    // In production, this should be replaced with a real studio photo/video
    const heroBg = "images/clase.jpg";

    return (
        <section className="hero-section" id="home">
            <div className="hero-background" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-overlay"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text-wrapper"
                >
                    <h1 className="hero-title">
                        Movimiento inteligente para tu <span className="text-highlight">cuerpo</span> y tu <span className="text-highlight">vida</span>
                    </h1>
                    <p className="hero-subtitle">
                        Equilibrio · Fuerza · Bienestar
                    </p>
                    <p className="hero-description">
                        ¡Da un gyro a tu vida en Pozuelo! Rehabilitación, rendimiento y bienestar en cada movimiento.
                    </p>

                    <div className="hero-buttons">
                        <Button href="#contact" variant="primary">Reserva tu primera sesión</Button>
                        <Button href="#method" variant="outline" className="btn-hero-outline">Descubre el método</Button>
                    </div>
                </motion.div>

                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, duration: 2, repeat: Infinity }}
                >
                    <div className="mouse-icon">
                        <div className="wheel"></div>
                    </div>
                    <span>Descubre más</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
