import { CertificationLogo } from './Certifications.types';
import { certificationsData } from '@/lib/certifications-data';

export const sectionConfig = {
  title: 'Certificaciones y acreditaciones',
  subtitle:
    'Contamos con las certificaciones más importantes del sector para garantizar la calidad y seguridad en todos nuestros proyectos'
};

export const certificationLogos: CertificationLogo[] = certificationsData.map(
  certification => ({
    id: certification.id,
    name: certification.title,
    description: certification.issuer,
    logo:
      certification.image ||
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=80&q=80'
  })
);
