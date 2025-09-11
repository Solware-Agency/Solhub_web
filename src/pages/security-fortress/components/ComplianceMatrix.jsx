import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ComplianceMatrix = () => {
  const [selectedStandard, setSelectedStandard] = useState(0);

  const complianceStandards = [
    {
      id: 1,
      name: "ISO 27001",
      description: "Sistema de Gestión de Seguridad de la Información",
      status: "Certificado",
      compliance: 100,
      lastAudit: "15/07/2024",
      nextAudit: "15/07/2025",
      icon: "Award",
      color: "success",
      requirements: [
        {
          category: "Políticas de Seguridad",
          items: [
            { name: "Política de Seguridad de la Información", status: "Completo", progress: 100 },
            { name: "Revisión y Actualización de Políticas", status: "Completo", progress: 100 },
            { name: "Comunicación de Políticas", status: "Completo", progress: 100 }
          ]
        },
        {
          category: "Gestión de Activos",
          items: [
            { name: "Inventario de Activos", status: "Completo", progress: 100 },
            { name: "Clasificación de Información", status: "Completo", progress: 100 },
            { name: "Manejo de Medios", status: "Completo", progress: 100 }
          ]
        },
        {
          category: "Control de Acceso",
          items: [
            { name: "Gestión de Acceso de Usuarios", status: "Completo", progress: 100 },
            { name: "Autenticación Multifactor", status: "Completo", progress: 100 },
            { name: "Revisión de Derechos de Acceso", status: "Completo", progress: 100 }
          ]
        }
      ]
    }
  ];

  const currentStandard = complianceStandards?.[selectedStandard];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completo':
        return 'text-success bg-success/10 border-success/20';
      case 'En Progreso':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'Pendiente':
        return 'text-error bg-error/10 border-error/20';
      default:
        return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  const getComplianceColor = (compliance) => {
    if (compliance >= 98) return 'text-success';
    if (compliance >= 90) return 'text-warning';
    return 'text-error';
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container-medical">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Matriz de Cumplimiento Internacional
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SolHub cumple con los estándares internacionales más exigentes de seguridad y privacidad de datos médicos, 
            adaptándose también a las regulaciones venezolanas.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Standards Selector */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-4">Estándares de Cumplimiento</h3>
            <div className="space-y-3">
              {complianceStandards?.map((standard, index) => (
                <button
                  key={standard?.id}
                  onClick={() => setSelectedStandard(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    selectedStandard === index
                      ? `border-${standard?.color} bg-${standard?.color}/10`
                      : 'border-border bg-card/50 hover:bg-card/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Icon 
                        name={standard?.icon} 
                        size={16} 
                        color={`var(--color-${standard?.color})`} 
                      />
                      <span className="font-medium text-sm">{standard?.name}</span>
                    </div>
                    <span className={`text-xs font-medium ${getComplianceColor(standard?.compliance)}`}>
                      {standard?.compliance}%
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{standard?.description}</p>
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    standard?.status === 'Certificado' || standard?.status === 'Compliant' 
                      ? 'text-success bg-success/10 border border-success/20' :'text-primary bg-primary/10 border border-primary/20'
                  }`}>
                    {standard?.status}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Standard Details */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-xl p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-${currentStandard?.color}/10 rounded-lg flex items-center justify-center`}>
                    <Icon 
                      name={currentStandard?.icon} 
                      size={24} 
                      color={`var(--color-${currentStandard?.color})`} 
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{currentStandard?.name}</h3>
                    <p className="text-muted-foreground">{currentStandard?.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${getComplianceColor(currentStandard?.compliance)}`}>
                    {currentStandard?.compliance}%
                  </div>
                  <div className="text-sm text-muted-foreground">Cumplimiento</div>
                </div>
              </div>

              {/* Audit Info */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                  <Icon name="Calendar" size={16} color="var(--color-muted-foreground)" />
                  <div>
                    <div className="text-sm font-medium text-foreground">Última Auditoría</div>
                    <div className="text-xs text-muted-foreground">{currentStandard?.lastAudit}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                  <Icon name="Clock" size={16} color="var(--color-muted-foreground)" />
                  <div>
                    <div className="text-sm font-medium text-foreground">Próxima Auditoría</div>
                    <div className="text-xs text-muted-foreground">{currentStandard?.nextAudit}</div>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="space-y-6">
                {currentStandard?.requirements?.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h4 className="font-semibold text-foreground mb-3">{category?.category}</h4>
                    <div className="space-y-2">
                      {category?.items?.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-success rounded-full"></div>
                            <span className="text-sm text-foreground">{item?.name}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-24 bg-muted rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${
                                  item?.progress >= 98 ? 'bg-success' : 
                                  item?.progress >= 90 ? 'bg-warning' : 'bg-error'
                                }`}
                                style={{ width: `${item?.progress}%` }}
                              ></div>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(item?.status)}`}>
                              {item?.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Venezuelan Compliance Note */}
        <div className="mt-12 bg-card border border-border rounded-xl p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-venezuela-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="MapPin" size={24} color="#FCDD09" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Cumplimiento con Regulaciones Venezolanas</h4>
              <p className="text-muted-foreground mb-4">
                Además de los estándares internacionales, SolHub cumple con las regulaciones específicas de Venezuela 
                para el manejo de información médica y datos personales de salud.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} color="var(--color-success)" />
                  <span className="text-sm text-foreground">Ley de Protección de Datos Personales</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} color="var(--color-success)" />
                  <span className="text-sm text-foreground">Normativas del MPPS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} color="var(--color-success)" />
                  <span className="text-sm text-foreground">Regulaciones de Telemedicina</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceMatrix;