export interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  thumbnail?: string;
}

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
  gallery: GalleryItem[];
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
    id: 'toyota',
    title: 'Toyota',
    subtitle: 'Sistema de detección de incendios',
    description:
      'Implementación de un sistema de detección de incendios para la empresa Toyota.',
    client: 'Toyota',
    location: 'Buenos Aires, Argentina',
    year: '2025',
    duration: '1 mes',
    category: 'industrial',
    icon: 'Building2',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/e/ee/Toyota_logo_%28Red%29.svg',
    gallery: [
      {
        type: 'video',
        src: 'https://drive.google.com/file/d/1ESwtUWq41ivcBFgAVTKiMDgITkaWuyRa/preview',
        alt: 'Vista exterior del edificio Toyota'
      },
      {
        type: 'video',
        src: 'https://drive.google.com/file/d/1skk8meMEzN0gMWfcMhASnSF8bSZEa6Lx/preview',
        alt: 'Sistema de detección de incendios'
      },
      {
        type: 'video',
        src: 'https://drive.google.com/file/d/1k30Fu6WCVjPiISukpxkTFuZNNSuj6hlt/preview',
        thumbnail:
          'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
        alt: 'Video demostrativo del sistema'
      }
    ],
    services: ['Detección de incendios por aspiración'],
    challenges: [
      'Integración con sistemas existentes',
      'Cumplimiento de normativas internacionales',
      'Minimizar interrupciones operativas',
      'Gestión de múltiples contratistas'
    ],
    solutions: [
      'Análisis detallado de sistemas existentes',
      'Implementación por fases',
      'Capacitación integral del personal'
    ],
    results: [
      'Implementación de un sistema de detección de incendios para la empresa Toyota.'
    ],
    technologies: ['Extinción por gas FM-200'],
    team: ['Jorge Luis Cabrera']
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
