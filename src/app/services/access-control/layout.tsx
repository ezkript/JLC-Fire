import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Control de Acceso | JLC Fire',
  description:
    'Sistemas inteligentes de control de acceso que garantizan la seguridad de sus instalaciones mediante tecnologías avanzadas de identificación y autorización.',
  alternates: {
    canonical: '/services/access-control'
  },
  openGraph: {
    title: 'Control de Acceso | JLC Fire',
    description:
      'Sistemas inteligentes de control de acceso que garantizan la seguridad de sus instalaciones mediante tecnologías avanzadas de identificación y autorización.',
    url: '/services/access-control',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Control de Acceso | JLC Fire',
    description:
      'Sistemas inteligentes de control de acceso que garantizan la seguridad de sus instalaciones mediante tecnologías avanzadas de identificación y autorización.'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Control de Acceso',
    description:
      'Sistemas inteligentes de control de acceso que garantizan la seguridad de sus instalaciones mediante tecnologías avanzadas de identificación y autorización.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'JLC Fire'
    },
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://jlc-fire.vercel.app'}/services/access-control`
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
