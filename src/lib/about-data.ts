import { Value } from '@/components/about/AboutValues/AboutValues.types';
import { TeamMember } from '@/components/about/AboutTeam/AboutTeam.types';

export const aboutData = {
  hero: {
    title: 'Sobre JLC Fire',
    description:
      'Somos una empresa líder en el diseño, implementación y mantenimiento de sistemas de seguridad y protección contra incendios. Con más de 5 años de experiencia, hemos desarrollado soluciones innovadoras para empresas de diversos sectores, garantizando la protección de vidas y bienes.'
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
      name: 'Jorge Luis Cabrera',
      image:
        'https://drive.google.com/uc?export=view&id=19i2qb0SwhROGmtxtMTv3CHyvdL5Kz-86',
      position: 'Fundador',
      description:
        'Fundador de la empresa, con más de 20 años de experiencia en sistemas de seguridad.'
    }
  ] as TeamMember[]
};
