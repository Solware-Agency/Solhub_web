import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import ContactForm from './components/ContactForm';
import ContactChannels from './components/ContactChannels';
import Icon from '../../components/AppIcon';

const DedicatedContactPage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contacto - SolHub | Solware Agency</title>
        <meta 
          name="description" 
          content="Contacta con SolHub by Solware. Formulario de contacto especializado para laboratorios médicos venezolanos. WhatsApp, Instagram y soporte personalizado."
        />
        <meta 
          name="keywords" 
          content="contacto SolHub, soporte médico Venezuela, laboratorio contacto, Solware contacto, WhatsApp médico, Instagram SolHub"
        />
        <meta property="og:title" content="Contacto - SolHub | Solware Agency" />
        <meta 
          property="og:description" 
          content="Centro de contacto especializado para laboratorios médicos en Venezuela. Formulario personalizado, WhatsApp e Instagram."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://solhub.solware.agency/dedicated-contact-page" />
        
        {/* Venezuelan Medical Context */}
        <meta name="geo.region" content="VE" />
        <meta name="geo.placename" content="Venezuela" />
        <meta name="language" content="es-VE" />
        
        {/* Contact Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contacto - SolHub",
            "description": "Centro de contacto especializado para laboratorios médicos venezolanos",
            "url": "https://solhub.solware.agency/dedicated-contact-page",
            "mainEntity": {
              "@type": "Organization",
              "name": "SolHub by Solware",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+58-412-997-4533",
                  "contactType": "customer service",
                  "availableLanguage": "es-VE"
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Header />

        {/* Main Content */}
        <motion.main 
          className="pt-16 sm:pt-18 lg:pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Hero Section */}
          <motion.section 
            className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>

            <div className="container-medical relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Conecta con Nuestros
                  <span className="block text-gradient-medical">Especialistas Médicos</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  Hub especializado de contacto para profesionales médicos venezolanos. 
                  Formulario personalizado con Resend, WhatsApp Business y seguimiento en Instagram para 
                  mantenerte actualizado con las innovaciones de SolHub.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse-medical"></div>
                    <span>Respuesta en 2 horas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} className="text-primary" />
                    <span>Datos 100% seguros</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={16} className="text-accent" />
                    <span>Especialistas venezolanos</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Methods Section */}
          <motion.section 
            className="py-16 lg:py-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="container-medical">
              <div className="text-center mb-16">
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Elige Tu Canal
                  <span className="block text-gradient-medical">de Comunicación</span>
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Adaptados a las preferencias de comunicación de los profesionales médicos venezolanos
                </p>
              </div>

              <ContactChannels />

              {/* Preferred Contact Methods Guide */}
              <div className="mt-16">
                <div className="card-medical-elevated p-8 lg:p-12">
                  <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-foreground mb-4">¿Cuándo usar cada canal?</h3>
                    <p className="text-muted-foreground">Guía rápida para contacto eficiente</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="MessageCircle" size={32} className="text-success" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h4>
                      <p className="text-sm text-muted-foreground mb-3">Respuesta inmediata</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Consultas urgentes</li>
                        <li>• Soporte técnico rápido</li>
                        <li>• Dudas específicas</li>
                      </ul>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Mail" size={32} className="text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Formulario Email</h4>
                      <p className="text-sm text-muted-foreground mb-3">Consultas detalladas</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Solicitudes de demo</li>
                        <li>• Información de precios</li>
                        <li>• Consultas comerciales</li>
                      </ul>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Instagram" size={32} className="text-accent" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Instagram</h4>
                      <p className="text-sm text-muted-foreground mb-3">Actualizaciones y novedades</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Nuevas funcionalidades</li>
                        <li>• Casos de éxito</li>
                        <li>• Contenido educativo</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section 
            className="py-16 lg:py-24 bg-muted/30"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="container-medical">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Información de Contacto</h2>
                  <p className="text-muted-foreground">Horarios y tiempos de respuesta para Venezuela</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="card-medical-elevated p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <Icon name="Clock" size={24} className="text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">Horarios de Atención</h3>
                    </div>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Lunes - Viernes</span>
                        <span className="font-medium">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábados</span>
                        <span className="font-medium">9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingos</span>
                        <span className="font-medium text-muted-foreground/60">Cerrado</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        <Icon name="MapPin" size={12} className="inline mr-1" />
                        Horario de Venezuela (UTC-4)
                      </p>
                    </div>
                  </div>

                  <div className="card-medical-elevated p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <Icon name="Timer" size={24} className="text-accent" />
                      <h3 className="text-xl font-semibold text-foreground">Tiempos de Respuesta</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon name="MessageCircle" size={16} className="text-success" />
                          <span className="text-sm">WhatsApp</span>
                        </div>
                        <span className="text-sm font-medium text-success">5-15 min</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon name="Mail" size={16} className="text-primary" />
                          <span className="text-sm">Formulario Email</span>
                        </div>
                        <span className="text-sm font-medium text-primary">2 horas</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon name="Phone" size={16} className="text-accent" />
                          <span className="text-sm">Llamadas urgentes</span>
                        </div>
                        <span className="text-sm font-medium text-accent">Inmediato</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        Durante horario laboral. Fuera de horario: respuesta siguiente día hábil.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.main>

        {/* Footer */}
        <motion.footer 
          className="glass-medium border-t border-glass-border py-8 sm:py-12 lg:py-16 backdrop-blur-glass-strong"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container-medical">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-solware rounded-xl flex items-center justify-center shadow-glass-medium">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-gradient-solware">SolHub</div>
                  <div className="text-sm text-muted-foreground">by Solware</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                © {new Date()?.getFullYear()} SolHub by Solware. Desarrollado con ❤️ en Venezuela.
              </p>
              <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
                <a href="/legal/privacidad" className="hover:text-primary transition-colors">Privacidad</a>
                <span>•</span>
                <a href="/legal/terminos" className="hover:text-primary transition-colors">Términos</a>
                <span>•</span>
                <a href="https://www.solware.agency" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Solware Agency
                </a>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </>
  );
};

export default DedicatedContactPage;