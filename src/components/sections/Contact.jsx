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
                        <div className="map-placeholder">
                            <p>Mapa de Ubicación</p>
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
