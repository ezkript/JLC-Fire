import { Monitor, Shield, Clock, ShieldCheck } from 'lucide-react';
import { TrendingUp, CheckCircle, Cpu, Network } from 'lucide-react';
import { Activity, Database } from 'lucide-react';

export const featuresList = [
  {
    title: 'Interfaces Personalizadas',
    description:
      'Desarrollo de interfaces gráficas a medida que se adaptan perfectamente a sus necesidades específicas y flujos de trabajo.',
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
    title: 'Reportes Automáticos',
    description:
      'Generación automática de reportes detallados con gráficos, estadísticas y análisis para toma de decisiones informada.',
    icon: ShieldCheck
  },
  {
    title: 'Integración Multiplataforma',
    description:
      'Software compatible con Windows, macOS, Linux y dispositivos móviles para acceso desde cualquier lugar.',
    icon: TrendingUp
  },
  {
    title: 'Soporte Técnico Especializado',
    description:
      'Equipo de desarrolladores y técnicos especializados en software de seguridad para soporte continuo y actualizaciones.',
    icon: CheckCircle
  }
];

export const technicalInfo = [
  {
    title: 'Desarrollo de Software Personalizado',
    content:
      'Desarrollamos software gráfico a medida que se integra perfectamente con sus sistemas existentes. Incluye análisis de requisitos, diseño de interfaz, programación y pruebas exhaustivas.',
    icon: Cpu
  },
  {
    title: 'Configuración y Personalización',
    content:
      'Configuramos el software según sus necesidades específicas, incluyendo layouts personalizados, alertas, reportes y integración con otros sistemas de su instalación.',
    icon: Network
  },
  {
    title: 'Integración con Sistemas Existentes',
    content:
      'Conectamos el software gráfico con todos sus sistemas de seguridad, control de acceso, CCTV y sistemas de incendio para una gestión unificada y centralizada.',
    icon: Activity
  },
  {
    title: 'Capacitación y Soporte Continuo',
    content:
      'Entrenamos a su equipo sobre el uso del software, generación de reportes, configuración de alertas y resolución de problemas. Incluimos soporte técnico y actualizaciones.',
    icon: Database
  }
];
