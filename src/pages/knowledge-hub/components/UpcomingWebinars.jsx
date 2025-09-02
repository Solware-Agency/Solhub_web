import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UpcomingWebinars = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: 'Implementación de IA en Laboratorios: Casos Reales',
      description: 'Sesión práctica con ejemplos de implementación exitosa de inteligencia artificial en laboratorios venezolanos.',
      date: '2025-09-15',
      time: '14:00',
      duration: '60 min',
      speaker: 'Dr. Carlos Mendoza',
      speakerTitle: 'Director de IA Médica, IBEX',
      registered: 245,
      maxCapacity: 500,
      level: 'Intermedio',
      topics: ['IA Diagnóstica', 'Casos de Éxito', 'Implementación Práctica']
    },
    {
      id: 2,
      title: 'Seguridad de Datos Médicos: Nuevas Regulaciones 2025',
      description: 'Actualización sobre las últimas regulaciones de seguridad de datos médicos en Venezuela y cómo cumplirlas.',
      date: '2025-09-22',
      time: '15:30',
      duration: '45 min',
      speaker: 'Dra. María González',
      speakerTitle: 'Especialista en Cumplimiento Médico',
      registered: 189,
      maxCapacity: 300,
      level: 'Avanzado',
      topics: ['Regulaciones', 'Seguridad', 'Cumplimiento']
    },
    {
      id: 3,
      title: 'Optimización de Workflows en Laboratorios Pequeños',
      description: 'Estrategias específicas para mejorar la eficiencia operativa en laboratorios con recursos limitados.',
      date: '2025-09-29',
      time: '16:00',
      duration: '50 min',
      speaker: 'Ing. Roberto Silva',
      speakerTitle: 'Consultor en Optimización de Procesos',
      registered: 156,
      maxCapacity: 250,
      level: 'Básico',
      topics: ['Workflows', 'Eficiencia', 'Laboratorios Pequeños']
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Básico': return 'text-success bg-success/10 border-success/20';
      case 'Intermedio': return 'text-warning bg-warning/10 border-warning/20';
      case 'Avanzado': return 'text-error bg-error/10 border-error/20';
      default: return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('es-VE', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getRegistrationPercentage = (registered, maxCapacity) => {
    return Math.round((registered / maxCapacity) * 100);
  };

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Próximos Webinars</h2>
          <p className="text-muted-foreground">Sesiones en vivo con expertos en digitalización médica</p>
        </div>
        <Button variant="outline" iconName="Calendar" iconPosition="left">
          Ver Calendario
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {upcomingWebinars?.map((webinar) => (
          <div key={webinar?.id} className="card-medical-elevated group hover:scale-105 transition-all duration-300">
            {/* Header with Date and Level */}
            <div className="p-6 pb-0">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  <span>{formatDate(webinar?.date)}</span>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full border ${getLevelColor(webinar?.level)}`}>
                  {webinar?.level}
                </span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {webinar?.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {webinar?.description}
              </p>
            </div>

            {/* Webinar Details */}
            <div className="px-6 pb-4">
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-foreground">{webinar?.time} - {webinar?.duration}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="User" size={16} className="text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium text-foreground">{webinar?.speaker}</div>
                    <div className="text-xs text-muted-foreground">{webinar?.speakerTitle}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={16} className="text-muted-foreground" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-foreground">{webinar?.registered} registrados</span>
                      <span className="text-muted-foreground">{webinar?.maxCapacity} cupos</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary rounded-full h-2 transition-all duration-300"
                        style={{ width: `${getRegistrationPercentage(webinar?.registered, webinar?.maxCapacity)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Topics */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {webinar?.topics?.map((topic, index) => (
                    <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Registration Button */}
              <Button 
                variant="default" 
                fullWidth 
                iconName="UserPlus" 
                iconPosition="left"
                className="bg-gradient-medical hover:opacity-90"
              >
                Registrarse Gratis
              </Button>
            </div>

            {/* Live Badge for Soon Starting */}
            {new Date(webinar.date) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) && (
              <div className="absolute top-4 right-4">
                <div className="bg-accent text-white rounded-full px-3 py-1 flex items-center space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">Próximamente</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* View All Webinars */}
      <div className="text-center mt-8">
        <Button variant="outline" size="lg" iconName="Video" iconPosition="left">
          Ver Todos los Webinars
        </Button>
      </div>
    </section>
  );
};

export default UpcomingWebinars;