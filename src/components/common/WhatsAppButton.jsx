// src/components/common/WhatsAppButton.jsx
import { businessInfo } from '../../data/mockData';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const encodedMsg = encodeURIComponent(businessInfo.defaultWhatsAppMessage);
  const waUrl = `https://wa.me/${businessInfo.rawPhone}?text=${encodedMsg}`;

  return (
    <div className="wa-floating-container">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-floating-btn"
        aria-label="Contactar por WhatsApp para reservar un turno"
      >
        <span className="wa-pulse-ring"></span>
        <span className="wa-pulse-ring delay"></span>
        
        {/* SVG nítido y oficial de WhatsApp */}
        <svg 
          viewBox="0 0 24 24" 
          width="30" 
          height="30" 
          fill="currentColor" 
          className="wa-svg-icon"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.42C8.87 7.42 8.61 7.49 8.38 7.73C8.16 7.98 7.53 8.57 7.53 9.78C7.53 10.98 8.41 12.14 8.53 12.31C8.66 12.47 10.23 14.91 12.67 15.96C14.7 16.83 15.11 16.66 15.56 16.61C16 16.57 17 16.02 17.2 15.45C17.41 14.88 17.41 14.39 17.35 14.29C17.29 14.19 17.13 14.12 16.88 14C16.63 13.88 15.41 13.28 15.18 13.2C14.96 13.11 14.79 13.07 14.63 13.32C14.47 13.56 13.99 14.12 13.85 14.29C13.7 14.45 13.56 14.47 13.31 14.35C13.06 14.23 12.27 13.97 11.33 13.13C10.6 12.48 10.1 11.68 9.96 11.43C9.81 11.19 9.94 11.05 10.07 10.93C10.18 10.82 10.32 10.64 10.45 10.49C10.57 10.35 10.61 10.24 10.7 10.07C10.78 9.91 10.74 9.77 10.68 9.64C10.61 9.52 10.14 8.36 9.94 7.89C9.75 7.43 9.55 7.49 9.39 7.49C9.25 7.48 9.15 7.42 9.04 7.42Z" />
        </svg>

        <span className="wa-tooltip">
          ¿Consultas? ¡Escríbenos!
        </span>
      </a>
    </div>
  );
}
