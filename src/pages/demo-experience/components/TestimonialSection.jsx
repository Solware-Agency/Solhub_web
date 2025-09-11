import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. María Elena Rodríguez",
      position: "Directora Médica",
      organization: "Laboratorio Clínico San Rafael",
      location: "Caracas, Venezuela",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial: `El demo de SolHub superó completamente nuestras expectativas. En 45 minutos pudimos ver cómo el sistema resolvería todos nuestros problemas operativos actuales.\n\nLo que más me impresionó fue la facilidad de uso y cómo se adapta perfectamente a nuestros flujos de trabajo existentes. La implementación fue mucho más sencilla de lo que imaginábamos.`,
      demoExperience: "Demo personalizado enfocado en gestión de pacientes y reportes médicos",
      implementationTime: "3 semanas",
      keyBenefit: "Reducción del 60% en tiempo de procesamiento de resultados"
    },
    {
      id: 2,
      name: "Lic. Carlos Mendoza",
      position: "Administrador General",
      organization: "Centro de Diagnóstico Integral",
      location: "Valencia, Venezuela",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial: `Antes del demo tenía muchas dudas sobre la digitalización de nuestro laboratorio. El equipo de SolHub no solo nos mostró las funcionalidades, sino que nos ayudó a entender el ROI específico para nuestro caso.\n\nLa calculadora de costos que utilizaron durante el demo fue muy transparente. Pudimos ver exactamente cómo se justificaba la inversión.`,
      demoExperience: "Demo enfocado en ROI y análisis financiero",
      implementationTime: "4 semanas",
      keyBenefit: "ROI del 180% en el primer año de operación"
    },
    {
      id: 3,
      name: "Bioanalista Ana Lucía Pérez",
      position: "Jefe de Laboratorio",
      organization: "Laboratorio Médico Central",
      location: "Maracaibo, Venezuela",
      avatar: "https://images.unsplash.com/photo-1594824475317-d3c0b8e7e0b3?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial: `Como técnica de laboratorio, mi principal preocupación era que el sistema fuera complicado de usar. Durante el demo, pude interactuar directamente con la plataforma y me sorprendió lo intuitiva que es.\n\nEl equipo de SolHub se tomó el tiempo de mostrarme cada paso del proceso de análisis. Ahora nuestro trabajo es mucho más eficiente y con menos errores.`,
      demoExperience: "Demo técnico con enfoque en flujos de trabajo de laboratorio",
      implementationTime: "2 semanas",
      keyBenefit: "Eliminación del 95% de errores de transcripción manual"
    },
    {
      id: 4,
      name: "Dr. Roberto Silva",
      position: "Propietario",
      organization: "Laboratorio Clínico Metropolitano",
      location: "Barquisimeto, Venezuela",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial: `Había evaluado varias opciones antes de contactar a SolHub. Su demo fue el más completo y profesional que recibí. No solo mostraron el software, sino que entendieron perfectamente las necesidades específicas de nuestro laboratorio.\n\nLa integración con nuestros equipos existentes fue perfecta. El soporte post-implementación ha sido excepcional.`,
      demoExperience: "Demo comparativo con análisis de competencia",
      implementationTime: "5 semanas",
      keyBenefit: "Aumento del 40% en capacidad de procesamiento diario"
    },
    {
      id: 5,
      name: "Lic. Patricia Morales",
      position: "Coordinadora Administrativa",
      organization: "Red de Laboratorios Salud Total",
      location: "Mérida, Venezuela",
      avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial: `Manejamos múltiples ubicaciones y necesitábamos una solución que nos permitiera centralizar la gestión. El demo de SolHub nos mostró exactamente cómo podríamos unificar todas nuestras operaciones.\n\nLa capacidad de generar reportes consolidados y el control de acceso por roles fueron características que nos convencieron inmediatamente.`,
      demoExperience: "Demo multi-sede con enfoque en gestión centralizada",
      implementationTime: "6 semanas",
      keyBenefit: "Centralización exitosa de 4 ubicaciones diferentes"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
          <Icon name="MessageSquare" size={20} className="text-success" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            Experiencias de Demo
          </h3>
          <p className="text-sm text-muted-foreground">
            Lo que dicen los profesionales médicos sobre nuestras demostraciones
          </p>
        </div>
      </div>
      {/* Main Testimonial Display */}
      <div className="bg-muted/20 rounded-xl p-6 mb-6">
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative">
            <Image
              src={currentTestimonial?.avatar}
              alt={currentTestimonial?.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-background flex items-center justify-center">
              <Icon name="Check" size={12} color="white" />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h4 className="text-lg font-semibold text-foreground">
                {currentTestimonial?.name}
              </h4>
              <div className="flex items-center space-x-1">
                {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={14} className="text-warning fill-current" />
                ))}
              </div>
            </div>
            <p className="text-sm text-primary font-medium">
              {currentTestimonial?.position}
            </p>
            <p className="text-sm text-muted-foreground">
              {currentTestimonial?.organization}
            </p>
            <div className="flex items-center space-x-1 mt-1">
              <Icon name="MapPin" size={12} className="text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                {currentTestimonial?.location}
              </span>
            </div>
          </div>
        </div>

        <blockquote className="text-foreground leading-relaxed mb-4">
          {currentTestimonial?.testimonial?.split('\n')?.map((paragraph, index) => (
            <p key={index} className={index > 0 ? 'mt-3' : ''}>
              {paragraph}
            </p>
          ))}
        </blockquote>

        {/* Demo Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-4 border-t border-border">
          <div className="bg-primary/5 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="Presentation" size={14} className="text-primary" />
              <span className="text-xs font-medium text-foreground">Tipo de Demo</span>
            </div>
            <p className="text-xs text-muted-foreground">
              {currentTestimonial?.demoExperience}
            </p>
          </div>
          
          <div className="bg-secondary/5 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="Clock" size={14} className="text-secondary" />
              <span className="text-xs font-medium text-foreground">Implementación</span>
            </div>
            <p className="text-xs text-muted-foreground">
              {currentTestimonial?.implementationTime}
            </p>
          </div>
          
          <div className="bg-success/5 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="TrendingUp" size={14} className="text-success" />
              <span className="text-xs font-medium text-foreground">Beneficio Clave</span>
            </div>
            <p className="text-xs text-muted-foreground">
              {currentTestimonial?.keyBenefit}
            </p>
          </div>
        </div>
      </div>
      {/* Navigation Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={prevTestimonial}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-muted/50 hover:bg-muted text-foreground transition-all duration-200"
        >
          <Icon name="ChevronLeft" size={16} />
          <span className="text-sm">Anterior</span>
        </button>

        <div className="flex items-center space-x-2">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === activeTestimonial
                  ? 'bg-primary' :'bg-muted hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-muted/50 hover:bg-muted text-foreground transition-all duration-200"
        >
          <span className="text-sm">Siguiente</span>
          <Icon name="ChevronRight" size={16} />
        </button>
      </div>
      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">5</div>
          <div className="text-xs text-muted-foreground">Sedes Activas</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-secondary mb-1">100%</div>
          <div className="text-xs text-muted-foreground">Satisfacción</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-success mb-1">45min</div>
          <div className="text-xs text-muted-foreground">Demo Promedio</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-warning mb-1">3-6</div>
          <div className="text-xs text-muted-foreground">Semanas Setup</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;