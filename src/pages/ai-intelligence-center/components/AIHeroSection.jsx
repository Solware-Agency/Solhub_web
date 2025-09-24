import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AIHeroSection = ({ onDemoClick, onLearnMoreClick }) => {
  const aiFeatures = [
    {
      icon: "Brain",
      title: "Reconocimiento de Patrones",
      description: "Identifica anomalías en resultados de laboratorio con 95% de precisión"
    },
    {
      icon: "TrendingUp",
      title: "Análisis Predictivo",
      description: "Predice tendencias de salud basado en datos históricos"
    },
    {
      icon: "Shield",
      title: "Detección de Anomalías",
      description: "Alerta sobre resultados fuera de rangos esperados automáticamente"
    }
  ];

  return (
    <section className="relative flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-medical"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-medical" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-2xl"></div>
      </div>
      <div className="container-medical relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient-medical">IA que Potencia</span>
                <br />
                <span className="text-foreground">el Diagnóstico</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                <span className="text-destructive font-semibold">Entregar información médica confidencial a IAs externas es un riesgo que puede comprometer la privacidad de tus pacientes y la confidencialidad de tu laboratorio.</span> 
                <span className="text-primary font-medium"> SolIA</span> es la única IA médica que funciona completamente dentro de tu infraestructura, garantizando que los datos de tus pacientes nunca salgan de tu control y manteniendo la confidencialidad absoluta.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={onDemoClick}
                iconName="Play"
                iconPosition="left"
                className="bg-gradient-medical hover:opacity-90 shadow-medical-glow"
              >
                Ver Demo Interactivo
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onLearnMoreClick}
                iconName="ArrowDown"
                iconPosition="right"
                className="border-primary/20 text-primary hover:bg-primary/10"
              >
                Explorar Capacidades
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-medical">95%</div>
                <div className="text-sm text-muted-foreground">Precisión</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-medical">5</div>
                <div className="text-sm text-muted-foreground">Sedes Activas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-medical">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoreo</div>
              </div>
            </div>
          </motion.div>

          {/* AI Features Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="absolute top-4 right-4">
                <div className="flex items-center space-x-2 text-success text-sm">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span>SolIA Activa</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-medical rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Brain" size={32} color="white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Centro de IA SolHub</h3>
                </div>

                {aiFeatures?.map((feature, index) => (
                  <motion.div
                    key={feature?.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/20 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={feature?.icon} size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground mb-1">{feature?.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature?.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Processing Animation */}
              <div className="mt-8 p-4 bg-muted/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Procesando análisis...</span>
                  <span className="text-sm text-primary">87%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    className="bg-gradient-medical h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '87%' }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIHeroSection;