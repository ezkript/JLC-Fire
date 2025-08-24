import {
  Flame,
  Shield,
  Key,
  Building2,
  Wrench,
  Monitor,
  Fan,
  LucideIcon
} from 'lucide-react';

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  benefits: string[];
  image: string;
  href: string;
  category: 'fire' | 'security' | 'management' | 'support';
  heroImage?: string;
  heroVideo?: string;
  benefitsImage?: string;
  featuresList?: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  stats?: {
    value: string;
    label: string;
    icon: LucideIcon;
    description?: string;
  }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'fire-detection',
    title: 'Detección de Incendios',
    subtitle: 'Sistemas avanzados de detección temprana',
    description:
      'Implementamos sistemas de detección de incendios de última generación que proporcionan alertas tempranas y precisas, permitiendo una respuesta rápida y efectiva ante emergencias.',
    icon: Flame,
    category: 'fire',
    image: '/images/services/fire-detection.jpg',
    href: '/services/fire-detection',
    features: [
      'Detección por humo y temperatura',
      'Sensores inteligentes con IA',
      'Notificaciones en tiempo real',
      'Integración con sistemas de emergencia',
      'Monitoreo 24/7',
      'Cumplimiento de normativas internacionales'
    ],
    benefits: [
      'Detección temprana de incendios',
      'Reducción de daños y pérdidas',
      'Protección de vidas humanas',
      'Cumplimiento de códigos de seguridad',
      'Paz mental para propietarios',
      'Reducción de costos de seguros'
    ]
  },
  {
    id: 'fire-suppression',
    title: 'Extinción por Gases',
    subtitle: 'Sistemas de extinción por gases limpios',
    description:
      'Implementamos sistemas de extinción por gases limpios que combaten incendios de manera eficiente y segura, sin dañar equipos electrónicos y minimizando el impacto en el medio ambiente.',
    icon: Shield,
    category: 'fire',
    image: '/images/services/fire-suppression.jpg',
    href: '/services/fire-suppression',
    features: [
      'Sistemas de rociadores automáticos',
      'Extinción por gas limpio',
      'Sistemas de espuma',
      'Activación automática y manual',
      'Monitoreo de presión y flujo',
      'Mantenimiento preventivo'
    ],
    benefits: [
      'Respuesta automática inmediata',
      'Control efectivo del fuego',
      'Protección de equipos críticos',
      'Minimización de daños por agua',
      'Cumplimiento de estándares NFPA',
      'Reducción de tiempo de inactividad'
    ]
  },
  {
    id: 'access-control',
    title: 'Control de Acceso',
    subtitle: 'Seguridad y control total de accesos',
    description:
      'Sistemas inteligentes de control de acceso que garantizan la seguridad de sus instalaciones mediante tecnologías avanzadas de identificación y autorización.',
    icon: Key,
    category: 'security',
    image: '/images/services/access-control.jpg',
    href: '/services/access-control',
    features: [
      'Tarjetas de proximidad RFID',
      'Lectores biométricos',
      'Control de horarios y zonas',
      'Registro detallado de accesos',
      'Integración con CCTV',
      'Gestión centralizada'
    ],
    benefits: [
      'Control total de accesos',
      'Prevención de intrusiones',
      'Registro de actividad detallado',
      'Flexibilidad en permisos',
      'Escalabilidad del sistema',
      'Cumplimiento de normativas'
    ]
  },
  {
    id: 'bms',
    title: 'Building Management System',
    subtitle: 'Gestión inteligente de edificios',
    description:
      'Sistemas integrales de gestión de edificios que optimizan el funcionamiento de todos los sistemas, mejorando la eficiencia energética y la comodidad de los ocupantes.',
    icon: Building2,
    category: 'management',
    image: '/images/services/bms.jpg',
    href: '/services/bms',
    features: [
      'Control de HVAC centralizado',
      'Gestión de iluminación inteligente',
      'Monitoreo de energía',
      'Control de elevadores',
      'Sistemas de seguridad integrados',
      'Interfaz web y móvil'
    ],
    benefits: [
      'Reducción de costos energéticos',
      'Mejora de la eficiencia operativa',
      'Comodidad de los ocupantes',
      'Mantenimiento predictivo',
      'Cumplimiento de certificaciones LEED',
      'ROI rápido y medible'
    ]
  },
  {
    id: 'maintenance',
    title: 'Mantenimiento',
    subtitle: 'Servicios de mantenimiento preventivo y correctivo',
    description:
      'Ofrecemos servicios de mantenimiento integral para todos los sistemas de seguridad y protección contra incendios, garantizando su funcionamiento óptimo y confiabilidad.',
    icon: Wrench,
    category: 'support',
    image: '/images/services/maintenance.jpg',
    href: '/services/maintenance',
    features: [
      'Mantenimiento preventivo programado',
      'Reparaciones de emergencia',
      'Actualizaciones de software',
      'Calibración de sensores',
      'Inspecciones regulares',
      'Reportes detallados'
    ],
    benefits: [
      'Funcionamiento confiable',
      'Prevención de fallas',
      'Cumplimiento de garantías',
      'Reducción de costos a largo plazo',
      'Paz mental para clientes',
      'Servicio técnico especializado'
    ]
  },
  {
    id: 'aspiration-systems',
    title: 'Sistemas de Aspiración',
    subtitle: 'Detección temprana por aspiración de aire',
    description:
      'Sistemas de detección de incendios por aspiración que monitorean continuamente el aire ambiente, proporcionando detección ultra temprana de partículas de humo y gases tóxicos.',
    icon: Fan,
    category: 'fire',
    image: '/images/services/aspiration-systems.jpg',
    href: '/services/aspiration-systems',
    features: [
      'Detección ultra temprana',
      'Monitoreo continuo del aire',
      'Detección de partículas microscópicas',
      'Sensibilidad ajustable',
      'Ideal para espacios críticos',
      'Bajo mantenimiento'
    ],
    benefits: [
      'Detección antes de que sea visible',
      'Protección de equipos críticos',
      'Reducción de falsas alarmas',
      'Ideal para salas de servidores',
      'Cumplimiento de normativas',
      'ROI excepcional'
    ]
  },
  {
    id: 'software-graphic',
    title: 'Software Gráfico',
    subtitle: 'Interfaces gráficas avanzadas',
    description:
      'Desarrollamos software gráfico personalizado que proporciona interfaces intuitivas y funcionales para la gestión y monitoreo de todos los sistemas de seguridad.',
    icon: Monitor,
    category: 'management',
    image: '/images/services/software-graphic.jpg',
    href: '/services/software-graphic',
    features: [
      'Interfaces gráficas personalizadas',
      'Monitoreo en tiempo real',
      'Alertas configurables',
      'Reportes automáticos',
      'Integración multiplataforma',
      'Soporte técnico especializado'
    ],
    benefits: [
      'Gestión centralizada',
      'Operación simplificada',
      'Respuesta rápida a incidentes',
      'Análisis de datos avanzado',
      'Escalabilidad del sistema',
      'ROI mejorado'
    ]
  }
];

export const getServiceById = (id: string): ServiceDetail | undefined => {
  return servicesData.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): ServiceDetail[] => {
  return servicesData.filter(service => service.category === category);
};
