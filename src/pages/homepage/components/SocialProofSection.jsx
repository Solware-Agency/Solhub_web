import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialProofSection = () => {
  const metrics = [
    {
      icon: 'TrendingUp',
      value: '40%',
      label: 'Reducción en tiempo de procesamiento',
      description: 'Promedio en las 5 sedes activas'
    },
    {
      icon: 'Target',
      value: '99.9%',
      label: 'Precisión en diagnósticos',
      description: 'Validado por profesionales médicos'
    },
    {
      icon: 'Users',
      value: '50+',
      label: 'Profesionales activos',
      description: 'Médicos, técnicos y administrativos'
    },
    {
      icon: 'MapPin',
      value: '5',
      label: 'Sedes en Venezuela',
      description: 'Caracas, Valencia, Maracaibo, Barquisimeto'
    }
  ];

  const locations = [
    {
      city: 'Caracas',
      zone: 'Centro',
      users: 15,
      satisfaction: 4.9,
      uptime: '99.98%'
    },
    {
      city: 'Valencia',
      zone: 'Norte',
      users: 12,
      satisfaction: 4.8,
      uptime: '99.95%'
    },
    {
      city: 'Maracaibo',
      zone: 'Centro',
      users: 8,
      satisfaction: 4.9,
      uptime: '99.97%'
    },
    {
      city: 'Barquisimeto',
      zone: 'Este',
      users: 10,
      satisfaction: 4.7,
      uptime: '99.94%'
    },
    {
      city: 'Puerto Ordaz',
      zone: 'Sur',
      users: 6,
      satisfaction: 4.8,
      uptime: '99.96%'
    }
  ];

  return (
    <section className="py-20 bg-muted/20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container-medical relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Transformando</span>
            <br />
            <span className="text-gradient-medical">laboratorios venezolanos</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Más de 50 profesionales médicos ya confían en SolHub para optimizar 
            sus operaciones diarias y mejorar la atención al paciente.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {metrics?.map((metric, index) => (
            <div 
              key={index} 
              className="group text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              {/* Efecto de brillo animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/60 via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out opacity-0 group-hover:opacity-100"></div>
              
              {/* Contenido relativo */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-medical rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                  <Icon name={metric?.icon} size={24} color="white" />
                </div>
                <div className="text-3xl font-bold text-gradient-medical mb-2 group-hover:scale-110 transition-transform duration-300">{metric?.value}</div>
                <div className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{metric?.label}</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{metric?.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Locations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Sedes Activas en Venezuela
            </h3>
            <p className="text-lg text-muted-foreground">
              Cada sede opera con seguridad independiente y soporte local 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {locations?.map((location, index) => (
              <div 
                key={index}
                className="group p-6 bg-card border border-border rounded-xl hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden"
              >
                {/* Efecto de pulso desde el centro */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/40 via-primary/20 to-transparent scale-0 group-hover:scale-150 transition-transform duration-700 ease-out opacity-0 group-hover:opacity-100"></div>
                
                {/* Efecto de resplandor en los bordes */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/30 via-transparent to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Contenido relativo */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">{location?.city}</h4>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{location?.zone}</p>
                    </div>
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse group-hover:scale-150 group-hover:animate-bounce transition-all duration-300"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Usuarios:</span>
                      <span className="text-sm font-medium text-foreground group-hover:scale-125 transition-transform duration-300">{location?.users}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Satisfacción:</span>
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={12} className="text-warning fill-current group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-sm font-medium text-foreground group-hover:scale-125 transition-transform duration-300">{location?.satisfaction}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Uptime:</span>
                      <span className="text-sm font-medium text-success group-hover:scale-125 transition-transform duration-300">{location?.uptime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-8">
            Certificaciones y Cumplimiento
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="flex items-center space-x-3 bg-card/30 rounded-lg px-6 py-3">
              <Icon name="Shield" size={24} className="text-primary" />
              <div className="text-left">
                <div className="font-semibold text-foreground">ISO 27001</div>
                <div className="text-sm text-muted-foreground">Seguridad de Información</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/client-success-stories">
              <Button
                variant="default"
                iconName="Trophy"
                iconPosition="left"
                className="bg-gradient-medical hover:opacity-90"
              >
                Ver Casos de Éxito
              </Button>
            </Link>
            <Link to="/security-fortress">
              <Button
                variant="outline"
                iconName="Shield"
                iconPosition="left"
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                Conocer Seguridad
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;