import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSummary = ({ 
  selectedPackage, 
  selectedModules, 
  hasReferralDiscount, 
  onToggleReferral,
  onRequestDemo,
  onContactSales 
}) => {
  const calculateTotals = () => {
    let monthlyTotal = 0;
    let setupTotal = 0;
    let items = [];

    if (selectedPackage) {
      monthlyTotal += selectedPackage?.monthlyPrice;
      setupTotal += selectedPackage?.setupFee || 0;
      items?.push({
        name: selectedPackage?.name,
        monthlyPrice: selectedPackage?.monthlyPrice,
        setupFee: selectedPackage?.setupFee || 0
      });
    }

    selectedModules?.forEach(module => {
      monthlyTotal += module.monthlyPrice;
      setupTotal += module.setupFee || 0;
      items?.push({
        name: module.name,
        monthlyPrice: module.monthlyPrice,
        setupFee: module.setupFee || 0
      });
    });

    const discount = hasReferralDiscount ? monthlyTotal * 0.2 : 0;
    const finalMonthly = monthlyTotal - discount;
    const monthlyUSD = Math.round(finalMonthly / 36000); // Approximate exchange rate
    const setupUSD = Math.round(setupTotal / 36000);

    return {
      items,
      monthlyTotal,
      setupTotal,
      discount,
      finalMonthly,
      monthlyUSD,
      setupUSD
    };
  };

  const totals = calculateTotals();

  if (!selectedPackage && selectedModules?.length === 0) {
    return (
      <div className="card-medical p-6 text-center">
        <Icon name="Calculator" size={48} className="text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Selecciona un Paquete o Módulos
        </h3>
        <p className="text-muted-foreground">
          Elige una opción para ver el resumen de precios
        </p>
      </div>
    );
  }

  return (
    <div className="card-medical-elevated p-6 sticky top-24">
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Resumen de Inversión
          </h3>
          <p className="text-sm text-muted-foreground">
            Cálculo actualizado en tiempo real
          </p>
        </div>

        {/* Selected Items */}
        <div className="space-y-3">
          {totals?.items?.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-border/50">
              <div>
                <div className="font-medium text-foreground">{item?.name}</div>
                {item?.setupFee > 0 && (
                  <div className="text-xs text-muted-foreground">
                    +Configuración inicial
                  </div>
                )}
              </div>
              <div className="text-right">
                <div className="font-semibold text-foreground">
                  Bs. {item?.monthlyPrice?.toLocaleString('es-VE')}/mes
                </div>
                {item?.setupFee > 0 && (
                  <div className="text-xs text-warning">
                    +Bs. {item?.setupFee?.toLocaleString('es-VE')}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Referral Discount Toggle */}
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="referral-discount"
              checked={hasReferralDiscount}
              onChange={onToggleReferral}
              className="w-4 h-4 text-accent bg-background border-border rounded focus:ring-accent"
            />
            <label htmlFor="referral-discount" className="flex-1 cursor-pointer">
              <div className="font-medium text-foreground">
                Programa de Referidos
              </div>
              <div className="text-sm text-muted-foreground">
                20% de descuento por recomendación
              </div>
            </label>
            <Icon name="Gift" size={20} className="text-accent" />
          </div>
        </div>

        {/* Totals */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-foreground">Subtotal mensual:</span>
            <span className="font-semibold">
              Bs. {totals?.monthlyTotal?.toLocaleString('es-VE')}
            </span>
          </div>

          {hasReferralDiscount && (
            <div className="flex justify-between items-center text-accent">
              <span>Descuento por referido (20%):</span>
              <span className="font-semibold">
                -Bs. {totals?.discount?.toLocaleString('es-VE')}
              </span>
            </div>
          )}

          <div className="border-t border-border pt-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-bold text-foreground">Total mensual:</span>
              <div className="text-right">
                <div className="text-2xl font-bold text-gradient-medical">
                  Bs. {totals?.finalMonthly?.toLocaleString('es-VE')}
                </div>
                <div className="text-sm text-muted-foreground">
                  ~${totals?.monthlyUSD} USD/mes
                </div>
              </div>
            </div>

            {totals?.setupTotal > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-foreground">Configuración inicial:</span>
                <div className="text-right">
                  <div className="font-semibold text-warning">
                    Bs. {totals?.setupTotal?.toLocaleString('es-VE')}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    ~${totals?.setupUSD} USD (una vez)
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ROI Estimate */}
        <div className="bg-success/10 border border-success/20 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="TrendingUp" size={16} className="text-success" />
            <span className="font-medium text-success">Retorno Estimado</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Ahorro promedio del 35% en costos operativos según nuestros clientes activos
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            variant="default"
            fullWidth
            onClick={onRequestDemo}
            iconName="MessageCircle"
            iconPosition="left"
            className="bg-gradient-medical hover:opacity-90 shadow-medical-glow"
          >
            Contáctanos
          </Button>
          
          <Button
            variant="outline"
            fullWidth
            onClick={onContactSales}
            iconName="MessageCircle"
            iconPosition="left"
            className="border-success text-success hover:bg-success/10"
          >
            Contactar por WhatsApp
          </Button>
        </div>

        {/* Additional Info */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Shield" size={14} />
            <span>Precios válidos hasta diciembre 2025</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Icon name="CreditCard" size={14} />
            <span>Planes de pago flexibles disponibles</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSummary;