# Auditoría V2 — Gyrotonic Pozuelo

Fecha: 16 de julio de 2026  
Rama de trabajo: `codex/auditoria-visual-v2`

## 1. Resumen ejecutivo

Se realizó una segunda revisión estática integral de la aplicación React/Vite. La base ya centralizaba correctamente el dominio, contacto y tarifas; incluía rutas españolas, redirecciones de rutas antiguas, mapa bajo acción del usuario, páginas legales provisionales con `noindex` y configuración SPA para Vercel.

El principal riesgo detectado era de contenido: se publicaban testimonios con afirmaciones clínicas o resultados contundentes cuya autorización seguía pendiente. Esos testimonios se retiraron. Los perfiles profesionales se completaron posteriormente a partir de la información existente en la rama principal, confirmada por el propietario, suavizando las promesas clínicas. Se añadieron además mejoras puntuales de accesibilidad, navegación y SEO sin alterar la identidad visual.

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
- Se elimina la sección pública de testimonios hasta contar con textos y permisos verificables, evitando señales de confianza artificiales.
- Se añade un enlace de salto visible al recibir foco, sin impacto visual durante navegación con ratón.

## 4. Cambios técnicos

- `/testimonios` y `/testimonials` redirigen al equipo; la URL se retira del sitemap.
- Se eliminan componentes, estilos y datos de testimonios que ya no debían formar parte del bundle.
- Se retiran los datos estructurados de testimonios; el equipo conserva breadcrumbs estructurados y contenido profesional contrastado con la rama principal.
- Se corrigen metadatos y textos que podían interpretarse como promesas médicas o reservas confirmadas.
- El menú móvil se puede cerrar con Escape.
- `ScrollToTop` respeta `prefers-reduced-motion` al navegar hacia anclas.
- Se incorpora `#main-content` y un enlace “Saltar al contenido”.
- Se añaden `loading`, `width` y `height` a imágenes de servicios y equipo en la home.

## 5. Comprobación de la auditoría anterior

Verificado estáticamente:

- Dominio canónico `https://gyrotonicpozuelo.es` centralizado y usado por SEO/schema.
- Teléfono `+34 696 62 35 79` y dirección completa correctos.
- Horario provisional 09:00–21:00, sesiones de 60 minutos y grupos de máximo 4.
- Tarifas centralizadas y coincidentes con todas las cantidades indicadas.
- Impuestos incluidos y ausencia de contratación/pago online comunicados.
- La prueba de 25 € no se presenta como descontable del pack.
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
- `npm run build`: correcto con Vite 7.3.6; JS 422,82 kB (134,65 kB gzip) y CSS 39,08 kB (7,40 kB gzip).
- `npm audit`: 0 vulnerabilidades después de la corrección.
- `npm audit --omit=dev`: 0 vulnerabilidades.
- `npm outdated`: revisado; se evitaron actualizaciones mayores automáticas de Vite, ESLint, plugin React, globals y Lucide.
- Lighthouse final sobre build de producción: rendimiento 96, accesibilidad 100, buenas prácticas 100 y SEO 100. En la medición inmediatamente anterior: FCP 1,5 s, LCP 2,6 s, TBT 20 ms y CLS 0.
- `git diff --check`: correcto, sin errores de espacios; Git solo informa de la futura conversión LF/CRLF en Windows.

## 9. Responsive y accesibilidad

Se revisaron visual y automáticamente nueve rutas en 1440 × 1000, 768 × 1024 y 390 × 844: home, método, servicios, equipo, precios, tres páginas legales y 404. No se detectaron desbordamientos horizontales, errores de consola, imágenes sin dimensiones ni encabezados principales ausentes.

También se verificaron menú móvil abierto/cerrado, cierre mediante Escape y `prefers-reduced-motion`. La prueba reveló y permitió corregir que ciertos bloques animados quedaban transparentes hasta entrar en viewport. Se mejoró el contraste del texto secundario, el nombre accesible del logotipo y el tamaño del CTA móvil.

## 10. Archivos modificados

- `AUDITORIA_V2.md`
- `PENDIENTES_WEB.md`
- `index.html`
- `public/sitemap.xml`
- `src/App.jsx`
- `src/components/layout/Navbar.jsx`
- `src/components/layout/Navbar.css`
- `src/components/layout/Footer.css`
- `src/components/sections/Hero.jsx`
- `src/components/sections/Services.jsx`
- `src/components/sections/Team.jsx`
- `src/components/seo/SchemaMarkup.jsx`
- `src/components/ui/ScrollToTop.jsx`
- `src/constants/navigation.js`
- `src/constants/team.js`
- `src/pages/MethodPage.jsx`
- `src/pages/ServicesPage.jsx`
- `src/pages/TeamPage.jsx`
- `src/styles/global.css`
- `src/styles/variables.css`
- `package-lock.json`
- Eliminados: componentes, estilos, página y datos de testimonios.

## 11. Riesgos y limitaciones pendientes

- Conviene repetir Lighthouse en la preview final desplegada; la medición local depende del equipo y la red.
- Fotografías generales y recursos de Unsplash pendientes de sustitución; los retratos del equipo se conservan desde la rama principal.
- Horario final, WhatsApp oficial, reglas operativas y métodos de pago requieren confirmación.
- Datos empresariales y revisión jurídica siguen bloqueando la publicación legal.
- El pin exacto del portal 2 debe comprobarse con la ficha oficial de Google.
- La publicación remota depende de disponer de GitHub CLI o de una URL y credenciales de GitHub.

## 12. Recomendaciones para la siguiente iteración

1. Instalar una versión LTS de Node.js compatible con Vite 7 y ejecutar todas las comprobaciones.
2. Revisar visualmente cada ruta en 1440, 1280, 768 y 390 px y con teclado.
3. Obtener datos legales, verificaciones profesionales y autorizaciones antes de reintroducir contenido.
4. Sustituir fotografías provisionales y generar la imagen Open Graph.
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
