import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import useActions from '../../../hooks/useActions';

const SecurityHero = ({ onDemoClick, onWhatsAppClick }) => {
  const { handleWhatsAppClick } = useActions();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-success/10 rounded-full blur-3xl animate-pulse-medical"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse-medical delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-medical opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-medical relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Security Badge */}

          {/* Main Heading */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-foreground block">Fortaleza de</span>
              <span className="text-gradient-medical block">Seguridad Médica</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              Protección de datos médicos con estándares internacionales y cumplimiento de regulaciones venezolanas. 
              <span className="text-success font-semibold">Seguridad por sede</span> garantizada.
            </p>
          </div>

          {/* Security Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-success/20 rounded-lg mx-auto mb-4">
                <Icon name="Lock" size={24} color="var(--color-success)" />
              </div>
              <div className="text-2xl font-bold text-success mb-1">256-bit</div>
              <div className="text-sm text-muted-foreground">Encriptación AES</div>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mx-auto mb-4">
                <Icon name="Database" size={24} color="var(--color-primary)" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">5</div>
              <div className="text-sm text-muted-foreground">Sedes Aisladas</div>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mx-auto mb-4">
                <Icon name="Clock" size={24} color="#3b82f6" />
              </div>
              <div className="text-2xl font-bold text-blue-500 mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoreo</div>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-pink-500/20 rounded-lg mx-auto mb-4">
                <Icon name="Users" size={24} color="#ec4899" />
              </div>
              <div className="text-2xl font-bold text-pink-500 mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Disponibilidad</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link to="/demo-experience">
              <Button
                variant="default"
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="bg-gradient-medical hover:opacity-90 shadow-medical-glow min-w-48"
              >
                Ver Demo de Seguridad
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={handleWhatsAppClick}
              iconName="MessageCircle"
              iconPosition="left"
              className="border-success text-success hover:bg-success/10 min-w-48"
            >
              Consultar por WhatsApp
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 opacity-70">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} color="var(--color-success)" />
              <span className="text-sm text-muted-foreground">ISO 27001</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Lock" size={20} color="var(--color-success)" />
              <span className="text-sm text-muted-foreground">HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Globe" size={20} color="var(--color-success)" />
              <span className="text-sm text-muted-foreground">GDPR Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={20} color="var(--color-success)" />
              <span className="text-sm text-muted-foreground">SOC 2 Type II</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityHero;