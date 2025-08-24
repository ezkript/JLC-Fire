import { Wrench, Shield, Clock, ShieldCheck } from 'lucide-react';
import { TrendingUp, CheckCircle, Cpu, Network } from 'lucide-react';
import { Activity, Database } from 'lucide-react';

export const featuresList = [
  {
    title: 'Mantenimiento Preventivo',
    description:
      'Programas de mantenimiento regular que previenen fallas y garantizan el funcionamiento óptimo de todos los sistemas de seguridad.',
    icon: Wrench
  },
  {
    title: 'Reparaciones de Emergencia',
    description:
      'Servicio técnico de emergencia disponible 24/7 para resolver problemas críticos y restaurar la operación rápidamente.',
    icon: Shield
  },
  {
    title: 'Actualizaciones de Software',
    description:
      'Mantenimiento y actualización de software de todos los sistemas para garantizar la última versión y funcionalidades.',
    icon: Clock
  },
  {
    title: 'Calibración de Sensores',
    description:
      'Calibración profesional de sensores de detección, control de acceso y sistemas de monitoreo para máxima precisión.',
    icon: ShieldCheck
  },
  {
    title: 'Inspecciones Regulares',
    description:
      'Inspecciones periódicas completas de todos los sistemas para identificar problemas antes de que causen fallas.',
    icon: TrendingUp
  },
  {
    title: 'Reportes Detallados',
    description:
      'Documentación completa de todas las actividades de mantenimiento con recomendaciones y planificación futura.',
    icon: CheckCircle
  }
];

export const technicalInfo = [
  {
    title: 'Servicio de Mantenimiento Integral',
    content:
      'Ofrecemos mantenimiento completo para todos los sistemas de seguridad y protección contra incendios. Incluye inspecciones regulares, limpieza, calibración y actualizaciones de software.',
    icon: Cpu
  },
  {
    title: 'Programas Personalizados',
    content:
      'Desarrollamos programas de mantenimiento adaptados a sus necesidades específicas, considerando el tipo de instalación, uso intensivo y requisitos de normativas de seguridad.',
    icon: Network
  },
  {
    title: 'Soporte Técnico Especializado',
    content:
      'Equipo de técnicos certificados con experiencia en todos los sistemas que instalamos. Disponibilidad 24/7 para emergencias y soporte técnico continuo.',
    icon: Activity
  },
  {
    title: 'Gestión de Garantías',
    content:
      'Administramos todas las garantías de equipos y sistemas, coordinando con fabricantes para reparaciones y reemplazos cuando sea necesario.',
    icon: Database
  }
];
