import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const AIProcessVisualization = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const processSteps = [
    {
      id: 0,
      title: "Ingreso de Datos",
      description: "Recepción y validación de resultados de laboratorio",
      icon: "Upload",
      color: "text-primary",
      bgColor: "bg-primary/10",
      details: [
        "Validación automática de formato",
        "Verificación de integridad de datos",
        "Normalización de unidades de medida",
        "Identificación de parámetros clave"
      ],
      dataFlow: "Resultados → Validación → Normalización"
    },
    {
      id: 1,
      title: "Análisis de Patrones",
      description: "Identificación de patrones y anomalías mediante algoritmos de ML",
      icon: "Search",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      details: [
        "Comparación con rangos de referencia",
        "Detección de valores atípicos",
        "Análisis de correlaciones entre parámetros",
        "Identificación de patrones complejos"
      ],
      dataFlow: "Datos → Algoritmos ML → Patrones"
    },
    {
      id: 2,
      title: "Correlación Clínica",
      description: "Correlación con base de conocimiento médico y casos históricos",
      icon: "Brain",
      color: "text-accent",
      bgColor: "bg-accent/10",
      details: [
        "Consulta de base de conocimiento médico",
        "Comparación con casos similares",
        "Análisis de contexto clínico",
        "Evaluación de factores de riesgo"
      ],
      dataFlow: "Patrones → Base Médica → Correlaciones"
    },
    {
      id: 3,
      title: "Generación de Insights",
      description: "Creación de recomendaciones y alertas inteligentes",
      icon: "Lightbulb",
      color: "text-warning",
      bgColor: "bg-warning/10",
      details: [
        "Generación de alertas críticas",
        "Sugerencias de pruebas adicionales",
        "Recomendaciones de seguimiento",
        "Cálculo de scores de riesgo"
      ],
      dataFlow: "Correlaciones → IA → Insights"
    },
    {
      id: 4,
      title: "Presentación Médica",
      description: "Entrega de resultados con explicaciones claras al profesional",
      icon: "FileText",
      color: "text-success",
      bgColor: "bg-success/10",
      details: [
        "Formato adaptado al profesional",
        "Explicaciones comprensibles",
        "Referencias científicas",
        "Métricas de confianza"
      ],
      dataFlow: "Insights → Formato → Médico"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % processSteps?.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  return (
    <section className="py-20 bg-muted/10">
      <div className="container-medical">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient-medical">Cómo Funciona</span>
            <br />
            <span className="text-foreground">Nuestra Inteligencia Artificial</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un vistazo detallado al proceso paso a paso de cómo la IA de SolHub 
            analiza los datos médicos y genera insights clínicos valiosos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Process Flow Visualization */}
          <div className="relative">
            <div className="space-y-6">
              {processSteps?.map((step, index) => (
                <motion.div
                  key={step?.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative cursor-pointer transition-all duration-500 ${
                    activeStep === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => handleStepClick(index)}
                >
                  <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                    activeStep === index
                      ? `${step?.bgColor} border-current ${step?.color} shadow-lg`
                      : 'bg-card border-border hover:border-primary/30'
                  }`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        activeStep === index
                          ? 'bg-gradient-medical text-white'
                          : `${step?.bgColor} ${step?.color}`
                      }`}>
                        <Icon name={step?.icon} size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold mb-1 ${
                          activeStep === index ? step?.color : 'text-foreground'
                        }`}>
                          {step?.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {step?.description}
                        </p>
                      </div>
                      <div className={`text-2xl font-bold ${
                        activeStep === index ? step?.color : 'text-muted-foreground'
                      }`}>
                        {index + 1}
                      </div>
                    </div>

                    {/* Data Flow Indicator */}
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Icon name="ArrowRight" size={14} />
                        <span>{step?.dataFlow}</span>
                      </div>
                    </div>
                  </div>

                  {/* Connection Line */}
                  {index < processSteps?.length - 1 && (
                    <div className="absolute left-6 top-full w-0.5 h-6 bg-gradient-to-b from-border to-transparent"></div>
                  )}

                  {/* Active Step Indicator */}
                  {activeStep === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-medical rounded-full shadow-lg"
                    >
                      <div className="w-full h-full bg-gradient-medical rounded-full animate-pulse"></div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Step Details */}
          <div className="sticky top-8">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-4 sm:p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-medical rounded-xl flex items-center justify-center">
                  <Icon name={processSteps?.[activeStep]?.icon} size={32} color="white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {processSteps?.[activeStep]?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    Paso {activeStep + 1} de {processSteps?.length}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {processSteps?.[activeStep]?.description}
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Procesos Detallados:</h4>
                {processSteps?.[activeStep]?.details?.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-3 bg-muted/20 rounded-lg"
                  >
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-sm text-muted-foreground">{detail}</p>
                  </motion.div>
                ))}
              </div>

              {/* Processing Animation */}
              <div className="mt-8 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">
                    Procesando {processSteps?.[activeStep]?.title?.toLowerCase()}...
                  </span>
                  <span className="text-sm text-primary">
                    {Math.floor(Math.random() * 20) + 80}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    className="bg-gradient-medical h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.floor(Math.random() * 20) + 80}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </div>

              {/* Technical Specs */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-muted/20 rounded-lg">
                  <div className="text-lg font-bold text-gradient-medical">
                    &lt; 2s
                  </div>
                  <div className="text-xs text-muted-foreground">Tiempo Proceso</div>
                </div>
                <div className="p-3 bg-muted/20 rounded-lg">
                  <div className="text-lg font-bold text-gradient-medical">
                    99.7%
                  </div>
                  <div className="text-xs text-muted-foreground">Disponibilidad</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Process Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-card border border-border rounded-xl p-8 text-center"
        >
          <h3 className="text-xl font-bold text-foreground mb-4">
            Resultado: Diagnóstico Potenciado por IA
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Al final de este proceso de 5 pasos, el médico recibe un análisis completo y comprensible 
            que incluye alertas críticas, recomendaciones basadas en evidencia, y explicaciones claras 
            de cada sugerencia, todo en menos de 2 segundos desde el ingreso de los datos.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center space-x-2 px-4 py-2 bg-success/10 text-success rounded-full text-sm">
              <Icon name="Clock" size={16} />
              <span>Tiempo real</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
              <Icon name="Shield" size={16} />
              <span>100% Seguro</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm">
              <Icon name="Target" size={16} />
              <span>95% Precisión</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIProcessVisualization;