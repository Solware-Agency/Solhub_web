import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import StoryCard from './components/StoryCard';
import MetricsOverview from './components/MetricsOverview';
import FilterBar from './components/FilterBar';
import StoryModal from './components/StoryModal';
import ReferralProgram from './components/ReferralProgram';
import useActions from '../../hooks/useActions';

const ClientSuccessStories = () => {
  const [activeFilter, setActiveFilter] = useState({ type: 'all', size: 'all' });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredStories, setFilteredStories] = useState([]);
  const { handleWhatsAppClick } = useActions();

  const successStories = [
    {
      id: 1,
      facilityName: "Centro Diagnóstico Caracas",
      type: "Laboratorio Independiente",
      typeColor: "bg-primary/20 text-primary border border-primary/30",
      location: "Caracas, Distrito Capital",
      staffSize: 25,
      icon: "Building2",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop",
      description: "Laboratorio independiente líder en diagnósticos especializados que transformó completamente sus operaciones con SolHub.",
      fullDescription: `Centro Diagnóstico Caracas es un laboratorio independiente establecido en 1995, 
                       especializado en análisis clínicos de alta complejidad. Con 25 empleados y más de 
                       500 pacientes diarios, enfrentaban desafíos significativos en la gestión de flujos 
                       de trabajo y tiempos de entrega. La implementación de SolHub revolucionó 
                       sus operaciones, estableciendo nuevos estándares de eficiencia en el sector.`,
      implementationDate: "Marzo 2024",
      keyMetrics: [
        { value: "45%", label: "Reducción en Tiempo de Reporte", description: "De 24h a 13h promedio" },
        { value: "60%", label: "Aumento en Productividad", description: "Más muestras procesadas" },
        { value: "98%", label: "Satisfacción del Personal", description: "Flujos más eficientes" },
        { value: "35%", label: "Reducción de Errores", description: "Menos reprocesos" },
        { value: "250%", label: "ROI en 12 meses", description: "Retorno de inversión" },
        { value: "12 días", label: "Tiempo de Implementación", description: "Completamente operativo" }
      ],
      challenges: [
        "Procesos manuales lentos y propensos a errores",
        "Dificultad para rastrear muestras en tiempo real",
        "Reportes generados manualmente con retrasos",
        "Falta de integración entre departamentos",
        "Gestión ineficiente de inventario de reactivos"
      ],
      solutions: [
        "Automatización completa del flujo de muestras",
        "Sistema de trazabilidad en tiempo real",
        "Generación automática de reportes digitales",
        "Integración total entre todos los módulos",
        "Control inteligente de inventario con alertas"
      ],
      testimonial: {
        name: "Dr. María Elena Rodríguez",
        role: "Directora Médica",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        quote: `SolHub transformó completamente nuestras operaciones. Lo que antes 
                tomaba horas, ahora se completa en minutos. Nuestros pacientes reciben 
                resultados más rápido y con mayor precisión. Es la mejor inversión que 
                hemos hecho en tecnología médica.`
      }
    },
    {
      id: 2,
      facilityName: "Hospital Universitario Valencia",
      type: "Laboratorio Hospitalario",
      typeColor: "bg-secondary/20 text-secondary border border-secondary/30",
      location: "Valencia, Carabobo",
      staffSize: 45,
      icon: "Hospital",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      description: "Laboratorio hospitalario de alta complejidad que optimizó sus procesos críticos y mejoró la atención de emergencias.",
      fullDescription: `El Hospital Universitario Valencia, con más de 50 años de trayectoria, maneja 
                       un volumen de 800+ muestras diarias entre emergencias, hospitalización y consulta 
                       externa. Su laboratorio de 45 profesionales requería una solución robusta que 
                       pudiera manejar la complejidad de un hospital universitario mientras mantenía 
                       los más altos estándares de calidad y velocidad.`,
      implementationDate: "Enero 2024",
      keyMetrics: [
        { value: "38%", label: "Reducción en Tiempo de Emergencias", description: "Resultados críticos más rápidos" },
        { value: "50%", label: "Mejora en Flujo de Trabajo", description: "Procesos más eficientes" },
        { value: "95%", label: "Satisfacción Médica", description: "Doctores más satisfechos" },
        { value: "42%", label: "Reducción de Reprocesos", description: "Menos errores operativos" },
        { value: "300%", label: "ROI Hospitalario", description: "Retorno en 10 meses" },
        { value: "15 días", label: "Implementación Completa", description: "Sin interrumpir servicios" }
      ],
      challenges: [
        "Manejo de emergencias médicas con tiempos críticos",
        "Coordinación entre múltiples departamentos hospitalarios",
        "Volumen alto de muestras con prioridades variables",
        "Necesidad de reportes inmediatos para UCI",
        "Integración con sistemas hospitalarios existentes"
      ],
      solutions: [
        "Módulo de emergencias con alertas automáticas",
        "Dashboard centralizado para todos los departamentos",
        "Sistema de priorización inteligente de muestras",
        "Reportes instantáneos para áreas críticas",
        "API de integración con HIS hospitalario"
      ],
      testimonial: {
        name: "Dr. Carlos Mendoza",
        role: "Jefe de Laboratorio",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg",
        quote: `En un hospital universitario, cada minuto cuenta. SolHub nos permitió 
                reducir significativamente los tiempos de respuesta en emergencias, 
                lo que se traduce directamente en vidas salvadas. La integración 
                fue perfecta y el soporte técnico excepcional.`
      }
    },
    {
      id: 3,
      facilityName: "Clínica San Rafael",
      type: "Clínica Privada",
      typeColor: "bg-accent/20 text-accent border border-accent/30",
      location: "Maracaibo, Zulia",
      staffSize: 18,
      icon: "Stethoscope",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      description: "Clínica privada boutique que elevó su nivel de servicio y diferenciación competitiva con tecnología de vanguardia.",
      fullDescription: `Clínica San Rafael es una institución privada premium en Maracaibo, conocida 
                       por su atención personalizada y servicios médicos de alta calidad. Con 18 
                       profesionales especializados, atienden a una clientela exigente que valora 
                       la excelencia en el servicio. Buscaban una solución tecnológica que reflejara 
                       su compromiso con la innovación y la calidad superior.`,
      implementationDate: "Abril 2024",
      keyMetrics: [
        { value: "52%", label: "Mejora en Experiencia del Paciente", description: "Servicios más rápidos" },
        { value: "40%", label: "Aumento en Capacidad", description: "Más pacientes atendidos" },
        { value: "100%", label: "Satisfacción del Personal", description: "Equipo completamente satisfecho" },
        { value: "28%", label: "Reducción de Costos", description: "Operaciones más eficientes" },
        { value: "320%", label: "ROI Premium", description: "Retorno excepcional" },
        { value: "10 días", label: "Implementación Express", description: "Puesta en marcha rápida" }
      ],
      challenges: [
        "Expectativas altas de pacientes premium",
        "Necesidad de diferenciación competitiva",
        "Procesos artesanales que limitaban crecimiento",
        "Falta de herramientas de análisis de negocio",
        "Dificultad para escalar operaciones"
      ],
      solutions: [
        "Portal de pacientes con resultados en línea",
        "Dashboard ejecutivo con métricas de negocio",
        "Automatización de procesos administrativos",
        "Herramientas de análisis y reportes avanzados",
        "Arquitectura escalable para crecimiento futuro"
      ],
      testimonial: {
        name: "Dra. Ana Gutiérrez",
        role: "Directora Médica",
        avatar: "https://randomuser.me/api/portraits/women/38.jpg",
        quote: `SolHub nos permitió mantener nuestro toque personal mientras agregamos 
                la eficiencia tecnológica que nuestros pacientes esperan. Ahora 
                podemos ofrecer resultados más rápidos sin sacrificar la calidad 
                que nos caracteriza. Es perfecta para clínicas boutique como la nuestra.`
      }
    },
    {
      id: 4,
      facilityName: "Laboratorio Especializado Barquisimeto",
      type: "Laboratorio Especializado",
      typeColor: "bg-warning/20 text-warning border border-warning/30",
      location: "Barquisimeto, Lara",
      staffSize: 32,
      icon: "Microscope",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
      description: "Laboratorio especializado en análisis de alta complejidad que automatizó procesos críticos y mejoró la precisión diagnóstica.",
      fullDescription: `Laboratorio Especializado Barquisimeto se enfoca en análisis de alta complejidad 
                       como genética molecular, inmunología avanzada y microbiología especializada. 
                       Con 32 especialistas altamente calificados, manejan casos complejos que requieren 
                       precisión absoluta y trazabilidad completa. Su reputación se basa en la exactitud 
                       de diagnósticos difíciles y tiempos de respuesta confiables.`,
      implementationDate: "Febrero 2024",
      keyMetrics: [
        { value: "65%", label: "Mejora en Precisión", description: "Menos falsos positivos" },
        { value: "43%", label: "Reducción en Tiempo de Análisis", description: "Procesos más rápidos" },
        { value: "92%", label: "Satisfacción de Médicos Referentes", description: "Mejor servicio" },
        { value: "38%", label: "Aumento en Volumen", description: "Más casos complejos" },
        { value: "275%", label: "ROI Especializado", description: "Retorno en 11 meses" },
        { value: "18 días", label: "Implementación Técnica", description: "Configuración especializada" }
      ],
      challenges: [
        "Manejo de protocolos complejos y variables",
        "Trazabilidad absoluta requerida para casos legales",
        "Integración con equipos especializados diversos",
        "Gestión de controles de calidad rigurosos",
        "Reportes técnicos detallados y personalizados"
      ],
      solutions: [
        "Módulo de protocolos personalizables",
        "Sistema de trazabilidad forense completa",
        "Conectores para equipos especializados",
        "Controles de calidad automatizados",
        "Generador de reportes técnicos avanzados"
      ],
      testimonial: {
        name: "Dr. Luis Morales",
        role: "Director Científico",
        avatar: "https://randomuser.me/api/portraits/men/47.jpg",
        quote: `Para análisis especializados, la precisión es todo. SolHub nos dio 
                las herramientas para mantener nuestros estándares de excelencia 
                mientras mejoramos significativamente nuestros tiempos. Los módulos 
                especializados se adaptaron perfectamente a nuestros protocolos únicos.`
      }
    },
    {
      id: 5,
      facilityName: "Red Diagnóstica Miranda",
      type: "Red Multi-ubicación",
      typeColor: "bg-success/20 text-success border border-success/30",
      location: "Los Teques, Miranda",
      staffSize: 85,
      icon: "Network",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop",
      description: "Red de laboratorios con 5 ubicaciones que unificó operaciones y logró economías de escala significativas.",
      fullDescription: `Red Diagnóstica Miranda opera 5 laboratorios estratégicamente ubicados en 
                       Miranda, atendiendo más de 1,200 pacientes diarios con 85 empleados. Como 
                       red multi-ubicación, enfrentaban desafíos únicos de coordinación, 
                       estandarización de procesos y consolidación de datos. Necesitaban una 
                       solución que les permitiera operar como una sola entidad mientras 
                       mantenían la flexibilidad local.`,
      implementationDate: "Diciembre 2023",
      keyMetrics: [
        { value: "55%", label: "Mejora en Coordinación", description: "Entre todas las sedes" },
        { value: "47%", label: "Reducción de Costos Operativos", description: "Economías de escala" },
        { value: "89%", label: "Satisfacción Multi-sede", description: "Personal de todas las ubicaciones" },
        { value: "62%", label: "Aumento en Eficiencia", description: "Procesos estandarizados" },
        { value: "340%", label: "ROI de Red", description: "Retorno en 9 meses" },
        { value: "25 días", label: "Implementación Multi-sede", description: "Todas las ubicaciones" }
      ],
      challenges: [
        "Coordinación entre 5 ubicaciones diferentes",
        "Estandarización de procesos heterogéneos",
        "Consolidación de datos y reportes centralizados",
        "Gestión de inventario multi-ubicación",
        "Mantenimiento de calidad uniforme"
      ],
      solutions: [
        "Dashboard centralizado para todas las sedes",
        "Protocolos estandarizados automatizados",
        "Reportes consolidados en tiempo real",
        "Sistema de inventario distribuido inteligente",
        "Controles de calidad unificados"
      ],
      testimonial: {
        name: "Dra. Carmen Pérez",
        role: "Directora de Red",
        avatar: "https://randomuser.me/api/portraits/women/43.jpg",
        quote: `Manejar 5 laboratorios era como dirigir 5 empresas diferentes. SolHub 
                nos permitió unificar operaciones sin perder la flexibilidad local. 
                Ahora operamos como una sola red eficiente con economías de escala 
                que antes eran imposibles de lograr.`
      }
    }
  ];

  useEffect(() => {
    let filtered = successStories;

    // Filter by type
    if (activeFilter?.type !== 'all') {
      const typeMap = {
        'independent': 'Laboratorio Independiente',
        'hospital': 'Laboratorio Hospitalario',
        'clinic': 'Clínica Privada',
        'specialized': 'Laboratorio Especializado',
        'network': 'Red Multi-ubicación'
      };
      filtered = filtered?.filter(story => story?.type === typeMap?.[activeFilter?.type]);
    }

    // Filter by size
    if (activeFilter?.size !== 'all') {
      filtered = filtered?.filter(story => {
        if (activeFilter?.size === 'small') return story?.staffSize <= 10;
        if (activeFilter?.size === 'medium') return story?.staffSize > 10 && story?.staffSize <= 50;
        if (activeFilter?.size === 'large') return story?.staffSize > 50;
        return true;
      });
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered?.filter(story =>
        story?.facilityName?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        story?.location?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        story?.type?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        story?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      );
    }

    setFilteredStories(filtered);
  }, [activeFilter, searchTerm]);

  const handleFilterChange = (filterType, value) => {
    setActiveFilter(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleViewDetails = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-medical-subtle border-b border-border">
        <div className="container-medical">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-medical rounded-xl flex items-center justify-center">
                <Icon name="Trophy" size={24} color="white" />
              </div>
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                5 Sedes Activas en Venezuela
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Casos de <span className="text-gradient-medical">Éxito Reales</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Descubre cómo laboratorios líderes en Venezuela han transformado sus operaciones 
              con SolHub, logrando mejoras cuantificables en eficiencia, precisión y 
              satisfacción del personal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo-experience">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                  className="bg-gradient-medical hover:opacity-90 shadow-medical-glow"
                >
                  Ver Demo en Vivo
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="border-success text-success hover:bg-success/10"
                onClick={handleWhatsAppClick}
              >
                Contactar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Metrics Overview */}
      <section className="py-16">
        <div className="container-medical">
          <MetricsOverview />
        </div>
      </section>
      {/* Success Stories */}
      <section className="py-16 bg-muted/30">
        <div className="container-medical">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Historias de Transformación
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Cada implementación es única, pero los resultados son consistentemente 
              extraordinarios. Conoce los detalles de cada caso de éxito.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <FilterBar
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
          </div>

          {/* Stories Grid */}
          {filteredStories?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories?.map((story) => (
                <StoryCard
                  key={story?.id}
                  story={story}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No se encontraron casos
              </h3>
              <p className="text-muted-foreground mb-6">
                Intenta ajustar los filtros o términos de búsqueda
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setActiveFilter({ type: 'all', size: 'all' });
                  setSearchTerm('');
                }}
              >
                Limpiar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>
      {/* Referral Program */}
      <section className="py-16">
        <div className="container-medical">
          <ReferralProgram />
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-medical-subtle border-t border-border">
        <div className="container-medical">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              ¿Listo para Escribir tu Historia de Éxito?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Únete a los laboratorios líderes en Venezuela que ya están transformando 
              sus operaciones con SolHub. Tu historia de éxito podría ser la próxima.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-background/50 rounded-xl">
                <Icon name="Calendar" size={32} className="text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Demo Personalizada</h3>
                <p className="text-sm text-muted-foreground">
                  Agenda una demostración adaptada a tu laboratorio
                </p>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-xl">
                <Icon name="MessageCircle" size={32} className="text-success mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Consulta Directa</h3>
                <p className="text-sm text-muted-foreground">
                  Habla directamente con nuestros especialistas
                </p>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-xl">
                <Icon name="FileText" size={32} className="text-secondary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Análisis Gratuito</h3>
                <p className="text-sm text-muted-foreground">
                  Evaluación sin costo de tus procesos actuales
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Rocket"
                iconPosition="left"
                className="bg-gradient-medical hover:opacity-90 shadow-medical-glow"
              >
                Comenzar mi Transformación
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
              >
                Descargar Casos de Estudio
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Story Modal */}
      <StoryModal
        story={selectedStory}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      {/* Footer */}
      <footer className="py-12 border-t border-border bg-background">
        <div className="container-medical">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-medical rounded-xl flex items-center justify-center">
                <Icon name="Activity" size={20} color="white" />
              </div>
              <span className="text-xl font-bold text-gradient-medical">SolHub</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Transformando laboratorios médicos en Venezuela con tecnología de vanguardia
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <span>© {new Date()?.getFullYear()} SolHub</span>
              <span>•</span>
              <span>Hecho con ❤️ en Venezuela</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClientSuccessStories;