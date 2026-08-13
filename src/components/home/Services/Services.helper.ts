// Helper functions for Services component

export const sectionConfig = {
  eyebrow: 'Lo que hacemos',
  title: 'Ingeniería que protege, sistemas que perduran',
  subtitle:
    'Cada proyecto es una oportunidad de construir seguridad real. Desde la primera cañería hasta el último sensor, trabajamos con precisión, certificación y compromiso.'
};

export const services = [
  {
    id: 'fire-piping',
    title: 'Cañerías contra Incendios',
    icon: 'Network',
    href: '/services/fire-piping',
    isFeatured: true,
    tagline:
      'Redes húmedas y secas, rociadores, hidrantes y soldadura certificada NFPA — nuestra especialidad de cabecera.'
  },
  {
    id: 'fire-detection',
    title: 'Detección de Incendios',
    icon: 'Flame',
    href: '/services/fire-detection',
    tagline: 'Detectamos el riesgo antes de que escale'
  },
  {
    id: 'fire-suppression',
    title: 'Extinción de Incendios',
    icon: 'Shield',
    href: '/services/fire-suppression',
    tagline: 'Agentes y sistemas que actúan en segundos'
  },
  {
    id: 'access-control',
    title: 'Control de Acceso',
    icon: 'Key',
    href: '/services/access-control',
    tagline: 'Seguridad perimetral inteligente y trazable'
  },
  {
    id: 'aspiration-systems',
    title: 'Sistemas de Aspiración',
    icon: 'Fan',
    href: '/services/aspiration-systems',
    tagline: 'Detección temprana por muestreo de aire'
  },
  {
    id: 'bms',
    title: 'Building Management',
    icon: 'Building2',
    href: '/services/bms',
    tagline: 'Control centralizado de todos los sistemas'
  },
  {
    id: 'software-graphic',
    title: 'Software Gráfico',
    icon: 'Monitor',
    href: '/services/software-graphic',
    tagline: 'Visualización en tiempo real de cada instalación'
  },
  {
    id: 'maintenance',
    title: 'Mantenimiento',
    icon: 'Wrench',
    href: '/services/maintenance',
    tagline: 'Planes preventivos para que nada falle cuando más importa'
  },
  {
    id: 'fusion-fiber',
    title: 'Fusión de Fibra Óptica',
    icon: 'Cable',
    href: '/services/fusion-fiber',
    tagline: 'Conectividad de alta velocidad para infraestructura crítica'
  }
];
