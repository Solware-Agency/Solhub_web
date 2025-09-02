import React from 'react';
import Icon from '../../../components/AppIcon';


const HeroSection = ({ onSearchChange, searchQuery }) => {
  return (
    <section className="relative bg-gradient-medical py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>
      <div className="container-medical relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Icon name="BookOpen" size={16} color="white" />
            <span className="text-sm font-medium text-white">Centro de Conocimiento</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Recursos para la
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
              Transformación Digital
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Guías especializadas, casos de éxito y recursos educativos para impulsar la digitalización de laboratorios médicos en Venezuela
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icon name="Search" size={20} color="white" className="opacity-60" />
              </div>
              <input
                type="text"
                placeholder="Buscar guías, artículos, webinars..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e?.target?.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-white/70">Guías Técnicas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">25+</div>
              <div className="text-sm text-white/70">Casos de Éxito</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">15+</div>
              <div className="text-sm text-white/70">Webinars</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">1000+</div>
              <div className="text-sm text-white/70">Profesionales</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;