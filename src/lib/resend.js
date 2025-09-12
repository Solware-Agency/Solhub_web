// Sistema de envío de emails con múltiples opciones
export const sendContactEmail = async (formData) => {
  try {
    // Opción 1: Intentar con Supabase Edge Functions
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    
    if (supabaseUrl && supabaseAnonKey) {
      console.log('Intentando envío con Supabase Edge Functions...');
      
      const apiUrl = `${supabaseUrl}/functions/v1/send-contact-email`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          return {
            success: true,
            message: 'Email enviado correctamente con Supabase.',
          };
        }
      }
      
      console.log('Supabase Edge Functions no disponible, intentando con EmailJS...');
    }

    // Opción 2: Usar EmailJS como alternativa
    const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
      console.log('Intentando envío con EmailJS...');
      
      // Importar EmailJS dinámicamente
      const emailjs = await import('@emailjs/browser');
      
      const templateParams = {
        from_name: formData.nombre,
        from_email: formData.email,
        phone: formData.telefono || 'No proporcionado',
        institution: formData.institucion || 'No proporcionada',
        position: formData.cargo || 'No especificado',
        inquiry_type: formData.tipoConsulta || 'Consulta general',
        priority: formData.prioridad || 'Media',
        message: formData.mensaje,
        to_email: 'elthon.abou@gmail.com',
        reply_to: formData.email,
        date: new Date().toLocaleDateString('es-VE'),
        time: new Date().toLocaleTimeString('es-VE')
      };

      const result = await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        templateParams,
        emailjsPublicKey
      );

      if (result.status === 200) {
        return {
          success: true,
          message: 'Email enviado correctamente con EmailJS.',
        };
      }
    }

    // Opción 3: Usar Formspree como alternativa
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    
    if (formspreeEndpoint) {
      console.log('Intentando envío con Formspree...');
      
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.nombre,
          phone: formData.telefono,
          institution: formData.institucion,
          position: formData.cargo,
          inquiry_type: formData.tipoConsulta,
          priority: formData.prioridad,
          message: formData.mensaje,
          _subject: `Nueva consulta SolHub de ${formData.nombre}`,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        return {
          success: true,
          message: 'Email enviado correctamente con Formspree.',
        };
      }
    }

    // Opción 4: Usar Web3Forms como alternativa
    const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    
    if (web3formsKey) {
      console.log('Intentando envío con Web3Forms...');
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: formData.nombre,
          email: formData.email,
          phone: formData.telefono,
          institution: formData.institucion,
          position: formData.cargo,
          inquiry_type: formData.tipoConsulta,
          priority: formData.prioridad,
          message: formData.mensaje,
          subject: `Nueva consulta SolHub de ${formData.nombre}`,
          from_name: 'SolHub Contact Form',
          to_email: 'elthon.abou@gmail.com'
        })
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          return {
            success: true,
            message: 'Email enviado correctamente con Web3Forms.',
          };
        }
      }
    }

    // Si ninguna opción funciona, mostrar modo demo
    console.log('Ningún servicio de email configurado, usando modo demo...');
    return {
      success: true,
      message: 'Formulario enviado en modo demo. Para recibir emails reales, configura uno de los servicios de email disponibles.',
    };

  } catch (error) {
    console.error('Error enviando email:', error);
    
    // Fallback: Modo demo
    return {
      success: true,
      message: 'Formulario procesado en modo demo. Para emails reales, configura Supabase, EmailJS, Formspree o Web3Forms.',
    };
  }
};

// Función para enviar referidos con las mismas opciones
export const sendReferralEmail = async (referralData) => {
  try {
    // Opción 1: Supabase Edge Functions
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    
    if (supabaseUrl && supabaseAnonKey) {
      const apiUrl = `${supabaseUrl}/functions/v1/send-referral-email`;
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ referralData }),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          return {
            success: true,
            message: 'Referido enviado correctamente con Supabase.',
          };
        }
      }
    }

    // Opción 2: EmailJS
    const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailjsTemplateId = import.meta.env.VITE_EMAILJS_REFERRAL_TEMPLATE_ID;
    const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
      const emailjs = await import('@emailjs/browser');
      
      const templateParams = {
        referrer_name: referralData.referrerName,
        referrer_email: referralData.referrerEmail,
        referrer_phone: referralData.referrerPhone || 'No proporcionado',
        referred_name: referralData.referredName,
        referred_email: referralData.referredEmail,
        referred_phone: referralData.referredPhone || 'No proporcionado',
        referred_institution: referralData.referredInstitution || 'No proporcionada',
        relationship: referralData.relationship || 'No especificada',
        notes: referralData.notes || 'Sin notas adicionales',
        to_email: 'elthon.abou@gmail.com',
        date: new Date().toLocaleDateString('es-VE'),
        time: new Date().toLocaleTimeString('es-VE')
      };

      const result = await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        templateParams,
        emailjsPublicKey
      );

      if (result.status === 200) {
        return {
          success: true,
          message: 'Referido enviado correctamente con EmailJS.',
        };
      }
    }

    // Fallback: Modo demo
    return {
      success: true,
      message: 'Referido procesado en modo demo. Para emails reales, configura un servicio de email.',
    };

  } catch (error) {
    console.error('Error enviando referido:', error);
    
    return {
      success: true,
      message: 'Referido procesado en modo demo. Para emails reales, configura un servicio de email.',
    };
  }
};