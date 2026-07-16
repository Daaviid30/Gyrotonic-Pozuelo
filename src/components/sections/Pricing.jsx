import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PRICING, formatPrice } from '../../constants/pricing';
import Button from '../ui/Button';
import './Pricing.css';

const plans = [
    {
        name: PRICING.trial.name,
        price: formatPrice(PRICING.trial.price),
        priceDetail: 'Primera experiencia individual',
        features: ['60 minutos completos', 'Conoce el método y la máquina', 'Orientación personal al finalizar'],
        note: 'Promoción para nuevos alumnos',
    },
    {
        name: PRICING.initiation.name,
        price: formatPrice(PRICING.initiation.price),
        priceDetail: `${PRICING.initiation.sessions} clases privadas`,
        features: ['Aprendizaje de la Pulley Tower', 'Introducción progresiva al método', 'Paso previo a las clases grupales'],
        highlight: true,
        note: 'Necesario antes de incorporarse a un grupo',
    },
    {
        name: 'Clases en grupo',
        price: `Desde ${formatPrice(PRICING.group[0].price)}/mes`,
        priceDetail: '4 u 8 clases al mes',
        features: ['Grupos de hasta 4 personas', 'Sesiones de 60 minutos', '100 €/mes o 190 €/mes'],
    },
    {
        name: 'Clases privadas',
        price: `Desde ${formatPrice(PRICING.privateMonthly[0].price)}/mes`,
        priceDetail: 'Cuotas, bonos o clase suelta',
        features: ['Atención individual', 'Bonos de 5 y 10 clases', `Clase suelta: ${formatPrice(PRICING.privateSingle)}`],
    },
];

const Pricing = () => (
    <section id="pricing" className="section pricing-section">
        <div className="container">
            <div className="text-center mb-16">
                <span className="eyebrow">Tarifas transparentes</span>
                <h2 className="section-title">Elige cómo empezar</h2>
                <p className="section-subtitle">Todas las opciones incluyen sesiones completas de 60 minutos e impuestos.</p>
            </div>

            <div className="pricing-grid">
                {plans.map((plan) => (
                    <article key={plan.name} className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}>
                        <h3 className="plan-name">{plan.name}</h3>
                        <div className="plan-price">{plan.price}</div>
                        <p className="plan-price-detail">{plan.priceDetail}</p>
                        <ul className="plan-features">
                            {plan.features.map((feature) => (
                                <li key={feature}><Check size={18} className="feature-check" aria-hidden="true" />{feature}</li>
                            ))}
                        </ul>
                        {plan.note && <p className="plan-note">{plan.note}</p>}
                        <Button href="#contact" variant={plan.highlight ? 'primary' : 'outline'} className="w-full">
                            Consultar disponibilidad
                        </Button>
                    </article>
                ))}
            </div>

            <motion.div className="section-cta" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Link to="/precios" className="btn btn-outline">Ver todos los precios y bonos</Link>
            </motion.div>
        </div>
    </section>
);

export default Pricing;
