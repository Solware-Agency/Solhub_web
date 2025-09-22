import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import Footer from '../../components/layout/Footer';
import SecurityHero from './components/SecurityHero';
import AccessControls from './components/AccessControls';
import DataFlowVisualization from './components/DataFlowVisualization';
import SecurityBySite from './components/SecurityBySite';
import ComplianceMatrix from './components/ComplianceMatrix';
import BestPracticesGuide from './components/BestPracticesGuide';
import SecurityTestimonials from './components/SecurityTestimonials';
import Button from '../../components/ui/Button';
import useActions from '../../hooks/useActions';

const SecurityFortress = () => {
  const { handleWhatsAppClick } = useActions();
  const seoConfig = {
    title: 'Seguridad',
    description: 'Descubre cómo SolHub protege los datos médicos con seguridad nivel bancario. Encriptación AES-256, control de acceso por roles, auditoría completa y cumplimiento ISO 27001 en Venezuela.',
    keywords: 'seguridad datos médicos Venezuela, encriptación AES-256, ISO 27001 compliance, control acceso laboratorio, auditoría médica, protección datos clínicos',
    url: '/security-fortress',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Fortaleza de Seguridad - SolHub",
      "description": "Centro de confianza para la protección de datos médicos con seguridad por sede, encriptación avanzada y cumplimiento normativo.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://solhub.solware.agency"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Seguridad",
            "item": "https://solhub.solware.agency/security-fortress"
          }
        ]
      }
    }
  };

  return (
    <PageLayout seoConfig={seoConfig}>
      {/* Hero Section */}
      <SecurityHero />
      
      {/* Access Controls Overview */}
      <AccessControls />

      {/* Data Flow Visualization */}
      <DataFlowVisualization />

      {/* Security by Site */}
      <SecurityBySite />

      {/* Compliance Matrix */}
      <ComplianceMatrix />

      {/* Best Practices Guide */}
      <BestPracticesGuide />

      {/* Security Testimonials */}
      <SecurityTestimonials />

      {/* Contact CTA Section */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container-medical">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Necesitas más información sobre seguridad?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nuestro equipo de expertos en seguridad está disponible para resolver cualquier duda específica sobre la protección de tus datos médicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={handleWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-gradient-medical hover:opacity-90 shadow-medical-glow"
              >
                Contáctanos
              </Button>
              <Link to="/contact-support">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="border-primary/30 text-primary hover:bg-primary/10"
                >
                  Agendar Consulta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
};

export default SecurityFortress;