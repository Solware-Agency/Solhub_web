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

      {/* Video Section */}
      <div className="space-y-6">
        {/* Platform Preview iframe */}
        <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
          <iframe 
            src="https://preview.solhub.agency"
            className="w-full h-[600px] border-0"
            title="SolHub Platform Preview"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
          
          {/* Loading overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
              ¿Listo para una experiencia personalizada?
            </h5>
          </div>
          <p className="text-muted-foreground mb-4 text-center">
            Explore la plataforma SolHub en tiempo real. Esta es una versión de demostración interactiva 
            donde puede navegar por todas las funcionalidades principales. En el demo personalizado 
            podrá interactuar con datos específicos de su laboratorio.
          </p>
          <div className="flex justify-center">
            <Button
              variant="default"
              iconName="Calendar"
              iconPosition="left"
              className="bg-gradient-medical"
              onClick={onScheduleDemo}
            >
              Programar Demo Personalizado
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformPreview;