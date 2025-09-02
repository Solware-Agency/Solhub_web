import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const PlatformPreview = () => {
  const [activeWorkflow, setActiveWorkflow] = useState('patient-registration');
  const [currentStep, setCurrentStep] = useState(0);

  const workflows = {
    'patient-registration': {
      title: 'Registro de Pacientes',
      icon: 'UserPlus',
      description: 'Sistema intuitivo para registro y gestión de pacientes',
      steps: [
        {
          title: 'Datos Básicos del Paciente',
          description: 'Captura rápida de información personal y contacto',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop',
          features: ['Validación automática de cédula', 'Historial médico integrado', 'Contactos de emergencia']
        },
        {
          title: 'Verificación de Seguros',
          description: 'Validación automática con aseguradoras venezolanas',
          image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
          features: ['Integración con seguros locales', 'Verificación en tiempo real', 'Copagos automáticos']
        },
        {
          title: 'Asignación de Citas',
          description: 'Calendario inteligente con disponibilidad en tiempo real',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
          features: ['Recordatorios automáticos', 'Reprogramación flexible', 'Notificaciones WhatsApp']
        }
      ]
    },
    'test-ordering': {
      title: 'Orden de Pruebas',
      icon: 'FileText',
      description: 'Gestión completa del proceso de órdenes médicas',
      steps: [
        {
          title: 'Selección de Pruebas',
          description: 'Catálogo completo con precios y tiempos de entrega',
          image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=500&fit=crop',
          features: ['Búsqueda inteligente', 'Paquetes predefinidos', 'Precios actualizados']
        },
        {
          title: 'Preparación del Paciente',
          description: 'Instrucciones automáticas según tipo de prueba',
          image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop',
          features: ['Instrucciones personalizadas', 'Recordatorios de ayuno', 'Preparación especial']
        },
        {
          title: 'Toma de Muestras',
          description: 'Protocolo guiado para técnicos de laboratorio',
          image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=500&fit=crop',
          features: ['Códigos de barras', 'Trazabilidad completa', 'Control de calidad']
        }
      ]
    },
    'result-processing': {
      title: 'Procesamiento de Resultados',
      icon: 'Activity',
      description: 'IA integrada para análisis y validación de resultados',
      steps: [
        {
          title: 'Análisis Automatizado',
          description: 'IA que detecta patrones y anomalías en resultados',
          image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=500&fit=crop',
          features: ['Detección de anomalías', 'Validación cruzada', 'Alertas automáticas']
        },
        {
          title: 'Revisión Médica',
          description: 'Dashboard para validación profesional de resultados',
          image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
          features: ['Interfaz médica especializada', 'Comparación histórica', 'Notas clínicas']
        },
        {
          title: 'Control de Calidad',
          description: 'Verificación automática antes de la entrega',
          image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=500&fit=crop',
          features: ['Validación múltiple', 'Firma digital', 'Trazabilidad completa']
        }
      ]
    },
    'report-generation': {
      title: 'Generación de Reportes',
      icon: 'FileBarChart',
      description: 'Reportes profesionales con diseño médico estándar',
      steps: [
        {
          title: 'Plantillas Personalizadas',
          description: 'Diseños adaptados a cada tipo de laboratorio',
          image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=500&fit=crop',
          features: ['Logo personalizado', 'Formatos estándar', 'Diseño profesional']
        },
        {
          title: 'Entrega Digital',
          description: 'Múltiples canales de entrega segura',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
          features: ['Email seguro', 'Portal del paciente', 'WhatsApp Business']
        },
        {
          title: 'Archivo Digital',
          description: 'Almacenamiento seguro con acceso controlado',
          image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop',
          features: ['Backup automático', 'Acceso por roles', 'Historial completo']
        }
      ]
    }
  };

  const workflowKeys = Object.keys(workflows);
  const currentWorkflow = workflows?.[activeWorkflow];

  const nextStep = () => {
    if (currentStep < currentWorkflow?.steps?.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const switchWorkflow = (workflowKey) => {
    setActiveWorkflow(workflowKey);
    setCurrentStep(0);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="Monitor" size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            Preview de la Plataforma
          </h3>
          <p className="text-sm text-muted-foreground">
            Explore los flujos de trabajo principales de IBEX Medical
          </p>
        </div>
      </div>
      {/* Workflow Selector */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {workflowKeys?.map(key => {
          const workflow = workflows?.[key];
          return (
            <button
              key={key}
              onClick={() => switchWorkflow(key)}
              className={`p-4 rounded-lg border transition-all duration-200 text-left ${
                activeWorkflow === key
                  ? 'bg-primary/10 border-primary text-primary' :'bg-muted/30 border-border text-foreground hover:bg-muted/50 hover:border-primary/50'
              }`}
            >
              <Icon name={workflow?.icon} size={20} className="mb-2" />
              <h4 className="text-sm font-medium">{workflow?.title}</h4>
            </button>
          );
        })}
      </div>
      {/* Current Workflow Display */}
      <div className="space-y-6">
        <div className="text-center">
          <h4 className="text-2xl font-semibold text-foreground mb-2">
            {currentWorkflow?.title}
          </h4>
          <p className="text-muted-foreground">
            {currentWorkflow?.description}
          </p>
        </div>

        {/* Step Progress */}
        <div className="flex items-center justify-center space-x-2">
          {currentWorkflow?.steps?.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentStep
                  ? 'bg-primary'
                  : index < currentStep
                  ? 'bg-success' :'bg-muted'
              }`}
            />
          ))}
        </div>

        {/* Current Step */}
        <div className="bg-muted/20 rounded-xl p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <div>
                <h5 className="text-xl font-semibold text-foreground mb-2">
                  {currentWorkflow?.steps?.[currentStep]?.title}
                </h5>
                <p className="text-muted-foreground">
                  {currentWorkflow?.steps?.[currentStep]?.description}
                </p>
              </div>

              <div className="space-y-2">
                <h6 className="text-sm font-medium text-foreground">
                  Características Principales:
                </h6>
                <ul className="space-y-1">
                  {currentWorkflow?.steps?.[currentStep]?.features?.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={14} className="text-success" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden border border-border">
                <Image
                  src={currentWorkflow?.steps?.[currentStep]?.image}
                  alt={currentWorkflow?.steps?.[currentStep]?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <div className="flex items-center space-x-2 mb-1">
                      <Icon name="Play" size={16} />
                      <span className="text-sm font-medium">Vista Previa Interactiva</span>
                    </div>
                    <p className="text-xs opacity-80">
                      Paso {currentStep + 1} de {currentWorkflow?.steps?.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              iconName="ChevronLeft"
              iconPosition="left"
            >
              Anterior
            </Button>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Paso {currentStep + 1} de {currentWorkflow?.steps?.length}
              </p>
            </div>

            <Button
              variant="outline"
              onClick={nextStep}
              disabled={currentStep === currentWorkflow?.steps?.length - 1}
              iconName="ChevronRight"
              iconPosition="right"
            >
              Siguiente
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-medical/10 border border-primary/20 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Icon name="Zap" size={20} className="text-primary" />
            <h5 className="text-lg font-semibold text-foreground">
              ¿Listo para ver más?
            </h5>
          </div>
          <p className="text-muted-foreground mb-4">
            Este es solo un vistazo de las capacidades de IBEX Medical.\n
            En el demo completo podrá interactuar con todas las funcionalidades.
          </p>
          <Button
            variant="default"
            iconName="Calendar"
            iconPosition="left"
            className="bg-gradient-medical"
          >
            Programar Demo Completo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlatformPreview;