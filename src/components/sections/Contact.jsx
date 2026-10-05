// src/components/sections/Contact.jsx
import { useState, useRef } from 'react';
import { Sparkles, MapPin, Phone, Mail, Clock, MessageCircle, ShieldCheck } from 'lucide-react';
import { businessInfo, servicesData } from '../../data/mockData';
import './Contact.css';

/**
 * Función de seguridad para sanitizar cadenas en el cliente.
 * Elimina etiquetas HTML, caracteres de control y limita longitud para prevenir XSS.
 */
function sanitizeInput(str = '', maxLength = 250) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>?/gm, '') // Remueve tags HTML / scripts
    .replace(/[<>\\{}[\]^~`|]/g, '') // Remueve caracteres propensos a inyecciones
    .trim()
    .slice(0, maxLength);
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    serviceId: servicesData[0]?.id || '',
    preferredDay: 'Lunes a Viernes',
    notes: '',
    // Campo trampa (honeypot) invisible para usuarios legítimos; si un bot lo rellena, se rechaza
    hp_website: ''
  });

  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastSubmitTime = useRef(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (formError) setFormError('');
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // 1. Detección Anti-Bot Honeypot
    if (formData.hp_website && formData.hp_website.trim().length > 0) {
      console.warn("Spam bot submission blocked.");
      return;
    }

    // 2. Control de Frecuencia / Rate Limiting (mínimo 3 segundos entre envíos)
    const now = Date.now();
    if (now - lastSubmitTime.current < 3000) {
      setFormError('Por favor aguarda unos segundos antes de enviar otra solicitud.');
      return;
    }

    // 3. Sanitización y validación estricta de entradas
    const cleanName = sanitizeInput(formData.name, 60);
    const cleanNotes = sanitizeInput(formData.notes, 280);

    if (!cleanName || cleanName.length < 2) {
      setFormError('Por favor ingresa un nombre válido (mínimo 2 caracteres).');
      return;
    }

    // Validación de caracteres en el nombre (solo letras, tildes y espacios)
    const nameRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s'-]+$/;
    if (!nameRegex.test(cleanName)) {
      setFormError('El nombre solo debe contener letras y espacios válidos.');
      return;
    }

    // 4. Procesamiento seguro de la solicitud
    setIsSubmitting(true);
    lastSubmitTime.current = now;

    const selectedService = servicesData.find((s) => s.id === formData.serviceId);
    const serviceName = selectedService ? selectedService.title : 'Consulta General';

    // Generamos el mensaje estructurado y sanitizado
    const message = `¡Hola ${businessInfo.name} Estética! Mi nombre es *${cleanName}*.
Quisiera consultar disponibilidad de turnos para: *${serviceName}*.
Preferencia de horario: ${formData.preferredDay}.
${cleanNotes ? `Nota adicional: ${cleanNotes}` : ''}`;

    // Sanitización y codificación de URI para prevenir parámetros maliciosos
    const waUrl = `https://wa.me/${businessInfo.rawPhone}?text=${encodeURIComponent(message)}`;
    
    // Apertura protegida con noopener y noreferrer
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        {/* Cabecera */}
        <div className="contact-header text-center reveal-fade-up">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Reserva tu Momento</span>
          </div>
          <h2 className="section-title">
            Estamos listas para <em>cuidar de ti</em>
          </h2>
          <p className="section-subtitle">
            Coordina tu cita o despeja cualquier inquietud. Te esperamos en nuestro espacio diseñado para tu renovación física y mental.
          </p>
        </div>

        <div className="contact-layout reveal-fade-up delay-1">
          {/* Tarjeta de Información de la Clínica */}
          <div className="contact-info-card">
            <h3 className="info-card-title">{businessInfo.name} {businessInfo.subtitle}</h3>
            <p className="info-card-desc">
              Atención personalizada con reserva previa para asegurar la exclusividad y tranquilidad de cada sesión.
            </p>

            <ul className="info-items-list">
              <li className="info-item">
                <div className="info-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <strong>Dirección</strong>
                  <p>{businessInfo.address}</p>
                </div>
              </li>

              <li className="info-item">
                <div className="info-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <strong>Teléfono / WhatsApp</strong>
                  <p>{businessInfo.phone}</p>
                </div>
              </li>

              <li className="info-item">
                <div className="info-icon-box">
                  <Clock size={20} />
                </div>
                <div>
                  <strong>Horarios de Atención</strong>
                  <p>{businessInfo.schedule}</p>
                </div>
              </li>

              <li className="info-item">
                <div className="info-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <strong>Correo Electrónico</strong>
                  <p>{businessInfo.email}</p>
                </div>
              </li>
            </ul>

            <div className="contact-social-prompt">
              <span>Síguenos en Instagram para ver casos antes/después:</span>
              <a 
                href={businessInfo.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="instagram-btn-link"
                aria-label={`Instagram de ${businessInfo.name}`}
              >
                {businessInfo.instagram}
              </a>
            </div>
          </div>

          {/* Formulario Rápido y Seguro de Solicitud de Turno vía WhatsApp */}
          <div className="contact-form-card">
            <div className="form-security-badge">
              <ShieldCheck size={14} />
              <span>Conexión Protegida & Sanitizada</span>
            </div>

            <h3 className="form-card-title">Reserva Rápida de Turno</h3>
            <p className="form-card-subtitle">
              Completa los datos y se abrirá una conversación en WhatsApp con tu solicitud armada de forma segura.
            </p>

            {formError && (
              <div className="form-error-alert" role="alert">
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleWhatsAppSubmit} className="appointment-form" noValidate>
              {/* Campo Trampa Honeypot contra Bots (Oculto en UI) */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="hp_website">No llenar este campo</label>
                <input
                  type="text"
                  id="hp_website"
                  name="hp_website"
                  value={formData.hp_website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="form-group">
                <label htmlFor="name" className="form-label">Tu Nombre y Apellido *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  maxLength={60}
                  placeholder="Ej: Sofía Martínez"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  autoComplete="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="serviceId" className="form-label">Tratamiento o Servicio de Interés</label>
                <select
                  id="serviceId"
                  name="serviceId"
                  value={formData.serviceId}
                  onChange={handleChange}
                  className="form-select"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} ({s.duration})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="preferredDay" className="form-label">Franja Horaria de Preferencia</label>
                <select
                  id="preferredDay"
                  name="preferredDay"
                  value={formData.preferredDay}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Mañana (09:00 a 13:00 hs)">Por la Mañana (09:00 a 13:00 hs)</option>
                  <option value="Tarde (14:00 a 18:00 hs)">Por la Tarde (14:00 a 18:00 hs)</option>
                  <option value="Noche (18:00 a 20:30 hs)">Últimos turnos (18:00 a 20:30 hs)</option>
                  <option value="Sábados">Sábados (09:00 a 17:00 hs)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="notes" className="form-label">¿Algún comentario o consulta extra? (Opcional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  maxLength={280}
                  placeholder="Ej: ¿Tienen cupos esta semana? ¿Es mi primera vez haciéndome láser?"
                  value={formData.notes}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary form-submit-btn"
                disabled={isSubmitting}
              >
                <MessageCircle size={18} />
                <span>{isSubmitting ? 'Preparando...' : 'Consultar Disponibilidad en WhatsApp'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
