import React, { useState } from 'react';
import { sendContactEmail, sendReferralEmail, checkEmailJSConfig } from '../lib/emailjs';
import Button from './ui/Button';

const EmailJSTest = () => {
  const [testResult, setTestResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const testConfig = async () => {
    setIsLoading(true);
    try {
      const config = checkEmailJSConfig();
      
      // Debug: mostrar las variables de entorno
      const envVars = {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        referralTemplateId: import.meta.env.VITE_EMAILJS_REFERRAL_TEMPLATE_ID
      };
      
      setTestResult({
        type: 'config',
        data: { ...config, envVars },
        message: config.isConfigured ? 'EmailJS está configurado correctamente' : 'EmailJS no está configurado completamente'
      });
    } catch (error) {
      setTestResult({
        type: 'error',
        message: 'Error verificando configuración: ' + error.message
      });
    } finally {
      setIsLoading(false);
    }
  };

  const testContactEmail = async () => {
    setIsLoading(true);
    try {
      const testData = {
        nombre: 'Usuario de Prueba',
        email: 'test@example.com',
        mensaje: 'Este es un mensaje de prueba para verificar que EmailJS funciona correctamente.',
        telefono: '+1234567890',
        institucion: 'Institución de Prueba'
      };

      const result = await sendContactEmail(testData);
      setTestResult({
        type: result.success ? 'success' : 'error',
        data: result,
        message: result.message
      });
    } catch (error) {
      setTestResult({
        type: 'error',
        message: 'Error enviando email de contacto: ' + error.message
      });
    } finally {
      setIsLoading(false);
    }
  };

  const testReferralEmail = async () => {
    setIsLoading(true);
    try {
      const testData = {
        referrerName: 'Dr. Juan Pérez',
        referrerEmail: 'referrer@example.com',
        referredName: 'Dr. María García',
        referredEmail: 'referred@example.com',
        message: 'Te invito a conocer SolHub, una excelente plataforma para laboratorios médicos.'
      };

      const result = await sendReferralEmail(testData);
      setTestResult({
        type: result.success ? 'success' : 'error',
        data: result,
        message: result.message
      });
    } catch (error) {
      setTestResult({
        type: 'error',
        message: 'Error enviando email de referido: ' + error.message
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getResultColor = (type) => {
    switch (type) {
      case 'success': return 'text-green-600 bg-green-50 border-green-200';
      case 'error': return 'text-red-600 bg-red-50 border-red-200';
      case 'config': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Prueba de EmailJS</h2>
      
      <div className="space-y-4 mb-6">
        <Button
          onClick={testConfig}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Verificando...' : 'Verificar Configuración'}
        </Button>
        
        <Button
          onClick={testContactEmail}
          disabled={isLoading}
          className="w-full"
          variant="outline"
        >
          {isLoading ? 'Enviando...' : 'Probar Email de Contacto'}
        </Button>
        
        <Button
          onClick={testReferralEmail}
          disabled={isLoading}
          className="w-full"
          variant="outline"
        >
          {isLoading ? 'Enviando...' : 'Probar Email de Referido'}
        </Button>
      </div>

      {testResult && (
        <div className={`p-4 rounded-lg border ${getResultColor(testResult.type)}`}>
          <h3 className="font-semibold mb-2">
            {testResult.type === 'success' && '✅ Éxito'}
            {testResult.type === 'error' && '❌ Error'}
            {testResult.type === 'config' && '⚙️ Configuración'}
          </h3>
          
          <p className="mb-2">{testResult.message}</p>
          
          {testResult.data && (
            <details className="mt-2">
              <summary className="cursor-pointer text-sm font-medium">
                Ver detalles técnicos
              </summary>
              <pre className="mt-2 text-xs bg-white p-2 rounded border overflow-auto">
                {JSON.stringify(testResult.data, null, 2)}
              </pre>
            </details>
          )}
        </div>
      )}

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="font-semibold text-yellow-800 mb-2">📋 Instrucciones:</h3>
        <ol className="text-sm text-yellow-700 space-y-1">
          <li>1. Primero verifica la configuración</li>
          <li>2. Si está configurado, prueba los emails</li>
          <li>3. Revisa tu email para confirmar que llegaron</li>
          <li>4. Si hay errores, revisa las variables de entorno</li>
        </ol>
      </div>
    </div>
  );
};

export default EmailJSTest;
