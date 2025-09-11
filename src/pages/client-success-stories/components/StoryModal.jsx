import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StoryModal = ({ story, isOpen, onClose }) => {
  if (!isOpen || !story) return null;

  const implementationSteps = [
    {
      phase: "Evaluación Inicial",
      duration: "2-3 días",
      description: "Análisis de flujos actuales y identificación de necesidades específicas",
      icon: "Search"
    },
    {
      phase: "Configuración Personalizada",
      duration: "3-4 días",
      description: "Adaptación de módulos según los requerimientos del laboratorio",
      icon: "Settings"
    },
    {
      phase: "Migración de Datos",
      duration: "2-3 días",
      description: "Transferencia segura de información histórica y configuraciones",
      icon: "Database"
    },
    {
      phase: "Capacitación del Personal",
      duration: "4-5 días",
      description: "Entrenamiento completo en nuevos procesos y herramientas",
      icon: "GraduationCap"
    },
    {
      phase: "Puesta en Marcha",
      duration: "2-3 días",
      description: "Implementación gradual con soporte técnico continuo",
      icon: "Rocket"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
      <div className="bg-card border border-border rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <Image
            src={story?.image}
            alt={story?.facilityName}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="bg-background/80 backdrop-blur-sm hover:bg-background"
            >
              <Icon name="X" size={20} />
            </Button>
          </div>
          <div className="absolute bottom-4 left-6">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${story?.typeColor}`}>
              {story?.type}
            </span>
          </div>
        </div>

        <div className="p-8">
          {/* Title and Basic Info */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {story?.facilityName}
            </h2>
            <div className="flex items-center space-x-6 text-muted-foreground mb-4">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>{story?.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} />
                <span>{story?.staffSize} empleados</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={16} />
                <span>Implementado en {story?.implementationDate}</span>
              </div>
            </div>
            <p className="text-foreground text-lg leading-relaxed">
              {story?.fullDescription}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Resultados Cuantificados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {story?.keyMetrics?.map((metric, index) => (
                <div key={index} className="data-card-medical text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {metric?.value}
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1">
                    {metric?.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metric?.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Process */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Proceso de Implementación
            </h3>
            <div className="space-y-4">
              {implementationSteps?.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Icon name={step?.icon} size={20} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{step?.phase}</h4>
                      <span className="text-sm text-muted-foreground">{step?.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{step?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="mb-8 p-6 bg-gradient-medical-subtle rounded-xl border border-primary/20">
            <div className="flex items-start space-x-4">
              <Image
                src={story?.testimonial?.avatar}
                alt={story?.testimonial?.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <blockquote className="text-lg text-foreground mb-4 italic">
                  "{story?.testimonial?.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">
                    {story?.testimonial?.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {story?.testimonial?.role}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {story?.facilityName}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Challenges and Solutions */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Desafíos y Soluciones
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="AlertTriangle" size={16} className="text-warning" />
                  <span>Desafíos Iniciales</span>
                </h4>
                <ul className="space-y-2">
                  {story?.challenges?.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <Icon name="Minus" size={14} className="mt-1 text-warning" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span>Soluciones Implementadas</span>
                </h4>
                <ul className="space-y-2">
                  {story?.solutions?.map((solution, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={14} className="mt-1 text-success" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center p-6 bg-muted/30 rounded-xl">
            <h3 className="text-xl font-bold text-foreground mb-3">
              ¿Listo para Transformar tu Laboratorio?
            </h3>
            <p className="text-muted-foreground mb-6">
              Únete a los laboratorios líderes en Venezuela que ya están aprovechando 
              el poder de SolHub para optimizar sus operaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="Calendar"
                iconPosition="left"
                className="bg-gradient-medical hover:opacity-90"
              >
                Agendar Demo Personalizada
              </Button>
              <Button
                variant="outline"
                iconName="MessageCircle"
                iconPosition="left"
                className="border-success text-success hover:bg-success/10"
              >
                Contactar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;