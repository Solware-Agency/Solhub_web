import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SecurityHero = ({ onDemoClick, onWhatsAppClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-success/10 rounded-full blur-3xl animate-pulse-medical"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse-medical delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-medical opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-medical relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Security Badge */}
          <div className="inline-flex items-center space-x-3 bg-success/10 border border-success/20 rounded-full px-6 py-3">
            <div className="relative">
              <Icon name="Shield" size={24} color="var(--color-success)" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse"></div>
            </div>
            <span className="text-success font-semibold text-sm">
              Certificado ISO 27001 • Cumplimiento HIPAA
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Fortaleza de
              <span className="text-gradient-medical block">
                Seguridad Médica
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Protección de datos médicos con estándares internacionales y cumplimiento de regulaciones venezolanas. 
              <span className="text-success font-semibold">Seguridad por sede</span> garantizada.
            </p>
          </div>

          {/* Security Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:bg-card/70 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-lg mx-auto mb-3">
                <Icon name="Lock" size={24} color="var(--color-success)" />
              </div>
              <div className="text-2xl font-bold text-success">256-bit</div>
              <div className="text-sm text-muted-foreground">Encriptación AES</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:bg-card/70 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3">
                <Icon name="Database" size={24} color="var(--color-primary)" />
              </div>
              <div className="text-2xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Sedes Aisladas</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:bg-card/70 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mx-auto mb-3">
                <Icon name="Clock" size={24} color="var(--color-secondary)" />
              </div>
              <div className="text-2xl font-bold text-secondary">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoreo</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:bg-card/70 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-3">
                <Icon name="Users" size={24} color="var(--color-accent)" />
              </div>
              <div className="text-2xl font-bold text-accent">99.9%</div>
              <div className="text-sm text-muted-foreground">Disponibilidad</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              variant="default"
              size="lg"
              onClick={onDemoClick}
              iconName="Play"
              iconPosition="left"
              className="bg-gradient-medical hover:opacity-90 shadow-medical-glow min-w-48"
            >
              Ver Demo de Seguridad
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onWhatsAppClick}
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