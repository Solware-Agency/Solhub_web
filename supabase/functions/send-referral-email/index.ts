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
    const { referralData } = await req.json();
    
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
    if (!referralData.referrerName || !referralData.referrerEmail || !referralData.referredName || !referralData.referredEmail) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Faltan campos requeridos para el referido'
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

    // Professional HTML email template for referrals
    const emailContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nuevo Referido - SolHub</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #334155;
            background-color: #f8fafc;
          }
          
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          
          .header {
            background: linear-gradient(135deg, #10B981 0%, #22D3EE 100%);
            padding: 30px;
            text-align: center;
            color: white;
          }
          
          .content {
            padding: 40px 30px;
          }
          
          .section {
            margin-bottom: 32px;
          }
          
          .section-title {
            display: flex;
            align-items: center;
            font-size: 18px;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 20px;
            padding-bottom: 12px;
            border-bottom: 2px solid #e2e8f0;
          }
          
          .info-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .info-item {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 16px;
          }
          
          .info-label {
            font-weight: 600;
            color: #475569;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 6px;
          }
          
          .info-value {
            color: #1e293b;
            font-size: 16px;
            font-weight: 500;
          }
          
          .footer {
            background: #1e293b;
            color: #cbd5e1;
            padding: 30px;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎁 Nuevo Referido - SolHub</h1>
            <p>Programa de Referidos con 20% de Descuento</p>
          </div>
          
          <div class="content">
            <div class="section">
              <div class="section-title">👤 Información del Referidor</div>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Nombre</div>
                  <div class="info-value">${referralData.referrerName}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Email</div>
                  <div class="info-value">${referralData.referrerEmail}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Teléfono</div>
                  <div class="info-value">${referralData.referrerPhone || 'No proporcionado'}</div>
                </div>
              </div>
            </div>
            
            <div class="section">
              <div class="section-title">🎯 Información del Referido</div>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Nombre</div>
                  <div class="info-value">${referralData.referredName}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Email</div>
                  <div class="info-value">${referralData.referredEmail}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Teléfono</div>
                  <div class="info-value">${referralData.referredPhone || 'No proporcionado'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Institución</div>
                  <div class="info-value">${referralData.referredInstitution || 'No proporcionada'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Relación</div>
                  <div class="info-value">${referralData.relationship || 'No especificada'}</div>
                </div>
              </div>
            </div>
            
            ${referralData.notes ? `
            <div class="section">
              <div class="section-title">📝 Notas Adicionales</div>
              <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
                <p style="white-space: pre-wrap;">${referralData.notes}</p>
              </div>
            </div>
            ` : ''}
          </div>
          
          <div class="footer">
            <div class="footer-brand">SolHub by Solware</div>
            <div class="footer-tagline">Programa de Referidos - 20% Descuento Permanente</div>
            <div style="font-size: 12px; opacity: 0.6; margin-top: 20px;">
              <p>Referido enviado el ${currentDate}</p>
              <p>© 2025 Solware Technologies - Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </body>
      </html>
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
        to: ['jesusdfreites@gmail.com'],
        subject: `🎁 Nuevo Referido SolHub - ${referralData.referrerName} refiere a ${referralData.referredName}`,
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
      message: 'Referido enviado exitosamente con Resend',
      emailId: emailResult?.id,
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error('Error sending referral email:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: error?.message || 'Error interno del servidor'
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
});