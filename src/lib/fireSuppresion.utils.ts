import { Activity, Cpu, Database, Zap } from 'lucide-react';
import { Shield, ShieldCheck, Network } from 'lucide-react';

export const featuresList = [
  {
    title: 'Agentes limpios para áreas críticas',
    description:
      'Selección y cálculo de concentración del agente (sin residuo) para proteger equipamiento sensible y documentación.',
    icon: Shield
  },
  {
    title: 'Cilindros, toberas y red de descarga',
    description:
      'Dimensionamiento de cilindros, distribución de toberas y cañerías de descarga para cobertura uniforme y segura.',
    icon: Network
  },
  {
    title: 'Detección con zonas cruzadas',
    description:
      'Doble confirmación para activación automática, reduciendo falsas descargas y elevando la confiabilidad del sistema.',
    icon: ShieldCheck
  },
  {
    title: 'Activación manual de extinción',
    description:
      'Pulsadores de extinción con enclavamiento y señalización clara para disparo controlado por el operador.',
    icon: Zap
  }
];

export const technicalInfo = [
  {
    title: 'Ingeniería y montaje hidráulico',
    content:
      'Diseño, suministro e instalación de cañerías, ranuras y soldaduras calificadas, válvulas de control y rociadores.',
    icon: Network
  },
  {
    title: 'Sala de bombas y control',
    content:
      'Instalación y automatización de bombas principales/jockey, tableros, válvulas de alarma y control de presión/flujo.',
    icon: Cpu
  },
  {
    title: 'Pruebas hidráulicas y puesta en marcha',
    content:
      'Ensayos de presión, pruebas de flujo y verificación de cobertura; ajustes finales y habilitación del sistema.',
    icon: Activity
  },
  {
    title: 'Documentación y capacitación',
    content:
      'Planos as-built, manuales de operación y capacitación del personal para operación y mantenimiento seguro.',
    icon: Database
  }
];
