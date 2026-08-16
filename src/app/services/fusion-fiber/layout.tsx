import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fusión de Fibra Óptica | JLC Fire',
  description:
    'Servicios de fusión, tendido y certificación de fibra óptica para garantizar comunicaciones rápidas, seguras y sin interrupciones.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
