import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingPreview = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      subtitle: 'Para laboratorios pequeños',
      price: {
        bs: '2.850',
        usd: '75'
      },
      period: 'mes',
      description: 'Perfecto para laboratorios independientes que inician su transformación digital',
      features: [
        'Gestión básica de muestras',
        'Reportes estándar',
        'Hasta 5 usuarios',
        'Soporte por email',
        'Backup diario',
        'Seguridad básica'
      ],
      limitations: [
        'Sin IA avanzada',
        'Reportes limitados'
      ],
      popular: false,
      cta: 'Comenzar Prueba'
    },
    {
      id: 'professional',
      name: 'Professional',
      subtitle: 'Más popular para clínicas',
      price: {
        bs: '4.750',
        usd: '125'
      },
      period: 'mes',
      description: 'La opción preferida por clínicas medianas con laboratorio integrado',
      features: [
        'Gestión completa de muestras',
        'IA para detección de anomalías',
        'Reportes con sugerencias',
        'Hasta 15 usuarios',
        'Soporte prioritario 24/7',
        'Seguridad avanzada por sede',
        'Analytics básico',
        'Integración con equipos'
      ],
      limitations: [],
      popular: true,
      cta: 'Demo Personalizado'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      subtitle: 'Para redes de laboratorios',
      price: {
        bs: 'Personalizado',
        usd: 'Custom'
      },
      period: 'sede',
      description: 'Solución completa para redes de laboratorios con múltiples ubicaciones',
      features: [
        'Todos los módulos incluidos',
        'IA avanzada y predictiva',
        'Reportes ejecutivos completos',
        'Usuarios ilimitados',
        'Soporte dedicado 24/7',
        'Seguridad enterprise',
        'Analytics avanzado',
        'Integraciones personalizadas',
        'Onboarding guiado',
        'SLA garantizado'
      ],
      limitations: [],
      popular: false,
      cta: 'Contactar Ventas'
    }
  ];

  const addOns = [
    {
      name: 'Módulo de Facturación',
      price: { bs: '950', usd: '25' },
      description: 'Facturación automática integrada con contabilidad'
    },
    {
      name: 'Telemedicina',
      price: { bs: '1.140', usd: '30' },
      description: 'Consultas remotas y entrega digital de resultados'
    },
    {
      name: 'API Personalizada',
      price: { bs: '1.900', usd: '50' },
      description: 'Integraciones específicas con sistemas existentes'
    }
  ];

  return (
    <section className="py-20 bg-muted/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container-medical relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-warning/10 border border-warning/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Calculator" size={16} className="text-warning" />
            <span className="text-sm font-medium text-warning">Precios Transparentes</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Inversión que</span>
            <br />
            <span className="text-gradient-medical">se paga sola</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Precios en bolívares con referencia USD. Sin costos ocultos, 
            con programa de referidos del 20% de descuento.
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex items-center bg-card border border-border rounded-lg p-1">
            <span className="px-3 py-1 text-sm font-medium text-foreground">Bs.</span>
            <span className="px-3 py-1 text-sm text-muted-foreground">(USD ref.)</span>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans?.map((plan) => (
            <div
              key={plan?.id}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover-lift ${
                plan?.popular
                  ? 'border-primary bg-card shadow-lg ring-2 ring-primary/20'
                  : 'border-border bg-card/50 hover:border-primary/30'
              }`}
            >
              {/* Popular Badge */}
              {plan?.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-medical text-white px-4 py-1 rounded-full text-sm font-medium">
                    Más Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan?.name}</h3>
                <p className="text-primary font-medium mb-4">{plan?.subtitle}</p>
                
                <div className="mb-4">
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-4xl font-bold text-gradient-medical">
                      {plan?.price?.bs === 'Personalizado' ? 'Custom' : `Bs. ${plan?.price?.bs}`}
                    </span>
                    {plan?.price?.bs !== 'Personalizado' && (
                      <span className="text-muted-foreground">/{plan?.period}</span>
                    )}
                  </div>
                  {plan?.price?.bs !== 'Personalizado' && (
                    <div className="text-sm text-muted-foreground mt-1">
                      (≈ ${plan?.price?.usd} USD)
                    </div>
                  )}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {plan?.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {plan?.features?.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan?.limitations?.map((limitation, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Icon name="X" size={16} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm line-through">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Button
                variant={plan?.popular ? "default" : "outline"}
                fullWidth
                className={plan?.popular ? "bg-gradient-medical hover:opacity-90" : "border-primary/30 text-primary hover:bg-primary/10"}
              >
                {plan?.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Módulos Adicionales
            </h3>
            <p className="text-lg text-muted-foreground">
              Expande tu solución con módulos especializados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {addOns?.map((addon, index) => (
              <div key={index} className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-foreground">{addon?.name}</h4>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">Bs. {addon?.price?.bs}</div>
                    <div className="text-xs text-muted-foreground">(${addon?.price?.usd} USD)</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{addon?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Referral Program */}
        <div className="bg-gradient-medical/10 border border-primary/20 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Gift" size={24} color="white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Programa de Referidos
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Recomienda IBEX Medical a otros laboratorios y obtén un 20% de descuento 
              en tu próxima facturación por cada referido exitoso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="Users"
                iconPosition="left"
                className="bg-gradient-medical hover:opacity-90"
              >
                Conocer Programa
              </Button>
              <Button
                variant="outline"
                iconName="Share"
                iconPosition="left"
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                Compartir Ahora
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            ¿Necesitas una cotización personalizada?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nuestro equipo puede crear una propuesta específica para tu laboratorio, 
            incluyendo módulos personalizados y descuentos por volumen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing-calculator">
              <Button
                variant="default"
                iconName="Calculator"
                iconPosition="left"
                className="bg-gradient-medical hover:opacity-90"
              >
                Calculadora de Precios
              </Button>
            </Link>
            <Link to="/contact-support">
              <Button
                variant="outline"
                iconName="MessageCircle"
                iconPosition="left"
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                Hablar con Ventas
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;