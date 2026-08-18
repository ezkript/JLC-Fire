import type { Metadata } from 'next';
import { certificationsData } from '@/lib/certifications-data';

export const metadata: Metadata = {
  title: 'Certificaciones y Calidad | JLC Fire',
  description:
    'Descubre las certificaciones que respaldan nuestro compromiso con la calidad y seguridad en cada proyecto de JLC Fire.',
  alternates: {
    canonical: '/certifications'
  },
  openGraph: {
    title: 'Certificaciones | JLC Fire',
    description: 'Descubre las certificaciones que respaldan nuestra calidad.',
    url: '/certifications',
    type: 'website'
  }
};
import CertificationsList from '@/components/certifications/CertificationsList/CertificationsList';

export default function CertificationsPage() {
  return <CertificationsList certifications={certificationsData} />;
}
