import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/layout/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

import DemoScheduler from './components/DemoScheduler';
import PlatformPreview from './components/PlatformPreview';
import TestimonialSection from './components/TestimonialSection';

const DemoExperience = () => {
  const [currentStep, setCurrentStep] = useState('overview');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [demoScheduled, setDemoScheduled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    { id: 'overview', title: 'Información General', icon: 'Info' },
    { id: 'preview', title: 'Preview de Plataforma', icon: 'Monitor' },
    { id: 'schedule', title: 'Programar Demo', icon: 'Calendar' }
  ];

  const benefits = [
    {
      icon: 'Zap',
      title: 'Demo Personalizado',
      description: 'Adaptamos la demostración a sus necesidades específicas y tipo de laboratorio'
    },
    {
      icon: 'Clock',
      title: '45 Minutos Efectivos',
      description: 'Tiempo optimizado para mostrar las funcionalidades más relevantes para usted'
    },
    {
      icon: 'Users',
      title: 'Equipo Especializado',
      description: 'Consultores médicos y técnicos con experiencia en laboratorios venezolanos'
    },
    {
      icon: 'Shield',
      title: 'Sin Compromiso',
      description: 'Demo educativo sin presión de ventas, enfocado en resolver sus dudas'
    },
    {
      icon: 'Smartphone',
      title: 'Múltiples Formatos',
      description: 'Presencial, virtual o híbrido según su preferencia y disponibilidad'
    },
    {
      icon: 'FileText',
      title: 'Materiales Incluidos',
      description: 'Documentación, casos de uso y propuesta personalizada post-demo'
    }
  ];

  const demoFeatures = [
    {
      title: 'Flujo Completo de Paciente',
      description: 'Desde registro hasta entrega de resultados',
      duration: '15 min'
    },
    {
      title: 'Integración con Equipos',
      description: 'Conexión con analizadores y sistemas existentes',
      duration: '10 min'
    },
    {
      title: 'Reportes e Inteligencia',
      description: 'Análisis de datos y reportes gerenciales',
      duration: '10 min'
    },
    {
      title: 'Seguridad y Cumplimiento',
      description: 'Controles de acceso y auditoría',
      duration: '5 min'
    },
    {
      title: 'Preguntas y Respuestas',
      description: 'Resolución de dudas específicas',
      duration: '5 min'
    }
  ];

  const handleScheduleDemo = async (demoData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setDemoScheduled(true);
    setIsSubmitting(false);
    setCurrentStep('overview');
  };


  const handleWhatsAppContact = () => {
    const message = "Hola! Me interesa conocer más sobre SolHub y cómo puede ayudar a transformar mi laboratorio médico. ¿Podrían proporcionarme más información?";
    window.open(`https://wa.me/584129974533?text=${encodeURIComponent(message)}`, '_blank');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Experiencia de <span className="text-gradient-medical">Demostración</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Descubra cómo SolHub puede transformar su laboratorio con una demostración personalizada y sin compromiso
              </p>
            </div>
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits?.map((benefit, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center mb-4">
                    <Icon name={benefit?.icon} size={24} color="white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit?.description}
                  </p>
                </div>
              ))}
            </div>
            {/* Demo Structure */}
            <div className="bg-muted/20 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                Estructura del Demo
              </h3>
              <div className="space-y-4">
                {demoFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{feature?.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature?.description}</p>
                      </div>
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {feature?.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* CTA Section */}
            <div className="text-center space-y-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => setCurrentStep('preview')}
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-gradient-medical"
              >
                Comenzar Experiencia de Demo
              </Button>
              <p className="text-sm text-muted-foreground">
                O contáctenos directamente por WhatsApp para programación inmediata
              </p>
              <Button
                variant="outline"
                onClick={handleWhatsAppContact}
                iconName="MessageCircle"
                iconPosition="left"
                className="border-success text-success hover:bg-success/10"
              >
                Contactar por WhatsApp
              </Button>
            </div>
          </div>
        );

      case 'preview':
        return <PlatformPreview onScheduleDemo={() => setCurrentStep('schedule')} />;

      case 'schedule':
        return (
          <DemoScheduler
            onScheduleDemo={handleScheduleDemo}
            isSubmitting={isSubmitting}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Experiencia de Demo - SolHub | Demostración Personalizada</title>
        <meta name="description" content="Programe una demostración personalizada de SolHub. Demo interactivo de 45 minutos sin compromiso para laboratorios médicos en Venezuela." />
        <meta name="keywords" content="demo SolHub, demostración laboratorio, software médico Venezuela, prueba gratuita" />
      </Helmet>
      <div className="bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Progress Steps */}
          <div className="bg-muted/20 border-b border-border">
            <div className="container-medical py-4">
              <div className="flex items-center justify-between overflow-x-auto">
                {steps?.map((step, index) => (
                  <div key={step?.id} className="flex items-center">
                    <button
                      onClick={() => setCurrentStep(step?.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                        currentStep === step?.id
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                    >
                      <Icon name={step?.icon} size={16} />
                      <span className="text-sm font-medium">{step?.title}</span>
                    </button>
                    {index < steps?.length - 1 && (
                      <Icon name="ChevronRight" size={16} className="mx-2 text-muted-foreground" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="container-medical py-12">
            <div className="max-w-6xl mx-auto">
              {renderStepContent()}
            </div>
          </div>

          {/* Testimonials Section */}
          {currentStep === 'overview' && (
            <div className="bg-muted/10 py-16">
              <div className="container-medical">
                <TestimonialSection />
              </div>
            </div>
          )}

          {/* Success Messages */}
          {demoScheduled && (
            <div className="fixed bottom-4 right-4 bg-success text-success-foreground p-4 rounded-lg shadow-lg z-50">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={20} />
                <span className="font-medium">¡Demo programado exitosamente!</span>
              </div>
            </div>
          )}


          {/* Footer CTA */}
          <div className="bg-gradient-medical py-16">
            <div className="container-medical text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                ¿Listo para Transformar su Laboratorio?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Únase a los laboratorios médicos que ya están revolucionando sus operaciones con SolHub
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => setCurrentStep('schedule')}
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Programar Demo Ahora
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleWhatsAppContact}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Contacto Inmediato
                </Button>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default DemoExperience;