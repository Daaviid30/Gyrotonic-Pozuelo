import React, { useState } from 'react';
import { Clock, ExternalLink, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MAP_DIRECTIONS_URL, MAP_EMBED_URL, SITE, SITE_ADDRESS, whatsappUrl } from '../../config/site';
import Button from '../ui/Button';
import './Contact.css';

const initialForm = {
    name: '',
    phone: '',
    service: 'Clase privada de prueba',
    availability: 'Mañana',
    message: '',
    privacy: false,
};

const Contact = () => {
    const [formData, setFormData] = useState(initialForm);
    const [mapLoaded, setMapLoaded] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setFormData((current) => ({ ...current, [target.name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const message = [
            `Hola, soy ${formData.name}. Me gustaría solicitar información en Gyrotonic Pozuelo.`,
            `Interés: ${formData.service}.`,
            `Franja preferida: ${formData.availability}.`,
            formData.phone ? `Mi teléfono: ${formData.phone}.` : '',
            formData.message ? `Comentario: ${formData.message}` : '',
        ].filter(Boolean).join('\n');

        window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
        setStatus('WhatsApp se ha abierto en otra pestaña. Revisa y envía el mensaje para completar la solicitud.');
    };

    return (
        <section id="contact" className="section contact-section bg-off-white">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="eyebrow">Primera experiencia</span>
                    <h2 className="section-title">Contáctanos</h2>
                    <p className="section-subtitle">Estamos aquí para resolver tus dudas, conocer tus objetivos y orientarte personalmente.</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="info-item">
                            <MapPin className="info-icon" aria-hidden="true" />
                            <div>
                                <h3>Ubicación</h3>
                                <p>{SITE_ADDRESS}</p>
                                <a className="text-link" href={MAP_DIRECTIONS_URL} target="_blank" rel="noreferrer">
                                    Cómo llegar <ExternalLink size={15} aria-hidden="true" />
                                </a>
                            </div>
                        </div>

                        <div className="info-item">
                            <Phone className="info-icon" aria-hidden="true" />
                            <div>
                                <h3>Teléfono</h3>
                                <a className="contact-value" href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <Clock className="info-icon" aria-hidden="true" />
                            <div>
                                <h3>Horario general</h3>
                                <p>{SITE.openingHours}</p>
                                <p className="info-detail">Atención con cita previa. La disponibilidad se confirma con el centro.</p>
                            </div>
                        </div>

                        <div className="session-promise">
                            <Clock aria-hidden="true" />
                            <div>
                                <strong>Una hora completa para ti</strong>
                                <p>Cada clase dura 60 minutos. Dejamos margen entre sesiones para empezar con puntualidad y sin restar tiempo a tu práctica.</p>
                            </div>
                        </div>

                        <div className={`map-container ${mapLoaded ? 'is-loaded' : ''}`}>
                            {mapLoaded ? (
                                <iframe
                                    title="Mapa de Gyrotonic Pozuelo"
                                    src={MAP_EMBED_URL}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            ) : (
                                <div className="map-consent">
                                    <MapPin size={34} aria-hidden="true" />
                                    <strong>Ver ubicación en el mapa</strong>
                                    <p>El mapa de Google solo se conecta cuando decides cargarlo.</p>
                                    <button type="button" className="btn btn-outline" onClick={() => setMapLoaded(true)}>
                                        Cargar mapa
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-heading">
                            <MessageCircle aria-hidden="true" />
                            <div>
                                <h3>Solicita tu primera sesión</h3>
                                <p>Prepararemos un mensaje para WhatsApp. Nada se almacena en esta web.</p>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required maxLength={80} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Teléfono <span>(opcional)</span></label>
                            <input type="tel" id="phone" name="phone" autoComplete="tel" placeholder="600 000 000" value={formData.phone} onChange={handleChange} maxLength={24} />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="service">Me interesa</label>
                                <select id="service" name="service" value={formData.service} onChange={handleChange}>
                                    <option>Clase privada de prueba</option>
                                    <option>Pack de iniciación</option>
                                    <option>Clases privadas</option>
                                    <option>Clases grupales</option>
                                    <option>No lo sé, quiero orientación</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="availability">Franja preferida</label>
                                <select id="availability" name="availability" value={formData.availability} onChange={handleChange}>
                                    <option>Mañana</option>
                                    <option>Mediodía</option>
                                    <option>Primera hora de la tarde</option>
                                    <option>Tarde</option>
                                    <option>Necesito flexibilidad</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">¿Qué te gustaría trabajar? <span>(opcional)</span></label>
                            <textarea id="message" name="message" rows="4" placeholder="Por ejemplo: moverme mejor, ganar fuerza o complementar mi deporte." value={formData.message} onChange={handleChange} maxLength={500} />
                            <small>No incluyas diagnósticos, informes médicos ni datos de salud sensibles.</small>
                        </div>

                        <label className="privacy-check">
                            <input type="checkbox" name="privacy" checked={formData.privacy} onChange={handleChange} required />
                            <span>He leído la <Link to="/privacidad">información de privacidad</Link> y autorizo la preparación del mensaje.</span>
                        </label>

                        <Button type="submit" variant="primary" className="w-full">
                            Continuar por WhatsApp
                        </Button>

                        <a className="call-alternative" href={`tel:${SITE.phoneHref}`}>
                            Prefiero llamar al {SITE.phoneDisplay}
                        </a>

                        {status && <p className="form-status" role="status">{status}</p>}

                        <div className="form-trust">
                            <ShieldCheck size={18} aria-hidden="true" />
                            <span>Solicitar información no confirma una plaza ni supone ningún pago.</span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
