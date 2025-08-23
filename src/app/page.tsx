import Hero from '@/components/home/Hero/Hero';
import Services from '@/components/home/Services/Services';
import Brands from '@/components/home/Brands/Brands';
import Clients from '@/components/home/Testimonials/Testimonials';
import Certifications from '@/components/home/Certifications/Certifications';
import Contact from '@/components/home/Contact/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Brands />
      <Services />
      <Clients />
      <Certifications />
      <Contact />
    </>
  );
}
