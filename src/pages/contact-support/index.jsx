import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactChannels from './components/ContactChannels';
import ContactForm from './components/ContactForm';
import OfficeLocations from './components/OfficeLocations';
import FAQ from './components/FAQ';
import ReferralProgram from './components/ReferralProgram';

const ContactSupport = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, me interesa conocer más sobre IBEX Medical. ¿Podrían brindarme información?');
    window.open(`https://wa.me/584241234567?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:soporte@ibexmedical.com.ve?subject=Consulta sobre IBEX Medical', '_self');
  };

  const handlePhoneClick = () => {
    window.open('tel:+582125550123', '_self');
  };

  const handleDemoClick = () => {
    // Navigate to demo page or open demo modal
    window.location.href = '/demo-experience';
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contacto y Soporte | IBEX Medical - Soporte 24/7 para Laboratorios Venezolanos</title>
        <meta 
          name="description" 
          content="Contacta con IBEX Medical a través de WhatsApp, teléfono o email. Soporte técnico 24/7, oficinas en Caracas, Maracaibo y Valencia. Programa de referidos con 20% descuento." 
        />
        <meta name="keywords" content="contacto IBEX Medical, soporte técnico laboratorio, WhatsApp médico Venezuela, oficinas laboratorio médico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contacto y Soporte | IBEX Medical" />
        <meta property="og:description" content="Múltiples canales de contacto y soporte 24/7 para laboratorios médicos venezolanos" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ibexmedical.com.ve/contact-support" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto y Soporte | IBEX Medical" />
        <meta name="twitter:description" content="Soporte técnico especializado para laboratorios médicos venezolanos" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contacto y Soporte - IBEX Medical",
            "description": "Página de contacto y soporte técnico para laboratorios médicos venezolanos",
            "url": "https://ibexmedical.com.ve/contact-support",
            "mainEntity": {
              "@type": "Organization",
              "name": "IBEX Medical",
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
                  "email": "soporte@ibexmedical.com.ve",
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
        
        <OfficeLocations />
        
        <FAQ />
        
        <ReferralProgram />
      </main>

      {/* Footer would go here */}
    </div>
  );
};

export default ContactSupport;