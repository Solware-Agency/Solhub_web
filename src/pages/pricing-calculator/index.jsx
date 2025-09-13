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
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedModules, setSelectedModules] = useState([]);
  const [hasReferralDiscount, setHasReferralDiscount] = useState(false);
  const [activeTab, setActiveTab] = useState('packages');
  
  const { handleWhatsAppClick } = useActions();

  const seoConfig = {
    title: 'Precios',
    description: 'Calcula el costo de implementar SolHub en tu laboratorio. Precios transparentes en bolívares, opciones flexibles de pago y programa de referidos con 20% de descuento.',
    keywords: 'precios laboratorio médico, software médico Venezuela, calculadora precios SolHub, ROI laboratorio digital',
    url: '/pricing-calculator'
  };

  // Mock data for packages
  const packages = [
    {
      id: 'independent-lab',
      name: 'Laboratorio Independiente',
      description: 'Solución completa para laboratorios independientes pequeños y medianos',
      icon: 'Microscope',
      monthlyPrice: 120,
      monthlyPriceUSD: 120,
      setupFee: 180,
      features: [
        'Gestión de pacientes y estudios',
        'Reportes digitales automatizados',
        'Control de inventario básico',
        'Facturación y cobranza',
        'Backup automático diario',
        'Soporte técnico estándar',
        'Capacitación inicial incluida',
        'Actualizaciones automáticas'
      ]
    },
    {
      id: 'clinic-with-lab',
      name: 'Clínica con Laboratorio',
      description: 'Integración perfecta entre servicios clínicos y laboratorio interno',
      icon: 'Building2',
      monthlyPrice: 280,
      monthlyPriceUSD: 280,
      setupFee: 350,
      features: [
        'Gestión integral clínica-laboratorio',
        'Historia clínica unificada',
        'Agenda médica integrada',
        'Facturación multi-servicio',
        'Reportes ejecutivos avanzados',
        'Control de inventario completo',
        'Soporte técnico prioritario',
        'Capacitación especializada'
      ]
    },
    {
      id: 'diagnostic-network',
      name: 'Red de Diagnóstico',
      description: 'Gestión centralizada para múltiples sedes y laboratorios',
      icon: 'Network',
      monthlyPrice: 420,
      monthlyPriceUSD: 420,
      setupFee: 600,
      features: [
        'Gestión multi-sede centralizada',
        'Dashboard ejecutivo en tiempo real',
        'Transferencia de estudios entre sedes',
        'Reportes consolidados',
        'Control de inventario por sede',
        'Facturación centralizada',
        'Soporte técnico 24/7',
        'Consultoría de procesos incluida'
      ]
    }
  ];

  // Mock data for individual modules
  const availableModules = [
    {
      id: 'ai-diagnostics',
      name: 'IA para Diagnósticos',
      description: 'Asistente de inteligencia artificial para interpretación de resultados',
      icon: 'Brain',
      monthlyPrice: 80,
      monthlyPriceUSD: 80,
      setupFee: 120,
      features: ['Análisis automático de patrones', 'Sugerencias diagnósticas', 'Alertas de valores críticos']
    },
    {
      id: 'telemedicine',
      name: 'Telemedicina',
      description: 'Consultas médicas remotas integradas con resultados de laboratorio',
      icon: 'Video',
      monthlyPrice: 60,
      monthlyPriceUSD: 60,
      setupFee: 90,
      features: ['Videoconsultas HD', 'Compartir resultados en tiempo real', 'Grabación de sesiones']
    },
    {
      id: 'mobile-app',
      name: 'App Móvil Pacientes',
      description: 'Aplicación móvil para que pacientes accedan a sus resultados',
      icon: 'Smartphone',
      monthlyPrice: 40,
      monthlyPriceUSD: 40,
      setupFee: 60,
      features: ['Resultados en tiempo real', 'Notificaciones push', 'Historial médico']
    },
    {
      id: 'advanced-reports',
      name: 'Reportes Avanzados',
      description: 'Sistema de reportes ejecutivos y análisis de tendencias',
      icon: 'BarChart3',
      monthlyPrice: 50,
      monthlyPriceUSD: 50,
      setupFee: 75,
      features: ['Dashboards personalizados', 'Análisis de tendencias', 'Exportación automática']
    },
    {
      id: 'quality-control',
      name: 'Control de Calidad',
      description: 'Módulo especializado para control de calidad y trazabilidad',
      icon: 'Shield',
      monthlyPrice: 70,
      monthlyPriceUSD: 70,
      setupFee: 105,
      features: ['Trazabilidad completa', 'Controles automáticos', 'Certificaciones ISO']
    },
    {
      id: 'inventory-plus',
      name: 'Inventario Avanzado',
      description: 'Gestión avanzada de inventario con predicción de demanda',
      icon: 'Package',
      monthlyPrice: 45,
      monthlyPriceUSD: 45,
      setupFee: 67.5,
      features: ['Predicción de demanda', 'Alertas automáticas', 'Integración con proveedores']
    }
  ];

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setSelectedModules([]); // Clear modules when selecting a package
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
    setSelectedPackage(null); // Clear package when selecting individual modules
  };

  const handleToggleReferral = () => {
    setHasReferralDiscount(!hasReferralDiscount);
  };

  const handleRequestDemo = () => {
    const message = 'Hola, me interesa solicitar un demo personalizado de SolHub. He estado usando la calculadora de precios y me gustaría conocer más detalles sobre la implementación.';
    handleWhatsAppClick(message);
  };

  const handleContactSales = () => {
    const message = 'Hola, he estado revisando los precios de SolHub y me gustaría hablar con el equipo de ventas para obtener más información sobre las opciones de pago y implementación.';
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
                selectedPackage={selectedPackage}
                onPackageSelect={handlePackageSelect}
                packages={packages}
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
              selectedPackage={selectedPackage}
              selectedModules={selectedModules}
              hasReferralDiscount={hasReferralDiscount}
              onToggleReferral={handleToggleReferral}
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
              únicas de tu laboratorio, incluyendo integraciones especiales y descuentos por volumen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-support">
                <Button
                  variant="default"
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-gradient-medical hover:opacity-90 shadow-medical-glow"
                >
                  Agendar Consulta Gratuita
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