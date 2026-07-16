import React, { useEffect, useState } from 'react';
import './FluidCursor.css';

const FluidCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target;
            setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
        };

        window.addEventListener('mousemove', mouseMove);
        return () => window.removeEventListener('mousemove', mouseMove);
    }, []);

    return (
        <>
            <div
                className={`fluid-cursor-main ${isPointer ? 'hover' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
            <div
                className={`fluid-cursor-follower ${isPointer ? 'hover' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
        </>
    );
};

export default FluidCursor;
