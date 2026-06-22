import dynamic from 'next/dynamic';
import { HeroSection } from '@/features/home/components/hero-section';
import { FeaturesSection } from '@/features/home/components/features-section';

const AboutSection = dynamic(
  () => import('@/features/about/components/about-section').then((mod) => mod.AboutSection)
);

const ServicesSection = dynamic(
  () => import('@/features/services/components/services-section').then((mod) => mod.ServicesSection)
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
