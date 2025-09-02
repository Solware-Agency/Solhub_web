import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ReferralProgram = () => {
  const referralStories = [
    {
      referrer: {
        name: "Dr. María Elena Rodríguez",
        role: "Directora Médica",
        facility: "Laboratorio Central Caracas",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg"
      },
      referred: {
        name: "Dr. Carlos Mendoza",
        role: "Propietario",
        facility: "Clínica San Rafael",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg"
      },
      discount: "20%",
      story: `Después de ver los resultados extraordinarios en nuestro laboratorio, 
              recomendé IBEX a mi colega Carlos. Su clínica ahora procesa 40% más 
              muestras diarias y ambos recibimos beneficios del programa de referidos.`,
      connectionType: "Colegas de Universidad"
    },
    {
      referrer: {
        name: "Lic. Ana Gutiérrez",
        role: "Administradora",
        facility: "Hospital Universitario Valencia",
        avatar: "https://randomuser.me/api/portraits/women/38.jpg"
      },
      referred: {
        name: "Dr. Roberto Silva",
        role: "Director de Laboratorio",
        facility: "Centro Diagnóstico Maracaibo",
        avatar: "https://randomuser.me/api/portraits/men/41.jpg"
      },
      discount: "20%",
      story: `La eficiencia que logramos con IBEX fue tan impresionante que cuando 
              Roberto me consultó sobre sistemas de gestión, no dudé en recomendárselo. 
              Ahora ambos disfrutamos de los beneficios del programa.`,
      connectionType: "Red Profesional Médica"
    },
    {
      referrer: {
        name: "Dr. Luis Morales",
        role: "Propietario",
        facility: "Laboratorio Especializado Barquisimeto",
        avatar: "https://randomuser.me/api/portraits/men/47.jpg"
      },
      referred: {
        name: "Dra. Carmen Pérez",
        role: "Directora Médica",
        facility: "Red Diagnóstica Miranda",
        avatar: "https://randomuser.me/api/portraits/women/43.jpg"
      },
      discount: "20%",
      story: `IBEX transformó completamente nuestras operaciones. Cuando Carmen 
              necesitaba una solución para su red de laboratorios, sabía exactamente 
              qué recomendarle. Los resultados hablan por sí solos.`,
      connectionType: "Asociación de Laboratoristas"
    }
  ];

  const programBenefits = [
    {
      icon: "Gift",
      title: "20% de Descuento",
      description: "Tanto tú como tu referido obtienen 20% de descuento en el primer año"
    },
    {
      icon: "Users",
      title: "Red de Contactos",
      description: "Conecta con otros profesionales médicos exitosos en Venezuela"
    },
    {
      icon: "Award",
      title: "Reconocimiento",
      description: "Certificado de Embajador IBEX y reconocimiento público"
    },
    {
      icon: "TrendingUp",
      title: "Beneficios Continuos",
      description: "Descuentos adicionales por cada referido exitoso"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Program Overview */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gradient-medical mb-4">
          Programa de Referidos IBEX
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          Nuestros clientes satisfechos han creado una red de recomendaciones que 
          está transformando el panorama de laboratorios médicos en Venezuela. 
          Únete a esta comunidad de éxito.
        </p>
      </div>
      {/* Success Stories */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-foreground text-center mb-8">
          Historias de Referidos Exitosos
        </h3>
        
        {referralStories?.map((story, index) => (
          <div key={index} className="card-medical-elevated p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Referrer */}
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <Image
                    src={story?.referrer?.avatar}
                    alt={story?.referrer?.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    Refiere
                  </div>
                </div>
                <h4 className="font-semibold text-foreground">{story?.referrer?.name}</h4>
                <p className="text-sm text-muted-foreground">{story?.referrer?.role}</p>
                <p className="text-xs text-muted-foreground">{story?.referrer?.facility}</p>
              </div>

              {/* Connection */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="ArrowRight" size={16} className="text-primary" />
                    </div>
                    <div className="px-3 py-1 bg-secondary/20 text-secondary text-xs rounded-full">
                      {story?.discount} OFF
                    </div>
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="ArrowRight" size={16} className="text-primary" />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {story?.connectionType}
                </p>
                <blockquote className="text-sm text-foreground italic mt-4 p-4 bg-muted/30 rounded-lg">
                  "{story?.story}"
                </blockquote>
              </div>

              {/* Referred */}
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <Image
                    src={story?.referred?.avatar}
                    alt={story?.referred?.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute -top-2 -right-2 bg-success text-success-foreground text-xs px-2 py-1 rounded-full">
                    Referido
                  </div>
                </div>
                <h4 className="font-semibold text-foreground">{story?.referred?.name}</h4>
                <p className="text-sm text-muted-foreground">{story?.referred?.role}</p>
                <p className="text-xs text-muted-foreground">{story?.referred?.facility}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Program Benefits */}
      <div className="bg-gradient-medical-subtle rounded-2xl p-8 border border-primary/20">
        <h3 className="text-2xl font-bold text-foreground text-center mb-8">
          Beneficios del Programa
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programBenefits?.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit?.icon} size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{benefit?.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit?.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* CTA Section */}
      <div className="text-center p-8 bg-muted/30 rounded-xl">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          ¿Conoces a Alguien que Podría Beneficiarse?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Comparte el éxito de IBEX Medical con tus colegas y ambos obtendrán 
          beneficios exclusivos. Es una situación donde todos ganan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            iconName="UserPlus"
            iconPosition="left"
            className="bg-gradient-medical hover:opacity-90"
          >
            Referir un Colega
          </Button>
          <Button
            variant="outline"
            iconName="Info"
            iconPosition="left"
          >
            Más Información del Programa
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReferralProgram;