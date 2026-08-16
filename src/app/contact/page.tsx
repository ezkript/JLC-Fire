import type { Metadata } from 'next';
import ContactPage from '@/components/contact/ContactPage/ContactPage';

export const metadata: Metadata = {
  title: 'Contacto | JLC Fire - Sistemas de Seguridad',
  description:
    'Ponte en contacto con JLC Fire para cotizaciones, consultas técnicas o mantenimiento de tus sistemas de seguridad e incendios.'
};

export default function ContactPageRoute() {
  return (
    <div className="min-h-[calc(100vh-100px)] bg-black">
      <ContactPage />
    </div>
  );
}
