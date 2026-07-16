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
        description: 'Puedes conocer el método en una clase privada de prueba. Para acceder posteriormente a los grupos, el pack de iniciación permite aprender de forma progresiva el manejo de la Pulley Tower y los patrones básicos.',
        features: [
            `Clase privada de prueba: ${formatPrice(PRICING.trial.price)} (precio promocional)`,
            `Pack de iniciación: ${PRICING.initiation.sessions} clases privadas por ${formatPrice(PRICING.initiation.price)}`,
            'Acompañamiento individual y orientación sobre la modalidad más adecuada',
            'El pack de iniciación es el paso previo a las clases grupales',
        ],
        duration: '60 minutos por clase',
        idealFor: 'Personas que no han practicado GYROTONIC® o quieren conocer el centro antes de continuar.',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=1000&auto=format&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop',
    },
];

const faqs = [
    {
        question: '¿Por qué es necesario el pack de iniciación?',
        answer: 'La Pulley Tower y los patrones de GYROTONIC® requieren una introducción práctica. Las cuatro sesiones privadas permiten aprender con seguridad y llegar al grupo con una base común.',
    },
    {
        question: '¿La prueba de 25 € se descuenta del pack?',
        answer: 'Esa condición está pendiente de confirmación. Antes de reservar te explicaremos el precio y las opciones de continuidad sin sorpresas.',
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

const PricingPage = () => (
    <div className="pricing-page">
        <SEOHead
            title="Precios GYROTONIC® Pozuelo | Tarifas y bonos"
            description="Tarifas de GYROTONIC® en Pozuelo: prueba privada 25 €, iniciación 175 €, grupos desde 100 €/mes, clases privadas y bonos. Sesiones de 60 minutos."
            canonical="/precios"
        />
        <SchemaMarkup type="pricing" />
        <PageHero title="Precios y bonos" subtitle="Tarifas claras para empezar y continuar a tu ritmo" breadcrumbs={[{ label: 'Inicio', path: '/' }, { label: 'Precios y bonos', path: '/precios' }]} />

        <div className="container">
            <BackButton />

            <motion.section className="pricing-intro" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="eyebrow">Sin letra pequeña</span>
                <h2 className="section-title-page">Una hora completa en cada sesión</h2>
                <p className="intro-text">Todos los precios incluyen impuestos. No se realizan pagos online: primero hablamos contigo, confirmamos la plaza y te explicamos la mejor forma de comenzar.</p>
            </motion.section>

            <section className="detailed-pricing" aria-label="Modalidades y tarifas">
                {pricingOptions.map((option, index) => (
                    <motion.article key={option.title} className={`pricing-detail ${index % 2 === 1 ? 'reverse' : ''}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="pricing-detail-image">
                            <img src={option.image} alt="" loading="lazy" width="1000" height="667" />
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
                                                <ul className="pricing-option-items">{pricingOption.items.map((item) => <li key={item}>{item}</li>)}</ul>
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
                <h2 className="cta-title">¿No sabes qué opción elegir?</h2>
                <p className="cta-text">Cuéntanos qué buscas y qué horarios te encajan. Te orientaremos sin compromiso y confirmaremos personalmente la disponibilidad.</p>
                <Link to="/#contact" className="btn btn-primary cta-button">Solicitar orientación</Link>
            </section>
            <BackButton />
        </div>
    </div>
);

export default PricingPage;
