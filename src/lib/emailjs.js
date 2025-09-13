// Sistema de envío de emails con EmailJS
import emailjs from '@emailjs/browser';

// Configuración de EmailJS
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
  referralTemplateId: import.meta.env.VITE_EMAILJS_REFERRAL_TEMPLATE_ID,
  demoTemplateId: import.meta.env.VITE_EMAILJS_DEMO_TEMPLATE_ID,
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'contacto@solhub.com',
};

// Inicializar EmailJS
const initEmailJS = () => {
  if (EMAILJS_CONFIG.publicKey) {
    emailjs.init(EMAILJS_CONFIG.publicKey);
    return true;
  } else {
    console.error('VITE_EMAILJS_PUBLIC_KEY no está configurada');
    return false;
  }
};

// Función para enviar email de contacto
export const sendContactEmail = async (formData) => {
  try {
    // Verificar configuración
    if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.contactTemplateId) {
      throw new Error('Configuración de EmailJS incompleta');
    }

    // Inicializar EmailJS
    if (!initEmailJS()) {
      throw new Error('No se pudo inicializar EmailJS');
    }

    // Preparar datos para el template
    const templateParams = {
      from_name: formData.nombre,
      from_email: formData.email,
      message: formData.mensaje,
      telefono: formData.telefono || 'No proporcionado',
      institucion: formData.institucion || 'No proporcionada',
      cargo: formData.cargo || 'No proporcionado',
      tipo_consulta: formData.tipoConsulta || 'No especificado',
      prioridad: formData.prioridad || 'No especificada',
      asunto: formData.asunto || 'Consulta general',
      // Campos específicos para demo programado
      fecha_demo: formData.fechaDemo || '',
      hora_demo: formData.horaDemo || '',
      tipo_demo: formData.tipoDemo || '',
      to_email: EMAILJS_CONFIG.contactEmail, // Email de destino
      reply_to: formData.email,
      subject: formData.asunto || `Nueva consulta de ${formData.nombre}`,
      date: new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.contactTemplateId,
      templateParams
    );

    
    return {
      success: true,
      message: 'Email enviado correctamente con EmailJS.',
      data: result
    };

  } catch (error) {
    console.error('Error enviando email de contacto:', error);
    return {
      success: false,
      message: 'Error al enviar el email. Por favor, inténtalo de nuevo.',
      error: error.message
    };
  }
};

// Función para enviar email de demo programado
export const sendDemoEmail = async (demoData) => {
  try {
    // Verificar configuración
    if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.demoTemplateId) {
      throw new Error('Configuración de EmailJS para demo incompleta');
    }

    // Inicializar EmailJS
    if (!initEmailJS()) {
      throw new Error('No se pudo inicializar EmailJS');
    }

    // Preparar datos específicos para el template de demo
    const templateParams = {
      // Información del contacto
      from_name: demoData.nombre,
      from_email: demoData.email,
      telefono: demoData.telefono || 'No proporcionado',
      institucion: demoData.institucion || 'No proporcionada',
      cargo: demoData.cargo || 'No proporcionado',
      
      // Información específica del demo
      fecha_demo: demoData.fechaDemo || 'No especificada',
      hora_demo: demoData.horaDemo || 'No especificada',
      tipo_demo: demoData.tipoDemo || 'No especificado',
      mensaje_adicional: demoData.mensaje || 'Sin mensaje adicional',
      
      // Configuración del email
      to_email: EMAILJS_CONFIG.contactEmail,
      reply_to: demoData.email,
      subject: `🎯 Demo Programado - ${demoData.nombre} - ${demoData.fechaDemo}`,
      
      // Fecha de envío
      fecha_envio: new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      
      // Información adicional
      zona_horaria: 'Venezuela (UTC-4)',
      duracion_demo: '45 minutos',
      tipo_consulta: 'Demo Programado'
    };

    
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.demoTemplateId,
      templateParams
    );

    
    return {
      success: true,
      message: 'Demo programado correctamente. Te contactaremos pronto.',
      data: result
    };

  } catch (error) {
    console.error('❌ Error enviando email de demo:', error);
    return {
      success: false,
      message: 'Error al programar el demo. Por favor, inténtalo de nuevo.',
      error: error.message
    };
  }
};

// Función para enviar email de referido
export const sendReferralEmail = async (referralData) => {
  try {
    // Verificar configuración
    if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.referralTemplateId) {
      throw new Error('Configuración de EmailJS incompleta');
    }

    // Inicializar EmailJS
    if (!initEmailJS()) {
      throw new Error('No se pudo inicializar EmailJS');
    }

    // Preparar datos para el template
    const templateParams = {
      referrer_name: referralData.referrerName,
      referrer_email: referralData.referrerEmail,
      referrer_phone: referralData.referrerPhone || 'No proporcionado',
      referred_name: referralData.referredName,
      referred_email: referralData.referredEmail,
      referred_phone: referralData.referredPhone || 'No proporcionado',
      referred_institution: referralData.referredInstitution || 'No especificada',
      relationship: referralData.relationship || 'No especificada',
      notes: referralData.notes || 'Sin notas adicionales',
      message: referralData.message || 'Te invito a conocer SolHub, una plataforma innovadora de soluciones médicas.',
      to_email: referralData.referredEmail,
      reply_to: referralData.referrerEmail,
      subject: `${referralData.referrerName} te invita a conocer SolHub`,
      date: new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.referralTemplateId,
      templateParams
    );

    
    return {
      success: true,
      message: 'Referido enviado correctamente con EmailJS.',
      data: result
    };

  } catch (error) {
    console.error('Error enviando email de referido:', error);
    return {
      success: false,
      message: 'Error al enviar el referido. Por favor, inténtalo de nuevo.',
      error: error.message
    };
  }
};

// Función para verificar la configuración de EmailJS
export const checkEmailJSConfig = () => {
  const config = {
    publicKey: !!EMAILJS_CONFIG.publicKey,
    serviceId: !!EMAILJS_CONFIG.serviceId,
    contactTemplateId: !!EMAILJS_CONFIG.contactTemplateId,
    referralTemplateId: !!EMAILJS_CONFIG.referralTemplateId,
    demoTemplateId: !!EMAILJS_CONFIG.demoTemplateId,
  };

  const isConfigured = Object.values(config).every(Boolean);
  
  
  return {
    isConfigured,
    config
  };
};

// Función de utilidad para formatear datos del formulario
export const formatContactData = (formData) => {
  return {
    nombre: formData.nombre?.trim() || '',
    email: formData.email?.trim() || '',
    mensaje: formData.mensaje?.trim() || '',
    telefono: formData.telefono?.trim() || '',
    empresa: formData.empresa?.trim() || '',
    asunto: formData.asunto?.trim() || 'Consulta general'
  };
};

// Función de utilidad para formatear datos de referido
export const formatReferralData = (referralData) => {
  return {
    referrerName: referralData.referrerName?.trim() || '',
    referrerEmail: referralData.referrerEmail?.trim() || '',
    referredName: referralData.referredName?.trim() || '',
    referredEmail: referralData.referredEmail?.trim() || '',
    message: referralData.message?.trim() || ''
  };
};


export default {
  sendContactEmail,
  sendDemoEmail,
  sendReferralEmail,
  checkEmailJSConfig,
  formatContactData,
  formatReferralData
};
