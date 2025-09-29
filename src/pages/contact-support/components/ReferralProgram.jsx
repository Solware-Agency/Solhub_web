import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { sendReferralEmail } from '../../../lib/emailjs';

const ReferralProgram = () => {
  const [referralForm, setReferralForm] = useState({
    referrerName: '',
    referrerEmail: '',
    referrerPhone: '',
    referredName: '',
    referredEmail: '',
    referredPhone: '',
    referredInstitution: '',
    relationship: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const benefits = [
    {
      icon: 'Percent',
      title: '20% Descuento Permanente',
      description: 'El laboratorio referido obtiene 20% de descuento en su plan mensual de por vida',
      color: 'success'
    },
    {
      icon: 'Gift',
      title: 'Beneficios para Ti',
      description: 'Recibe créditos en tu cuenta y acceso prioritario a nuevas funcionalidades',
      color: 'primary'
    },
    {
      icon: 'Users',
      title: 'Sin Límites',
      description: 'Refiere tantos laboratorios como quieras y acumula beneficios por cada uno',
      color: 'secondary'
    },
    {
      icon: 'Trophy',
      title: 'Reconocimiento',
      description: 'Forma parte de nuestro programa VIP con beneficios exclusivos y soporte premium',
      color: 'accent'
    }
  ];

  const successStories = [
    {
      referrer: 'Dr. María González',
      institution: 'Laboratorio San Rafael',
      city: 'Caracas',
      referrals: 3,
      savings: '$2,400',
      testimonial: 'Referir SolHub a mis colegas ha sido muy gratificante. No solo ayudo a otros laboratorios a modernizarse, sino que también obtengo beneficios significativos.'
    },
    {
      referrer: 'Lic. Carlos Mendoza',
      institution: 'Clínica Integral Zulia',
      city: 'Maracaibo',
      referrals: 2,
      savings: '$1,800',
      testimonial: 'El programa de referidos de SolHub es transparente y justo. Mis referidos están muy satisfechos con el descuento y yo con los beneficios recibidos.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setReferralForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviar referido usando Resend
      const result = await sendReferralEmail(referralForm);
      
      if (result.success) {
        setSubmitSuccess(true);
        setReferralForm({
          referrerName: '',
          referrerEmail: '',
          referrerPhone: '',
          referredName: '',
          referredEmail: '',
          referredPhone: '',
          referredInstitution: '',
          relationship: '',
          notes: ''
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Error submitting referral:', error);
      alert(error.message || 'Error al enviar el referido. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      success: 'text-success bg-success/10',
      primary: 'text-primary bg-primary/10',
      secondary: 'text-secondary bg-secondary/10',
      accent: 'text-accent bg-accent/10'
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  if (submitSuccess) {
    return (
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-medical">
          <div className="max-w-2xl mx-auto">
            <div className="card-medical-elevated p-12 text-center">
              <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircle" size={40} className="text-success" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ¡Referido Enviado Exitosamente!
              </h3>
              <p className="text-muted-foreground mb-8">
                Hemos recibido la información del referido y nos pondremos en contacto con ellos 
                para ofrecerles el descuento especial. ¡Gracias por recomendar SolHub!
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Gift" size={16} />
                  <span>El referido recibirá 20% de descuento permanente</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} />
                  <span>Contactaremos al referido en las próximas 24 horas</span>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => setSubmitSuccess(false)}
                className="mt-8"
              >
                Enviar Otro Referido
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="referral-program" className="py-16 lg:py-24 bg-background">
      <div className="container-medical">
        {/* Section Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comparte SolHub y
            <span className="block text-gradient-medical">Obtén Beneficios</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ayuda a otros laboratorios médicos venezolanos a modernizarse y recibe beneficios exclusivos por cada referido exitoso.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits?.map((benefit, index) => (
            <div 
              key={index} 
              className={`group card-medical-elevated p-6 text-center hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                benefit?.color === 'success' ? 'hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:border-success/30' :
                benefit?.color === 'primary' ? 'hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-primary/30' :
                benefit?.color === 'secondary' ? 'hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:border-secondary/30' :
                benefit?.color === 'accent' ? 'hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:border-accent/30' :
                'hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-primary/30'
              }`}
            >
              <div className={`w-16 h-16 rounded-xl ${getColorClasses(benefit?.color)} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                <Icon name={benefit?.icon} size={28} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {benefit?.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {benefit?.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Referral Form */}
          <div id="referral-form" className="card-medical-elevated p-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Icon name="UserPlus" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Referir un Laboratorio</h3>
                <p className="text-muted-foreground">Completa el formulario para iniciar el proceso</p>
              </div>
            </div>

            {submitSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCircle" size={40} className="text-success" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  ¡Referido Enviado Exitosamente!
                </h4>
                <p className="text-muted-foreground mb-8">
                  Hemos recibido tu referido. Nos pondremos en contacto con el laboratorio en las próximas 24 horas y te mantendremos informado del progreso.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitSuccess(false)}
                >
                  Hacer Otro Referido
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Referrer Information */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                    <Icon name="User" size={18} className="text-primary" />
                    <span>Tu Información</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Tu Nombre"
                      type="text"
                      name="referrerName"
                      placeholder="Dr. Juan Pérez"
                      value={referralForm?.referrerName}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      label="Tu Email"
                      type="email"
                      name="referrerEmail"
                      placeholder="juan@laboratorio.com"
                      value={referralForm?.referrerEmail}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Input
                    label="Tu Teléfono"
                    type="tel"
                    name="referrerPhone"
                    placeholder="+58 424-123-4567"
                    value={referralForm?.referrerPhone}
                    onChange={handleInputChange}
                    className="mt-4"
                  />
                </div>

                {/* Referred Information */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                    <Icon name="UserPlus" size={18} className="text-success" />
                    <span>Información del Referido</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Nombre del Contacto"
                      type="text"
                      name="referredName"
                      placeholder="Dra. María García"
                      value={referralForm?.referredName}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      label="Email del Contacto"
                      type="email"
                      name="referredEmail"
                      placeholder="maria@clinica.com"
                      value={referralForm?.referredEmail}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Input
                      label="Teléfono del Contacto"
                      type="tel"
                      name="referredPhone"
                      placeholder="+58 261-555-0123"
                      value={referralForm?.referredPhone}
                      onChange={handleInputChange}
                    />
                    <Input
                      label="Nombre del Laboratorio"
                      type="text"
                      name="referredInstitution"
                      placeholder="Laboratorio Central"
                      value={referralForm?.referredInstitution}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <Input
                    label="Relación con el Referido"
                    type="text"
                    name="relationship"
                    placeholder="Colega, socio, amigo, etc."
                    value={referralForm?.relationship}
                    onChange={handleInputChange}
                  />
                  
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Notas Adicionales
                    </label>
                    <textarea
                      name="notes"
                      rows={4}
                      placeholder="Información adicional sobre el laboratorio, sus necesidades específicas, mejor momento para contactar, etc."
                      value={referralForm?.notes}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="left"
                  className="bg-gradient-medical hover:opacity-90"
                >
                  {isSubmitting ? 'Enviando Referido...' : 'Enviar Referido'}
                </Button>
              </form>
            )}
          </div>

          {/* Success Stories */}
          <div className="space-y-8">
            <div className="card-medical-elevated p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                  <Icon name="Trophy" size={24} className="text-success" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Historias de Éxito</h3>
                  <p className="text-muted-foreground">Clientes que han obtenido grandes beneficios</p>
                </div>
              </div>

              <div className="space-y-6">
                {successStories?.map((story, index) => (
                  <div key={index} className="group border border-border rounded-xl p-6 bg-muted/10 hover:shadow-lg hover:shadow-success/20 hover:border-success/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-foreground group-hover:text-success transition-colors duration-300">{story?.referrer}</h4>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{story?.institution}</p>
                        <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">{story?.city}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-success group-hover:scale-110 transition-transform duration-300">{story?.referrals}</div>
                        <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">Referidos</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-4">
                    </div>
                    
                    <blockquote className="text-sm text-muted-foreground italic group-hover:text-foreground transition-colors duration-300">
                      "{story?.testimonial}"
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Details */}
            <div className="group card-medical-elevated p-8 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center space-x-2 group-hover:text-primary transition-colors duration-300">
                <Icon name="Info" size={20} className="text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                <span>Detalles del Programa</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group-hover:bg-primary/5 rounded-lg p-2 -m-2 transition-all duration-300">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">Descuento Inmediato</p>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">El 20% de descuento se aplica desde el primer mes</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group-hover:bg-primary/5 rounded-lg p-2 -m-2 transition-all duration-300">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">Seguimiento Personalizado</p>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">Te mantenemos informado en cada etapa del proceso</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group-hover:bg-primary/5 rounded-lg p-2 -m-2 transition-all duration-300">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">Beneficios Acumulativos</p>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">Más referidos = más beneficios para ti</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group-hover:bg-primary/5 rounded-lg p-2 -m-2 transition-all duration-300">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">Sin Límites</p>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">Puedes referir tantos laboratorios como desees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralProgram;