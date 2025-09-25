import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../../components/layout/PageLayout';
import HeroSection from './components/HeroSection';
import ModuleShowcase from './components/ModuleShowcase';
import SocialProofSection from './components/SocialProofSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import RecognitionsSection from './components/RecognitionsSection';
import PricingPreview from './components/PricingPreview';
import ContactFormSection from './components/ContactFormSection';
import CTASection from './components/CTASection';
import { fadeInUpStagger } from '../../utils/animations';
import { commonStructuredData } from '../../utils/seo';

const Homepage = () => {
  const seoConfig = {
    title: 'SolHub',
    description: 'Transforma tu laboratorio médico con SolHub by Solware. Módulos inteligentes con IA, seguridad por sede, gestión completa y reportes avanzados. Diseñado por profesionales médicos venezolanos.',
    keywords: 'SolHub, Solware, laboratorio médico Venezuela, software médico, IA diagnóstica, gestión laboratorio, reportes médicos, seguridad médica, SaaS médico',
    url: '/',
    structuredData: {
      ...commonStructuredData,
      "@type": "SoftwareApplication",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "priceRange": "$$",
        "availability": "https://schema.org/InStock"
      }
    }
  };

  const sections = [
    { Component: HeroSection, delay: 0.2 },
    { Component: ModuleShowcase, delay: 0.1 },
    { Component: SocialProofSection, delay: 0.2 },
    { Component: TestimonialCarousel, delay: 0.1 },
    { Component: RecognitionsSection, delay: 0.2 },
    { Component: PricingPreview, delay: 0.1 },
    { Component: ContactFormSection, delay: 0.2 },
    { Component: CTASection, delay: 0.1 }
  ];

  return (
    <PageLayout seoConfig={seoConfig}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <HeroSection />
      </motion.div>
      {/* Content Sections with Staggered Animations */}
      <div className="space-y-16 sm:space-y-20 lg:space-y-24">
        {sections?.slice(1)?.map(({ Component, delay }, index) => {
          const ComponentToRender = Component;
          return (
            <motion.div
              key={index}
              {...fadeInUpStagger}
              transition={{ ...fadeInUpStagger?.transition, delay }}
            >
              <ComponentToRender />
            </motion.div>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default Homepage;