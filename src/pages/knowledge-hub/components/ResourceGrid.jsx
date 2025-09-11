import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ResourceGrid = ({ searchQuery, activeCategory }) => {
  const resources = [
    {
      id: 1,
      type: 'guide',
      title: 'Checklist de Implementación para Laboratorios Pequeños',
      description: 'Lista verificable de pasos esenciales para implementar SolHub en laboratorios con menos de 10 empleados.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
      category: 'implementation',
      author: 'Equipo SolHub',
      readTime: '5 min',
      downloadCount: 890,
      tags: ['checklist', 'pequeños laboratorios', 'implementación'],
      date: '2025-08-28'
    },
    {
      id: 2,
      type: 'article',
      title: 'Regulaciones de Datos Médicos en Venezuela: Guía 2025',
      description: 'Análisis completo de las regulaciones actuales para el manejo de datos médicos en territorio venezolano.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop',
      category: 'compliance',
      author: 'Dra. Ana Rodríguez',
      readTime: '12 min',
      views: 1540,
      tags: ['regulaciones', 'cumplimiento', 'venezuela'],
      date: '2025-08-25'
    },
    {
      id: 3,
      type: 'case-study',
      title: 'Transformación Digital: Laboratorio Valencia',
      description: 'Caso completo de implementación exitosa en uno de los laboratorios más grandes de Valencia.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop',
      category: 'case-studies',
      author: 'Dr. Luis Morales',
      readTime: '10 min',
      views: 2100,
      tags: ['valencia', 'transformación', 'éxito'],
      date: '2025-08-22'
    },
    {
      id: 4,
      type: 'template',
      title: 'Plantilla de Evaluación de ROI',
      description: 'Calculadora Excel para evaluar el retorno de inversión de implementar SolHub.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      category: 'templates',
      author: 'Equipo Financiero SolHub',
      downloadCount: 650,
      tags: ['roi', 'excel', 'evaluación'],
      date: '2025-08-20'
    },
    {
      id: 5,
      type: 'webinar',
      title: 'IA en Diagnósticos: Casos Prácticos Venezolanos',
      description: 'Sesión grabada con ejemplos reales de implementación de IA en laboratorios venezolanos.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
      category: 'ai-integration',
      author: 'Dr. Miguel Herrera',
      duration: '60 min',
      attendees: 750,
      tags: ['ia', 'diagnósticos', 'casos prácticos'],
      date: '2025-08-18'
    },
    {
      id: 6,
      type: 'guide',
      title: 'Manual de Capacitación de Personal',
      description: 'Guía completa para entrenar al personal en el uso de SolHub, con ejercicios prácticos.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
      category: 'implementation',
      author: 'Equipo de Capacitación',
      readTime: '20 min',
      downloadCount: 1100,
      tags: ['capacitación', 'personal', 'entrenamiento'],
      date: '2025-08-15'
    },
    {
      id: 7,
      type: 'article',
      title: 'Mejores Prácticas de Seguridad de Datos',
      description: 'Recomendaciones técnicas para mantener la seguridad de datos médicos en entornos digitalizados.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
      category: 'compliance',
      author: 'Ing. Patricia Vásquez',
      readTime: '8 min',
      views: 980,
      tags: ['seguridad', 'datos', 'mejores prácticas'],
      date: '2025-08-12'
    },
    {
      id: 8,
      type: 'case-study',
      title: 'Éxito en Maracaibo: 50% Reducción de Errores',
      description: 'Análisis detallado de cómo un laboratorio en Maracaibo redujo errores diagnósticos significativamente.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop',
      category: 'case-studies',
      author: 'Dra. Carmen Delgado',
      readTime: '7 min',
      views: 1650,
      tags: ['maracaibo', 'reducción errores', 'diagnósticos'],
      date: '2025-08-10'
    },
    {
      id: 9,
      type: 'template',
      title: 'Formato de Auditoría de Cumplimiento',
      description: 'Plantilla para realizar auditorías internas de cumplimiento normativo en laboratorios.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
      category: 'templates',
      author: 'Equipo Legal SolHub',
      downloadCount: 420,
      tags: ['auditoría', 'cumplimiento', 'plantilla'],
      date: '2025-08-08'
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'guide': return 'BookOpen';
      case 'article': return 'FileText';
      case 'case-study': return 'Trophy';
      case 'webinar': return 'Video';
      case 'template': return 'Download';
      default: return 'FileText';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'guide': return 'text-primary bg-primary/10';
      case 'article': return 'text-secondary bg-secondary/10';
      case 'case-study': return 'text-success bg-success/10';
      case 'webinar': return 'text-accent bg-accent/10';
      case 'template': return 'text-warning bg-warning/10';
      default: return 'text-muted-foreground bg-muted/10';
    }
  };

  const filteredResources = resources?.filter(resource => {
    const matchesSearch = !searchQuery || 
      resource?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      resource?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      resource?.tags?.some(tag => tag?.toLowerCase()?.includes(searchQuery?.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || resource?.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">
            Recursos Disponibles
            <span className="text-sm font-normal text-muted-foreground ml-2">
              ({filteredResources?.length} resultados)
            </span>
          </h2>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" iconName="Filter">
            Filtrar
          </Button>
          <Button variant="ghost" size="sm" iconName="ArrowUpDown">
            Ordenar
          </Button>
        </div>
      </div>
      {filteredResources?.length === 0 ? (
        <div className="text-center py-12">
          <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No se encontraron recursos</h3>
          <p className="text-muted-foreground">Intenta con otros términos de búsqueda o categorías</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources?.map((resource) => (
            <div key={resource?.id} className="card-medical group cursor-pointer hover:scale-105 transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-xl">
                <Image
                  src={resource?.image}
                  alt={resource?.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <div className={`inline-flex items-center space-x-1 rounded-full px-2 py-1 text-xs font-medium ${getTypeColor(resource?.type)}`}>
                    <Icon name={getTypeIcon(resource?.type)} size={12} />
                    <span className="capitalize">{resource?.type}</span>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Icon name="Calendar" size={12} />
                    <span>{new Date(resource.date)?.toLocaleDateString('es-VE')}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Icon name="Clock" size={12} />
                    <span>{resource?.readTime || resource?.duration}</span>
                  </div>
                </div>

                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {resource?.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {resource?.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {resource?.tags?.slice(0, 3)?.map((tag, index) => (
                    <span key={index} className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-medical rounded-full flex items-center justify-center">
                      <Icon name="User" size={12} color="white" />
                    </div>
                    <span className="text-xs text-muted-foreground">{resource?.author}</span>
                  </div>

                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    {resource?.downloadCount && (
                      <div className="flex items-center space-x-1">
                        <Icon name="Download" size={12} />
                        <span>{resource?.downloadCount}</span>
                      </div>
                    )}
                    {resource?.views && (
                      <div className="flex items-center space-x-1">
                        <Icon name="Eye" size={12} />
                        <span>{resource?.views}</span>
                      </div>
                    )}
                    {resource?.attendees && (
                      <div className="flex items-center space-x-1">
                        <Icon name="Users" size={12} />
                        <span>{resource?.attendees}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ResourceGrid;