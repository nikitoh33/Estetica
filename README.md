# 🌿 Lumina Estética Avanzada & Spa

> **Plataforma web moderna, profesional y responsive para un centro de medicina estética, modelado corporal y bienestar sensorial.**  
> Desarrollada con **React 19**, **Vite** y **CSS Modular nativo**, combinando diseño editorial de lujo, microinteracciones fluidas y directivas de seguridad robustas.

---

## 📸 Vista General y Propuesta Visual

- **Identidad de Marca**: **Lumina Estética Avanzada & Spa**
- **Concepto**: Fusión entre ciencia dérmica, aparatología médica certificada y relajación holística en un ambiente sensorial de calma.
- **Paleta Cromática (Lujo Cálido & Orgánico)**:
  - **Terracota Rose**: `#B78367` (Primario cálido) y `#8C5D44` (Terracota profundo)
  - **Oro Champaña**: `#C5A059` (Acentos dorados) y `#F4ECDC` (Champaña translúcido)
  - **Verde Salvia**: `#6B846E` (Toque botánico orgánico) y `#EAF0EB` (Salvia suave)
  - **Superficies & Fondos**: `#FAF7F2` (Seda cálida / Marfil) y `#FFFFFF` (Blanco puro)
  - **Café Moka / Espresso**: `#1F1B18` y `#2B221D` (Tipografía editorial de alto contraste sin recurrir al negro plano)

---

## 💆‍♀️ Catálogo Completo de Servicios y Tratamientos

Los datos se gestionan de forma centralizada y escalable en `src/data/mockData.js`, abarcando las 5 áreas principales con descripciones profesionales, duración, sesiones sugeridas y beneficios clínicos:

1. **Depilación Definitiva & Corporal**:
   - *Depilación Láser Diodo Trío*: Cabezal criogénico a sub-cero (-5°C) que insensibiliza la zona; 100% indoloro y seguro en todo fototipo.
   - *Depilación Sistema Español con Miel & Manzanilla*: Cera vegetal tibia con activos calmantes para pieles sensibles.
2. **Higiene Facial & Ciencia Dérmica**:
   - *Limpieza Facial Profunda con Punta de Diamante & Espátula Ultrasónica*: Extracción atraumática, microdermoabrasión y máscara descongestiva.
   - *Dermaplaning Médico & Glow Vitamina C*: Exfoliación con bisturí quirúrgico para eliminar células muertas y vello facial fino, logrando absorción dérmica instantánea.
3. **Tratamientos Corporales Reductores & Anticelulíticos**:
   - *Maderoterapia Colombiana & Modelado Escultural*: Instrumentos de madera nobles para romper nódulos grasos, drenar y reafirmar contornos.
   - *Ondas de Choque Radiales & Radiofrecuencia Multipolar*: Protocolo médico de alto impacto para celulitis rebelde y flacidez dérmica.
4. **Uñas & Manicura Rusa**:
   - *Manicura Rusa Combinada & Esmaltado Semipermanente*: Limpieza milimétrica de cutículas con torno y esmaltado duradero por +20 días.
   - *Kapping Gel Fortalecedor & Nail Art Botánico*: Capa de gel sobre uña natural que previene quiebres y estimula crecimiento sano.
5. **Visagismo de Cejas & Mirada**:
   - *Diseño & Perfilado de Cejas con Tinte Botánico / Henna*: Mapeo con hilo para definir simetría facial.
   - *Lifting de Pestañas con Lash Botox de Queratina*: Curvatura natural de pestañas con sellado de ceramidas y colágeno.

---

## 🚀 Componentes Interactivos & Experiencia de Usuario (UX)

### 1. Mazo de Tarjetas 3D (`CenterPillarsStack`)
Inspirado en la mecánica física de un mazo de naipes:
- **Disposición en 3D**: La tarjeta activa se sitúa al frente (`rotate(0deg)`), mientras la siguiente se asoma inclinada a la derecha (`+5.5deg`) y la previa a la izquierda (`-5.5deg`).
- **Insignias superiores**: Etiquetas `[ CATEGORÍA ]`, insignia dorada de calificación `★★★★★ 5/5` y contador de mazo `1 / 4`.
- **Botón circular inferior**: Botón flotante en gradiente terracota superpuesto en el borde de la tarjeta para ciclar al siguiente pilar con transiciones fluidas.
- **Soporte táctil (*Swipe Gestures*)**: Detección de deslizamiento táctil horizontal en pantallas móviles.

### 2. Galería Circular 3D WebGL (`CircularGallery`)
Componente de aceleración por hardware basado en **OGL**:
- **Auto-scroll continuo**: Rota suave y lentamente a velocidad ultra sutil ($0.09$) sin requerir interacción manual.
- **Sin captura de eventos**: Se retiraron listeners invasivos de mouse o rueda para permitir un scroll de página completamente libre y fluido.
- **Responsive**: Ajuste dinámico de perspectiva de cámara y resolución del lienzo en cambios de pantalla.

### 3. Cinta Ondulada Orgánica (`CurvedBanner`)
Separador de secciones con trayectoria SVG flotante:
- **100% Transparente**: Sin franjas de color rectangulares, divisiones duras ni fondos superpuestos.
- **Texto animado en curva (*TextPath*)**: Flujo horizontal continuo con tipografía y espaciado adaptados a móvil.

### 4. Catálogo con Filtros y Modal Interactivo (`Services` & `ServiceModal`)
- **Filtro dinámico de categorías** con barra de scroll táctil en dispositivos móviles.
- **Modal accesible**: Al pulsar "Ver detalles" se abre una ficha completa con duración, sesiones, beneficios con viñetas y botón directo para reservar en WhatsApp.
- Soporte para cierre mediante tecla `Escape`, clic fuera del modal o botón de cruz.

### 5. Optimización Mobile-First (Equilibrio de Densidad)
- **Hero adaptativo**: En computadoras presenta el párrafo descriptivo completo; en celulares conmuta de forma inteligente a una versión concisa de 2 líneas para evitar la sobrecarga visual y permitir que las métricas y la imagen respiren en el primer pantallazo.
- **Cuadrículas compactas de 2 columnas**: Tanto la sección de Servicios como los Pilares de Experiencia y los Testimonios se distribuyen en `repeat(2, 1fr)` en móviles, evitando scrolls verticales interminables.
- **Eliminación de destellos táctiles**: Reset de `-webkit-tap-highlight-color: transparent`.
- **Control de overflow**: Configuración de `overflow-x: hidden` en `html` y `body` para garantizar 0 desplazamientos horizontales accidentales.

---

## 🛡️ Medidas de Seguridad Implementadas

La aplicación incorpora directivas de seguridad para el frontend tanto a nivel de cabeceras HTTP como de manipulación de datos:

1. **Content Security Policy (CSP)**:
   - Configurada en `<meta http-equiv="Content-Security-Policy">` para restringir la ejecución de scripts no autorizados, limitar fuentes a Google Fonts e imágenes a fuentes aprobadas (Unsplash y orígenes locales).
2. **Protección Anti-Clickjacking**:
   - Cabecera `X-Frame-Options: DENY` que impide que la plataforma sea incrustada en iframes externos maliciosos.
3. **Prevención de MIME-Sniffing**:
   - Cabecera `X-Content-Type-Options: nosniff` para forzar a los navegadores a respetar los tipos de contenido declarados.
4. **Política Estricta de Referrer**:
   - `Referrer-Policy: strict-origin-when-cross-origin` para evitar fugas de parámetros de URL al navegar hacia sitios externos.
5. **Restricción de Permisos Sensibles**:
   - `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()` que inhabilita accesos no solicitados al hardware del usuario.
6. **Sanitización y Validación de Formularios (`Contact.jsx`)**:
   - Función `sanitizeInput()` que remueve etiquetas HTML, scripts maliciosos y caracteres de control invisibles.
   - Expresión regular que verifica que los nombres solo contengan caracteres alfabéticos legítimos.
   - Longitud máxima acotada en todos los campos (`maxLength`).
7. **Protección Anti-Bot Honeypot**:
   - Campo oculto invisible para humanos (`hp_website`); si un bot automatizado completa dicho campo, la solicitud se descarta inmediatamente.
8. **Control de Frecuencia (*Rate Limiting*)**:
   - Bloqueo de envíos consecutivos en menos de 3 segundos para evitar ráfagas de spam al canal de WhatsApp.
9. **Seguridad en Enlaces Externos**:
   - Todos los enlaces salientes (`target="_blank"`) incluyen obligatoriamente `rel="noopener noreferrer"`.
   - Mensajes predeterminados para WhatsApp sanitizados y codificados con `encodeURIComponent()`.

---

## 📂 Estructura del Proyecto

```plaintext
c:/Proyectos/Estetica/
├── index.html                           # Documento HTML raíz con directivas de seguridad CSP
├── vite.config.js                       # Configuración de Vite con cabeceras de servidor
├── package.json                         # Dependencias y scripts
├── README.md                            # Documentación integral del proyecto
├── src/
│   ├── main.jsx                         # Punto de entrada de React 19
│   ├── index.css                        # Design System global, variables CSS y resets mobile
│   ├── App.jsx                          # Composición y orquestación de secciones
│   ├── App.css                          # Estilos del layout principal
│   ├── data/
│   │   └── mockData.js                  # Fuente única de datos (servicios, textos, FAQs, redes)
│   ├── hooks/
│   │   └── useScrollReveal.js           # Observador de intersección (IntersectionObserver)
│   └── components/
│       ├── layout/
│       │   ├── Navbar.jsx               # Barra de navegación con glassmorphism y menú móvil
│       │   ├── Navbar.css
│       │   ├── Footer.jsx               # Pie de página estructurado y compacto
│       │   └── Footer.css
│       ├── common/
│       │   ├── CircularBadge.jsx        # Insignia de texto curvo giratorio
│       │   ├── CircularBadge.css
│       │   ├── CircularGallery.jsx      # Galería cilíndrica 3D continua en WebGL (OGL)
│       │   ├── CircularGallery.css
│       │   ├── CurvedBanner.jsx         # Cinta orgánica flotante sin fondos rectangulares
│       │   ├── CurvedBanner.css
│       │   ├── WhatsAppButton.jsx       # Botón flotante con efecto de pulsación
│       │   └── WhatsAppButton.css
│       └── sections/
│           ├── Hero.jsx                 # Portada principal con densidad controlada
│           ├── Hero.css
│           ├── Services.jsx             # Grilla de tratamientos y sistema de filtrado
│           ├── Services.css
│           ├── ServiceModal.jsx         # Modal detallado de servicio
│           ├── ServiceModal.css
│           ├── CenterPillarsStack.jsx   # Mazo de tarjetas 3D interactivo
│           ├── CenterPillarsStack.css
│           ├── GalleryShowcase.jsx      # Contenedor para la galería 3D
│           ├── GalleryShowcase.css
│           ├── Experience.jsx           # Pilares del método Lumina y consulta diagnóstica
│           ├── Experience.css
│           ├── Testimonials.jsx         # Reseñas con avatares y estrellas
│           ├── Testimonials.css
│           ├── Faq.jsx                  # Acordeón interactivo de preguntas frecuentes
│           ├── Faq.css
│           ├── Contact.jsx              # Formulario sanitizado y datos de contacto
│           └── Contact.css
```

---

## 🛠️ Tecnologías y Librerías

- **React 19**: Biblioteca base para componentes reactivos.
- **Vite 8**: Servidor de desarrollo ultrarrápido y empaquetador de producción.
- **CSS3 Nativo & Modular**: Variables personalizadas, degradados refinados, animaciones `@keyframes` y media queries para cada componente.
- **OGL (`ogl`)**: Motor WebGL ligero para el renderizado del cilindro 3D de imágenes de la galería.
- **Lenis (`lenis`)**: Motor de scroll suave inercial.
- **Lucide React (`lucide-react`)**: Set de iconografía limpio y consistente.
- **ESLint**: Validación de buenas prácticas y prevención de errores de sintaxis.

---

## 💻 Instalación y Ejecución Local

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

3. **Verificar calidad de código con ESLint**:
   ```bash
   npm run lint
   ```

4. **Compilar para producción**:
   ```bash
   npm run build
   ```
   Genera la carpeta optimizada y minificada `dist/` lista para ser desplegada en Vercel, Netlify o cualquier servidor estático.

5. **Previsualizar la compilación de producción**:
   ```bash
   npm run preview
   ```

---

© 2026 **Lumina Estética Avanzada & Spa**. Todos los derechos reservados.
