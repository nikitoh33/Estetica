// src/components/sections/ServiceModal.jsx
import { useEffect } from 'react';
import { X, Clock, Calendar, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { businessInfo } from '../../data/mockData';
import './ServiceModal.css';

export default function ServiceModal({ service, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!service) return null;

  const encodedMsg = encodeURIComponent(
    `¡Hola ${businessInfo.name} Estética! Me interesa reservar un turno para: *${service.title}*. ¿Podrían informarme fechas y horarios disponibles?`
  );
  const waUrl = `https://wa.me/${businessInfo.rawPhone}?text=${encodedMsg}`;

  return (
    <div className="service-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="service-modal-card" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          type="button" 
          className="service-modal-close-btn" 
          onClick={onClose}
          aria-label="Cerrar modal de servicio"
        >
          <X size={22} />
        </button>

        {/* Banner de Imagen */}
        <div className="service-modal-image-wrapper">
          <img 
            src={service.image} 
            alt={service.title} 
            className="service-modal-image"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80";
            }}
          />
          <div className="service-modal-image-overlay" />
          <div className="service-modal-badge-container">
            <span className="service-modal-badge">
              <Sparkles size={13} />
              {service.badge}
            </span>
          </div>
        </div>

        {/* Contenido */}
        <div className="service-modal-body">
          <h3 className="service-modal-title">{service.title}</h3>

          <div className="service-modal-tags">
            <span className="modal-tag">
              <Clock size={15} />
              {service.duration}
            </span>
            <span className="modal-tag">
              <Calendar size={15} />
              {service.sessions}
            </span>
          </div>

          <div className="service-modal-desc">
            <p>{service.fullDesc}</p>
          </div>

          <div className="service-modal-benefits">
            <h4 className="benefits-title">Beneficios Clave del Tratamiento</h4>
            <ul className="benefits-list">
              {service.benefits.map((benefit, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="benefit-check-icon" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer de acción */}
          <div className="service-modal-footer">
            <a 
              href={waUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary modal-wa-btn"
            >
              <MessageCircle size={18} />
              <span>Reservar este Turno por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
