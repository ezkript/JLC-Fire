import { Activity, Clock, Cpu, Database } from 'lucide-react';
import { Shield, ShieldCheck, TrendingUp } from 'lucide-react';
import { Droplets, Network, Zap } from 'lucide-react';

export const featuresList = [
  {
    title: 'Rociadores Automáticos',
    description:
      'Rociadores que se activan automáticamente cuando detectan calor, liberando agua para apagar el fuego.',
    icon: Droplets
  },
  {
    title: 'Sistemas de Gas',
    description:
      'Sistemas que liberan gases especiales para apagar incendios sin dañar equipos electrónicos o documentos.',
    icon: Shield
  },
  {
    title: 'Activación Manual y Automática',
    description:
      'El sistema se puede activar automáticamente o manualmente, dando control total al personal de seguridad.',
    icon: Zap
  },
  {
    title: 'Supervisión Constante',
    description:
      'El sistema verifica constantemente que todo esté funcionando correctamente y alerta si hay algún problema.',
    icon: Clock
  },
  {
    title: 'Conectado con Detección',
    description:
      'Se conecta automáticamente con el sistema de detección para activarse inmediatamente cuando se detecta un incendio.',
    icon: ShieldCheck
  },
  {
    title: 'Mantenimiento Preventivo',
    description:
      'El sistema avisa cuando necesita mantenimiento, evitando fallas y garantizando que siempre esté listo.',
    icon: TrendingUp
  }
];

export const technicalInfo = [
  {
    title: 'Instalación Completa',
    content:
      'Realizamos la instalación completa del sistema de extinción de incendios, incluyendo la red de tuberías, válvulas de control, tanques de almacenamiento y el panel de control principal. Todo se instala siguiendo las normativas de seguridad más estrictas.',
    icon: Network
  },
  {
    title: 'Selección de Agentes',
    content:
      'Analizamos su instalación para determinar el agente extintor más adecuado: agua para oficinas, gases limpios para salas de servidores, espumas para almacenes de combustibles. Cada elección se basa en el tipo de riesgo presente.',
    icon: Activity
  },
  {
    title: 'Pruebas y Certificación',
    content:
      'Después de la instalación, realizamos pruebas exhaustivas del sistema para verificar que funcione correctamente. Obtenemos todas las certificaciones necesarias y entregamos documentación que cumple con las normativas locales.',
    icon: Cpu
  },
  {
    title: 'Capacitación del Personal',
    content:
      'Entrenamos a su equipo sobre el funcionamiento del sistema, procedimientos de emergencia y mantenimiento básico. Incluimos simulacros de activación para que todos sepan qué hacer en caso de emergencia.',
    icon: Database
  }
];
