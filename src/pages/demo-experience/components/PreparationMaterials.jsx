import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PreparationMaterials = () => {
  const [activeTab, setActiveTab] = useState('checklist');
  const [checkedItems, setCheckedItems] = useState({});

  const preparationTabs = [
    { id: 'checklist', label: 'Lista de Verificación', icon: 'CheckSquare' },
    { id: 'questions', label: 'Preguntas Sugeridas', icon: 'HelpCircle' },
    { id: 'workflow', label: 'Documentar Flujos', icon: 'GitBranch' },
    { id: 'roi', label: 'Calculadora ROI', icon: 'Calculator' }
  ];

  const checklistItems = [
    {
      category: 'Información Organizacional',
      items: [
        'Número aproximado de pruebas mensuales',
        'Tipos de pruebas más frecuentes',
        'Número de técnicos y personal administrativo',
        'Horarios de operación del laboratorio',
        'Ubicaciones o sucursales adicionales'
      ]
    },
    {
      category: 'Sistemas Actuales',
      items: [
        'Software actual utilizado (si existe)',
        'Equipos de laboratorio principales',
        'Método actual de gestión de pacientes',
        'Proceso de entrega de resultados',
        'Sistema de facturación existente'
      ]
    },
    {
      category: 'Desafíos Principales',
      items: [
        'Principales problemas operativos',
        'Tiempo promedio de entrega de resultados',
        'Errores más comunes en el proceso',
        'Quejas frecuentes de pacientes',
        'Dificultades con seguros médicos'
      ]
    },
    {
      category: 'Objetivos y Expectativas',
      items: [
        'Metas de mejora operativa',
        'Presupuesto aproximado disponible',
        'Cronograma deseado de implementación',
        'Métricas de éxito esperadas',
        'Requisitos específicos de integración'
      ]
    }
  ];

  const suggestedQuestions = [
    {
      category: 'Funcionalidades del Sistema',
      questions: [
        '¿Cómo maneja IBEX la integración con equipos de laboratorio existentes?',
        '¿Qué tipos de reportes y análisis están disponibles?',
        '¿Cómo funciona el sistema de alertas y notificaciones?',
        '¿Puede el sistema manejar múltiples ubicaciones?',
        '¿Qué opciones de personalización están disponibles?'
      ]
    },
    {
      category: 'Implementación y Soporte',
      questions: [
        '¿Cuánto tiempo toma típicamente la implementación?',
        '¿Qué tipo de capacitación se proporciona al personal?',
        '¿Cómo es el proceso de migración de datos existentes?',
        '¿Qué nivel de soporte técnico está incluido?',
        '¿Hay costos adicionales por configuración o personalización?'
      ]
    },
    {
      category: 'Seguridad y Cumplimiento',
      questions: [
        '¿Qué medidas de seguridad protegen los datos de pacientes?',
        '¿Cumple con las regulaciones médicas venezolanas?',
        '¿Cómo se realizan las copias de seguridad de datos?',
        '¿Qué certificaciones de seguridad posee el sistema?',
        '¿Cómo se controla el acceso por roles de usuario?'
      ]
    },
    {
      category: 'Costos y ROI',
      questions: [
        '¿Cuál es la estructura de precios y qué incluye?',
        '¿Existen costos ocultos o tarifas adicionales?',
        '¿Qué ROI han experimentado otros laboratorios similares?',
        '¿Hay opciones de financiamiento o planes de pago?',
        '¿Cuáles son los costos de mantenimiento a largo plazo?'
      ]
    }
  ];

  const workflowTemplates = [
    {
      title: 'Flujo de Registro de Pacientes',
      description: 'Documente cómo registran actualmente a los pacientes',
      steps: [
        'Recepción del paciente',
        'Verificación de datos personales',
        'Confirmación de seguro médico',
        'Asignación de número de orden',
        'Entrega de instrucciones'
      ]
    },
    {
      title: 'Proceso de Toma de Muestras',
      description: 'Mapee el proceso actual de recolección',
      steps: [
        'Preparación del área de trabajo',
        'Verificación de identidad del paciente',
        'Toma de muestra según protocolo',
        'Etiquetado y codificación',
        'Almacenamiento temporal'
      ]
    },
    {
      title: 'Análisis y Procesamiento',
      description: 'Detalle el flujo de análisis de muestras',
      steps: [
        'Recepción en laboratorio',
        'Distribución por tipo de prueba',
        'Procesamiento en equipos',
        'Control de calidad',
        'Validación de resultados'
      ]
    },
    {
      title: 'Entrega de Resultados',
      description: 'Proceso actual de entrega a pacientes',
      steps: [
        'Preparación de reportes',
        'Revisión médica final',
        'Notificación al paciente',
        'Entrega física o digital',
        'Archivo de documentos'
      ]
    }
  ];

  const roiFactors = [
    {
      category: 'Ahorros en Tiempo',
      description: 'Reducción en horas de trabajo manual',
      currentValue: '',
      improvedValue: '',
      unit: 'horas/semana'
    },
    {
      category: 'Reducción de Errores',
      description: 'Disminución en errores de transcripción',
      currentValue: '',
      improvedValue: '',
      unit: 'errores/mes'
    },
    {
      category: 'Aumento de Productividad',
      description: 'Incremento en pruebas procesadas',
      currentValue: '',
      improvedValue: '',
      unit: 'pruebas/día'
    },
    {
      category: 'Satisfacción del Cliente',
      description: 'Mejora en tiempo de entrega',
      currentValue: '',
      improvedValue: '',
      unit: 'días promedio'
    }
  ];

  const handleChecklistToggle = (category, item) => {
    const key = `${category}-${item}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev?.[key]
    }));
  };

  const renderChecklist = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-foreground mb-2">
          Lista de Verificación Pre-Demo
        </h4>
        <p className="text-muted-foreground">
          Prepare esta información para maximizar el valor de su demostración
        </p>
      </div>

      {checklistItems?.map((section, sectionIndex) => (
        <div key={sectionIndex} className="bg-muted/20 rounded-lg p-4">
          <h5 className="text-md font-medium text-foreground mb-3 flex items-center space-x-2">
            <Icon name="Folder" size={16} className="text-primary" />
            <span>{section?.category}</span>
          </h5>
          <div className="space-y-2">
            {section?.items?.map((item, itemIndex) => {
              const key = `${section?.category}-${item}`;
              return (
                <label key={itemIndex} className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checkedItems?.[key] || false}
                    onChange={() => handleChecklistToggle(section?.category, item)}
                    className="mt-1 w-4 h-4 text-primary rounded"
                  />
                  <span className={`text-sm ${checkedItems?.[key] ? 'text-foreground line-through' : 'text-muted-foreground'}`}>
                    {item}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      ))}

      <div className="bg-success/10 border border-success/20 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Lightbulb" size={16} className="text-success" />
          <span className="text-sm font-medium text-foreground">Consejo</span>
        </div>
        <p className="text-sm text-muted-foreground">
          No se preocupe si no tiene toda la información. Nuestro equipo puede ayudarle a identificar y documentar estos elementos durante el demo.
        </p>
      </div>
    </div>
  );

  const renderQuestions = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-foreground mb-2">
          Preguntas Sugeridas para el Demo
        </h4>
        <p className="text-muted-foreground">
          Use estas preguntas como guía para obtener la información más relevante
        </p>
      </div>

      {suggestedQuestions?.map((section, sectionIndex) => (
        <div key={sectionIndex} className="bg-muted/20 rounded-lg p-4">
          <h5 className="text-md font-medium text-foreground mb-3 flex items-center space-x-2">
            <Icon name="MessageSquare" size={16} className="text-secondary" />
            <span>{section?.category}</span>
          </h5>
          <div className="space-y-3">
            {section?.questions?.map((question, questionIndex) => (
              <div key={questionIndex} className="flex items-start space-x-3">
                <Icon name="ChevronRight" size={14} className="text-primary mt-0.5" />
                <p className="text-sm text-muted-foreground">{question}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderWorkflow = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-foreground mb-2">
          Plantillas de Documentación
        </h4>
        <p className="text-muted-foreground">
          Use estas plantillas para documentar sus procesos actuales
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {workflowTemplates?.map((template, index) => (
          <div key={index} className="bg-muted/20 rounded-lg p-4">
            <h5 className="text-md font-medium text-foreground mb-2">
              {template?.title}
            </h5>
            <p className="text-sm text-muted-foreground mb-3">
              {template?.description}
            </p>
            <div className="space-y-2">
              {template?.steps?.map((step, stepIndex) => (
                <div key={stepIndex} className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">{stepIndex + 1}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{step}</span>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="w-full mt-3"
              iconName="Download"
              iconPosition="left"
            >
              Descargar Plantilla
            </Button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderROI = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-foreground mb-2">
          Calculadora de ROI
        </h4>
        <p className="text-muted-foreground">
          Estime el retorno de inversión potencial con IBEX Medical
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {roiFactors?.map((factor, index) => (
          <div key={index} className="bg-muted/20 rounded-lg p-4">
            <h5 className="text-md font-medium text-foreground mb-2">
              {factor?.category}
            </h5>
            <p className="text-sm text-muted-foreground mb-3">
              {factor?.description}
            </p>
            <div className="space-y-2">
              <div>
                <label className="text-xs text-muted-foreground">Situación Actual</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    placeholder="0"
                    className="flex-1 px-3 py-2 bg-input border border-border rounded-lg text-sm"
                  />
                  <span className="text-xs text-muted-foreground">{factor?.unit}</span>
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Con IBEX Medical</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    placeholder="0"
                    className="flex-1 px-3 py-2 bg-input border border-border rounded-lg text-sm"
                  />
                  <span className="text-xs text-muted-foreground">{factor?.unit}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-medical/10 border border-primary/20 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="TrendingUp" size={16} className="text-primary" />
          <span className="text-sm font-medium text-foreground">Estimación de ROI</span>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          Complete los campos anteriores para ver una estimación personalizada de retorno de inversión.
        </p>
        <Button
          variant="default"
          size="sm"
          iconName="Calculator"
          iconPosition="left"
          className="bg-gradient-medical"
        >
          Calcular ROI Estimado
        </Button>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'checklist':
        return renderChecklist();
      case 'questions':
        return renderQuestions();
      case 'workflow':
        return renderWorkflow();
      case 'roi':
        return renderROI();
      default:
        return renderChecklist();
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
          <Icon name="BookOpen" size={20} className="text-warning" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            Materiales de Preparación
          </h3>
          <p className="text-sm text-muted-foreground">
            Recursos para maximizar el valor de su demostración
          </p>
        </div>
      </div>
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-border">
        {preparationTabs?.map(tab => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-t-lg transition-all duration-200 ${
              activeTab === tab?.id
                ? 'bg-primary/10 text-primary border-b-2 border-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span className="text-sm font-medium">{tab?.label}</span>
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="min-h-[400px]">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default PreparationMaterials;