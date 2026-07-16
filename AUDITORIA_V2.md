# Auditoría V2 — Gyrotonic Pozuelo

Fecha: 16 de julio de 2026  
Rama de trabajo: `codex/auditoria-visual-v2`

## 1. Resumen ejecutivo

Se realizó una segunda revisión estática integral de la aplicación React/Vite. La base ya centralizaba correctamente el dominio, contacto y tarifas; incluía rutas españolas, redirecciones de rutas antiguas, mapa bajo acción del usuario, páginas legales provisionales con `noindex` y configuración SPA para Vercel.

El principal riesgo detectado inicialmente era de contenido: se publicaban testimonios con afirmaciones clínicas o resultados contundentes cuya autorización seguía pendiente. Esos testimonios se retiraron de forma preventiva. En la iteración del 16 de julio de 2026 el propietario confirmó que proceden de la web anterior y están autorizados, por lo que se recuperaron sus textos originales en la home y en una página propia, sin reintroducir estadísticas no documentadas.

En esa misma iteración se recibió una colección de fotografías reales del estudio, clases, acompañamiento y máquinas. Se seleccionaron las imágenes con mejor composición, se crearon copias optimizadas para web y se sustituyeron todos los recursos de Unsplash. También se confirmó el horario oficial hasta las 21:30 y que la prueba de 25 € es independiente del pack de iniciación.

En la segunda fase se habilitaron Node.js, npm y Chrome headless. Se completaron lint, build, auditorías de dependencias, Lighthouse sobre el build de producción y una matriz visual automatizada de nueve rutas en escritorio, tablet y móvil.

## 2. Problemas encontrados

- Testimonios publicados como reales sin constar todavía la autorización y con promesas sobre dolor, fisioterapia, lesiones y resultados.
- La primera versión auditada no permitía relacionar las credenciales con una fuente confirmada; posteriormente se validaron contra `origin/master`.
- Meta description inicial con promesas de mejora de postura, flexibilidad y bienestar.
- CTA principal con lenguaje de “reserva” cuando el flujo solo solicita información y disponibilidad.
- El menú móvil no respondía a la tecla Escape.
- El desplazamiento a anclas solicitaba animación incluso con reducción de movimiento.
- Faltaba un enlace para saltar directamente al contenido principal.
- Dos imágenes de secciones no declaraban dimensiones ni carga diferida.
- `PENDIENTES_WEB.md` no distinguía claramente prioridad, estado, responsable, área afectada y siguiente acción.

## 3. Cambios visuales y justificación

- Se conserva paleta, tipografía, espaciado, tarjetas, hero y estructura general; no se justificó un rediseño.
- La página de equipo combina cercanía con perfiles completos: trayectoria, áreas de experiencia, formación y filosofía.
- Se mantiene una jerarquía clara con hero, introducción, perfiles, principios de atención y CTA.
- Los testimonios autorizados vuelven a la home y a `/testimonios`, manteniendo sus relatos originales. No se recuperan las antiguas estadísticas de satisfacción o volumen de alumnos porque no constaba una fuente verificable.
- Se sustituyen la imagen del hero y todas las fotografías genéricas de servicios y precios por imágenes reales del estudio.
- Las cabeceras de método, servicios, equipo, precios y testimonios utilizan fotografías diferentes con capas de contraste y encuadres adaptados.
- Tras la revisión del propietario, la cabecera de Servicios se desplaza para mostrar las máquinas completas y la de Equipo se eleva para mantener visibles al instructor y al grupo; ambos encuadres se ajustan por separado en escritorio y móvil.
- Las fotografías interiores de Servicios y Precios dejan de estirarse hasta la altura del texto y conservan una proporción 3:2. La imagen de atención individual recibe además un ajuste no destructivo de brillo, contraste y saturación para suavizar el flash.
- La portada móvil utiliza una fotografía vertical de la Pulley Tower en lugar del recorte cerrado de la clase grupal. Se resume el mensaje inicial, se elimina el zoom de fondo en pantallas pequeñas y se reducen los saltos de línea de títulos, introducciones y tarjetas sin alterar la composición de escritorio.
- La fotografía de la entrada identifica visualmente el bloque de mapa y una variante oficial blanca y turquesa del logo se utiliza en el pie de página.
- Se añade un enlace de salto visible al recibir foco, sin impacto visual durante navegación con ratón.

## 4. Cambios técnicos

- `/testimonios` vuelve a ser una ruta pública y `/testimonials` redirige a la ruta canónica en español; la URL se incorpora al sitemap.
- Se recuperan los componentes, estilos y datos de testimonios y se mantiene únicamente breadcrumb estructurado para esa página.
- Las fotografías seleccionadas se sirven desde `public/images/web` en copias JPEG de 192 a 291 kB, conservando intactos los originales aportados.
- Los datos centralizados y el schema se actualizan al cierre oficial de las 21:30.
- La página de precios y su FAQ aclaran que la prueba de 25 € no se descuenta del pack porque son servicios distintos.
- Se corrigen metadatos y textos que podían interpretarse como promesas médicas o reservas confirmadas.
- El menú móvil se puede cerrar con Escape.
- `ScrollToTop` respeta `prefers-reduced-motion` al navegar hacia anclas.
- Se incorpora `#main-content` y un enlace “Saltar al contenido”.
- Se añaden `loading`, `width` y `height` a imágenes de servicios y equipo en la home.

## 5. Comprobación de la auditoría anterior

Verificado estáticamente:

- Dominio canónico `https://gyrotonicpozuelo.es` centralizado y usado por SEO/schema.
- Teléfono `+34 696 62 35 79` y dirección completa correctos.
- Horario oficial 09:00–21:30, sesiones de 60 minutos y grupos de máximo 4.
- Tarifas centralizadas y coincidentes con todas las cantidades indicadas.
- Impuestos incluidos y ausencia de contratación/pago online comunicados.
- La prueba de 25 € se presenta expresamente como un servicio independiente y no descontable del pack.
- El formulario abre WhatsApp y aclara que no confirma plaza ni implica pago.
- El mapa solo se carga tras pulsar el botón y usa la dirección centralizada.
- Rutas principales en español y redirecciones de rutas antiguas en inglés.
- Páginas legales con `noindex` y aviso de provisionalidad.
- `robots.txt`, sitemap, canonical, Open Graph y schema usan el dominio `.es`.
- `vercel.json` contiene rewrite SPA y cabeceras de seguridad básicas.

## 6. Vulnerabilidades antes y después

- Antes: 10 vulnerabilidades de desarrollo (1 baja, 4 moderadas y 5 altas); producción: 0.
- Paquetes transitivos afectados: `@babel/core`, `ajv`, `brace-expansion`, `flatted`, `js-yaml`, `minimatch`, `picomatch`, `postcss` y `rollup`.
- Dependencia directa afectada: Vite 7.3.0, por vulnerabilidades del servidor de desarrollo. No afectaban al sitio estático generado, pero sí al uso local de Vite.
- Decisión: se ejecutó `npm audit fix` sin `--force`, manteniendo las versiones mayores declaradas.
- Después: 0 vulnerabilidades totales y 0 en producción.

## 7. Dependencias actualizadas

`npm audit fix` actualizó 34 paquetes compatibles del lockfile. Entre ellos, Vite pasó de 7.3.0 a 7.3.6 y se actualizaron las dependencias transitivas vulnerables. No se aplicaron actualizaciones mayores ni se utilizó `--force`.

## 8. Resultado de lint y build

- `npm run lint`: correcto, sin errores ni avisos.
- `npm run build`: correcto con Vite 7.3.6; JS 435,48 kB (138,64 kB gzip) y CSS 44,29 kB (8,29 kB gzip).
- `npm audit`: 0 vulnerabilidades después de la corrección.
- `npm audit --omit=dev`: 0 vulnerabilidades.
- `npm outdated`: revisado; se evitaron actualizaciones mayores automáticas de Vite, ESLint, plugin React, globals y Lucide.
- Lighthouse final sobre build de producción: rendimiento 96, accesibilidad 100, buenas prácticas 100 y SEO 100. En la medición inmediatamente anterior: FCP 1,5 s, LCP 2,6 s, TBT 20 ms y CLS 0.
- `git diff --check`: correcto, sin errores de espacios; Git solo informa de la futura conversión LF/CRLF en Windows.

## 9. Responsive y accesibilidad

Se revisaron visual y automáticamente nueve rutas en 1440 × 1000, 768 × 1024 y 390 × 844: home, método, servicios, equipo, precios, tres páginas legales y 404. No se detectaron desbordamientos horizontales, errores de consola, imágenes sin dimensiones ni encabezados principales ausentes.

También se verificaron menú móvil abierto/cerrado, cierre mediante Escape y `prefers-reduced-motion`. La prueba reveló y permitió corregir que ciertos bloques animados quedaban transparentes hasta entrar en viewport. Se mejoró el contraste del texto secundario, el nombre accesible del logotipo y el tamaño del CTA móvil.

En la iteración de fotografías y testimonios se revisaron además la nueva home y `/testimonios` en escritorio y móvil mediante Chrome headless controlado. Se comprobaron el encuadre del hero, la cabecera fotográfica, las tarjetas de testimonios, la lectura de los relatos detallados y la integración del logo en el pie.

En el refinamiento posterior se revisaron de nuevo `/servicios`, `/equipo` y `/precios` a 1440 × 900 y 390 × 844. Se validaron todas las fotografías de modalidades, la visibilidad de las máquinas, la presencia completa del instructor en Equipo y el recorte más abierto de la tercera imagen de Precios.

La revisión móvil posterior cubrió la home y las rutas `/metodo`, `/servicios`, `/equipo`, `/precios` y `/testimonios` a 390 × 844. Se corrigieron la densidad del hero de portada, el doble margen horizontal de las secciones, la jerarquía de las cabeceras interiores, la separación entre navegación secundaria e introducciones y el texto justificado de las tarjetas de Servicios.

## 10. Archivos modificados

- `AUDITORIA_V2.md`
- `PENDIENTES_WEB.md`
- `index.html`
- `public/sitemap.xml`
- `public/images/web/*`
- `public/logos/*`
- `src/App.jsx`
- `src/components/layout/Navbar.jsx`
- `src/components/layout/Navbar.css`
- `src/components/layout/Footer.css`
- `src/components/layout/Footer.jsx`
- `src/components/sections/Contact.css`
- `src/components/sections/Hero.css`
- `src/components/sections/Hero.jsx`
- `src/components/sections/Pricing.jsx`
- `src/components/sections/Services.css`
- `src/components/sections/Services.jsx`
- `src/components/sections/Team.jsx`
- `src/components/sections/Testimonials.css`
- `src/components/sections/Testimonials.jsx`
- `src/components/seo/SEOHead.jsx`
- `src/components/seo/SchemaMarkup.jsx`
- `src/components/ui/PageHero.css`
- `src/components/ui/PageHero.jsx`
- `src/components/ui/ScrollToTop.jsx`
- `src/config/site.js`
- `src/constants/navigation.js`
- `src/constants/pricing.js`
- `src/constants/services.js`
- `src/constants/team.js`
- `src/constants/testimonials.js`
- `src/pages/MethodPage.jsx`
- `src/pages/PricingPage.css`
- `src/pages/PricingPage.jsx`
- `src/pages/ServicesPage.css`
- `src/pages/ServicesPage.jsx`
- `src/pages/TeamPage.jsx`
- `src/pages/TestimonialsPage.css`
- `src/pages/TestimonialsPage.jsx`
- `src/styles/global.css`
- `src/styles/variables.css`
- `package-lock.json`
- Recuperados: componentes, estilos, página y datos de testimonios autorizados.

## 11. Riesgos y limitaciones pendientes

- Conviene repetir Lighthouse en la preview final desplegada; la medición local depende del equipo y la red.
- Las fotografías reales ya sustituyen todos los recursos de Unsplash; queda pendiente producir una imagen Open Graph específica de 1200 × 630 px si se desea un recorte social controlado.
- WhatsApp oficial, reglas operativas y métodos de pago requieren confirmación.
- Datos empresariales y revisión jurídica siguen bloqueando la publicación legal.
- El pin exacto del portal 2 debe comprobarse con la ficha oficial de Google.
- La publicación remota depende de disponer de GitHub CLI o de una URL y credenciales de GitHub.

## 12. Recomendaciones para la siguiente iteración

1. Repetir Lighthouse sobre una preview final desplegada con las nuevas fotografías.
2. Revisar visualmente cada ruta en 1440, 1280, 768 y 390 px y completar una prueba manual con teclado.
3. Obtener datos legales y verificaciones profesionales pendientes antes de publicar las páginas legales definitivas.
4. Generar una imagen Open Graph específica de 1200 × 630 px a partir de la selección fotográfica definitiva.
5. Probar WhatsApp, llamada, mapa, anclas, 404 y rutas directas en un móvil real y en preview de Vercel.

## 13. Ejecución y revisión local

```bash
npm ci
npm run lint
npm run build
npm audit
npm audit --omit=dev
npm outdated
npm run dev
```

Abrir la URL indicada por Vite y revisar `/`, `/metodo`, `/servicios`, `/equipo`, `/precios`, `/aviso-legal`, `/privacidad`, `/cookies`, una ruta inexistente y las redirecciones antiguas. Confirmar también el menú móvil, el formulario sin/enviar, la carga voluntaria del mapa, foco visible, Escape y reducción de movimiento.
