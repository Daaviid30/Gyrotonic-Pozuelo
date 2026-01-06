# Estructura del Proyecto Gyrotonic Pozuelo

## 📁 Organización General

El proyecto está organizado de manera modular y escalable, separando claramente las responsabilidades entre componentes, páginas, estilos y utilidades.

```
gyrotonic/
├── public/                      # Archivos estáticos públicos
│   └── images/                  # Imágenes del sitio
│       ├── maria_jose.jpg       # Foto de la co-directora
│       └── antonio.jpg          # Foto del co-director
├── src/                         # Código fuente de la aplicación
│   ├── components/              # Componentes reutilizables
│   │   ├── layout/              # Componentes de diseño principal
│   │   ├── sections/            # Secciones de la página principal
│   │   └── ui/                  # Componentes de interfaz compartidos
│   ├── pages/                   # Páginas detalladas del sitio
│   ├── App.jsx                  # Componente principal y enrutador
│   ├── App.css                  # Estilos del componente principal
│   ├── index.css                # Estilos globales y variables CSS
│   └── main.jsx                 # Punto de entrada de la aplicación
├── index.html                   # HTML base
├── package.json                 # Dependencias y scripts
└── vite.config.js              # Configuración de Vite
```

---

## 📂 Desglose Detallado

### `/src/components/layout/` - Componentes de Diseño Principal

Componentes que estructuran el layout general del sitio y aparecen en todas las páginas.

#### `Navbar.jsx` + `Navbar.css`
- **Propósito**: Barra de navegación principal con enlaces a secciones
- **Características**: 
  - Navegación responsive con menú hamburguesa en móvil
  - Efecto glassmorphism al hacer scroll
  - Links a secciones con scroll suave
  - Logo y enlaces principales (Método, Servicios, Equipo, Testimonios, Precios, Contacto)

#### `Footer.jsx` + `Footer.css`
- **Propósito**: Pie de página con información de contacto y derechos
- **Características**:
  - Información de contacto
  - Enlaces rápidos
  - Derechos de autor

---

### `/src/components/sections/` - Secciones de la Página Principal

Cada sección representa un bloque de contenido en la landing page principal.

#### `Hero.jsx` + `Hero.css`
- **Propósito**: Sección hero de inicio con llamada a la acción
- **Características**:
  - Título principal impactante
  - Subtítulo descriptivo
  - Botón CTA "Reserva tu Primera Clase"
  - Indicador de scroll animado
  - Formas orgánicas decorativas de fondo

#### `About.jsx` + `About.css` (Sección: "¿Qué es GYROTONIC®?")
- **Propósito**: Introducción al método GYROTONIC®
- **Características**:
  - Grid de 6 características principales con iconos
  - Animaciones al hacer scroll
  - **Botón "Saber Más sobre el Método"** → Redirige a `/method`
  - Formas orgánicas de fondo

#### `Services.jsx` + `Services.css`
- **Propósito**: Presentación de los servicios ofrecidos
- **Características**:
  - 4 tarjetas de servicios (Individual, Dúo, Rehabilitación, GYROKINESIS®)
  - Imágenes de Unsplash
  - Botones de solicitud de información
  - **Botón "Conoce Todos Nuestros Servicios"** → Redirige a `/services`

#### `Team.jsx` + `Team.css`
- **Propósito**: Presentación del equipo de instructores
- **Características**:
  - Tarjetas con foto, nombre, rol y biografía breve
  - Layouts responsive
  - **Botón "Conoce Más sobre Nuestro Equipo"** → Redirige a `/team`

#### `Testimonials.jsx` + `Testimonials.css`
- **Propósito**: Testimonios de clientes satisfechos
- **Características**:
  - 3 testimonios con estrellas de valoración
  - Grid responsive
  - **Botón "Lee Más Historias de Éxito"** → Redirige a `/testimonials`

#### `Pricing.jsx` + `Pricing.css`
- **Propósito**: Planes y tarifas
- **Características**:
  - Tarjetas de precios con detalles
  - Destacado del plan recomendado
  - Botones de acción

#### `Contact.jsx` + `Contact.css`
- **Propósito**: Formulario de contacto e información
- **Características**:
  - Formulario de contacto funcional
  - Información de ubicación
  - Integración de Google Maps
  - Horarios de atención

---

### `/src/components/ui/` - Componentes de Interfaz Compartidos

Componentes reutilizables que se usan en múltiples lugares del sitio.

#### `Button.jsx`
- **Propósito**: Componente de botón reutilizable
- **Variantes**: `primary`, `outline`
- **Uso**: Botones de CTA en todo el sitio

#### `TextReveal.jsx`
- **Propósito**: Animación de revelación de texto para títulos
- **Características**: Efecto de aparición suave al hacer scroll

#### `PageHero.jsx` + `PageHero.css`
- **Propósito**: Hero section para páginas detalladas
- **Características**:
  - Título y subtítulo personalizables
  - Breadcrumb navigation (migas de pan)
  - Formas animadas de fondo
  - Diseño responsive

#### `BackButton.jsx` + `BackButton.css`
- **Propósito**: Botón para regresar a la página principal
- **Características**:
  - Icono de flecha
  - Animación hover que desplaza hacia la izquierda
  - Texto personalizable

#### `ScrollToTop.jsx`
- **Propósito**: Asegura que la página se desplace al inicio al cambiar de ruta
- **Uso**: Mejora la experiencia de navegación entre páginas

---

### `/src/pages/` - Páginas Detalladas

Páginas completas con información extendida accesibles mediante los botones "Saber Más".

#### `MethodPage.jsx` + `MethodPage.css`
- **Ruta**: `/method`
- **Propósito**: Información detallada sobre el método GYROTONIC®
- **Contenido**:
  - **PageHero**: "El Método GYROTONIC®"
  - **Introducción**: Qué hace único a GYROTONIC®
  - **Principios Fundamentales**: 4 tarjetas con iconos (Movimiento Esférico, Sin Compresión, Ritmo y Fluidez, Respiración)
  - **Beneficios Integrales**: Físicos y Mentales/Emocionales
  - **¿Es GYROTONIC® Para Ti?**: 4 perfiles de usuarios ideales
  - **CTA**: "Reserva tu Primera Clase"
  - **BackButton**: Regreso a la página principal

#### `ServicesPage.jsx` + `ServicesPage.css`
- **Ruta**: `/services`
- **Propósito**: Descripción exhaustiva de cada servicio
- **Contenido**:
  - **PageHero**: "Nuestros Servicios"
  - **Introducción**: Elige tu camino
  - **Servicios Detallados**: 4 servicios con:
    - Imagen y superposición con icono
    - Descripción extendida
    - Lista de características incluidas
    - Duración e ideal para quién
    - Layout alternado (imagen izquierda/derecha)
  - **Proceso**: 4 pasos de cómo empezar
  - **CTA**: "Contáctanos"
  - **BackButton**

#### `TeamPage.jsx` + `TeamPage.css`
- **Ruta**: `/team`
- **Propósito**: Perfiles completos del equipo de instructores
- **Contenido**:
  - **PageHero**: "Nuestro Equipo"
  - **Introducción**: Experiencia y Dedicación
  - **Perfiles del Equipo**: Para cada instructor:
    - Header con foto circular y gradiente
    - Nombre y rol
    - Historia completa
    - Especialidades (lista)
    - Certificaciones (lista)
    - Filosofía personal (cita)
  - **Nuestros Valores**: 4 tarjetas con iconos
  - **CTA**: "Reserva tu Consulta Gratuita"
  - **BackButton**

#### `TestimonialsPage.jsx` + `TestimonialsPage.css`
- **Ruta**: `/testimonials`
- **Propósito**: Historias detalladas de transformación de clientes
- **Contenido**:
  - **PageHero**: "Historias de Transformación"
  - **Introducción**: Resultados Reales, Personas Reales
  - **Estadísticas**: 4 métricas destacadas (satisfacción, personas, experiencia, certificación)
  - **Testimonios Detallados**: 6 casos completos con:
    - Avatar y estrellas
    - Nombre, edad y condición
    - Cita destacada
    - Historia completa de transformación
    - Beneficios conseguidos (lista)
  - **CTA**: "Comienza tu Transformación"
  - **BackButton**

---

## 🎨 Estilos y Diseño

### `index.css`
**Estilos globales y sistema de diseño**

#### Variables CSS Definidas:
```css
--color-primary: #1e293b          /* Navy oscuro */
--color-accent: #0d9488           /* Teal */
--color-bg-light: #fdfbf7         /* Cream/Bone blanco */
--color-bg-off-white: #f3f0eb     /* Beige cálido */
--font-heading: 'Outfit'          /* Títulos */
--font-body: 'Inter'              /* Texto cuerpo */
--radius-lg: 1.5rem               /* Border radius grande */
```

#### Clases Utilitarias:
- `.container`: Contenedor centrado con max-width
- `.section`: Padding estándar de secciones
- `.section-title`: Títulos de sección grandes
- `.section-subtitle`: Subtítulos descriptivos
- `.section-cta`: Contenedor de botones "Saber Más"
- `.btn-primary` / `.btn-outline`: Estilos de botones
- `.glass-panel`: Efecto glassmorphism

---

## 🔄 Sistema de Navegación

### Flujo de Usuario:

1. **Página Principal** (`/`)
   - Hero → About → Services → Team → Testimonials → Pricing → Contact
   
2. **Desde cada sección hacia páginas detalladas**:
   - About → `/method` (botón "Saber Más sobre el Método")
   - Services → `/services` (botón "Conoce Todos Nuestros Servicios")
   - Team → `/team` (botón "Conoce Más sobre Nuestro Equipo")
   - Testimonials → `/testimonials` (botón "Lee Más Historias de Éxito")

3. **Regreso a la página principal**:
   - Cada página detallada tiene botones "Volver al inicio" al principio y al final
   - La navegación superior (Navbar) siempre está disponible

---

## 📱 Responsive Design

Todos los componentes y páginas son completamente responsive:

- **Desktop**: Grid layouts con múltiples columnas
- **Tablet** (< 968px): Grids adaptados a 2 columnas o diseño apilado
- **Móvil** (< 768px): Layouts de columna única, tamaños de fuente ajustados
- **Móvil pequeño** (< 480px): Optimizaciones adicionales

---

## 🎯 Características Principales

### Animaciones
- **Framer Motion**: Animaciones al hacer scroll (scroll-triggered)
- **Transiciones suaves**: Entre estados hover y cambios de página
- **Formas flotantes**: Backgrounds animados con keyframes CSS

### Accesibilidad
- Navegación por teclado
- Etiquetas ARIA apropiadas
- Contraste de colores adecuado
- Texto alternativo en imágenes

### Performance
- Lazy loading de imágenes
- Componentes optimizados con React
- Build optimizado con Vite
- CSS modular por componente

---

## 🛠️ Tecnologías Utilizadas

- **React 18**: Framework principal
- **React Router DOM**: Navegación entre páginas
- **Framer Motion**: Animaciones
- **Lucide React**: Iconos
- **Vite**: Build tool y dev server
- **CSS Vanilla**: Estilos modulares (no Tailwind)
- **Google Fonts**: Outfit + Inter

---

## 📝 Convenciones de Código

### Nomenclatura de Archivos:
- Componentes React: `PascalCase.jsx`
- Estilos CSS: `PascalCase.css` (mismo nombre que el componente)
- Páginas: `NombrePage.jsx`

### Estructura de Componentes:
1. Imports
2. Constantes/datos
3. Componente funcional
4. Export default

### Organización CSS:
1. Estilos del contenedor principal
2. Elementos internos (de arriba a abajo)
3. Estados hover/interactivos
4. Media queries responsive (al final)

---

## 🚀 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build
```

---

## ✨ Filosofía de Diseño

El sitio mantiene una **estética premium, profesional y cálida**:

- **Colores**: Paleta de tonos crema y teal para sensación de calma y bienestar
- **Tipografía**: Outfit para títulos (moderna, limpia) e Inter para cuerpo (legible)
- **Espaciado**: Amplio whitespace para respiración visual
- **Formas**: Bordes redondeados y formas orgánicas para suavidad
- **Animaciones**: Sutiles y elegantes, nunca distractoras
- **Imágenes**: De alta calidad, con overlays para consistencia

El diseño refleja los valores del método GYROTONIC®: **fluidez, armonía y bienestar integral**.
