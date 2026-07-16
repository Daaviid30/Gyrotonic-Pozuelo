import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const frame = requestAnimationFrame(() => {
                const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                document.querySelector(hash)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
            });
            return () => cancelAnimationFrame(frame);
        }

        window.scrollTo({ top: 0, behavior: 'auto' });
        return undefined;
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
