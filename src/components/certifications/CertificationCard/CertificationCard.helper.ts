export const getCategoryLabel = (category: string): string => {
  switch (category) {
    case 'fire-safety':
      return 'Protección contra Incendios';
    case 'security':
      return 'Seguridad';
    case 'bms':
      return 'BMS';
    case 'maintenance':
      return 'Mantenimiento';
    case 'software':
      return 'Software';
    default:
      return category;
  }
};

export const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'fire-safety':
      return 'bg-red-100 text-red-800';
    case 'security':
      return 'bg-blue-100 text-blue-800';
    case 'bms':
      return 'bg-purple-100 text-purple-800';
    case 'maintenance':
      return 'bg-green-100 text-green-800';
    case 'software':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};
