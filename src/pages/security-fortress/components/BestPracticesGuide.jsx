import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const BestPracticesGuide = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const practiceCategories = [
    {
      id: 1,
      name: "Gestión de Contraseñas",
      icon: "Key",
      color: "primary",
      description: "Políticas y mejores prácticas para la gestión segura de credenciales",
      practices: [
        {
          title: "Contraseñas Robustas",
          description: "Utilizar contraseñas de al menos 12 caracteres con combinación de mayúsculas, minúsculas, números y símbolos",
          implementation: "IBEX Medical requiere contraseñas que cumplan estos criterios y las evalúa automáticamente",
          icon: "Shield",
          level: "Obligatorio"
        },
        {
          title: "Autenticación Multifactor (MFA)",
          description: "Implementar verificación en dos pasos para todos los usuarios del sistema",
          implementation: "Integración con aplicaciones como Google Authenticator o SMS para verificación adicional",
          icon: "Smartphone",
          level: "Obligatorio"
        },
        {
          title: "Rotación Regular de Credenciales",
          description: "Cambiar contraseñas cada 90 días y inmediatamente tras cualquier sospecha de compromiso",
          implementation: "Recordatorios automáticos y políticas de expiración configurables por rol",
          icon: "RotateCcw",
          level: "Recomendado"
        },
        {
          title: "Gestión de Cuentas Inactivas",
          description: "Desactivar automáticamente cuentas que no han sido utilizadas en 30 días",
          implementation: "Monitoreo automático de actividad y desactivación programada de cuentas inactivas",
          icon: "UserX",
          level: "Obligatorio"
        }
      ]
    },
    {
      id: 2,
      name: "Protección de Datos",
      icon: "Database",
      color: "success",
      description: "Estrategias para mantener la integridad y confidencialidad de los datos médicos",
      practices: [
        {
          title: "Encriptación de Datos en Reposo",
          description: "Todos los datos almacenados deben estar encriptados usando AES-256",
          implementation: "IBEX Medical encripta automáticamente toda la información médica almacenada",
          icon: "Lock",
          level: "Obligatorio"
        },
        {
          title: "Encriptación en Tránsito",
          description: "Utilizar TLS 1.3 para todas las comunicaciones entre cliente y servidor",
          implementation: "Certificados SSL/TLS renovados automáticamente y configuración de seguridad máxima",
          icon: "Wifi",
          level: "Obligatorio"
        },
        {
          title: "Respaldos Seguros",
          description: "Realizar respaldos encriptados diarios con almacenamiento en múltiples ubicaciones",
          implementation: "Respaldos automáticos cada 6 horas con verificación de integridad y encriptación",
          icon: "HardDrive",
          level: "Obligatorio"
        },
        {
          title: "Clasificación de Datos",
          description: "Categorizar la información según su nivel de sensibilidad y aplicar controles apropiados",
          implementation: "Sistema automático de etiquetado y aplicación de políticas según clasificación",
          icon: "Tags",
          level: "Recomendado"
        }
      ]
    },
    {
      id: 3,
      name: "Control de Acceso",
      icon: "UserCheck",
      color: "secondary",
      description: "Principios para gestionar quién puede acceder a qué información y cuándo",
      practices: [
        {
          title: "Principio de Menor Privilegio",
          description: "Otorgar únicamente los permisos mínimos necesarios para realizar las funciones del rol",
          implementation: "Permisos granulares por módulo y función, revisión trimestral de accesos",
          icon: "Minimize",
          level: "Obligatorio"
        },
        {
          title: "Segregación de Funciones",
          description: "Separar responsabilidades críticas entre diferentes usuarios para prevenir fraudes",
          implementation: "Roles predefinidos con separación clara de responsabilidades administrativas y operativas",
          icon: "Users",
          level: "Obligatorio"
        },
        {
          title: "Revisión Periódica de Accesos",
          description: "Auditar mensualmente los permisos de usuario y remover accesos innecesarios",
          implementation: "Reportes automáticos de accesos por usuario con alertas de permisos no utilizados",
          icon: "Search",
          level: "Obligatorio"
        },
        {
          title: "Control de Acceso Basado en Tiempo",
          description: "Restringir el acceso al sistema según horarios laborales y turnos asignados",
          implementation: "Configuración de ventanas de acceso por usuario con excepciones para emergencias",
          icon: "Clock",
          level: "Recomendado"
        }
      ]
    },
    {
      id: 4,
      name: "Monitoreo y Auditoría",
      icon: "Activity",
      color: "accent",
      description: "Sistemas de vigilancia y registro para detectar y responder a incidentes de seguridad",
      practices: [
        {
          title: "Registro Completo de Actividades",
          description: "Documentar todas las acciones realizadas en el sistema con timestamp y usuario",
          implementation: "Logs inmutables con información detallada de cada transacción y acceso",
          icon: "FileText",
          level: "Obligatorio"
        },
        {
          title: "Monitoreo en Tiempo Real",
          description: "Supervisión continua de actividades sospechosas y patrones anómalos",
          implementation: "Alertas automáticas por intentos de acceso fallidos, horarios inusuales y patrones anómalos",
          icon: "Eye",
          level: "Obligatorio"
        },
        {
          title: "Análisis de Comportamiento",
          description: "Detectar desviaciones en los patrones normales de uso del sistema",
          implementation: "IA que aprende patrones de uso normal y alerta sobre comportamientos atípicos",
          icon: "TrendingUp",
          level: "Recomendado"
        },
        {
          title: "Reportes de Cumplimiento",
          description: "Generar reportes regulares para auditorías internas y externas",
          implementation: "Dashboards automáticos con métricas de seguridad y reportes programados",
          icon: "BarChart",
          level: "Obligatorio"
        }
      ]
    },
    {
      id: 5,
      name: "Respuesta a Incidentes",
      icon: "AlertTriangle",
      color: "warning",
      description: "Procedimientos para identificar, contener y resolver incidentes de seguridad",
      practices: [
        {
          title: "Plan de Respuesta a Incidentes",
          description: "Procedimientos documentados para diferentes tipos de incidentes de seguridad",
          implementation: "Playbooks automatizados con escalación según severidad y tipo de incidente",
          icon: "BookOpen",
          level: "Obligatorio"
        },
        {
          title: "Notificación Automática",
          description: "Alertar inmediatamente al equipo de seguridad cuando se detecte un incidente",
          implementation: "Sistema de alertas por múltiples canales (email, SMS, WhatsApp) según criticidad",
          icon: "Bell",
          level: "Obligatorio"
        },
        {
          title: "Aislamiento Rápido",
          description: "Capacidad de aislar sistemas comprometidos sin afectar operaciones críticas",
          implementation: "Controles de red que permiten aislamiento granular por sede o usuario",
          icon: "Shield",
          level: "Obligatorio"
        },
        {
          title: "Análisis Forense",
          description: "Preservar evidencia digital para investigación posterior de incidentes",
          implementation: "Herramientas de captura y análisis forense integradas con cadena de custodia digital",
          icon: "Search",
          level: "Recomendado"
        }
      ]
    }
  ];

  const currentCategory = practiceCategories?.[activeCategory];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Obligatorio':
        return 'text-error bg-error/10 border-error/20';
      case 'Recomendado':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'Opcional':
        return 'text-secondary bg-secondary/10 border-secondary/20';
      default:
        return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container-medical">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Icon name="BookOpen" size={16} color="var(--color-primary)" />
            <span className="text-primary font-semibold text-sm">Mejores Prácticas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Guía de Mejores Prácticas de Seguridad
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recomendaciones esenciales para mantener la máxima seguridad en tu laboratorio médico, 
            basadas en estándares internacionales y experiencia en el mercado venezolano.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Selector */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-4">Categorías de Seguridad</h3>
            <div className="space-y-3">
              {practiceCategories?.map((category, index) => (
                <button
                  key={category?.id}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    activeCategory === index
                      ? `border-${category?.color} bg-${category?.color}/10`
                      : 'border-border bg-card/50 hover:bg-card/70'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon 
                      name={category?.icon} 
                      size={20} 
                      color={`var(--color-${category?.color})`} 
                    />
                    <span className="font-medium text-sm">{category?.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{category?.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Practices Details */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-xl p-6">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-12 h-12 bg-${currentCategory?.color}/10 rounded-lg flex items-center justify-center`}>
                  <Icon 
                    name={currentCategory?.icon} 
                    size={24} 
                    color={`var(--color-${currentCategory?.color})`} 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{currentCategory?.name}</h3>
                  <p className="text-muted-foreground">{currentCategory?.description}</p>
                </div>
              </div>

              {/* Practices List */}
              <div className="space-y-6">
                {currentCategory?.practices?.map((practice, index) => (
                  <div key={index} className="border border-border rounded-xl p-6 hover:bg-muted/10 transition-colors duration-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-${currentCategory?.color}/10 rounded-lg flex items-center justify-center`}>
                          <Icon 
                            name={practice?.icon} 
                            size={20} 
                            color={`var(--color-${currentCategory?.color})`} 
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{practice?.title}</h4>
                          <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(practice?.level)}`}>
                            {practice?.level}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-foreground mb-2">Descripción</h5>
                        <p className="text-sm text-muted-foreground">{practice?.description}</p>
                      </div>

                      <div>
                        <h5 className="font-medium text-foreground mb-2">Implementación en IBEX Medical</h5>
                        <div className="flex items-start space-x-3 p-3 bg-success/5 border border-success/20 rounded-lg">
                          <Icon name="CheckCircle" size={16} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-foreground">{practice?.implementation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference Card */}
        <div className="mt-12 bg-gradient-medical rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <Icon name="Zap" size={32} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Checklist Rápido de Seguridad</h3>
            <p className="opacity-90">Elementos esenciales que todo laboratorio debe implementar</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Key" size={24} />
              </div>
              <h4 className="font-semibold mb-1">MFA Activado</h4>
              <p className="text-sm opacity-80">Autenticación multifactor para todos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Lock" size={24} />
              </div>
              <h4 className="font-semibold mb-1">Datos Encriptados</h4>
              <p className="text-sm opacity-80">AES-256 en reposo y TLS en tránsito</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Eye" size={24} />
              </div>
              <h4 className="font-semibold mb-1">Monitoreo 24/7</h4>
              <p className="text-sm opacity-80">Vigilancia continua de actividades</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="HardDrive" size={24} />
              </div>
              <h4 className="font-semibold mb-1">Respaldos Seguros</h4>
              <p className="text-sm opacity-80">Copias encriptadas automáticas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestPracticesGuide;