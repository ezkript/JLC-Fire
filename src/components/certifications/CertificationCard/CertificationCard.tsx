'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, Award } from 'lucide-react';
import { AnimatedSection } from '@/components/global/AnimatedSection/AnimatedSection';
import ImageModal from '@/components/global/ImageModal/ImageModal';
import { getCategoryLabel, getCategoryColor } from './CertificationCard.helper';
import { CertificationCardProps as Props } from './CertificationCard.types';

export default function CertificationCard(props: Props) {
  const { certification, delay = 0 } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <AnimatedSection direction="up" delay={delay}>
        <div
          className="bg-white rounded-2xl border-2 border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer"
          onClick={handleCardClick}
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={certification.image || ''}
              alt={certification.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(certification.category)}`}
              >
                {getCategoryLabel(certification.category)}
              </span>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-dark-900 mb-2 group-hover:text-primary-700 transition-colors duration-300 line-clamp-2">
              {certification.title}
            </h3>
            <p className="text-sm text-dark-600 mb-4 line-clamp-3">
              {certification.description}
            </p>
            <div className="mb-4">
              <p className="text-xs text-dark-500 mb-1">Emisor</p>
              <p className="text-sm font-medium text-dark-700">
                {certification.issuer}
              </p>
            </div>
            <div className="mb-4">
              <div className="flex items-center text-xs text-dark-500">
                <Calendar className="w-3 h-3 mr-2 flex-shrink-0" />
                <span>
                  Emitida:{' '}
                  {new Date(certification.issueDate).toLocaleDateString(
                    'es-ES'
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageSrc={certification.image || ''}
        imageAlt={certification.title}
        title={certification.title}
      />
    </>
  );
}
