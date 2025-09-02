import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import WhatsAppButton from "components/WhatsAppButton";
import NotFound from "pages/NotFound";
import ClientSuccessStories from './pages/client-success-stories';
import ModulesShowcase from './pages/modules-showcase';
import ContactSupport from './pages/contact-support';
import AIIntelligenceCenter from './pages/ai-intelligence-center';
import DemoExperience from './pages/demo-experience';
import PricingCalculator from './pages/pricing-calculator';
import SecurityFortress from './pages/security-fortress';
import KnowledgeHub from './pages/knowledge-hub';
import Homepage from './pages/homepage';
import DedicatedContactPage from './pages/dedicated-contact-page';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <WhatsAppButton />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AIIntelligenceCenter />} />
        <Route path="/client-success-stories" element={<ClientSuccessStories />} />
        <Route path="/modules-showcase" element={<ModulesShowcase />} />
        <Route path="/contact-support" element={<ContactSupport />} />
        <Route path="/ai-intelligence-center" element={<AIIntelligenceCenter />} />
        <Route path="/demo-experience" element={<DemoExperience />} />
        <Route path="/pricing-calculator" element={<PricingCalculator />} />
        <Route path="/security-fortress" element={<SecurityFortress />} />
        <Route path="/knowledge-hub" element={<KnowledgeHub />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/dedicated-contact-page" element={<DedicatedContactPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;