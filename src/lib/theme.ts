// Configuración de tema JLC Fire - Rojo, Blanco y Grises Oscuros

export const themeConfig = {
  // Paleta principal de la marca JLC Fire
  brand: {
    primary: 'primary', // Rojo para títulos y decoraciones
    secondary: 'secondary', // Grises para texto y bordes
    accent: 'accent', // Rojo para efectos hover
    neutral: 'neutral', // Blancos y grises claros
    dark: 'dark' // Grises oscuros para texto
  },

  // Colores semánticos
  semantic: {
    success: 'success',
    warning: 'warning',
    error: 'error'
  },

  // Configuración de componentes
  components: {
    // Header
    header: {
      background: 'bg-white',
      text: 'text-dark-900',
      border: 'border-neutral-200'
    },

    // Navegación
    navigation: {
      link: 'text-dark-700 hover:text-primary-600',
      activeLink: 'text-primary-600',
      mobileMenu: 'bg-white border-neutral-200'
    },

    // Botones
    buttons: {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      outline: 'btn-outline',
      ghost: 'btn-ghost'
    },

    // Tarjetas
    cards: {
      default: 'card',
      hover: 'card-hover'
    },

    // Hero section
    hero: {
      background: 'bg-gradient-to-br from-primary-50 to-neutral-50',
      text: 'text-dark-900',
      accent: 'text-primary-600'
    },

    // Servicios
    services: {
      background: 'bg-white',
      card: 'card-hover',
      icon: 'text-primary-600'
    },

    // Footer
    footer: {
      background: 'bg-dark-900',
      text: 'text-neutral-300',
      link: 'text-neutral-400 hover:text-white'
    }
  },

  // Espaciado y layout
  spacing: {
    section: 'section',
    sectionSmall: 'section-sm',
    sectionLarge: 'section-lg',
    container: 'container-custom',
    containerNarrow: 'container-narrow',
    containerWide: 'container-wide'
  },

  // Tipografía
  typography: {
    heading: 'font-heading',
    body: 'font-sans'
  }
};

// Función helper para obtener colores del tema
export const getThemeColor = (colorName: string, shade: string = '500') => {
  const colorMap: Record<string, string> = {
    primary: `primary-${shade}`,
    secondary: `secondary-${shade}`,
    accent: `accent-${shade}`,
    neutral: `neutral-${shade}`,
    dark: `dark-${shade}`,
    success: `success-${shade}`,
    warning: `warning-${shade}`,
    error: `error-${shade}`
  };

  return colorMap[colorName] || `neutral-${shade}`;
};

// Función helper para obtener clases de componentes
export const getComponentClass = (
  component: string,
  variant: string = 'default'
) => {
  const componentConfig =
    themeConfig.components[component as keyof typeof themeConfig.components];

  if (
    typeof componentConfig === 'object' &&
    componentConfig[variant as keyof typeof componentConfig]
  ) {
    return componentConfig[variant as keyof typeof componentConfig];
  }

  return componentConfig || '';
};
