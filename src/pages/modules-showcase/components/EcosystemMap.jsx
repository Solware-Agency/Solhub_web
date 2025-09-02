import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const EcosystemMap = ({ modules, selectedModules, onModuleHover, onModuleClick }) => {
  const [hoveredModule, setHoveredModule] = useState(null);

  const modulePositions = {
    'patient-management': { x: 20, y: 30 },
    'ai-analysis': { x: 50, y: 20 },
    'automated-reports': { x: 80, y: 30 },
    'data-security': { x: 50, y: 60 },
    'inventory-control': { x: 20, y: 70 },
    'billing-integration': { x: 80, y: 70 }
  };

  const connections = [
    { from: 'patient-management', to: 'ai-analysis' },
    { from: 'ai-analysis', to: 'automated-reports' },
    { from: 'patient-management', to: 'data-security' },
    { from: 'automated-reports', to: 'data-security' },
    { from: 'inventory-control', to: 'data-security' },
    { from: 'billing-integration', to: 'data-security' },
    { from: 'patient-management', to: 'billing-integration' }
  ];

  const getConnectionPath = (from, to) => {
    const fromPos = modulePositions?.[from];
    const toPos = modulePositions?.[to];
    
    if (!fromPos || !toPos) return '';
    
    const x1 = fromPos?.x;
    const y1 = fromPos?.y;
    const x2 = toPos?.x;
    const y2 = toPos?.y;
    
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    
    return `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`;
  };

  return (
    <div className="card-medical p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Ecosistema Modular Solwy
        </h2>
        <p className="text-muted-foreground">
          Descubre cómo nuestros módulos se integran para crear una solución completa
        </p>
      </div>
      <div className="relative w-full h-96 bg-gradient-medical-subtle rounded-xl overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full">
          {connections?.map((connection, index) => {
            const isActive = selectedModules?.includes(connection?.from) && 
                           selectedModules?.includes(connection?.to);
            const isHovered = hoveredModule === connection?.from || 
                            hoveredModule === connection?.to;
            
            return (
              <path
                key={index}
                d={getConnectionPath(connection?.from, connection?.to)}
                stroke={isActive ? 'var(--color-primary)' : 'var(--color-border)'}
                strokeWidth={isActive ? 3 : 1}
                fill="none"
                className={`transition-all duration-300 ${
                  isHovered ? 'opacity-80' : 'opacity-40'
                }`}
                strokeDasharray={isActive ? '0' : '5,5'}
              />
            );
          })}
        </svg>

        {/* Module Nodes */}
        {modules?.map((module) => {
          const position = modulePositions?.[module.id];
          if (!position) return null;

          const isSelected = selectedModules?.includes(module.id);
          const isHovered = hoveredModule === module.id;

          return (
            <div
              key={module.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                isHovered ? 'scale-110 z-10' : 'scale-100'
              }`}
              style={{ 
                left: `${position?.x}%`, 
                top: `${position?.y}%` 
              }}
              onMouseEnter={() => {
                setHoveredModule(module.id);
                onModuleHover?.(module.id);
              }}
              onMouseLeave={() => {
                setHoveredModule(null);
                onModuleHover?.(null);
              }}
              onClick={() => onModuleClick?.(module.id)}
            >
              {/* Module Circle */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                isSelected 
                  ? 'bg-primary text-primary-foreground ring-4 ring-primary/30' 
                  : 'bg-card text-card-foreground border-2 border-border hover:border-primary/50'
              }`}>
                <Icon name={module.icon} size={24} />
              </div>
              {/* Module Label */}
              <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                isSelected 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-card text-card-foreground border border-border'
              }`}>
                {module.name}
              </div>
              {/* Pulse Animation for Selected */}
              {isSelected && (
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
              )}
            </div>
          );
        })}

        {/* Data Flow Indicators */}
        <div className="absolute top-4 right-4 flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-0.5 bg-primary"></div>
            <span className="text-muted-foreground">Flujo activo</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-0.5 bg-border" style={{ strokeDasharray: '2,2' }}></div>
            <span className="text-muted-foreground">Integración disponible</span>
          </div>
        </div>

        {/* Center Hub */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-20 h-20 bg-gradient-medical rounded-full flex items-center justify-center shadow-xl">
            <Icon name="Activity" size={32} color="white" />
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-center">
            Solwy Core
          </div>
        </div>
      </div>
      {/* Legend */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-primary rounded-full"></div>
          <span className="text-muted-foreground">Módulo seleccionado</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-card border border-border rounded-full"></div>
          <span className="text-muted-foreground">Módulo disponible</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Zap" size={16} className="text-warning" />
          <span className="text-muted-foreground">Integración automática</span>
        </div>
      </div>
    </div>
  );
};

export default EcosystemMap;