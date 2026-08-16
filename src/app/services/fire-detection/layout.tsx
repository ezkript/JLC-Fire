import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Detección de Incendios | JLC Fire',
  description:
    'Diseño e instalación de sistemas inteligentes de detección de humo y fuego para la máxima protección de personas y bienes.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
