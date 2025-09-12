import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/layout/Footer';
import ContactHero from './components/ContactHero';
import ContactChannels from './components/ContactChannels';
import ContactForm from './components/ContactForm';
import OfficeLocations from './components/OfficeLocations';
import FAQ from './components/FAQ';
import ReferralProgram from './components/ReferralProgram';
import EmailJSTest from '../../components/EmailJSTest';
import EmailJSDebug from '../../components/EmailJSDebug';

const ContactSupport = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola! Me interesa conocer más sobre SolHub y cómo puede ayudar a transformar mi laboratorio médico. ¿Podrían proporcionarme más información?');
    window.open(`https://wa.me/584129974533?text=${message}`, '_blank');
  };

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
    <div className="min-h-screen bg-background">
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
        
        <OfficeLocations />
        
        <FAQ />
        
        <ReferralProgram />
        
        {/* EmailJS Debug and Test Components - Remove after testing */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 space-y-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              🧪 Debug y Prueba de EmailJS
            </h2>
            <EmailJSDebug />
            <EmailJSTest />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactSupport;