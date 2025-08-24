export const serviceOptions = [
  { value: '', label: 'Selecciona un servicio' },
  { value: 'fire-detection', label: 'Detección de Incendios' },
  { value: 'fire-suppression', label: 'Extinción de Incendios' },
  { value: 'access-control', label: 'Control de Acceso' },
  { value: 'bms', label: 'Building Management System' },
  { value: 'maintenance', label: 'Mantenimiento' },
  { value: 'software-graphic', label: 'Software Gráfico' }
];

export const initialFormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
};
