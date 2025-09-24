import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = ({ onWhatsAppClick, onDemoClick }) => {
  return (
    <section className="relative bg-gradient-medical py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container-medical relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Conecta con Nuestro
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
              Equipo de Expertos
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para apoyar tu transformación digital médica. Contacta con nosotros a través de tu canal preferido y recibe respuesta inmediata de nuestros especialistas venezolanos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="default"
              size="lg"
              onClick={onWhatsAppClick}
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-success hover:bg-success/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px]"
            >
              WhatsApp Directo
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onDemoClick}
              iconName="Calendar"
              iconPosition="left"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm min-w-[200px]"
            >
              Agendar Demo
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">&lt; 2 min</div>
              <div className="text-white/80 text-sm">Tiempo de Respuesta WhatsApp</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80 text-sm">Soporte Técnico Crítico</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5 Sedes</div>
              <div className="text-white/80 text-sm">Activas en Venezuela</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;