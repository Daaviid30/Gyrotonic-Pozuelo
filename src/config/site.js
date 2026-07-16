export const SITE = {
    name: 'GYROTONIC® Pozuelo',
    shortName: 'Gyrotonic Pozuelo',
    url: 'https://gyrotonicpozuelo.es',
    locale: 'es_ES',
    phoneDisplay: '+34 696 62 35 79',
    phoneHref: '+34696623579',
    whatsappNumber: '34696623579',
    email: null,
    address: {
        street: 'Avenida de Europa 7, portal 2',
        postalCode: '28224',
        locality: 'Pozuelo de Alarcón',
        region: 'Madrid',
        country: 'ES',
    },
    openingHours: 'Lunes a viernes, de 09:00 a 21:30',
    sessionDuration: '60 minutos completos',
    instagram: 'https://www.instagram.com/gyrotonicpozuelo/',
};

export const SITE_ADDRESS = `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.locality}, ${SITE.address.region}`;
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(SITE_ADDRESS)}&output=embed`;
export const MAP_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_ADDRESS)}`;

export const absoluteUrl = (path = '/') => new URL(path, SITE.url).toString();

export const whatsappUrl = (message = '') => {
    const query = message ? `?text=${encodeURIComponent(message)}` : '';
    return `https://wa.me/${SITE.whatsappNumber}${query}`;
};
