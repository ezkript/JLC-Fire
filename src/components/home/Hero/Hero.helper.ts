import { servicesData } from '@/lib/services-data';
import { getServiceImages } from '@/lib/services-images';

// Convertir servicios a formato de hero
export const heroProjects = servicesData.map(service => {
  const images = getServiceImages(service.id);
  return {
    id: service.id,
    title: service.title,
    description: service.description,
    image: images?.hero.imageUrl || service.image,
    ctaText: 'Ver Servicio',
    ctaLink: service.href
  };
});

export const getCurrentProject = (currentIndex: number) => {
  return heroProjects[currentIndex];
};
