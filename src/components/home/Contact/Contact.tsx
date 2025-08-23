import { ContactProps as Props } from './Contact.types';
import ContactHeader from './ContactHeader/ContactHeader';
import ContactInfoCards from './ContactInfoCards/ContactInfoCards';
import ContactForm from './ContactForm/ContactForm';
import ContactFallback from './ContactFallback/ContactFallback';

export default function Contact(prop: Props) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return <ContactFallback />;
  }

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      <div className="container-custom relative z-10">
        <ContactHeader />
        <div className="max-w-4xl mx-auto">
          <ContactForm />
          <ContactInfoCards />
        </div>
      </div>
    </section>
  );
}
