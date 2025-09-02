import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SecurityTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. María Elena Rodríguez",
      role: "Directora Médica",
      clinic: "Laboratorio Central Caracas",
      location: "Caracas, Distrito Capital",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      testimonial: `La seguridad de IBEX Medical nos ha dado la tranquilidad que necesitábamos para digitalizar completamente nuestro laboratorio. El sistema de 'Seguridad por Sede' es exactamente lo que buscábamos - nuestros datos están completamente aislados y protegidos.\n\nLa implementación fue impecable y el equipo técnico nos acompañó en cada paso. Ahora podemos cumplir con todas las regulaciones venezolanas sin preocupaciones.`,
      securityFeatures: [
        "Encriptación AES-256 implementada",
        "Auditorías mensuales completadas",
        "Cumplimiento HIPAA verificado",
        "Respaldos automáticos funcionando"
      ],
      metrics: {
        implementation: "3 semanas",
        compliance: "100%",
        uptime: "99.9%",
        users: "45 usuarios"
      }
    },
    {
      id: 2,
      name: "Ing. Carlos Mendoza",
      role: "Administrador de Sistemas",
      clinic: "Clínica Médica Valencia",
      location: "Valencia, Carabobo",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      testimonial: `Como administrador de sistemas, puedo confirmar que IBEX Medical tiene la arquitectura de seguridad más robusta que he visto en el sector médico venezolano. Los controles de acceso son granulares y el monitoreo en tiempo real nos permite detectar cualquier anomalía inmediatamente.\n\nLa documentación técnica es excelente y el soporte para implementar las mejores prácticas de seguridad ha sido excepcional.`,
      securityFeatures: [
        "Monitoreo 24/7 activo",
        "Controles de acceso por rol",
        "Logs de auditoría completos",
        "Detección de intrusiones"
      ],
      metrics: {
        implementation: "2 semanas",
        compliance: "98%",
        uptime: "99.8%",
        users: "32 usuarios"
      }
    },
    {
      id: 3,
      name: "Dra. Ana Sofía Herrera",
      role: "Jefa de Laboratorio",
      clinic: "Centro Diagnóstico Maracaibo",
      location: "Maracaibo, Zulia",
      avatar: "https://images.unsplash.com/photo-1594824475317-d0d4e6e6b6b0?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      testimonial: `La confianza que tenemos en la seguridad de IBEX Medical es total. Manejamos información médica muy sensible y necesitábamos una solución que cumpliera con estándares internacionales pero que también entendiera el contexto venezolano.\n\nEl sistema de permisos por rol es perfecto - cada técnico, médico y administrativo tiene acceso exactamente a lo que necesita, nada más, nada menos.`,
      securityFeatures: [
        "Permisos granulares por rol",
        "Autenticación multifactor",
        "Cifrado de datos en reposo",
        "Políticas de retención"
      ],
      metrics: {
        implementation: "4 semanas",
        compliance: "99%",
        uptime: "99.7%",
        users: "28 usuarios"
      }
    },
    {
      id: 4,
      name: "Lic. Roberto Castillo",
      role: "Gerente Administrativo",
      clinic: "Laboratorio Clínico Barquisimeto",
      location: "Barquisimeto, Lara",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      testimonial: `Desde el punto de vista administrativo, IBEX Medical nos ha permitido cumplir con todas las regulaciones de protección de datos sin complicar nuestros procesos operativos. Las auditorías de seguridad son automáticas y los reportes de cumplimiento nos facilitan mucho el trabajo.\n\nLa tranquilidad de saber que nuestros datos están seguros no tiene precio.`,
      securityFeatures: [
        "Auditorías automáticas",
        "Reportes de cumplimiento",
        "Gestión de incidentes",
        "Políticas de seguridad"
      ],
      metrics: {
        implementation: "3 semanas",
        compliance: "97%",
        uptime: "99.9%",
        users: "22 usuarios"
      }
    },
    {
      id: 5,
      name: "Dr. Luis Fernando Morales",
      role: "Director General",
      clinic: "Centro Médico San Cristóbal",
      location: "San Cristóbal, Táchira",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      testimonial: `La decisión de implementar IBEX Medical fue una de las mejores que hemos tomado. La seguridad de nivel hospitalario que ofrece nos ha permitido expandir nuestros servicios con total confianza.\n\nEl equipo de IBEX entiende perfectamente las necesidades del sector médico venezolano y su enfoque de 'Seguridad por Sede' es exactamente lo que necesitábamos para mantener la privacidad de nuestros pacientes.`,
      securityFeatures: [
        "Seguridad nivel hospitalario",
        "Privacidad de pacientes",
        "Escalabilidad segura",
        "Soporte especializado"
      ],
      metrics: {
        implementation: "5 semanas",
        compliance: "98%",
        uptime: "99.6%",
        users: "38 usuarios"
      }
    }
  ];

  const currentTestimonial = testimonials?.[activeTestimonial];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container-medical">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 rounded-full px-4 py-2 mb-6">
            <Icon name="MessageSquare" size={16} color="var(--color-success)" />
            <span className="text-success font-semibold text-sm">Testimonios de Seguridad</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes sobre Seguridad
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profesionales médicos venezolanos confían en IBEX Medical para proteger 
            la información más sensible de sus pacientes y operaciones.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-card border border-border rounded-xl p-8 mb-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <Image
                      src={currentTestimonial?.avatar}
                      alt={currentTestimonial?.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-background flex items-center justify-center">
                      <Icon name="Check" size={12} color="white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{currentTestimonial?.name}</h3>
                    <p className="text-muted-foreground">{currentTestimonial?.role}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Icon name="MapPin" size={14} color="var(--color-muted-foreground)" />
                      <span className="text-sm text-muted-foreground">{currentTestimonial?.location}</span>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <div className="flex items-center space-x-1">
                      {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                        <Icon key={i} name="Star" size={16} color="var(--color-warning)" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <Icon name="Quote" size={32} color="var(--color-primary)" className="mb-4 opacity-50" />
                  <p className="text-foreground leading-relaxed whitespace-pre-line">
                    {currentTestimonial?.testimonial}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <strong className="text-foreground">{currentTestimonial?.clinic}</strong>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 bg-muted/50 hover:bg-muted rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <Icon name="ChevronLeft" size={20} color="var(--color-foreground)" />
                    </button>
                    <span className="text-sm text-muted-foreground">
                      {activeTestimonial + 1} / {testimonials?.length}
                    </span>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 bg-muted/50 hover:bg-muted rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <Icon name="ChevronRight" size={20} color="var(--color-foreground)" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Security Features & Metrics */}
              <div className="lg:col-span-1 space-y-6">
                {/* Security Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Características de Seguridad Implementadas</h4>
                  <div className="space-y-2">
                    {currentTestimonial?.securityFeatures?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 bg-success/5 border border-success/20 rounded-lg">
                        <Icon name="Shield" size={14} color="var(--color-success)" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Métricas de Implementación</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-muted/30 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-primary">{currentTestimonial?.metrics?.implementation}</div>
                      <div className="text-xs text-muted-foreground">Implementación</div>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-success">{currentTestimonial?.metrics?.compliance}</div>
                      <div className="text-xs text-muted-foreground">Cumplimiento</div>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-secondary">{currentTestimonial?.metrics?.uptime}</div>
                      <div className="text-xs text-muted-foreground">Disponibilidad</div>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-accent">{currentTestimonial?.metrics?.users}</div>
                      <div className="text-xs text-muted-foreground">Usuarios</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Thumbnails */}
          <div className="flex items-center justify-center space-x-4">
            {testimonials?.map((testimonial, index) => (
              <button
                key={testimonial?.id}
                onClick={() => setActiveTestimonial(index)}
                className={`relative transition-all duration-300 ${
                  activeTestimonial === index 
                    ? 'scale-110 ring-2 ring-primary ring-offset-2 ring-offset-background' :'opacity-60 hover:opacity-80'
                }`}
              >
                <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {activeTestimonial === index && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">5</div>
            <div className="text-sm text-muted-foreground">Sedes Protegidas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Cumplimiento ISO</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Monitoreo Activo</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">0</div>
            <div className="text-sm text-muted-foreground">Brechas de Seguridad</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTestimonials;