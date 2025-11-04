import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ModuleShowcase = () => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      id: 'samples',
      name: 'Gestión de Muestras',
      icon: 'TestTube',
      description: 'Control completo del flujo de muestras desde recepción hasta entrega de resultados',
      features: [
        'Código de barras automático',
        'Tracking en tiempo real',
        'Alertas de vencimiento',
        'Integración con equipos'
      ],
      metrics: {
        efficiency: '+45%',
        errors: '-80%',
        time: '3 min'
      },
      preview: `{
  "muestra_id": "LAB-2025-001234",
  "paciente": "María González",
  "tipo": "Hemograma Completo",
  "estado": "En Proceso",
  "prioridad": "Normal",
  "tiempo_estimado": "45 min"
}`
    },
    {
      id: 'ai-reports',
      name: 'Reportes con IA',
      icon: 'Brain',
      description: 'Inteligencia artificial que asiste en la interpretación y generación de reportes médicos',
      features: [
        'Detección de anomalías',
        'Sugerencias diagnósticas',
        'Reportes automáticos',
        'Validación cruzada'
      ],
      metrics: {
        accuracy: '99.9%',
        speed: '+60%',
        consistency: '100%'
      },
      preview: `{
  "analisis_ia": {
    "hemoglobina": {
      "valor": 8.2,
      "referencia": "12-15 g/dL",
      "alerta": "BAJO - Posible anemia",
      "recomendacion": "Evaluar ferritina"
    }
  }
}`
    },
    {
      id: 'security',
      name: 'Seguridad por Sede',
      icon: 'Shield',
      description: 'Arquitectura de seguridad distribuida con controles específicos por ubicación',
      features: [
        'Encriptación end-to-end',
        'Acceso por roles',
        'Auditoría completa',
        'Backup automático'
      ],
      metrics: {
        uptime: '99.99%',
        compliance: '100%',
        incidents: '0'
      },
      preview: `{
  "sede": "Caracas Centro",
  "usuarios_activos": 12,
  "nivel_seguridad": "Máximo",
  "ultima_auditoria": "2025-01-15",
  "certificaciones": ["ISO 27001"]
}`
    },
    {
      id: 'analytics',
      name: 'Analytics Avanzado',
      icon: 'BarChart3',
      description: 'Dashboards inteligentes con métricas operativas y análisis predictivo',
      features: [
        'KPIs en tiempo real',
        'Análisis predictivo',
        'Reportes ejecutivos',
        'Benchmarking'
      ],
      metrics: {
        insights: '+200%',
        decisions: '3x más rápidas',
        roi: '+35%'
      },
      preview: `{
  "rendimiento_diario": {
    "muestras_procesadas": 247,
    "tiempo_promedio": "42 min",
    "satisfaccion_paciente": "4.8/5",
    "eficiencia": "94%"
  }
}`
    }
  ];

  // Cambio automático de módulos cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveModule((prev) => (prev + 1) % modules.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [modules.length]);

  return (
    <section className="py-20 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #41e2b8 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #4c87ff 0%, transparent 50%)`
        }}></div>
      </div>
      <div className="container-medical relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Módulos que</span>
            <br />
            <span className="text-gradient-medical">crecen contigo</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada módulo está diseñado para integrarse perfectamente con tu flujo de trabajo actual, 
            escalando según las necesidades de tu laboratorio.
          </p>
        </div>

        {/* Module Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {modules?.map((module, index) => (
            <button
              key={module.id}
              onClick={() => setActiveModule(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeModule === index
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground'
              }`}
            >
              <Icon name={module.icon} size={20} />
              <span className="font-medium">{module.name}</span>
            </button>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {modules?.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveModule(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeModule
                  ? 'bg-primary scale-125' 
                  : 'bg-muted hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto bg-muted/30 rounded-full h-1 mb-8">
          <div 
            className="bg-gradient-medical h-1 rounded-full transition-all duration-100 ease-linear"
            style={{ 
              width: `${((activeModule + 1) / modules.length) * 100}%`,
              animation: 'progress 5s linear infinite'
            }}
          ></div>
        </div>

        {/* Active Module Display */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center overflow-hidden">
          {/* Module Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-medical rounded-xl flex items-center justify-center">
                  <Icon name={modules?.[activeModule]?.icon} size={32} color="white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{modules?.[activeModule]?.name}</h3>
                  <p className="text-muted-foreground">Módulo especializado</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {modules?.[activeModule]?.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Características principales:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {modules?.[activeModule]?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Resultados comprobados:</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {Object.entries(modules?.[activeModule]?.metrics)?.map(([key, value], index) => {
                  const metricLabels = {
                    efficiency: 'Eficiencia',
                    errors: 'Errores',
                    time: 'Tiempo',
                    accuracy: 'Precisión',
                    speed: 'Velocidad',
                    consistency: 'Consistencia',
                    uptime: 'Disponibilidad',
                    compliance: 'Cumplimiento',
                    incidents: 'Incidentes',
                    insights: 'Insights',
                    decisions: 'Decisiones',
                    roi: 'ROI'
                  };
                  
                  return (
                    <div key={index} className="text-center p-4 bg-card/30 rounded-lg">
                      <div className="text-2xl font-bold text-gradient-medical">{value}</div>
                      <div className="text-sm text-muted-foreground">{metricLabels[key] || key}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/modules-showcase">
                <Button
                  variant="default"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="bg-gradient-medical hover:opacity-90"
                >
                  Ver Todos los Módulos
                </Button>
              </Link>
              <Link to="/demo-experience">
                <Button
                  variant="outline"
                  iconName="Play"
                  iconPosition="left"
                  className="border-primary/30 text-primary hover:bg-primary/10"
                >
                  Demo Interactivo
                </Button>
              </Link>
            </div>
          </div>

          {/* Code Preview */}
          <div className="relative min-w-0">
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
              <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <span className="text-sm text-muted-foreground font-mono">
                  {modules?.[activeModule]?.id}.json
                </span>
              </div>
              <div className="p-6">
                <pre className="text-sm text-foreground font-mono overflow-x-auto whitespace-pre-wrap break-words">
                  <code>{modules?.[activeModule]?.preview}</code>
                </pre>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              En Tiempo Real
            </div>
          </div>
        </div>
      </div>

      {/* CSS para la animación de progreso */}
      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default ModuleShowcase;