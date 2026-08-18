import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Gráfico | JLC Fire',
  description:
    'Desarrollamos software gráfico personalizado que proporciona interfaces intuitivas y funcionales para la gestión y monitoreo de todos los sistemas de seguridad.',
  alternates: {
    canonical: '/services/software-graphic'
  },
  openGraph: {
    title: 'Software Gráfico | JLC Fire',
    description:
      'Desarrollamos software gráfico personalizado que proporciona interfaces intuitivas y funcionales para la gestión y monitoreo de todos los sistemas de seguridad.',
    url: '/services/software-graphic',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Gráfico | JLC Fire',
    description:
      'Desarrollamos software gráfico personalizado que proporciona interfaces intuitivas y funcionales para la gestión y monitoreo de todos los sistemas de seguridad.'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Software Gráfico',
    description:
      'Desarrollamos software gráfico personalizado que proporciona interfaces intuitivas y funcionales para la gestión y monitoreo de todos los sistemas de seguridad.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'JLC Fire'
    },
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://jlc-fire.vercel.app'}/services/software-graphic`
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
