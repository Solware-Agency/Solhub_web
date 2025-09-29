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
        '+58 412-997-4533',
        'Disponible: Lun-Vie 7:00-19:00'
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
        'ventas@solware.agency',
        'Respuesta garantizada en 4 horas'
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
        '+58 412-997-4533',
        'Soporte técnico especializado'
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
              className={`group card-medical-elevated p-8 border-2 ${getColorClasses(channel?.color)} hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-500 cursor-pointer relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/60 via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out opacity-0 group-hover:opacity-100"></div>
              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${channel?.color}/20 to-${channel?.color}/10 flex items-center justify-center group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon name={channel?.icon} size={24} className={getIconColor(channel?.color)} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {channel?.title}
                  </h3>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-8">
                  {channel?.details?.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-${channel?.color} group-hover:scale-150 transition-transform duration-300`}></div>
                      <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors duration-300">{detail}</span>
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactChannels;