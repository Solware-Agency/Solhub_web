import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { sendContactEmail } from '../../../lib/resend';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    institucion: '',
    tipoConsulta: '',
    mensaje: '',
    aceptaTerminos: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const tipoConsultaOptions = [
    { value: 'demo', label: 'Solicitar Demostración' },
    { value: 'precios', label: 'Información de Precios' },
    { value: 'tecnico', label: 'Soporte Técnico' },
    { value: 'ventas', label: 'Consulta Comercial' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.nombre?.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData?.telefono?.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    }

    if (!formData?.institucion?.trim()) {
      newErrors.institucion = 'La institución es requerida';
    }

    if (!formData?.tipoConsulta) {
      newErrors.tipoConsulta = 'Selecciona el tipo de consulta';
    }

    if (!formData?.mensaje?.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    } else if (formData?.mensaje?.trim()?.length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    if (!formData?.aceptaTerminos) {
      newErrors.aceptaTerminos = 'Debes aceptar los términos y condiciones';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar email usando EmailJS
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          institucion: '',
          tipoConsulta: '',
          mensaje: '',
          aceptaTerminos: false
        });
        setErrors({});
      } else {
        throw new Error(result.message);
      }

    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ submit: error.message || 'Error al enviar el formulario. Inténtalo de nuevo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <motion.section 
        className="py-16 lg:py-24 bg-muted/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-medical">
          <div className="max-w-2xl mx-auto">
            <div className="card-medical-elevated p-12 text-center">
              <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircle" size={40} className="text-success" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ¡Gracias por Contactarnos!
              </h3>
              <p className="text-muted-foreground mb-8">
                Tu consulta ha sido enviada exitosamente. Nuestro equipo se pondrá en contacto contigo 
                dentro de las próximas 2 horas durante horario laboral.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} />
                  <span>Respuesta estimada: 2 horas</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="MessageCircle" size={16} />
                  <span>O contáctanos por WhatsApp para respuesta inmediata</span>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => setSubmitSuccess(false)}
                className="mt-8"
              >
                Enviar Otra Consulta
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section 
      className="py-16 lg:py-24 bg-muted/30"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-medical">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comienza Tu Transformación
              <span className="block text-gradient-medical">Digital Médica</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cuéntanos sobre tu laboratorio y recibe una propuesta personalizada con Resend
            </p>
          </div>

          {/* Contact Form */}
          <div className="card-medical-elevated p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Error message */}
              {errors?.submit && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <p className="text-sm text-destructive">{errors?.submit}</p>
                </div>
              )}

              {/* Form Fields Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Input
                  label="Nombre Completo"
                  type="text"
                  name="nombre"
                  placeholder="Dr. Juan Pérez"
                  value={formData?.nombre}
                  onChange={handleInputChange}
                  error={errors?.nombre}
                  required
                />
                
                <Input
                  label="Correo Electrónico"
                  type="email"
                  name="email"
                  placeholder="juan.perez@clinica.com"
                  value={formData?.email}
                  onChange={handleInputChange}
                  error={errors?.email}
                  required
                />
                
                <Input
                  label="Teléfono"
                  type="tel"
                  name="telefono"
                  placeholder="+58 424-123-4567"
                  value={formData?.telefono}
                  onChange={handleInputChange}
                  error={errors?.telefono}
                  required
                />
                
                <Input
                  label="Institución Médica"
                  type="text"
                  name="institucion"
                  placeholder="Clínica San Rafael"
                  value={formData?.institucion}
                  onChange={handleInputChange}
                  error={errors?.institucion}
                  required
                />
              </div>

              {/* Inquiry Type */}
              <Select
                label="Tipo de Consulta"
                options={tipoConsultaOptions}
                value={formData?.tipoConsulta}
                onChange={(value) => handleSelectChange('tipoConsulta', value)}
                placeholder="¿En qué podemos ayudarte?"
                error={errors?.tipoConsulta}
                required
              />
              
              {/* Message */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Mensaje <span className="text-destructive">*</span>
                </label>
                <textarea
                  name="mensaje"
                  rows={4}
                  placeholder="Cuéntanos sobre tu laboratorio y cómo podemos ayudarte..."
                  value={formData?.mensaje}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                />
                {errors?.mensaje && (
                  <p className="text-sm text-destructive mt-1">{errors?.mensaje}</p>
                )}
              </div>

              {/* Terms and Submit */}
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="aceptaTerminos"
                    name="aceptaTerminos"
                    checked={formData?.aceptaTerminos}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary focus:ring-2"
                  />
                  <label htmlFor="aceptaTerminos" className="text-sm text-muted-foreground">
                    Acepto los{' '}
                    <a href="#" className="text-primary hover:underline">términos y condiciones</a>
                    {' '}y autorizo el contacto comercial.
                    <span className="text-destructive ml-1">*</span>
                  </label>
                </div>
                {errors?.aceptaTerminos && (
                  <p className="text-sm text-destructive">{errors?.aceptaTerminos}</p>
                )}

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="left"
                  className="bg-gradient-medical hover:opacity-90 shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactFormSection;