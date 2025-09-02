import React from 'react';
import Icon from '../../../components/AppIcon';

const PricingHeader = () => {
  return (
    <div className="text-center space-y-6 mb-12">
      <div className="flex items-center justify-center space-x-3 mb-4">
        <div className="w-12 h-12 bg-gradient-medical rounded-xl flex items-center justify-center shadow-medical-glow">
          <Icon name="Calculator" size={24} color="white" strokeWidth={2.5} />
        </div>
        <h1 className="text-medical-heading text-gradient-medical">
          Calculadora de Precios
        </h1>
      </div>
      
      <p className="text-medical-subheading max-w-3xl mx-auto">
        Planifica tu inversión en IBEX Medical con transparencia total. 
        Calcula costos, compara opciones y descubre el ROI de la digitalización médica.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 text-sm">
        <div className="flex items-center space-x-2 text-success">
          <Icon name="CheckCircle" size={16} />
          <span>Precios en Bolívares</span>
        </div>
        <div className="flex items-center space-x-2 text-secondary">
          <Icon name="Zap" size={16} />
          <span>Cálculo en Tiempo Real</span>
        </div>
        <div className="flex items-center space-x-2 text-accent">
          <Icon name="Gift" size={16} />
          <span>20% Descuento por Referidos</span>
        </div>
      </div>
    </div>
  );
};

export default PricingHeader;