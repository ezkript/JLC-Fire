const navigationItems = [
  {
    label: 'Inicio',
    href: '/'
  },
  {
    label: 'Servicios',
    href: '#'
  },
  {
    label: 'Proyectos',
    href: '/projects'
  },
  {
    label: 'Sobre nosotros',
    href: '/about'
  },
  {
    label: 'Certificaciones',
    href: '/certifications'
  },
  {
    label: 'Contacto',
    href: '/contact'
  }
];

export const isServicesPage = (currentPath: string): boolean => {
  return currentPath.startsWith('/services');
};

export const isLinkActive = (href: string, currentPath: string): boolean => {
  if (href === '#') {
    return isServicesPage(currentPath);
  }
  return currentPath === href;
};

export { navigationItems };
