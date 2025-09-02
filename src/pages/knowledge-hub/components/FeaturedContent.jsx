import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedContent = () => {
  const featuredItems = [
    {
      id: 1,
      type: 'guide',
      title: 'Guía Completa: Implementación de IA en Laboratorios Venezolanos',
      description: 'Manual paso a paso para integrar inteligencia artificial en diagnósticos médicos, adaptado a las regulaciones y realidades del sistema de salud venezolano.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      author: 'Dr. Carlos Mendoza',
      readTime: '15 min',
      category: 'IA Médica',
      featured: true,
      downloadCount: 1250
    },
    {
      id: 2,
      type: 'case-study',
      title: 'Caso de Éxito: Laboratorio Central de Caracas',
      description: 'Cómo el Laboratorio Central de Caracas redujo en 40% el tiempo de procesamiento de muestras implementando IBEX Medical.',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop',
      author: 'Dra. María González',
      readTime: '8 min',
      category: 'Casos de Éxito',
      featured: true,
      views: 2100
    },
    {
      id: 3,
      type: 'webinar',
      title: 'Webinar: Seguridad de Datos Médicos en Venezuela',
      description: 'Sesión especializada sobre cumplimiento normativo y mejores prácticas para proteger información médica sensible.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
      author: 'Ing. Roberto Silva',
      duration: '45 min',
      category: 'Cumplimiento',
      featured: true,
      attendees: 850
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'guide': return 'BookOpen';
      case 'case-study': return 'Trophy';
      case 'webinar': return 'Video';
      default: return 'FileText';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'guide': return 'text-primary';
      case 'case-study': return 'text-success';
      case 'webinar': return 'text-secondary';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Contenido Destacado</h2>
          <p className="text-muted-foreground">Los recursos más populares y actualizados de nuestra comunidad</p>
        </div>
        <Button variant="outline" iconName="ArrowRight" iconPosition="right">
          Ver Todo
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {featuredItems?.map((item, index) => (
          <div
            key={item?.id}
            className={`card-medical-elevated group cursor-pointer hover:scale-105 transition-all duration-300 ${
              index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
            }`}
          >
            <div className="relative overflow-hidden rounded-t-xl">
              <Image
                src={item?.image}
                alt={item?.title}
                className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                  index === 0 ? 'h-64 lg:h-80' : 'h-48'
                }`}
              />
              <div className="absolute top-4 left-4">
                <div className={`inline-flex items-center space-x-2 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 ${getTypeColor(item?.type)}`}>
                  <Icon name={getTypeIcon(item?.type)} size={14} />
                  <span className="text-xs font-medium capitalize">{item?.type}</span>
                </div>
              </div>
              {item?.featured && (
                <div className="absolute top-4 right-4">
                  <div className="bg-accent text-white rounded-full px-3 py-1">
                    <span className="text-xs font-medium">Destacado</span>
                  </div>
                </div>
              )}
            </div>

            <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
              <div className="flex items-center space-x-4 mb-3">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {item?.category}
                </span>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Icon name="Clock" size={12} />
                  <span>{item?.readTime || item?.duration}</span>
                </div>
              </div>

              <h3 className={`font-bold text-foreground mb-3 group-hover:text-primary transition-colors ${
                index === 0 ? 'text-xl lg:text-2xl' : 'text-lg'
              }`}>
                {item?.title}
              </h3>

              <p className={`text-muted-foreground mb-4 ${
                index === 0 ? 'text-base' : 'text-sm'
              }`}>
                {item?.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-medical rounded-full flex items-center justify-center">
                    <Icon name="User" size={14} color="white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{item?.author}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  {item?.downloadCount && (
                    <div className="flex items-center space-x-1">
                      <Icon name="Download" size={12} />
                      <span>{item?.downloadCount?.toLocaleString()}</span>
                    </div>
                  )}
                  {item?.views && (
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={12} />
                      <span>{item?.views?.toLocaleString()}</span>
                    </div>
                  )}
                  {item?.attendees && (
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={12} />
                      <span>{item?.attendees}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedContent;