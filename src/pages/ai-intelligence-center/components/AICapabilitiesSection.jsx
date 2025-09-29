import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const AICapabilitiesSection = () => {
  const [activeCapability, setActiveCapability] = useState(0);

  const capabilities = [
    {
      id: 0,
      icon: "Search",
      title: "Reconocimiento de Patrones",
      description: "Análisis avanzado de resultados de laboratorio",
      details: "Nuestro sistema de IA analiza miles de resultados simultáneamente, identificando patrones sutiles que podrían pasar desapercibidos. Utiliza algoritmos de machine learning entrenados específicamente con datos de laboratorios venezolanos.",
      features: [
        "Detección de anomalías en hemogramas completos",
        "Análisis de tendencias en química sanguínea",
        "Identificación de patrones en uroanálisis",
        "Correlación entre múltiples parámetros"
      ],
      metrics: {
        accuracy: "95.2%",
        speed: "< 2 seg",
        coverage: "100+"
      }
    },
    {
      id: 1,
      icon: "AlertTriangle",
      title: "Detección de Anomalías",
      description: "Alertas inteligentes para resultados críticos",
      details: "Sistema de alertas multicapa que identifica valores críticos, tendencias preocupantes y combinaciones de resultados que requieren atención médica inmediata. Personalizable según protocolos de cada laboratorio.",
      features: [
        "Alertas de valores críticos automáticas",
        "Detección de tendencias anómalas",
        "Sugerencias de pruebas adicionales",
        "Priorización inteligente de casos"
      ],
      metrics: {
        accuracy: "98.7%",
        speed: "Tiempo real",
        coverage: "24/7"
      }
    },
    {
      id: 2,
      icon: "TrendingUp",
      title: "Análisis Predictivo",
      description: "Predicciones basadas en datos históricos",
      details: "Utiliza el historial completo del paciente y datos poblacionales para generar insights predictivos sobre riesgos de salud, progresión de enfermedades y respuesta a tratamientos.",
      features: [
        "Predicción de riesgo cardiovascular",
        "Análisis de progresión diabética",
        "Detección temprana de infecciones",
        "Evaluación de respuesta terapéutica"
      ],
      metrics: {
        accuracy: "92.4%",
        speed: "< 5 seg",
        coverage: "50+"
      }
    },
    {
      id: 3,
      icon: "FileText",
      title: "Generación de Reportes",
      description: "Reportes inteligentes con interpretación clínica",
      details: "Genera reportes comprensivos que incluyen interpretación clínica, referencias contextuales y recomendaciones basadas en las mejores prácticas médicas venezolanas e internacionales.",
      features: [
        "Interpretación automática de resultados",
        "Referencias de valores normales por edad",
        "Sugerencias de seguimiento clínico",
        "Integración con historias clínicas"
      ],
      metrics: {
        accuracy: "96.8%",
        speed: "< 3 seg",
        coverage: "Todos"
      }
    }
  ];

  // Cambio automático de capacidades cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCapability((prev) => (prev + 1) % capabilities.length);
    }, 6000); // Cambia cada 6 segundos

    return () => clearInterval(interval);
  }, [capabilities.length]);

  return (
    <section className="py-20 bg-muted/20">
      <div className="container-medical">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient-medical">Inteligencia Artificial</span>
            <br />
            <span className="text-foreground">al Servicio del Diagnóstico</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo nuestras capacidades de IA transforman los procesos diagnósticos, 
            mejorando la precisión y eficiencia en cada análisis.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Capability Tabs */}
          <div className="space-y-4">
            {capabilities?.map((capability, index) => (
              <motion.div
                key={capability?.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeCapability === index
                    ? 'bg-primary/10 border border-primary/20 shadow-lg'
                    : 'bg-card/50 border border-border hover:bg-card/70 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1'
                }`}
                onClick={() => setActiveCapability(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    activeCapability === index
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary group-hover:scale-110'
                  }`}>
                    <Icon name={capability?.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                      activeCapability === index ? 'text-primary' : 'text-foreground group-hover:text-primary'
                    }`}>
                      {capability?.title}
                    </h3>
                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                      {capability?.description}
                    </p>
                  </div>
                  <Icon 
                    name="ChevronRight" 
                    size={20} 
                    className={`transition-all duration-300 ${
                      activeCapability === index 
                        ? 'rotate-90 text-primary' 
                        : 'text-muted-foreground group-hover:text-primary group-hover:scale-110'
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Capability Details */}
          <motion.div
            key={activeCapability}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-xl p-8 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:border-primary/50 transition-all duration-300 cursor-pointer"
          >
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center">
                  <Icon name={capabilities?.[activeCapability]?.icon} size={24} color="white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {capabilities?.[activeCapability]?.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {capabilities?.[activeCapability]?.details}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Características Principales</h4>
              <div className="space-y-3">
                {capabilities?.[activeCapability]?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-muted/20 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-medical">
                  {capabilities?.[activeCapability]?.metrics?.accuracy}
                </div>
                <div className="text-xs text-muted-foreground">Precisión</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-medical">
                  {capabilities?.[activeCapability]?.metrics?.speed}
                </div>
                <div className="text-xs text-muted-foreground">Velocidad</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-medical">
                  {capabilities?.[activeCapability]?.metrics?.coverage}
                </div>
                <div className="text-xs text-muted-foreground">Cobertura</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {capabilities?.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCapability(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeCapability
                  ? 'bg-primary scale-125' 
                  : 'bg-muted hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto bg-muted/30 rounded-full h-1 mt-4">
          <div 
            className="bg-gradient-medical h-1 rounded-full transition-all duration-100 ease-linear"
            style={{ 
              width: `${((activeCapability + 1) / capabilities.length) * 100}%`,
              animation: 'progress 6s linear infinite'
            }}
          ></div>
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

export default AICapabilitiesSection;