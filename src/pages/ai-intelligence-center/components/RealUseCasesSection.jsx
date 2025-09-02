import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RealUseCasesSection = () => {
  const [activeCase, setActiveCase] = useState(0);

  const useCases = [
    {
      id: 0,
      title: "Detección Temprana de Dengue",
      condition: "Dengue Hemorrágico",
      location: "Hospital Central de Valencia",
      icon: "Activity",
      severity: "Crítico",
      severityColor: "text-error",
      before: {
        title: "Antes de IBEX IA",
        description: "Detección manual tardía de patrones hemorrágicos",
        metrics: [
          { label: "Tiempo de detección", value: "4-6 horas", color: "text-error" },
          { label: "Casos perdidos", value: "15%", color: "text-error" },
          { label: "Precisión diagnóstica", value: "78%", color: "text-warning" }
        ],
        issues: [
          "Revisión manual de plaquetas y hematocrito",
          "Alertas tardías en casos críticos",
          "Falta de correlación con síntomas clínicos",
          "Sobrecarga de trabajo en temporada epidémica"
        ]
      },
      after: {
        title: "Con IBEX IA",
        description: "Detección automática y alertas tempranas inteligentes",
        metrics: [
          { label: "Tiempo de detección", value: "< 30 min", color: "text-success" },
          { label: "Casos perdidos", value: "2%", color: "text-success" },
          { label: "Precisión diagnóstica", value: "94%", color: "text-success" }
        ],
        improvements: [
          "Algoritmo específico para patrones de dengue",
          "Alertas automáticas por caída de plaquetas",
          "Correlación con datos epidemiológicos locales",
          "Priorización inteligente de casos urgentes"
        ]
      },
      impact: {
        lives: "127 vidas salvadas",
        efficiency: "67% más eficiente",
        cost: "45% reducción costos"
      }
    },
    {
      id: 1,
      title: "Monitoreo Diabético Avanzado",
      condition: "Diabetes Mellitus Tipo 2",
      location: "Clínica Metropolitana Caracas",
      icon: "TrendingUp",
      severity: "Moderado",
      severityColor: "text-warning",
      before: {
        title: "Antes de IBEX IA",
        description: "Seguimiento reactivo basado en valores puntuales",
        metrics: [
          { label: "Detección complicaciones", value: "21 días", color: "text-error" },
          { label: "Adherencia tratamiento", value: "62%", color: "text-warning" },
          { label: "Control glucémico", value: "71%", color: "text-warning" }
        ],
        issues: [
          "Análisis aislado de glucosa y HbA1c",
          "Falta de predicción de complicaciones",
          "Seguimiento irregular de pacientes",
          "Interpretación manual de tendencias"
        ]
      },
      after: {
        title: "Con IBEX IA",
        description: "Monitoreo predictivo y personalizado continuo",
        metrics: [
          { label: "Detección complicaciones", value: "3-5 días", color: "text-success" },
          { label: "Adherencia tratamiento", value: "89%", color: "text-success" },
          { label: "Control glucémico", value: "92%", color: "text-success" }
        ],
        improvements: [
          "Análisis integral de biomarcadores",
          "Predicción de riesgo cardiovascular",
          "Alertas personalizadas por paciente",
          "Recomendaciones de ajuste terapéutico"
        ]
      },
      impact: {
        lives: "340 pacientes mejorados",
        efficiency: "54% más eficiente",
        cost: "38% reducción costos"
      }
    },
    {
      id: 2,
      title: "Evaluación Cardiovascular Integral",
      condition: "Riesgo Cardiovascular",
      location: "Instituto Cardiológico de Maracaibo",
      icon: "Heart",
      severity: "Alto",
      severityColor: "text-error",
      before: {
        title: "Antes de IBEX IA",
        description: "Evaluación fragmentada de factores de riesgo",
        metrics: [
          { label: "Tiempo evaluación", value: "2-3 días", color: "text-warning" },
          { label: "Detección riesgo alto", value: "73%", color: "text-warning" },
          { label: "Predicción eventos", value: "65%", color: "text-error" }
        ],
        issues: [
          "Análisis separado de lípidos y glucosa",
          "Falta de correlación con historial familiar",
          "Evaluación subjetiva de riesgo global",
          "Retrasos en identificación de casos críticos"
        ]
      },
      after: {
        title: "Con IBEX IA",
        description: "Evaluación integral con scoring predictivo avanzado",
        metrics: [
          { label: "Tiempo evaluación", value: "< 1 hora", color: "text-success" },
          { label: "Detección riesgo alto", value: "96%", color: "text-success" },
          { label: "Predicción eventos", value: "91%", color: "text-success" }
        ],
        improvements: [
          "Score de riesgo cardiovascular automatizado",
          "Integración con datos genéticos y familiares",
          "Predicción de eventos a 5 y 10 años",
          "Recomendaciones terapéuticas personalizadas"
        ]
      },
      impact: {
        lives: "89 eventos prevenidos",
        efficiency: "73% más eficiente",
        cost: "52% reducción costos"
      }
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-medical">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
            <Icon name="FileText" size={16} />
            <span>Casos de Uso Reales</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient-medical">Transformación Real</span>
            <br />
            <span className="text-foreground">en Laboratorios Venezolanos</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Casos documentados de cómo la IA de IBEX ha mejorado diagnósticos y salvado vidas 
            en las 5 sedes activas en Venezuela.
          </p>
        </motion.div>

        {/* Case Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {useCases?.map((useCase, index) => (
            <motion.button
              key={useCase?.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveCase(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeCase === index
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card border border-border hover:bg-card/70 text-foreground'
              }`}
            >
              <Icon name={useCase?.icon} size={20} />
              <div className="text-left">
                <div className="font-medium text-sm">{useCase?.title}</div>
                <div className={`text-xs ${activeCase === index ? 'text-primary-foreground/80' : useCase?.severityColor}`}>
                  {useCase?.severity}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Case Details */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-medical p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Icon name={useCases?.[activeCase]?.icon} size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{useCases?.[activeCase]?.title}</h3>
                  <p className="text-white/80">{useCases?.[activeCase]?.location}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-white/80">Condición</div>
                <div className="font-semibold">{useCases?.[activeCase]?.condition}</div>
              </div>
            </div>
          </div>

          {/* Before/After Comparison */}
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Before */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-error/10 rounded-lg flex items-center justify-center">
                  <Icon name="AlertCircle" size={16} className="text-error" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">
                  {useCases?.[activeCase]?.before?.title}
                </h4>
              </div>
              
              <p className="text-muted-foreground">
                {useCases?.[activeCase]?.before?.description}
              </p>

              {/* Metrics */}
              <div className="space-y-3">
                {useCases?.[activeCase]?.before?.metrics?.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                    <span className="text-sm text-muted-foreground">{metric?.label}</span>
                    <span className={`font-semibold ${metric?.color}`}>{metric?.value}</span>
                  </div>
                ))}
              </div>

              {/* Issues */}
              <div className="space-y-2">
                <h5 className="font-medium text-foreground">Problemas Identificados:</h5>
                {useCases?.[activeCase]?.before?.issues?.map((issue, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon name="X" size={16} className="text-error mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{issue}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">
                  {useCases?.[activeCase]?.after?.title}
                </h4>
              </div>
              
              <p className="text-muted-foreground">
                {useCases?.[activeCase]?.after?.description}
              </p>

              {/* Metrics */}
              <div className="space-y-3">
                {useCases?.[activeCase]?.after?.metrics?.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-success/10 rounded-lg">
                    <span className="text-sm text-muted-foreground">{metric?.label}</span>
                    <span className={`font-semibold ${metric?.color}`}>{metric?.value}</span>
                  </div>
                ))}
              </div>

              {/* Improvements */}
              <div className="space-y-2">
                <h5 className="font-medium text-foreground">Mejoras Implementadas:</h5>
                {useCases?.[activeCase]?.after?.improvements?.map((improvement, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{improvement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact Summary */}
          <div className="bg-muted/20 p-6 border-t border-border">
            <h5 className="font-semibold text-foreground mb-4 text-center">Impacto Medible</h5>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-gradient-medical mb-1">
                  {useCases?.[activeCase]?.impact?.lives}
                </div>
                <div className="text-sm text-muted-foreground">Impacto en Vidas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient-medical mb-1">
                  {useCases?.[activeCase]?.impact?.efficiency}
                </div>
                <div className="text-sm text-muted-foreground">Mejora Eficiencia</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient-medical mb-1">
                  {useCases?.[activeCase]?.impact?.cost}
                </div>
                <div className="text-sm text-muted-foreground">Ahorro Costos</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="default"
            size="lg"
            iconName="Calendar"
            iconPosition="left"
            className="bg-gradient-medical hover:opacity-90 shadow-medical-glow"
          >
            Solicitar Análisis de Caso Personalizado
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RealUseCasesSection;