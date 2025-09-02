import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import AIHeroSection from './components/AIHeroSection';
import AICapabilitiesSection from './components/AICapabilitiesSection';
import RealUseCasesSection from './components/RealUseCasesSection';
import InteractiveAnalyzerSection from './components/InteractiveAnalyzerSection';
import AIProcessVisualization from './components/AIProcessVisualization';
import TrustBuildingSection from './components/TrustBuildingSection';
import CTASection from './components/CTASection';
import useActions from '../../hooks/useActions';

const AIIntelligenceCenter = () => {
  const { handleDemoClick, handleContactClick } = useActions();

  const seoConfig = {
    title: 'Centro de Inteligencia Artificial - Solwy para Diagnósticos Médicos',
    description: 'Descubre cómo Solwy, la inteligencia artificial de SolHub, revoluciona los diagnósticos médicos en Venezuela. Reconocimiento de patrones, análisis predictivo y detección de anomalías con 95% de precisión.',
    keywords: 'inteligencia artificial médica, Solwy diagnósticos, machine learning laboratorio, análisis predictivo médico, detección anomalías, SolHub Venezuela',
    url: '/ai-intelligence-center'
  };

  const handleDemoClickWithScroll = () => {
    const analyzerSection = document.getElementById('interactive-analyzer');
    if (analyzerSection) {
      analyzerSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMoreClick = () => {
    const capabilitiesSection = document.getElementById('ai-capabilities');
    if (capabilitiesSection) {
      capabilitiesSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageLayout seoConfig={seoConfig}>
      {/* Hero Section */}
      <AIHeroSection 
        onDemoClick={handleDemoClickWithScroll}
        onLearnMoreClick={handleLearnMoreClick}
      />

      {/* AI Capabilities */}
      <div id="ai-capabilities">
        <AICapabilitiesSection />
      </div>

      {/* Process Visualization */}
      <AIProcessVisualization />

      {/* Real Use Cases */}
      <RealUseCasesSection />

      {/* Interactive Analyzer */}
      <div id="interactive-analyzer">
        <InteractiveAnalyzerSection />
      </div>

      {/* Trust Building */}
      <TrustBuildingSection />

      {/* CTA Section */}
      <CTASection />
    </PageLayout>
  );
};

export default AIIntelligenceCenter;