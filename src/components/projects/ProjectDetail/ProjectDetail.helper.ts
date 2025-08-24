import { ProjectDetail as ProjectDetailType } from '@/lib/projects-data';

export const sectionConfig = {
  hero: {
    backButtonText: 'Volver a proyectos',
    backButtonHref: '/projects'
  },
  content: {
    description: {
      title: 'Descripción del Proyecto',
      className: 'text-2xl font-bold text-dark-900 mb-6'
    },
    services: {
      title: 'Servicios Implementados',
      className: 'text-xl font-bold text-dark-900 mb-4',
      itemClassName: 'flex items-center gap-3 p-4 bg-primary-50 rounded-lg',
      bulletClassName: 'w-2 h-2 bg-primary-600 rounded-full'
    },
    challenges: {
      title: 'Desafíos',
      className: 'text-xl font-bold text-dark-900 mb-4',
      itemClassName: 'flex items-start gap-3',
      bulletClassName: 'w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0'
    },
    solutions: {
      title: 'Soluciones',
      className: 'text-xl font-bold text-dark-900 mb-4',
      itemClassName: 'flex items-start gap-3',
      bulletClassName: 'w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0'
    },
    results: {
      title: 'Resultados Obtenidos',
      className: 'text-xl font-bold text-dark-900 mb-4',
      itemClassName: 'flex items-center gap-3 p-4 bg-green-50 rounded-lg',
      iconClassName: 'w-5 h-5 text-green-600 flex-shrink-0'
    },
    technologies: {
      title: 'Tecnologías Utilizadas',
      className: 'text-xl font-bold text-dark-900 mb-4',
      tagClassName:
        'px-4 py-2 bg-gray-100 text-dark-700 rounded-full text-sm font-medium'
    },
    team: {
      title: 'Equipo del Proyecto',
      className: 'text-xl font-bold text-dark-900 mb-4',
      itemClassName: 'flex items-center gap-3 p-4 bg-gray-50 rounded-lg',
      iconClassName: 'w-5 h-5 text-primary-600 flex-shrink-0'
    }
  },
  sidebar: {
    clientInfo: {
      title: 'Información del Cliente',
      className: 'bg-gray-50 rounded-2xl p-6',
      titleClassName: 'text-lg font-bold text-dark-900 mb-4'
    },

    testimonial: {
      title: 'Testimonio del Cliente',
      className: 'bg-white border-2 border-primary-200 rounded-2xl p-6',
      titleClassName: 'text-lg font-bold text-dark-900 mb-4',
      quoteClassName: 'text-dark-600 italic mb-4',
      authorClassName: 'font-semibold text-dark-900',
      positionClassName: 'text-sm text-dark-500',
      companyClassName: 'text-sm text-primary-600'
    },
    cta: {
      title: '¿Necesitas un proyecto similar?',
      description: 'Contáctanos para discutir cómo podemos ayudarte',
      buttonText: 'Contactar',
      buttonHref: '/contact',
      className:
        'bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white text-center',
      titleClassName: 'text-lg font-bold mb-2',
      descriptionClassName: 'text-sm mb-4 opacity-90',
      buttonClassName:
        'inline-block px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors'
    }
  },
  gallery: {
    title: 'Galería del Proyecto',
    className: 'text-2xl font-bold text-dark-900 mb-8 text-center',
    imageClassName:
      'object-cover hover:scale-105 transition-transform duration-300',
    containerClassName: 'relative h-64 rounded-2xl overflow-hidden'
  }
};

export const getCategoryLabel = (category: string): string => {
  switch (category) {
    case 'commercial':
      return 'Comercial';
    case 'industrial':
      return 'Industrial';
    case 'residential':
      return 'Residencial';
    case 'healthcare':
      return 'Salud';
    case 'education':
      return 'Educación';
    case 'transportation':
      return 'Transporte';
    default:
      return category;
  }
};

export const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'commercial':
      return 'bg-blue-100 text-blue-800';
    case 'industrial':
      return 'bg-orange-100 text-orange-800';
    case 'residential':
      return 'bg-green-100 text-green-800';
    case 'healthcare':
      return 'bg-red-100 text-red-800';
    case 'education':
      return 'bg-purple-100 text-purple-800';
    case 'transportation':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const breadcrumbItems = (projectTitle: string) => [
  { label: 'Proyectos', href: '/projects' },
  { label: projectTitle }
];

export const shouldShowSection = {
  testimonial: (project: ProjectDetailType) =>
    project.testimonial !== undefined,
  gallery: (project: ProjectDetailType) =>
    project.gallery && project.gallery.length > 0
};
