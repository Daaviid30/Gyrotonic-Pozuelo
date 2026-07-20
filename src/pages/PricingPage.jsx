import React from 'react';
import { Calendar, CheckCircle, Clock, Euro, HelpCircle, Sparkles, User, Users2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BackButton from '../components/ui/BackButton';
import PageHero from '../components/ui/PageHero';
import SchemaMarkup from '../components/seo/SchemaMarkup';
import SEOHead from '../components/seo/SEOHead';
import { PRICING, formatPrice } from '../constants/pricing';
import './PricingPage.css';

const pricingOptions = [
    {
        icon: <Sparkles size={48} aria-hidden="true" />,
        title: 'Primera experiencia e iniciación',
        subtitle: 'Aprende el método antes de incorporarte a un grupo',
        price: `${formatPrice(PRICING.trial.price)} / ${formatPrice(PRICING.initiation.price)}`,
        description: 'Puedes conocer el método en una clase privada de prueba. La prueba y el pack de iniciación son servicios distintos. Para acceder posteriormente a los grupos, el pack permite aprender de forma progresiva el manejo de la Pulley Tower y los patrones básicos.',
        features: [
            `Clase privada de prueba: ${formatPrice(PRICING.trial.price)} (precio promocional)`,
            `Pack de iniciación: ${PRICING.initiation.sessions} clases privadas por ${formatPrice(PRICING.initiation.price)}`,
            'La prueba de 25 € no se descuenta del pack de iniciación',
            'Acompañamiento individual y orientación sobre la modalidad más adecuada',
            'El pack de iniciación es el paso previo a las clases grupales',
        ],
        duration: '60 minutos por clase',
        idealFor: 'Personas que no han practicado GYROTONIC® o quieren conocer el centro antes de continuar.',
        image: '/images/web/torre-poleas.jpg',
        imageAlt: 'Equipamiento del estudio de Gyrotonic Pozuelo',
    },
    {
        icon: <Users2 size={48} aria-hidden="true" />,
        title: 'Clases en grupo',
        subtitle: 'Grupos de hasta 4 personas',
        price: `${formatPrice(PRICING.group[0].price)}–${formatPrice(PRICING.group[1].price)}/mes`,
        description: 'Después de completar la iniciación, puedes mantener una práctica regular en un grupo pequeño, con supervisión y espacio para corregir cada movimiento.',
        features: PRICING.group.map((option) => `${option.frequency}: ${option.sessions} clases por ${formatPrice(option.price)}/mes`),
        duration: '60 minutos por clase',
        idealFor: 'Alumnos que buscan constancia y disfrutan de una práctica compartida sin renunciar a la atención cercana.',
        image: '/images/web/grupo-reducido.jpg',
        imageAlt: 'Clase en grupo reducido en el estudio',
    },
    {
        icon: <User size={48} aria-hidden="true" />,
        title: 'Clases privadas',
        subtitle: 'Una sesión centrada por completo en ti',
        price: 'Cuotas, bonos y clase suelta',
        description: 'Las sesiones individuales permiten adaptar el ritmo, la progresión y el trabajo a tus objetivos, experiencia y disponibilidad.',
        pricingOptions: [
            {
                category: 'Cuotas mensuales',
                description: 'Rutina fija con plaza reservada',
                items: PRICING.privateMonthly.map((option) => `${option.frequency} (${option.sessions} clases): ${formatPrice(option.price)}/mes`),
            },
            {
                category: 'Bonos flexibles',
                description: 'Caducidad de 2 meses',
                items: PRICING.privateBundles.map((option) => `Bono de ${option.sessions} clases: ${formatPrice(option.price)}`),
            },
            {
                category: 'Clase suelta',
                items: [`1 clase privada: ${formatPrice(PRICING.privateSingle)}`],
            },
        ],
        duration: '60 minutos por clase',
        idealFor: 'Personas que prefieren atención individual, necesitan flexibilidad o tienen un objetivo específico de movimiento o rendimiento.',
        image: '/images/web/atencion-personal.jpg',
        imageAlt: 'Atención individual durante una sesión privada',
        imageClass: 'photo-softened',
    },
];

const faqs = [
    {
        question: '¿Por qué es necesario el pack de iniciación?',
        answer: 'La Pulley Tower y los patrones de GYROTONIC® requieren una introducción práctica. Las cuatro sesiones privadas permiten aprender con seguridad y llegar al grupo con una base común.',
    },
    {
        question: '¿La prueba de 25 € se descuenta del pack?',
        answer: 'No. La clase privada de prueba y el pack de iniciación son servicios distintos, por lo que los 25 € de la prueba no se descuentan de los 175 € del pack.',
    },
    {
        question: '¿Cuánto dura realmente una clase?',
        answer: 'La práctica dura 60 minutos completos. El centro deja margen adicional entre clases para recibirte, preparar el espacio y empezar con puntualidad.',
    },
    {
        question: '¿Puedo combinar grupo y sesiones privadas?',
        answer: 'Sí. El equipo puede orientarte sobre la combinación más adecuada según tus objetivos, disponibilidad y experiencia.',
    },
    {
        question: '¿Cómo se confirma una plaza?',
        answer: 'La web recoge tu franja preferida, pero la plaza se confirma personalmente por teléfono o WhatsApp porque los grupos son reducidos y la disponibilidad puede variar.',
    },
    {
        question: '¿Se puede pagar online?',
        answer: 'De momento no. La contratación y el pago se realizan directamente con el centro.',
    },
];

const splitPricingItem = (item) => {
    const separatorIndex = item.lastIndexOf(': ');

    if (separatorIndex === -1) {
        return { label: item, amount: null };
    }

    return {
        label: item.slice(0, separatorIndex),
        amount: item.slice(separatorIndex + 2),
    };
};

const PricingPage = () => (
    <div className="pricing-page">
        <SEOHead
            title="Precios GYROTONIC® Pozuelo | Tarifas y bonos"
            description="Tarifas de GYROTONIC® en Pozuelo: prueba privada 25 €, iniciación 175 €, grupos desde 100 €/mes, clases privadas y bonos. Sesiones de 60 minutos."
            canonical="/precios"
        />
        <SchemaMarkup type="pricing" />
        <PageHero
            title="Precios y bonos"
            subtitle="Invierte en tu bienestar con tarifas flexibles y transparentes"
            breadcrumbs={[{ label: 'Inicio', path: '/' }, { label: 'Precios y bonos', path: '/precios' }]}
            image="/images/web/pulley-tower.jpg"
            imagePosition="center 52%"
        />

        <div className="container">
            <BackButton />

            <motion.section className="pricing-intro" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="eyebrow">Sin letra pequeña</span>
                <h2 className="section-title-page">Tarifas claras y sin sorpresas</h2>
                <p className="intro-text">Todas las modalidades incluyen sesiones completas de 60 minutos y los precios muestran los impuestos incluidos. Primero hablamos contigo, confirmamos la plaza y te orientamos sobre la mejor forma de comenzar.</p>
            </motion.section>

            <section className="detailed-pricing" aria-label="Modalidades y tarifas">
                {pricingOptions.map((option, index) => (
                    <motion.article key={option.title} className={`pricing-detail ${index % 2 === 1 ? 'reverse' : ''}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="pricing-detail-image">
                            <img
                                src={option.image}
                                alt={option.imageAlt}
                                className={option.imageClass ?? ''}
                                loading="lazy"
                                width="1000"
                                height="667"
                            />
                            <div className="pricing-overlay"><div className="pricing-icon-large">{option.icon}</div></div>
                        </div>
                        <div className="pricing-detail-content">
                            <h2 className="pricing-detail-title">{option.title}</h2>
                            <p className="pricing-detail-subtitle">{option.subtitle}</p>
                            <div className="pricing-detail-price"><Euro size={24} aria-hidden="true" /><span>{option.price}</span></div>
                            <p className="pricing-detail-description">{option.description}</p>

                            <div className="pricing-features">
                                <h3 className="features-title">Tarifas y condiciones</h3>
                                {option.features && (
                                    <ul className="features-list">
                                        {option.features.map((feature) => <li key={feature} className="feature-item"><CheckCircle size={18} aria-hidden="true" /><span>{feature}</span></li>)}
                                    </ul>
                                )}
                                {option.pricingOptions && (
                                    <div className="pricing-options-grid">
                                        {option.pricingOptions.map((pricingOption) => (
                                            <div key={pricingOption.category} className="pricing-option-block">
                                                <h4 className="pricing-option-category">{pricingOption.category}</h4>
                                                {pricingOption.description && <p className="pricing-option-desc">{pricingOption.description}</p>}
                                                <ul className="pricing-option-items">
                                                    {pricingOption.items.map((item) => {
                                                        const { label, amount } = splitPricingItem(item);

                                                        return (
                                                            <li key={item}>
                                                                <span className="pricing-option-label">{label}</span>
                                                                {amount && <strong className="pricing-option-amount">{amount}</strong>}
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="pricing-meta">
                                <div className="meta-item"><Clock size={20} aria-hidden="true" /><span><strong>Duración:</strong> {option.duration}</span></div>
                                <div className="meta-item"><Calendar size={20} aria-hidden="true" /><span><strong>Ideal para:</strong> {option.idealFor}</span></div>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </section>

            <section className="faq-section">
                <h2 className="section-title-page text-center">Preguntas frecuentes</h2>
                <p className="section-subtitle-page">Lo esencial antes de solicitar tu primera sesión</p>
                <div className="faq-grid">
                    {faqs.map((faq) => (
                        <article key={faq.question} className="faq-card">
                            <div className="faq-icon"><HelpCircle size={28} aria-hidden="true" /></div>
                            <h3 className="faq-question">{faq.question}</h3>
                            <p className="faq-answer">{faq.answer}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="pricing-cta">
                <h2 className="cta-title">¿Listo para empezar?</h2>
                <p className="cta-text">Cuéntanos qué buscas y qué horarios te encajan. Te ayudaremos a elegir la modalidad más adecuada y confirmaremos personalmente la disponibilidad.</p>
                <Link to="/#contact" className="btn btn-primary cta-button">Solicitar primera sesión</Link>
            </section>
            <BackButton />
        </div>
    </div>
);

export default PricingPage;
