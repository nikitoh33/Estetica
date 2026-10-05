// src/components/layout/Footer.jsx
import { Sparkles, MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';
import { businessInfo, serviceCategories } from '../../data/mockData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();
  const encodedMsg = encodeURIComponent(`¡Hola ${businessInfo.name} Estética! Quisiera consultar por un turno.`);
  const waUrl = `https://wa.me/${businessInfo.rawPhone}?text=${encodedMsg}`;

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Columna 1: Marca y Propuesta */}
        <div className="footer-col brand-col">
          <div className="footer-brand">
            <div className="brand-logo-icon">
              <Sparkles size={16} />
            </div>
            <div className="brand-text-group">
              <span className="brand-name">{businessInfo.name}</span>
              <span className="brand-sub">ESTÉTICA & WELLNESS</span>
            </div>
          </div>
          <p className="footer-description">
            {businessInfo.tagline}
          </p>
          <div className="footer-socials">
            <a 
              href={businessInfo.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-pill-link"
              aria-label={`Instagram ${businessInfo.name} Estética`}
            >
              <span>{businessInfo.instagram}</span>
            </a>
          </div>
        </div>

        {/* Agrupador de Enlaces: En mobile se muestran 2 columnas lado a lado */}
        <div className="footer-links-group">
          {/* Columna 2: Categorías de Servicios */}
          <div className="footer-col links-col">
            <h4 className="footer-title">Tratamientos</h4>
            <ul className="footer-list">
              {serviceCategories.filter(cat => cat.id !== 'todos').map((cat) => (
                <li key={cat.id}>
                  <a href="#servicios" className="footer-link">
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Enlaces Rápidos */}
          <div className="footer-col links-col">
            <h4 className="footer-title">Navegación</h4>
            <ul className="footer-list">
              <li><a href="#inicio" className="footer-link">Inicio</a></li>
              <li><a href="#servicios" className="footer-link">Tratamientos</a></li>
              <li><a href="#experiencia" className="footer-link">Experiencia</a></li>
              <li><a href="#testimonios" className="footer-link">Testimonios</a></li>
              <li><a href="#faqs" className="footer-link">Preguntas</a></li>
              <li><a href="#contacto" className="footer-link">Contacto</a></li>
            </ul>
          </div>
        </div>

        {/* Columna 4: Contacto & Horarios */}
        <div className="footer-col contact-col">
          <h4 className="footer-title">Atención & Turnos</h4>
          <ul className="footer-contact-info">
            <li>
              <MapPin size={16} className="contact-icon" />
              <span>{businessInfo.address}</span>
            </li>
            <li>
              <Phone size={16} className="contact-icon" />
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                {businessInfo.phone}
              </a>
            </li>
            <li>
              <Mail size={16} className="contact-icon" />
              <a href={`mailto:${businessInfo.email}`}>
                {businessInfo.email}
              </a>
            </li>
            <li>
              <Clock size={16} className="contact-icon" />
              <span>{businessInfo.schedule}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra Inferior */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            © {currentYear} {businessInfo.name} Estética Avanzada.
          </p>
          <button 
            type="button" 
            onClick={scrollToTop} 
            className="scroll-top-btn"
            aria-label="Volver al inicio de la página"
          >
            <span>Subir</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
