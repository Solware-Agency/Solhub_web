import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Carlos Mendoza",
      role: "Director Médico",
      location: "Laboratorio Central - Caracas",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      content: `IBEX Medical transformó completamente nuestro flujo de trabajo. La integración de IA nos permite detectar anomalías que antes pasábamos por alto, y el tiempo de procesamiento se redujo en un 45%. Nuestros pacientes reciben resultados más rápidos y precisos.`,
      rating: 5,
      metrics: {
        efficiency: "+45%",
        accuracy: "99.9%",
        time_saved: "3 horas/día"
      }
    },
    {
      id: 2,
      name: "Lic. María Rodríguez",
      role: "Administradora de Clínica",
      location: "Centro Médico Valencia",
      avatar: "https://images.unsplash.com/photo-1594824388853-e4d2e8b6e2c5?w=150&h=150&fit=crop&crop=face",
      content: `La implementación fue sorprendentemente sencilla. El equipo de IBEX nos acompañó paso a paso, y en menos de una semana estábamos operando al 100%. El ROI se hizo evidente desde el primer mes con la reducción de errores y optimización de recursos.`,
      rating: 5,
      metrics: {
        roi: "+35%",
        errors: "-80%",
        implementation: "5 días"
      }
    },
    {
      id: 3,
      name: "Bioanalista José Herrera",
      role: "Jefe de Laboratorio",
      location: "Laboratorio Especializado - Maracaibo",
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
      content: `Como técnico, valoro mucho la interfaz intuitiva y las alertas inteligentes. El sistema aprende de nuestros patrones de trabajo y nos sugiere optimizaciones. La seguridad por sede nos da tranquilidad total con los datos sensibles de nuestros pacientes.`,
      rating: 5,
      metrics: {
        alerts: "100% precisas",
        security: "Nivel máximo",
        satisfaction: "4.9/5"
      }
    },
    {
      id: 4,
      name: "Dra. Ana Gutiérrez",
      role: "Propietaria de Laboratorio",
      location: "Laboratorio Integral - Barquisimeto",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      content: `IBEX Medical no solo mejoró nuestras operaciones, sino que nos posicionó como líderes tecnológicos en la región. Los reportes con IA impresionan a nuestros médicos referentes, y hemos aumentado significativamente nuestra base de clientes.`,
      rating: 5,
      metrics: {
        growth: "+60%",
        referrals: "+40%",
        reputation: "Líder regional"
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      <div className="container-medical relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Icon name="MessageSquare" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Testimonios Reales</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Lo que dicen</span>
            <br />
            <span className="text-gradient-medical">nuestros profesionales</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Testimonios auténticos de médicos, administradores y técnicos que ya transformaron 
            sus laboratorios con IBEX Medical.
          </p>
        </div>

        {/* Testimonial Display */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-medical rounded-full flex items-center justify-center">
              <Icon name="Quote" size={24} color="white" />
            </div>

            {/* Testimonial Content */}
            <div className="pt-8">
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonials?.[currentTestimonial]?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-warning fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                "{testimonials?.[currentTestimonial]?.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center space-x-4 mb-6 md:mb-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                    <img 
                      src={testimonials?.[currentTestimonial]?.avatar} 
                      alt={testimonials?.[currentTestimonial]?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">
                      {testimonials?.[currentTestimonial]?.name}
                    </div>
                    <div className="text-primary font-medium">
                      {testimonials?.[currentTestimonial]?.role}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials?.[currentTestimonial]?.location}
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-4">
                  {Object.entries(testimonials?.[currentTestimonial]?.metrics)?.map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-gradient-medical">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">
                        {key?.replace('_', ' ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-muted/50 hover:bg-muted rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-muted/50 hover:bg-muted rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial
                    ? 'bg-primary scale-125' :'bg-muted hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-muted/30 rounded-full h-1 mt-4">
            <div 
              className="bg-gradient-medical h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentTestimonial + 1) / testimonials?.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;