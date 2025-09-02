import React from 'react';
import Icon from '../../../components/AppIcon';

const PaymentOptions = () => {
  const paymentMethods = [
    {
      icon: "CreditCard",
      title: "Transferencia Bancaria",
      description: "Pago mensual o anual con descuentos por adelantado",
      features: ["Descuento 10% pago anual", "Facturación automática", "Soporte prioritario"],
      popular: true
    },
    {
      icon: "DollarSign",
      title: "Pago en USD",
      description: "Para clientes con cuentas en moneda extranjera",
      features: ["Tipo de cambio fijo", "Facturación en dólares", "Protección cambiaria"],
      popular: false
    },
    {
      icon: "Calendar",
      title: "Plan Flexible",
      description: "Pagos escalonados según implementación",
      features: ["Pago inicial 30%", "Resto en 3 cuotas", "Sin intereses adicionales"],
      popular: false
    }
  ];

  const implementationSchedule = [
    {
      phase: "Fase 1: Configuración Inicial",
      duration: "Semana 1-2",
      payment: "30% del total",
      activities: ["Configuración de servidor", "Instalación básica", "Migración de datos iniciales"]
    },
    {
      phase: "Fase 2: Capacitación y Pruebas",
      duration: "Semana 3-4",
      payment: "40% del total",
      activities: ["Capacitación del personal", "Pruebas de sistema", "Ajustes personalizados"]
    },
    {
      phase: "Fase 3: Go-Live y Soporte",
      duration: "Semana 5-6",
      payment: "30% del total",
      activities: ["Puesta en producción", "Soporte intensivo", "Optimización final"]
    }
  ];

  const venezuelanConsiderations = [
    {
      icon: "Wifi",
      title: "Conectividad",
      description: "Evaluación de infraestructura de internet",
      requirement: "Mínimo 10 Mbps estables"
    },
    {
      icon: "Zap",
      title: "Energía Eléctrica",
      description: "Recomendaciones para continuidad operativa",
      requirement: "UPS recomendado para equipos críticos"
    },
    {
      icon: "Users",
      title: "Capacitación",
      description: "Entrenamiento adaptado al personal local",
      requirement: "2-3 sesiones por rol de usuario"
    },
    {
      icon: "Headphones",
      title: "Soporte Local",
      description: "Asistencia técnica en horario venezolano",
      requirement: "Lunes a viernes 8AM-6PM VET"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-foreground">
          Opciones de Pago y Implementación
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Planes de pago flexibles diseñados para la realidad empresarial venezolana, 
          con opciones que se adaptan a diferentes flujos de caja.
        </p>
      </div>
      {/* Payment Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paymentMethods?.map((method, index) => (
          <div
            key={index}
            className={`card-medical-elevated p-6 space-y-4 relative ${
              method?.popular ? 'border-primary shadow-lg shadow-primary/20' : ''
            }`}
          >
            {method?.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-medical text-white px-4 py-1 rounded-full text-sm font-medium">
                  Más Popular
                </div>
              </div>
            )}
            
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                method?.popular ? 'bg-gradient-medical' : 'bg-muted'
              }`}>
                <Icon 
                  name={method?.icon} 
                  size={24} 
                  color={method?.popular ? 'white' : 'currentColor'} 
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {method?.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {method?.description}
              </p>
            </div>

            <div className="space-y-2">
              {method?.features?.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-sm">
                  <Icon name="Check" size={14} className="text-success" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Implementation Schedule */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Cronograma de Implementación
          </h3>
          <p className="text-muted-foreground">
            Proceso estructurado para garantizar una transición exitosa
          </p>
        </div>

        <div className="space-y-4">
          {implementationSchedule?.map((phase, index) => (
            <div key={index} className="card-medical p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <h4 className="text-lg font-bold text-foreground">
                      {phase?.phase}
                    </h4>
                  </div>
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="Clock" size={14} className="text-secondary" />
                      <span className="text-muted-foreground">{phase?.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="CreditCard" size={14} className="text-success" />
                      <span className="text-success font-medium">{phase?.payment}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {phase?.activities?.map((activity, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <Icon name="Dot" size={12} className="text-primary" />
                        <span className="text-muted-foreground">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Venezuelan Considerations */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Consideraciones para Venezuela
          </h3>
          <p className="text-muted-foreground">
            Aspectos específicos del mercado venezolano que consideramos en cada implementación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {venezuelanConsiderations?.map((consideration, index) => (
            <div key={index} className="card-medical p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-warning/20 rounded-xl flex items-center justify-center mx-auto">
                <Icon name={consideration?.icon} size={20} className="text-warning" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">
                  {consideration?.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {consideration?.description}
                </p>
                <div className="bg-warning/10 border border-warning/20 rounded-lg p-2">
                  <div className="text-xs font-medium text-warning">
                    {consideration?.requirement}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Support Information */}
      <div className="bg-gradient-medical-subtle border border-primary/20 rounded-xl p-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Headphones" size={24} className="text-primary" />
            <h3 className="text-xl font-bold text-foreground">
              Soporte Especializado para Venezuela
            </h3>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Nuestro equipo entiende las particularidades del mercado médico venezolano 
            y está preparado para brindar soporte especializado durante todo el proceso.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Soporte técnico crítico</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary mb-1">5</div>
              <div className="text-sm text-muted-foreground">Sedes activas en Venezuela</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Implementaciones exitosas</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;