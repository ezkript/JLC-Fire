import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sistemas de Aspiración Temprana | JLC Fire',
  description:
    'Instalación de sistemas de detección de humo por aspiración (VESDA) para una respuesta ultra temprana en instalaciones críticas.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
