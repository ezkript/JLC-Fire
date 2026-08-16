import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cañerías contra Incendios | JLC Fire',
  description:
    'Ingeniería, ranurado mecánico, soldadura y montaje de redes de cañerías, rociadores y salas de bombas.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
