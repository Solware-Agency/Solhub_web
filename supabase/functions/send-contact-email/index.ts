import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

// Add Deno type declaration for the global Deno object
declare const Deno: {
  env: {
    get(key: string): string | undefined;
  };
};

// Helper function to get consultation type label in Spanish
const getConsultationTypeLabel = (type: string): string => {
  const types: { [key: string]: string } = {
    'demo': 'Solicitar Demostración',
    'precios': 'Información de Precios', 
    'tecnico': 'Soporte Técnico',
    'ventas': 'Consulta Comercial',
    'referido': 'Programa de Referidos',
    'partnership': 'Alianzas Estratégicas'
  };
  return types[type] || type;
};

// Helper function to get priority label with colors
const getPriorityLabel = (priority: string): { label: string, color: string } => {
  const priorities: { [key: string]: { label: string, color: string } } = {
    'baja': { label: 'Baja - Información General', color: '#22c55e' },
    'media': { label: 'Media - Consulta Específica', color: '#f59e0b' },
    'alta': { label: 'Alta - Necesidad Urgente', color: '#ef4444' },
    'critica': { label: 'Crítica - Problema Operacional', color: '#dc2626' }
  };
  return priorities[priority] || { label: priority || 'Media', color: '#f59e0b' };
};

serve(async (req) => {
  // ✅ CORS preflight
  if (req?.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*", // DO NOT CHANGE THIS
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "*" // DO NOT CHANGE THIS
      }
    });
  }

  try {
    const { formData } = await req?.json();
    
    // Get Resend API key from environment
    const RESEND_API_KEY = Deno?.env?.get('RESEND_API_KEY');
    
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY not found in environment variables');
    }

    // Get consultation type and priority labels
    const consultationType = getConsultationTypeLabel(formData?.tipo_consulta || formData?.tipoConsulta);
    const priorityInfo = getPriorityLabel(formData?.prioridad);
    const currentDate = new Date().toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Professional HTML email template with SolHub branding
    const emailContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nueva Consulta - SolHub</title>
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
            background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
            padding: 30px;
            text-align: center;
            color: white;
          }
          
          .header h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 8px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          
          .header p {
            font-size: 16px;
            opacity: 0.95;
            font-weight: 300;
          }
          
          .content {
            padding: 40px 30px;
          }
          
          .alert-banner {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            border: 1px solid #0ea5e9;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 30px;
            text-align: center;
          }
          
          .alert-banner h2 {
            color: #0369a1;
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 8px;
          }
          
          .alert-banner p {
            color: #0284c7;
            font-size: 14px;
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
          
          .section-title::before {
            content: '';
            width: 4px;
            height: 20px;
            background: linear-gradient(135deg, #0ea5e9, #06b6d4);
            margin-right: 12px;
            border-radius: 2px;
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
            transition: all 0.2s ease;
          }
          
          .info-item:hover {
            border-color: #0ea5e9;
            box-shadow: 0 4px 12px rgba(14, 165, 233, 0.1);
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
          
          .priority-badge {
            display: inline-flex;
            align-items: center;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
            color: white;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .message-box {
            background: linear-gradient(135deg, #fefefe 0%, #f8fafc 100%);
            border: 1px solid #e2e8f0;
            border-left: 4px solid #0ea5e9;
            border-radius: 8px;
            padding: 24px;
            margin-top: 20px;
          }
          
          .message-content {
            color: #334155;
            font-size: 15px;
            line-height: 1.7;
            white-space: pre-wrap;
            word-wrap: break-word;
          }
          
          .footer {
            background: #1e293b;
            color: #cbd5e1;
            padding: 30px;
            text-align: center;
          }
          
          .footer-brand {
            font-size: 24px;
            font-weight: 700;
            color: #0ea5e9;
            margin-bottom: 12px;
          }
          
          .footer-tagline {
            font-size: 14px;
            margin-bottom: 20px;
            opacity: 0.8;
          }
          
          .footer-meta {
            font-size: 12px;
            opacity: 0.6;
            border-top: 1px solid #374151;
            padding-top: 20px;
            margin-top: 20px;
          }
          
          .cta-section {
            background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
            border-radius: 12px;
            padding: 24px;
            text-align: center;
            margin-top: 30px;
          }
          
          .cta-section h3 {
            color: white;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 8px;
          }
          
          .cta-section p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 14px;
          }
          
          @media (max-width: 600px) {
            .container {
              margin: 0;
              box-shadow: none;
            }
            
            .header, .content, .footer {
              padding: 20px;
            }
            
            .header h1 {
              font-size: 24px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Header -->
          <div class="header">
            <h1>SolHub</h1>
            <p>Plataforma Médica Inteligente</p>
          </div>
          
          <!-- Content -->
          <div class="content">
            <!-- Alert Banner -->
            <div class="alert-banner">
              <h2>🔔 Nueva Consulta Recibida</h2>
              <p>Se ha recibido una nueva consulta desde el formulario de contacto</p>
            </div>
            
            <!-- Personal Information -->
            <div class="section">
              <div class="section-title">👤 Información Personal</div>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Nombre Completo</div>
                  <div class="info-value">${formData?.nombre || 'No especificado'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Correo Electrónico</div>
                  <div class="info-value">${formData?.email || 'No especificado'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Teléfono</div>
                  <div class="info-value">${formData?.telefono || 'No especificado'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Institución</div>
                  <div class="info-value">${formData?.institucion || 'No especificado'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Cargo</div>
                  <div class="info-value">${formData?.cargo || 'No especificado'}</div>
                </div>
              </div>
            </div>
            
            <!-- Consultation Details -->
            <div class="section">
              <div class="section-title">📋 Detalles de la Consulta</div>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Tipo de Consulta</div>
                  <div class="info-value">${consultationType}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Prioridad</div>
                  <div class="info-value">
                    <span class="priority-badge" style="background-color: ${priorityInfo.color};">
                      ${priorityInfo.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Message -->
            <div class="section">
              <div class="section-title">💬 Mensaje</div>
              <div class="message-box">
                <div class="message-content">${formData?.mensaje || 'Sin mensaje específico'}</div>
              </div>
            </div>
            
            <!-- CTA Section -->
            <div class="cta-section">
              <h3>⚡ Acción Requerida</h3>
              <p>Responder a esta consulta dentro de las próximas 2 horas durante horario laboral</p>
            </div>
          </div>
          
          <!-- Footer -->
          <div class="footer">
            <div class="footer-brand">SolHub</div>
            <div class="footer-tagline">Transformando la Gestión Médica con Inteligencia Artificial</div>
            <div class="footer-meta">
              <p>Este correo fue generado automáticamente el ${currentDate}</p>
              <p>Consulta enviada desde: Formulario de Contacto SolHub</p>
              <p>© 2025 Solware Technologies - Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email using Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: ['jesusdfreites@gmail.com'],
        subject: `🔔 Nueva Consulta - ${consultationType} - ${formData?.nombre}`,
        html: emailContent
      })
    });

    const emailResult = await emailResponse?.json();
    
    if (!emailResponse?.ok) {
      throw new Error(`Email sending failed: ${emailResult?.message || 'Unknown error'}`);
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Email enviado exitosamente con formato profesional',
      emailId: emailResult?.id,
      timestamp: new Date().toISOString()
    }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" // DO NOT CHANGE THIS
      }
    });
  } catch (error) {
    console.error('Error sending email:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: error?.message || 'Error interno del servidor'
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" // DO NOT CHANGE THIS
      }
    });
  }
});