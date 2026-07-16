import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import SEOHead from '../components/seo/SEOHead';
import { SITE, SITE_ADDRESS } from '../config/site';
import './LegalPage.css';

const pages = {
    aviso: {
        title: 'Aviso legal',
        intro: 'Información identificativa del sitio web.',
        content: (
            <>
                <h2>Titular del sitio</h2>
                <p>La razón social, CIF y datos registrales están pendientes de confirmación antes de la publicación definitiva.</p>
                <dl>
                    <div><dt>Nombre comercial</dt><dd>{SITE.shortName}</dd></div>
                    <div><dt>Dominio</dt><dd>{SITE.url}</dd></div>
                    <div><dt>Dirección profesional</dt><dd>{SITE_ADDRESS}</dd></div>
                    <div><dt>Teléfono</dt><dd>{SITE.phoneDisplay}</dd></div>
                </dl>
                <h2>Uso del sitio</h2>
                <p>La información publicada tiene carácter informativo. Las plazas, horarios y promociones se confirman directamente con el centro.</p>
            </>
        ),
    },
    privacidad: {
        title: 'Política de privacidad',
        intro: 'Cómo tratamos los datos de contacto.',
        content: (
            <>
                <h2>Información provisional</h2>
                <p>El responsable legal y el correo para ejercer derechos están pendientes de confirmación. Esta página deberá completarse antes de activar formularios que almacenen información.</p>
                <h2>Solicitud por WhatsApp</h2>
                <p>El formulario actual no guarda datos en esta web. Prepara un mensaje y abre WhatsApp únicamente cuando la persona pulsa el botón. A partir de ese momento se aplican las condiciones de WhatsApp y la conversación es gestionada por el centro.</p>
                <h2>Minimización</h2>
                <p>No solicitamos diagnósticos, informes médicos ni otra información de salud mediante la web. Para una primera consulta basta con indicar el objetivo general y la franja preferida.</p>
                <h2>Derechos</h2>
                <p>El canal definitivo para ejercer los derechos de protección de datos se incorporará cuando se confirme el email corporativo.</p>
            </>
        ),
    },
    cookies: {
        title: 'Política de cookies',
        intro: 'Una web sencilla y sin seguimiento publicitario.',
        content: (
            <>
                <h2>Configuración actual</h2>
                <p>Esta versión no integra analítica, publicidad, píxeles de seguimiento ni fuentes externas. El sitio solo utiliza los recursos técnicos necesarios para funcionar.</p>
                <h2>Google Maps</h2>
                <p>El mapa no se conecta con Google al cargar la página. Solo se activa después de pulsar “Cargar mapa”; en ese momento Google puede tratar información técnica conforme a sus propias condiciones.</p>
                <h2>Cambios futuros</h2>
                <p>Si se incorporan herramientas que requieran consentimiento, esta política y el mecanismo de preferencias se actualizarán antes de activarlas.</p>
            </>
        ),
    },
};

const LegalPage = ({ type }) => {
    const page = pages[type];

    return (
        <div className="legal-page">
            <SEOHead
                title={`${page.title} | ${SITE.shortName}`}
                description={page.intro}
                canonical={`/${type === 'aviso' ? 'aviso-legal' : type}`}
                noIndex
            />
            <PageHero
                title={page.title}
                subtitle={page.intro}
                breadcrumbs={[{ label: 'Inicio', path: '/' }, { label: page.title }]}
            />
            <article className="container legal-content">
                <div className="legal-notice" role="status">
                    Documento provisional: faltan datos empresariales antes de publicar.
                </div>
                {page.content}
                <Link className="btn btn-outline" to="/">Volver al inicio</Link>
            </article>
        </div>
    );
};

export default LegalPage;
