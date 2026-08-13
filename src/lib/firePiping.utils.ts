import {
  ShieldCheck,
  Layers,
  Wrench,
  Gauge,
  CheckCircle2,
  FileCheck,
  Activity,
  Award
} from 'lucide-react';

export interface GalleryItem {
  id: string;
  type?: 'image' | 'video';
  mediaUrl: string;
  mediaAlt: string;
  thumbnail?: string;
}

export const featuresList = [
  {
    title: 'Uniones Ranuradas tipo Victaulic',
    description:
      'Instalación rápida y flexible mediante acoplamientos ranurados mecánicos que absorben dilataciones y vibraciones según NFPA 13.',
    icon: Layers
  },
  {
    title: 'Soldadura Calificada AWS / ISO',
    description:
      'Soldadores certificados para empalmes herméticos en colectores, roderas principales y derivaciones de alta presión.',
    icon: Wrench
  },
  {
    title: 'Colectores y Manifolds de Distribución',
    description:
      'Fabricación e instalación de colectores de aspiración e impulsión para salas de bombas y colectores de prueba.',
    icon: Gauge
  },
  {
    title: 'Garantía de Estanqueidad y Ensayos',
    description:
      'Pruebas hidrostáticas a 200 PSI mantenidas durante 2 horas consecutivas con certificación de ensayo de presión.',
    icon: ShieldCheck
  }
];

export const technicalInfo = [
  {
    title: 'Ingeniería y Cálculo Hidráulico',
    content:
      'Determinación de diámetros (desde 1" hasta 12"+), pérdida de carga por fricción, velocidad de flujo y presión nominal (SCH 10 / SCH 40) respaldados por software de cálculo hidráulico.',
    icon: Activity
  },
  {
    title: 'Materiales y Normativas NFPA',
    content:
      'Cañerías de acero al carbono (ASTM A53 / A795) sin costura o con costura, galvanizadas o pintadas con antióxido sintético y esmalte de acabado rojo seguridad (RAL 3000).',
    icon: Award
  },
  {
    title: 'Montaje de Redes de Rociadores e Hidrantes',
    content:
      'Tendido aéreo y subterráneo con soporte antisísmico, montantes verticales, válvulas de retención, nichos de incendio con mangueras y bocas de impulsión para bomberos.',
    icon: CheckCircle2
  },
  {
    title: 'Pruebas, Certificación y Conforme a Obra',
    content:
      'Entrega de informe técnico con ensayo de presión hidrostática, certificado de calidad de materiales, radiografiado de soldaduras (si aplica) y planos As-Built.',
    icon: FileCheck
  }
];

export const pipingGallery: GalleryItem[] = [
  {
    id: 'gal-1',
    type: 'video',
    mediaUrl:
      'https://drive.google.com/file/d/1oNkkFUER9wnBfND4qSkhxRHoAyTtmanB/preview',
    mediaAlt: 'Red aérea de cañerías contra incendios en galpón industrial'
  },
  {
    id: 'gal-2',
    mediaUrl:
      'https://drive.google.com/uc?export=view&id=1EUh8ooU6K1u7ebdCtTw2KgG5p5U64a43',
    mediaAlt: 'Detalle de acoplamiento ranurado en tubería contra incendio'
  },
  {
    id: 'gal-3',
    mediaUrl:
      'https://drive.google.com/uc?export=view&id=1-Gc1MrECuyB-jWOAA4fsp-ews0cQRU94',
    mediaAlt: 'Conexiones e instrumentación de sala de bombas contra incendios'
  },
  {
    id: 'gal-4',
    mediaUrl:
      'https://drive.google.com/uc?export=view&id=1eNWIVTDoE4geBFSFkpid6eCRvx9dbTE8',
    mediaAlt: 'Soldador calificado ejecutando junta en tubería de acero'
  },
  {
    id: 'gal-5',
    mediaUrl:
      'https://drive.google.com/uc?export=view&id=1IlBoS1ruThzGVVrvUMFpeZtlgReORSEK',
    mediaAlt: 'Instalación de rociadores automáticos sprinklers'
  },
  {
    id: 'gal-6',
    mediaUrl:
      'https://drive.google.com/uc?export=view&id=1tPdX5jEWxNRPagltiANeFi6YbTivMmcT',
    mediaAlt: 'Boca de impulsión para bomberos tipo siamesa'
  }
];
