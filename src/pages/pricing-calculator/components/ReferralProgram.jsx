import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ReferralProgram = () => {
  const referralBenefits = [
    {
      icon: "Gift",
      title: "20% de Descuento",
      description: "El nuevo cliente obtiene 20% de descuento en su primer año de suscripción"
    },
    {
      icon: "CreditCard",
      title: "Crédito para Ti",
      description: "Recibe el equivalente a 2 meses gratis en tu próxima facturación"
    },
    {
      icon: "Users",
      title: "Sin Límites",
      description: "Refiere tantos clientes como quieras, cada referido exitoso te da más beneficios"
    },
    {
      icon: "Zap",
      title: "Activación Inmediata",
      description: "Los beneficios se aplican automáticamente una vez confirmada la implementación"
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Comparte tu Experiencia",
      description: "Recomienda IBEX Medical a otros laboratorios o clínicas que conozcas"
    },
    {
      step: 2,
      title: "Ellos Mencionan tu Referencia",
      description: "El nuevo cliente debe mencionar tu nombre durante el proceso de contratación"
    },
    {
      step: 3,
      title: "Implementación Exitosa",
      description: "Una vez completada la implementación, ambos reciben sus beneficios"
    },
    {
      step: 4,
      title: "Disfruta los Beneficios",
      description: "Créditos aplicados automáticamente y descuentos activados"
    }
  ];

  const successStories = [
    {
      referrer: "Dr. María González - Laboratorio Central Caracas",
      referred: "Clínica San Rafael",
      savings: "Bs. 240,000",
      quote: `Recomendé IBEX porque transformó completamente nuestros procesos. 
      Ver que San Rafael también está teniendo excelentes resultados me da mucha satisfacción.`
    },
    {
      referrer: "Laboratorio Diagnóstico Valencia",
      referred: "Centro Médico Integral",
      savings: "Bs. 180,000",
      quote: `El programa de referidos es una excelente forma de ayudar a colegas 
      mientras obtenemos beneficios. Todos ganamos con IBEX Medical.`
    }
  ];

  const handleStartReferral = () => {
    // WhatsApp message for referral program
    const message = encodeURIComponent(
      "Hola, soy cliente de IBEX Medical y me interesa participar en el programa de referidos. ¿Pueden darme más información?"
    );
    window.open(`https://wa.me/584241234567?text=${message}`, '_blank');
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-medical rounded-xl flex items-center justify-center shadow-medical-glow">
            <Icon name="Gift" size={24} color="white" strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl font-bold text-gradient-medical">
            Programa de Referidos IBEX
          </h2>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comparte tu experiencia exitosa con IBEX Medical y obtén beneficios exclusivos. 
          Ayuda a otros profesionales médicos mientras recibes recompensas.
        </p>
      </div>
      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {referralBenefits?.map((benefit, index) => (
          <div key={index} className="card-medical-elevated p-6 text-center space-y-4 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-medical rounded-xl flex items-center justify-center mx-auto shadow-medical-glow">
              <Icon name={benefit?.icon} size={24} color="white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {benefit?.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* How It Works */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            ¿Cómo Funciona?
          </h3>
          <p className="text-muted-foreground">
            Proceso simple y transparente para maximizar beneficios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks?.map((step, index) => (
            <div key={index} className="relative">
              <div className="card-medical p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                  {step?.step}
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    {step?.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {step?.description}
                  </p>
                </div>
              </div>
              
              {/* Arrow connector */}
              {index < howItWorks?.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <Icon name="ArrowRight" size={24} className="text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Success Stories */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Historias de Éxito
          </h3>
          <p className="text-muted-foreground">
            Clientes que ya están disfrutando los beneficios del programa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {successStories?.map((story, index) => (
            <div key={index} className="card-medical-elevated p-6 space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Quote" size={20} className="text-success" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-foreground italic mb-4">
                    "{story?.quote}"
                  </blockquote>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-primary">
                        {story?.referrer}
                      </span>
                      <span className="text-sm text-success font-semibold">
                        Ahorró {story?.savings}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Refirió a: {story?.referred}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-gradient-medical-subtle border border-primary/20 rounded-xl p-8 text-center space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            ¿Listo para Comenzar a Referir?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Únete a nuestro programa de referidos y comienza a obtener beneficios 
            mientras ayudas a otros profesionales médicos a transformar sus laboratorios.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Button
            variant="default"
            onClick={handleStartReferral}
            iconName="MessageCircle"
            iconPosition="left"
            className="bg-gradient-medical hover:opacity-90 shadow-medical-glow"
          >
            Comenzar a Referir
          </Button>
          <Button
            variant="outline"
            iconName="Download"
            iconPosition="left"
            className="border-primary text-primary hover:bg-primary/10"
          >
            Descargar Guía
          </Button>
        </div>

        <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={16} />
            <span>Programa verificado</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} />
            <span>Beneficios inmediatos</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Users" size={16} />
            <span>Sin límite de referidos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralProgram;