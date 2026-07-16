import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const frame = requestAnimationFrame(() => {
                document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
            });
            return () => cancelAnimationFrame(frame);
        }

        window.scrollTo({ top: 0, behavior: 'auto' });
        return undefined;
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
