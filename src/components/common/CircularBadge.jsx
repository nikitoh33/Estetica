// src/components/common/CircularBadge.jsx
import { Sparkles } from 'lucide-react';
import './CircularBadge.css';

export default function CircularBadge({
  text = "★ AURA ESTÉTICA AVANZADA ★ BELLEZA & BIENESTAR ",
  size = 140,
  speed = 18,
  className = ""
}) {
  return (
    <div 
      className={`circular-badge-wrapper ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div 
        className="circular-badge-rotator"
        style={{ animationDuration: `${speed}s` }}
      >
        <svg viewBox="0 0 160 160" className="circular-badge-svg" aria-hidden="true">
          <defs>
            <path
              id="circlePath"
              d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
            />
          </defs>
          <text className="circular-badge-text">
            <textPath href="#circlePath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>

      <div className="circular-badge-center">
        <Sparkles size={24} className="center-icon" />
      </div>
    </div>
  );
}
