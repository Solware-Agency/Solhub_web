import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import useActions from '../../../hooks/useActions';


const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default
  const navigate = useNavigate();
  const { handleWhatsAppClick } = useActions();

  const handleScheduleClick = () => {
    navigate('/contact-support');
    // Esperar a que se cargue la página y luego hacer scroll al formulario de contacto
    setTimeout(() => {
      const element = document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const faqCategories = [
    {
      title: 'Implementación y Onboarding',
      icon: 'Rocket',
      color: 'primary',
      questions: [
        {
          question: '¿Cuánto tiempo toma implementar SolHub en mi laboratorio?',
          answer: `La implementación completa de SolHub típicamente toma entre 2-4 semanas, dependiendo del tamaño de su laboratorio y los módulos seleccionados.\n\n**Cronograma típico:**\n• Semana 1: Configuración inicial y migración de datos\n• Semana 2: Capacitación del personal y pruebas\n• Semana 3-4: Puesta en marcha y optimización\n\nNuestro equipo de implementación venezolano lo acompaña en cada paso del proceso, asegurando una transición suave sin interrumpir sus operaciones diarias.`
        },
        {
          question: '¿Necesito conocimientos técnicos especiales para usar SolHub?',
          answer: `No, SolHub está diseñado para ser intuitivo y fácil de usar por profesionales médicos sin experiencia técnica avanzada.\n\n**Características de usabilidad:**\n• Interfaz en español adaptada al flujo de trabajo médico venezolano\n• Capacitación completa incluida en todos los planes\n• Soporte técnico 24/7 para resolver cualquier duda\n• Manuales y videos tutoriales en español\n\nNuestro objetivo es que su equipo se sienta cómodo usando la plataforma desde el primer día.`
        },
        {
          question: '¿Cómo migran mis datos existentes a SolHub?',
          answer: `Ofrecemos un servicio completo de migración de datos sin costo adicional, manejando la transferencia de manera segura y eficiente.\n\n**Proceso de migración:**\n• Análisis de sus sistemas actuales (Excel, software anterior, etc.)\n• Mapeo y limpieza de datos existentes\n• Migración controlada con validación completa\n• Verificación y pruebas antes del go-live\n\nTodos sus registros históricos, pacientes, y resultados se preservan completamente durante la transición.`
        }
      ]
    },
    {
      title: 'Precios y Planes',
      icon: 'DollarSign',
      color: 'success',
      questions: [
        {
          question: '¿Cuáles son los costos de SolHub?',
          answer: `Nuestros precios son transparentes y escalables según las necesidades de su laboratorio.\n\n**Estructura de precios:**\n• Plan Básico: Desde $299 USD/mes (funcionalidades esenciales)\n• Plan Profesional: Desde $599 USD/mes (incluye IA y módulos avanzados)\n• Plan Enterprise: Desde $999 USD/mes (solución completa + soporte premium)\n\n**Incluido en todos los planes:**\n• Implementación y capacitación\n• Soporte técnico 24/7\n• Actualizaciones automáticas\n• Backup y seguridad\n\nContacte para una cotización personalizada basada en su volumen de pruebas y módulos específicos.`
        },
        {
          question: '¿Ofrecen descuentos para múltiples sedes o referidos?',
          answer: `Sí, tenemos programas especiales de descuentos para diferentes escenarios.\n\n**Programa de Referidos:**\n• 20% de descuento permanente para clientes referidos\n• Beneficios adicionales para quien refiere\n• Sin límite en el número de referidos\n\n**Descuentos por volumen:**\n• 15% descuento para 2-3 sedes\n• 25% descuento para 4+ sedes\n• Precios especiales para cadenas de laboratorios\n\nTambién ofrecemos planes de pago flexibles adaptados a la realidad económica venezolana.`
        },
        {
          question: '¿Hay costos ocultos o tarifas adicionales?',
          answer: `No, creemos en la transparencia total de precios. Todo está incluido en su plan mensual.\n\n**Lo que ESTÁ incluido:**\n• Todas las funcionalidades del plan seleccionado\n• Soporte técnico ilimitado\n• Actualizaciones y nuevas funcionalidades\n• Backup automático y seguridad\n• Capacitación continua del personal\n\n**Únicos costos adicionales opcionales:**\n• Módulos premium específicos (claramente identificados)\n• Servicios de consultoría especializada\n• Integraciones con equipos médicos específicos\n\nSiempre comunicamos cualquier costo adicional antes de la implementación.`
        }
      ]
    },
    {
      title: 'Seguridad y Cumplimiento',
      icon: 'Shield',
      color: 'destructive',
      questions: [
        {
          question: '¿Cómo garantizan la seguridad de los datos médicos?',
          answer: `La seguridad de datos médicos es nuestra máxima prioridad, cumpliendo con estándares internacionales y regulaciones venezolanas.\n\n**Medidas de seguridad implementadas:**\n• Encriptación AES-256 en tránsito y en reposo\n• Autenticación de dos factores obligatoria\n• Auditorías de seguridad trimestrales\n• Backup automático cada 6 horas\n• Servidores en centros de datos certificados\n\n**Cumplimiento normativo:**\n• ISO 27001 para gestión de seguridad de información\n• Ley de Protección de Datos Personales de Venezuela\n\nCada sede tiene controles de acceso independientes y logs de auditoría completos.`
        },
        {
          question: '¿Dónde se almacenan los datos de mi laboratorio?',
          answer: `Sus datos se almacenan de manera segura con múltiples opciones de ubicación según sus preferencias y requisitos regulatorios.\n\n**Opciones de almacenamiento:**\n• Servidores en Venezuela (para cumplimiento local)\n• Centros de datos certificados en Miami (mayor redundancia)\n• Opción híbrida con sincronización automática\n\n**Características del almacenamiento:**\n• Redundancia geográfica automática\n• Backup incremental cada 6 horas\n• Recuperación ante desastres en menos de 4 horas\n• Acceso exclusivo para personal autorizado de su laboratorio\n\nUsted mantiene control total sobre sus datos y puede solicitar exportación completa en cualquier momento.`
        },
        {
          question: '¿Qué pasa si hay problemas de conectividad a internet?',
          answer: `SolHub incluye funcionalidades offline y múltiples mecanismos de contingencia para asegurar continuidad operacional.\n\n**Soluciones de contingencia:**\n• Modo offline para registro de muestras y resultados\n• Sincronización automática al restaurarse la conexión\n• Backup local de datos críticos\n• Acceso a través de múltiples proveedores de internet\n\n**Soporte de conectividad:**\n• Optimización para conexiones de baja velocidad\n• Compresión de datos para reducir uso de ancho de banda\n• Soporte técnico para configuración de redes\n• Recomendaciones de proveedores de internet confiables\n\nNuestro equipo técnico puede asistir con la configuración de soluciones de conectividad redundante.`
        }
      ]
    },
    {
      title: 'Soporte Técnico',
      icon: 'Headphones',
      color: 'secondary',
      questions: [
        {
          question: '¿Qué tipo de soporte técnico ofrecen?',
          answer: `Ofrecemos soporte técnico integral con múltiples canales y tiempos de respuesta garantizados.\n\n**Canales de soporte disponibles:**\n• WhatsApp Business: Respuesta en menos de 2 minutos\n• Teléfono directo: Líneas dedicadas por ciudad\n• Email: Respuesta garantizada en 4 horas\n• Acceso remoto: Para resolución directa de problemas\n\n**Horarios de atención:**\n• Soporte general: Lun-Vie 7:00-19:00, Sáb 8:00-14:00\n• Emergencias críticas: 24/7 los 365 días del año\n• Soporte en español por técnicos venezolanos\n\nTodos nuestros técnicos están certificados en sistemas médicos y entienden las particularidades del sector salud venezolano.`
        },
        {
          question: '¿Cómo funciona el soporte de emergencia 24/7?',
          answer: `Nuestro soporte de emergencia está diseñado para problemas críticos que afecten las operaciones de su laboratorio.\n\n**¿Qué constituye una emergencia?**\n• Sistema completamente inaccesible\n• Pérdida de datos críticos\n• Problemas que impidan procesar muestras urgentes\n• Fallas de seguridad o acceso no autorizado\n\n**Proceso de emergencia:**\n• Contacto inmediato: +58 424-URGENTE\n• Respuesta inicial en menos de 15 minutos\n• Técnico asignado exclusivamente a su caso\n• Resolución o workaround en menos de 2 horas\n• Seguimiento hasta resolución completa\n\nEl soporte de emergencia está incluido en todos los planes sin costo adicional.`
        },
        {
          question: '¿Ofrecen capacitación continua para mi personal?',
          answer: `Sí, la capacitación continua es parte integral de nuestro servicio para asegurar que su equipo aproveche al máximo SolHub.\n\n**Programa de capacitación incluido:**\n• Capacitación inicial completa durante la implementación\n• Sesiones mensuales de actualización y mejores prácticas\n• Webinars trimestrales sobre nuevas funcionalidades\n• Biblioteca de videos tutoriales en español\n• Manuales actualizados y guías de referencia rápida\n\n**Capacitación especializada:**\n• Entrenamientos personalizados para nuevos empleados\n• Certificación de usuarios avanzados\n• Workshops sobre optimización de flujos de trabajo\n• Sesiones de Q&A con expertos en laboratorios médicos\n\nTodo el material de capacitación está adaptado a la realidad y terminología médica venezolana.`
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex, questionIndex) => {
    const itemId = `${categoryIndex}-${questionIndex}`;
    const newOpenItems = new Set(openItems);
    
    if (newOpenItems?.has(itemId)) {
      newOpenItems?.delete(itemId);
    } else {
      newOpenItems?.add(itemId);
    }
    
    setOpenItems(newOpenItems);
  };

  const getColorClasses = (color) => {
    const colorMap = {
      primary: 'text-primary bg-primary/10 border-primary/20',
      success: 'text-success bg-success/10 border-success/20',
      destructive: 'text-destructive bg-destructive/10 border-destructive/20',
      secondary: 'text-secondary bg-secondary/10 border-secondary/20'
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container-medical">
        {/* Section Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Preguntas
            <span className="block text-gradient-medical">Frecuentes</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Respuestas a las consultas más comunes sobre SolHub, adaptadas específicamente para el mercado médico venezolano.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories?.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card-medical-elevated p-8 lg:p-12">
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getColorClasses(category?.color)}`}>
                  <Icon name={category?.icon} size={24} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {category?.title}
                </h3>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category?.questions?.map((item, questionIndex) => {
                  const itemId = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openItems?.has(itemId);
                  
                  return (
                    <div
                      key={questionIndex}
                      className="border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/30"
                    >
                      {/* Question Button */}
                      <button
                        onClick={() => toggleItem(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/30 transition-colors duration-200"
                      >
                        <span className="text-lg font-semibold text-foreground pr-4">
                          {item?.question}
                        </span>
                        <Icon
                          name={isOpen ? "ChevronUp" : "ChevronDown"}
                          size={20}
                          className={`text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {/* Answer */}
                      {isOpen && (
                        <div className="px-6 pb-6 border-t border-border bg-muted/10">
                          <div className="pt-4">
                            {item?.answer?.split('\n')?.map((paragraph, pIndex) => {
                              if (paragraph?.startsWith('**') && paragraph?.endsWith('**')) {
                                // Bold headers
                                return (
                                  <h4 key={pIndex} className="font-semibold text-foreground mt-4 mb-2">
                                    {paragraph?.replace(/\*\*/g, '')}
                                  </h4>
                                );
                              } else if (paragraph?.startsWith('• ')) {
                                // Bullet points
                                return (
                                  <div key={pIndex} className="flex items-start space-x-2 mb-1">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-muted-foreground">
                                      {paragraph?.substring(2)}
                                    </span>
                                  </div>
                                );
                              } else if (paragraph?.trim()) {
                                // Regular paragraphs
                                return (
                                  <p key={pIndex} className="text-muted-foreground mb-3 leading-relaxed">
                                    {paragraph}
                                  </p>
                                );
                              }
                              return null;
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <div className="card-medical-elevated p-8 lg:p-12 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="MessageCircle" size={28} color="white" />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Aún tienes preguntas?
            </h3>
            
            <p className="text-muted-foreground mb-8">
              Nuestro equipo de especialistas está listo para resolver cualquier duda específica sobre tu implementación de SolHub.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="default"
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-success hover:bg-success/90"
                onClick={handleWhatsAppClick}
              >
                WhatsApp Directo
              </Button>
              <Button
                variant="outline"
                iconName="Calendar"
                iconPosition="left"
                onClick={handleScheduleClick}
              >
                Agendar Consulta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;