import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Detección de Incendios | JLC Fire',
  description:
    'Implementamos sistemas de detección de incendios de última generación que proporcionan alertas tempranas y precisas, permitiendo una respuesta rápida y efectiva ante emergencias.',
  alternates: {
    canonical: '/services/fire-detection'
  },
  openGraph: {
    title: 'Detección de Incendios | JLC Fire',
    description:
      'Implementamos sistemas de detección de incendios de última generación que proporcionan alertas tempranas y precisas, permitiendo una respuesta rápida y efectiva ante emergencias.',
    url: '/services/fire-detection',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Detección de Incendios | JLC Fire',
    description:
      'Implementamos sistemas de detección de incendios de última generación que proporcionan alertas tempranas y precisas, permitiendo una respuesta rápida y efectiva ante emergencias.'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Detección de Incendios',
    description:
      'Implementamos sistemas de detección de incendios de última generación que proporcionan alertas tempranas y precisas, permitiendo una respuesta rápida y efectiva ante emergencias.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'JLC Fire'
    },
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://jlc-fire.vercel.app'}/services/fire-detection`
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
