// Función para enviar email usando Resend API
export const sendContactEmail = async (formData) => {
  try {
    // Usar la URL completa para evitar problemas de routing
    const apiUrl = window.location.hostname === 'localhost' 
      ? '/api/send-email'
      : `${window.location.origin}/api/send-email`;
      
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ formData }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: 'Mensaje enviado correctamente. Te contactaremos pronto.',
      };
    } else {
      return {
        success: false,
        message: result.error || 'Error al enviar el mensaje. Inténtalo de nuevo.',
      };
    }
  } catch (error) {
    console.error('Error enviando email:', error);
    return {
      success: false,
      message: 'Error de conexión. Verifica tu internet e inténtalo de nuevo.',
    };
  }
};

// Función para enviar referidos
export const sendReferralEmail = async (referralData) => {
  try {
    // Usar la URL completa para evitar problemas de routing
    const apiUrl = window.location.hostname === 'localhost' 
      ? '/api/send-referral'
      : `${window.location.origin}/api/send-referral`;
      
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ referralData }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: 'Referido enviado correctamente. Gracias por tu recomendación.',
      };
    } else {
      return {
        success: false,
        message: result.error || 'Error al enviar el referido. Inténtalo de nuevo.',
      };
    }
  } catch (error) {
    console.error('Error enviando referido:', error);
    return {
      success: false,
      message: 'Error de conexión. Verifica tu internet e inténtalo de nuevo.',
    };
  }
};
