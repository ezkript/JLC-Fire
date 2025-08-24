import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook
} from 'lucide-react';
import { FooterProps as Props } from './Footer.types';
import { footerInfo } from './Footer.helper';
import Logo from '@/components/global/Logo/Logo';

export default function Footer(props: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <Logo variant="light" />
            </div>
            <p className="text-sm text-neutral-300 mb-6 leading-relaxed max-w-md mx-auto md:mx-0">
              {footerInfo.company.description}
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-sm text-neutral-300">
                  {footerInfo.contact.email}
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-sm text-neutral-300">
                  {footerInfo.contact.phone}
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-sm text-neutral-300">
                  {footerInfo.contact.address}
                </span>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Enlaces Rápidos
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerInfo.pages.slice(0, 6).map(page => (
                <Link
                  key={page.name}
                  href={page.href}
                  className="text-sm text-neutral-300 hover:text-primary-400 transition-colors duration-300 block py-1"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-sm text-neutral-400">
              © {currentYear} {footerInfo.company.name}. Todos los derechos
              reservados.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://linkedin.com/company/jlc-fire"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com/jlcfire"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://facebook.com/jlcfire"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="/terms"
                className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-300"
              >
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
