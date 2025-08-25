export interface ServiceImages {
  hero: {
    imageUrl: string;
    videoUrl?: string;
  };
  info: {
    imageUrl: string;
    imageAlt: string;
  };
  features: {
    imageUrl: string;
    imageAlt: string;
  };
}

export const servicesImages: Record<string, ServiceImages> = {
  'fire-detection': {
    hero: {
      imageUrl:
        'https://www.tusocal.com/blog/wp-content/uploads/2019/03/deteccion-de-incendios-1038x576.jpg',
      videoUrl: undefined
    },
    info: {
      imageUrl:
        'https://mercortecresa.com/wp-content/uploads/2020/05/Sistemas-deteccion-incendios-e1589274030589.jpg',
      imageAlt: 'Instalación de sistema de detección de incendios'
    },
    features: {
      imageUrl:
        'https://www.firext.es/wp-content/uploads/2024/07/Detector-de-humo-940x675.webp',
      imageAlt: 'Sistema de detección de incendios en instalación'
    }
  },

  'fire-suppression': {
    hero: {
      imageUrl:
        'https://www.maxiseguridad.com.ar/upload1/Sistemas-de-Extincion-de-Incendios-a-Base-de-Gases-Inertes-min.jpg',
      videoUrl: undefined
    },
    info: {
      imageUrl:
        'https://www.protech-pci.com/wp-content/uploads/2019/02/extinci%C3%B3n-gas.png',
      imageAlt: 'Instalación de sistema de extinción de incendios'
    },
    features: {
      imageUrl:
        'https://www.iberext.com/wp-content/uploads/2022/09/difusor-extincion-por-gas-Iberext-1268x552-1.jpg',
      imageAlt: 'Sistema de extinción de incendios en instalación'
    }
  },

  'access-control': {
    hero: {
      imageUrl:
        'https://uss.com.ar/sitio/wp-content/uploads/2018/05/controles-de-acceso.jpg',
      videoUrl: undefined
    },
    info: {
      imageUrl:
        'https://www.novaseguridad.com.co/wp-content/uploads/2021/08/control-de-accesos.jpg.webp',
      imageAlt: 'Instalación de sistema de control de acceso'
    },
    features: {
      imageUrl:
        'https://www.neocheck.es/wp-content/uploads/2020/03/Facial_Recognition1.jpg',
      imageAlt: 'Sistema de control de acceso en instalación'
    }
  },

  'aspiration-systems': {
    hero: {
      imageUrl:
        'https://honeywell.scene7.com/is/image/Honeywell65/hbt-fire-801711-10-faast-lt-eb-1-aspirating-smoke-detector-primaryimage',
      videoUrl: undefined
    },
    info: {
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkQTiXMea2gkmDukm4ZraC8pOdEOJDacVQxQaYped4QLTRY0PW',
      imageAlt: 'Sistema de aspiración VESDA instalado'
    },
    features: {
      imageUrl:
        'https://enion.es/wp-content/uploads/instalacion-y-mantenimiento-de-sistemas-pci-laboratorios-rovi-1.jpg',
      imageAlt: 'Detector de humo por aspiración en funcionamiento'
    }
  },

  bms: {
    hero: {
      imageUrl:
        'https://www.messungbacd.com/blog/wp-content/uploads/2022/10/blog_image.jpg',
      videoUrl: undefined
    },
    info: {
      imageUrl:
        'https://surreyheating-specialists.com/wp-content/uploads/2024/02/Building-Management-System-Installation.jpg',
      imageAlt: 'Panel de control del sistema BMS'
    },
    features: {
      imageUrl:
        'https://surreyheating-specialists.com/wp-content/uploads/2024/02/Building-Management-Systems-Surrey.jpg',
      imageAlt: 'Monitoreo centralizado de sistemas'
    }
  },

  maintenance: {
    hero: {
      imageUrl:
        'https://www.securimport.com/web/image/1049864-021da6b3/dsd.jpg',
      videoUrl: undefined
    },
    info: {
      imageUrl: 'https://www.berini-pci.com/wp-content/uploads/2024/07/10.png',
      imageAlt: 'Técnico realizando mantenimiento preventivo'
    },
    features: {
      imageUrl:
        'https://www.johncage.info/wp-content/uploads/2023/05/steptodown.com772369.jpg',
      imageAlt: 'Checklist de mantenimiento de sistemas'
    }
  },

  'software-graphic': {
    hero: {
      imageUrl:
        'https://honeywell.scene7.com/is/image/Honeywell65/HBT-SEC-PW65-IC-MAPS',
      videoUrl: undefined
    },
    info: {
      imageUrl:
        'https://honeywell.scene7.com/is/image/Honeywell65/hbt-Fire-sw-ow-con-onyxworks-workstation-5year-control-license-primaryimage-2',
      imageAlt: 'Interfaz de software gráfico personalizado'
    },
    features: {
      imageUrl:
        'https://honeywell.scene7.com/is/image/Honeywell65/hbt-fire-nfs2-3030-cpu2-3030nd-primaryimage',
      imageAlt: 'Modelado 3D y visualización de proyectos'
    }
  }
};

export const getServiceImages = (serviceId: string): ServiceImages | null => {
  return servicesImages[serviceId] || null;
};

export const getServiceHeroImage = (serviceId: string): string | null => {
  return servicesImages[serviceId]?.hero.imageUrl || null;
};

export const getServiceInfoImage = (
  serviceId: string
): { imageUrl: string; imageAlt: string } | null => {
  const service = servicesImages[serviceId];
  if (!service) return null;

  return {
    imageUrl: service.info.imageUrl,
    imageAlt: service.info.imageAlt
  };
};

export const getServiceFeaturesImage = (
  serviceId: string
): { imageUrl: string; imageAlt: string } | null => {
  const service = servicesImages[serviceId];
  if (!service) return null;

  return {
    imageUrl: service.features.imageUrl,
    imageAlt: service.features.imageAlt
  };
};
