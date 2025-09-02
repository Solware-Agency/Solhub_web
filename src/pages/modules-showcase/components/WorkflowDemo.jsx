import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WorkflowDemo = ({ module, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const workflowSteps = {
    'patient-management': [
      {
        title: 'Registro de Paciente',
        description: 'El paciente llega y se registra en el sistema',
        icon: 'UserPlus',
        duration: 2000,
        improvement: 'Tiempo reducido de 5 min a 1 min'
      },
      {
        title: 'Verificación de Datos',
        description: 'El sistema valida automáticamente la información',
        icon: 'CheckCircle',
        duration: 1500,
        improvement: 'Errores reducidos en 85%'
      },
      {
        title: 'Asignación de Muestra',
        description: 'Se genera código único y etiquetas automáticamente',
        icon: 'Tag',
        duration: 1000,
        improvement: 'Proceso 100% automatizado'
      },
      {
        title: 'Notificación Enviada',
        description: 'El paciente recibe confirmación por SMS/WhatsApp',
        icon: 'MessageSquare',
        duration: 500,
        improvement: 'Comunicación instantánea'
      }
    ],
    'ai-analysis': [
      {
        title: 'Recepción de Muestra',
        description: 'La muestra ingresa al sistema de análisis',
        icon: 'FlaskConical',
        duration: 1000,
        improvement: 'Identificación automática'
      },
      {
        title: 'Análisis con IA',
        description: 'Algoritmos procesan los datos en tiempo real',
        icon: 'Brain',
        duration: 3000,
        improvement: 'Precisión aumentada 40%'
      },
      {
        title: 'Detección de Anomalías',
        description: 'IA identifica patrones y valores críticos',
        icon: 'AlertTriangle',
        duration: 2000,
        improvement: 'Detección temprana 95%'
      },
      {
        title: 'Validación Automática',
        description: 'Sistema confirma resultados dentro de rangos',
        icon: 'ShieldCheck',
        duration: 1500,
        improvement: 'Validación instantánea'
      }
    ],
    'automated-reports': [
      {
        title: 'Compilación de Datos',
        description: 'Sistema reúne todos los resultados del paciente',
        icon: 'Database',
        duration: 1500,
        improvement: 'Proceso 100% automatizado'
      },
      {
        title: 'Generación de Reporte',
        description: 'IA crea reporte personalizado con interpretaciones',
        icon: 'FileText',
        duration: 2500,
        improvement: 'Tiempo reducido 75%'
      },
      {
        title: 'Revisión Médica',
        description: 'Médico revisa y aprueba con un clic',
        icon: 'UserCheck',
        duration: 2000,
        improvement: 'Revisión 5x más rápida'
      },
      {
        title: 'Entrega Digital',
        description: 'Paciente recibe reporte por email/portal',
        icon: 'Send',
        duration: 1000,
        improvement: 'Entrega instantánea'
      }
    ]
  };

  const steps = workflowSteps?.[module?.id] || [];

  useEffect(() => {
    let interval;
    if (isPlaying && currentStep < steps?.length) {
      const currentStepData = steps?.[currentStep];
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCurrentStep(curr => curr + 1);
            return 0;
          }
          return prev + (100 / (currentStepData?.duration / 100));
        });
      }, 100);
    } else if (currentStep >= steps?.length) {
      setIsPlaying(false);
      setProgress(0);
    }

    return () => clearInterval(interval);
  }, [isPlaying, currentStep, steps]);

  const handlePlay = () => {
    if (currentStep >= steps?.length) {
      setCurrentStep(0);
      setProgress(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  if (!module) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="card-medical-elevated max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Icon name={module.icon} size={24} color="white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Demo: {module.name}
                </h2>
                <p className="text-muted-foreground">
                  Flujo de trabajo optimizado con IA
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              iconName="X"
            />
          </div>
        </div>

        {/* Demo Content */}
        <div className="p-6">
          {/* Controls */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Button
              variant="default"
              onClick={handlePlay}
              iconName={isPlaying ? "Pause" : "Play"}
              iconPosition="left"
              className="bg-gradient-medical"
            >
              {isPlaying ? 'Pausar' : 'Reproducir'} Demo
            </Button>
            <Button
              variant="outline"
              onClick={handleReset}
              iconName="RotateCcw"
              iconPosition="left"
            >
              Reiniciar
            </Button>
          </div>

          {/* Workflow Steps */}
          <div className="space-y-6">
            {steps?.map((step, index) => {
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;
              const isUpcoming = index > currentStep;

              return (
                <div
                  key={index}
                  className={`relative flex items-start space-x-4 p-4 rounded-xl transition-all duration-500 ${
                    isActive 
                      ? 'bg-primary/10 border-2 border-primary/30 scale-105' 
                      : isCompleted 
                        ? 'bg-success/10 border border-success/20' :'bg-muted/30 border border-border'
                  }`}
                >
                  {/* Step Icon */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? 'bg-primary text-primary-foreground animate-pulse-medical' 
                      : isCompleted 
                        ? 'bg-success text-success-foreground' 
                        : 'bg-muted text-muted-foreground'
                  }`}>
                    {isCompleted ? (
                      <Icon name="Check" size={20} />
                    ) : (
                      <Icon name={step?.icon} size={20} />
                    )}
                  </div>
                  {/* Step Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`font-semibold transition-colors duration-300 ${
                        isActive ? 'text-primary' : isCompleted ? 'text-success' : 'text-foreground'
                      }`}>
                        {step?.title}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        Paso {index + 1} de {steps?.length}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-2">
                      {step?.description}
                    </p>
                    
                    <div className="flex items-center space-x-2">
                      <Icon name="TrendingUp" size={14} className="text-success" />
                      <span className="text-xs text-success font-medium">
                        {step?.improvement}
                      </span>
                    </div>

                    {/* Progress Bar for Active Step */}
                    {isActive && (
                      <div className="mt-3">
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-100"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Connection Line */}
                  {index < steps?.length - 1 && (
                    <div className={`absolute left-10 top-16 w-0.5 h-8 transition-colors duration-300 ${
                      isCompleted ? 'bg-success' : 'bg-border'
                    }`}></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Results Summary */}
          {currentStep >= steps?.length && (
            <div className="mt-8 p-6 bg-gradient-medical-subtle rounded-xl border border-primary/20">
              <div className="text-center">
                <Icon name="CheckCircle" size={48} className="text-success mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  ¡Flujo Completado!
                </h3>
                <p className="text-muted-foreground mb-4">
                  El proceso se completó con mejoras significativas en eficiencia
                </p>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-success">60%</div>
                    <div className="text-xs text-muted-foreground">Tiempo ahorrado</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">85%</div>
                    <div className="text-xs text-muted-foreground">Menos errores</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">100%</div>
                    <div className="text-xs text-muted-foreground">Automatización</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-muted/30">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Demo interactivo - Resultados basados en implementaciones reales
            </div>
            <Button
              variant="default"
              iconName="Calendar"
              iconPosition="left"
              className="bg-gradient-medical"
            >
              Solicitar Demo Personalizado
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowDemo;