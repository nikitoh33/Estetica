// src/components/sections/Hero.jsx
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { businessInfo, heroStats } from '../../data/mockData';
import CircularBadge from '../common/CircularBadge';
import './Hero.css';

export default function Hero() {
  const encodedMsg = encodeURIComponent("¡Hola Lumina Estética! Quisiera consultar por disponibilidad para una primera sesión.");
  const waUrl = `https://wa.me/${businessInfo.rawPhone}?text=${encodedMsg}`;

  return (
    <section id="inicio" className="hero-section">
      {/* Luces y esferas decorativas de fondo */}
      <div className="hero-glow hero-glow-1" aria-hidden="true" />
      <div className="hero-glow hero-glow-2" aria-hidden="true" />

      <div className="container hero-container">
        {/* Columna de Texto & Contenido */}
        <div className="hero-content reveal-fade-up">
          <div className="hero-badge">
            <Sparkles size={14} className="badge-sparkle" />
            <span className="badge-text-desktop">Centro Especializado en Estética & Bienestar</span>
            <span className="badge-text-mobile">Estética Avanzada & Spa</span>
          </div>

          <h1 className="hero-title">
            Realza tu belleza natural con <em>ciencia dérmica</em> y tecnología avanzada.
          </h1>

          <p className="hero-description">
            {/* En Desktop: descripción extendida con todos los servicios */}
            <span className="hero-desc-desktop">
              Experimenta protocolos médicos y holísticos diseñados a tu medida: depilación definitiva sin dolor, limpiezas faciales profundas, modelado corporal intensivo, cuidado de uñas, visagismo de cejas y masajes terapéuticos.
            </span>
            {/* En Móvil: versión concisa y elegante que evita sobrecargar la pantalla */}
            <span className="hero-desc-mobile">
              Protocolos personalizados con aparatología médica de vanguardia y resultados visibles desde la primera sesión.
            </span>
          </p>

          <div className="hero-actions">
            <a 
              href={waUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary hero-btn-main"
            >
              <MessageCircle size={18} />
              <span>Agendar Turno Inmediato</span>
            </a>

            <a href="#servicios" className="btn-secondary hero-btn-sec">
              <span>Ver Tratamientos</span>
              <ArrowRight size={17} />
            </a>
          </div>

          {/* Barra de métricas prolija y adaptada a mobile (una sola fila) */}
          <div className="hero-metrics-bar">
            {heroStats.map((stat, index) => (
              <div key={index} className="metric-item">
                <span className="metric-number">{stat.value}</span>
                <span className="metric-label">
                  {stat.label} <br className="mobile-break" /> {stat.sublabel}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Columna Visual / Galería & Circular Badge */}
        <div className="hero-visual reveal-fade-up delay-2">
          <div className="hero-image-composition">
            {/* Imagen Principal */}
            <div className="hero-main-card">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80" 
                alt="Tratamiento estético facial en Lumina" 
                className="hero-main-img"
              />
              <div className="hero-card-overlay" />
            </div>

            {/* Tarjeta Flotante Inferior: Aparatología certificada */}
            <div className="hero-floating-card hero-floating-left">
              <div className="floating-card-icon">
                <ShieldCheck size={20} />
              </div>
              <div className="floating-card-info">
                <strong>Tecnología Certificada</strong>
                <span>Cabezales sub-cero & protocolos seguros</span>
              </div>
            </div>

            {/* Tarjeta Flotante Superior: Glow de piel */}
            <div className="hero-floating-card hero-floating-right">
              <span className="glow-dot" />
              <div className="floating-card-info">
                <strong>Protocolos a Medida</strong>
                <span>Diagnóstico dérmico previo</span>
              </div>
            </div>

            {/* Badge de texto curvo estilo ReactBits */}
            <div className="hero-circular-badge-pos">
              <CircularBadge 
                text="★ LUMINA ESTÉTICA AVANZADA ★ BELLEZA & BIENESTAR " 
                size={145}
                speed={20}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
