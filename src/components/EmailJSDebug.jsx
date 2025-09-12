import React from 'react';

const EmailJSDebug = () => {
  const envVars = {
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
    referralTemplateId: import.meta.env.VITE_EMAILJS_REFERRAL_TEMPLATE_ID
  };

  const isConfigured = Object.values(envVars).every(value => value && value !== 'your_public_key_here' && value !== 'your_service_id_here' && value !== 'your_contact_template_id_here' && value !== 'your_referral_template_id_here');

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">🔍 Debug de EmailJS</h2>
      
      <div className="space-y-4">
        <div className={`p-4 rounded-lg border ${isConfigured ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
          <h3 className="font-semibold mb-2">
            {isConfigured ? '✅ Configuración Completa' : '❌ Configuración Incompleta'}
          </h3>
          <p className="text-sm">
            {isConfigured ? 'Todas las variables de entorno están configuradas correctamente.' : 'Faltan variables de entorno o tienen valores por defecto.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(envVars).map(([key, value]) => {
            const isValid = value && !value.includes('your_') && !value.includes('_here');
            return (
              <div key={key} className={`p-3 rounded border ${isValid ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                <div className="font-semibold text-sm text-gray-700">{key}:</div>
                <div className="text-sm font-mono break-all">
                  {value || 'No definida'}
                </div>
                <div className="text-xs mt-1">
                  {isValid ? '✅ Válida' : '❌ Inválida'}
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">📋 Instrucciones:</h3>
          <ol className="text-sm text-blue-700 space-y-1">
            <li>1. Verifica que el archivo <code>.env</code> esté en la raíz del proyecto</li>
            <li>2. Reinicia el servidor de desarrollo después de cambiar variables</li>
            <li>3. Las variables deben empezar con <code>VITE_</code></li>
            <li>4. No debe haber espacios alrededor del signo <code>=</code></li>
          </ol>
        </div>

        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="font-semibold text-yellow-800 mb-2">🔧 Solución rápida:</h3>
          <p className="text-sm text-yellow-700">
            Si las variables no se cargan, detén el servidor (Ctrl+C) y ejecuta <code>npm start</code> nuevamente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailJSDebug;
