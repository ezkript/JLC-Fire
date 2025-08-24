// Helper functions for Hero component
// This file will be populated manually later

export const heroProjects = [
  {
    id: 'fire-detection-system',
    title: 'Sistema de Detección de Incendios Avanzado',
    description:
      'Implementación de sistema integral de detección y alarma para complejo comercial de 50,000m² con tecnología de última generación.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    ctaText: 'Ver Proyecto',
    ctaLink: '/projects/fire-detection-system'
  },
  {
    id: 'access-control-integration',
    title: 'Control de Acceso Biométrico',
    description:
      'Sistema de control de acceso con reconocimiento facial y huella dactilar para empresa tecnológica con 200+ empleados.',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    ctaText: 'Ver Proyecto',
    ctaLink: '/projects/access-control-integration'
  },
  {
    id: 'bms-implementation',
    title: 'Building Management System',
    description:
      'Sistema de gestión integral de edificio inteligente con automatización de HVAC, iluminación y seguridad centralizada.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    ctaText: 'Ver Proyecto',
    ctaLink: '/projects/bms-implementation'
  },
  {
    id: 'software-graphic',
    title: 'Software Gráfico Personalizado',
    description:
      'Desarrollo de software de monitoreo y control con interfaz gráfica intuitiva para planta industrial.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    ctaText: 'Ver Proyecto',
    ctaLink: '/projects/software-graphic'
  }
];

export const getCurrentProject = (currentIndex: number) => {
  return heroProjects[currentIndex];
};
