import WhatsAppButton from './components/common/WhatsAppButton';
import CurvedBanner from './components/common/CurvedBanner';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import CenterPillarsStack from './components/sections/CenterPillarsStack';
import Experience from './components/sections/Experience';
import GalleryShowcase from './components/sections/GalleryShowcase';
import Testimonials from './components/sections/Testimonials';
import Faq from './components/sections/Faq';
import Contact from './components/sections/Contact';
import { useScrollReveal } from './hooks/useScrollReveal';
import { curvedRibbonText } from './data/mockData';
import './App.css';

function App() {
  // Inicializamos el observador de scroll para animaciones de revelado
  useScrollReveal();

  return (
    <div className="app-main-layout">
      {/* Navegación superior con desenfoque de cristal */}
      <Navbar />

      <main>
        {/* Sección Hero con métricas compactas, visuales y badge circular ReactBits */}
        <Hero />

        {/* Transición curva 1 con cinta ondulada en movimiento continuo */}
        <CurvedBanner 
          text={curvedRibbonText}
        />

        {/* Catálogo completo de servicios con filtrado y modal interactivo */}
        <Services />

        {/* Transición curva 2 hacia las características exclusivas */}
        <CurvedBanner 
          text="🌿 CONFORT ABSOLUTO • ATENCIÓN PERSONALIZADA • TECNOLOGÍA CERTIFICADA • COSMÉTICA LIMPIA • DIAGNÓSTICO SIN CARGO 🌿"
        />

        {/* ScrollStack interactivo con las características y confort del centro */}
        <CenterPillarsStack />

        {/* Galería 3D CircularGallery que gira sola de forma continua */}
        <GalleryShowcase />

        {/* Pilares y consulta diagnóstica del método Lumina */}
        <Experience />

        {/* Testimonios y valoraciones de clientas */}
        <Testimonials />

        {/* Preguntas frecuentes en acordeón interactivo */}
        <Faq />

        {/* Ubicación, información y agendamiento directo por WhatsApp */}
        <Contact />
      </main>

      {/* Pie de página con enlaces y redes */}
      <Footer />

      {/* Botón flotante interactivo de WhatsApp con pulsación */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
