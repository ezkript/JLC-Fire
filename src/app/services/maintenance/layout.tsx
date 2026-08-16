import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mantenimiento Preventivo y Correctivo | JLC Fire',
  description:
    'Mantenimiento especializado de sistemas contra incendios y seguridad electrónica para asegurar operatividad continua y cumplimiento normativo.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
