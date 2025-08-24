import { Value } from '@/components/about/AboutValues/AboutValues.types';
import { TeamMember } from '@/components/about/AboutTeam/AboutTeam.types';

export const aboutData = {
  hero: {
    title: 'Sobre JLC Fire',
    description:
      'Somos una empresa líder en el diseño, implementación y mantenimiento de sistemas de seguridad y protección contra incendios. Con más de 15 años de experiencia, hemos desarrollado soluciones innovadoras para empresas de diversos sectores, garantizando la protección de vidas y bienes.'
  },

  mission: {
    mission:
      'Proteger vidas y bienes mediante soluciones innovadoras de seguridad y protección contra incendios, contribuyendo a crear entornos más seguros para nuestros clientes y la sociedad, mientras mantenemos los más altos estándares de calidad y tecnología de vanguardia.'
  },

  values: [
    {
      icon: 'Shield',
      title: 'Liderazgo Tecnológico',
      description:
        'Ser reconocidos como la empresa líder en innovación tecnológica y soluciones avanzadas de seguridad en Argentina.'
    },
    {
      icon: 'Users',
      title: 'Expansión Global',
      description:
        'Expandir nuestra presencia a nivel regional, llevando nuestras soluciones de seguridad a nuevos mercados.'
    },
    {
      icon: 'Award',
      title: 'Excelencia Operativa',
      description:
        'Mantener los más altos estándares de calidad y eficiencia en todos nuestros procesos y servicios.'
    },
    {
      icon: 'Zap',
      title: 'Sostenibilidad',
      description:
        'Desarrollar soluciones que no solo protejan, sino que también contribuyan a un futuro más sostenible.'
    }
  ] as Value[],

  team: [
    {
      name: 'Ing. Juan López',
      position: 'Director General',
      description:
        'Ingeniero con más de 20 años de experiencia en sistemas de seguridad. Lidera la estrategia empresarial y la innovación tecnológica.'
    },
    {
      name: 'Ing. María González',
      position: 'Directora Técnica',
      description:
        'Especialista en sistemas de detección y extinción de incendios. Supervisa todos los aspectos técnicos de nuestros proyectos.'
    },
    {
      name: 'Lic. Carlos Rodríguez',
      position: 'Director Comercial',
      description:
        'Experto en relaciones comerciales y desarrollo de nuevos mercados. Gestiona las alianzas estratégicas y el crecimiento empresarial.'
    },
    {
      name: 'Ing. Ana Martínez',
      position: 'Jefa de Proyectos',
      description:
        'Coordinadora experta en gestión de proyectos complejos. Asegura la entrega exitosa de cada implementación.'
    },
    {
      name: 'Téc. Miguel Torres',
      position: 'Supervisor de Instalaciones',
      description:
        'Técnico especializado con amplia experiencia en instalación y mantenimiento de sistemas de seguridad.'
    },
    {
      name: 'Lic. Laura Fernández',
      position: 'Responsable de Calidad',
      description:
        'Encargada de garantizar el cumplimiento de todos los estándares de calidad y normativas vigentes.'
    }
  ] as TeamMember[]
};
