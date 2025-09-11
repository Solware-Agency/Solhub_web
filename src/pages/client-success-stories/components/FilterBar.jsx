import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FilterBar = ({ activeFilter, onFilterChange, searchTerm, onSearchChange }) => {
  const filters = [
    { id: 'all', label: 'Todos los Casos', icon: 'Grid3X3' },
    { id: 'independent', label: 'Laboratorios Independientes', icon: 'Building2' },
    { id: 'hospital', label: 'Laboratorios Hospitalarios', icon: 'Hospital' },
    { id: 'clinic', label: 'Clínicas Privadas', icon: 'Stethoscope' },
    { id: 'specialized', label: 'Laboratorios Especializados', icon: 'Microscope' },
    { id: 'network', label: 'Redes Multi-ubicación', icon: 'Network' }
  ];

  const sizeFilters = [
    { id: 'small', label: 'Pequeño (1-10)', icon: 'Users' },
    { id: 'medium', label: 'Mediano (11-50)', icon: 'Users' },
    { id: 'large', label: 'Grande (50+)', icon: 'Users' }
  ];

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-md">
        <Icon 
          name="Search" 
          size={20} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
        />
        <input
          type="text"
          placeholder="Buscar por nombre, ubicación o desafío..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="bg-background text-foreground placeholder:text-muted-foreground border border-border rounded-xl pl-10 pr-4 py-3 w-full focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
        />
      </div>
      {/* Type Filters */}
      <div>
        <h3 className="text-sm font-medium text-foreground mb-3">
          Filtrar por Tipo de Laboratorio
        </h3>
        <div className="flex flex-wrap gap-2">
          {filters?.map((filter) => (
            <Button
              key={filter?.id}
              variant={activeFilter?.type === filter?.id ? "default" : "outline"}
              size="sm"
              onClick={() => onFilterChange('type', filter?.id)}
              iconName={filter?.icon}
              iconPosition="left"
              className={activeFilter?.type === filter?.id ? "bg-primary text-primary-foreground" : ""}
            >
              {filter?.label}
            </Button>
          ))}
        </div>
      </div>
      {/* Size Filters */}
      <div>
        <h3 className="text-sm font-medium text-foreground mb-3">
          Filtrar por Tamaño del Equipo
        </h3>
        <div className="flex flex-wrap gap-2">
          {sizeFilters?.map((filter) => (
            <Button
              key={filter?.id}
              variant={activeFilter?.size === filter?.id ? "default" : "outline"}
              size="sm"
              onClick={() => onFilterChange('size', filter?.id)}
              iconName={filter?.icon}
              iconPosition="left"
              className={activeFilter?.size === filter?.id ? "bg-secondary text-secondary-foreground" : ""}
            >
              {filter?.label}
            </Button>
          ))}
        </div>
      </div>
      {/* Active Filters Display */}
      {(activeFilter?.type !== 'all' || activeFilter?.size !== 'all' || searchTerm) && (
        <div className="flex items-center space-x-2 p-4 bg-muted/30 rounded-lg">
          <Icon name="Filter" size={16} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Filtros activos:</span>
          
          {activeFilter?.type !== 'all' && (
            <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
              {filters?.find(f => f?.id === activeFilter?.type)?.label}
            </span>
          )}
          
          {activeFilter?.size !== 'all' && (
            <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-full">
              {sizeFilters?.find(f => f?.id === activeFilter?.size)?.label}
            </span>
          )}
          
          {searchTerm && (
            <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">
              "{searchTerm}"
            </span>
          )}
          
          <Button
            variant="ghost"
            size="xs"
            onClick={() => {
              onFilterChange('type', 'all');
              onFilterChange('size', 'all');
              onSearchChange('');
            }}
            iconName="X"
            iconPosition="left"
            className="ml-2 text-muted-foreground hover:text-foreground"
          >
            Limpiar
          </Button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;