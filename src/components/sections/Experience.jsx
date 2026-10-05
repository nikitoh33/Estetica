// src/components/sections/Experience.jsx
import { Scan, ShieldCheck, Leaf, Sparkles, Check } from 'lucide-react';
import { experienceHighlights } from '../../data/mockData';
import './Experience.css';

const pillarIcons = {
  Scan,
  ShieldCheck,
  Leaf,
  Sparkles
};

export default function Experience() {
  return (
    <section id="experiencia" className="experience-section">
      <div className="container">
        {/* Cabecera */}
        <div className="experience-header text-center reveal-fade-up">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>El Método Lumina</span>
          </div>
          <h2 className="section-title">
            Una experiencia concebida para tu <em>bienestar absoluto</em>
          </h2>
          <p className="section-subtitle">
            Cada visita es un ritual personalizado. Nos alejamos de las soluciones genéricas para crear tratamientos seguros, efectivos y placenteros.
          </p>
        </div>

        {/* Pilares (Mobile: 2 columnas compactas) */}
        <div className="pillars-grid reveal-fade-up delay-1">
          {experienceHighlights.map((pillar, idx) => {
            const Icon = pillarIcons[pillar.icon] || Sparkles;

            return (
              <div key={idx} className="pillar-card">
                <div className="pillar-header">
                  <span className="pillar-number">{pillar.number}</span>
                  <div className="pillar-icon-box">
                    <Icon size={22} />
                  </div>
                </div>

                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-description">{pillar.description}</p>
                <div className="pillar-card-glow" />
              </div>
            );
          })}
        </div>

        {/* Banner destacado: Promesa de calidad */}
        <div className="experience-banner reveal-fade-up delay-2">
          <div className="experience-banner-content">
            <div className="banner-tag">Atención Personalizada</div>
            <h3 className="banner-title">
              ¿No sabes qué tratamiento es el ideal para ti?
            </h3>
            <p className="banner-desc">
              Realizamos una consulta diagnóstica previa sin cargo donde evaluamos las necesidades biológicas de tu piel y definimos tu plan personalizado.
            </p>
            <div className="banner-perks">
              <span className="banner-perk">
                <Check size={16} className="perk-check" /> Evaluación Dérmica
              </span>
              <span className="banner-perk">
                <Check size={16} className="perk-check" /> Presupuesto a Medida
              </span>
              <span className="banner-perk">
                <Check size={16} className="perk-check" /> Sin Compromiso
              </span>
            </div>
          </div>
          <div className="experience-banner-action">
            <a 
              href="#contacto" 
              className="btn-primary banner-cta-btn"
            >
              Solicitar Evaluación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
