# Pendientes para publicar Gyrotonic Pozuelo

Documento operativo actualizado el 16 de julio de 2026. No se sustituirá ningún dato pendiente por información inventada.

## P0 — Bloqueos antes de publicar

| Estado | Pendiente o decisión | Responsable | Afecta | Próxima acción |
|---|---|---|---|---|
| Bloqueado | Razón social, CIF, domicilio y datos registrales | Propietarios / asesoría | Aviso legal | Entregar datos y validar el texto con un profesional |
| Bloqueado | Email corporativo de contacto y privacidad | Propietarios | Legal y contacto | Confirmar una dirección operativa |
| Bloqueado | Revisión jurídica de aviso legal y privacidad | Asesoría jurídica | Páginas legales | Revisar antes de retirar `noindex` |
| Implementado | Titulaciones, especialidades y biografías del equipo | Propietarios | Equipo y SEO | Contenido recuperado de la rama principal y confirmado por el propietario |
| Implementado | Autoría, consentimiento y literal de cada testimonio | Propietarios / alumnos | Testimonios | Autorización confirmada por el propietario; conservar el registro interno de los permisos |
| Pendiente | URL exacta de Google Maps y comprobación del portal 2 | Propietarios | Contacto y mapa | Compartir ficha oficial y probar el pin físicamente |
| Pendiente | Políticas de cancelación, recuperación, bajas y devoluciones | Propietarios | Tarifas y condiciones | Documentar reglas operativas y revisarlas legalmente |

## P1 — Mejoras importantes para el lanzamiento

| Estado | Pendiente o decisión | Responsable | Afecta | Próxima acción |
|---|---|---|---|---|
| Implementado | Fotografías reales del centro, acceso, máquinas y clases | Propietarios / fotografía | Toda la web | Selección, encuadres responsive y copias web optimizadas integrados; conservar los originales sin modificar |
| Pendiente | Imagen Open Graph de 1200 × 630 px | Diseño | Compartición social | Crear tras disponer de fotografía y marca definitivas |
| Pendiente | Prueba completa en móviles reales | Desarrollo / propietarios | Navegación, llamadas, WhatsApp y mapa | Probar iOS y Android antes del lanzamiento |
| Implementado | Verificación visual automatizada y Lighthouse local | Desarrollo | Responsive, accesibilidad y rendimiento | Repetir sobre la preview final desplegada |
| Pendiente | Redirección entre `www` y el dominio canónico | Desarrollo / DNS | SEO | Elegir variante canónica y configurar en Vercel |

## P2 — Mejoras posteriores

| Estado | Mejora | Responsable | Próxima acción |
|---|---|---|---|
| Pendiente | Orientador por objetivo, experiencia y horario | Producto | Validar utilidad con consultas reales |
| Pendiente | Contenido local y preguntas frecuentes | SEO / propietarios | Basarse en preguntas y búsquedas reales |
| Pendiente | Seguimiento de contactos sin datos de salud | Operaciones | Definir campos, base legal y acceso |
| Pendiente | Recordatorios o agenda en tiempo real | Operaciones / desarrollo | Abordar cuando las reglas de horarios estén estabilizadas |

## Decisiones y confirmaciones de los propietarios

- **Implementado — horario:** cierre oficial confirmado a las 21:30. La web y los datos estructurados muestran lunes a viernes, 09:00–21:30.
- **Pendiente — WhatsApp:** confirmar que `+34 696 62 35 79` es el número oficial también para WhatsApp.
- **Implementado — prueba:** la clase privada de prueba de 25 € y el pack de iniciación son servicios distintos; los 25 € no se descuentan del pack.
- **Pendiente — pagos:** confirmar tarjeta, efectivo y otros métodos presenciales. La web solo indica que no hay pago online.
- **Pendiente — actividad sanitaria:** confirmar si existe autorización sanitaria. Hasta entonces no anunciar fisioterapia ni rehabilitación sanitaria.

## Datos legales pendientes

- **Bloqueado:** identidad empresarial, CIF, domicilio, registro y email.
- **Bloqueado:** revisión profesional de todos los textos legales.
- **Implementado:** páginas provisionales con `noindex` y aviso visible.
- **Implementado:** no se carga analítica, publicidad ni píxeles.

## Contenido e imágenes

- **Implementado:** recibidos los originales del estudio y seleccionadas fotografías de clases, acompañamiento, máquinas y acceso.
- **Implementado:** sustituidas las imágenes genéricas de Unsplash; se generaron copias JPEG optimizadas para web en `public/images/web` sin modificar los originales.
- **Implementado:** refinados los encuadres de las cabeceras de Servicios y Equipo, reducidos los recortes de las fotografías interiores y suavizada la exposición de la imagen de atención individual.
- **Implementado:** portada móvil aligerada con una fotografía vertical específica, texto resumido y una jerarquía más compacta; ampliado el ancho útil de textos y tarjetas en las rutas principales.
- **Implementado:** testimonios autorizados recuperados en la home y en `/testimonios`; ruta añadida de nuevo al sitemap.
- **Implementado:** variante blanca y turquesa del logo incorporada al pie de página; el resto de variantes queda disponible para usos futuros.
- **Implementado:** perfiles completos recuperados de la rama principal, con biografías, áreas de experiencia, formación y filosofía; se han suavizado las promesas clínicas.

## Reservas y horarios

- **Implementado:** formulario que prepara WhatsApp; no almacena datos ni confirma una reserva.
- **Implementado:** mensaje expreso de que la solicitud no confirma plaza ni implica pago.
- **Pendiente:** cuadrante de día, hora, profesor, aforo y plazas.
- **Pendiente:** reglas de cambios, recuperaciones y tiempo máximo de respuesta.
- **Pendiente:** decidir franjas prioritarias para promoción.

## Dominio, DNS y correo

- **Implementado:** dominio canónico `.es` en SEO, schema, robots y sitemap.
- **Implementado:** rutas SPA configuradas en `vercel.json`.
- **Pendiente:** recuperar accesos, exportar DNS y conservar MX, SPF, DKIM y DMARC.
- **Pendiente:** añadir solo los registros de Vercel y probar envío/recepción después.

## SEO local y Google Business Profile

- **Pendiente:** confirmar nombre, categoría, horario, teléfono y dirección de la ficha.
- **Pendiente:** añadir fotografías e indicaciones para localizar el portal 2.
- **Pendiente:** conectar Search Console y enviar `https://gyrotonicpozuelo.es/sitemap.xml` tras desplegar.
- **Pendiente:** validar enlaces, datos estructurados y redirecciones en producción.

## Medición y marketing futuro

- **Pendiente:** definir objetivos y métricas antes de incorporar medición.
- **Pendiente:** evaluar analítica respetuosa con la privacidad y actualizar textos/consentimiento si procede.
- **Pendiente:** no incorporar publicidad, cookies o servicios externos sin decisión expresa y revisión legal.

## Web futura de Synergy Pilates

- **Pendiente:** crear proyecto independiente reutilizando únicamente el sistema visual y los componentes adecuados.
- **Pendiente:** definir marca, dominio, contenido, servicios, datos legales y embudo propios; no copiar datos de Gyrotonic.

## Datos y tarifas implementados

- **Implementado:** teléfono `+34 696 62 35 79`, dirección Avenida de Europa 7, portal 2, 28224 Pozuelo de Alarcón, Madrid.
- **Implementado:** clases de 60 minutos, grupos de máximo 4 personas, impuestos incluidos y ausencia de contratación/pago online.
- **Implementado:** prueba independiente 25 €, iniciación (4) 175 €, grupo (4/8) 100 €/190 €, privadas mensuales (4/8) 190 €/375 €, bonos privados (5/10) 235 €/470 € con 2 meses de caducidad y privada suelta 55 €.
