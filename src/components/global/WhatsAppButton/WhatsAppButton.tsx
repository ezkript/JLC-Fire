'use client';

import { WhatsAppButtonProps as Props } from './WhatsAppButton.types';
import WhatsAppIcon from './WhatsAppIcon';
import { CONTACT_DATA } from '@/lib/constants';

export default function WhatsAppButton(props: Props) {
  const whatsappUrl = CONTACT_DATA.whatsapp;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
      <div className="hidden md:block absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        ¡Chatea con nosotros!
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-black border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </div>
    </a>
  );
}
