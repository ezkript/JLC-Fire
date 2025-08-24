import { certificationsData } from '@/lib/certifications-data';
import CertificationsList from '@/components/certifications/CertificationsList/CertificationsList';

export default function CertificationsPage() {
  return <CertificationsList certifications={certificationsData} />;
}
