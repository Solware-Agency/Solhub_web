import React from 'react';
import Icon from '../../../components/AppIcon';

const ROIComparison = () => {
  const comparisonData = [
    {
      size: "Laboratorio Pequeño",
      description: "1-2 técnicos, 50-100 estudios/día",
      currentCosts: {
        monthly: 180000,
        items: ["Personal administrativo", "Papelería y archivos", "Errores manuales", "Tiempo de reportes"]
      },
      withSolHub: {
        monthly: 120000,
        items: ["Automatización completa", "Reportes digitales", "Reducción de errores", "Ahorro de tiempo"]
      },
      savings: 60000,
      savingsPercent: 33,
      paybackMonths: 3
    },
    {
      size: "Clínica Mediana",
      description: "3-5 técnicos, 200-400 estudios/día",
      currentCosts: {
        monthly: 450000,
        items: ["Múltiples administrativos", "Gestión de inventario manual", "Coordinación compleja", "Reportes tardíos"]
      },
      withSolHub: {
        monthly: 280000,
        items: ["Gestión centralizada", "Inventario automático", "Coordinación digital", "Reportes instantáneos"]
      },
      savings: 170000,
      savingsPercent: 38,
      paybackMonths: 2
    },
    {
      size: "Red de Diagnóstico",
      description: "6+ técnicos, 500+ estudios/día",
      currentCosts: {
        monthly: 720000,
        items: ["Equipo administrativo completo", "Múltiples sedes", "Coordinación manual", "Duplicación de procesos"]
      },
      withSolHub: {
        monthly: 420000,
        items: ["Gestión multi-sede", "Procesos unificados", "Coordinación automática", "Eficiencia escalable"]
      },
      savings: 300000,
      savingsPercent: 42,
      paybackMonths: 2
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Análisis de Retorno de Inversión
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Basado en datos reales de nuestras 5 implementaciones activas en Venezuela
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {comparisonData?.map((data, index) => (
          <div key={index} className="card-medical-elevated p-6 space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {data?.size}
              </h3>
              <p className="text-sm text-muted-foreground">
                {data?.description}
              </p>
            </div>

            {/* Current vs SolHub Comparison */}
            <div className="space-y-4">
              {/* Current Costs */}
              <div className="bg-error/10 border border-error/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="AlertTriangle" size={16} className="text-error" />
                    <span className="font-medium text-error">Proceso Actual</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-error">
                      Bs. {data?.currentCosts?.monthly?.toLocaleString('es-VE')}
                    </div>
                    <div className="text-xs text-muted-foreground">por mes</div>
                  </div>
                </div>
                <div className="space-y-1">
                  {data?.currentCosts?.items?.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <Icon name="Minus" size={12} className="text-error" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* With SolHub */}
              <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-success" />
                    <span className="font-medium text-success">Con SolHub</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-success">
                      Bs. {data?.withSolHub?.monthly?.toLocaleString('es-VE')}
                    </div>
                    <div className="text-xs text-muted-foreground">por mes</div>
                  </div>
                </div>
                <div className="space-y-1">
                  {data?.withSolHub?.items?.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <Icon name="Plus" size={12} className="text-success" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Savings Summary */}
            <div className="bg-gradient-medical-subtle border border-primary/20 rounded-lg p-4">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-gradient-medical">
                  Bs. {data?.savings?.toLocaleString('es-VE')}
                </div>
                <div className="text-sm text-muted-foreground">
                  Ahorro mensual ({data?.savingsPercent}%)
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <Icon name="Clock" size={14} className="text-primary" />
                  <span className="text-foreground">
                    Recuperación en {data?.paybackMonths} meses
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Additional ROI Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card-medical p-4 text-center">
          <div className="text-2xl font-bold text-success mb-1">35%</div>
          <div className="text-sm text-muted-foreground">Reducción promedio de costos</div>
        </div>
        <div className="card-medical p-4 text-center">
          <div className="text-2xl font-bold text-secondary mb-1">60%</div>
          <div className="text-sm text-muted-foreground">Menos tiempo en reportes</div>
        </div>
        <div className="card-medical p-4 text-center">
          <div className="text-2xl font-bold text-accent mb-1">90%</div>
          <div className="text-sm text-muted-foreground">Reducción de errores</div>
        </div>
        <div className="card-medical p-4 text-center">
          <div className="text-2xl font-bold text-warning mb-1">2.5</div>
          <div className="text-sm text-muted-foreground">Meses promedio de ROI</div>
        </div>
      </div>
    </div>
  );
};

export default ROIComparison;