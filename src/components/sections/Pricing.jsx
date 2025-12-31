import React from 'react';
import { Check } from 'lucide-react';
import Button from '../ui/Button';
import './Pricing.css';

const plans = [
    {
        name: "Clase Suelta",
        price: "60€",
        features: ["Sesión privada (55 min)", "Evaluación inicial", "Sin compromiso"],
        highlight: false
    },
    {
        name: "Bono 5 Sesiones",
        price: "275€",
        features: ["55€ por sesión", "Validez 2 meses", "Reserva prioritaria"],
        highlight: true
    },
    {
        name: "Bono 10 Sesiones",
        price: "500€",
        features: ["50€ por sesión", "Validez 4 meses", "Evaluación de progreso"],
        highlight: false
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="section pricing-section">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">Precios y Bonos</h2>
                    <p className="section-subtitle">Invierte en tu salud con tarifas flexibles.</p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div key={index} className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}>
                            <h3 className="plan-name">{plan.name}</h3>
                            <div className="plan-price">{plan.price}</div>
                            <ul className="plan-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>
                                        <Check size={18} className="feature-check" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button
                                href="#contact"
                                variant={plan.highlight ? 'primary' : 'outline'}
                                className="w-full"
                            >
                                Elegir plan
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
