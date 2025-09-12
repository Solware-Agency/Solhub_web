// Vercel Serverless Function for sending referral emails
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

    const { referralData } = req.body;

    // Validar datos requeridos
    if (!referralData.referrerName || !referralData.referrerEmail || !referralData.referredName || !referralData.referredEmail) {
      return res.status(400).json({ 
        success: false, 
        error: 'Faltan campos requeridos' 
      });
    }

    // Enviar email de referido
    const { data, error } = await resend.emails.send({
      from: 'SolHub <onboarding@resend.dev>',
      to: ['ventas@solware.agency'], // Email de ventas Solware
      subject: `Nuevo Referido de ${referralData.referrerName} - SolHub`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B5CF6;">Nuevo Referido - SolHub</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Información del Referidor</h3>
            
            <p><strong>Nombre:</strong> ${referralData.referrerName}</p>
            <p><strong>Email:</strong> ${referralData.referrerEmail}</p>
            <p><strong>Teléfono:</strong> ${referralData.referrerPhone || 'No proporcionado'}</p>
          </div>
          
          <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Información del Referido</h3>
            
            <p><strong>Nombre:</strong> ${referralData.referredName}</p>
            <p><strong>Email:</strong> ${referralData.referredEmail}</p>
            <p><strong>Teléfono:</strong> ${referralData.referredPhone || 'No proporcionado'}</p>
            <p><strong>Institución:</strong> ${referralData.referredInstitution || 'No proporcionada'}</p>
            <p><strong>Relación:</strong> ${referralData.relationship || 'No especificada'}</p>
          </div>
          
          ${referralData.notes ? `
          <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Notas Adicionales</h3>
            <p style="white-space: pre-wrap;">${referralData.notes}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px;">
            <p style="margin: 0; color: #1976d2; font-size: 14px;">
              <strong>Fecha:</strong> ${new Date().toLocaleString('es-VE')}
            </p>
            <p style="margin: 5px 0 0 0; color: #1976d2; font-size: 14px;">
              <strong>Beneficio:</strong> 20% de descuento permanente para el referido
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error enviando referido:', error);
      return res.status(500).json({ 
        success: false, 
        error: 'Error al enviar el referido' 
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Referido enviado correctamente',
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
