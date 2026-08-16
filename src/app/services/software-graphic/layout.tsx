import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Gráfico | JLC Fire',
  description:
    'Implementación de software gráfico y plataformas visuales para monitoreo interactivo e integración de todos sus sistemas de seguridad.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
