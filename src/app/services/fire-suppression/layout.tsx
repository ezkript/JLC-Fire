import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Extinción de Incendios | JLC Fire',
  description:
    'Sistemas de extinción automática de incendios mediante agentes limpios, agua, espuma o gases para proteger infraestructuras críticas.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
