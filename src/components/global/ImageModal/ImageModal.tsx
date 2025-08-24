'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { ImageModalProps as Props } from './ImageModal.types';

export default function ImageModal(props: Props) {
  const { isOpen, onClose, imageSrc, imageAlt, title } = props;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 max-w-6xl max-h-[95vh] mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-20 p-2 text-white hover:text-gray-300 transition-colors duration-200"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={900}
            className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
            priority
          />
          {title ? (
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white drop-shadow-lg">
                {title}
              </h3>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
