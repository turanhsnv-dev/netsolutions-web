import dynamic from 'next/dynamic';
import { HeroSection } from '@/features/home/components/hero-section';
import { FeaturesSection } from '@/features/home/components/features-section';
import { ServicesSection } from '@/features/services/components/services-section';

const AboutSection = dynamic(
  () => import('@/features/about/components/about-section').then((mod) => mod.AboutSection)
);

const ContactSection = dynamic(
  () => import('@/features/contact/components/contact-section').then((mod) => mod.ContactSection)
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
