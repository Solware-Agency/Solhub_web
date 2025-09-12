# Templates de EmailJS Actualizados

## 📧 Template de Contacto (template_99fb0mc)

**Asunto:** Nueva consulta de {{from_name}}

**Contenido del email:**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    
    <h2 style="color: #8B5CF6; margin-bottom: 20px; text-align: center;">
      🏥 Nueva Consulta - SolHub
    </h2>
    
    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #333; margin-top: 0;">👤 Información del Contacto</h3>
      
      <p><strong>Nombre:</strong> {{from_name}}</p>
      <p><strong>Email:</strong> {{from_email}}</p>
      <p><strong>Teléfono:</strong> {{telefono}}</p>
      <p><strong>Institución:</strong> {{institucion}}</p>
      <p><strong>Cargo:</strong> {{cargo}}</p>
    </div>
    
    <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #333; margin-top: 0;">📋 Detalles de la Consulta</h3>
      
      <p><strong>Tipo de Consulta:</strong> {{tipo_consulta}}</p>
      <p><strong>Prioridad:</strong> {{prioridad}}</p>
      <p><strong>Asunto:</strong> {{asunto}}</p>
    </div>
    
    <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #333; margin-top: 0;">💬 Mensaje</h3>
      <p style="white-space: pre-wrap; line-height: 1.6;">{{message}}</p>
    </div>
    
    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
      <p style="color: #666; font-size: 14px;">
        📅 Recibido el: {{date}}
      </p>
      <p style="color: #666; font-size: 14px;">
        Puedes responder directamente a este email.
      </p>
    </div>
    
  </div>
</div>
```

## 📧 Template de Referido (template_kyik6lq)

**Asunto:** {{referrer_name}} te invita a conocer SolHub

**Contenido del email:**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    
    <h2 style="color: #8B5CF6; margin-bottom: 20px; text-align: center;">
      🤝 Invitación a SolHub
    </h2>
    
    <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #333; margin-top: 0;">👤 Quien te invita</h3>
      
      <p><strong>Nombre:</strong> {{referrer_name}}</p>
      <p><strong>Email:</strong> {{referrer_email}}</p>
      <p><strong>Teléfono:</strong> {{referrer_phone}}</p>
    </div>
    
    <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #333; margin-top: 0;">👥 Información del Referido</h3>
      
      <p><strong>Nombre:</strong> {{referred_name}}</p>
      <p><strong>Email:</strong> {{referred_email}}</p>
      <p><strong>Teléfono:</strong> {{referred_phone}}</p>
      <p><strong>Institución:</strong> {{referred_institution}}</p>
      <p><strong>Relación:</strong> {{relationship}}</p>
    </div>
    
    <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #333; margin-top: 0;">💬 Mensaje Personal</h3>
      <p style="white-space: pre-wrap; line-height: 1.6;">{{message}}</p>
    </div>
    
    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #333; margin-top: 0;">📝 Notas Adicionales</h3>
      <p style="white-space: pre-wrap; line-height: 1.6;">{{notes}}</p>
    </div>
    
    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
      <p style="color: #666; font-size: 14px;">
        📅 Enviado el: {{date}}
      </p>
      <p style="color: #666; font-size: 14px;">
        Para más información sobre SolHub, visita nuestro sitio web.
      </p>
    </div>
    
  </div>
</div>
```

## 🔧 Cómo actualizar los templates:

1. **Ve a tu cuenta de EmailJS**: https://www.emailjs.com/
2. **Navega a "Email Templates"**
3. **Edita el template de contacto** (template_99fb0mc):
   - Copia el contenido del template de contacto de arriba
   - Pega en el editor de EmailJS
   - Guarda los cambios
4. **Edita el template de referido** (template_kyik6lq):
   - Copia el contenido del template de referido de arriba
   - Pega en el editor de EmailJS
   - Guarda los cambios

## ✅ Variables disponibles:

### Template de Contacto:
- `{{from_name}}` - Nombre del contacto
- `{{from_email}}` - Email del contacto
- `{{telefono}}` - Teléfono
- `{{institucion}}` - Institución
- `{{cargo}}` - Cargo
- `{{tipo_consulta}}` - Tipo de consulta
- `{{prioridad}}` - Prioridad
- `{{asunto}}` - Asunto
- `{{message}}` - Mensaje
- `{{date}}` - Fecha y hora

### Template de Referido:
- `{{referrer_name}}` - Nombre del referidor
- `{{referrer_email}}` - Email del referidor
- `{{referrer_phone}}` - Teléfono del referidor
- `{{referred_name}}` - Nombre del referido
- `{{referred_email}}` - Email del referido
- `{{referred_phone}}` - Teléfono del referido
- `{{referred_institution}}` - Institución del referido
- `{{relationship}}` - Relación
- `{{message}}` - Mensaje personal
- `{{notes}}` - Notas adicionales
- `{{date}}` - Fecha y hora
