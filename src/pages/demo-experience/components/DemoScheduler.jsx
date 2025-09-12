import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { sendContactEmail } from '../../../lib/emailjs';

const DemoScheduler = ({ onScheduleDemo }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    institucion: '',
    cargo: '',
    tipoDemo: '',
    mensaje: ''
  });

  // Mock available time slots for Venezuelan business hours
  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
  ];

  const tipoDemoOptions = [
    { value: 'general', label: 'Demo General - Visión Completa' },
    { value: 'modulos', label: 'Demo por Módulos Específicos' },
    { value: 'ia', label: 'Demo de Inteligencia Artificial' },
    { value: 'seguridad', label: 'Demo de Seguridad y Cumplimiento' },
    { value: 'integracion', label: 'Demo de Integración con Sistemas' }
  ];

  const cargoOptions = [
    { value: 'director', label: 'Director Médico' },
    { value: 'administrador', label: 'Administrador' },
    { value: 'tecnico', label: 'Técnico de Laboratorio' },
    { value: 'it', label: 'Responsable de IT' },
    { value: 'gerente', label: 'Gerente General' },
    { value: 'otro', label: 'Otro' }
  ];


  const venezuelanHolidays = [
    '2024-12-25', '2024-12-31', '2025-01-01', '2025-01-06'
  ];

  useEffect(() => {
    // Generate available slots for the current month
    const slots = {};
    const today = new Date();
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)?.getDate();
    
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const dateStr = date?.toISOString()?.split('T')?.[0];
      
      // Skip weekends and holidays
      if (date?.getDay() !== 0 && date?.getDay() !== 6 && 
          !venezuelanHolidays?.includes(dateStr) && 
          date >= today) {
        slots[dateStr] = timeSlots?.filter(() => Math.random() > 0.3); // Random availability
      }
    }
    setAvailableSlots(slots);
  }, [currentMonth]);

  const getDaysInMonth = () => {
    const year = currentMonth?.getFullYear();
    const month = currentMonth?.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay?.getDate();
    const startingDayOfWeek = firstDay?.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days?.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days?.push(day);
    }
    
    return days;
  };

  const formatDate = (date) => {
    return new Date(date)?.toLocaleDateString('es-VE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleDateSelect = (day) => {
    if (!day) return;
    
    const dateStr = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)?.toISOString()?.split('T')?.[0];
    
    if (availableSlots?.[dateStr] && availableSlots?.[dateStr]?.length > 0) {
      setSelectedDate(dateStr);
      setSelectedTime(null);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const clearForm = () => {
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      institucion: '',
      cargo: '',
      tipoDemo: '',
      mensaje: ''
    });
    setSelectedDate(null);
    setSelectedTime(null);
    setErrors({});
    setSubmitSuccess(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    }

    if (!formData.institucion.trim()) {
      newErrors.institucion = 'La institución es requerida';
    }

    if (!formData.cargo) {
      newErrors.cargo = 'Selecciona tu cargo';
    }

    if (!formData.tipoDemo) {
      newErrors.tipoDemo = 'Selecciona el tipo de demo';
    }

    if (!selectedDate) {
      newErrors.fecha = 'Selecciona una fecha';
    }

    if (!selectedTime) {
      newErrors.hora = 'Selecciona una hora';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSchedule = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Preparar datos para el email usando el template de contacto
      const demoData = {
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        institucion: formData.institucion,
        cargo: formData.cargo,
        tipoConsulta: 'Demo Programado',
        asunto: `🎯 Demo Programado - ${formData.nombre}`,
        mensaje: `🎯 SOLICITUD DE DEMO PROGRAMADO

📅 INFORMACIÓN DEL DEMO:
• Fecha: ${formatDate(selectedDate)}
• Hora: ${selectedTime} (Hora de Venezuela)
• Tipo de Demo: ${tipoDemoOptions.find(opt => opt.value === formData.tipoDemo)?.label}
• Duración: 45 minutos
• Zona Horaria: Venezuela (UTC-4)

👤 INFORMACIÓN DEL CONTACTO:
• Nombre: ${formData.nombre}
• Email: ${formData.email}
• Teléfono: ${formData.telefono}
• Institución: ${formData.institucion}
• Cargo: ${cargoOptions.find(opt => opt.value === formData.cargo)?.label}

💬 MENSAJE ADICIONAL:
${formData.mensaje || 'Sin mensaje adicional'}

📧 Fecha de solicitud: ${new Date().toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}

Por favor, confirma este demo o contacta al cliente para reprogramar si es necesario.`
      };

      // Debug: Mostrar datos que se van a enviar
      console.log('🎯 Datos del demo que se van a enviar:', demoData);
      console.log('📅 Fecha seleccionada:', selectedDate);
      console.log('🕐 Hora seleccionada:', selectedTime);
      console.log('📝 Fecha formateada:', formatDate(selectedDate));

      // Enviar email usando el template de contacto
      const result = await sendContactEmail(demoData);
      
      if (result.success) {
        setSubmitSuccess(true);
        clearForm();
        onScheduleDemo({
          ...formData,
          date: selectedDate,
          time: selectedTime,
          timezone: 'America/Caracas'
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Error scheduling demo:', error);
      setErrors({ submit: error.message || 'Error al programar el demo. Inténtalo de nuevo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth?.setMonth(currentMonth?.getMonth() + direction);
    setCurrentMonth(newMonth);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const days = getDaysInMonth();
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  return (
    <div className="space-y-8">
      {/* Formulario de Información */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="User" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              Información de Contacto
            </h3>
            <p className="text-sm text-muted-foreground">
              Completa tus datos para personalizar tu demo
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Nombre Completo"
            type="text"
            name="nombre"
            placeholder="Dr. María González"
            value={formData.nombre}
            onChange={handleInputChange}
            error={errors.nombre}
            required
          />

          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="maria@laboratorio.com"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            required
          />

          <Input
            label="Teléfono"
            type="tel"
            name="telefono"
            placeholder="+58 412 123 4567"
            value={formData.telefono}
            onChange={handleInputChange}
            error={errors.telefono}
            required
          />

          <Input
            label="Institución"
            type="text"
            name="institucion"
            placeholder="Laboratorio Médico XYZ"
            value={formData.institucion}
            onChange={handleInputChange}
            error={errors.institucion}
            required
          />

          <Select
            label="Cargo"
            name="cargo"
            value={formData.cargo}
            onChange={(value) => handleSelectChange('cargo', value)}
            options={cargoOptions}
            placeholder="Selecciona tu cargo"
            error={errors.cargo}
            required
          />

          <Select
            label="Tipo de Demo"
            name="tipoDemo"
            value={formData.tipoDemo}
            onChange={(value) => handleSelectChange('tipoDemo', value)}
            options={tipoDemoOptions}
            placeholder="Selecciona el tipo de demo"
            error={errors.tipoDemo}
            required
          />

        </div>

        <div className="mt-6">
          <Input
            label="Mensaje Adicional (Opcional)"
            type="textarea"
            name="mensaje"
            placeholder="Cuéntanos más sobre tu laboratorio y necesidades específicas..."
            value={formData.mensaje}
            onChange={handleInputChange}
            error={errors.mensaje}
            rows={3}
          />
        </div>
      </div>

      {/* Calendario */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">
            Seleccionar Fecha y Hora
          </h3>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Clock" size={16} />
            <span>Zona Horaria: Venezuela (UTC-4)</span>
          </div>
        </div>
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateMonth(-1)}
          iconName="ChevronLeft"
          iconPosition="left"
        >
          Anterior
        </Button>
        <h4 className="text-lg font-medium text-foreground">
          {monthNames?.[currentMonth?.getMonth()]} {currentMonth?.getFullYear()}
        </h4>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateMonth(1)}
          iconName="ChevronRight"
          iconPosition="right"
        >
          Siguiente
        </Button>
      </div>
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-6">
        {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']?.map(day => (
          <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
            {day}
          </div>
        ))}
        {days?.map((day, index) => {
          if (!day) {
            return <div key={index} className="p-2"></div>;
          }
          
          const dateStr = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)?.toISOString()?.split('T')?.[0];
          const hasSlots = availableSlots?.[dateStr] && availableSlots?.[dateStr]?.length > 0;
          const isSelected = selectedDate === dateStr;
          
          return (
            <button
              key={day}
              onClick={() => handleDateSelect(day)}
              disabled={!hasSlots}
              className={`p-2 text-sm rounded-lg transition-all duration-200 ${
                isSelected
                  ? 'bg-primary text-primary-foreground'
                  : hasSlots
                  ? 'hover:bg-muted text-foreground'
                  : 'text-muted-foreground cursor-not-allowed opacity-50'
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
      {/* Time Slots */}
      {selectedDate && availableSlots?.[selectedDate] && (
        <div className="space-y-4">
          <div className="border-t border-border pt-4">
            <h4 className="text-lg font-medium text-foreground mb-3">
              Horarios Disponibles - {formatDate(selectedDate)}
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {availableSlots?.[selectedDate]?.map(time => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 text-sm rounded-lg border transition-all duration-200 ${
                    selectedTime === time
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-muted/50 text-foreground border-border hover:bg-muted hover:border-primary/50'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {selectedTime && (
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Calendar" size={16} className="text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Demo Programado
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {formatDate(selectedDate)} a las {selectedTime} (Hora de Venezuela)
              </p>
              
              {/* Error de validación general */}
              {errors.fecha && (
                <div className="mb-4 p-3 bg-error/10 border border-error/20 rounded-lg">
                  <p className="text-sm text-error">{errors.fecha}</p>
                </div>
              )}
              
              {errors.hora && (
                <div className="mb-4 p-3 bg-error/10 border border-error/20 rounded-lg">
                  <p className="text-sm text-error">{errors.hora}</p>
                </div>
              )}

              {errors.submit && (
                <div className="mb-4 p-3 bg-error/10 border border-error/20 rounded-lg">
                  <p className="text-sm text-error">{errors.submit}</p>
                </div>
              )}

              <Button
                variant="default"
                onClick={handleSchedule}
                iconName="CheckCircle"
                iconPosition="left"
                className="w-full bg-gradient-medical"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Programando Demo...' : 'Confirmar Demo'}
              </Button>
            </div>
          )}

          {/* Mensaje de Éxito */}
          {submitSuccess && (
            <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-green-800">
                    ¡Demo Programado Exitosamente!
                  </h4>
                  <p className="text-green-700 mt-1">
                    Hemos recibido tu solicitud de demo. Te contactaremos pronto para confirmar los detalles.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearForm}
                  className="border-green-300 text-green-700 hover:bg-green-50"
                >
                  Programar Otro Demo
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
        {/* Business Hours Info */}
        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Info" size={16} className="text-secondary" />
            <span className="text-sm font-medium text-foreground">
              Horarios de Atención
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Lunes a Viernes: 9:00 AM - 4:00 PM (Hora de Venezuela)<br />
            Los demos tienen una duración aproximada de 45 minutos
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoScheduler;