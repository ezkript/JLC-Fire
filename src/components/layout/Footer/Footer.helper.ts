import { CONTACT_DATA } from '@/lib/constants';

export const footerInfo = {
  company: {
    name: 'JLC Fire',
    description:
      'Soluciones integrales en sistemas de seguridad electrónica y protección contra incendios'
  },
  contact: {
    email: CONTACT_DATA.email,
    phone: CONTACT_DATA.phoneNumber,
    address: CONTACT_DATA.address
  },
  pages: [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/services' },
    { name: 'Proyectos', href: '/projects' },
    { name: 'Sobre nosotros', href: '/about' },
    { name: 'Certificaciones', href: '/certifications' },
    { name: 'Contacto', href: '/contact' }
  ]
};
