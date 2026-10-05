// src/components/sections/Faq.jsx
import { useState } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';
import { faqsData } from '../../data/mockData';
import './Faq.css';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="faq-section">
      <div className="container">
        {/* Cabecera */}
        <div className="faq-header text-center reveal-fade-up">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Dudas Frecuentes</span>
          </div>
          <h2 className="section-title">
            Todo lo que necesitas saber antes de tu <em>primera cita</em>
          </h2>
          <p className="section-subtitle">
            Transparencia y claridad en cada etapa de tu tratamiento. Si tienes otra consulta, nuestro equipo te responderá con gusto por WhatsApp.
          </p>
        </div>

        {/* Acordeón */}
        <div className="faq-accordion-wrapper reveal-fade-up delay-1">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <div className={`faq-chevron-box ${isOpen ? 'is-rotated' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <div 
                  className={`faq-answer-collapse ${isOpen ? 'is-visible' : ''}`}
                >
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
