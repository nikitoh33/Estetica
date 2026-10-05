================================================================================
AURA ESTÉTICA AVANZADA & WELLNESS - DOCUMENTACIÓN TÉCNICA
================================================================================

1. DESCRIPCIÓN DEL PROYECTO
--------------------------------------------------------------------------------
Sitio web institucional moderno, interactivo y responsive para clínica y centro
de estética integral. Desarrollado con Vite + React 19 y CSS nativo modularizado.

Servicios integrados:
- Depilación Láser Definitiva Diodo Trío y Cera Calmante.
- Limpieza Facial Profunda con Punta de Diamante y Peeling Químico Glow.
- Tratamientos Corporales Reductores y Anticelulíticos (Maderoterapia, Ondas de Choque, Cavitación).
- Uñas (Manicura Rusa Semipermanente, Esculpidas en Gel y Kapping).
- Cejas & Pestañas (Perfilado con Visagismo, Laminado, Microblading y Lash Botox).
- Masajes Terapéuticos (Descontracturante con Piedras Volcánicas, Relajante y Drenaje Linfático).

Efectos y diseño:
- Banners de transición con texto ondulado en trayectoria curva dinámica (SVG curved text marquee).
- Badge circular giratorio interactivo con texto curvo (inspirado en ReactBits).
- Revelado progresivo al scroll mediante IntersectionObserver.
- Efectos hover con elevación suave, zoom en fotografías y spotlight glow.
- Barra de progreso de lectura en cabecera.
- Modal interactivo con detalles clínicos y botón de reserva directa por WhatsApp.
- Botón flotante de WhatsApp con efecto de pulso y enlace sanitizado.
- Diseño Mobile-First: Cuadrículas compactas de 2 columnas (repeat(2, 1fr)) en smartphones.


2. TECNOLOGÍAS Y DEPENDENCIAS
--------------------------------------------------------------------------------
- React: ^19.2.8
- React-DOM: ^19.2.8
- Lucide-React: ^1.16.0 (Iconografía SVG limpia y escalable)
- OGL: ^1.0.11 (Librería WebGL para CircularGallery 3D de React Bits)
- Lenis: ^1.1.20 (Librería de Smooth Scroll para ScrollStack de React Bits)
- Vite: ^8.3.2 (Bundler ultra veloz con Hot Module Replacement)
- ESLint: ^10.10.0


3. COMANDOS DE INSTALACIÓN Y EJECUCIÓN
--------------------------------------------------------------------------------
1. Instalar dependencias:
   npm install

2. Levantar entorno de desarrollo local:
   npm run dev

3. Compilar para producción:
   npm run build

4. Previsualizar la compilación de producción:
   npm run preview

5. Comprobación de calidad de código:
   npm run lint


4. ESTRUCTURA GENERAL DEL CÓDIGO
--------------------------------------------------------------------------------
c:\Proyectos\Estetica\
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   │   ├── CircularBadge.jsx / .css     (Sello giratorio texto curvo)
│   │   │   ├── CurvedBanner.jsx / .css      (Separador ondulado con texto en curva)
│   │   │   ├── CircularGallery.jsx / .css   (Galería 3D WebGL auto-scrolling React Bits)
│   │   │   ├── ScrollStack.jsx / .css       (Tarjetas apilables con Lenis de React Bits)
│   │   │   └── WhatsAppButton.jsx / .css    (Botón flotante con anillos de pulso)
│   │   ├── layout/
│   │   │   ├── Navbar.jsx / .css            (Navegación con backdrop-filter y menú móvil)
│   │   │   └── Footer.jsx / .css            (Pie de página compacto con enlaces en 2 cols)
│   │   └── sections/
│   │       ├── Hero.jsx / .css              (Portada con métricas 1 fila y showcase)
│   │       ├── Services.jsx / .css          (Catálogo de servicios con filtros por categoría)
│   │       ├── ServiceModal.jsx / .css      (Modal con detalles y reserva WhatsApp)
│   │       ├── CenterPillarsStack.jsx / .css(Pilares de confort y calidez con ScrollStack)
│   │       ├── GalleryShowcase.jsx / .css   (Showcase de fotos con CircularGallery)
│   │       ├── Experience.jsx / .css        (Pilares del método Aura y diagnóstico)
│   │       ├── Testimonials.jsx / .css      (Opiniones reales con 5 estrellas)
│   │       ├── Faq.jsx / .css               (Acordeón interactivo de preguntas frecuentes)
│   │       └── Contact.jsx / .css           (Datos de contacto y formulario rápido)
│   ├── data/
│   │   └── mockData.js                    (ARCHIVO ÚNICO CENTRALIZADO DE DATOS)
│   ├── hooks/
│   │   └── useScrollReveal.js             (Hook de animaciones al scroll)
│   ├── App.jsx / .css
│   ├── index.css                          (Variables globales, reset mobile y tipografía)
│   └── main.jsx
├── index.html
├── package.json
└── README.txt                             (Esta guía técnica)


5. GESTIÓN Y EDICIÓN DE CONTENIDO
--------------------------------------------------------------------------------
Todos los textos, teléfonos de WhatsApp, direcciones, precios, categorías y
servicios se gestionan exclusivamente desde:
  src/data/mockData.js

Para cambiar el número de WhatsApp a donde llegan los turnos:
Modificar el campo `rawPhone` en `businessInfo` (ej: "54911xxxxxxxx" con código
de país y de área, sin guiones ni espacios).


6. BACKUP LIMPIO PARA EL CLIENTE
--------------------------------------------------------------------------------
Para generar un archivo ZIP o copia de respaldo limpia:
1. Eliminar o excluir la carpeta `node_modules` (se descarga sola con `npm install`).
2. Eliminar o excluir la carpeta `.git` y la carpeta `dist`.
3. El archivo resultante pesará menos de 2 MB y contiene el 100% del código fuente.


7. GUÍA DE DESPLIEGUE EN PRODUCCIÓN (VERCEL & DOMINIO PROPIO)
--------------------------------------------------------------------------------
A. Despliegue en Vercel:
   1. Subir el repositorio a GitHub o conectar la carpeta vía Vercel CLI (`npx vercel`).
   2. Framework Preset: Vite.
   3. Build Command: `npm run build`.
   4. Output Directory: `dist`.
   5. Presionar "Deploy". Vercel entrega un enlace instantáneo con HTTPS/SSL activo.

B. Conexión de Dominio Propio (ej: NIC Argentina .com.ar / .com):
   1. En Vercel: Ir a Settings > Domains y agregar tu dominio (ej: tuclinica.com.ar).
   2. En el panel de tu registrador (NIC Argentina, DonWeb, GoDaddy, Cloudflare):
      - Agregar registro A: Host @ apuntando a la IP de Vercel (76.76.21.21).
      - Agregar registro CNAME: Host www apuntando a cname.vercel-dns.com.
   3. Redirección 301: Vercel configurará automáticamente la redirección permanente
      de www a dominio raíz (o viceversa) y emitirá los certificados SSL de Let's Encrypt
      de forma 100% automática y gratuita.
================================================================================
