import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const handleDemoClick = () => {
    console.log('Demo solicitado');
  };

  const handleWhatsAppClick = () => {
    const message = "Hola! Me interesa conocer más sobre SolHub y cómo puede ayudar a transformar mi laboratorio médico. ¿Podrían proporcionarme más información?";
    window.open(`https://wa.me/584129974533?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-visible bg-background px-3 sm:px-6 lg:px-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-medical opacity-10 pointer-events-none"></div>
      
      {/* Animated Background Elements - Better positioning */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-medical"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse-medical" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-20 h-20 sm:w-24 sm:h-24 bg-accent/20 rounded-full blur-2xl animate-pulse-medical" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-medical relative z-10 w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 xl:py-20">
        <div className="text-center max-w-4xl mx-auto px-2 sm:px-4">

          {/* Main Headline - Improved responsive typography */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
            <span className="text-gradient-medical block">IA que potencia</span>
            <span className="text-foreground block">el diagnóstico médico</span>
            <span className="text-muted-foreground text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl block mt-1 sm:mt-2">en Venezuela</span>
          </h1>

          {/* Supporting Tagline - Better responsive text */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in px-2" style={{ animationDelay: '0.2s' }}>
            Transforma tu laboratorio con módulos inteligentes, seguridad por sede y onboarding guiado. 
            La evolución digital que los profesionales médicos venezolanos estaban esperando.
          </p>

          {/* Key Benefits - Better responsive grid */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-10 sm:mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-2 bg-card/30 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 border border-primary/10">
              <Icon name="Brain" size={16} className="text-primary flex-shrink-0 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap">IA Integrada</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/30 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 border border-secondary/10">
              <Icon name="Shield" size={16} className="text-secondary flex-shrink-0 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Seguridad Médica</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/30 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 border border-accent/10">
              <Icon name="Zap" size={16} className="text-accent flex-shrink-0 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Implementación Rápida</span>
            </div>
          </div>

          {/* CTA Buttons - Better responsive layout */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in px-2 sm:px-4" style={{ animationDelay: '0.6s' }}>
            <Link to="/contact-support" className="w-full sm:w-auto">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-gradient-medical hover:opacity-90 shadow-medical-glow text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 w-full min-h-[44px] sm:min-h-[48px]"
              >
                Contáctanos
              </Button>
            </Link>
            <Link to="/modules-showcase" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                iconName="Grid3X3"
                iconPosition="left"
                className="border-primary/30 text-primary hover:bg-primary/10 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 w-full min-h-[44px] sm:min-h-[48px]"
              >
                Explorar Módulos
              </Button>
            </Link>
          </div>

          {/* Trust Indicators - Better responsive layout */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-muted-foreground animate-fade-in px-2" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={14} className="text-success flex-shrink-0 sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">Certificado ISO 27001</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={14} className="text-secondary flex-shrink-0 sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">+50 profesionales activos</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={14} className="text-accent flex-shrink-0 sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">Soporte 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button - Mobile - Better positioning */}
      <div className="fixed bottom-4 right-4 z-50 lg:hidden">
        <Button
          variant="default"
          size="icon"
          onClick={handleWhatsAppClick}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-success hover:bg-success/90 shadow-lg shadow-success/25"
        >
          <Icon name="MessageCircle" size={20} />
        </Button>
      </div>

      {/* Scroll Indicator - Better positioning */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <Icon name="ChevronDown" size={20} className="text-muted-foreground sm:w-6 sm:h-6" />
      </div>
    </section>
  );
};

export default HeroSection;