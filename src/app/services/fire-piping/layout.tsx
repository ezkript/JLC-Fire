import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cañerías contra Incendios | JLC Fire',
  description:
    'Somos especialistas en diseño, prefabricación y montaje integral de redes de cañerías contra incendios (sistemas de rociadores, hidrantes y gabinetes). Ejecutamos uniones ranuradas Victaulic y soldaduras certificadas bajo la estricta norma NFPA.',
  alternates: {
    canonical: '/services/fire-piping'
  },
  openGraph: {
    title: 'Cañerías contra Incendios | JLC Fire',
    description:
      'Somos especialistas en diseño, prefabricación y montaje integral de redes de cañerías contra incendios (sistemas de rociadores, hidrantes y gabinetes). Ejecutamos uniones ranuradas Victaulic y soldaduras certificadas bajo la estricta norma NFPA.',
    url: '/services/fire-piping',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cañerías contra Incendios | JLC Fire',
    description:
      'Somos especialistas en diseño, prefabricación y montaje integral de redes de cañerías contra incendios (sistemas de rociadores, hidrantes y gabinetes). Ejecutamos uniones ranuradas Victaulic y soldaduras certificadas bajo la estricta norma NFPA.'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cañerías contra Incendios',
    description:
      'Somos especialistas en diseño, prefabricación y montaje integral de redes de cañerías contra incendios (sistemas de rociadores, hidrantes y gabinetes). Ejecutamos uniones ranuradas Victaulic y soldaduras certificadas bajo la estricta norma NFPA.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'JLC Fire'
    },
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://jlc-fire.vercel.app'}/services/fire-piping`
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
