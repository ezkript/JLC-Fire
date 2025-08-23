export interface ContactFormProps {
  // No props needed for now, but can be extended in the future
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export type SubmitStatus = 'idle' | 'success' | 'error';
