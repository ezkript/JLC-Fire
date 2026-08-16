import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sistemas BMS e Integración | JLC Fire',
  description:
    'Soluciones BMS (Building Management System) para la gestión inteligente, eficiente y centralizada de la infraestructura de su edificio.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
