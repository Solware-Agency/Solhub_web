import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const DataFlowVisualization = () => {
  const [activeStep, setActiveStep] = useState(0);

  const dataFlowSteps = [
    {
      id: 1,
      title: "Captura de Datos",
      description: "Los datos médicos se capturan desde equipos de laboratorio y sistemas de información hospitalaria",
      icon: "Stethoscope",
      color: "primary",
      details: [
        "Integración directa con equipos de laboratorio",
        "Validación automática de datos en tiempo real",
        "Registro de auditoría desde el punto de origen"
      ]
    },
    {
      id: 2,
      title: "Encriptación en Tránsito",
      description: "Todos los datos se encriptan usando TLS 1.3 durante la transmisión",
      icon: "Lock",
      color: "success",
      details: [
        "Protocolo TLS 1.3 para máxima seguridad",
        "Certificados SSL/TLS renovados automáticamente",
        "Verificación de integridad de datos"
      ]
    },
    {
      id: 3,
      title: "Procesamiento Seguro",
      description: "Los datos se procesan en entornos aislados con controles de acceso estrictos",
      icon: "Cpu",
      color: "secondary",
      details: [
        "Entornos de procesamiento aislados por sede",
        "Controles de acceso basados en roles",
        "Monitoreo continuo de actividad"
      ]
    },
    {
      id: 4,
      title: "Almacenamiento Encriptado",
      description: "Los datos se almacenan con encriptación AES-256 en reposo",
      icon: "Database",
      color: "accent",
      details: [
        "Encriptación AES-256 en reposo",
        "Claves de encriptación rotadas regularmente",
        "Respaldos encriptados automáticos"
      ]
    },
    {
      id: 5,
      title: "Acceso Controlado",
      description: "El acceso a los datos está controlado por autenticación multifactor y permisos granulares",
      icon: "UserCheck",
      color: "warning",
      details: [
        "Autenticación multifactor obligatoria",
        "Permisos granulares por rol y función",
        "Registro completo de accesos y modificaciones"
      ]
    }
  ];

  // Cambio automático de pasos cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % dataFlowSteps.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [dataFlowSteps.length]);

  const getColorClass = (color, type = 'bg') => {
    const colorMap = {
      primary: type === 'bg' ? 'bg-primary' : 'text-primary',
      success: type === 'bg' ? 'bg-success' : 'text-success',
      secondary: type === 'bg' ? 'bg-secondary' : 'text-secondary',
      accent: type === 'bg' ? 'bg-accent' : 'text-accent',
      warning: type === 'bg' ? 'bg-warning' : 'text-warning'
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  const getColorVar = (color) => {
    const colorMap = {
      primary: 'var(--color-primary)',
      success: 'var(--color-success)',
      secondary: 'var(--color-secondary)',
      accent: 'var(--color-accent)',
      warning: 'var(--color-warning)'
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container-medical">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visualización del Flujo de Datos Médicos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprende cómo SolHub protege tus datos médicos en cada etapa del proceso, 
            desde la captura hasta el almacenamiento y acceso controlado.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Interactive Flow Diagram */}
          <div className="relative mb-12">
            {/* Subtle Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
              {/* Base gradient line */}
              <div className="h-0.5 bg-gradient-to-r from-transparent via-primary/20 via-secondary/20 via-primary/20 to-transparent rounded-full"></div>
            </div>
            
            {/* Flow Steps */}
            <div className="grid md:grid-cols-5 gap-6">
              {dataFlowSteps?.map((step, index) => (
                <div key={step?.id} className="relative">
                  {/* Pulse effect around active card */}
                  {activeStep === index && (
                    <div className="absolute -inset-2 rounded-xl pointer-events-none">
                      {/* Outer glow ring */}
                      <div 
                        className="absolute inset-0 rounded-xl"
                        style={{
                          boxShadow: '0 0 20px rgba(65, 226, 184, 0.4), 0 0 40px rgba(65, 226, 184, 0.2), 0 0 60px rgba(65, 226, 184, 0.1)',
                          animation: 'pulseGlow 2s ease-in-out infinite'
                        }}
                      ></div>
                      {/* Middle glow ring */}
                      <div 
                        className="absolute -inset-1 rounded-xl"
                        style={{
                          boxShadow: '0 0 15px rgba(65, 226, 184, 0.3), 0 0 30px rgba(65, 226, 184, 0.15)',
                          animation: 'pulseGlow 2s ease-in-out infinite 0.5s'
                        }}
                      ></div>
                      {/* Inner glow ring */}
                      <div 
                        className="absolute inset-0 rounded-xl border border-primary/40"
                        style={{
                          boxShadow: '0 0 10px rgba(65, 226, 184, 0.5)',
                          animation: 'pulseGlow 2s ease-in-out infinite 0.25s'
                        }}
                      ></div>
                    </div>
                  )}
                  
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`w-full p-6 rounded-xl border-2 transition-all duration-300 relative z-10 ${
                      activeStep === index
                        ? `border-primary bg-primary/10 shadow-lg shadow-primary/20`
                        : 'border-border bg-card/50 hover:bg-card/70 hover:border-primary/30'
                    }`}
                  >
                    <div className={`w-16 h-16 ${
                      activeStep === index ? 'bg-primary/20' : 'bg-card border border-border'
                    } rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300`}>
                      <Icon 
                        name={step?.icon} 
                        size={32} 
                        color={activeStep === index ? 'var(--color-primary)' : getColorVar(step?.color)} 
                      />
                    </div>
                    <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                      activeStep === index ? 'text-primary' : 'text-foreground'
                    }`}>
                      {step?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step?.description}
                    </p>
                  </button>
                  
                  {/* Step Number - Updated design */}
                  <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-110' 
                      : `${getColorClass(step?.color)} text-white scale-100`
                  }`}>
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-3 mb-8">
            {dataFlowSteps?.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeStep
                    ? 'bg-primary scale-125'
                    : 'bg-muted hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar - Updated with new brand colors */}
          <div className="w-full max-w-md mx-auto bg-muted/30 rounded-full h-1.5 mb-8 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary via-secondary to-primary h-1.5 rounded-full transition-all duration-500 ease-out shadow-lg shadow-primary/30"
              style={{
                width: `${((activeStep + 1) / dataFlowSteps.length) * 100}%`
              }}
            ></div>
          </div>

          {/* Active Step Details */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className={`w-12 h-12 ${getColorClass(dataFlowSteps?.[activeStep]?.color)}/10 rounded-lg flex items-center justify-center`}>
                <Icon 
                  name={dataFlowSteps?.[activeStep]?.icon} 
                  size={24} 
                  color={getColorVar(dataFlowSteps?.[activeStep]?.color)} 
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {dataFlowSteps?.[activeStep]?.title}
                </h3>
                <p className="text-muted-foreground">
                  {dataFlowSteps?.[activeStep]?.description}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {dataFlowSteps?.[activeStep]?.details?.map((detail, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                  <div className={`w-6 h-6 ${getColorClass(dataFlowSteps?.[activeStep]?.color)}/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <Icon 
                      name="Check" 
                      size={14} 
                      color={getColorVar(dataFlowSteps?.[activeStep]?.color)} 
                    />
                  </div>
                  <p className="text-sm text-foreground">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Security Guarantees */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-success/10 border border-success/20 rounded-xl p-6 text-center">
              <Icon name="Shield" size={32} color="var(--color-success)" className="mx-auto mb-4" />
              <h4 className="font-semibold text-success mb-2">Encriptación de Extremo a Extremo</h4>
              <p className="text-sm text-success/80">
                Los datos están protegidos desde el momento de captura hasta su almacenamiento final
              </p>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
              <Icon name="Eye" size={32} color="var(--color-primary)" className="mx-auto mb-4" />
              <h4 className="font-semibold text-primary mb-2">Auditoría Completa</h4>
              <p className="text-sm text-primary/80">
                Cada acción queda registrada con timestamp, usuario y detalles de la operación
              </p>
            </div>
            <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 text-center">
              <Icon name="Clock" size={32} color="var(--color-secondary)" className="mx-auto mb-4" />
              <h4 className="font-semibold text-secondary mb-2">Monitoreo 24/7</h4>
              <p className="text-sm text-secondary/80">
                Supervisión continua de todos los procesos con alertas automáticas
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation for Pulse Glow */}
      <style jsx>{`
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.03);
          }
        }
      `}</style>
    </section>
  );
};

export default DataFlowVisualization;