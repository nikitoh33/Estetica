// src/components/sections/CenterPillarsStack.jsx
import { useState } from 'react';
import { 
  Sparkles, 
  Star, 
  ArrowRight, 
  Armchair, 
  HeartHandshake, 
  ShieldCheck, 
  Leaf, 
  Heart,
  Users
} from 'lucide-react';
import './CenterPillarsStack.css';

const deckCards = [
  {
    id: 1,
    tag: 'CONFORT TOTAL',
    rating: '5/5',
    icon: Armchair,
    badgeText: 'SANTUARIO RELAX',
    quote: '“Camillas ergonómicas climatizadas, sábanas de lino puro y privacidad absoluta. Cada detalle está pensado para que te desconectes del estrés urbano desde el primer minuto.”',
    authorInitial: 'L',
    authorName: 'Lumina Suite & Spa',
    authorRole: 'ESPACIO CLIMATIZADO',
    likes: 28,
    // Seda & Champaña cálido
    cardBg: 'linear-gradient(145deg, #FFFFFF 0%, #FAF5EE 100%)',
    accentColor: '#B78367'
  },
  {
    id: 2,
    tag: 'ATENCIÓN HUMANA',
    rating: '5/5',
    icon: HeartHandshake,
    badgeText: 'SIN COSTO',
    quote: '“Diagnóstico dérmico y corporal previo sin cargo. Escuchamos tu historia, evaluamos tu piel con aparatología de precisión y creamos un protocolo exclusivo a tu medida.”',
    authorInitial: 'E',
    authorName: 'Evaluación Dérmica',
    authorRole: 'PROFESIONALES MATRICULADAS',
    likes: 34,
    // Rosa Nude & Terracota suave
    cardBg: 'linear-gradient(145deg, #FFFFFF 0%, #FBF0EB 100%)',
    accentColor: '#8C5D44'
  },
  {
    id: 3,
    tag: 'TECNOLOGÍA MÉDICA',
    rating: '5/5',
    icon: ShieldCheck,
    badgeText: 'CERTIFICADO FDA',
    quote: '“Láser de diodo con cabezal criogénico a -5°C para sesiones 100% indoloras, radiofrecuencia multipolar y ondas de choque. Seguridad clínica y resultados comprobados.”',
    authorInitial: 'T',
    authorName: 'Tecnología Clínica',
    authorRole: 'APARATOLOGÍA APROBADA',
    likes: 42,
    // Oro Champaña sutil
    cardBg: 'linear-gradient(145deg, #FFFFFF 0%, #F6F1E6 100%)',
    accentColor: '#C5A059'
  },
  {
    id: 4,
    tag: 'BELLEZA LIMPIA',
    rating: '5/5',
    icon: Leaf,
    badgeText: 'CRUELTY FREE',
    quote: '“Principios activos biocompatibles de alta pureza: ácido hialurónico reticulado, péptidos y extractos botánicos puros. Fórmulas veganas libres de parabenos ni sulfatos.”',
    authorInitial: 'B',
    authorName: 'Cosmética Dérmica',
    authorRole: 'FÓRMULAS VEGANAS',
    likes: 39,
    // Verde Salvia botánico suave
    cardBg: 'linear-gradient(145deg, #FFFFFF 0%, #EFF4F0 100%)',
    accentColor: '#6B846E'
  }
];

export default function CenterPillarsStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const total = deckCards.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Gestos táctiles en mobile (swipe izquierda/derecha)
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="pillars-deck-section" id="por-que-lumina">
      <div className="container">
        {/* Cabecera */}
        <div className="deck-section-header text-center reveal-fade-up">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Mazo de Experiencia</span>
          </div>
          <h2 className="section-title">
            ¿Por qué elegir <em>Lumina Estética</em>?
          </h2>
          <p className="section-subtitle">
            Toca el botón o desliza la tarjeta para recorrer los pilares de confort y excelencia de nuestro centro.
          </p>
        </div>

        {/* Contenedor del Mazo */}
        <div 
          className="deck-outer-container reveal-fade-up delay-1"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="cards-deck-stage">
            {deckCards.map((card, idx) => {
              // Posición respecto al currentIndex actual
              const offset = (idx - currentIndex + total) % total;

              let positionClass = 'deck-card-hidden';
              if (offset === 0) positionClass = 'deck-card-active';
              else if (offset === 1) positionClass = 'deck-card-right';
              else if (offset === total - 1) positionClass = 'deck-card-left';

              const isCurrent = offset === 0;

              return (
                <article
                  key={card.id}
                  className={`deck-card-item ${positionClass}`}
                  style={{ background: card.cardBg }}
                  onClick={!isCurrent ? () => setCurrentIndex(idx) : undefined}
                  role="region"
                  aria-hidden={!isCurrent}
                >
                  {/* Fila superior: Tag, Calificación y Contador */}
                  <div className="deck-card-top-bar">
                    <span className="deck-tag-pill">
                      [ {card.tag} ]
                    </span>

                    <div className="deck-rating-badge">
                      <div className="deck-stars-row">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={11} className="deck-star-icon" />
                        ))}
                      </div>
                      <span className="deck-rating-score">{card.rating}</span>
                    </div>

                    <span className="deck-counter-badge">
                      {idx + 1} / {total}
                    </span>
                  </div>

                  {/* Línea horizontal fina bajo la barra superior */}
                  <div className="deck-hairline-divider" />

                  {/* Cuerpo con la Cita Destacada */}
                  <div className="deck-card-body">
                    <blockquote className="deck-quote-text">
                      {card.quote}
                    </blockquote>
                  </div>

                  {/* Línea punteada divisoria estilo mazo */}
                  <div className="deck-dashed-divider" />

                  {/* Pie de la tarjeta */}
                  <div className="deck-card-footer">
                    <div className="deck-author-group">
                      <div className="deck-author-avatar">
                        <span>{card.authorInitial}</span>
                      </div>
                      <div className="deck-author-info">
                        <strong className="deck-author-name">{card.authorName}</strong>
                        <span className="deck-role-pill">{card.authorRole}</span>
                      </div>
                    </div>

                    <div className="deck-reactions-group">
                      <div className="deck-badge-box">
                        <Heart size={12} className="deck-heart-icon" />
                        <span>{card.likes}</span>
                      </div>
                      <div className="deck-badge-box">
                        <Users size={12} />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            {/* Botón Circular Inferior de Avance adaptado a los colores de Aura */}
            <button
              type="button"
              className="deck-next-circular-btn"
              onClick={handleNext}
              aria-label="Ver siguiente tarjeta del mazo"
              title="Avanzar mazo"
            >
              <ArrowRight size={22} className="deck-arrow-svg" />
            </button>
          </div>

          {/* Indicadores de navegación rápida por puntos */}
          <div className="deck-dots-indicator" aria-label="Selector de tarjeta">
            {deckCards.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`deck-dot-btn ${i === currentIndex ? 'is-active' : ''}`}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Ir a tarjeta ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
