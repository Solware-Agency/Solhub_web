import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const PreDemoQuestionnaire = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    position: '',
    laboratorySize: '',
    currentChallenges: [],
    modulesOfInterest: [],
    implementationTimeline: '',
    currentSystem: '',
    monthlyTests: '',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});

  const laboratorySizes = [
    { value: 'small', label: 'Pequeño (1-50 pruebas/día)' },
    { value: 'medium', label: 'Mediano (51-200 pruebas/día)' },
    { value: 'large', label: 'Grande (201-500 pruebas/día)' },
    { value: 'enterprise', label: 'Empresarial (500+ pruebas/día)' }
  ];

  const challengeOptions = [
    'Gestión manual de pacientes',
    'Demoras en entrega de resultados',
    'Errores en transcripción de datos',
    'Falta de trazabilidad',
    'Dificultad para generar reportes',
    'Problemas de comunicación con médicos',
    'Control de inventario deficiente',
    'Facturación compleja'
  ];

  const moduleOptions = [
    'Gestión de Pacientes',
    'Procesamiento de Muestras',
    'Generación de Reportes',
    'Facturación y Cobranza',
    'Control de Inventario',
    'Integración con Equipos',
    'Inteligencia Artificial',
    'Telemedicina'
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Inmediato (1-2 semanas)' },
    { value: 'short', label: 'Corto plazo (1-3 meses)' },
    { value: 'medium', label: 'Mediano plazo (3-6 meses)' },
    { value: 'long', label: 'Largo plazo (6+ meses)' },
    { value: 'exploring', label: 'Solo explorando opciones' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleCheckboxChange = (field, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked
        ? [...prev?.[field], value]
        : prev?.[field]?.filter(item => item !== value)
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.organizationName?.trim()) {
      newErrors.organizationName = 'El nombre de la organización es requerido';
    }

    if (!formData?.contactName?.trim()) {
      newErrors.contactName = 'El nombre de contacto es requerido';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    }

    if (!formData?.laboratorySize) {
      newErrors.laboratorySize = 'Seleccione el tamaño del laboratorio';
    }

    if (formData?.modulesOfInterest?.length === 0) {
      newErrors.modulesOfInterest = 'Seleccione al menos un módulo de interés';
    }

    if (!formData?.implementationTimeline) {
      newErrors.implementationTimeline = 'Seleccione un cronograma de implementación';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
          <Icon name="ClipboardList" size={20} className="text-secondary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            Cuestionario Pre-Demo
          </h3>
          <p className="text-sm text-muted-foreground">
            Ayúdanos a personalizar tu experiencia de demostración
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Organization Information */}
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-foreground border-b border-border pb-2">
            Información de la Organización
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Nombre de la Organización"
              type="text"
              placeholder="Laboratorio Médico XYZ"
              value={formData?.organizationName}
              onChange={(e) => handleInputChange('organizationName', e?.target?.value)}
              error={errors?.organizationName}
              required
            />
            
            <Input
              label="Nombre de Contacto"
              type="text"
              placeholder="Dr. María González"
              value={formData?.contactName}
              onChange={(e) => handleInputChange('contactName', e?.target?.value)}
              error={errors?.contactName}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Email"
              type="email"
              placeholder="contacto@laboratorio.com"
              value={formData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              error={errors?.email}
              required
            />
            
            <Input
              label="Teléfono"
              type="tel"
              placeholder="+58 412 123 4567"
              value={formData?.phone}
              onChange={(e) => handleInputChange('phone', e?.target?.value)}
              error={errors?.phone}
              required
            />
          </div>

          <Input
            label="Cargo/Posición"
            type="text"
            placeholder="Director Médico, Administrador, etc."
            value={formData?.position}
            onChange={(e) => handleInputChange('position', e?.target?.value)}
          />
        </div>

        {/* Laboratory Details */}
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-foreground border-b border-border pb-2">
            Detalles del Laboratorio
          </h4>

          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Tamaño del Laboratorio *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {laboratorySizes?.map(size => (
                <label key={size?.value} className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <input
                    type="radio"
                    name="laboratorySize"
                    value={size?.value}
                    checked={formData?.laboratorySize === size?.value}
                    onChange={(e) => handleInputChange('laboratorySize', e?.target?.value)}
                    className="w-4 h-4 text-primary"
                  />
                  <span className="text-sm text-foreground">{size?.label}</span>
                </label>
              ))}
            </div>
            {errors?.laboratorySize && (
              <p className="text-sm text-destructive mt-1">{errors?.laboratorySize}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Sistema Actual"
              type="text"
              placeholder="Excel, sistema propio, etc."
              value={formData?.currentSystem}
              onChange={(e) => handleInputChange('currentSystem', e?.target?.value)}
              description="¿Qué sistema utilizan actualmente?"
            />
            
            <Input
              label="Pruebas Mensuales (Aprox.)"
              type="number"
              placeholder="1500"
              value={formData?.monthlyTests}
              onChange={(e) => handleInputChange('monthlyTests', e?.target?.value)}
              description="Número aproximado de pruebas por mes"
            />
          </div>
        </div>

        {/* Challenges and Interests */}
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-foreground border-b border-border pb-2">
            Desafíos y Necesidades
          </h4>

          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Principales Desafíos Actuales
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {challengeOptions?.map(challenge => (
                <Checkbox
                  key={challenge}
                  label={challenge}
                  checked={formData?.currentChallenges?.includes(challenge)}
                  onChange={(e) => handleCheckboxChange('currentChallenges', challenge, e?.target?.checked)}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Módulos de Interés *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {moduleOptions?.map(module => (
                <Checkbox
                  key={module}
                  label={module}
                  checked={formData?.modulesOfInterest?.includes(module)}
                  onChange={(e) => handleCheckboxChange('modulesOfInterest', module, e?.target?.checked)}
                />
              ))}
            </div>
            {errors?.modulesOfInterest && (
              <p className="text-sm text-destructive mt-1">{errors?.modulesOfInterest}</p>
            )}
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-foreground border-b border-border pb-2">
            Cronograma de Implementación
          </h4>

          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              ¿Cuándo planean implementar una nueva solución? *
            </label>
            <div className="space-y-2">
              {timelineOptions?.map(timeline => (
                <label key={timeline?.value} className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <input
                    type="radio"
                    name="implementationTimeline"
                    value={timeline?.value}
                    checked={formData?.implementationTimeline === timeline?.value}
                    onChange={(e) => handleInputChange('implementationTimeline', e?.target?.value)}
                    className="w-4 h-4 text-primary"
                  />
                  <span className="text-sm text-foreground">{timeline?.label}</span>
                </label>
              ))}
            </div>
            {errors?.implementationTimeline && (
              <p className="text-sm text-destructive mt-1">{errors?.implementationTimeline}</p>
            )}
          </div>

          <Input
            label="Comentarios Adicionales"
            type="text"
            placeholder="Cualquier información adicional que nos ayude a preparar el demo..."
            value={formData?.additionalNotes}
            onChange={(e) => handleInputChange('additionalNotes', e?.target?.value)}
            description="Opcional: Comparta cualquier detalle específico que le gustaría ver en el demo"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-border">
          <Button
            type="submit"
            variant="default"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="left"
            className="w-full bg-gradient-medical"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Cuestionario'}
          </Button>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Esta información nos ayudará a personalizar su experiencia de demostración
          </p>
        </div>
      </form>
    </div>
  );
};

export default PreDemoQuestionnaire;