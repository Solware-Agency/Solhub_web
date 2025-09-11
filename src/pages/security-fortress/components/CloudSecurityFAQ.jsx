import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CloudSecurityFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      id: 1,
      category: "Soberanía de Datos",
      question: "¿Dónde se almacenan físicamente los datos de mi laboratorio?",
      answer: `Los datos de tu laboratorio se almacenan en centros de datos certificados ubicados estratégicamente para garantizar la mejor latencia y cumplimiento normativo.\n\nPara laboratorios venezolanos, implementamos una arquitectura híbrida que permite:\n\n• Almacenamiento primario en servidores con certificación ISO 27001\n• Respaldos encriptados en múltiples ubicaciones geográficas\n• Cumplimiento con regulaciones de soberanía de datos venezolanas\n• Acceso exclusivo desde ubicaciones autorizadas\n\nTus datos nunca se mezclan con los de otros laboratorios y mantienes control total sobre su ubicación y acceso.`,
      icon: "Globe",
      color: "primary"
    },
    {
      id: 2,
      category: "Encriptación",
      question: "¿Qué nivel de encriptación utiliza SolHub para proteger mis datos?",
      answer: `SolHub implementa múltiples capas de encriptación de nivel militar:\n\n**Datos en Reposo:**\n• Encriptación AES-256 para toda la información almacenada\n• Claves de encriptación rotadas automáticamente cada 30 días\n• Almacenamiento de claves separado físicamente de los datos\n\n**Datos en Tránsito:**\n• TLS 1.3 para todas las comunicaciones\n• Certificados SSL/TLS renovados automáticamente\n• Perfect Forward Secrecy para máxima protección\n\n**Datos en Procesamiento:**\n• Encriptación a nivel de aplicación\n• Memoria encriptada durante el procesamiento\n• Eliminación segura de datos temporales\n\nEste nivel de protección es el mismo utilizado por instituciones bancarias y gubernamentales.`,
      icon: "Lock",
      color: "success"
    },
    {
      id: 3,
      category: "Acceso y Control",
      question: "¿Quién puede acceder a los datos médicos de mis pacientes?",
      answer: `El acceso a los datos médicos está estrictamente controlado mediante múltiples mecanismos:\n\n**Control de Acceso por Rol:**\n• Solo personal autorizado de tu laboratorio puede acceder\n• Permisos granulares según función específica\n• Autenticación multifactor obligatoria para todos\n\n**Personal de SolHub:**\n• Acceso técnico solo para mantenimiento autorizado\n• Sin acceso a contenido médico o información de pacientes\n• Todas las actividades técnicas son auditadas y registradas\n\n**Auditoría Completa:**\n• Registro inmutable de todos los accesos\n• Alertas automáticas por actividad sospechosa\n• Reportes de acceso disponibles en tiempo real\n\nNunca compartimos, vendemos o utilizamos tus datos médicos para ningún propósito ajeno a la operación de tu laboratorio.`,
      icon: "UserCheck",
      color: "secondary"
    },
    {
      id: 4,
      category: "Respaldos",
      question: "¿Cómo funciona el sistema de respaldos y qué pasa si hay una falla?",
      answer: `Nuestro sistema de respaldos está diseñado para garantizar cero pérdida de datos:\n\n**Respaldos Automáticos:**\n• Respaldos incrementales cada 15 minutos\n• Respaldos completos diarios\n• Retención de 90 días para respaldos incrementales\n• Retención de 7 años para respaldos anuales\n\n**Múltiples Ubicaciones:**\n• Respaldos primarios en tiempo real\n• Respaldos secundarios en ubicación geográfica diferente\n• Respaldos terciarios en almacenamiento offline\n\n**Recuperación Rápida:**\n• RTO (Recovery Time Objective): 4 horas máximo\n• RPO (Recovery Point Objective): 15 minutos máximo\n• Pruebas de recuperación mensuales\n• Plan de continuidad de negocio documentado\n\nEn caso de falla, tu laboratorio puede continuar operando con interrupciones mínimas.`,
      icon: "HardDrive",
      color: "accent"
    },
    {
      id: 5,
      category: "Cumplimiento Legal",
      question: "¿SolHub cumple con las regulaciones venezolanas de protección de datos?",
      answer: `Sí, SolHub está diseñado específicamente para cumplir con todas las regulaciones venezolanas:\n\n**Normativas Venezolanas:**\n• Ley de Protección de Datos Personales\n• Regulaciones del Ministerio del Poder Popular para la Salud (MPPS)\n• Normativas de telemedicina y salud digital\n• Requisitos de confidencialidad médica\n\n**Estándares Internacionales:**\n• ISO 27001 (Gestión de Seguridad de la Información)\n• HIPAA (Portabilidad y Responsabilidad del Seguro Médico)\n• GDPR (Reglamento General de Protección de Datos)\n• SOC 2 Type II (Controles de Organización de Servicios)\n\n**Documentación Legal:**\n• Contratos de procesamiento de datos\n• Políticas de privacidad específicas para Venezuela\n• Procedimientos de notificación de brechas\n• Derechos de los titulares de datos claramente definidos`,
      icon: "Scale",
      color: "warning"
    },
    {
      id: 6,
      category: "Monitoreo",
      question: "¿Cómo puedo saber si mis datos están seguros y monitorear la actividad?",
      answer: `SolHub te proporciona visibilidad completa sobre la seguridad de tus datos:\n\n**Dashboard de Seguridad:**\n• Estado de seguridad en tiempo real\n• Métricas de cumplimiento actualizadas\n• Alertas de seguridad priorizadas\n• Tendencias de actividad y acceso\n\n**Reportes Automáticos:**\n• Reportes semanales de actividad\n• Auditorías mensuales de seguridad\n• Reportes trimestrales de cumplimiento\n• Alertas inmediatas por eventos críticos\n\n**Herramientas de Monitoreo:**\n• Logs de actividad detallados\n• Análisis de comportamiento de usuarios\n• Detección de anomalías automática\n• Integración con sistemas de alertas externos\n\n**Transparencia Total:**\n• Acceso a todos los logs de tu laboratorio\n• Reportes de tiempo de actividad (uptime)\n• Métricas de rendimiento del sistema\n• Historial completo de cambios y actualizaciones`,
      icon: "Activity",
      color: "primary"
    },
    {
      id: 7,
      category: "Incidentes",
      question: "¿Qué sucede si hay una brecha de seguridad o incidente?",
      answer: `Tenemos un plan integral de respuesta a incidentes diseñado para minimizar el impacto:\n\n**Detección Inmediata:**\n• Monitoreo 24/7 con IA para detección de anomalías\n• Alertas automáticas en menos de 5 minutos\n• Escalación inmediata al equipo de respuesta\n• Notificación automática a contactos designados\n\n**Respuesta Rápida:**\n• Aislamiento automático de sistemas afectados\n• Activación del equipo de respuesta en 15 minutos\n• Análisis forense inmediato para determinar alcance\n• Implementación de medidas de contención\n\n**Comunicación Transparente:**\n• Notificación inmediata a laboratorios afectados\n• Actualizaciones cada 2 horas durante el incidente\n• Reporte post-incidente con análisis completo\n• Recomendaciones para prevenir futuros incidentes\n\n**Cumplimiento Legal:**\n• Notificación a autoridades según regulaciones\n• Documentación completa para auditorías\n• Cooperación total con investigaciones\n• Implementación de mejoras basadas en lecciones aprendidas`,
      icon: "AlertTriangle",
      color: "error"
    },
    {
      id: 8,
      category: "Migración",
      question: "¿Es seguro migrar mis datos actuales a SolHub?",
      answer: `La migración a SolHub es completamente segura y está diseñada para ser transparente:\n\n**Proceso de Migración Segura:**\n• Análisis previo de tus datos actuales\n• Encriptación de datos durante todo el proceso\n• Migración por lotes para minimizar riesgos\n• Verificación de integridad en cada paso\n\n**Validación Completa:**\n• Comparación bit a bit de datos migrados\n• Pruebas de funcionalidad completas\n• Validación por parte de tu equipo\n• Rollback disponible en caso necesario\n\n**Cero Tiempo de Inactividad:**\n• Migración en paralelo con sistemas actuales\n• Sincronización en tiempo real durante transición\n• Cambio instantáneo cuando esté listo\n• Soporte 24/7 durante todo el proceso\n\n**Garantías de Seguridad:**\n• Eliminación segura de datos temporales\n• Certificado de destrucción de medios\n• Auditoría completa del proceso\n• Garantía de integridad de datos al 100%`,
      icon: "Download",
      color: "secondary"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container-medical">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Seguridad en la Nube: Resolvemos tus Dudas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Respuestas claras a las preocupaciones más comunes sobre el almacenamiento 
            seguro de datos médicos en la nube, específicamente en el contexto venezolano.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs?.map((faq, index) => (
              <div key={faq?.id} className="bg-card border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left hover:bg-muted/10 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 bg-${faq?.color}/10 rounded-lg flex items-center justify-center`}>
                        <Icon 
                          name={faq?.icon} 
                          size={20} 
                          color={`var(--color-${faq?.color})`} 
                        />
                      </div>
                      <div>
                        <div className={`text-xs font-medium text-${faq?.color} mb-1`}>
                          {faq?.category}
                        </div>
                        <h3 className="font-semibold text-foreground">{faq?.question}</h3>
                      </div>
                    </div>
                    <Icon 
                      name={openFAQ === index ? "ChevronUp" : "ChevronDown"} 
                      size={20} 
                      color="var(--color-muted-foreground)"
                      className="transition-transform duration-200"
                    />
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-14">
                      <div className="prose prose-sm max-w-none">
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                          {faq?.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <Icon name="MessageCircle" size={32} color="var(--color-primary)" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">
              ¿Tienes más preguntas sobre seguridad?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestro equipo de expertos en seguridad está disponible para resolver 
              cualquier duda específica sobre la protección de tus datos médicos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200">
                <Icon name="MessageCircle" size={16} />
                <span>Contactar por WhatsApp</span>
              </button>
              <button className="inline-flex items-center space-x-2 px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted/50 transition-colors duration-200">
                <Icon name="Calendar" size={16} />
                <span>Agendar Consulta de Seguridad</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudSecurityFAQ;