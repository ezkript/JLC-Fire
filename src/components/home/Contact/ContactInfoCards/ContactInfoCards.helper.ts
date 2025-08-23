import { Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '../Contact.helper';

export const contactCards = [
  {
    icon: Mail,
    title: 'Email',
    value: contactInfo.email,
  },
  {
    icon: Phone,
    title: 'Teléfono',
    value: contactInfo.phone,
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    value: contactInfo.location,
  },
];
