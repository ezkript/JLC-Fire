'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import {
  ContactFormProps,
  FormData as FormDataType,
  SubmitStatus
} from './ContactForm.types';
import { serviceOptions, initialFormData } from './ContactForm.helper';
import { CONTACT_DATA } from '@/lib/constants';

export default function ContactForm(props: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [formData, setFormData] = useState<FormDataType>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, [publicKey]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataForEmail = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataForEmail.append(key, value);
      });

      let result;
      try {
        result = await emailjs.sendForm(
          serviceId!,
          templateId!,
          formDataForEmail as any,
          publicKey
        );
      } catch (sendFormError) {
        const templateParams = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        };

        result = await emailjs.send(
          serviceId!,
          templateId!,
          templateParams,
          publicKey
        );
      }

      setSubmitStatus('success');

      setFormData(initialFormData);
      setErrors({});

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white mb-2"
            >
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 hover:bg-white/10 ${
                errors.name ? 'border-red-400' : 'border-white/10'
              }`}
              placeholder="Tu nombre"
            />
            {errors.name ? (
              <p className="text-red-400 text-xs mt-1">{errors.name}</p>
            ) : null}
          </div>
          <div className="group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 hover:bg-white/10 ${
                errors.email ? 'border-red-400' : 'border-white/10'
              }`}
              placeholder="tu@email.com"
            />
            {errors.email ? (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            ) : null}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group">
            <label
              htmlFor="phone"
              className="block text-xs font-medium text-white mb-2"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 hover:bg-white/10 ${
                errors.phone ? 'border-red-400' : 'border-white/10'
              }`}
              placeholder="+54 11 1234-5678"
            />
            {errors.phone ? (
              <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
            ) : null}
          </div>
          <div className="group">
            <label
              htmlFor="service"
              className="block text-sm font-medium text-white mb-2"
            >
              Servicio de interés
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 hover:bg-white/10 ${
                errors.service ? 'border-red-400' : 'border-white/10'
              }`}
            >
              {serviceOptions.map(option => (
                <option
                  key={option.value}
                  value={option.value}
                  className="text-dark-900"
                >
                  {option.label}
                </option>
              ))}
            </select>
            {errors.service ? (
              <p className="text-red-400 text-xs mt-1">{errors.service}</p>
            ) : null}
          </div>
        </div>
        <div className="group">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white mb-2"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 hover:bg-white/10 resize-none ${
              errors.message ? 'border-red-400' : 'border-white/10'
            }`}
            placeholder="Cuéntanos sobre tu proyecto..."
          />
          {errors.message ? (
            <p className="text-red-400 text-xs mt-1">{errors.message}</p>
          ) : null}
        </div>
        {submitStatus === 'success' ? (
          <div className="flex items-center space-x-3 text-green-400 bg-green-400/10 p-6 rounded-xl border border-green-400/20">
            <CheckCircle className="w-6 h-6" />
            <div>
              <p className="font-bold text-sm">
                ¡Mensaje enviado exitosamente!
              </p>
              <p className="text-xs text-green-300 mt-1">
                Te contactaremos pronto para responder tu consulta.
              </p>
            </div>
          </div>
        ) : null}
        {submitStatus === 'error' ? (
          <div className="flex items-center space-x-3 text-red-400 bg-red-400/10 p-6 rounded-xl border border-red-400/20">
            <AlertCircle className="w-6 h-6" />
            <div>
              <p className="font-bold text-sm">Error al enviar el mensaje</p>
              <p className="text-xs text-red-300 mt-1">
                Por favor, inténtalo de nuevo o contacta directamente a{' '}
                {CONTACT_DATA.email}
              </p>
            </div>
          </div>
        ) : null}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-primary-600 hover:to-primary-700 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <span>Enviar Mensaje</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
