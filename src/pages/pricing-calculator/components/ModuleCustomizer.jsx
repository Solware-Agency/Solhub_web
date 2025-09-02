import React from 'react';
import Icon from '../../../components/AppIcon';
import { Checkbox } from '../../../components/ui/Checkbox';

const ModuleCustomizer = ({ availableModules, selectedModules, onModuleToggle }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Personaliza tu Solución
        </h2>
        <p className="text-muted-foreground">
          Selecciona los módulos específicos que necesita tu laboratorio
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableModules?.map((module) => {
          const isSelected = selectedModules?.some(m => m?.id === module.id);
          
          return (
            <div
              key={module.id}
              className={`card-medical p-4 transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'border-primary bg-primary/5 shadow-md shadow-primary/20'
                  : 'hover:border-primary/50 hover:bg-muted/30'
              }`}
              onClick={() => onModuleToggle(module)}
            >
              <div className="flex items-start space-x-3">
                <Checkbox
                  checked={isSelected}
                  onChange={() => onModuleToggle(module)}
                  className="mt-1"
                />
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon 
                      name={module.icon} 
                      size={20} 
                      className={isSelected ? 'text-primary' : 'text-muted-foreground'} 
                    />
                    <h3 className="font-semibold text-foreground">
                      {module.name}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {module.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-lg font-bold text-gradient-medical">
                        Bs. {module.monthlyPrice?.toLocaleString('es-VE')}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        ~${module.monthlyPriceUSD} USD/mes
                      </div>
                    </div>
                    
                    {module.setupFee > 0 && (
                      <div className="text-right">
                        <div className="text-sm text-warning">
                          +Bs. {module.setupFee?.toLocaleString('es-VE')}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Configuración inicial
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {module.features && module.features?.length > 0 && (
                    <div className="space-y-1">
                      {module.features?.slice(0, 2)?.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-1 text-xs">
                          <Icon name="Dot" size={12} className="text-success" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ModuleCustomizer;