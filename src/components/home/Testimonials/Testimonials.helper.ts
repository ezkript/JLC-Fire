import { Client } from './Testimonials.types';
import { projectsData } from '@/lib/projects-data';

const getIndustryFromCategory = (category: string): string => {
  const industryMap: Record<string, string> = {
    commercial: 'Edificio Corporativo',
    industrial: 'Industria Manufacturera',
    healthcare: 'Sector Salud',
    education: 'Educación',
    hospitality: 'Hospitalidad',
    residential: 'Residencial',
    government: 'Sector Gubernamental',
    retail: 'Comercio Minorista',
    warehouse: 'Almacén y Logística',
    'data-center': 'Centro de Datos'
  };

  return industryMap[category] || 'Otros Sectores';
};

export const getClientsFromProjects = (): Client[] => {
  const uniqueClients = new Map<string, Client>();

  projectsData.forEach(project => {
    const clientId = project.client.toLowerCase().replace(/\s+/g, '-');

    if (!uniqueClients.has(clientId)) {
      uniqueClients.set(clientId, {
        id: clientId,
        name: project.client,
        logo: project.image,
        industry: getIndustryFromCategory(project.category),
        url: `/projects/${project.id}`
      });
    }
  });

  return Array.from(uniqueClients.values());
};

export const clients: Client[] = getClientsFromProjects();

export const sectionConfig = {
  title: 'Nuestros Clientes',
  subtitle:
    'Empresas líderes de diferentes sectores confían en JLC Fire para proteger sus instalaciones'
};
