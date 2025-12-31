import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    onClick,
    href,
    className = '',
    type = 'button'
}) => {
    const baseClass = `btn btn-${variant} ${className}`;

    if (href) {
        return (
            <motion.a
                href={href}
                className={baseClass}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            type={type}
            className={baseClass}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
};

export default Button;
