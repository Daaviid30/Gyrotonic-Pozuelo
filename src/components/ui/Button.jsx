import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    onClick,
    href,
    className = '',
    type = 'button',
    ...props
}) => {
    const baseClass = `btn btn-${variant} ${className}`;
    const reduceMotion = useReducedMotion();
    const interactions = reduceMotion ? {} : {
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.97 },
    };

    if (href) {
        return (
            <motion.a
                href={href}
                className={baseClass}
                {...interactions}
                {...props}
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
            {...interactions}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
