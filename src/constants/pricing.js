export const PRICING = {
    trial: {
        name: 'Clase privada de prueba',
        price: 25,
        note: 'Precio promocional. Su posible descuento posterior del pack está pendiente de confirmación.',
    },
    initiation: {
        name: 'Pack de iniciación',
        price: 175,
        sessions: 4,
        requiredForGroups: true,
    },
    group: [
        { sessions: 4, frequency: '1 día por semana', price: 100 },
        { sessions: 8, frequency: '2 días por semana', price: 190 },
    ],
    privateMonthly: [
        { sessions: 4, frequency: '1 día por semana', price: 190 },
        { sessions: 8, frequency: '2 días por semana', price: 375 },
    ],
    privateBundles: [
        { sessions: 5, price: 235, expiry: '2 meses' },
        { sessions: 10, price: 470, expiry: '2 meses' },
    ],
    privateSingle: 55,
};

export const formatPrice = (price) => `${price} €`;
