import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Control de Acceso | JLC Fire',
  description:
    'Sistemas avanzados de control de acceso y biometría para gestionar y asegurar el flujo de personas en tu empresa.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
