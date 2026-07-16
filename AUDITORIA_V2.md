# Auditoría V2 — Gyrotonic Pozuelo

Fecha: 16 de julio de 2026  
Rama de trabajo: `codex/auditoria-visual-v2`

## 1. Resumen ejecutivo

Se realizó una segunda revisión estática integral de la aplicación React/Vite. La base ya centralizaba correctamente el dominio, contacto y tarifas; incluía rutas españolas, redirecciones de rutas antiguas, mapa bajo acción del usuario, páginas legales provisionales con `noindex` y configuración SPA para Vercel.

El principal riesgo detectado era de contenido: se publicaban credenciales profesionales pendientes de verificación y testimonios con afirmaciones clínicas o resultados contundentes cuya autorización también seguía pendiente. Ambos contenidos se han retirado de la experiencia pública. Se han añadido además mejoras puntuales de accesibilidad, navegación y SEO sin alterar la identidad visual.

El entorno de ejecución no dispone de Node.js ni `npm`, ni de navegador automatizado. Por ello no fue posible levantar la web, ejecutar Lighthouse, lint, build o las auditorías de npm. Esta limitación se declara expresamente y esas comprobaciones no se dan por superadas.

## 2. Problemas encontrados

- Testimonios publicados como reales sin constar todavía la autorización y con promesas sobre dolor, fisioterapia, lesiones y resultados.
- Credenciales, titulaciones y especialidades detalladas publicadas aunque `PENDIENTES_WEB.md` exigía verificarlas.
- Meta description inicial con promesas de mejora de postura, flexibilidad y bienestar.
- CTA principal con lenguaje de “reserva” cuando el flujo solo solicita información y disponibilidad.
- El menú móvil no respondía a la tecla Escape.
- El desplazamiento a anclas solicitaba animación incluso con reducción de movimiento.
- Faltaba un enlace para saltar directamente al contenido principal.
- Dos imágenes de secciones no declaraban dimensiones ni carga diferida.
- `PENDIENTES_WEB.md` no distinguía claramente prioridad, estado, responsable, área afectada y siguiente acción.

## 3. Cambios visuales y justificación

- Se conserva paleta, tipografía, espaciado, tarjetas, hero y estructura general; no se justificó un rediseño.
- La página de equipo se simplifica para transmitir cercanía sin publicar credenciales no confirmadas.
- Se mantiene una jerarquía clara con hero, introducción, perfiles, principios de atención y CTA.
- Se elimina la sección pública de testimonios hasta contar con textos y permisos verificables, evitando señales de confianza artificiales.
- Se añade un enlace de salto visible al recibir foco, sin impacto visual durante navegación con ratón.

## 4. Cambios técnicos

- `/testimonios` y `/testimonials` redirigen al equipo; la URL se retira del sitemap.
- Se eliminan componentes, estilos y datos de testimonios que ya no debían formar parte del bundle.
- Se retiran datos estructurados de testimonios y credenciales detalladas del equipo.
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

No evaluables en este entorno: `npm` no está instalado. No se aplicó `npm audit fix` ni se modificaron dependencias. Es obligatorio ejecutar `npm audit` y `npm audit --omit=dev` en un entorno con Node antes de publicar.

## 7. Dependencias actualizadas

Ninguna. No se realizaron actualizaciones sin disponer de instalación, auditoría y build para comprobar compatibilidad.

## 8. Resultado de lint y build

- `npm run lint`: no ejecutado; comando `npm` no disponible.
- `npm run build`: no ejecutado; comando `npm` no disponible.
- `npm audit`: no ejecutado; comando `npm` no disponible.
- `npm audit --omit=dev`: no ejecutado; comando `npm` no disponible.
- `npm outdated`: no ejecutado; comando `npm` no disponible.
- `git diff --check`: correcto, sin errores de espacios; Git solo informa de la futura conversión LF/CRLF en Windows.

## 9. Responsive y accesibilidad

Revisión estática realizada sobre breakpoints y reglas de escritorio, tablet y móvil, menú abierto/cerrado, formulario, mapa, foco y reducción de movimiento. Se verificaron etiquetas, campos asociados, estado con `role=status`, texto del botón del mapa, foco visible y semántica general.

No se pudo hacer inspección renderizada a 390 px, tablet, portátil y escritorio, ni validar hover, teclado completo, consola o Lighthouse, porque no hay Node ni navegador automatizado disponible. Debe completarse antes del lanzamiento.

## 10. Archivos modificados

- `AUDITORIA_V2.md`
- `PENDIENTES_WEB.md`
- `index.html`
- `public/sitemap.xml`
- `src/App.jsx`
- `src/components/layout/Navbar.jsx`
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
- Eliminados: componentes, estilos, página y datos de testimonios.

## 11. Riesgos y limitaciones pendientes

- Falta verificación renderizada, lint, build, consola, Lighthouse y auditoría de dependencias.
- Fotografías actuales provisionales y recursos de Unsplash pendientes de sustitución.
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
