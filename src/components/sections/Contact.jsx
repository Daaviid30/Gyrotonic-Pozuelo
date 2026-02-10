import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '../ui/Button';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Pack de iniciación',
        message: ''
    });
    const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_KEY,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.service,
                    message: formData.message,
                    from_name: 'Formulario GYROTONIC Pozuelo',
                    subject: `Nuevo contacto: ${formData.service}`
                })
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: 'Pack de iniciación',
                    message: ''
                });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section contact-section bg-off-white">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">Contáctanos</h2>
                    <p className="section-subtitle">Estamos aquí para responder tus dudas y empezar tu cambio.</p>
                </div>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <div className="info-item">
                            <MapPin className="info-icon" />
                            <div>
                                <h3>Ubicación</h3>
                                <p>Avenida de Europa, 7, 28224 Pozuelo de Alarcón, Madrid</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Phone className="info-icon" />
                            <div>
                                <h3>Teléfono</h3>
                                <p>912 508 060</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Mail className="info-icon" />
                            <div>
                                <h3>Email</h3>
                                <p>info@gyrotonicpozuelo.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Clock className="info-icon" />
                            <div>
                                <h3>Horario</h3>
                                <p>Lunes - Viernes: 08:00 - 21:00</p>
                                <p>Sábados: 09:00 - 14:00</p>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        {/* Map Container */}
                        <div className="map-container">
                            <iframe
                                title="Ubicación Gyrotonic Pozuelo"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.567087877953!2d-3.805526323450989!3d40.44061897143573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41890696955555%3A0x6969696969696969!2sAv.%20de%20Europa%2C%207%2C%2028224%20Pozuelo%20de%20Alarc%C3%B3n%2C%20Madrid!5e0!3m2!1ses!2ses!4v1703600000000!5m2!1ses!2ses"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Tu nombre"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="tucorreo@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Teléfono</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+34 600..."
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="service">Interesado en</label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                            >
                                <option>Pack de iniciación</option>
                                <option>Clases Privadas</option>
                                <option>Clases Grupales</option>
                                <option>Otro</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="¿Cómo podemos ayudarte?"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        {/* Status Messages */}
                        {status === 'success' && (
                            <div style={{
                                padding: '12px',
                                marginBottom: '16px',
                                backgroundColor: '#d4edda',
                                color: '#155724',
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}>
                                ✅ ¡Mensaje enviado correctamente! Te contactaremos pronto.
                            </div>
                        )}

                        {status === 'error' && (
                            <div style={{
                                padding: '12px',
                                marginBottom: '16px',
                                backgroundColor: '#f8d7da',
                                color: '#721c24',
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}>
                                ❌ Error al enviar el mensaje. Por favor, intenta de nuevo.
                            </div>
                        )}

                        <Button
                            type="submit"
                            variant="primary"
                            className="w-full"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
