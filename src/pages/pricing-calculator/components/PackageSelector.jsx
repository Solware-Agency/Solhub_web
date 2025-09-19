import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PackageSelector = ({ numberOfLabs, onLabCountChange, pricingModel }) => {
  const totalMonthlyCost = numberOfLabs * pricingModel.monthlyPerLab;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Modelo de Precios SolHub
        </h2>
        <p className="text-muted-foreground">
          Implementación inicial personalizada + $150 USD mensual por laboratorio o sede
        </p>
      </div>

      {/* Selector de número de laboratorios */}
      <div className="card-medical-elevated p-6">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-xl bg-gradient-medical flex items-center justify-center">
            <Icon name="Building2" size={40} color="white" />
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Número de Laboratorios/Sedes
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Selecciona cuántos laboratorios o sedes necesitas gestionar
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="outline"
              onClick={() => onLabCountChange(numberOfLabs - 1)}
              disabled={numberOfLabs <= 0}
              className="w-12 h-12 rounded-full"
            >
              <Icon name="Minus" size={20} />
            </Button>
            
            <div className="text-3xl font-bold text-gradient-medical min-w-[60px] text-center">
              {numberOfLabs}
            </div>
            
            <Button
              variant="outline"
              onClick={() => onLabCountChange(numberOfLabs + 1)}
              className="w-12 h-12 rounded-full"
            >
              <Icon name="Plus" size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Resumen de precios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card-medical-elevated p-6 text-center">
          <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
            <Icon name="Zap" size={32} color="white" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">
            Implementación Inicial
          </h3>
          <div className="text-2xl font-bold text-gradient-medical mb-2">
            Personalizada
          </div>
          <p className="text-sm text-muted-foreground">
            Según necesidades específicas
          </p>
        </div>

        <div className="card-medical-elevated p-6 text-center">
          <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4">
            <Icon name="Calendar" size={32} color="white" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">
            Costo Mensual
          </h3>
          <div className="text-2xl font-bold text-gradient-medical mb-2">
            ${totalMonthlyCost}
          </div>
          <p className="text-sm text-muted-foreground">
            {numberOfLabs === 0 ? 'Selecciona laboratorios' : `${pricingModel.monthlyPerLab} × ${numberOfLabs} ${numberOfLabs === 1 ? 'laboratorio' : 'laboratorios'}`}
          </p>
        </div>
      </div>

      {/* Características incluidas */}
      <div className="card-medical-elevated p-6">
        <h3 className="text-lg font-bold text-foreground mb-4 text-center">
          Todo Incluido en el Precio
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {pricingModel.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Icon name="Check" size={16} className="text-success flex-shrink-0" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageSelector;