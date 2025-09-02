import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const AccessControls = () => {
  const [selectedRole, setSelectedRole] = useState(0);

  const roles = [
    {
      id: 1,
      name: "Director Médico",
      description: "Acceso completo a todos los módulos y configuraciones del sistema",
      icon: "UserCog",
      color: "primary",
      level: "Administrador",
      permissions: [
        { module: "Gestión de Usuarios", access: "Completo", description: "Crear, modificar y eliminar usuarios" },
        { module: "Configuración del Sistema", access: "Completo", description: "Modificar configuraciones globales" },
        { module: "Reportes Médicos", access: "Completo", description: "Acceso a todos los reportes y estadísticas" },
        { module: "Gestión de Pacientes", access: "Completo", description: "Ver y modificar información de pacientes" },
        { module: "Resultados de Laboratorio", access: "Completo", description: "Validar y autorizar resultados" },
        { module: "Auditoría y Logs", access: "Completo", description: "Revisar logs de actividad del sistema" },
        { module: "Facturación", access: "Completo", description: "Gestionar facturación y pagos" },
        { module: "Inventario", access: "Completo", description: "Gestionar inventario de reactivos y equipos" }
      ],
      restrictions: [],
      scenarios: [
        "Autorización de resultados críticos fuera del rango normal",
        "Configuración de nuevos equipos de laboratorio",
        "Revisión de auditorías de seguridad mensuales"
      ]
    },
    {
      id: 2,
      name: "Médico Especialista",
      description: "Acceso a módulos clínicos y de diagnóstico con permisos de validación",
      icon: "Stethoscope",
      color: "success",
      level: "Especialista",
      permissions: [
        { module: "Gestión de Usuarios", access: "Solo Lectura", description: "Ver información de usuarios" },
        { module: "Configuración del Sistema", access: "Restringido", description: "Solo configuraciones personales" },
        { module: "Reportes Médicos", access: "Completo", description: "Generar y revisar reportes médicos" },
        { module: "Gestión de Pacientes", access: "Completo", description: "Gestionar información de pacientes asignados" },
        { module: "Resultados de Laboratorio", access: "Validación", description: "Validar resultados de su especialidad" },
        { module: "Auditoría y Logs", access: "Personal", description: "Ver solo sus propias actividades" },
        { module: "Facturación", access: "Solo Lectura", description: "Consultar información de facturación" },
        { module: "Inventario", access: "Solo Lectura", description: "Consultar disponibilidad de reactivos" }
      ],
      restrictions: [
        "No puede eliminar registros de pacientes",
        "No puede modificar configuraciones globales",
        "Acceso limitado a pacientes de su especialidad"
      ],
      scenarios: [
        "Validación de hemogramas y química sanguínea",
        "Revisión de historiales médicos de pacientes asignados",
        "Generación de reportes de su especialidad"
      ]
    },
    {
      id: 3,
      name: "Técnico de Laboratorio",
      description: "Acceso operativo para procesamiento de muestras y registro de resultados",
      icon: "TestTube",
      color: "secondary",
      level: "Operativo",
      permissions: [
        { module: "Gestión de Usuarios", access: "Sin Acceso", description: "No tiene acceso a gestión de usuarios" },
        { module: "Configuración del Sistema", access: "Sin Acceso", description: "No puede modificar configuraciones" },
        { module: "Reportes Médicos", access: "Restringido", description: "Solo reportes de su área de trabajo" },
        { module: "Gestión de Pacientes", access: "Restringido", description: "Solo datos necesarios para procesamiento" },
        { module: "Resultados de Laboratorio", access: "Registro", description: "Registrar resultados, no validar" },
        { module: "Auditoría y Logs", access: "Sin Acceso", description: "No tiene acceso a logs del sistema" },
        { module: "Facturación", access: "Sin Acceso", description: "No tiene acceso a información financiera" },
        { module: "Inventario", access: "Operativo", description: "Registrar uso de reactivos y materiales" }
      ],
      restrictions: [
        "No puede validar resultados finales",
        "Acceso limitado a información de pacientes",
        "No puede generar reportes administrativos",
        "Horario de acceso restringido a turnos asignados"
      ],
      scenarios: [
        "Procesamiento de muestras de sangre y orina",
        "Registro de resultados preliminares en el sistema",
        "Control de inventario de reactivos utilizados"
      ]
    },
    {
      id: 4,
      name: "Recepcionista",
      description: "Acceso a módulos de atención al paciente y programación de citas",
      icon: "Users",
      color: "accent",
      level: "Atención",
      permissions: [
        { module: "Gestión de Usuarios", access: "Sin Acceso", description: "No tiene acceso a gestión de usuarios" },
        { module: "Configuración del Sistema", access: "Sin Acceso", description: "No puede modificar configuraciones" },
        { module: "Reportes Médicos", access: "Sin Acceso", description: "No tiene acceso a reportes médicos" },
        { module: "Gestión de Pacientes", access: "Registro", description: "Registrar y actualizar datos básicos" },
        { module: "Resultados de Laboratorio", access: "Entrega", description: "Solo para entrega de resultados" },
        { module: "Auditoría y Logs", access: "Sin Acceso", description: "No tiene acceso a logs del sistema" },
        { module: "Facturación", access: "Básico", description: "Generar facturas y recibir pagos" },
        { module: "Inventario", access: "Sin Acceso", description: "No tiene acceso al inventario" }
      ],
      restrictions: [
        "No puede ver resultados médicos detallados",
        "Acceso limitado a datos sensibles de pacientes",
        "No puede modificar precios o descuentos",
        "Solo puede programar citas en horarios disponibles"
      ],
      scenarios: [
        "Registro de nuevos pacientes en el sistema",
        "Programación de citas para exámenes de laboratorio",
        "Entrega de resultados autorizados a pacientes"
      ]
    },
    {
      id: 5,
      name: "Administrador de Sistema",
      description: "Acceso técnico para mantenimiento, respaldos y configuración avanzada",
      icon: "Settings",
      color: "warning",
      level: "Técnico",
      permissions: [
        { module: "Gestión de Usuarios", access: "Técnico", description: "Gestión técnica de cuentas de usuario" },
        { module: "Configuración del Sistema", access: "Completo", description: "Todas las configuraciones técnicas" },
        { module: "Reportes Médicos", access: "Sin Acceso", description: "No accede a contenido médico" },
        { module: "Gestión de Pacientes", access: "Sin Acceso", description: "No accede a información de pacientes" },
        { module: "Resultados de Laboratorio", access: "Sin Acceso", description: "No accede a resultados médicos" },
        { module: "Auditoría y Logs", access: "Completo", description: "Acceso completo a logs del sistema" },
        { module: "Facturación", access: "Sin Acceso", description: "No accede a información financiera" },
        { module: "Inventario", access: "Sin Acceso", description: "No accede al inventario médico" }
      ],
      restrictions: [
        "No puede acceder a información médica de pacientes",
        "No puede validar o modificar resultados médicos",
        "Acceso limitado a información financiera",
        "Requiere autorización para cambios críticos"
      ],
      scenarios: [
        "Configuración de respaldos automáticos del sistema",
        "Mantenimiento de servidores y bases de datos",
        "Resolución de problemas técnicos y de conectividad"
      ]
    }
  ];

  const currentRole = roles?.[selectedRole];

  const getAccessColor = (access) => {
    switch (access) {
      case 'Completo':
        return 'text-success bg-success/10 border-success/20';
      case 'Restringido': case'Registro': case'Validación': case'Operativo': case'Básico': case'Técnico': case'Entrega':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'Solo Lectura': case'Personal':
        return 'text-secondary bg-secondary/10 border-secondary/20';
      case 'Sin Acceso':
        return 'text-error bg-error/10 border-error/20';
      default:
        return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Administrador':
        return 'text-primary bg-primary/10 border-primary/20';
      case 'Especialista':
        return 'text-success bg-success/10 border-success/20';
      case 'Operativo':
        return 'text-secondary bg-secondary/10 border-secondary/20';
      case 'Atención':
        return 'text-accent bg-accent/10 border-accent/20';
      case 'Técnico':
        return 'text-warning bg-warning/10 border-warning/20';
      default:
        return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container-medical">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-warning/10 border border-warning/20 rounded-full px-4 py-2 mb-6">
            <Icon name="UserCheck" size={16} color="var(--color-warning)" />
            <span className="text-warning font-semibold text-sm">Control de Acceso</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Controles de Acceso por Rol
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sistema de permisos granulares que garantiza que cada usuario acceda únicamente 
            a la información y funcionalidades necesarias para su rol específico.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Role Selector */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-4">Roles del Sistema</h3>
            <div className="space-y-3">
              {roles?.map((role, index) => (
                <button
                  key={role?.id}
                  onClick={() => setSelectedRole(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    selectedRole === index
                      ? `border-${role?.color} bg-${role?.color}/10`
                      : 'border-border bg-card/50 hover:bg-card/70'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon 
                      name={role?.icon} 
                      size={20} 
                      color={`var(--color-${role?.color})`} 
                    />
                    <span className="font-medium text-sm">{role?.name}</span>
                  </div>
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(role?.level)}`}>
                    {role?.level}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Role Details */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-xl p-6">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 bg-${currentRole?.color}/10 rounded-lg flex items-center justify-center`}>
                  <Icon 
                    name={currentRole?.icon} 
                    size={24} 
                    color={`var(--color-${currentRole?.color})`} 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{currentRole?.name}</h3>
                  <p className="text-muted-foreground">{currentRole?.description}</p>
                </div>
                <div className={`ml-auto px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(currentRole?.level)}`}>
                  {currentRole?.level}
                </div>
              </div>

              {/* Permissions Table */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-4">Permisos por Módulo</h4>
                <div className="space-y-2">
                  {currentRole?.permissions?.map((permission, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                      <div>
                        <div className="font-medium text-foreground text-sm">{permission?.module}</div>
                        <div className="text-xs text-muted-foreground">{permission?.description}</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getAccessColor(permission?.access)}`}>
                        {permission?.access}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Restrictions */}
              {currentRole?.restrictions?.length > 0 && (
                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-4">Restricciones de Seguridad</h4>
                  <div className="space-y-2">
                    {currentRole?.restrictions?.map((restriction, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-error/5 border border-error/20 rounded-lg">
                        <Icon name="AlertTriangle" size={16} color="var(--color-error)" className="flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{restriction}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Real Scenarios */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Escenarios Reales de Uso</h4>
                <div className="grid md:grid-cols-1 gap-3">
                  {currentRole?.scenarios?.map((scenario, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-success/5 border border-success/20 rounded-lg">
                      <Icon name="CheckCircle" size={16} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{scenario}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <Icon name="Fingerprint" size={32} color="var(--color-primary)" className="mx-auto mb-4" />
            <h4 className="font-semibold text-primary mb-2">Autenticación Multifactor</h4>
            <p className="text-sm text-muted-foreground">
              Verificación en dos pasos obligatoria para todos los usuarios
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <Icon name="Clock" size={32} color="var(--color-success)" className="mx-auto mb-4" />
            <h4 className="font-semibold text-success mb-2">Sesiones Temporales</h4>
            <p className="text-sm text-muted-foreground">
              Cierre automático de sesión por inactividad
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <Icon name="MapPin" size={32} color="var(--color-secondary)" className="mx-auto mb-4" />
            <h4 className="font-semibold text-secondary mb-2">Acceso por Ubicación</h4>
            <p className="text-sm text-muted-foreground">
              Restricciones geográficas para mayor seguridad
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <Icon name="Activity" size={32} color="var(--color-accent)" className="mx-auto mb-4" />
            <h4 className="font-semibold text-accent mb-2">Monitoreo en Tiempo Real</h4>
            <p className="text-sm text-muted-foreground">
              Seguimiento continuo de todas las actividades
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessControls;