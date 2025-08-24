'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import ContactModal from './ContactModal';
import { CONTACT_DATA } from '@/lib/constants';

interface ContactModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(
  undefined
);

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error(
      'useContactModal must be used within a ContactModalProvider'
    );
  }
  return context;
};

interface ContactModalProviderProps {
  children: ReactNode;
}

export default function ContactModalProvider({
  children
}: ContactModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <ContactModal
        isOpen={isOpen}
        onClose={closeModal}
        phoneNumber={CONTACT_DATA.phoneNumber}
      />
    </ContactModalContext.Provider>
  );
}
