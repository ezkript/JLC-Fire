import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sistemas de Aspiración | JLC Fire',
  description:
    'Sistemas de detección de incendios por aspiración que monitorean continuamente el aire ambiente, proporcionando detección ultra temprana de partículas de humo y gases tóxicos.',
  alternates: {
    canonical: '/services/aspiration-systems'
  },
  openGraph: {
    title: 'Sistemas de Aspiración | JLC Fire',
    description:
      'Sistemas de detección de incendios por aspiración que monitorean continuamente el aire ambiente, proporcionando detección ultra temprana de partículas de humo y gases tóxicos.',
    url: '/services/aspiration-systems',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sistemas de Aspiración | JLC Fire',
    description:
      'Sistemas de detección de incendios por aspiración que monitorean continuamente el aire ambiente, proporcionando detección ultra temprana de partículas de humo y gases tóxicos.'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Sistemas de Aspiración',
    description:
      'Sistemas de detección de incendios por aspiración que monitorean continuamente el aire ambiente, proporcionando detección ultra temprana de partículas de humo y gases tóxicos.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'JLC Fire'
    },
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://jlc-fire.vercel.app'}/services/aspiration-systems`
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
