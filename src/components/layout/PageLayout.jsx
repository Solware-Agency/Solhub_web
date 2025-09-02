import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '../ui/Header';
import WhatsAppButton from '../WhatsAppButton';
import Footer from './Footer';
import { createSEOConfig } from '../../utils/seo';
import useScrollToTop from '../../hooks/useScrollToTop';

const PageLayout = ({ 
  children, 
  seoConfig = {}, 
  showWhatsApp = true,
  showFooter = true,
  className = '',
  containerClassName = ''
}) => {
  useScrollToTop();

  const seo = createSEOConfig(seoConfig);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet
        title={seo?.title}
        meta={seo?.meta}
        link={seo?.link}
        script={seo?.script}
      />
      <div className={`min-h-screen bg-background text-foreground ${className}`}>
        <Header />
        {showWhatsApp && <WhatsAppButton />}
        
        <motion.main 
          className={`pt-20 ${containerClassName}`}
          variants={pageVariants}
          initial="initial"
          animate="animate"
        >
          {children}
        </motion.main>

        {showFooter && <Footer />}
      </div>
    </>
  );
};

export default PageLayout;