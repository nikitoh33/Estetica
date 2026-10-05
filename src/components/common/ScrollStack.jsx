// src/components/common/ScrollStack.jsx
import { useEffect, useRef, Children, cloneElement, isValidElement } from 'react';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '', index = 0 }) => (
  <div 
    className={`scroll-stack-card ${itemClassName}`.trim()}
    data-stack-index={index}
    style={{
      top: `calc(12vh + ${index * 20}px)`,
      zIndex: 10 + index
    }}
  >
    {children}
  </div>
);

export default function ScrollStack({
  children,
  className = '',
  itemScale = 0.035,
  blurAmount = 0.5
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll('.scroll-stack-card');
      const windowHeight = window.innerHeight;

      cards.forEach((card, i) => {
        // Contamos cuántas tarjetas posteriores ya alcanzaron la posición fija sobre esta
        let coveredBy = 0;
        for (let j = i + 1; j < cards.length; j++) {
          const nextRect = cards[j].getBoundingClientRect();
          const nextStickyTop = 0.12 * windowHeight + j * 20;
          if (nextRect.top <= nextStickyTop + 4) {
            coveredBy++;
          }
        }

        const scale = 1 - (coveredBy * itemScale);
        const blur = coveredBy * blurAmount;
        const brightness = 1 - (coveredBy * 0.035);

        card.style.transform = `scale(${Math.max(0.86, scale)})`;
        card.style.filter = blur > 0 ? `blur(${blur}px) brightness(${brightness})` : 'none';
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [itemScale, blurAmount]);

  return (
    <div className={`scroll-stack-window-container ${className}`.trim()} ref={containerRef}>
      <div className="scroll-stack-cards-list">
        {Children.map(children, (child, idx) => {
          if (!isValidElement(child)) return child;
          return cloneElement(child, { index: idx });
        })}
      </div>
    </div>
  );
}
