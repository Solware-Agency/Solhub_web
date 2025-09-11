import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import Footer from '../../components/layout/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

import ModuleCard from './components/ModuleCard';
import ConfiguratorSidebar from './components/ConfiguratorSidebar';
import EcosystemMap from './components/EcosystemMap';
import WorkflowDemo from './components/WorkflowDemo';

const ModulesShowcase = () => {
  const [selectedModules, setSelectedModules] = useState([]);
  const [expandedModule, setExpandedModule] = useState(null);
  const [demoModule, setDemoModule] = useState(null);
  const [hoveredModule, setHoveredModule] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  const seoConfig = {
    title: 'Módulos',
    description: 'Descubre cómo nuestros módulos especializados se integran perfectamente para crear la solución ideal para tu laboratorio médico en Venezuela.',
    keywords: 'módulos médicos, soluciones laboratorio, gestión pacientes, IA médica, reportes automatizados, inventario médico',
    url: '/modules-showcase'
  };

  const modules = [
    {
      id: 'patient-management',
      name: 'Gestión de Pacientes',
      description: 'Sistema integral para el registro, seguimiento y gestión completa de pacientes con historial médico digitalizado.',
      icon: 'Users',
      category: 'core',
      price: 2500,
      implementationWeeks: 2,
      dependencies: ['data-security'],
      features: [
        'Registro rápido con validación automática',
        'Historial médico completo y búsqueda avanzada',
        'Gestión de citas y recordatorios automáticos',
        'Integración con sistemas de identificación',
        'Portal del paciente con acceso 24/7',
        'Reportes demográficos y estadísticas'
      ],
      benefits: [
        {
          icon: 'Clock',
          title: 'Tiempo de Registro',
          description: 'Reducción del 80% en tiempo de registro de pacientes nuevos'
        },
        {
          icon: 'Search',
          title: 'Búsqueda Inteligente',
          description: 'Localización instantánea de historiales con IA'
        },
        {
          icon: 'Shield',
          title: 'Datos Seguros',
          description: 'Cumplimiento total con normativas de privacidad médica'
        }
      ],
      integrations: [
        'Sistema de Citas',
        'WhatsApp Business',
        'Email Marketing',
        'Sistemas de Pago',
        'Laboratorio Central'
      ],
      testimonial: {
        quote: 'El módulo de gestión de pacientes transformó completamente nuestro flujo de trabajo. Ahora procesamos el doble de pacientes con la mitad del tiempo.',
        author: 'Dr. María González',
        role: 'Directora Médica',
        location: 'Laboratorio Central, Caracas'
      }
    },
    {
      id: 'ai-analysis',
      name: 'Análisis con IA',
      description: 'Inteligencia artificial avanzada para análisis automático de muestras, detección de patrones y diagnóstico asistido.',
      icon: 'Brain',
      category: 'ai',
      price: 4500,
      implementationWeeks: 4,
      dependencies: ['patient-management', 'data-security'],
      features: [
        'Análisis automático de imágenes médicas',
        'Detección temprana de anomalías',
        'Interpretación inteligente de resultados',
        'Comparación con bases de datos médicas',
        'Alertas automáticas para valores críticos',
        'Aprendizaje continuo del sistema'
      ],
      benefits: [
        {
          icon: 'Target',
          title: 'Precisión Diagnóstica',
          description: 'Aumento del 40% en precisión de diagnósticos tempranos'
        },
        {
          icon: 'Zap',
          title: 'Velocidad de Análisis',
          description: 'Procesamiento 10x más rápido que métodos tradicionales'
        },
        {
          icon: 'TrendingUp',
          title: 'Mejora Continua',
          description: 'Sistema que aprende y mejora con cada análisis'
        }
      ],
      integrations: [
        'Equipos de Laboratorio',
        'Sistemas de Imagen',
        'Bases de Datos Médicas',
        'Alertas Médicas',
        'Reportes Automáticos'
      ],
      testimonial: {
        quote: 'La IA de Solwy detectó anomalías que habríamos pasado por alto. Es como tener un especialista trabajando 24/7 en nuestro laboratorio.',
        author: 'Dr. Carlos Mendoza',
        role: 'Patólogo Clínico',
        location: 'Clínica San Rafael, Valencia'
      }
    },
    {
      id: 'automated-reports',
      name: 'Reportes Automatizados',
      description: 'Generación automática de reportes médicos profesionales con interpretaciones inteligentes y entrega digital.',
      icon: 'FileText',
      category: 'automation',
      price: 3200,
      implementationWeeks: 3,
      dependencies: ['ai-analysis', 'patient-management'],
      features: [
        'Generación automática de reportes',
        'Plantillas personalizables por especialidad',
        'Interpretaciones médicas automatizadas',
        'Entrega digital multi-canal',
        'Firma digital médica integrada',
        'Archivo y búsqueda de reportes históricos'
      ],
      benefits: [
        {
          icon: 'FileCheck',
          title: 'Calidad Consistente',
          description: 'Reportes estandarizados sin errores de transcripción'
        },
        {
          icon: 'Send',
          title: 'Entrega Instantánea',
          description: 'Pacientes reciben resultados en minutos, no días'
        },
        {
          icon: 'Palette',
          title: 'Personalización',
          description: 'Reportes adaptados al estilo de cada clínica'
        }
      ],
      integrations: [
        'Email Corporativo',
        'WhatsApp Business',
        'Portal del Paciente',
        'Sistemas de Archivo',
        'Firma Digital'
      ],
      testimonial: {
        quote: 'Pasamos de generar reportes en 2 días a entregarlos en 30 minutos. Nuestros pacientes están encantados con la rapidez.',
        author: 'Lic. Ana Rodríguez',
        role: 'Coordinadora de Laboratorio',
        location: 'Centro Médico Integral, Maracaibo'
      }
    },
    {
      id: 'data-security',
      name: 'Seguridad de Datos',
      description: 'Protección avanzada de datos médicos con encriptación, control de acceso y cumplimiento normativo completo.',
      icon: 'Shield',
      category: 'security',
      price: 1800,
      implementationWeeks: 1,
      dependencies: [],
      features: [
        'Encriptación AES-256 de extremo a extremo',
        'Control de acceso basado en roles',
        'Auditoría completa de actividades',
        'Backup automático multi-sede',
        'Cumplimiento HIPAA y normativas locales',
        'Monitoreo de seguridad 24/7'
      ],
      benefits: [
        {
          icon: 'Lock',
          title: 'Protección Total',
          description: 'Datos médicos protegidos con estándares bancarios'
        },
        {
          icon: 'Eye',
          title: 'Transparencia',
          description: 'Auditoría completa de quién accede a qué información'
        },
        {
          icon: 'CheckCircle',
          title: 'Cumplimiento',
          description: 'Certificación automática con regulaciones médicas'
        }
      ],
      integrations: [
        'Sistemas de Autenticación',
        'Servicios de Backup',
        'Monitoreo de Seguridad',
        'Auditoría Legal',
        'Certificaciones Médicas'
      ],
      testimonial: {
        quote: 'Con Solwy tenemos la tranquilidad de que nuestros datos están más seguros que en cualquier banco. La auditoría es impecable.',
        author: 'Ing. Roberto Silva',
        role: 'Director de TI',
        location: 'Hospital Universitario, Mérida'
      }
    },
    {
      id: 'inventory-control',
      name: 'Control de Inventario',
      description: 'Gestión inteligente de inventario médico con predicción de demanda y reposición automática.',
      icon: 'Package',
      category: 'operations',
      price: 2800,
      implementationWeeks: 2,
      dependencies: ['data-security'],
      features: [
        'Tracking en tiempo real de inventario',
        'Predicción de demanda con IA',
        'Alertas de stock mínimo automáticas',
        'Gestión de proveedores integrada',
        'Control de vencimientos y lotes',
        'Optimización de costos de inventario'
      ],
      benefits: [
        {
          icon: 'TrendingDown',
          title: 'Reducción de Costos',
          description: 'Optimización del 30% en costos de inventario'
        },
        {
          icon: 'AlertCircle',
          title: 'Cero Faltantes',
          description: 'Eliminación de desabastecimientos críticos'
        },
        {
          icon: 'BarChart',
          title: 'Análisis Predictivo',
          description: 'Predicción precisa de necesidades futuras'
        }
      ],
      integrations: [
        'Sistemas de Compras',
        'Proveedores Médicos',
        'Códigos de Barras',
        'ERP Corporativo',
        'Análisis Financiero'
      ],
      testimonial: {
        quote: 'Nunca más nos quedamos sin reactivos críticos. El sistema predice nuestras necesidades mejor que nosotros mismos.',
        author: 'Lic. Patricia Morales',
        role: 'Jefe de Suministros',
        location: 'Laboratorio Diagnóstico Plus, Barquisimeto'
      }
    },
    {
      id: 'billing-integration',
      name: 'Integración de Facturación',
      description: 'Sistema completo de facturación médica con integración a seguros y procesamiento automático de pagos.',
      icon: 'CreditCard',
      category: 'finance',
      price: 3500,
      implementationWeeks: 3,
      dependencies: ['patient-management', 'data-security'],
      features: [
        'Facturación automática por servicios',
        'Integración con seguros médicos',
        'Procesamiento de pagos multi-canal',
        'Gestión de cuentas por cobrar',
        'Reportes financieros en tiempo real',
        'Cumplimiento fiscal automatizado'
      ],
      benefits: [
        {
          icon: 'DollarSign',
          title: 'Flujo de Caja',
          description: 'Mejora del 45% en tiempo de cobro'
        },
        {
          icon: 'Calculator',
          title: 'Precisión Fiscal',
          description: 'Eliminación de errores en facturación'
        },
        {
          icon: 'PieChart',
          title: 'Análisis Financiero',
          description: 'Insights en tiempo real sobre rentabilidad'
        }
      ],
      integrations: [
        'Bancos Venezolanos',
        'Seguros Médicos',
        'Sistemas Contables',
        'SENIAT',
        'Procesadores de Pago'
      ],
      testimonial: {
        quote: 'La integración con seguros nos ahorró horas de trabajo administrativo. Los cobros ahora son automáticos y precisos.',
        author: 'Cont. Luis Herrera',
        role: 'Director Financiero',
        location: 'Clínica Metropolitana, Caracas'
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos los Módulos', icon: 'Grid3X3' },
    { id: 'core', name: 'Módulos Centrales', icon: 'Users' },
    { id: 'ai', name: 'Inteligencia Artificial', icon: 'Brain' },
    { id: 'automation', name: 'Automatización', icon: 'Zap' },
    { id: 'security', name: 'Seguridad', icon: 'Shield' },
    { id: 'operations', name: 'Operaciones', icon: 'Settings' },
    { id: 'finance', name: 'Finanzas', icon: 'DollarSign' }
  ];

  const filteredModules = filterCategory === 'all' 
    ? modules 
    : modules?.filter(module => module.category === filterCategory);

  const handleModuleToggle = (moduleId) => {
    setSelectedModules(prev => 
      prev?.includes(moduleId) 
        ? prev?.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const handleModuleExpand = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const handleViewDemo = (moduleId) => {
    const module = modules?.find(m => m?.id === moduleId);
    setDemoModule(module);
  };

  const handleClearAll = () => {
    setSelectedModules([]);
  };

  const handleRequestDemo = () => {
    console.log('Demo requested for modules:', selectedModules);
  };

  const handleRemoveModule = (moduleId) => {
    setSelectedModules(prev => prev?.filter(id => id !== moduleId));
  };

  const handleEcosystemModuleClick = (moduleId) => {
    handleModuleToggle(moduleId);
  };

  return (
    <PageLayout seoConfig={seoConfig} showFooter={false}>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-medical-subtle">
        <div className="container-medical">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Puzzle" size={16} />
              <span>Arquitectura Modular Inteligente</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Módulos que se Adaptan a tu
              <span className="text-gradient-medical block">
                Laboratorio
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Descubre cómo nuestros módulos especializados se integran perfectamente 
              para crear la solución ideal para tu laboratorio médico en Venezuela.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="bg-gradient-medical hover:opacity-90 shadow-medical-glow"
              >
                Explorar Módulos
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Calculator"
                iconPosition="left"
                asChild
              >
                <Link to="/pricing-calculator">
                  Calcular Precios
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Map */}
      <section className="py-16">
        <div className="container-medical">
          <EcosystemMap
            modules={modules}
            selectedModules={selectedModules}
            onModuleHover={setHoveredModule}
            onModuleClick={handleEcosystemModuleClick}
          />
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 border-b border-border">
        <div className="container-medical">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories?.map((category) => (
              <Button
                key={category?.id}
                variant={filterCategory === category?.id ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterCategory(category?.id)}
                iconName={category?.icon}
                iconPosition="left"
                className={filterCategory === category?.id ? "bg-primary" : ""}
              >
                {category?.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16">
        <div className="container-medical">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Modules */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredModules?.map((module) => (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    isSelected={selectedModules?.includes(module.id)}
                    onToggle={handleModuleToggle}
                    onViewDemo={handleViewDemo}
                    isExpanded={expandedModule === module.id}
                    onToggleExpand={handleModuleExpand}
                  />
                ))}
              </div>
            </div>

            {/* Configurator Sidebar */}
            <div className="lg:col-span-1">
              <ConfiguratorSidebar
                selectedModules={selectedModules}
                modules={modules}
                onRemoveModule={handleRemoveModule}
                onClearAll={handleClearAll}
                onRequestDemo={handleRequestDemo}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-muted/30">
        <div className="container-medical">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Casos de Éxito en Venezuela
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubre cómo nuestros módulos han transformado laboratorios 
              médicos en todo el país
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                location: 'Caracas',
                clinic: 'Laboratorio Central',
                modules: 4,
                improvement: '+85% eficiencia',
                icon: 'TrendingUp'
              },
              {
                location: 'Valencia',
                clinic: 'Clínica San Rafael',
                modules: 3,
                improvement: '+60% precisión',
                icon: 'Target'
              },
              {
                location: 'Maracaibo',
                clinic: 'Centro Médico Integral',
                modules: 5,
                improvement: '+75% velocidad',
                icon: 'Zap'
              }
            ]?.map((story, index) => (
              <div key={index} className="card-medical p-6 text-center">
                <div className="w-16 h-16 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={story?.icon} size={24} color="white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {story?.clinic}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {story?.location}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {story?.modules} módulos
                  </span>
                  <span className="text-success font-medium">
                    {story?.improvement}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              asChild
              iconName="ExternalLink"
              iconPosition="right"
            >
              <Link to="/client-success-stories">
                Ver Todos los Casos
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-medical">
        <div className="container-medical text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para Transformar tu Laboratorio?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Solicita una demostración personalizada y descubre cómo Solwy 
            puede optimizar las operaciones de tu laboratorio médico.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="secondary"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              asChild
            >
              <Link to="/contact-support">
                Contáctanos
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {demoModule && (
        <WorkflowDemo
          module={demoModule}
          onClose={() => setDemoModule(null)}
        />
      )}
      
      {/* Footer */}
      <Footer variant="simple" />
    </PageLayout>
  );
};

export default ModulesShowcase;