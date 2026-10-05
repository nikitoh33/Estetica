// src/components/sections/Services.jsx
import { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  ArrowRight, 
  Zap, 
  Droplets, 
  Flame, 
  Gem, 
  Eye, 
  HeartHandshake 
} from 'lucide-react';
import { serviceCategories, servicesData } from '../../data/mockData';
import ServiceModal from './ServiceModal';
import './Services.css';

// Mapeo dinámico de íconos para las pestañas de categorías
const iconMap = {
  Sparkles,
  Zap,
  Droplets,
  Flame,
  Gem,
  Eye,
  HeartHandshake
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedService, setSelectedService] = useState(null);

  // Filtrado de servicios según la categoría activa
  const filteredServices = activeCategory === 'todos'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  return (
    <section id="servicios" className="services-section">
      <div className="container">
        {/* Encabezado de la sección */}
        <div className="services-header text-center reveal-fade-up">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Nuestros Tratamientos Exclusivos</span>
          </div>
          <h2 className="section-title">
            Protocolos diseñados para realzar tu <em>armonía integral</em>
          </h2>
          <p className="section-subtitle">
            Combinamos aparatología médica de vanguardia, técnicas manuales de maestría y activos puros para brindarte resultados visibles y una relajación sin igual.
          </p>
        </div>

        {/* Pestañas de Filtrado */}
        <div className="services-filter-nav reveal-fade-up delay-1" role="tablist">
          {serviceCategories.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Sparkles;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`filter-tab-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <IconComponent size={16} className="tab-icon" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Cuadrícula de Tarjetas de Servicios (Mobile: 2 columnas compactas) */}
        <div className="services-grid reveal-fade-up delay-2">
          {filteredServices.map((service) => (
            <article 
              key={service.id} 
              className="service-card"
              onClick={() => setSelectedService(service)}
            >
              {/* Imagen con zoom suave y badge */}
              <div className="service-card-media">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-card-img" 
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="service-card-overlay" />
                
                <span className="service-badge-pill">
                  {service.badge}
                </span>

                <span className="service-duration-badge">
                  <Clock size={12} />
                  <span>{service.duration}</span>
                </span>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="service-card-body">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.shortDesc}</p>
                
                <div className="service-card-footer">
                  <span className="service-action-prompt">
                    <span>Ver detalles</span>
                    <ArrowRight size={15} className="arrow-hover-icon" />
                  </span>
                </div>
              </div>

              {/* Efecto Spotlight glow al hacer hover */}
              <div className="service-card-spotlight" />
            </article>
          ))}
        </div>
      </div>

      {/* Modal interactivo de detalles y reserva */}
      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </section>
  );
}
