import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSummary = ({ 
  numberOfLabs,
  selectedModules, 
  hasReferralDiscount, 
  pricingModel,
  onToggleReferral,
  onRequestDemo,
  onContactSales 
}) => {
  const calculateTotals = () => {
    let monthlyTotal = numberOfLabs * pricingModel.monthlyPerLab;
    let setupTotal = 0; // Implementación personalizada
    let items = [];

    // Agregar costo base por laboratorios
    items.push({
      name: `SolHub (${numberOfLabs} ${numberOfLabs === 1 ? 'laboratorio' : 'laboratorios'})`,
      monthlyPrice: monthlyTotal,
      setupFee: 0,
      isCustomImplementation: true
    });

    // Agregar módulos adicionales si los hay
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
    const monthlyUSD = finalMonthly; // Already in USD
    const setupUSD = setupTotal; // Already in USD

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

  if (numberOfLabs === 0) {
    return (
      <div className="card-medical p-6 text-center">
        <Icon name="Calculator" size={48} className="text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Configura tu Solución
        </h3>
        <p className="text-muted-foreground">
          Selecciona el número de laboratorios para ver el resumen de precios
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
                {item?.isCustomImplementation && (
                  <div className="text-xs text-muted-foreground">
                    +Implementación personalizada
                  </div>
                )}
                {item?.setupFee > 0 && !item?.isCustomImplementation && (
                  <div className="text-xs text-muted-foreground">
                    +Configuración inicial
                  </div>
                )}
              </div>
              <div className="text-right">
                <div className="font-semibold text-foreground">
                  ${item?.monthlyPrice}/mes
                </div>
                {item?.isCustomImplementation && (
                  <div className="text-xs text-warning">
                    +Cotización personalizada
                  </div>
                )}
                {item?.setupFee > 0 && !item?.isCustomImplementation && (
                  <div className="text-xs text-warning">
                    +${item?.setupFee}
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
              ${totals?.monthlyTotal}
            </span>
          </div>

          {hasReferralDiscount && (
            <div className="flex justify-between items-center text-accent">
              <span>Descuento por referido (20%):</span>
              <span className="font-semibold">
                -${totals?.discount}
              </span>
            </div>
          )}

          <div className="border-t border-border pt-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-bold text-foreground">Total mensual:</span>
              <div className="text-right">
                <div className="text-2xl font-bold text-gradient-medical">
                  ${totals?.finalMonthly}
                </div>
                <div className="text-sm text-muted-foreground">
                  USD/mes
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-foreground">Implementación inicial:</span>
              <div className="text-right">
                <div className="font-semibold text-warning">
                  Personalizada
                </div>
                <div className="text-xs text-muted-foreground">
                  Según necesidades
                </div>
              </div>
            </div>
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
          <Link to="/contact-support">
            <Button
              variant="default"
              fullWidth
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-gradient-medical hover:opacity-90 shadow-medical-glow"
            >
              Contáctanos
            </Button>
          </Link>
          
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