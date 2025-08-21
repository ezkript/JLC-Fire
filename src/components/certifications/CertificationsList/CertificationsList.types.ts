export interface CertificationsListProps {
  // Propiedades del componente CertificationsList
}

export interface Certification {
  id: string
  title: string
  description: string
  issuer: string
  issueDate: string
  expiryDate?: string
  image?: string
  category: 'fire-safety' | 'security' | 'bms' | 'maintenance' | 'software'
  status: 'active' | 'expired' | 'pending'
}
