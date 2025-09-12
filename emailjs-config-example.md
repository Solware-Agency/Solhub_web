# Configuración de EmailJS

Para configurar EmailJS en tu proyecto, necesitas crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# EmailJS Configuration
# Obtén estos valores desde https://www.emailjs.com/
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id_here
VITE_EMAILJS_REFERRAL_TEMPLATE_ID=your_referral_template_id_here
VITE_EMAILJS_DEMO_TEMPLATE_ID=your_demo_template_id_here
VITE_CONTACT_EMAIL=tu-email@ejemplo.com
```

## Pasos para configurar EmailJS:

1. **Crear cuenta en EmailJS**: Ve a https://www.emailjs.com/ y crea una cuenta gratuita

2. **Configurar servicio de email**: 
   - Ve a "Email Services" y conecta tu proveedor de email (Gmail, Outlook, etc.)
   - Copia el "Service ID"

3. **Crear templates**:
   - Ve a "Email Templates" y crea tres templates:
     - **Template de Contacto**: Para emails de contacto general
     - **Template de Referido**: Para emails de referidos
     - **Template de Demo**: Para emails de demo programado

4. **Obtener Public Key**:
   - Ve a "Account" > "General" y copia tu "Public Key"

5. **Configurar variables de entorno**:
   - Crea un archivo `.env` en la raíz del proyecto
   - Agrega las variables con los valores obtenidos

## Variables de entorno requeridas:

- `VITE_EMAILJS_PUBLIC_KEY`: Tu clave pública de EmailJS
- `VITE_EMAILJS_SERVICE_ID`: ID del servicio de email configurado
- `VITE_EMAILJS_CONTACT_TEMPLATE_ID`: ID del template para emails de contacto
- `VITE_EMAILJS_REFERRAL_TEMPLATE_ID`: ID del template para emails de referidos
- `VITE_EMAILJS_DEMO_TEMPLATE_ID`: ID del template para emails de demo programado
- `VITE_CONTACT_EMAIL`: Email de destino donde llegarán los correos de contacto (opcional, por defecto: contacto@solhub.com)

## Templates recomendados:

### Template de Contacto:
```
Asunto: {{subject}}

Hola,

Has recibido una nueva consulta desde SolHub:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{telefono}}
Institución: {{institucion}}
Cargo: {{cargo}}
Tipo de Consulta: {{tipo_consulta}}
Prioridad: {{prioridad}}

Mensaje: {{message}}

{% if fecha_demo %}
--- INFORMACIÓN DE DEMO PROGRAMADO ---
Fecha del Demo: {{fecha_demo}}
Hora del Demo: {{hora_demo}}
Tipo de Demo: {{tipo_demo}}
{% endif %}

Fecha de envío: {{date}}

Puedes responder directamente a este email.
```

### Template de Demo Programado:
```
Asunto: {{subject}}

🎯 NUEVA SOLICITUD DE DEMO PROGRAMADO

Hola,

Se ha programado una nueva demostración de SolHub:

👤 INFORMACIÓN DEL CONTACTO:
Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{telefono}}
Institución: {{institucion}}
Cargo: {{cargo}}

📅 INFORMACIÓN DEL DEMO:
Fecha: {{fecha_demo}}
Hora: {{hora_demo}}
Zona Horaria: {{zona_horaria}}
Tipo de Demo: {{tipo_demo}}
Duración: {{duracion_demo}}

💬 MENSAJE ADICIONAL:
{{mensaje_adicional}}

📧 INFORMACIÓN TÉCNICA:
Fecha de solicitud: {{fecha_envio}}
Tipo de consulta: {{tipo_consulta}}

Puedes responder directamente a este email para confirmar o reprogramar el demo.

Saludos,
Equipo SolHub
```

### Template de Referido:
```
Asunto: {{referrer_name}} te invita a conocer SolHub

Hola {{referred_name}},

{{referrer_name}} te ha invitado a conocer SolHub, una plataforma innovadora de soluciones médicas.

Mensaje personal: {{message}}

Para más información, visita nuestro sitio web.

Saludos,
Equipo SolHub
```
