import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PlatformPreview = ({ onScheduleDemo }) => {

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="Monitor" size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            Preview de la Plataforma
          </h3>
          <p className="text-sm text-muted-foreground">
            Explore los flujos de trabajo principales de SolHub
          </p>
        </div>
      </div>

      {/* Próximamente Section */}
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="Clock" size={32} className="text-primary" />
        </div>
        
        <h4 className="text-2xl font-semibold text-foreground mb-4">
          Demo Interactiva Próximamente
        </h4>
        
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Estamos preparando una experiencia interactiva completa donde podrás explorar 
          todos los módulos de SolHub en tiempo real. Mientras tanto, programa una demo 
          personalizada con nuestro equipo.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-muted/20 rounded-lg p-4 text-center">
            <Icon name="UserPlus" size={24} className="text-primary mx-auto mb-2" />
            <h5 className="text-sm font-medium text-foreground">Registro de Pacientes</h5>
          </div>
          <div className="bg-muted/20 rounded-lg p-4 text-center">
            <Icon name="FileText" size={24} className="text-primary mx-auto mb-2" />
            <h5 className="text-sm font-medium text-foreground">Orden de Pruebas</h5>
          </div>
          <div className="bg-muted/20 rounded-lg p-4 text-center">
            <Icon name="Activity" size={24} className="text-primary mx-auto mb-2" />
            <h5 className="text-sm font-medium text-foreground">Procesamiento de Resultados</h5>
          </div>
          <div className="bg-muted/20 rounded-lg p-4 text-center">
            <Icon name="FileBarChart" size={24} className="text-primary mx-auto mb-2" />
            <h5 className="text-sm font-medium text-foreground">Generación de Reportes</h5>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-medical/10 border border-primary/20 rounded-xl p-6">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Icon name="Zap" size={20} className="text-primary" />
            <h5 className="text-lg font-semibold text-foreground">
              ¿Listo para ver más?
            </h5>
          </div>
          <p className="text-muted-foreground mb-4">
            Este es solo un vistazo de las capacidades de SolHub. 
            En el demo completo podrá interactuar con todas las funcionalidades.
          </p>
          <Button
            variant="default"
            iconName="Calendar"
            iconPosition="left"
            className="bg-gradient-medical"
            onClick={onScheduleDemo}
          >
            Programar Demo Completo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlatformPreview;