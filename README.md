# Gyrotonic Pozuelo

Web de Gyrotonic Pozuelo desarrollada con React y Vite. Presenta el método, las modalidades, el equipo, testimonios, tarifas y un flujo de solicitud de primera sesión por WhatsApp.

## Desarrollo local

```bash
npm ci
npm run dev
```

Comprobaciones antes de publicar:

```bash
npm run lint
npm run build
npm audit --omit=dev
```

## Configuración

Los datos compartidos por SEO, contacto y componentes están centralizados en `src/config/site.js`. Las tarifas están en `src/constants/pricing.js`.

Antes de publicar, revisar [`PENDIENTES_WEB.md`](./PENDIENTES_WEB.md). Las páginas legales siguen marcadas como provisionales y no deben indexarse hasta confirmar los datos empresariales.

## Despliegue

El proyecto está preparado para Vercel mediante `vercel.json`. El dominio canónico previsto es `https://gyrotonicpozuelo.es`.

Al conectar el dominio no deben eliminarse los registros MX, SPF, DKIM o DMARC del correo existente.
