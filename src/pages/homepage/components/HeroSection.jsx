import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import useActions from '../../../hooks/useActions';

const HeroSection = () => {
  const handleDemoClick = () => {
    console.log('Demo solicitado');
  };

  const { handleWhatsAppClick } = useActions();

  return (
    <section className="relative flex items-center justify-center bg-background px-3 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-medical opacity-10 pointer-events-none"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-medical"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse-medical" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-20 h-20 sm:w-24 sm:h-24 bg-accent/20 rounded-full blur-2xl animate-pulse-medical" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-medical relative z-10 w-full max-w-7xl mx-auto">
        {/* Layout de dos columnas: Contenido a la izquierda, Video a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
          
          {/* Columna izquierda: Contenido */}
          <div className="text-center lg:text-left px-2 sm:px-4 order-2 lg:order-1">

            {/* Main Headline - Improved responsive typography */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
              <span className="text-gradient-medical block">IA que potencia</span>
              <span className="text-foreground block">el diagnóstico médico</span>
              <span className="text-muted-foreground text-lg sm:text-xl md:text-2xl lg:text-3xl block mt-1 sm:mt-2">en Venezuela</span>
            </h1>

            {/* Supporting Tagline - Better responsive text */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-10 lg:mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="text-destructive font-semibold">8 de cada 10 laboratorios en Venezuela</span> no cuentan con una base de datos digital. 
              <span className="text-primary font-medium"> SolHub</span> revoluciona el diagnóstico médico con IA integrada, seguridad por sede y onboarding guiado.
            </p>

            {/* CTA Buttons - Better responsive layout */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
              <Link to="/demo-experience" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                  className="border-primary/30 text-primary hover:bg-primary/10 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 w-full min-h-[44px] sm:min-h-[48px]"
                >
                  Ver Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Columna derecha: Video destacado */}
          <div className="order-1 lg:order-2 animate-fade-in flex justify-center lg:justify-end" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card/50 backdrop-blur-sm w-full max-w-[50%] lg:max-w-[55%]">
              <video
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
              >
                <source
                  src="https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/SolHoub/Conspat%20x%20Solware%20(1)%20(1).mp4"
                  type="video/mp4"
                />
                Tu navegador no soporta videos HTML5.
              </video>
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