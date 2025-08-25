import { Monitor, Shield, Clock, ShieldCheck } from 'lucide-react';
import { TrendingUp, CheckCircle, Cpu, Network } from 'lucide-react';
import { Activity, Database } from 'lucide-react';

export const featuresList = [
  {
    title: 'Interfaces Intuitivas',
    description:
      'Interfaces gráficas intuitivas que facilitan la visualización y gestión de eventos críticos.',
    icon: Monitor
  },
  {
    title: 'Monitoreo en Tiempo Real',
    description:
      'Visualización en tiempo real de todos los sistemas de seguridad con actualizaciones automáticas y alertas instantáneas.',
    icon: Shield
  },
  {
    title: 'Alertas Configurables',
    description:
      'Sistema de alertas personalizable que notifica eventos importantes según sus criterios y prioridades específicas.',
    icon: Clock
  },
  {
    title: 'Integración Multiplataforma',
    description:
      'Software compatible con Windows, macOS, Linux y dispositivos móviles para acceso desde cualquier lugar.',
    icon: TrendingUp
  }
];

export const technicalInfo = [
  {
    title: 'Implementación y Configuración',
    content:
      'Ofrecemos servicios de implementación, configuración y soporte para software gráfico de gestión de seguridad, permitiendo la integración eficiente de todos sus sistemas y la visualización centralizada de eventos críticos.',
    icon: Cpu
  },
  {
    title: 'Integración con Sistemas Existentes',
    content:
      'Conectamos el software gráfico con todos sus sistemas de seguridad, control de acceso, CCTV y sistemas de incendio para una gestión unificada y centralizada.',
    icon: Network
  },
  {
    title: 'Personalización de Interfaces',
    content:
      'Adaptamos la interfaz del software gráfico para que se integre perfectamente con su sistema de seguridad, control de acceso, CCTV y sistemas de incendio.',
    icon: Activity
  }
];
