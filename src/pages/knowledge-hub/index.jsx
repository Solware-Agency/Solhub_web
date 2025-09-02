import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
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
    const savedLanguage = localStorage.getItem('ibex-language') || 'es';
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
        <title>Centro de Conocimiento - IBEX Medical | Recursos para Digitalización Médica</title>
        <meta name="description" content="Centro de recursos completo para la transformación digital de laboratorios médicos en Venezuela. Guías de implementación, casos de éxito, webinars y comunidad profesional." />
        <meta name="keywords" content="recursos médicos, digitalización laboratorios, guías implementación, IA médica, cumplimiento normativo, casos éxito, webinars médicos, comunidad profesional" />
        <meta property="og:title" content="Centro de Conocimiento - IBEX Medical" />
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

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12">
          <div className="container-medical">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-medical rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">I</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gradient-medical">IBEX Medical</div>
                    <div className="text-sm text-muted-foreground">Centro de Conocimiento</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 max-w-md">
                  Impulsando la transformación digital de laboratorios médicos en Venezuela 
                  a través de recursos educativos y una comunidad profesional activa.
                </p>
                <div className="text-sm text-muted-foreground">
                  © {new Date()?.getFullYear()} IBEX Medical. Todos los derechos reservados.
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Guías de Implementación</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Casos de Éxito</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Webinars</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Plantillas</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Comunidad</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Soporte</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Centro de Ayuda</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Términos de Uso</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default KnowledgeHub;