export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  mediaSrc: string;
  mediaAlt: string;
  isVideo?: boolean;
  title?: string;
}
