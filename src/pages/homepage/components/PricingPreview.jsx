import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingPreview = () => {
  const [numberOfLabs, setNumberOfLabs] = useState(1);

  const pricingModel = {
    monthlyPerLab: 150,
    features: [
      'Implementación completa incluida',
      'Capacitación del personal',
      'Migración de datos existentes',
      'Configuración personalizada',
      'Soporte técnico durante implementación',
      'Gestión completa de pacientes y estudios',
      'Reportes digitales automatizados',
      'Control de inventario',
      'Facturación y cobranza',
      'Backup automático diario',
      'Soporte técnico continuo',
      'Actualizaciones automáticas'
    ]
  };

  const handleLabCountChange = (count) => {
    setNumberOfLabs(Math.max(1, count));
  };

  return (
    <section className="py-20 bg-muted/10 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-medical relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Precios</span>
            <br />
            <span className="text-gradient-medical">Transparentes</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Modelo simple: Implementación inicial personalizada + $150 USD mensual por laboratorio o sede. 
            Sin sorpresas, sin costos ocultos.
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex items-center bg-card border border-border rounded-lg p-1">
            <span className="px-3 py-1 text-sm font-medium text-foreground">USD</span>
            <span className="px-3 py-1 text-sm text-muted-foreground">(Dólares)</span>
          </div>
        </div>

        {/* Pricing Model */}
        <div className="max-w-4xl mx-auto mb-12 lg:mb-16">
          {/* Selector de número de laboratorios */}
          <div className="card-medical-elevated p-8 mb-8">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto rounded-xl bg-gradient-medical flex items-center justify-center">
                <Icon name="Building2" size={40} color="white" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Número de Laboratorios/Sedes
                </h3>
                <p className="text-muted-foreground mb-6">
                  Selecciona cuántos laboratorios o sedes necesitas gestionar
                </p>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() => handleLabCountChange(numberOfLabs - 1)}
                  disabled={numberOfLabs <= 1}
                  className="w-12 h-12 rounded-full"
                >
                  <Icon name="Minus" size={20} />
                </Button>
                
                <div className="text-4xl font-bold text-gradient-medical min-w-[80px] text-center">
                  {numberOfLabs}
                </div>
                
                <Button
                  variant="outline"
                  onClick={() => handleLabCountChange(numberOfLabs + 1)}
                  className="w-12 h-12 rounded-full"
                >
                  <Icon name="Plus" size={20} />
                </Button>
              </div>
            </div>
          </div>

          {/* Resumen de precios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card-medical-elevated p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                <Icon name="Zap" size={32} color="white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Implementación Inicial
              </h3>
              <div className="text-3xl font-bold text-gradient-medical mb-2">
                Personalizada
              </div>
              <p className="text-muted-foreground">
                Según necesidades específicas
              </p>
            </div>

            <div className="card-medical-elevated p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4">
                <Icon name="Calendar" size={32} color="white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Costo Mensual
              </h3>
              <div className="text-3xl font-bold text-gradient-medical mb-2">
                ${numberOfLabs * pricingModel.monthlyPerLab}
              </div>
              <p className="text-muted-foreground">
                ${pricingModel.monthlyPerLab} × {numberOfLabs} {numberOfLabs === 1 ? 'laboratorio' : 'laboratorios'}
              </p>
            </div>
          </div>

          {/* Características incluidas */}
          <div className="card-medical-elevated p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Todo Incluido en el Precio
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pricingModel.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
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
              Recomienda SolHub a otros laboratorios y obtén un 20% de descuento 
              en el costo mensual por cada referido exitoso.
            </p>
            <div className="flex justify-center">
              <Link to="/pricing-calculator">
                <Button
                  variant="default"
                  iconName="Gift"
                  iconPosition="left"
                  className="bg-gradient-medical hover:opacity-90"
                >
                  Conocer Programa
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <div className="bg-gradient-medical-subtle border border-primary/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Listo para Transformar tu Laboratorio?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Obtén una cotización personalizada para la implementación inicial y descubre 
              cómo SolHub puede optimizar las operaciones de tu laboratorio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing-calculator">
                <Button
                  variant="default"
                  iconName="Calculator"
                  iconPosition="left"
                  className="bg-gradient-medical hover:opacity-90 shadow-medical-glow"
                >
                  Calculadora de Precios
                </Button>
              </Link>
              <Link to="/demo-experience">
                <Button
                  variant="outline"
                  iconName="Calendar"
                  iconPosition="left"
                  className="border-success text-success hover:bg-success/10"
                >
                  Agendar Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;