import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mantenimiento | JLC Fire',
  description:
    'Ofrecemos servicios de mantenimiento integral para todos los sistemas de seguridad y protección contra incendios, garantizando su funcionamiento óptimo y confiabilidad.',
  alternates: {
    canonical: '/services/maintenance'
  },
  openGraph: {
    title: 'Mantenimiento | JLC Fire',
    description:
      'Ofrecemos servicios de mantenimiento integral para todos los sistemas de seguridad y protección contra incendios, garantizando su funcionamiento óptimo y confiabilidad.',
    url: '/services/maintenance',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mantenimiento | JLC Fire',
    description:
      'Ofrecemos servicios de mantenimiento integral para todos los sistemas de seguridad y protección contra incendios, garantizando su funcionamiento óptimo y confiabilidad.'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Mantenimiento',
    description:
      'Ofrecemos servicios de mantenimiento integral para todos los sistemas de seguridad y protección contra incendios, garantizando su funcionamiento óptimo y confiabilidad.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'JLC Fire'
    },
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://jlc-fire.vercel.app'}/services/maintenance`
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
