# Configuración de EmailJS

Para configurar EmailJS en tu proyecto, necesitas crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# EmailJS Configuration
# Obtén estos valores desde https://www.emailjs.com/
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id_here
VITE_EMAILJS_REFERRAL_TEMPLATE_ID=your_referral_template_id_here
```

## Pasos para configurar EmailJS:

1. **Crear cuenta en EmailJS**: Ve a https://www.emailjs.com/ y crea una cuenta gratuita

2. **Configurar servicio de email**: 
   - Ve a "Email Services" y conecta tu proveedor de email (Gmail, Outlook, etc.)
   - Copia el "Service ID"

3. **Crear templates**:
   - Ve a "Email Templates" y crea dos templates:
     - **Template de Contacto**: Para emails de contacto general
     - **Template de Referido**: Para emails de referidos

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

## Templates recomendados:

### Template de Contacto:
```
Asunto: Nueva consulta de {{from_name}}

Hola,

Has recibido una nueva consulta desde SolHub:

Nombre: {{from_name}}
Email: {{from_email}}
Mensaje: {{message}}

Fecha: {{date}}

Puedes responder directamente a este email.
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
