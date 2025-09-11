import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SecurityBySite = () => {
  const [selectedSite, setSelectedSite] = useState(0);

  const sites = [
    {
      id: 1,
      name: "Laboratorio Central Caracas",
      location: "Caracas, Distrito Capital",
      status: "Activo",
      encryption: "AES-256",
      lastAudit: "15/08/2024",
      compliance: 98.5,
      dataIsolation: "Completo",
      backupStatus: "Sincronizado",
      accessLogs: 1247,
      securityLevel: "Máximo"
    },
    {
      id: 2,
      name: "Clínica Médica Valencia",
      location: "Valencia, Carabobo",
      status: "Activo",
      encryption: "AES-256",
      lastAudit: "12/08/2024",
      compliance: 97.8,
      dataIsolation: "Completo",
      backupStatus: "Sincronizado",
      accessLogs: 892,
      securityLevel: "Máximo"
    },
    {
      id: 3,
      name: "Centro Diagnóstico Maracaibo",
      location: "Maracaibo, Zulia",
      status: "Activo",
      encryption: "AES-256",
      lastAudit: "10/08/2024",
      compliance: 99.1,
      dataIsolation: "Completo",
      backupStatus: "Sincronizado",
      accessLogs: 654,
      securityLevel: "Máximo"
    },
    {
      id: 4,
      name: "Laboratorio Clínico Barquisimeto",
      location: "Barquisimeto, Lara",
      status: "Activo",
      encryption: "AES-256",
      lastAudit: "08/08/2024",
      compliance: 98.9,
      dataIsolation: "Completo",
      backupStatus: "Sincronizado",
      accessLogs: 423,
      securityLevel: "Máximo"
    },
    {
      id: 5,
      name: "Centro Médico San Cristóbal",
      location: "San Cristóbal, Táchira",
      status: "Activo",
      encryption: "AES-256",
      lastAudit: "05/08/2024",
      compliance: 97.6,
      dataIsolation: "Completo",
      backupStatus: "Sincronizado",
      accessLogs: 318,
      securityLevel: "Máximo"
    }
  ];

  const currentSite = sites?.[selectedSite];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container-medical">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Aislamiento de Datos por Ubicación
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada sede mantiene su propio entorno de datos completamente aislado y encriptado, 
            cumpliendo con las regulaciones venezolanas de protección de información médica.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Site Selector */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-4">Sedes Activas</h3>
            <div className="space-y-3">
              {sites?.map((site, index) => (
                <button
                  key={site?.id}
                  onClick={() => setSelectedSite(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    selectedSite === index
                      ? 'bg-primary/10 border-primary/30 text-primary' :'bg-card/50 border-border hover:bg-card/70 text-foreground'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{site?.name}</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-xs text-success">Activo</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{site?.location}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Site Details */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{currentSite?.name}</h3>
                  <p className="text-muted-foreground">{currentSite?.location}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Security Metrics */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Métricas de Seguridad</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Icon name="Lock" size={16} color="var(--color-success)" />
                        <span className="text-sm text-foreground">Encriptación</span>
                      </div>
                      <span className="text-sm font-medium text-success">{currentSite?.encryption}</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Icon name="Shield" size={16} color="var(--color-primary)" />
                        <span className="text-sm text-foreground">Cumplimiento</span>
                      </div>
                      <span className="text-sm font-medium text-primary">{currentSite?.compliance}%</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Icon name="Database" size={16} color="var(--color-secondary)" />
                        <span className="text-sm text-foreground">Aislamiento</span>
                      </div>
                      <span className="text-sm font-medium text-secondary">{currentSite?.dataIsolation}</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Icon name="HardDrive" size={16} color="var(--color-accent)" />
                        <span className="text-sm text-foreground">Respaldo</span>
                      </div>
                      <span className="text-sm font-medium text-accent">{currentSite?.backupStatus}</span>
                    </div>
                  </div>
                </div>

                {/* Activity & Monitoring */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Monitoreo y Actividad</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Icon name="Calendar" size={16} color="var(--color-warning)" />
                        <span className="text-sm text-foreground">Última Auditoría</span>
                      </div>
                      <span className="text-sm font-medium text-warning">{currentSite?.lastAudit}</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Icon name="Activity" size={16} color="var(--color-success)" />
                        <span className="text-sm text-foreground">Registros de Acceso</span>
                      </div>
                      <span className="text-sm font-medium text-success">{currentSite?.accessLogs?.toLocaleString()}</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Icon name="Star" size={16} color="var(--color-primary)" />
                        <span className="text-sm text-foreground">Nivel de Seguridad</span>
                      </div>
                      <span className="text-sm font-medium text-primary">{currentSite?.securityLevel}</span>
                    </div>

                    <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                        <span className="text-sm font-medium text-success">Estado de Seguridad</span>
                      </div>
                      <p className="text-xs text-success/80">
                        Todos los sistemas operando dentro de parámetros de seguridad óptimos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityBySite;