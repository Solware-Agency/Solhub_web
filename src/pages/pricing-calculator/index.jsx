import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import PricingHeader from './components/PricingHeader';
import PackageSelector from './components/PackageSelector';
import ModuleCustomizer from './components/ModuleCustomizer';
import PricingSummary from './components/PricingSummary';
import ROIComparison from './components/ROIComparison';
import ReferralProgram from './components/ReferralProgram';
import PaymentOptions from './components/PaymentOptions';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import useActions from '../../hooks/useActions';

const PricingCalculator = () => {
  const [numberOfLabs, setNumberOfLabs] = useState(0);
  const [selectedModules, setSelectedModules] = useState([]);
  const [activeTab, setActiveTab] = useState('packages');
  
  const { handleWhatsAppClick } = useActions();

  const seoConfig = {
    title: 'Precios',
    description: 'Modelo de precios simple: Implementación inicial personalizada + $150 USD mensual por laboratorio o sede. Calcula el costo de SolHub para tu establecimiento médico.',
    keywords: 'precios laboratorio médico, software médico Venezuela, calculadora precios SolHub, ROI laboratorio digital, implementación inicial personalizada',
    url: '/pricing-calculator'
  };

  // Modelo de precios simplificado
  const pricingModel = {
    monthlyPerLab: 150, // Por laboratorio o sede mensual
    features: [
      'Implementación completa incluida',
      'Capacitación del personal',
      'Migración de datos existentes',
      'Configuración personalizada',
      'Soporte técnico durante implementación',
      'Gestión completa de pacientes y estudios',
      'Reportes digitales automatizados',
      'Control de inventario',
      'Facturación y cobranza',
      'Backup automático diario',
      'Soporte técnico continuo',
      'Actualizaciones automáticas'
    ]
  };

  // Módulos con precios consistentes con la página de módulos
  const availableModules = [
    {
      id: 'patient-management',
      name: 'Gestión de Pacientes',
      description: 'Sistema integral para el registro, seguimiento y gestión completa de pacientes',
      icon: 'Users',
      monthlyPrice: 25,
      monthlyPriceUSD: 25,
      setupFee: 37.5,
      features: ['Registro rápido con validación automática', 'Historial médico completo', 'Gestión de citas y recordatorios']
    },
    {
      id: 'ai-analysis',
      name: 'Análisis con IA',
      description: 'Inteligencia artificial avanzada para análisis automático de muestras y diagnóstico asistido',
      icon: 'Brain',
      monthlyPrice: 45,
      monthlyPriceUSD: 45,
      setupFee: 67.5,
      features: ['Análisis automático de imágenes médicas', 'Detección temprana de anomalías', 'Interpretación inteligente de resultados']
    },
    {
      id: 'automated-reports',
      name: 'Reportes Automatizados',
      description: 'Generación automática de reportes médicos profesionales con interpretaciones inteligentes',
      icon: 'FileText',
      monthlyPrice: 32,
      monthlyPriceUSD: 32,
      setupFee: 48,
      features: ['Generación automática de reportes', 'Plantillas personalizables', 'Entrega digital multi-canal']
    },
    {
      id: 'data-security',
      name: 'Seguridad de Datos',
      description: 'Protección avanzada de datos médicos con encriptación y control de acceso',
      icon: 'Shield',
      monthlyPrice: 18,
      monthlyPriceUSD: 18,
      setupFee: 27,
      features: ['Encriptación AES-256', 'Control de acceso basado en roles', 'Auditoría completa de actividades']
    },
    {
      id: 'inventory-control',
      name: 'Control de Inventario',
      description: 'Gestión inteligente de inventario médico con predicción de demanda',
      icon: 'Package',
      monthlyPrice: 28,
      monthlyPriceUSD: 28,
      setupFee: 42,
      features: ['Tracking en tiempo real', 'Predicción de demanda con IA', 'Alertas de stock mínimo']
    },
    {
      id: 'billing-integration',
      name: 'Integración de Facturación',
      description: 'Sistema completo de facturación médica con integración a seguros',
      icon: 'CreditCard',
      monthlyPrice: 35,
      monthlyPriceUSD: 35,
      setupFee: 52.5,
      features: ['Facturación automática por servicios', 'Integración con seguros médicos', 'Procesamiento de pagos multi-canal']
    }
  ];

  const handleLabCountChange = (count) => {
    setNumberOfLabs(Math.max(0, count));
  };

  const handleModuleToggle = (module) => {
    setSelectedModules(prev => {
      const isSelected = prev?.some(m => m?.id === module.id);
      if (isSelected) {
        return prev?.filter(m => m?.id !== module.id);
      } else {
        return [...prev, module];
      }
    });
  };


  const handleRequestDemo = () => {
    const message = `Hola! Me interesa conocer más sobre SolHub y cómo puede ayudar a transformar mi laboratorio médico. ¿Podrían proporcionarme más información?`;
    handleWhatsAppClick(message);
  };

  const handleContactSales = () => {
    const message = `Hola! Me interesa conocer más sobre SolHub y cómo puede ayudar a transformar mi laboratorio médico. ¿Podrían proporcionarme más información?`;
    handleWhatsAppClick(message);
  };

  const tabs = [
    { id: 'packages', label: 'Paquetes', icon: 'Package' },
    { id: 'modules', label: 'Módulos', icon: 'Grid3X3' },
    { id: 'roi', label: 'ROI', icon: 'TrendingUp' },
    { id: 'referrals', label: 'Referidos', icon: 'Gift' },
    { id: 'payment', label: 'Pago', icon: 'CreditCard' }
  ];

  return (
    <PageLayout seoConfig={seoConfig}>
      <div className="container-medical">
        <PricingHeader />

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === tab?.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {activeTab === 'packages' && (
              <PackageSelector
                numberOfLabs={numberOfLabs}
                onLabCountChange={handleLabCountChange}
                pricingModel={pricingModel}
              />
            )}

            {activeTab === 'modules' && (
              <ModuleCustomizer
                availableModules={availableModules}
                selectedModules={selectedModules}
                onModuleToggle={handleModuleToggle}
              />
            )}

            {activeTab === 'roi' && <ROIComparison />}

            {activeTab === 'referrals' && <ReferralProgram />}

            {activeTab === 'payment' && <PaymentOptions />}
          </div>

          {/* Pricing Summary Sidebar */}
          <div className="lg:col-span-1">
            <PricingSummary
              numberOfLabs={numberOfLabs}
              selectedModules={selectedModules}
              pricingModel={pricingModel}
              onRequestDemo={handleRequestDemo}
              onContactSales={handleContactSales}
            />
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center space-y-6">
          <div className="bg-gradient-medical-subtle border border-primary/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ¿Necesitas una Cotización Personalizada?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nuestro equipo puede crear una propuesta específica para las necesidades 
              únicas de tu laboratorio, incluyendo integraciones especiales y una cotización personalizada para la implementación inicial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo-experience">
                <Button
                  variant="default"
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-gradient-medical hover:opacity-90 shadow-medical-glow"
                >
                  Agendar Demo
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={handleContactSales}
                iconName="MessageCircle"
                iconPosition="left"
                className="border-success text-success hover:bg-success/10"
              >
                Contactar Ventas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PricingCalculator;