import dynamic from 'next/dynamic';
import { HeroSection } from '@/features/home/components/hero-section';
import { FeaturesSection } from '@/features/home/components/features-section';
import { SecurityTreeSection } from '@/features/security-tree/components/security-tree-section';
import { ServicesSection } from '@/features/services/components/services-section';
import { PartnersSection } from '@/features/partners/components/partners-section';

const AboutSection = dynamic(
  () => import('@/features/about/components/about-section').then((mod) => mod.AboutSection)
);

const ContactSection = dynamic(
  () => import('@/features/contact/components/contact-section').then((mod) => mod.ContactSection)
);

const TestimonialsSection = dynamic(
  () => import('@/features/testimonials/components/testimonials-section').then((mod) => mod.TestimonialsSection)
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PartnersSection />
      <FeaturesSection />
      <SecurityTreeSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}