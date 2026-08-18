const fs = require('fs');
const path = require('path');

const services = [
  {
    id: 'fire-piping',
    title: 'Cañerías contra Incendios',
    description:
      'Somos especialistas en diseño, prefabricación y montaje integral de redes de cañerías contra incendios (sistemas de rociadores, hidrantes y gabinetes). Ejecutamos uniones ranuradas Victaulic y soldaduras certificadas bajo la estricta norma NFPA.'
  },
  {
    id: 'fire-detection',
    title: 'Detección de Incendios',
    description:
      'Implementamos sistemas de detección de incendios de última generación que proporcionan alertas tempranas y precisas, permitiendo una respuesta rápida y efectiva ante emergencias.'
  },
  {
    id: 'fire-suppression',
    title: 'Extinción de Incendios',
    description:
      'Diseñamos, instalamos y certificamos sistemas de extinción por agua (rociadores) y por agentes limpios (gases). Integramos redes de cañerías, ranuras y soldaduras, salas de bombas, cilindros y toberas, con detección de incendio por zonas cruzadas y opción de activación manual mediante pulsadores de extinción.'
  },
  {
    id: 'access-control',
    title: 'Control de Acceso',
    description:
      'Sistemas inteligentes de control de acceso que garantizan la seguridad de sus instalaciones mediante tecnologías avanzadas de identificación y autorización.'
  },
  {
    id: 'bms',
    title: 'Building Management System',
    description:
      'Sistemas integrales de gestión de edificios que optimizan el funcionamiento de todos los sistemas, mejorando la eficiencia energética y la comodidad de los ocupantes.'
  },
  {
    id: 'maintenance',
    title: 'Mantenimiento',
    description:
      'Ofrecemos servicios de mantenimiento integral para todos los sistemas de seguridad y protección contra incendios, garantizando su funcionamiento óptimo y confiabilidad.'
  },
  {
    id: 'aspiration-systems',
    title: 'Sistemas de Aspiración',
    description:
      'Sistemas de detección de incendios por aspiración que monitorean continuamente el aire ambiente, proporcionando detección ultra temprana de partículas de humo y gases tóxicos.'
  },
  {
    id: 'software-graphic',
    title: 'Software Gráfico',
    description:
      'Desarrollamos software gráfico personalizado que proporciona interfaces intuitivas y funcionales para la gestión y monitoreo de todos los sistemas de seguridad.'
  },
  {
    id: 'fusion-fiber',
    title: 'Fusión de Fibra',
    description:
      'Ofrecemos servicios profesionales de fusión de fibra óptica para conexiones de alta calidad, incluyendo empalmes, terminaciones y certificación de enlaces con equipos de última generación.'
  }
];

const basePath = path.join(__dirname, 'src', 'app', 'services');

services.forEach(service => {
  const servicePath = path.join(basePath, service.id, 'layout.tsx');

  const content = `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${service.title} | JLC Fire',
  description: '${service.description.replace(/'/g, "\\'")}',
  alternates: {
    canonical: '/services/${service.id}'
  },
  openGraph: {
    title: '${service.title} | JLC Fire',
    description: '${service.description.replace(/'/g, "\\'")}',
    url: '/services/${service.id}',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '${service.title} | JLC Fire',
    description: '${service.description.replace(/'/g, "\\'")}',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '${service.title}',
    description: '${service.description.replace(/'/g, "\\'")}',
    provider: {
      '@type': 'LocalBusiness',
      name: 'JLC Fire'
    },
    url: \`\${process.env.NEXT_PUBLIC_SITE_URL || 'https://jlc-fire.vercel.app'}/services/${service.id}\`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
`;

  fs.writeFileSync(servicePath, content, 'utf8');
  console.log(`Updated ${servicePath}`);
});
