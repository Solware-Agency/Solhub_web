import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PackageSelector = ({ selectedPackage, onPackageSelect, packages }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Paquetes Preconfigurados
        </h2>
        <p className="text-muted-foreground">
          Soluciones diseñadas para diferentes tipos de establecimientos médicos
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages?.map((pkg) => (
          <div
            key={pkg?.id}
            className={`card-medical-elevated p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
              selectedPackage?.id === pkg?.id
                ? 'border-primary bg-primary/5 shadow-lg shadow-primary/20'
                : 'hover:border-primary/50'
            }`}
            onClick={() => onPackageSelect(pkg)}
          >
            <div className="text-center space-y-4">
              <div className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center ${
                selectedPackage?.id === pkg?.id
                  ? 'bg-gradient-medical' :'bg-muted'
              }`}>
                <Icon 
                  name={pkg?.icon} 
                  size={32} 
                  color={selectedPackage?.id === pkg?.id ? 'white' : 'currentColor'} 
                />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {pkg?.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {pkg?.description}
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gradient-medical">
                  Bs. {pkg?.monthlyPrice?.toLocaleString('es-VE')}
                </div>
                <div className="text-sm text-muted-foreground">
                  ~${pkg?.monthlyPriceUSD} USD/mes
                </div>
              </div>
              
              <div className="space-y-2">
                {pkg?.features?.slice(0, 3)?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <Icon name="Check" size={14} className="text-success" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
                {pkg?.features?.length > 3 && (
                  <div className="text-xs text-muted-foreground">
                    +{pkg?.features?.length - 3} características más
                  </div>
                )}
              </div>
              
              <Button
                variant={selectedPackage?.id === pkg?.id ? "default" : "outline"}
                fullWidth
                className={selectedPackage?.id === pkg?.id ? "bg-gradient-medical" : ""}
              >
                {selectedPackage?.id === pkg?.id ? "Seleccionado" : "Seleccionar"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageSelector;