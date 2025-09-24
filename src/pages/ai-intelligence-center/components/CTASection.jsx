import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import useActions from '../../../hooks/useActions';

const CTASection = () => {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    navigate('/demo-experience');
  };

  const handleContactClick = () => {
    navigate('/contact-support');
  };

  const { handleWhatsAppClick } = useActions();

  const benefits = [
    {
      icon: "TrendingUp",
      title: "95% Precisión",
      description: "En detección de anomalías"
    },
    {
      icon: "Clock",
      title: "< 2 Segundos",
      description: "Tiempo de análisis"
    },
    {
      icon: "Shield",
      title: "100% Seguro",
      description: "Datos protegidos"
    },
    {
      icon: "Users",
      title: "5 Sedes Activas",
      description: "En Venezuela"
    }
  ];

  const nextSteps = [
    {
      icon: "Play",
      title: "Ver Demo Interactivo",
      description: "Experimenta la IA en acción con casos reales",
      action: handleDemoClick,
      variant: "default",
      className: "bg-gradient-medical hover:opacity-90 shadow-medical-glow"
    },
    {
      icon: "Calendar",
      title: "Agendar Consultoría",
      description: "Evaluación personalizada para tu laboratorio",
      action: handleContactClick,
      variant: "outline",
      className: "border-primary text-primary hover:bg-primary/10"
    },
    {
      icon: "MessageCircle",
      title: "Contacto Directo",
      description: "Habla con nuestros especialistas por WhatsApp",
      action: handleWhatsAppClick,
      variant: "secondary",
      className: "bg-success/10 text-success hover:bg-success/20 border-success/20"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container-medical relative z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-medical">Lleva tu Diagnóstico</span>
            <br />
            <span className="text-foreground">al Siguiente Nivel</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Únete a los laboratorios venezolanos que ya están transformando sus diagnósticos 
            con la inteligencia artificial más avanzada del mercado médico.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {benefits?.map((benefit, index) => (
              <motion.div
                key={benefit?.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit?.icon} size={24} color="white" />
                </div>
                <div className="text-lg font-bold text-gradient-medical mb-1">
                  {benefit?.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {benefit?.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {nextSteps?.map((step, index) => (
            <motion.div
              key={step?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-medical rounded-xl flex items-center justify-center mx-auto mb-6">
                <Icon name={step?.icon} size={32} color="white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step?.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {step?.description}
              </p>
              
              <Button
                variant={step?.variant}
                size="lg"
                onClick={step?.action}
                iconName={step?.icon}
                iconPosition="left"
                className={step?.className}
                fullWidth
              >
                {step?.title}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Urgency Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-medical rounded-2xl p-8 text-center text-white"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Clock" size={24} />
              <span className="text-lg font-semibold">Oferta Limitada</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Implementación Gratuita para los Primeros 10 Laboratorios
            </h3>
            
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              Incluye onboarding personalizado, capacitación completa del equipo, 
              y 3 meses de soporte técnico especializado sin costo adicional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={handleDemoClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
              >
                Contáctanos
              </Button>
              
              <div className="flex items-center space-x-2 text-white/80">
                <Icon name="Users" size={16} />
                <span className="text-sm">7 laboratorios ya se unieron este mes</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Confiado por profesionales médicos en toda Venezuela
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} className="text-success" />
              <span className="text-sm">ISO 27001 Certificado</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={20} className="text-warning" />
              <span className="text-sm">4.9/5 Satisfacción</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;