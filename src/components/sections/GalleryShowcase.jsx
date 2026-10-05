// src/components/sections/GalleryShowcase.jsx
import { Sparkles } from 'lucide-react';
import CircularGallery from '../common/CircularGallery';
import { galleryItems } from '../../data/mockData';
import './GalleryShowcase.css';

export default function GalleryShowcase() {
  return (
    <section className="gallery-showcase-section">
      <div className="container">
        <div className="gallery-header text-center reveal-fade-up">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Nuestros Espacios & Resultados</span>
          </div>
          <h2 className="section-title">
            Una mirada a la <em>experiencia Aura</em>
          </h2>
          <p className="section-subtitle">
            Ambientes diseñados para desconectar la mente y tratamientos que despiertan tu luminosidad natural.
          </p>
        </div>
      </div>

      {/* Contenedor del CircularGallery 3D que se mueve solo de forma suave y sutil */}
      <div className="gallery-canvas-wrapper reveal-fade-up delay-1">
        <CircularGallery
          items={galleryItems}
          bend={2}
          textColor="#8C5D44"
          borderRadius={0.06}
          font='bold 24px "Plus Jakarta Sans", sans-serif'
          autoScrollSpeed={0.09}
          scrollEase={0.03}
        />
      </div>
    </section>
  );
}
