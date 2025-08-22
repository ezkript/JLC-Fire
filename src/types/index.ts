// Tipos globales de la aplicación

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  socialMedia: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
}

export interface Certification {
  id: string;
  title: string;
  description: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  image?: string;
  category: 'fire-safety' | 'security' | 'bms' | 'maintenance' | 'software';
  status: 'active' | 'expired' | 'pending';
}
