import { Fan, Shield, Clock, ShieldCheck } from 'lucide-react';
import { TrendingUp, CheckCircle, Cpu, Network } from 'lucide-react';
import { Activity, Database } from 'lucide-react';

export const featuresList = [
  {
    title: 'Detección Ultra Temprana',
    description:
      'Sistemas que detectan partículas de humo microscópicas antes de que sean visibles, proporcionando alertas extremadamente tempranas.',
    icon: Fan
  },
  {
    title: 'Monitoreo Continuo',
    description:
      'Análisis constante del aire ambiente las 24 horas del día, sin interrupciones, para máxima protección.',
    icon: Shield
  },
  {
    title: 'Sensibilidad Ajustable',
    description:
      'Configuración de sensibilidad personalizada según el entorno y tipo de actividad para optimizar la detección.',
    icon: Clock
  },
  {
    title: 'Ideal para Espacios Críticos',
    description:
      'Perfecto para salas de servidores, centros de datos, archivos y áreas donde no se pueden usar detectores tradicionales.',
    icon: ShieldCheck
  },
  {
    title: 'Bajo Mantenimiento',
    description:
      'Sistemas robustos que requieren mínimo mantenimiento y proporcionan años de servicio confiable.',
    icon: TrendingUp
  },
  {
    title: 'Reducción de Falsas Alarmas',
    description:
      'Tecnología avanzada que distingue entre partículas de humo reales y polvo ambiental.',
    icon: CheckCircle
  }
];

export const technicalInfo = [
  {
    title: 'Instalación Especializada',
    content:
      'Nuestro equipo especializado instala sistemas de aspiración completos, incluyendo tuberías de muestreo, detectores láser y software de análisis. Cada instalación se adapta a las necesidades específicas del espacio.',
    icon: Cpu
  },
  {
    title: 'Configuración de Sensibilidad',
    content:
      'Configuramos la sensibilidad del sistema según el tipo de ambiente: salas de servidores, archivos, laboratorios o áreas industriales. Incluye calibración inicial y ajustes finos.',
    icon: Network
  },
  {
    title: 'Integración con Sistemas Existentes',
    content:
      'Conectamos el sistema de aspiración con otros sistemas de detección y extinción para crear una red de protección integral y coordinada.',
    icon: Activity
  },
  {
    title: 'Capacitación y Mantenimiento',
    content:
      'Entrenamos a su equipo sobre el funcionamiento del sistema, interpretación de alertas y mantenimiento preventivo. Incluimos servicio técnico especializado.',
    icon: Database
  }
];
