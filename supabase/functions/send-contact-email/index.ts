import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { formData } = await req.json();
    
    // Get Resend API key from environment
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not found in environment variables');
      return new Response(JSON.stringify({
        success: false,
        error: 'Configuración de email no disponible'
      }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    // Validar datos requeridos
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Faltan campos requeridos'
      }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    const currentDate = new Date().toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Simple email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #8B5CF6; margin-bottom: 20px;">Nueva Consulta - SolHub</h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Información del Contacto</h3>
          
          <p><strong>Nombre:</strong> ${formData.nombre}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Teléfono:</strong> ${formData.telefono || 'No proporcionado'}</p>
          <p><strong>Institución:</strong> ${formData.institucion || 'No proporcionada'}</p>
          <p><strong>Tipo de Consulta:</strong> ${formData.tipoConsulta || 'No especificado'}</p>
        </div>
        
        <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
          <h3 style="color: #333; margin-top: 0;">Mensaje</h3>
          <p style="white-space: pre-wrap;">${formData.mensaje}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px;">
          <p style="margin: 0; color: #1976d2; font-size: 14px;">
            <strong>Fecha:</strong> ${currentDate}
          </p>
        </div>
      </div>
    `;

    // Send email using Resend API
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'SolHub <onboarding@resend.dev>',
        to: ['elthon.abou@gmail.com'],
        subject: `Nueva Consulta SolHub - ${formData.nombre}`,
        html: emailContent
      })
    });

    const emailResult = await emailResponse.json();
    
    if (!emailResponse.ok) {
      console.error('Resend API error:', emailResult);
      throw new Error(`Email sending failed: ${emailResult?.message || 'Unknown error'}`);
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Email enviado exitosamente con Resend',
      emailId: emailResult?.id,
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: error?.message || 'Error interno del servidor'
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
});