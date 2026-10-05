// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import { businessInfo } from '../../data/mockData';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const encodedMsg = encodeURIComponent(`¡Hola ${businessInfo.name} Estética! Me gustaría reservar un turno.`);
  const waUrl = `https://wa.me/${businessInfo.rawPhone}?text=${encodedMsg}`;

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo / Marca */}
          <a href="#" className="navbar-brand" onClick={closeMenu}>
            <div className="brand-logo-icon">
              <Sparkles size={18} className="sparkle-icon" />
            </div>
            <div className="brand-text-group">
              <span className="brand-name">{businessInfo.name}</span>
              <span className="brand-sub">ESTÉTICA & WELLNESS</span>
            </div>
          </a>

          {/* Navegación Desktop */}
          <nav className="navbar-desktop-nav" aria-label="Navegación principal">
            <a href="#inicio" className="nav-link">Inicio</a>
            <a href="#servicios" className="nav-link">Servicios</a>
            <a href="#experiencia" className="nav-link">Experiencia</a>
            <a href="#testimonios" className="nav-link">Testimonios</a>
            <a href="#faqs" className="nav-link">Preguntas</a>
            <a href="#contacto" className="nav-link">Contacto</a>
          </nav>

          {/* Botón de acción Desktop */}
          <div className="navbar-actions-desktop">
            <a 
              href={waUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary nav-cta-btn"
            >
              <MessageCircle size={17} />
              <span>Agendar Turno</span>
            </a>
          </div>

          {/* Botón menú móvil */}
          <button 
            type="button" 
            className="navbar-mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Menú deslizante para Mobile */}
      <div 
        className={`mobile-drawer-backdrop ${isMobileMenuOpen ? 'is-open' : ''}`}
        onClick={closeMenu}
        aria-hidden={!isMobileMenuOpen}
      />
      
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'is-open' : ''}`} aria-hidden={!isMobileMenuOpen}>
        <div className="mobile-drawer-header">
          <div className="brand-text-group">
            <span className="brand-name">{businessInfo.name}</span>
            <span className="brand-sub">ESTÉTICA & WELLNESS</span>
          </div>
          <button 
            type="button" 
            className="mobile-drawer-close"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-drawer-nav">
          <a href="#inicio" className="mobile-nav-link" onClick={closeMenu}>Inicio</a>
          <a href="#servicios" className="mobile-nav-link" onClick={closeMenu}>Tratamientos & Servicios</a>
          <a href="#experiencia" className="mobile-nav-link" onClick={closeMenu}>Nuestra Experiencia</a>
          <a href="#testimonios" className="mobile-nav-link" onClick={closeMenu}>Opiniones de Clientas</a>
          <a href="#faqs" className="mobile-nav-link" onClick={closeMenu}>Preguntas Frecuentes</a>
          <a href="#contacto" className="mobile-nav-link" onClick={closeMenu}>Ubicación & Contacto</a>
        </nav>

        <div className="mobile-drawer-footer">
          <a 
            href={waUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary mobile-cta-btn"
            onClick={closeMenu}
          >
            <MessageCircle size={18} />
            <span>Reservar por WhatsApp</span>
          </a>
          <p className="mobile-schedule-text">
            {businessInfo.schedule}
          </p>
        </div>
      </div>
    </>
  );
}
