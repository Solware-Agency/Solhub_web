// Vercel Serverless Function for sending contact emails
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Importar Resend dinámicamente
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { formData } = req.body;

    // Validar datos requeridos
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      return res.status(400).json({ 
        success: false, 
        error: 'Faltan campos requeridos' 
      });
    }

    // Enviar email
    const { data, error } = await resend.emails.send({
      from: 'SolHub <onboarding@resend.dev>',
      to: ['ventas@solware.agency'], // Email de ventas Solware
      subject: `Nuevo contacto de ${formData.nombre} - ${formData.tipoConsulta || 'Consulta'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B5CF6;">Nuevo Contacto - SolHub</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Información del Contacto</h3>
            
            <p><strong>Nombre:</strong> ${formData.nombre}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Teléfono:</strong> ${formData.telefono || 'No proporcionado'}</p>
            <p><strong>Institución:</strong> ${formData.institucion || 'No proporcionada'}</p>
            <p><strong>Tipo de Consulta:</strong> ${formData.tipoConsulta || 'No especificado'}</p>
            <p><strong>Prioridad:</strong> ${formData.prioridad || 'Media'}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Mensaje</h3>
            <p style="white-space: pre-wrap;">${formData.mensaje}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px;">
            <p style="margin: 0; color: #1976d2; font-size: 14px;">
              <strong>Fecha:</strong> ${new Date().toLocaleString('es-VE')}
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error enviando email:', error);
      return res.status(500).json({ 
        success: false, 
        error: 'Error al enviar el email' 
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Email enviado correctamente',
      data 
    });

  } catch (error) {
    console.error('Error en API:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Error interno del servidor' 
    });
  }
}
