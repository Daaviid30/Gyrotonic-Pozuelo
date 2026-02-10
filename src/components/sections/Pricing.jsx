import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Button from '../ui/Button';
import './Pricing.css';

const plans = [
    {
        name: "Pack de Iniciación",
        price: "175€",
        priceDetail: "4 Sesiones + Valoración",
        features: [
            "4 Clases Privadas (45-60 min)",
            "Aprendizaje de la Pulley Tower",
            "Valoración funcional personalizada"
        ],
        highlight: true,
        note: "Paso obligatorio para clases grupales"
    },
    {
        name: "Clases en Grupo",
        price: "100€/mes",
        priceDetail: "1 día por semana",
        features: [
            "4 clases mensuales",
            "Máximo 3-4 personas",
            "Atención personalizada",
            "Pago mensual domiciliado"
        ],
        highlight: false
    },
    {
        name: "Entrenamiento Privado",
        price: "190€/mes",
        priceDetail: "1 día por semana",
        features: [
            "4 clases mensuales 1 a 1",
            "También disponible en bonos",
            "Flexibilidad horaria",
            "Atención exclusiva"
        ],
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
                            {plan.priceDetail && <p className="plan-price-detail">{plan.priceDetail}</p>}
                            <ul className="plan-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>
                                        <Check size={18} className="feature-check" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            {plan.note && <p className="plan-note">{plan.note}</p>}
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

                <motion.div
                    className="section-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <Link to="/precios" className="btn btn-outline">
                        Ver Todos los Precios y Bonos
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
