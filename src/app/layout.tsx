import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';
import WhatsAppButton from '@/components/global/WhatsAppButton/WhatsAppButton';
import ScrollToTop from '@/components/global/ScrollToTop/ScrollToTop';
import ContactModalProvider from '@/components/global/ContactModal/ContactModalProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://jlcfire.com'
  ),
  title: {
    default: 'JLC Fire - Sistemas de Seguridad y Protección contra Incendios',
    template: '%s | JLC Fire'
  },
  description:
    'Especialistas en sistemas de seguridad electrónica, detección y extinción de incendios, control de acceso, BMS, aspiración y mantenimiento.',
  keywords: [
    'sistemas de protección contra incendios',
    'extinción de incendios',
    'sistemas de detección de incendios',
    'cañerías contra incendios',
    'sistemas de aspiración temprana',
    'seguridad electrónica corporativa',
    'mantenimiento contra incendios',
    'BMS'
  ],
  authors: [{ name: 'JLC Fire' }],
  creator: 'JLC Fire',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: '/',
    title: 'JLC Fire - Sistemas de Seguridad y Protección contra Incendios',
    description:
      'Especialistas en protección contra incendios, seguridad electrónica y mantenimiento preventivo.',
    siteName: 'JLC Fire'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JLC Fire - Sistemas de Seguridad',
    description:
      'Especialistas en protección contra incendios y seguridad electrónica.'
  },
  icons: {
    icon: '/favicon.ico'
  },
  verification: {
    google: 'googled1d80b9cbc0f620a'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'JLC Fire',
  description:
    'Especialistas en sistemas de seguridad electrónica, detección y extinción de incendios, control de acceso, BMS y mantenimiento.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jlcfire.com',
  telephone: '+54 9 11 3292-6347',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Buenos Aires',
    addressCountry: 'AR'
  },
  sameAs: [
    'https://www.linkedin.com/company/jlc-fire', // Reemplazar con real
    'https://www.instagram.com/jlcfire' // Reemplazar con real
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ContactModalProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </ContactModalProvider>
      </body>
    </html>
  );
}
