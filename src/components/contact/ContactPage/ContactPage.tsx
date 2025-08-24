'use client';

import React from 'react';
import { AnimatedSection } from '@/components/global/AnimatedSection/AnimatedSection';
import ContactHeader from '@/components/home/Contact/ContactHeader/ContactHeader';
import ContactForm from '@/components/home/Contact/ContactForm/ContactForm';
import ContactInfoCards from '@/components/home/Contact/ContactInfoCards/ContactInfoCards';
import ContactFallback from '@/components/home/Contact/ContactFallback/ContactFallback';

export default function ContactPage() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return <ContactFallback />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <section className="py-12 bg-black relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection direction="up" delay={0.2}>
            <ContactHeader 
              title="Ponte en contacto con nosotros"
              subtitle="Envíanos tu consulta, proyecto o solicitud de presupuesto."
            />
          </AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up" delay={0.3}>
              <ContactForm />
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.4}>
              <ContactInfoCards />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
