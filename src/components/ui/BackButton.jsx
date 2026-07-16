import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './BackButton.css';

const BackButton = ({ to = '/', label = 'Volver al inicio' }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (to) {
            navigate(to);
        } else {
            navigate(-1);
        }
    };

    return (
        <button
            className="back-button"
            onClick={handleClick}
            aria-label={label}
        >
            <ArrowLeft size={20} />
            <span>{label}</span>
        </button>
    );
};

export default BackButton;
