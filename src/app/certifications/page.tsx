import type { Metadata } from 'next';
import { certificationsData } from '@/lib/certifications-data';

export const metadata: Metadata = {
  title: 'Certificaciones y Calidad | JLC Fire',
  description:
    'Descubre las certificaciones que respaldan nuestro compromiso con la calidad y seguridad en cada proyecto de JLC Fire.'
};
import CertificationsList from '@/components/certifications/CertificationsList/CertificationsList';

export default function CertificationsPage() {
  return <CertificationsList certifications={certificationsData} />;
}
