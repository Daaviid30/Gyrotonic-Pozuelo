import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '../ui/Button';
import './Contact.css';

const Contact = () => {
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
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" placeholder="Tu nombre" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="tu@email.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Teléfono</label>
                            <input type="tel" id="phone" placeholder="+34 600..." />
                        </div>
                        <div className="form-group">
                            <label htmlFor="service">Interesado en</label>
                            <select id="service">
                                <option>Clases Individuales</option>
                                <option>Clases Dúo</option>
                                <option>Rehabilitación</option>
                                <option>Gyrokinesis</option>
                                <option>Otro</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" rows="4" placeholder="¿Cómo podemos ayudarte?"></textarea>
                        </div>
                        <Button type="submit" variant="primary" className="w-full">
                            Enviar Mensaje
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
