import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ModuleCard = ({ 
  module, 
  isSelected, 
  onToggle, 
  onViewDemo, 
  isExpanded, 
  onToggleExpand 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`card-medical-elevated transition-all duration-300 ${
        isSelected ? 'ring-2 ring-primary border-primary/50' : ''
      } ${isExpanded ? 'col-span-full' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted'
            }`}>
              <Icon name={module.icon} size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {module.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {module.description}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onToggleExpand(module.id)}
              iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
              iconPosition="right"
            >
              {isExpanded ? 'Contraer' : 'Expandir'}
            </Button>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3">
            Características Principales
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {module.features?.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="space-y-6 border-t border-border pt-6">
            {/* Benefits */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Beneficios Específicos
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {module.benefits?.map((benefit, index) => (
                  <div key={index} className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name={benefit?.icon} size={16} className="text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {benefit?.title}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {benefit?.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration Points */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Integraciones Disponibles
              </h4>
              <div className="flex flex-wrap gap-2">
                {module.integrations?.map((integration, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full border border-secondary/20"
                  >
                    {integration}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            {module.testimonial && (
              <div className="bg-gradient-medical-subtle rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Quote" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="text-sm text-foreground mb-2 italic">
                      "{module.testimonial?.quote}"
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-medium text-primary">
                        {module.testimonial?.author}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {module.testimonial?.role} - {module.testimonial?.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-border">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Precio desde:
            </span>
            <span className="text-lg font-bold text-primary">
              ${module.price}
            </span>
            <span className="text-xs text-muted-foreground">
              /mes por sede
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onViewDemo(module.id)}
              iconName="Play"
              iconPosition="left"
            >
              Ver Demo
            </Button>
            <Button
              variant={isSelected ? "destructive" : "default"}
              size="sm"
              onClick={() => onToggle(module.id)}
              iconName={isSelected ? "Minus" : "Plus"}
              iconPosition="left"
            >
              {isSelected ? 'Remover' : 'Agregar'}
            </Button>
          </div>
        </div>
      </div>
      {/* Connection Lines (when hovered) */}
      {isHovered && module.dependencies?.length > 0 && (
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse-medical">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default ModuleCard;