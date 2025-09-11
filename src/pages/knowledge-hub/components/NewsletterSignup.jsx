import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const interestOptions = [
    { id: 'implementation', label: 'Guías de Implementación', icon: 'Settings' },
    { id: 'ai-updates', label: 'Actualizaciones de IA', icon: 'Brain' },
    { id: 'case-studies', label: 'Casos de Éxito', icon: 'Trophy' },
    { id: 'compliance', label: 'Cumplimiento Normativo', icon: 'Shield' },
    { id: 'webinars', label: 'Webinars Exclusivos', icon: 'Video' },
    { id: 'product-updates', label: 'Actualizaciones de Producto', icon: 'Zap' }
  ];

  const handleInterestToggle = (interestId) => {
    setInterests(prev => 
      prev?.includes(interestId) 
        ? prev?.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (email && interests?.length > 0) {
      // Mock subscription logic
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
        setInterests([]);
      }, 3000);
    }
  };

  if (isSubscribed) {
    return (
      <section className="bg-gradient-medical rounded-2xl p-8 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={32} color="white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">¡Suscripción Exitosa!</h3>
          <p className="text-white/80 mb-4">
            Te has suscrito exitosamente a nuestras actualizaciones técnicas. 
            Recibirás el primer boletín en las próximas 24 horas.
          </p>
          <div className="flex items-center justify-center space-x-2 text-white/60">
            <Icon name="Mail" size={16} />
            <span className="text-sm">Revisa tu bandeja de entrada</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-card border border-border rounded-2xl p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <Icon name="Mail" size={16} />
            <span className="text-sm font-medium">Newsletter Técnico</span>
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Actualizaciones Técnicas SolHub
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recibe contenido exclusivo, actualizaciones de producto, casos de éxito y recursos técnicos 
            directamente en tu bandeja de entrada. Solo para profesionales médicos.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="max-w-md mx-auto">
            <Input
              type="email"
              label="Correo Electrónico Profesional"
              placeholder="tu.email@laboratorio.com"
              value={email}
              onChange={(e) => setEmail(e?.target?.value)}
              required
              className="text-center"
            />
          </div>

          {/* Interest Selection */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
              Selecciona tus intereses
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
              {interestOptions?.map((option) => (
                <button
                  key={option?.id}
                  type="button"
                  onClick={() => handleInterestToggle(option?.id)}
                  className={`flex items-center space-x-3 p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${
                    interests?.includes(option?.id)
                      ? 'bg-primary/10 border-primary/30 text-primary' :'bg-muted/30 border-border hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon 
                    name={option?.icon} 
                    size={20} 
                    className={interests?.includes(option?.id) ? 'text-primary' : 'text-muted-foreground'}
                  />
                  <span className="text-sm font-medium">{option?.label}</span>
                  {interests?.includes(option?.id) && (
                    <Icon name="Check" size={16} className="text-primary ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-muted/30 rounded-xl p-6">
            <h4 className="font-semibold text-foreground mb-3 text-center">
              Beneficios de suscribirse:
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Icon name="Zap" size={16} className="text-primary" />
                <span className="text-sm text-muted-foreground">Contenido exclusivo semanal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} className="text-primary" />
                <span className="text-sm text-muted-foreground">Acceso a comunidad privada</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Gift" size={16} className="text-primary" />
                <span className="text-sm text-muted-foreground">Recursos gratuitos mensuales</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              variant="default"
              size="lg"
              iconName="Mail"
              iconPosition="left"
              disabled={!email || interests?.length === 0}
              className="bg-gradient-medical hover:opacity-90 min-w-64"
            >
              Suscribirse Gratis
            </Button>
            
            <p className="text-xs text-muted-foreground mt-3">
              Al suscribirte, aceptas recibir emails de SolHub. 
              Puedes cancelar en cualquier momento.
            </p>
          </div>
        </form>

        {/* Social Proof */}
        <div className="flex items-center justify-center space-x-6 mt-8 pt-6 border-t border-border">
          <div className="text-center">
            <div className="text-lg font-bold text-foreground">2,500+</div>
            <div className="text-xs text-muted-foreground">Suscriptores</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-foreground">95%</div>
            <div className="text-xs text-muted-foreground">Tasa de Apertura</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-foreground">4.8/5</div>
            <div className="text-xs text-muted-foreground">Valoración</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;