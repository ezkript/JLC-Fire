import { Brand } from './Brands.types';

export const brands: Brand[] = [
  {
    id: 'honeywell',
    name: 'Honeywell',
    logo: 'https://www.honeywell.com/content/dam/honeywellbt/en/images/logos/HON%20logo_200x37%202.png',
    url: 'https://www.honeywell.com',
    category: 'provider'
  },
  {
    id: 'notifier',
    name: 'Notifier by Honeywell',
    logo: 'https://www.notifier.es/templates/yootheme/cache/LogoNotifier-090aff50.png',
    url: 'https://www.notifier.es',
    category: 'provider'
  },
  {
    id: 'se',
    name: 'Schneider Electric',
    logo: 'https://yt3.googleusercontent.com/ytc/AIdro_mBCRN69JhmtXRHUS0KbIMbntYDAWI0lgaziB0gBww4aA=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.se.com/',
    category: 'provider'
  },
  {
    id: 'xtralis',
    name: 'Xtralis',
    logo: 'https://xtralis.com/images/marketing/xtralis-logo-anthracite.svg',
    url: 'https://www.xtralis.com/',
    category: 'provider'
  },
  {
    id: 'edwards',
    name: 'Edwards',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Edwards_Vacuum_Logo.jpg',
    url: 'https://www.edwardsvacuum.com/',
    category: 'provider'
  },
  {
    id: 'hikvision',
    name: 'Hikvision',
    logo: 'https://mirayconsulting.com/wp-content/uploads/2024/11/Hikvision.png',
    url: 'https://www.hikvision.com/',
    category: 'provider'
  },
  {
    id: 'GrupoValuar',
    name: 'Grupo Valuar',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0RSl40_PgGbQ-rnN7xqvVFllon6q37Q5U9w&s',
    category: 'partner'
  },
  {
    id: 'fireprotech',
    name: 'Fire Protech',
    logo: '/fireprotechlogo.png',
    category: 'partner'
  }
];

export const sectionConfig = {
  title: 'Aliados Comerciales',
  providers: {
    title: 'Proveedores',
    subtitle:
      'Trabajamos con equipos y sistemas de las marcas más reconocidas del sector para garantizar la calidad y confiabilidad'
  },
  partners: {
    title: 'Empresas de Compañía',
    subtitle:
      'Empresas que confían en nosotros y nos derivan proyectos para la implementación de sistemas de seguridad y protección contra incendios'
  }
};

// Funciones helper para filtrar por categoría
export const getProviders = () =>
  brands.filter(brand => brand.category === 'provider');
export const getPartners = () =>
  brands.filter(brand => brand.category === 'partner');
