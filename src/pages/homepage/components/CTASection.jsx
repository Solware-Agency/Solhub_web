import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import useActions from '../../../hooks/useActions';

const CTASection = () => {
  const handleDemoClick = () => {
    console.log('Demo solicitado desde CTA');
  };

  const { handleWhatsAppClick } = useActions();

  const benefits = [
    {
      icon: 'Clock',
      title: 'Demo en 15 minutos',
      description: 'Presentación personalizada de los módulos más relevantes para tu laboratorio'
    },
    {
      icon: 'Users',
      title: 'Consultoría gratuita',
      description: 'Análisis de tus procesos actuales y recomendaciones de optimización'
    },
    {
      icon: 'Shield',
      title: 'Evaluación de seguridad',
      description: 'Revisión completa de tus necesidades de protección de datos médicos'
    },
    {
      icon: 'TrendingUp',
      title: 'Proyección de ROI',
      description: 'Cálculo personalizado del retorno de inversión para tu caso específico'
    }
  ];

  const stats = [
    {
      value: '5',
      label: 'Sedes Activas',
      sublabel: 'en Venezuela'
    },
    {
      value: '50+',
      label: 'Profesionales',
      sublabel: 'usando diariamente'
    },
    {
      value: '99.9%',
      label: 'Precisión',
      sublabel: 'en diagnósticos'
    },
    {
      value: '24/7',
      label: 'Soporte',
      sublabel: 'técnico local'
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-medical opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-medical"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-pulse-medical" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse-medical" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>
      <div className="container-medical relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="text-foreground">Transforma tu laboratorio</span>
            <br />
            <span className="text-gradient-medical">en 5 días</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Únete a los laboratorios venezolanos que ya optimizaron sus operaciones con IA, 
            redujeron errores en 80% y aumentaron su eficiencia en 40%.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/contact-support">
              <Button
                variant="default"
                size="xl"
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-gradient-medical hover:opacity-90 shadow-medical-glow text-xl px-12 py-6"
              >
                Contáctanos
              </Button>
            </Link>
            
            <Button
              variant="outline"
              size="xl"
              onClick={handleWhatsAppClick}
              iconName="MessageCircle"
              iconPosition="left"
              className="border-success text-success hover:bg-success/10 text-xl px-12 py-6"
            >
              WhatsApp Directo
            </Button>
          </div>

          {/* Trust Message */}
          <p className="text-muted-foreground">
            <Icon name="Shield" size={16} className="inline mr-2 text-success" />
            Demo sin compromiso • Implementación guiada • Soporte en español
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {benefits?.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border rounded-xl hover:bg-card/50 hover:border-primary/20 transition-all duration-300 hover-lift"
            >
              <div className="w-16 h-16 bg-gradient-medical rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit?.icon} size={24} color="white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{benefit?.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit?.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-card/20 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Números que Hablan por Sí Solos
            </h3>
            <p className="text-lg text-muted-foreground">
              Resultados reales de laboratorios venezolanos usando SolHub
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient-medical mb-2">
                  {stat?.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat?.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat?.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary CTAs */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Explore Modules */}
          <div className="p-8 bg-card/30 border border-border rounded-xl hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Icon name="Grid3X3" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Explorar Módulos</h3>
                <p className="text-muted-foreground">Descubre todas las funcionalidades</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Conoce en detalle cada módulo: Gestión de Muestras, IA Diagnóstica, 
              Seguridad por Sede, Analytics y más.
            </p>
            <Link to="/modules-showcase">
              <Button
                variant="outline"
                iconName="ArrowRight"
                iconPosition="right"
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                Ver Módulos
              </Button>
            </Link>
          </div>

          {/* Success Stories */}
          <div className="p-8 bg-card/30 border border-border rounded-xl hover:border-secondary/30 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                <Icon name="Trophy" size={24} className="text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Casos de Éxito</h3>
                <p className="text-muted-foreground">Historias reales de transformación</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Lee testimonios detallados de directores médicos, administradores 
              y técnicos que ya transformaron sus laboratorios.
            </p>
            <Link to="/client-success-stories">
              <Button
                variant="outline"
                iconName="ArrowRight"
                iconPosition="right"
                className="border-secondary/30 text-secondary hover:bg-secondary/10"
              >
                Leer Casos
              </Button>
            </Link>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center mt-16 p-8 bg-gradient-medical/5 border border-primary/10 rounded-2xl">
          <Icon name="Heart" size={32} className="text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Hecho por y para profesionales médicos venezolanos
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            SolHub nació de la necesidad real de optimizar laboratorios en Venezuela. 
            Entendemos tus desafíos porque los hemos vivido, y por eso creamos la solución 
            que realmente necesitas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;