import Hero from '@/components/home/Hero/Hero';
import Services from '@/components/home/Services/Services';
import Certifications from '@/components/home/Certifications/Certifications';
import Contact from '@/components/home/Contact/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Certifications />
      <Contact />
    </>
  );
}
