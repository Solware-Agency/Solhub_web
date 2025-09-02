import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../AppIcon';

const Footer = ({ variant = 'default' }) => {
  const currentYear = new Date()?.getFullYear();

  const navigationSections = {
    solhub: [
      { name: 'Módulos', path: '/modules-showcase' },
      { name: 'IA Center', path: '/ai-intelligence-center' },
      { name: 'Seguridad', path: '/security-fortress' },
      { name: 'Precios', path: '/pricing-calculator' }
    ],
    contact: [
      { name: 'Solicitar Demo', path: '/demo-experience' },
      { name: 'Contacto', path: '/dedicated-contact-page' },
      { name: 'WhatsApp', href: 'https://wa.me/584129974533', external: true },
      { name: 'Centro de Ayuda', path: '/knowledge-hub' }
    ]
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  if (variant === 'simple') {
    return (
      <footer className="py-12 border-t border-border">
        <div className="container-medical">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-solware rounded-lg flex items-center justify-center">
                <Icon name="Activity" size={16} color="white" />
              </div>
              <span className="text-xl font-bold text-gradient-solware">
                SolHub Medical
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              © {currentYear} SolHub by Solware. Transformando la medicina diagnóstica en Venezuela.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <motion.footer 
      className="glass-medium border-t border-glass-border py-8 sm:py-12 lg:py-16 mt-16 sm:mt-20 lg:mt-24 backdrop-blur-glass-strong"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container-medical">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              variants={footerVariants}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-solware rounded-xl flex items-center justify-center shadow-glass-medium">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background animate-pulse-medical"></div>
              </div>
              <div>
                <div className="text-xl font-bold text-gradient-solware">SolHub</div>
                <div className="text-sm text-muted-foreground">by Solware</div>
              </div>
            </motion.div>
            <motion.p 
              className="text-muted-foreground mb-6 max-w-md text-sm sm:text-base"
              variants={footerVariants}
            >
              Transformando laboratorios médicos en Venezuela con tecnología de vanguardia, 
              inteligencia artificial y seguridad avanzada. Desarrollado por Solware con el respaldo 
              de profesionales médicos venezolanos.
            </motion.p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-medical flex-shrink-0"></div>
                <span>7 sedes activas</span>
              </div>
              <div className="text-sm text-muted-foreground">•</div>
              <div className="text-sm text-muted-foreground">Soporte 24/7</div>
            </div>
          </div>

          {/* Quick Links */}
          <motion.div variants={footerVariants}>
            <h3 className="font-semibold text-foreground mb-4">SolHub</h3>
            <ul className="space-y-2">
              {navigationSections?.solhub?.map((item) => (
                <li key={item?.path}>
                  <Link 
                    to={item?.path} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm hover:underline"
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={footerVariants}>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-2">
              {navigationSections?.contact?.map((item) => (
                <li key={item?.path || item?.href}>
                  {item?.external ? (
                    <a 
                      href={item?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-muted-foreground transition-colors text-sm hover:underline ${
                        item?.name === 'WhatsApp' ? 'hover:text-success' : 'hover:text-primary'
                      }`}
                    >
                      {item?.name}
                    </a>
                  ) : (
                    <Link 
                      to={item?.path} 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm hover:underline"
                    >
                      {item?.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-glass-border mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          variants={footerVariants}
        >
          <div className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} SolHub by Solware. Todos los derechos reservados. Desarrollado con ❤️ en Venezuela.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <Link to="/legal/privacidad" className="hover:text-primary transition-colors hover:underline">
              Privacidad
            </Link>
            <Link to="/legal/terminos" className="hover:text-primary transition-colors hover:underline">
              Términos
            </Link>
            <Link to="/security-fortress" className="hover:text-primary transition-colors hover:underline">
              Seguridad
            </Link>
            <span className="hidden sm:inline">•</span>
            <a 
              href="https://www.solware.agency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-medium hover:underline"
            >
              Solware Agency
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;