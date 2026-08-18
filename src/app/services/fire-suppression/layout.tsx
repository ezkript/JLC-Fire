import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Extinción de Incendios | JLC Fire',
  description:
    'Diseñamos, instalamos y certificamos sistemas de extinción por agua (rociadores) y por agentes limpios (gases). Integramos redes de cañerías, ranuras y soldaduras, salas de bombas, cilindros y toberas, con detección de incendio por zonas cruzadas y opción de activación manual mediante pulsadores de extinción.',
  alternates: {
    canonical: '/services/fire-suppression'
  },
  openGraph: {
    title: 'Extinción de Incendios | JLC Fire',
    description:
      'Diseñamos, instalamos y certificamos sistemas de extinción por agua (rociadores) y por agentes limpios (gases). Integramos redes de cañerías, ranuras y soldaduras, salas de bombas, cilindros y toberas, con detección de incendio por zonas cruzadas y opción de activación manual mediante pulsadores de extinción.',
    url: '/services/fire-suppression',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Extinción de Incendios | JLC Fire',
    description:
      'Diseñamos, instalamos y certificamos sistemas de extinción por agua (rociadores) y por agentes limpios (gases). Integramos redes de cañerías, ranuras y soldaduras, salas de bombas, cilindros y toberas, con detección de incendio por zonas cruzadas y opción de activación manual mediante pulsadores de extinción.'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Extinción de Incendios',
    description:
      'Diseñamos, instalamos y certificamos sistemas de extinción por agua (rociadores) y por agentes limpios (gases). Integramos redes de cañerías, ranuras y soldaduras, salas de bombas, cilindros y toberas, con detección de incendio por zonas cruzadas y opción de activación manual mediante pulsadores de extinción.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'JLC Fire'
    },
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://jlc-fire.vercel.app'}/services/fire-suppression`
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
