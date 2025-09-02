import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', name: 'Todos', icon: 'Grid3X3', count: 90 },
    { id: 'implementation', name: 'Implementación', icon: 'Settings', count: 25 },
    { id: 'compliance', name: 'Cumplimiento', icon: 'Shield', count: 18 },
    { id: 'ai-integration', name: 'IA Médica', icon: 'Brain', count: 15 },
    { id: 'case-studies', name: 'Casos de Éxito', icon: 'Trophy', count: 12 },
    { id: 'webinars', name: 'Webinars', icon: 'Video', count: 10 },
    { id: 'templates', name: 'Plantillas', icon: 'FileText', count: 10 }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
        <Icon name="Filter" size={20} className="mr-2" />
        Categorías
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => onCategoryChange(category?.id)}
            className={`flex flex-col items-center p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${
              activeCategory === category?.id
                ? 'bg-primary/10 border-primary/30 text-primary' :'bg-muted/30 border-border hover:bg-muted/50 text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon 
              name={category?.icon} 
              size={24} 
              className={`mb-2 ${
                activeCategory === category?.id ? 'text-primary' : 'text-muted-foreground'
              }`}
            />
            <span className="text-sm font-medium text-center">{category?.name}</span>
            <span className="text-xs opacity-70 mt-1">{category?.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;