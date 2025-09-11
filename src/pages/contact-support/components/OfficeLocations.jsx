import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OfficeLocations = () => {
  const offices = [
    {
      id: 'caracas',
      city: 'Caracas',
      region: 'Distrito Capital',
      address: 'Av. Francisco de Miranda, Torre Empresarial, Piso 12, Chacao',
      phone: '+58 212-555-0123',
      email: 'caracas@SolHubmedical.com.ve',
      hours: 'Lun-Vie: 7:00-19:00, Sáb: 8:00-14:00',
      coordinates: '10.4806,-66.9036',
      isHeadquarters: true,
      activeClients: 2,
      services: ['Soporte Técnico', 'Ventas', 'Implementación', 'Capacitación']
    },
    {
      id: 'maracaibo',
      city: 'Maracaibo',
      region: 'Zulia',
      address: 'Av. 5 de Julio, Centro Comercial Doral Center, Oficina 301',
      phone: '+58 261-555-0124',
      email: 'maracaibo@SolHubmedical.com.ve',
      hours: 'Lun-Vie: 7:30-18:30, Sáb: 8:00-13:00',
      coordinates: '10.6427,-71.6125',
      isHeadquarters: false,
      activeClients: 2,
      services: ['Soporte Técnico', 'Ventas', 'Mantenimiento']
    },
    {
      id: 'valencia',
      city: 'Valencia',
      region: 'Carabobo',
      address: 'Av. Bolívar Norte, Edificio Carabobo Plaza, Piso 8',
      phone: '+58 241-555-0125',
      email: 'valencia@SolHubmedical.com.ve',
      hours: 'Lun-Vie: 7:00-18:00, Sáb: 8:00-12:00',
      coordinates: '10.1621,-68.0077',
      isHeadquarters: false,
      activeClients: 1,
      services: ['Soporte Técnico', 'Ventas']
    }
  ];

  const handleGetDirections = (coordinates, city) => {
    const [lat, lng] = coordinates?.split(',');
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
  };

  const handleCallOffice = (phone) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleEmailOffice = (email) => {
    window.open(`mailto:${email}`, '_self');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-medical">
        {/* Section Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nuestras Oficinas en
            <span className="block text-gradient-medical">Venezuela</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Presencia estratégica en las principales ciudades del país para brindar soporte cercano y personalizado a nuestros clientes médicos.
          </p>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {offices?.map((office) => (
            <div
              key={office?.id}
              className={`card-medical-elevated p-8 relative ${
                office?.isHeadquarters ? 'border-2 border-primary/30 bg-primary/5' : ''
              }`}
            >
              {/* Headquarters Badge */}
              {office?.isHeadquarters && (
                <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Sede Principal
                </div>
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {office?.city}
                  </h3>
                  <p className="text-muted-foreground text-sm">{office?.region}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  {office?.activeClients} Cliente{office?.activeClients !== 1 ? 's' : ''} Activo{office?.activeClients !== 1 ? 's' : ''}
                </div>
              </div>

              {/* Address */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={18} className="text-muted-foreground mt-1 flex-shrink-0" />
                  <p className="text-foreground text-sm leading-relaxed">
                    {office?.address}
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={18} className="text-muted-foreground flex-shrink-0" />
                  <p className="text-foreground text-sm">
                    {office?.hours}
                  </p>
                </div>
              </div>

              {/* Services */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-foreground mb-3">Servicios Disponibles:</h4>
                <div className="flex flex-wrap gap-2">
                  {office?.services?.map((service, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 bg-muted/50 border border-border rounded-md text-xs font-medium text-muted-foreground"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Actions */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCallOffice(office?.phone)}
                    iconName="Phone"
                    iconPosition="left"
                    className="text-xs"
                  >
                    Llamar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEmailOffice(office?.email)}
                    iconName="Mail"
                    iconPosition="left"
                    className="text-xs"
                  >
                    Email
                  </Button>
                </div>
                
                <Button
                  variant="default"
                  size="sm"
                  fullWidth
                  onClick={() => handleGetDirections(office?.coordinates, office?.city)}
                  iconName="Navigation"
                  iconPosition="left"
                  className="bg-secondary hover:bg-secondary/90 text-xs"
                >
                  Cómo Llegar
                </Button>
              </div>

              {/* Map Preview */}
              <div className="mt-6 h-32 rounded-lg overflow-hidden border border-border">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={`Ubicación ${office?.city}`}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${office?.coordinates}&z=14&output=embed`}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Coverage Map */}
        <div className="card-medical-elevated p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Cobertura Nacional de Soporte
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Aunque tenemos oficinas físicas en 3 ciudades principales, brindamos soporte remoto a todo el territorio venezolano a través de nuestros canales digitales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">3 Oficinas</h4>
              <p className="text-sm text-muted-foreground">Caracas, Maracaibo, Valencia</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">5 Clientes</h4>
              <p className="text-sm text-muted-foreground">Laboratorios activos</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-secondary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">24/7</h4>
              <p className="text-sm text-muted-foreground">Soporte de emergencia</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={24} className="text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">&lt; 2 min</h4>
              <p className="text-sm text-muted-foreground">Respuesta WhatsApp</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              ¿Tu ciudad no aparece en la lista? No te preocupes, nuestro soporte digital llega a toda Venezuela.
            </p>
            <Button
              variant="outline"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Contactar Soporte Nacional
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;