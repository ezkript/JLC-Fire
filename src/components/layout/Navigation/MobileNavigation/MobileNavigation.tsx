'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileNavigationProps as Props } from './MobileNavigation.types';
import {
  getMobileMenuClasses,
  getMobileMenuContentClasses,
} from './MobileNavigation.helper';
import NavLink from '../NavLink/NavLink';
import Button from '@/components/global/Button/Button';
import { useContactModal } from '@/components/global/ContactModal/ContactModalProvider';

export default function MobileNavigation(props: Props) {
  const { openModal } = useContactModal();

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
            ease: [0.25, 0.46, 0.45, 0.94],
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
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {props.navigationItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + index * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <NavLink
                  item={item}
                  isActive={props.currentPath === item.href}
                  onClick={props.onClose}
                  variant="mobile"
                />
              </motion.div>
            ))}
            <motion.div
              className="pt-2"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{
                duration: 0.4,
                delay: 0.25,
                ease: [0.25, 0.46, 0.45, 0.94],
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
