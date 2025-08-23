import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_DATA } from '@/lib/constants';

export const contactCards = [
  {
    icon: Mail,
    title: 'Email',
    value: CONTACT_DATA.email,
  },
  {
    icon: Phone,
    title: 'Teléfono',
    value: CONTACT_DATA.phoneNumber,
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    value: CONTACT_DATA.address,
  },
];
