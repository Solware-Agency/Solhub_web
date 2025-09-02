import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import SecurityHero from './components/SecurityHero';
import AccessControls from './components/AccessControls';
import DataFlowVisualization from './components/DataFlowVisualization';
import SecurityBySite from './components/SecurityBySite';
import ComplianceMatrix from './components/ComplianceMatrix';
import BestPracticesGuide from './components/BestPracticesGuide';
import SecurityTestimonials from './components/SecurityTestimonials';
import CloudSecurityFAQ from './components/CloudSecurityFAQ';

const SecurityFortress = () => {
  const seoConfig = {
    title: 'Fortaleza de Seguridad - Protección de Datos Médicos Nivel Bancario',
    description: 'Descubre cómo SolHub protege los datos médicos con seguridad nivel bancario. Encriptación AES-256, control de acceso por roles, auditoría completa y cumplimiento HIPAA en Venezuela.',
    keywords: 'seguridad datos médicos Venezuela, encriptación AES-256, HIPAA compliance, control acceso laboratorio, auditoría médica, protección datos clínicos',
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
    <PageLayout seoConfig={seoConfig} showFooter={false}>
      {/* Hero Section */}
      <SecurityHero 
        onDemoClick={() => {}}
        onWhatsAppClick={() => {}}
      />
      
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

      {/* Cloud Security FAQ */}
      <CloudSecurityFAQ />

      {/* Custom Footer for Security Page */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container-medical">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-solware rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gradient-solware">SolHub</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Protegiendo la información médica más valiosa de Venezuela con tecnología de vanguardia
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <span>© {new Date()?.getFullYear()} SolHub by Solware</span>
              <span>•</span>
              <span>Certificado ISO 27001</span>
              <span>•</span>
              <span>HIPAA Compliant</span>
              <span>•</span>
              <span>Hecho en Venezuela</span>
            </div>
          </div>
        </div>
      </footer>
    </PageLayout>
  );
};

export default SecurityFortress;