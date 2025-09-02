import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DemoScheduler = ({ onScheduleDemo }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState({});

  // Mock available time slots for Venezuelan business hours
  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
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

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      onScheduleDemo({
        date: selectedDate,
        time: selectedTime,
        timezone: 'America/Caracas'
      });
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
              <Button
                variant="default"
                onClick={handleSchedule}
                iconName="CheckCircle"
                iconPosition="left"
                className="w-full bg-gradient-medical"
              >
                Confirmar Demo
              </Button>
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
          Lunes a Viernes: 9:00 AM - 4:00 PM (Hora de Venezuela)\n
          Los demos tienen una duración aproximada de 45 minutos
        </p>
      </div>
    </div>
  );
};

export default DemoScheduler;