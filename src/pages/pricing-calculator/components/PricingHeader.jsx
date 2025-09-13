import React from 'react';
import Icon from '../../../components/AppIcon';

const PricingHeader = () => {
  return (
    <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 pt-16 sm:pt-20">
      <div className="flex items-center justify-center space-x-3 mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-medical rounded-xl flex items-center justify-center shadow-medical-glow">
          <Icon name="Calculator" size={20} color="white" strokeWidth={2.5} className="sm:w-6 sm:h-6" />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-medical">
          Calculadora de Precios
        </h1>
      </div>
      
      <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
        Planifica tu inversión en SolHub con transparencia total. 
        Calcula costos, compara opciones y descubre el ROI de la digitalización médica.
      </p>
      
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
        <div className="flex items-center space-x-2 text-success">
          <Icon name="CheckCircle" size={16} />
          <span>Precios en Dólares</span>
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