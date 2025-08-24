export const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'commercial':
      return 'Comercial';
    case 'industrial':
      return 'Industrial';
    case 'residential':
      return 'Residencial';
    case 'healthcare':
      return 'Salud';
    case 'education':
      return 'Educación';
    case 'transportation':
      return 'Transporte';
    default:
      return category;
  }
};

export const getCategoryColor = (category: string) => {
  switch (category) {
    case 'commercial':
      return 'bg-blue-100 text-blue-800';
    case 'industrial':
      return 'bg-orange-100 text-orange-800';
    case 'residential':
      return 'bg-green-100 text-green-800';
    case 'healthcare':
      return 'bg-red-100 text-red-800';
    case 'education':
      return 'bg-purple-100 text-purple-800';
    case 'transportation':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};
