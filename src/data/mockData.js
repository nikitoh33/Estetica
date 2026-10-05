// src/data/mockData.js
// Datos centralizados de Lumina Estética Avanzada & Spa

export const businessInfo = {
  name: "Lumina",
  subtitle: "Estética Avanzada & Spa",
  tagline: "El equilibrio perfecto entre ciencia dérmica, tecnología médica y bienestar sensorial.",
  phone: "+54 9 11 3845-9201",
  rawPhone: "5491138459201",
  address: "Av. Quintana 450, Piso 2, Recoleta, CABA",
  email: "hola@luminaestetica.com.ar",
  instagram: "@lumina.estetica.recoleta",
  instagramUrl: "https://instagram.com",
  schedule: "Lunes a Viernes de 09:00 a 20:00 hs | Sábados de 09:00 a 17:00 hs",
  defaultWhatsAppMessage: "¡Hola Lumina Estética! Me gustaría consultar disponibilidad para reservar un turno."
};

export const heroStats = [
  { value: "+12.500", label: "Sesiones", sublabel: "Realizadas" },
  { value: "99.6%", label: "Clientas", sublabel: "Satisfechas" },
  { value: "+9 Años", label: "Trayectoria", sublabel: "Especializada" },
  { value: "FDA", label: "Tecnología", sublabel: "Certificada" }
];

export const serviceCategories = [
  { id: "todos", name: "Todos los servicios", icon: "Sparkles" },
  { id: "depilacion", name: "Depilación", icon: "Zap" },
  { id: "facial", name: "Limpieza Facial", icon: "Droplets" },
  { id: "corporal", name: "Corporales & Reductores", icon: "Flame" },
  { id: "unas", name: "Uñas", icon: "Gem" },
  { id: "cejas", name: "Cejas & Pestañas", icon: "Eye" },
  { id: "masajes", name: "Masajes Terapéuticos", icon: "HeartHandshake" }
];

export const servicesData = [
  // 1. DEPILACIÓN
  {
    id: "depilacion-laser-trio",
    category: "depilacion",
    title: "Depilación Láser Definitiva Diodo Trío",
    badge: "Tecnología Láser",
    popular: true,
    duration: "20 a 45 min",
    sessions: "6 a 8 sesiones",
    shortDesc: "Cabezal con triple longitud de onda (Alexandrita, Diodo y Nd-Yag). Indoloro, rápido y seguro en todo tipo de piel.",
    fullDesc: "Nuestro sistema de última generación incorpora un cabezal de enfriamiento sub-cero que insensibiliza la zona al instante. Trabaja directamente sobre el folículo piloso debilitándolo de raíz, permitiendo tratar pieles claras, bronceadas y vellos finos sin riesgo de quemaduras.",
    benefits: [
      "Sistema de enfriamiento criogénico indoloro (-5°C)",
      "Eficaz en todo tipo de fototipos y grosores de vello",
      "Elimina la foliculitis y vellos encarnados desde la 1ª sesión",
      "Sesiones ultra veloces sin tiempo de recuperación"
    ],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "depilacion-cera-calmante",
    category: "depilacion",
    title: "Depilación Sistema Español con Miel & Manzanilla",
    badge: "Cuidado Suave",
    popular: false,
    duration: "30 a 50 min",
    sessions: "Cada 20 a 25 días",
    shortDesc: "Cera vegetal elastizada de baja fusión con extractos calmantes que cuidan las pieles más sensibles.",
    fullDesc: "Fórmula hipoalergénica con cera pura de abejas y aceite de manzanilla. Su elasticidad permite una adherencia exclusiva al vello y no a la piel, minimizando el tirón y dejando la epidermis hidratada y tersa.",
    benefits: [
      "Baja temperatura para proteger la circulación capilar",
      "Aroma relajante y extractos descongestivos",
      "Piel suave y libre de enrojecimiento prolongado"
    ],
    image: "https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&w=800&q=80"
  },

  // 2. LIMPIEZA FACIAL
  {
    id: "limpieza-facial-profunda",
    category: "facial",
    title: "Higiene Facial Profunda + Punta de Diamante",
    badge: "Efecto Glow",
    popular: true,
    duration: "60 min",
    sessions: "1 vez al mes",
    shortDesc: "Microdermoabrasión, extracción ultrasónica de impurezas, máscara descongestiva e hidratación con ácido hialurónico.",
    fullDesc: "Tratamiento no invasivo de renovación celular. Comenzamos con una doble limpieza botánica, seguido de microdermoabrasión con puntas de diamante médico para eliminar células muertas, peeling ultrasónico indoloro para extraer puntos negros, alta frecuencia bactericida y masaje con suero de ácido hialurónico puro.",
    benefits: [
      "Eliminación profunda de comedones y exceso de sebo",
      "Poros visiblemente más cerrados y textura aterciopelada",
      "Luminosidad instantánea sin marcas ni inflamación",
      "Máscara hidrófila personalizada según tu biotipo dérmico"
    ],
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "peeling-hidrodermoabrasion",
    category: "facial",
    title: "Hidrodermoabrasión & Peeling Renovador Glow",
    badge: "Anti-Age & Manchas",
    popular: false,
    duration: "75 min",
    sessions: "4 a 6 sesiones",
    shortDesc: "Succión hidroactiva con infusión de vitaminas C + E y ácidos frutales para atenuar manchas y líneas de expresión.",
    fullDesc: "Tecnología hidrofacial que limpia, exfolia y nutre en simultáneo mediante una espiral de vórtice con sueros activos. Estimula el colágeno natural, unifica el tono y combate el fotoenvejecimiento aportando una hidratación acuosa profunda.",
    benefits: [
      "Atenúa manchas solares y marcas de acné",
      "Efecto tensor inmediato 'Glass Skin'",
      "Reactivación de la síntesis de colágeno y elastina",
      "Incluye cabina de fototerapia LED regeneradora"
    ],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
  },

  // 3. TRATAMIENTOS CORPORALES REDUCTORES Y ANTICELULÍTICOS
  {
    id: "maderoterapia-reductora",
    category: "corporal",
    title: "Maderoterapia Reductora Colombiana",
    badge: "Modelado Manual",
    popular: true,
    duration: "50 min",
    sessions: "6 a 10 sesiones",
    shortDesc: "Técnica holística con instrumentos de madera noble diseñados anatómicamente para modelar cintura, abdomen y piernas.",
    fullDesc: "La maderoterapia estimula la microcirculación y el sistema linfático, movilizando el tejido adiposo rebelde y despegando la fibrosis causante de la celulitis. Aplicamos copas suecas, rodillos estriados y champiñones con aceites botánicos termogénicos.",
    benefits: [
      "Reduce centímetros en zonas rebeldes (abdomen, flancos, pantalón de montar)",
      "Reafirma y tonifica la masa dérmica",
      "Reactiva el drenaje de toxinas y retención de líquidos",
      "Resultados visibles en el contorno corporal desde la 3ª sesión"
    ],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "anticelulitico-ondas-radiofrecuencia",
    category: "corporal",
    title: "Ondas de Choque + Radiofrecuencia Multipolar",
    badge: "Anticelulítico Pro",
    popular: true,
    duration: "60 min",
    sessions: "8 sesiones",
    shortDesc: "La combinación médica más efectiva contra la celulitis compacta y flacidez cutánea.",
    fullDesc: "Las ondas acústicas de choque rompen los tabiques fibróticos de la piel de naranja y aceleran el metabolismo celular. Luego, la radiofrecuencia genera un calor dérmico controlado que retrae y produce nuevas fibras de colágeno, dejando la piel firme y lisa.",
    benefits: [
      "Suaviza nódulos celulíticos en glúteos y muslos",
      "Aumenta la elasticidad y compacta la piel flácida",
      "Mejora radical del flujo sanguíneo tisular",
      "Tratamiento indoloro y no invasivo"
    ],
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cavitacion-lipodrenaje",
    category: "corporal",
    title: "Cavitación Ultrasónica & Lipo-Drenaje",
    badge: "Adiposidad Localizada",
    popular: false,
    duration: "50 min",
    sessions: "6 a 8 sesiones",
    shortDesc: "Ultrasonido de baja frecuencia que licúa adipocitos para ser eliminados naturalmente por el sistema linfático.",
    fullDesc: "Conocida como la 'liposucción sin cirugía', la cavitación genera microburbujas en el tejido graso que implosionan la membrana del adipocito sin dañar los tejidos circundantes. Se complementa con presoterapia secuencial para acelerar la eliminación de lípidos.",
    benefits: [
      "Disminución medible de contorno en cintura y caderas",
      "Tratamiento seguro y no invasivo",
      "Potencia el drenaje linfático general"
    ],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  },

  // 4. UÑAS
  {
    id: "manicura-semipermanente-spa",
    category: "unas",
    title: "Manicura Rusa Semipermanente & Spa",
    badge: "Duración +21 Días",
    popular: true,
    duration: "60 a 75 min",
    sessions: "Cada 3 a 4 semanas",
    shortDesc: "Limpieza profunda de cutículas con torno milimétrico, esmaltado en gel premium y nutrición con manteca de karité.",
    fullDesc: "La manicura combinada rusa asegura una limpieza milimétrica alrededor del lecho ungueal, logrando que el esmaltado ingrese por debajo del pliegue proximal para que el crecimiento tarde semanas en notarse. Usamos marcas veganas de alta gama sin tóxicos (10-free).",
    benefits: [
      "Acabado impecable y brillo espejo inalterable",
      "Cutículas perfectas sin cortes invasivos",
      "Exfoliación e hidratación profunda de manos",
      "Amplia paleta de más de 120 tonos de tendencia"
    ],
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "unas-esculpidas-kapping",
    category: "unas",
    title: "Esculpidas en Gel / Poligel & Kapping Fortalecedor",
    badge: "Largo & Resistencia",
    popular: false,
    duration: "90 a 120 min",
    sessions: "Mantenimiento c/ 20 días",
    shortDesc: "Estructuras elegantes en gel ultra liviano o baño de kapping para proteger y hacer crecer tus uñas naturales.",
    fullDesc: "Diseñamos la estructura anatómica perfecta para tus manos: almendrada, cuadrada, ballerina o stiletto. El gel de construcción de alta calidad proporciona resistencia sin engrosar la uña artificialmente. Opción de Nail Art minimalista de autor.",
    benefits: [
      "Extensión y corrección de uñas quebradizas o mordidas",
      "Kapping protector que impide roturas del largo natural",
      "Material flexible, ultraligero y de máxima duración",
      "Diseños artísticos personalizados a mano alzada"
    ],
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80"
  },

  // 5. CEJAS & PESTAÑAS
  {
    id: "laminado-perfilado-cejas",
    category: "cejas",
    title: "Diseño, Perfilado con Visagismo & Brow Lamination",
    badge: "Efecto Lifting",
    popular: true,
    duration: "50 min",
    sessions: "Cada 5 a 6 semanas",
    shortDesc: "Cejas más pobladas, definidas y disciplinadas. Incluye nutrición con queratina vegetal y tinte personalizado.",
    fullDesc: "El laminado reestructura la dirección del vello rebelde o caído, logrando una ceja más ancha y peinada hacia arriba con acabado editorial. El visagismo respeta la simetría ósea de tu rostro para una mirada armoniosa y rejuvenecida.",
    benefits: [
      "Sensación de cejas con un 40% más de volumen y densidad",
      "Disciplinado impecable sin necesidad de geles fijadores diarios",
      "Baño de tinte orgánico para mayor definición",
      "Nutrición con aceite de argán y complejo vitamínico"
    ],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "microblading-cejas-pelo-a-pelo",
    category: "cejas",
    title: "Microblading & Microshading Pelo a Pelo",
    badge: "Semipermanente",
    popular: false,
    duration: "120 min",
    sessions: "Retoque a los 30 días",
    shortDesc: "Pigmentación pelo a pelo hiperrealista para rellenar huecos y rediseñar la forma de tus cejas de forma sutil.",
    fullDesc: "Técnica artística con inductor manual y pigmentos biocompatibles de grado médico que se adaptan con precisión al tono natural de tu cabello y piel. Ideal para corregir asimetrías o reconstruir cejas despobladas con un aspecto sumamente natural.",
    benefits: [
      "Resultado hiperrealista que no vira a tonos indeseados",
      "Durabilidad de 12 a 18 meses",
      "Diseño previo milimétrico con aprobación de la clienta",
      "Anestesia tópica de alta eficacia para confort total"
    ],
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "lifting-pestanas-botox",
    category: "cejas",
    title: "Lifting de Pestañas con Tinte & Lash Botox",
    badge: "Mirada Abierta",
    popular: false,
    duration: "60 min",
    sessions: "Cada 6 a 8 semanas",
    shortDesc: "Curvatura natural desde la raíz sin dañarlas, con baño de tinte negro azabache y shock de nutrición profunda.",
    fullDesc: "Eleva y estira tus pestañas naturales de forma suave y sin apelmazar. El tratamiento Lash Botox rellena la fibra capilar con ceramidas, colágeno y queratina, haciéndolas lucir más largas, densas y oscuras desde el primer momento.",
    benefits: [
      "Olvídate del arqueador de pestañas y máscara por semanas",
      "Apto para duchas, gimnasio y pileta",
      "Estimula el crecimiento natural de la pestaña"
    ],
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80"
  },

  // 6. MASAJES
  {
    id: "masaje-descontracturante-piedras",
    category: "masajes",
    title: "Masaje Descontracturante Profundo con Piedras Volcánicas",
    badge: "Alivio Inmediato",
    popular: true,
    duration: "60 o 80 min",
    sessions: "A demanda / Quincenal",
    shortDesc: "Presión media-fuerte focalizada en contracturas de cuello, espalda y hombros, combinada con el calor sedativo del basalto.",
    fullDesc: "Sesión diseñada para disolver nudos musculares y tensiones acumuladas por estrés postural. El calor radiante de las piedras volcánicas penetra profundamente en la musculatura antes de las maniobras de fricción, percusión y estiramientos miofasciales.",
    benefits: [
      "Alivio instantáneo de dolores cervicales y lumbares",
      "Liberación de toxinas y mejora de la oxigenación muscular",
      "Aceites esenciales desinflamatorios (árnica, romero y eucalipto)",
      "Entorno de cromoterapia y sonido envolvente"
    ],
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "masaje-relajante-aromaterapia",
    category: "masajes",
    title: "Masaje Relajante Antiestrés & Aromaterapia Sensorial",
    badge: "Relax Total",
    popular: false,
    duration: "60 min",
    sessions: "Semanal / Quincenal",
    shortDesc: "Maniobras suaves y fluidas con aceites calientes de lavanda francesa y vainilla para calmar el sistema nervioso.",
    fullDesc: "Un ritual inmersivo pensado para desconectar de la rutina. Los movimientos envolventes y continuos reducen los niveles de cortisol, estimulan la serotonina y promueven una relajación física y mental absoluta.",
    benefits: [
      "Disminuye la ansiedad y mejora la calidad del sueño",
      "Hidratación dérmica intensiva con aceites tibios orgánicos",
      "Equilibrio energético integral"
    ],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "drenaje-linfatico-manual",
    category: "masajes",
    title: "Drenaje Linfático Manual (Vodder / Post-Quirúrgico)",
    badge: "Salud & Desinflamación",
    popular: false,
    duration: "60 min",
    sessions: "Según indicación médica",
    shortDesc: "Maniobras rítmicas y extremadamente suaves que activan la circulación linfática y deshinchan tejidos.",
    fullDesc: "Realizado por kinesiólogas y esteticistas matriculadas según el método clásico de Vodder. Es el tratamiento de referencia para piernas cansadas, retención hídrica, edemas y recuperación post-cirugías plásticas o cesáreas.",
    benefits: [
      "Favorece la reabsorción de líquidos y hematomas",
      "Efecto sedante sobre el dolor e inflamación",
      "Apto para embarazadas y postoperatorios"
    ],
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
  }
];

export const experienceHighlights = [
  {
    number: "01",
    title: "Diagnóstico & Escaneo Dérmico",
    description: "Evaluamos el estado de tu piel y cuerpo con aparatología de diagnóstico para crear un plan 100% individualizado.",
    icon: "Scan"
  },
  {
    number: "02",
    title: "Tecnología de Grado Médico",
    description: "Equipamiento de última generación con certificación FDA y ANMAT, asegurando máxima eficacia y seguridad clínica.",
    icon: "ShieldCheck"
  },
  {
    number: "03",
    title: "Cosmética Limpia & Orgánica",
    description: "Trabajamos con activos biocompatibles, fórmulas veganas y libres de crueldad animal que respetan tu manto hidrolipídico.",
    icon: "Leaf"
  },
  {
    number: "04",
    title: "Santuario de Calma Sensorial",
    description: "Salas climatizadas, sábanas de lino, aromaterapia botánica y privacidad absoluta para que tu momento sea sagrado.",
    icon: "Sparkles"
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Valentina Solís",
    service: "Depilación Láser Diodo & Higiene Facial",
    rating: 5,
    text: "La diferencia con otros centros es abismal. La depilación láser no duele absolutamente nada y en la 3ª sesión ya casi no tenía vello. Además, la limpieza con punta de diamante me dejó la piel con un brillo natural increíble.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    verified: true
  },
  {
    id: 2,
    name: "Camila Navarro",
    service: "Maderoterapia & Tratamiento Anticelulítico",
    rating: 5,
    text: "Empecé con el plan corporal antes del verano y reduje 4 cm de cintura en 8 sesiones. Las chicas tienen una mano espectacular, te explican cada paso y el espacio transmite una paz tremenda.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    verified: true
  },
  {
    id: 3,
    name: "Mariana Rivas",
    service: "Laminado de Cejas & Kapping en Gel",
    rating: 5,
    text: "Tengo las cejas muy rebeldes y en Lumina lograron el diseño perfecto que buscaba hace años. Mis uñas con el kapping duran intactas más de 3 semanas. La atención de todo el equipo es de 10 estrellas.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    verified: true
  },
  {
    id: 4,
    name: "Lucía Benítez",
    service: "Masaje Descontracturante con Piedras",
    rating: 5,
    text: "Llegué con un dolor cervical terrible por el trabajo en computadora. La sesión con piedras calientes y aromaterapia me reseteó por completo. Salí flotando. Ya tengo mi turno fijo cada 15 días.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    verified: true
  }
];

export const faqsData = [
  {
    question: "¿Cómo debo preparar mi piel antes de la depilación láser?",
    answer: "Debes rasurar la zona a tratar con maquinilla descartable 24 horas antes de la sesión (sin usar cera ni pinzas para conservar el folículo). No expongas la piel al sol directo o camas solares 48 horas previas y asiste con la piel limpia sin cremas corporales o desodorantes con alcohol."
  },
  {
    question: "¿Cada cuánto tiempo es recomendable realizarse una limpieza facial profunda?",
    answer: "Para la mayoría de los tipos de piel se recomienda cada 28 a 30 días, coincidiendo con el ciclo biológico natural de renovación celular. En pieles con tendencia acneica o seborreica puede recomendarse cada 20 días durante la fase inicial."
  },
  {
    question: "¿Cuántas sesiones de tratamientos corporales reductores se necesitan para ver resultados?",
    answer: "Los cambios en la textura de la piel y desinflamación suelen apreciarse desde la 3ª o 4ª sesión. Para una reducción notable de medidas y moldeado duradero, recomendamos protocolos de 6 a 10 sesiones combinadas, acompañadas de buena hidratación diaria."
  },
  {
    question: "¿Cuánto dura el esmaltado semipermanente y el kapping?",
    answer: "El esmaltado semipermanente dura en óptimas condiciones de 15 a 21 días. El Kapping Gel refuerza la uña natural permitiendo que crezca fuerte sin quebrarse y requiere un service de crecimiento cada 20 a 25 días."
  },
  {
    question: "¿Los tratamientos son dolorosos o requieren reposo?",
    answer: "Ninguno de nuestros tratamientos requiere reposo post-sesión. La aparatología cuenta con sistemas refrigerantes y ajustes de confort personalizados para que disfrutes de una experiencia relajante y placentera."
  },
  {
    question: "¿Cómo se reservan los turnos y cuáles son los medios de pago?",
    answer: "Puedes reservar directamente a través de nuestro botón de WhatsApp seleccionando tu servicio de interés. Aceptamos efectivo con descuento especial, tarjetas de débito/crédito, transferencias y Mercado Pago."
  }
];

export const curvedRibbonText = "✨ LUMINA ESTÉTICA AVANZADA • BIENESTAR SENSORIAL • CIENCIA DÉRMICA • TECNOLOGÍA LÁSER • MODELADO CORPORAL • ARTE EN UÑAS • MIRADA SUBLIME • MASAJES TERAPÉUTICOS ✨";

export const galleryItems = [
  { image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80", text: "Lifting Facial & Glow" },
  { image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80", text: "Santuario de Calma" },
  { image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=700&q=80", text: "Higiene con Diamante" },
  { image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=700&q=80", text: "Piedras Volcánicas" },
  { image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80", text: "Manicura Rusa & Spa" },
  { image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=700&q=80", text: "Visagismo de Cejas" },
  { image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=80", text: "Maderoterapia Corporal" },
  { image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=700&q=80", text: "Modelado & Firmeza" }
];
