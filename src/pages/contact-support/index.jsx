import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/layout/Footer';
import ContactHero from './components/ContactHero';
import ContactChannels from './components/ContactChannels';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import ReferralProgram from './components/ReferralProgram';
import useActions from '../../hooks/useActions';

const ContactSupport = () => {
  const { handleWhatsAppClick } = useActions();

  const handleEmailClick = () => {
    window.open('mailto:soporte@solhub.com.ve?subject=Consulta sobre SolHub', '_self');
  };

  const handlePhoneClick = () => {
    window.open('tel:+582125550123', '_self');
  };

  const handleDemoClick = () => {
    // Navigate to demo page or open demo modal
    window.location.href = '/demo-experience';
  };

  return (
    <div className="bg-background">
      <Helmet>
        <title>Contacto y Soporte | SolHub - Soporte 24/7 para Laboratorios Venezolanos</title>
        <meta 
          name="description" 
          content="Contacta con SolHub a través de WhatsApp, teléfono o email. Soporte técnico 24/7, oficinas en Caracas, Maracaibo y Valencia. Programa de referidos con 20% descuento." 
        />
        <meta name="keywords" content="contacto SolHub, soporte técnico laboratorio, WhatsApp médico Venezuela, oficinas laboratorio médico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contacto y Soporte | SolHub" />
        <meta property="og:description" content="Múltiples canales de contacto y soporte 24/7 para laboratorios médicos venezolanos" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://SolHubmedical.com.ve/contact-support" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto y Soporte | SolHub" />
        <meta name="twitter:description" content="Soporte técnico especializado para laboratorios médicos venezolanos" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contacto y Soporte - SolHub",
            "description": "Página de contacto y soporte técnico para laboratorios médicos venezolanos",
            "url": "https://SolHubmedical.com.ve/contact-support",
            "mainEntity": {
              "@type": "Organization",
              "name": "SolHub",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+58-424-123-4567",
                  "contactType": "customer service",
                  "availableLanguage": "Spanish",
                  "areaServed": "VE"
                },
                {
                  "@type": "ContactPoint",
                  "email": "soporte@SolHubmedical.com.ve",
                  "contactType": "technical support",
                  "availableLanguage": "Spanish"
                }
              ],
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Av. Francisco de Miranda, Torre Empresarial, Piso 12",
                  "addressLocality": "Chacao",
                  "addressRegion": "Distrito Capital",
                  "addressCountry": "VE"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <Header />
      
      <main className="pt-16 lg:pt-20">
        <ContactHero 
          onWhatsAppClick={handleWhatsAppClick}
          onDemoClick={handleDemoClick}
        />
        
        <ContactChannels 
          onWhatsAppClick={handleWhatsAppClick}
          onEmailClick={handleEmailClick}
          onPhoneClick={handlePhoneClick}
        />
        
        <ContactForm />
        
        <FAQ />
        
        <ReferralProgram />
        
      </main>

      <Footer />
    </div>
  );
};

export default ContactSupport;