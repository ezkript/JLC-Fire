'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '@/lib/services-data';
import Link from 'next/link';

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ServicesDropdown({
  isOpen,
  onClose
}: ServicesDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg border border-neutral-200 rounded-xl overflow-hidden z-50 min-w-[200px]"
          style={{
            marginTop: '-8px',
            paddingTop: '8px'
          }}
        >
          {/* Arrow */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-neutral-200 rotate-45"></div>

          <div className="py-2">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <Link
                  href={service.href}
                  onClick={onClose}
                  className="block px-4 py-3 text-sm text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 transition-colors duration-200"
                >
                  {service.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
