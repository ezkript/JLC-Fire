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
  title: 'JLC Fire - Sistemas de Seguridad',
  description:
    'Especialistas en sistemas de seguridad electrónica, detección y extinción de incendios, control de acceso, BMS y mantenimiento.',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
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
