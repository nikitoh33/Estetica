// src/components/sections/Testimonials.jsx
import { Star, Sparkles, Quote, CheckCircle } from 'lucide-react';
import { testimonialsData } from '../../data/mockData';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section id="testimonios" className="testimonials-section">
      <div className="container">
        {/* Cabecera */}
        <div className="testimonials-header text-center reveal-fade-up">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Historias Reales</span>
          </div>
          <h2 className="section-title">
            Voces de quienes confían en <em>nuestras manos</em>
          </h2>
          <p className="section-subtitle">
            Más de 8.500 clientas han transformado el cuidado de su piel y su cuerpo con nosotros. Esto es lo que opinan sobre su experiencia.
          </p>
        </div>

        {/* Tarjetas de Testimonios (Mobile: 2 columnas compactas) */}
        <div className="testimonials-grid reveal-fade-up delay-1">
          {testimonialsData.map((item) => (
            <div key={item.id} className="testimonial-card">
              <Quote size={28} className="quote-watermark" />
              
              {/* Estrellas */}
              <div className="stars-row">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={15} className="star-icon-fill" />
                ))}
              </div>

              {/* Texto */}
              <p className="testimonial-text">
                "{item.text}"
              </p>

              {/* Autor */}
              <div className="testimonial-author">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="author-avatar" 
                  loading="lazy"
                />
                <div className="author-info">
                  <div className="author-name-row">
                    <strong className="author-name">{item.name}</strong>
                    {item.verified && (
                      <CheckCircle size={13} className="verified-icon" title="Clienta Verificada" />
                    )}
                  </div>
                  <span className="author-service">{item.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
