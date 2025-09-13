import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactChannels = () => {
  const handleWhatsAppClick = () => {
    const message = "Hola! Me interesa conocer más sobre SolHub y cómo puede ayudar a transformar mi laboratorio médico. ¿Podrían proporcionarme más información?";
    const phoneNumber = '584129974533'; // Venezuelan WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/solware.agency', '_blank');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* WhatsApp Section */}
      <motion.div
        className="card-medical-elevated p-8 lg:p-10 text-center group hover:shadow-xl transition-all duration-300"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-success/20 transition-colors">
          <Icon name="MessageCircle" size={40} className="text-success" />
        </div>
        
        <h3 className="text-2xl font-bold text-foreground mb-4">WhatsApp Business</h3>
        <p className="text-muted-foreground mb-6">
          Conecta instantáneamente con nuestros especialistas médicos. Preferido por profesionales 
          venezolanos para consultas rápidas y soporte técnico inmediato.
        </p>
        
        <div className="space-y-3 text-sm text-muted-foreground mb-8">
          <div className="flex items-center justify-center space-x-2">
            <Icon name="Clock" size={16} className="text-success" />
            <span>Respuesta en 5-15 minutos</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Icon name="Shield" size={16} className="text-success" />
            <span>Comunicación segura y cifrada</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Icon name="Users" size={16} className="text-success" />
            <span>Especialistas venezolanos</span>
          </div>
        </div>

        <Button
          onClick={handleWhatsAppClick}
          className="w-full bg-success hover:bg-success/90 text-white font-semibold py-3"
          iconName="MessageCircle"
          iconPosition="left"
        >
          Abrir WhatsApp
        </Button>

        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            +58 412-997-4533 • Lun-Vie 8AM-6PM • Sáb 9AM-2PM
          </p>
        </div>
      </motion.div>
      {/* Instagram Section */}
      <motion.div
        className="card-medical-elevated p-8 lg:p-10 text-center group hover:shadow-xl transition-all duration-300"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="w-20 h-20 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-pink-500/20 group-hover:via-purple-500/20 group-hover:to-orange-500/20 transition-all">
          <Icon name="Instagram" size={40} className="text-accent" />
        </div>
        
        <h3 className="text-2xl font-bold text-foreground mb-4">Instagram</h3>
        <p className="text-muted-foreground mb-6">
          Síguenos para mantenerte actualizado con las últimas innovaciones de SolHub, 
          casos de éxito de laboratorios venezolanos y contenido educativo médico.
        </p>
        
        <div className="space-y-3 text-sm text-muted-foreground mb-8">
          <div className="flex items-center justify-center space-x-2">
            <Icon name="Zap" size={16} className="text-accent" />
            <span>Novedades y actualizaciones</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Icon name="Award" size={16} className="text-accent" />
            <span>Casos de éxito reales</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Icon name="BookOpen" size={16} className="text-accent" />
            <span>Contenido educativo médico</span>
          </div>
        </div>

        <Button
          onClick={handleInstagramClick}
          variant="outline"
          className="w-full border-accent text-accent hover:bg-accent hover:text-white font-semibold py-3"
          iconName="Instagram"
          iconPosition="left"
        >
          Seguir en Instagram
        </Button>

        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            @solware.agency • Contenido diario • Stories interactivos
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactChannels;