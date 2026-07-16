import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PageHero.css';

const PageHero = ({
    title,
    subtitle,
    breadcrumbs = [],
    image,
    imagePosition = 'center',
    imagePositionMobile,
}) => {
    const backgroundStyle = image
        ? {
            backgroundImage: `url(${image})`,
            '--page-hero-position': imagePosition,
            '--page-hero-position-mobile': imagePositionMobile ?? imagePosition,
        }
        : undefined;

    return (
        <section className={`page-hero ${image ? 'has-image' : ''}`}>
            <div
                className="page-hero-background"
                style={backgroundStyle}
            >
                <div className="hero-shape hero-shape-1"></div>
                <div className="hero-shape hero-shape-2"></div>
                <div className="hero-shape hero-shape-3"></div>
            </div>
            
            <div className="container page-hero-content">
                {breadcrumbs.length > 0 && (
                    <motion.nav 
                        className="breadcrumb"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        {breadcrumbs.map((crumb, index) => (
                            <React.Fragment key={index}>
                                <Link to={crumb.path} className="breadcrumb-link">
                                    {crumb.label}
                                </Link>
                                {index < breadcrumbs.length - 1 && (
                                    <ChevronRight size={16} className="breadcrumb-separator" />
                                )}
                            </React.Fragment>
                        ))}
                    </motion.nav>
                )}

                <motion.h1 
                    className="page-hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p 
                        className="page-hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </section>
    );
};

export default PageHero;
