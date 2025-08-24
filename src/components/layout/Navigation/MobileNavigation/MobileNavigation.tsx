'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileNavigationProps as Props } from './MobileNavigation.types';
import {
  getMobileMenuClasses,
  getMobileMenuContentClasses
} from './MobileNavigation.helper';
import NavLink from '../NavLink/NavLink';
import Button from '@/components/global/Button/Button';
import { useContactModal } from '@/components/global/ContactModal/ContactModalProvider';
import { servicesData } from '@/lib/services-data';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { isLinkActive } from '../Navigation.helper';

export default function MobileNavigation(props: Props) {
  const { openModal } = useContactModal();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <AnimatePresence>
      {props.isOpen && (
        <motion.div
          className={getMobileMenuClasses()}
          initial={{ opacity: 0, height: 0, scaleY: 0 }}
          animate={{ opacity: 1, height: 'auto', scaleY: 1 }}
          exit={{ opacity: 0, height: 0, scaleY: 0 }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={{ transformOrigin: 'top' }}
        >
          <motion.div
            className={getMobileMenuContentClasses()}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {props.navigationItems.map((item, index) => {
              if (item.label === 'Servicios') {
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -30, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -30, scale: 0.95 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + index * 0.08,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <div className="space-y-2">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="w-full flex items-center justify-between p-4 text-left text-dark-900 hover:text-primary-600 transition-colors duration-300"
                      >
                        <span className="font-medium">{item.label}</span>
                        {isServicesOpen ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-1">
                              {servicesData.map((service, serviceIndex) => (
                                <motion.div
                                  key={service.id}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.2,
                                    delay: serviceIndex * 0.03
                                  }}
                                >
                                  <Link
                                    href={service.href}
                                    onClick={props.onClose}
                                    className="block p-2 text-sm text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                                  >
                                    {service.title}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, scale: 0.95 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + index * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <NavLink
                    item={item}
                    isActive={isLinkActive(item.href, props.currentPath)}
                    onClick={props.onClose}
                    variant="mobile"
                  />
                </motion.div>
              );
            })}
            <motion.div
              className="pt-2"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{
                duration: 0.4,
                delay: 0.25,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <Button
                onClick={() => {
                  openModal();
                  props.onClose();
                }}
                variant="primary"
                size="lg"
                fullWidth
              >
                Contactar
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
