import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../AppIcon';
import Button from './Button';
import { NAVIGATION_ITEMS, SECONDARY_ITEMS } from '../../constants/navigation';
import useActions from '../../hooks/useActions';

const Header = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { handleWhatsAppClick, handleDemoClick } = useActions();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-header transition-all duration-300 ${
        isScrolled 
          ? 'glass-strong border-b border-glass-border shadow-glass-medium backdrop-blur-glass-strong' 
          : 'glass-light backdrop-blur-glass'
      } ${className}`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container-medical">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo with Enhanced Animation */}
          <motion.div
            variants={logoVariants}
            whileHover="hover"
          >
            <Link 
              to="/homepage" 
              className="flex items-center space-x-3 transition-opacity duration-300"
              onClick={closeMobileMenu}
            >
              <div className="relative">
                <motion.div 
                  className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-solware rounded-xl flex items-center justify-center shadow-glass-medium"
                  whileHover={{
                    boxShadow: "0 8px 32px rgba(139, 92, 246, 0.4)"
                  }}
                >
                  <Icon name="Activity" size={24} color="white" strokeWidth={2.5} />
                </motion.div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background animate-pulse-medical"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold text-gradient-solware">
                  SolHub
                </span>
                <span className="text-xs lg:text-sm text-muted-foreground font-medium -mt-1">
                  by Solware
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation with Glass Effects */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAVIGATION_ITEMS?.map((item, index) => (
              <motion.div
                key={item?.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
              >
                <Link
                  to={item?.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-glass-light ${
                    isActivePath(item?.path)
                      ? 'text-primary glass-medium border border-primary/20 shadow-glass-light' 
                      : 'text-foreground hover:text-primary hover:glass-light'
                  }`}
                >
                  <Icon name={item?.icon} size={16} />
                  <span>{item?.name}</span>
                </Link>
              </motion.div>
            ))}
            
            {/* More Menu with Enhanced Dropdown */}
            <div className="relative group">
              <motion.button 
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium text-foreground hover:text-primary hover:glass-light transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <Icon name="MoreHorizontal" size={16} />
                <span>Más</span>
              </motion.button>
              
              {/* Enhanced Dropdown */}
              <motion.div 
                className="absolute top-full right-0 mt-2 w-56 glass-strong border border-glass-border rounded-2xl shadow-glass-strong opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-dropdown"
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2">
                  {SECONDARY_ITEMS?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:glass-light ${
                        isActivePath(item?.path)
                          ? 'text-primary glass-light' :'text-popover-foreground hover:text-primary'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </nav>

          {/* Desktop CTA Buttons with Enhanced Styling */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={handleWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="text-success hover:text-success hover:glass-light border border-success/20 hover:border-success/40 transition-all duration-300"
              >
                WhatsApp
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="default"
                size="sm"
                onClick={handleDemoClick}
                iconName="Play"
                iconPosition="left"
                className="bg-gradient-solware hover:opacity-90 shadow-glass-medium hover:shadow-glass-strong transition-all duration-300"
              >
                Demo Gratis
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-xl text-foreground hover:text-primary hover:glass-light transition-all duration-300"
            aria-label="Toggle mobile menu"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu with Enhanced Animation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 glass-strong backdrop-blur-glass-strong border-b border-glass-border shadow-glass-strong z-dropdown"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-4 space-y-2">
                {/* Primary Navigation */}
                {NAVIGATION_ITEMS?.map((item, index) => (
                  <motion.div
                    key={item?.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item?.path}
                      onClick={closeMobileMenu}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        isActivePath(item?.path)
                          ? 'text-primary glass-medium border border-primary/20' :'text-foreground hover:text-primary hover:glass-light'
                      }`}
                    >
                      <Icon name={item?.icon} size={20} />
                      <span>{item?.name}</span>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Divider */}
                <div className="border-t border-glass-border my-4"></div>
                
                {/* Secondary Navigation */}
                {SECONDARY_ITEMS?.map((item, index) => (
                  <motion.div
                    key={item?.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (NAVIGATION_ITEMS?.length + index) * 0.05 }}
                  >
                    <Link
                      to={item?.path}
                      onClick={closeMobileMenu}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        isActivePath(item?.path)
                          ? 'text-primary glass-medium border border-primary/20' :'text-foreground hover:text-primary hover:glass-light'
                      }`}
                    >
                      <Icon name={item?.icon} size={20} />
                      <span>{item?.name}</span>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile CTA Buttons */}
                <motion.div 
                  className="pt-4 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() => { handleWhatsAppClick(); closeMobileMenu(); }}
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="border-success text-success hover:glass-light hover:border-success/60 transition-all duration-300"
                  >
                    Contactar por WhatsApp
                  </Button>
                  <Button
                    variant="default"
                    fullWidth
                    onClick={() => { handleDemoClick(); closeMobileMenu(); }}
                    iconName="Play"
                    iconPosition="left"
                    className="bg-gradient-solware hover:opacity-90 shadow-glass-medium transition-all duration-300"
                  >
                    Solicitar Demo Gratis
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;