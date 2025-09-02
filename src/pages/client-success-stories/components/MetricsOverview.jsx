import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricsOverview = () => {
  const overallMetrics = [
    {
      icon: "TrendingUp",
      label: "Reducción Promedio en Tiempo de Reporte",
      value: "42%",
      description: "Mejora en velocidad de entrega de resultados",
      color: "text-success"
    },
    {
      icon: "Activity",
      label: "Aumento en Capacidad de Procesamiento",
      value: "35%",
      description: "Más muestras procesadas diariamente",
      color: "text-primary"
    },
    {
      icon: "Users",
      label: "Satisfacción del Personal",
      value: "94%",
      description: "Empleados satisfechos con nuevos flujos",
      color: "text-secondary"
    },
    {
      icon: "Shield",
      label: "Reducción de Errores",
      value: "68%",
      description: "Menos errores en procesamiento de datos",
      color: "text-warning"
    },
    {
      icon: "DollarSign",
      label: "ROI Promedio",
      value: "280%",
      description: "Retorno de inversión en 12 meses",
      color: "text-accent"
    },
    {
      icon: "Clock",
      label: "Tiempo de Implementación",
      value: "14 días",
      description: "Promedio para estar completamente operativo",
      color: "text-success"
    }
  ];

  return (
    <div className="bg-gradient-medical-subtle rounded-2xl p-8 border border-primary/20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gradient-medical mb-3">
          Métricas en Tiempo Real
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Resultados agregados de nuestras 5 implementaciones activas en Venezuela, 
          actualizados con datos operacionales anonimizados.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {overallMetrics?.map((metric, index) => (
          <div key={index} className="data-card-medical group">
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-xl bg-background/50 ${metric?.color} group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={metric?.icon} size={24} className="current-color" />
              </div>
              <div className="flex-1">
                <div className={`text-3xl font-bold ${metric?.color} mb-1`}>
                  {metric?.value}
                </div>
                <div className="text-sm font-medium text-foreground mb-2">
                  {metric?.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric?.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 bg-background/30 rounded-xl border border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse-medical"></div>
            <span className="text-sm font-medium text-foreground">
              Datos actualizados en tiempo real
            </span>
          </div>
          <div className="text-xs text-muted-foreground">
            Última actualización: {new Date()?.toLocaleString('es-VE')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsOverview;