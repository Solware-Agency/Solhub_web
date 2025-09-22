import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/layout/Footer';
import HeroSection from './components/HeroSection';
import CategoryFilter from './components/CategoryFilter';
import FeaturedContent from './components/FeaturedContent';
import ResourceGrid from './components/ResourceGrid';
import UpcomingWebinars from './components/UpcomingWebinars';
import NewsletterSignup from './components/NewsletterSignup';
import CommunitySection from './components/CommunitySection';

const KnowledgeHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentLanguage, setCurrentLanguage] = useState('es');

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem('SolHub-language') || 'es';
    setCurrentLanguage(savedLanguage);
  }, []);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <Helmet>
        <title>Centro de Conocimiento - SolHub | Recursos para Digitalización Médica</title>
        <meta name="description" content="Centro de recursos completo para la transformación digital de laboratorios médicos en Venezuela. Guías de implementación, casos de éxito, webinars y comunidad profesional." />
        <meta name="keywords" content="recursos médicos, digitalización laboratorios, guías implementación, IA médica, cumplimiento normativo, casos éxito, webinars médicos, comunidad profesional" />
        <meta property="og:title" content="Centro de Conocimiento - SolHub" />
        <meta property="og:description" content="Recursos especializados para impulsar la digitalización de laboratorios médicos en Venezuela" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/knowledge-hub" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16 lg:pt-20">
          {/* Hero Section */}
          <HeroSection 
            onSearchChange={handleSearchChange}
            searchQuery={searchQuery}
          />

          <div className="container-medical py-16">
            {/* Category Filter */}
            <CategoryFilter 
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />

            {/* Featured Content */}
            <FeaturedContent />

            {/* Resource Grid */}
            <ResourceGrid 
              searchQuery={searchQuery}
              activeCategory={activeCategory}
            />

            {/* Upcoming Webinars */}
            <UpcomingWebinars />

            {/* Newsletter Signup */}
            <div className="mb-12">
              <NewsletterSignup />
            </div>

            {/* Community Section */}
            <CommunitySection />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default KnowledgeHub;