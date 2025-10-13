import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import useActions from '../../../hooks/useActions';

const ConfiguratorSidebar = ({ 
  selectedModules, 
  modules, 
  onRemoveModule, 
  onClearAll,
  onRequestDemo 
}) => {
  const { handleContactClick } = useActions();
  // Removed price calculation - no longer showing prices

  const implementationTime = Math.max(
    ...selectedModules?.map(moduleId => {
      const module = modules?.find(m => m?.id === moduleId);
      return module ? module.implementationWeeks : 0;
    })
  );

  return (
    <div className="sticky top-24 space-y-6 min-w-0">
      {/* Header */}
      <div className="card-medical p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">
            Mi Selección de Módulos
          </h3>
          {selectedModules?.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearAll}
              iconName="X"
              iconPosition="left"
              className="text-destructive hover:text-destructive"
            >
              Limpiar
            </Button>
          )}
        </div>

        {selectedModules?.length === 0 ? (
          <div className="text-center py-8">
            <Icon name="Package" size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-sm">
              Selecciona los módulos que te interesan para crear tu solución personalizada
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Selected Modules */}
            <div className="space-y-2">
              {selectedModules?.map(moduleId => {
                const module = modules?.find(m => m?.id === moduleId);
                if (!module) return null;

                return (
                  <div 
                    key={moduleId}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg min-w-0"
                  >
                    <div className="flex items-center space-x-3 min-w-0 flex-1">
                      <Icon name={module.icon} size={16} className="text-primary flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <span className="text-sm font-medium text-foreground block truncate">
                          {module.name}
                        </span>
                        <div className="text-xs text-muted-foreground">
                          {module.category === 'core' ? 'Módulo Central' : 'Módulo Adicional'}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemoveModule(moduleId)}
                      iconName="X"
                      className="text-destructive hover:text-destructive flex-shrink-0 ml-2"
                    />
                  </div>
                );
              })}
            </div>

            {/* Summary */}
            <div className="border-t border-border pt-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Tiempo de implementación:
                </span>
                <span className="text-sm font-medium text-foreground">
                  {implementationTime} semanas
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Módulos seleccionados:
                </span>
                <span className="text-sm font-medium text-foreground">
                  {selectedModules?.length}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Configuración:
                </span>
                <span className="text-sm font-medium text-primary">
                  Personalizada
                </span>
              </div>
            </div>

            {/* Benefits Badge */}
            {selectedModules?.length >= 3 && (
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-primary">
                    ¡Solución Completa!
                  </span>
                </div>
                <p className="text-xs text-primary/80 mt-1">
                  Con 3+ módulos obtienes una solución integral para tu laboratorio
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <Button
                variant="default"
                fullWidth
                onClick={() => handleContactClick('módulos seleccionados')}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-gradient-medical hover:opacity-90"
              >
                Contáctanos
              </Button>
              <Button
                variant="outline"
                fullWidth
                iconName="Calculator"
                iconPosition="left"
                asChild
              >
                <Link to="/pricing-calculator">
                  Ver Precios Detallados
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
      {/* Quick Stats */}
      <div className="card-medical p-6">
        <h4 className="text-sm font-semibold text-foreground mb-4">
          Estadísticas de Implementación
        </h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground">
                Sedes activas
              </span>
            </div>
            <span className="text-sm font-medium text-foreground">5</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" size={16} className="text-success" />
              <span className="text-sm text-muted-foreground">
                Eficiencia promedio
              </span>
            </div>
            <span className="text-sm font-medium text-success">+67%</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-warning" />
              <span className="text-sm text-muted-foreground">
                Tiempo de setup
              </span>
            </div>
            <span className="text-sm font-medium text-foreground">2-4 sem</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} className="text-secondary" />
              <span className="text-sm text-muted-foreground">
                Uptime garantizado
              </span>
            </div>
            <span className="text-sm font-medium text-secondary">99.9%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfiguratorSidebar;