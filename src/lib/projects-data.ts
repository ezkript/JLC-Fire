export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  client: string;
  location: string;
  year: string;
  duration: string;
  category: string;
  icon: string;
  image: string;
  gallery: string[];
  services: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  technologies: string[];
  team: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
    company: string;
  };
}

export const projectsData: ProjectDetail[] = [
  {
    id: 'torre-corporativa-buenos-aires',
    title: 'Torre Corporativa Buenos Aires',
    subtitle: 'Sistema integral de seguridad y protección contra incendios',
    description:
      'Implementación de un sistema completo de seguridad y protección contra incendios para una torre corporativa de 40 pisos en el centro financiero de Buenos Aires.',
    client: 'Grupo Empresarial Argentino',
    location: 'Buenos Aires, Argentina',
    year: '2023',
    duration: '8 meses',
    category: 'commercial',
    icon: 'Building2',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop'
    ],
    services: [
      'Detección de incendios por aspiración',
      'Sistema de extinción por gases',
      'Control de acceso biométrico',
      'Building Management System',
      'Software gráfico personalizado'
    ],
    challenges: [
      'Integración con sistemas existentes',
      'Cumplimiento de normativas internacionales',
      'Minimizar interrupciones operativas',
      'Gestión de múltiples contratistas'
    ],
    solutions: [
      'Análisis detallado de sistemas existentes',
      'Implementación por fases',
      'Capacitación integral del personal',
      'Soporte técnico 24/7'
    ],
    results: [
      'Reducción del 95% en tiempo de respuesta',
      'Cumplimiento total de normativas NFPA',
      'ROI del 300% en 18 meses',
      'Certificación LEED Gold'
    ],
    technologies: [
      'Sistemas de aspiración VESDA',
      'Extinción por gas FM-200',
      'Control de acceso HID',
      'BMS Schneider Electric',
      'Software gráfico personalizado'
    ],
    team: [
      'Ing. Juan Pérez - Director de Proyecto',
      'Ing. María González - Especialista en Detección',
      'Téc. Carlos Rodríguez - Instalación',
      'Ing. Ana Martínez - Integración de Sistemas'
    ],
    testimonial: {
      text: 'JLC Fire superó todas nuestras expectativas. El sistema implementado nos da la tranquilidad de tener la mejor protección posible para nuestro edificio y personal.',
      author: 'Dr. Roberto Silva',
      position: 'Director de Operaciones',
      company: 'Grupo Empresarial Argentino'
    }
  },
  {
    id: 'planta-industrial-cordoba',
    title: 'Planta Industrial Córdoba',
    subtitle: 'Protección contra incendios para industria automotriz',
    description:
      'Sistema de protección contra incendios para una planta de fabricación automotriz de 50,000 m², incluyendo áreas de producción, almacenamiento y oficinas.',
    client: 'Automotriz del Sur S.A.',
    location: 'Córdoba, Argentina',
    year: '2023',
    duration: '6 meses',
    category: 'industrial',
    icon: 'Factory',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop'
    ],
    services: [
      'Detección de incendios convencional',
      'Sistema de rociadores automáticos',
      'Extinción por espuma',
      'Sistema de alarma y evacuación',
      'Mantenimiento preventivo'
    ],
    challenges: [
      'Protección de equipos críticos',
      'Cumplimiento de normativas OSHA',
      'Minimizar tiempo de inactividad',
      'Gestión de riesgos específicos de la industria'
    ],
    solutions: [
      'Diseño de sistema redundante',
      'Implementación en horarios de mantenimiento',
      'Capacitación del personal de seguridad',
      'Plan de respuesta a emergencias'
    ],
    results: [
      'Cero incidentes de incendio desde la instalación',
      'Reducción del 40% en costos de seguros',
      'Cumplimiento total de normativas',
      'Mejora en la calificación de seguridad'
    ],
    technologies: [
      'Sensores de humo y temperatura',
      'Rociadores automáticos',
      'Sistema de espuma AFFF',
      'Panel de control Notifier',
      'Sistema de evacuación'
    ],
    team: [
      'Ing. Luis Fernández - Director de Proyecto',
      'Ing. Patricia López - Especialista en Extinción',
      'Téc. Miguel Torres - Instalación',
      'Ing. Diego Morales - Certificaciones'
    ]
  },
  {
    id: 'residencial-puerto-madero',
    title: 'Residencial Puerto Madero',
    subtitle: 'Sistema de seguridad para complejo residencial de lujo',
    description:
      'Implementación de sistemas de seguridad y control de acceso para un complejo residencial de lujo de 200 unidades en Puerto Madero, Buenos Aires.',
    client: 'Desarrollos Inmobiliarios Premium',
    location: 'Puerto Madero, Buenos Aires',
    year: '2022',
    duration: '4 meses',
    category: 'residential',
    icon: 'Home',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
    ],
    services: [
      'Control de acceso inteligente',
      'Sistema de CCTV',
      'Detección de incendios',
      'Intercomunicación',
      'Gestión de visitantes'
    ],
    challenges: [
      'Integración con sistemas de amenidades',
      'Gestión de múltiples niveles de acceso',
      'Interfaz amigable para residentes',
      'Escalabilidad del sistema'
    ],
    solutions: [
      'Sistema modular escalable',
      'Interfaz móvil intuitiva',
      'Integración con amenidades',
      'Capacitación para administración'
    ],
    results: [
      'Mejora del 90% en seguridad percibida',
      'Reducción del 60% en incidentes de seguridad',
      'Satisfacción del 95% de residentes',
      'Valorización de propiedades'
    ],
    technologies: [
      'Control de acceso HID',
      'CCTV Hikvision',
      'Sistema de intercomunicación',
      'App móvil personalizada',
      'Gestión centralizada'
    ],
    team: [
      'Ing. Sofía Ramírez - Directora de Proyecto',
      'Ing. Gabriel Torres - Especialista en Control de Acceso',
      'Téc. Laura Mendoza - Instalación',
      'Ing. Martín Díaz - Integración'
    ]
  },
  {
    id: 'centro-comercial-rosario',
    title: 'Centro Comercial Rosario',
    subtitle: 'Sistema integral para centro comercial',
    description:
      'Implementación de sistemas de seguridad y protección contra incendios para un centro comercial de 80,000 m² con más de 200 locales comerciales.',
    client: 'Centros Comerciales del Litoral',
    location: 'Rosario, Santa Fe',
    year: '2022',
    duration: '7 meses',
    category: 'commercial',
    icon: 'ShoppingBag',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop'
    ],
    services: [
      'Detección de incendios',
      'Sistema de extinción',
      'Control de acceso',
      'CCTV',
      'Sistema de evacuación',
      'Building Management System'
    ],
    challenges: [
      'Alto tráfico de personas',
      'Múltiples puntos de acceso',
      'Gestión de emergencias',
      'Integración con sistemas existentes'
    ],
    solutions: [
      'Sistema de evacuación inteligente',
      'Control de acceso por zonas',
      'Monitoreo centralizado',
      'Plan de emergencias integral'
    ],
    results: [
      'Evacuación en menos de 8 minutos',
      'Reducción del 70% en incidentes',
      'Mejora en la experiencia del cliente',
      'Cumplimiento de normativas locales'
    ],
    technologies: [
      'Sistema de detección Notifier',
      'Rociadores automáticos',
      'Control de acceso HID',
      'CCTV Hikvision',
      'BMS Schneider Electric'
    ],
    team: [
      'Ing. Roberto Castro - Director de Proyecto',
      'Ing. Carmen Vega - Especialista en Evacuación',
      'Téc. Fernando Ruiz - Instalación',
      'Ing. Valeria Morales - Integración'
    ]
  },
  {
    id: 'hospital-privado-mendoza',
    title: 'Hospital Privado Mendoza',
    subtitle: 'Sistemas de seguridad para centro médico',
    description:
      'Implementación de sistemas de seguridad y protección contra incendios para un hospital privado de alta complejidad con 300 camas y múltiples áreas críticas.',
    client: 'Centro Médico del Oeste',
    location: 'Mendoza, Argentina',
    year: '2021',
    duration: '10 meses',
    category: 'healthcare',
    icon: 'Building2',
    image:
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop'
    ],
    services: [
      'Detección de incendios por aspiración',
      'Sistema de extinción por gases',
      'Control de acceso biométrico',
      'Sistema de evacuación',
      'Integración con sistemas médicos'
    ],
    challenges: [
      'Protección de equipos médicos críticos',
      'Cumplimiento de normativas sanitarias',
      'Minimizar interrupciones en atención',
      'Gestión de múltiples áreas críticas'
    ],
    solutions: [
      'Sistema de detección ultra temprana',
      'Extinción por gases limpios',
      'Implementación por fases',
      'Capacitación médica especializada'
    ],
    results: [
      'Protección del 100% de equipos críticos',
      'Cumplimiento de normativas ANMAT',
      'Cero interrupciones en atención médica',
      'Certificación de seguridad hospitalaria'
    ],
    technologies: [
      'Sistema de aspiración VESDA',
      'Extinción por gas FM-200',
      'Control de acceso HID',
      'Integración con sistemas médicos',
      'Software de gestión hospitalaria'
    ],
    team: [
      'Ing. Dr. Alejandro Mendoza - Director de Proyecto',
      'Ing. Lucía Fernández - Especialista en Sistemas Médicos',
      'Téc. Ricardo Gómez - Instalación',
      'Ing. Natalia Torres - Certificaciones Sanitarias'
    ],
    testimonial: {
      text: 'La implementación de JLC Fire nos permite mantener la continuidad de nuestros servicios médicos críticos con la máxima seguridad para pacientes y personal.',
      author: 'Dr. María Elena Rodríguez',
      position: 'Directora Médica',
      company: 'Centro Médico del Oeste'
    }
  }
];

export const getProjectById = (id: string): ProjectDetail | undefined => {
  return projectsData.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): ProjectDetail[] => {
  return projectsData.filter(project => project.category === category);
};

export const getProjectsByYear = (year: string): ProjectDetail[] => {
  return projectsData.filter(project => project.year === year);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(projectsData.map(project => project.category)));
};

export const getAllYears = (): string[] => {
  return Array.from(new Set(projectsData.map(project => project.year))).sort(
    (a, b) => b.localeCompare(a)
  );
};
