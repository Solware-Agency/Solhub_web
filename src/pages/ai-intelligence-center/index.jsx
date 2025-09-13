import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import AIHeroSection from './components/AIHeroSection';
import AICapabilitiesSection from './components/AICapabilitiesSection';
import AIProcessVisualization from './components/AIProcessVisualization';
import TrustBuildingSection from './components/TrustBuildingSection';
import CTASection from './components/CTASection';
import useActions from '../../hooks/useActions';

const AIIntelligenceCenter = () => {
  const { handleDemoClick, handleContactClick } = useActions();

  const seoConfig = {
    title: 'IA',
    description: 'Descubre cómo Solwy, la inteligencia artificial de SolHub, revoluciona los diagnósticos médicos en Venezuela. Reconocimiento de patrones, análisis predictivo y detección de anomalías con 95% de precisión.',
    keywords: 'inteligencia artificial médica, Solwy diagnósticos, machine learning laboratorio, análisis predictivo médico, detección anomalías, SolHub Venezuela',
    url: '/ai-intelligence-center'
  };

  const handleDemoClickWithScroll = () => {
    window.location.href = '/demo-experience';
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



      {/* Trust Building */}
      <TrustBuildingSection />

      {/* CTA Section */}
      <CTASection />
    </PageLayout>
  );
};

export default AIIntelligenceCenter;