// Función para enviar email usando Resend API
export const sendContactEmail = async (formData) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData }),
    });

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
    const response = await fetch('/api/send-referral', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ referralData }),
    });

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
