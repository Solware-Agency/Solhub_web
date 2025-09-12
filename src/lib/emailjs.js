// Sistema de envío de emails con EmailJS
import emailjs from '@emailjs/browser';

// Configuración de EmailJS
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
  referralTemplateId: import.meta.env.VITE_EMAILJS_REFERRAL_TEMPLATE_ID,
};

// Inicializar EmailJS
const initEmailJS = () => {
  if (EMAILJS_CONFIG.publicKey) {
    emailjs.init(EMAILJS_CONFIG.publicKey);
    console.log('EmailJS inicializado correctamente');
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
      to_email: 'contacto@solhub.com', // Email de destino
      reply_to: formData.email,
      subject: `Nueva consulta de ${formData.nombre}`,
      date: new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    console.log('Enviando email de contacto con EmailJS...');
    
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.contactTemplateId,
      templateParams
    );

    console.log('Email enviado exitosamente:', result);
    
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

    console.log('Enviando email de referido con EmailJS...');
    
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.referralTemplateId,
      templateParams
    );

    console.log('Email de referido enviado exitosamente:', result);
    
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
  };

  const isConfigured = Object.values(config).every(Boolean);
  
  console.log('Configuración de EmailJS:', config);
  console.log('EmailJS configurado:', isConfigured);
  
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
  sendReferralEmail,
  checkEmailJSConfig,
  formatContactData,
  formatReferralData
};
