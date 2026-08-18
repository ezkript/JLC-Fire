import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Building Management System | JLC Fire',
  description:
    'Sistemas integrales de gestión de edificios que optimizan el funcionamiento de todos los sistemas, mejorando la eficiencia energética y la comodidad de los ocupantes.',
  alternates: {
    canonical: '/services/bms'
  },
  openGraph: {
    title: 'Building Management System | JLC Fire',
    description:
      'Sistemas integrales de gestión de edificios que optimizan el funcionamiento de todos los sistemas, mejorando la eficiencia energética y la comodidad de los ocupantes.',
    url: '/services/bms',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Building Management System | JLC Fire',
    description:
      'Sistemas integrales de gestión de edificios que optimizan el funcionamiento de todos los sistemas, mejorando la eficiencia energética y la comodidad de los ocupantes.'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Building Management System',
    description:
      'Sistemas integrales de gestión de edificios que optimizan el funcionamiento de todos los sistemas, mejorando la eficiencia energética y la comodidad de los ocupantes.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'JLC Fire'
    },
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://jlc-fire.vercel.app'}/services/bms`
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
