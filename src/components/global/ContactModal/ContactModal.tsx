'use client';

import { useState } from 'react';
import { X, Mail, ArrowLeft } from 'lucide-react';
import { ContactModalProps as Props } from './ContactModal.types';
import ContactFormModal from './ContactFormModal';
import WhatsAppIcon from '../WhatsAppButton/WhatsAppIcon';
import { CONTACT_DATA } from '@/lib/constants';

export default function ContactModal(props: Props) {
  const { isOpen, onClose, phoneNumber = CONTACT_DATA.phoneNumber } = props;
  const [contactMethod, setContactMethod] = useState<
    'whatsapp' | 'email' | null
  >(null);

  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleEmail = () => {
    setContactMethod('email');
  };

  const handleBack = () => {
    setContactMethod(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <h2 className="text-xl font-bold text-dark-900">
            {contactMethod === 'email'
              ? 'Enviar Email'
              : '¿Cómo te contactamos?'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5 text-neutral-600" />
          </button>
        </div>
        <div className="p-6">
          {contactMethod === null ? (
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 mb-6">
                Elige la forma más conveniente para contactarnos
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <WhatsAppIcon />
                <span className="font-semibold">WhatsApp</span>
              </button>
              <button
                onClick={handleEmail}
                className="w-full flex items-center justify-center space-x-3 bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-6 h-6" />
                <span className="font-semibold">Email</span>
              </button>
            </div>
          ) : contactMethod === 'email' ? (
            <div className="space-y-4">
              <button
                onClick={handleBack}
                className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-200 mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Volver</span>
              </button>
              <div className="bg-neutral-50 rounded-xl p-4">
                <ContactFormModal />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
