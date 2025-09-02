import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactChannels = ({ onWhatsAppClick, onEmailClick, onPhoneClick }) => {
  const contactChannels = [
    {
      id: 'whatsapp',
      title: 'WhatsApp Business',
      description: 'Canal preferido para comunicación inmediata. Respuesta garantizada en menos de 2 minutos durante horario laboral.',
      icon: 'MessageCircle',
      color: 'success',
      action: 'Iniciar Chat',
      details: [
        '+58 424-123-4567',
        'Disponible: Lun-Vie 7:00-19:00',
        'Emergencias: 24/7'
      ],
      onClick: onWhatsAppClick
    },
    {
      id: 'email',
      title: 'Correo Electrónico',
      description: 'Para consultas detalladas, documentación técnica y seguimiento de casos. Respuesta garantizada en 4 horas.',
      icon: 'Mail',
      color: 'primary',
      action: 'Enviar Email',
      details: [
        'soporte@ibexmedical.com.ve',
        'ventas@ibexmedical.com.ve',
        'emergencias@ibexmedical.com.ve'
      ],
      onClick: onEmailClick
    },
    {
      id: 'phone',
      title: 'Línea Telefónica',
      description: 'Soporte telefónico directo con especialistas técnicos. Ideal para resolución inmediata de problemas críticos.',
      icon: 'Phone',
      color: 'secondary',
      action: 'Llamar Ahora',
      details: [
        '+58 212-555-0123 (Caracas)',
        '+58 261-555-0124 (Maracaibo)',
        '+58 241-555-0125 (Valencia)'
      ],
      onClick: onPhoneClick
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      success: 'border-success/20 bg-success/5 hover:bg-success/10',
      primary: 'border-primary/20 bg-primary/5 hover:bg-primary/10',
      secondary: 'border-secondary/20 bg-secondary/5 hover:bg-secondary/10'
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  const getIconColor = (color) => {
    const colorMap = {
      success: 'text-success',
      primary: 'text-primary',
      secondary: 'text-secondary'
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  const getButtonVariant = (color) => {
    const variantMap = {
      success: 'success',
      primary: 'default',
      secondary: 'secondary'
    };
    return variantMap?.[color] || 'default';
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-medical">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Headphones" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Canales de Contacto</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Elige Tu Canal
            <span className="block text-gradient-medical">Preferido</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Múltiples formas de conectar con nuestro equipo de soporte especializado en soluciones médicas venezolanas.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactChannels?.map((channel) => (
            <div
              key={channel?.id}
              className={`card-medical-elevated p-8 border-2 ${getColorClasses(channel?.color)} hover:shadow-xl transition-all duration-300 group`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-${channel?.color}/20 to-${channel?.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={channel?.icon} size={28} className={getIconColor(channel?.color)} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {channel?.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {channel?.description}
              </p>

              {/* Details */}
              <div className="space-y-2 mb-8">
                {channel?.details?.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-${channel?.color}`}></div>
                    <span className="text-sm text-foreground font-medium">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <Button
                variant={getButtonVariant(channel?.color)}
                fullWidth
                onClick={channel?.onClick}
                iconName={channel?.icon}
                iconPosition="left"
                className="group-hover:shadow-lg transition-shadow duration-300"
              >
                {channel?.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="AlertTriangle" size={24} className="text-destructive" />
            <h3 className="text-xl font-bold text-destructive">Contacto de Emergencia</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Para problemas críticos que afecten operaciones de laboratorio fuera del horario laboral
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={16} className="text-destructive" />
              <span className="font-mono text-destructive font-bold">+58 424-URGENTE</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MessageCircle" size={16} className="text-destructive" />
              <span className="font-mono text-destructive font-bold">WhatsApp 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactChannels;