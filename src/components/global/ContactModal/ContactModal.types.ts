export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber?: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export type SubmitStatus = 'idle' | 'success' | 'error';
