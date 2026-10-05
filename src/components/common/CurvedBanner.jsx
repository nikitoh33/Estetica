// src/components/common/CurvedBanner.jsx
import { useEffect, useRef, useState } from 'react';
import './CurvedBanner.css';

export default function CurvedBanner({
  text = "✨ LUMINA ESTÉTICA • ARTE & CIENCIA DÉRMICA • TECNOLOGÍA LÁSER • MODELADO CORPORAL • BIENESTAR SENSORIAL • CEJAS & PESTAÑAS • UÑAS ESCULPIDAS • MASAJES TERAPÉUTICOS ✨",
  flip = false
}) {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const animRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let currentOffset = 0;
    const speed = isMobile ? 0.35 : 0.55;
    const resetLimit = isMobile ? -550 : -1440;

    const animate = () => {
      currentOffset -= speed;
      if (currentOffset <= resetLimit) {
        currentOffset = 0;
      }
      setOffset(currentOffset);
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [isMobile]);

  // En móvil usamos una frase más concisa y espaciada
  const mobileText = "✨ LUMINA ESTÉTICA • CIENCIA DÉRMICA • TECNOLOGÍA LÁSER • MODELADO CORPORAL • BIENESTAR ✨";
  const activeText = isMobile ? mobileText : text;
  const repeatedText = `${activeText}     ${activeText}     ${activeText}`;

  return (
    <div className={`curved-banner-container ${flip ? 'flipped' : ''}`}>
      <div className={`curved-banner-wave-wrapper ${isMobile ? 'is-mobile' : ''}`}>
        {isMobile ? (
          /* SVG Móvil: Curva orgánica flotante sin cortes rectangulares ni fondos partidos */
          <svg 
            viewBox="0 0 500 70" 
            className="curved-banner-svg"
            aria-hidden="true"
          >
            <defs>
              <path
                id="waveTextPathMobile"
                d="M -150,35 C 10,18 130,52 250,35 C 370,18 490,52 650,35"
                fill="none"
              />
              <linearGradient id="ribbonGradMobile" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FAF7F2" stopOpacity="0.8" />
                <stop offset="25%" stopColor="#EAD7CD" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#F5ECE0" stopOpacity="0.95" />
                <stop offset="75%" stopColor="#EAD7CD" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Cinta curva flotante con sombra suave */}
            <path
              d="M -150,35 C 10,18 130,52 250,35 C 370,18 490,52 650,35"
              fill="none"
              stroke="url(#ribbonGradMobile)"
              strokeWidth="26"
              strokeLinecap="round"
              className="curved-ribbon-track"
            />

            {/* Texto en trayectoria curva */}
            <text className="curved-banner-text mobile-text" dy="4">
              <textPath href="#waveTextPathMobile" startOffset={`${offset}px`}>
                {repeatedText}
              </textPath>
            </text>
          </svg>
        ) : (
          /* SVG Desktop: Cinta curva suave sin fondos rectangulares ni líneas duras */
          <svg 
            viewBox="0 0 1440 100" 
            className="curved-banner-svg"
            aria-hidden="true"
          >
            <defs>
              <path
                id="waveTextPathDesktop"
                d="M -200,50 C 160,18 520,82 880,50 C 1240,18 1600,82 1960,50"
                fill="none"
              />
              <linearGradient id="ribbonGradDesktop" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FAF7F2" stopOpacity="0.75" />
                <stop offset="20%" stopColor="#EAD7CD" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#F4EBDF" stopOpacity="0.95" />
                <stop offset="80%" stopColor="#EAD7CD" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0.75" />
              </linearGradient>
            </defs>

            {/* Cinta curva flotante */}
            <path
              d="M -200,50 C 160,18 520,82 880,50 C 1240,18 1600,82 1960,50"
              fill="none"
              stroke="url(#ribbonGradDesktop)"
              strokeWidth="36"
              strokeLinecap="round"
              className="curved-ribbon-track"
            />

            {/* Texto continuo */}
            <text className="curved-banner-text desktop-text" dy="5.5">
              <textPath href="#waveTextPathDesktop" startOffset={`${offset}px`}>
                {repeatedText}
              </textPath>
            </text>
          </svg>
        )}
      </div>
    </div>
  );
}
