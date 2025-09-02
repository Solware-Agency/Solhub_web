import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CommunitySection = () => {
  const [newQuestion, setNewQuestion] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');

  const discussions = [
    {
      id: 1,
      title: '¿Cómo integrar IBEX con sistemas existentes de laboratorio?',
      author: 'Dr. Miguel Herrera',
      role: 'Director de Laboratorio',
      location: 'Caracas',
      category: 'Implementación',
      replies: 12,
      views: 245,
      lastActivity: '2 horas',
      isAnswered: true,
      tags: ['integración', 'sistemas', 'api']
    },
    {
      id: 2,
      title: 'Experiencias con IA diagnóstica en laboratorios pequeños',
      author: 'Dra. Carmen Delgado',
      role: 'Patóloga',
      location: 'Valencia',
      category: 'IA Médica',
      replies: 8,
      views: 189,
      lastActivity: '4 horas',
      isAnswered: false,
      tags: ['ia', 'diagnóstico', 'laboratorios pequeños']
    },
    {
      id: 3,
      title: 'Mejores prácticas para capacitación de personal técnico',
      author: 'Lic. Roberto Silva',
      role: 'Supervisor Técnico',
      location: 'Maracaibo',
      category: 'Capacitación',
      replies: 15,
      views: 320,
      lastActivity: '6 horas',
      isAnswered: true,
      tags: ['capacitación', 'personal', 'mejores prácticas']
    },
    {
      id: 4,
      title: 'Dudas sobre cumplimiento normativo en Venezuela',
      author: 'Dra. Ana Rodríguez',
      role: 'Directora Médica',
      location: 'Barquisimeto',
      category: 'Cumplimiento',
      replies: 6,
      views: 156,
      lastActivity: '1 día',
      isAnswered: false,
      tags: ['cumplimiento', 'regulaciones', 'venezuela']
    },
    {
      id: 5,
      title: 'ROI real después de 6 meses con IBEX',
      author: 'Ing. Patricia Vásquez',
      role: 'Administradora',
      location: 'Mérida',
      category: 'Casos de Éxito',
      replies: 22,
      views: 445,
      lastActivity: '1 día',
      isAnswered: true,
      tags: ['roi', 'resultados', 'casos éxito']
    }
  ];

  const categories = [
    { id: 'general', name: 'General', count: 45 },
    { id: 'implementation', name: 'Implementación', count: 23 },
    { id: 'ai-medical', name: 'IA Médica', count: 18 },
    { id: 'training', name: 'Capacitación', count: 15 },
    { id: 'compliance', name: 'Cumplimiento', count: 12 },
    { id: 'success-cases', name: 'Casos de Éxito', count: 8 }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Implementación': return 'text-primary bg-primary/10';
      case 'IA Médica': return 'text-secondary bg-secondary/10';
      case 'Capacitación': return 'text-success bg-success/10';
      case 'Cumplimiento': return 'text-warning bg-warning/10';
      case 'Casos de Éxito': return 'text-accent bg-accent/10';
      default: return 'text-muted-foreground bg-muted/10';
    }
  };

  const handleSubmitQuestion = (e) => {
    e?.preventDefault();
    if (newQuestion?.trim()) {
      // Mock question submission
      console.log('Nueva pregunta:', newQuestion);
      setNewQuestion('');
    }
  };

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Comunidad IBEX</h2>
          <p className="text-muted-foreground">Conecta con otros profesionales médicos y comparte experiencias</p>
        </div>
        <Button variant="outline" iconName="Users" iconPosition="left">
          Unirse a la Comunidad
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <div className="card-medical p-6 sticky top-24">
            <h3 className="font-semibold text-foreground mb-4">Categorías</h3>
            <div className="space-y-2">
              {categories?.map((category) => (
                <button
                  key={category?.id}
                  onClick={() => setSelectedCategory(category?.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-300 hover:bg-muted/50 ${
                    selectedCategory === category?.id
                      ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="text-sm font-medium">{category?.name}</span>
                  <span className="text-xs bg-muted/50 px-2 py-1 rounded-full">{category?.count}</span>
                </button>
              ))}
            </div>

            {/* Ask Question Form */}
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">Hacer una Pregunta</h4>
              <form onSubmit={handleSubmitQuestion} className="space-y-4">
                <Input
                  type="text"
                  placeholder="¿Cuál es tu pregunta?"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e?.target?.value)}
                  className="text-sm"
                />
                <Button
                  type="submit"
                  variant="default"
                  size="sm"
                  fullWidth
                  iconName="MessageCircle"
                  iconPosition="left"
                  disabled={!newQuestion?.trim()}
                >
                  Publicar
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Discussions List */}
        <div className="lg:col-span-3">
          <div className="space-y-4">
            {discussions?.map((discussion) => (
              <div key={discussion?.id} className="card-medical p-6 hover:bg-muted/20 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(discussion?.category)}`}>
                        {discussion?.category}
                      </span>
                      {discussion?.isAnswered && (
                        <div className="flex items-center space-x-1 text-success">
                          <Icon name="CheckCircle" size={14} />
                          <span className="text-xs font-medium">Respondida</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                      {discussion?.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {discussion?.tags?.map((tag, index) => (
                        <span key={index} className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-medical rounded-full flex items-center justify-center">
                        <Icon name="User" size={14} color="white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{discussion?.author}</div>
                        <div className="text-xs text-muted-foreground">
                          {discussion?.role} • {discussion?.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="MessageCircle" size={14} />
                      <span>{discussion?.replies}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={14} />
                      <span>{discussion?.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{discussion?.lastActivity}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" iconName="ChevronDown" iconPosition="right">
              Cargar Más Discusiones
            </Button>
          </div>
        </div>
      </div>
      {/* Community Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border">
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground mb-1">1,250</div>
          <div className="text-sm text-muted-foreground">Miembros Activos</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground mb-1">450</div>
          <div className="text-sm text-muted-foreground">Discusiones</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground mb-1">2,100</div>
          <div className="text-sm text-muted-foreground">Respuestas</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground mb-1">95%</div>
          <div className="text-sm text-muted-foreground">Preguntas Resueltas</div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;