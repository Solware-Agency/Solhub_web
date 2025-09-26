import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TrustBuildingSection = () => {
  const trustPrinciples = [
    {
      icon: "UserCheck",
      title: "El Médico Siempre Decide",
      description: "La IA proporciona insights y recomendaciones, pero la decisión diagnóstica final siempre permanece en manos del profesional médico.",
      details: [
        "Sistema de sugerencias, no de imposiciones",
        "Transparencia total en el proceso de análisis",
        "Capacidad de override en todas las recomendaciones",
        "Registro completo de decisiones médicas"
      ]
    },
    {
      icon: "Shield",
      title: "Datos Seguros y Privados",
      description: "Toda la información médica se procesa con los más altos estándares de seguridad y privacidad, cumpliendo normativas internacionales.",
      details: [
        "Encriptación end-to-end de todos los datos",
        "Cumplimiento ISO 27001 y normativas venezolanas",
        "Procesamiento local sin envío a servidores externos",
        "Auditorías de seguridad regulares"
      ]
    },
    {
      icon: "BookOpen",
      title: "IA Explicable y Transparente",
      description: "Cada recomendación viene acompañada de una explicación clara sobre cómo la IA llegó a esa conclusión.",
      details: [
        "Explicación paso a paso del análisis",
        "Referencias científicas de los algoritmos",
        "Visualización de patrones identificados",
        "Métricas de confianza en cada sugerencia"
      ]
    },
    {
      icon: "TrendingUp",
      title: "Mejora Continua",
      description: "El sistema aprende constantemente de los casos procesados, mejorando su precisión mientras mantiene la supervisión médica.",
      details: [
        "Algoritmos que se adaptan a patrones locales",
        "Feedback loop con profesionales médicos",
        "Actualizaciones basadas en nueva evidencia científica",
        "Validación continua con casos reales"
      ]
    }
  ];

  const certifications = [
    {
      name: "ISO 27001",
      description: "Gestión de Seguridad de la Información",
      icon: "Shield",
      status: "Certificado"
    },
  ];

  const testimonials = [
    {
      name: "Dr. María Elena Rodríguez",
      role: "Directora Médica",
      location: "Hospital Central de Valencia",
      quote: "SolIA no reemplaza mi criterio médico, lo potencia. Me da insights que me ayudan a ser más precisa en mis diagnósticos.",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Carlos Mendoza",
      role: "Jefe de Laboratorio",
      location: "Clínica Metropolitana Caracas",
      quote: "Lo que más valoro es la transparencia. Siempre entiendo por qué SolIA sugiere algo, y eso me da confianza para tomar decisiones.",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-medical">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient-medical">SolIA que Respeta</span>
            <br />
            <span className="text-foreground">la Experiencia Médica</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestra inteligencia artificial está diseñada para potenciar, no reemplazar, 
            el juicio clínico de los profesionales médicos venezolanos.
          </p>
        </motion.div>

        {/* Trust Principles */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 overflow-hidden">
          {trustPrinciples?.map((principle, index) => (
            <motion.div
              key={principle?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={principle?.icon} size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {principle?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {principle?.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {principle?.details?.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">{detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Certificaciones y Cumplimiento
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cumplimos con los más altos estándares internacionales de seguridad, 
              privacidad y calidad en software médico.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <motion.div
                key={cert?.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert?.icon} size={24} className="text-success" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{cert?.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{cert?.description}</p>
                <div className="inline-flex items-center px-2 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                  {cert?.status}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Medical Professional Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Testimonios de Profesionales Médicos
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Escucha lo que dicen los médicos que ya utilizan SolIA en sus diagnósticos diarios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 overflow-hidden">
            {testimonials?.map((testimonial, index) => (
              <motion.div
                key={testimonial?.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-8"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonial?.avatar} 
                      alt={testimonial?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial?.name}</h4>
                    <p className="text-sm text-primary">{testimonial?.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial?.location}</p>
                  </div>
                </div>

                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "{testimonial?.quote}"
                </blockquote>

                <div className="flex items-center space-x-1 mt-4">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-medical rounded-2xl p-8 text-center text-white"
        >
          <div className="max-w-3xl mx-auto">
            <Icon name="Shield" size={48} className="mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Garantía de Confianza SolHub
            </h3>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Nos comprometemos a mantener la transparencia total en nuestros procesos de SolIA, 
              respetando siempre la autoridad médica y protegiendo la privacidad de los pacientes. 
              Tu confianza es nuestro activo más valioso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={20} />
                <span>100% Transparente</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={20} />
                <span>Médico en Control</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={20} />
                <span>Datos Seguros</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBuildingSection;