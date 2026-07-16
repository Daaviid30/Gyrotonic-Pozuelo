import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import './Hero.css';

const Hero = () => {
    const heroBg = "/images/web/grupo-reducido.jpg";
    const heroBgMobile = "/images/web/pulley-tower.jpg";

    return (
        <section className="hero-section" id="home">
            <div
                className="hero-background"
                style={{
                    '--hero-background-image': `url(${heroBg})`,
                    '--hero-background-image-mobile': `url(${heroBgMobile})`,
                }}
            >
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
                        <span className="hero-copy-desktop">
                            Movimiento inteligente para tu <span className="text-highlight">cuerpo</span> y tu <span className="text-highlight">vida</span>
                        </span>
                        <span className="hero-copy-mobile">
                            Movimiento inteligente para tu <span className="text-highlight">cuerpo</span>
                        </span>
                    </h1>
                    <p className="hero-subtitle">
                        Equilibrio · Fuerza · Bienestar
                    </p>
                    <p className="hero-description">
                        <span className="hero-copy-desktop">
                            Clases individuales y grupos de hasta 4 personas en Pozuelo de Alarcón. Una hora completa para moverte con atención y propósito.
                        </span>
                        <span className="hero-copy-mobile">
                            Clases individuales y grupos reducidos en Pozuelo de Alarcón.
                        </span>
                    </p>

                    <div className="hero-buttons">
                        <Button href="#contact" variant="primary">Solicita tu primera sesión</Button>
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
