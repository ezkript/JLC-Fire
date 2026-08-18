import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fusión de Fibra | JLC Fire',
  description:
    'Ofrecemos servicios profesionales de fusión de fibra óptica para conexiones de alta calidad, incluyendo empalmes, terminaciones y certificación de enlaces con equipos de última generación.',
  alternates: {
    canonical: '/services/fusion-fiber'
  },
  openGraph: {
    title: 'Fusión de Fibra | JLC Fire',
    description:
      'Ofrecemos servicios profesionales de fusión de fibra óptica para conexiones de alta calidad, incluyendo empalmes, terminaciones y certificación de enlaces con equipos de última generación.',
    url: '/services/fusion-fiber',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fusión de Fibra | JLC Fire',
    description:
      'Ofrecemos servicios profesionales de fusión de fibra óptica para conexiones de alta calidad, incluyendo empalmes, terminaciones y certificación de enlaces con equipos de última generación.'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Fusión de Fibra',
    description:
      'Ofrecemos servicios profesionales de fusión de fibra óptica para conexiones de alta calidad, incluyendo empalmes, terminaciones y certificación de enlaces con equipos de última generación.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'JLC Fire'
    },
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://jlc-fire.vercel.app'}/services/fusion-fiber`
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
