import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../AppIcon';
import Button from './Button';
import { NAVIGATION_ITEMS, SOLUTIONS_DROPDOWN_ITEMS } from '../../constants/navigation';
import useActions from '../../hooks/useActions';

const Header = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const location = useLocation();
  const { handleWhatsAppClick, handleDemoClick } = useActions();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Bloquear scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Guardar la posición actual del scroll
      const scrollY = window.scrollY;
      
      // Aplicar estilos para bloquear el scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restaurar el scroll cuando se cierre el menú
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSolutionsMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsSolutionsHovered(true);
  };

  const handleSolutionsMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsSolutionsHovered(false);
    }, 300); // 300ms delay
    setHoverTimeout(timeout);
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
        <div className="flex items-center justify-between py-3 sm:py-4 lg:py-5">
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
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-solware rounded-xl flex items-center justify-center shadow-glass-medium"
                  whileHover={{
                    boxShadow: "0 8px 32px rgba(139, 92, 246, 0.4)"
                  }}
                >
                  <Icon name="Activity" size={20} color="white" strokeWidth={2.5} className="sm:w-6 sm:h-6" />
                </motion.div>
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-success rounded-full border-2 border-background animate-pulse-medical"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gradient-solware">
                  SolHub
                </span>
                <span className="text-xs sm:text-xs lg:text-sm text-muted-foreground font-medium -mt-1">
                  by Solware
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation with Glass Effects */}
          <nav className="hidden md:flex items-center space-x-1">
            {NAVIGATION_ITEMS?.map((item, index) => {
              // Handle Solutions dropdown
              if (item?.hasDropdown) {
                return (
                  <motion.div
                    key={item?.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
                    className="relative"
                    onMouseEnter={handleSolutionsMouseEnter}
                    onMouseLeave={handleSolutionsMouseLeave}
                  >
                    <Link
                      to={item?.path}
                      className={`flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-xl text-xs lg:text-sm font-medium transition-all duration-300 hover:shadow-glass-light ${
                        isActivePath(item?.path)
                          ? 'text-primary glass-medium border border-primary/20 shadow-glass-light' 
                          : 'text-foreground hover:text-primary hover:glass-light'
                      }`}
                    >
                      <Icon name={item?.icon} size={14} className="lg:w-4 lg:h-4" />
                      <span className="hidden lg:inline">{item?.name}</span>
                      <Icon name="ChevronDown" size={12} className="lg:w-3 lg:h-3" />
                    </Link>
                    
                    {/* Solutions Dropdown */}
                    <motion.div 
                      className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-2xl shadow-xl z-[60]"
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ 
                        opacity: isSolutionsHovered ? 1 : 0, 
                        scale: isSolutionsHovered ? 1 : 0.95, 
                        y: isSolutionsHovered ? 0 : -10 
                      }}
                      transition={{ duration: 0.2 }}
                      style={{ pointerEvents: isSolutionsHovered ? 'auto' : 'none' }}
                      onMouseEnter={handleSolutionsMouseEnter}
                      onMouseLeave={handleSolutionsMouseLeave}
                    >
                      <div className="p-2">
                        {SOLUTIONS_DROPDOWN_ITEMS?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem?.path}
                            to={dropdownItem?.path}
                            className={`flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:glass-light ${
                              isActivePath(dropdownItem?.path)
                                ? 'text-primary glass-light' :'text-popover-foreground hover:text-primary'
                            }`}
                          >
                            <Icon name={dropdownItem?.icon} size={16} />
                            <span>{dropdownItem?.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              }
              
              // Regular navigation items
              return (
                <motion.div
                  key={item?.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
                >
                  <Link
                    to={item?.path}
                    className={`flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-xl text-xs lg:text-sm font-medium transition-all duration-300 hover:shadow-glass-light ${
                      isActivePath(item?.path)
                        ? 'text-primary glass-medium border border-primary/20 shadow-glass-light' 
                        : 'text-foreground hover:text-primary hover:glass-light'
                    }`}
                  >
                    <Icon name={item?.icon} size={14} className="lg:w-4 lg:h-4" />
                    <span className="hidden lg:inline">{item?.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons with Enhanced Styling */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ28TbL6x8Jj7yLpzgpH2OQ1MV5t5zdvwYRbjCTVKTjj-pNNzSSZ3mGSpguP7Sv4AksuyRdav2bJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="default"
                  size="sm"
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-gradient-solware hover:opacity-90 shadow-glass-medium hover:shadow-glass-strong transition-all duration-300 text-xs lg:text-sm px-3 lg:px-4"
                >
                  <span className="hidden lg:inline">Demo</span>
                  <span className="lg:hidden">Demo</span>
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-xl text-foreground hover:text-primary hover:glass-light transition-all duration-300"
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
              className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl z-[60]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-4 space-y-2">
                {/* Primary Navigation */}
                {NAVIGATION_ITEMS?.map((item, index) => {
                  if (item?.hasDropdown) {
                    return (
                      <motion.div
                        key={item?.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="space-y-2"
                      >
                        {/* Solutions main link */}
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
                        
                        {/* Solutions dropdown items */}
                        <div className="ml-6 space-y-1">
                          {SOLUTIONS_DROPDOWN_ITEMS?.map((dropdownItem, dropdownIndex) => (
                            <motion.div
                              key={dropdownItem?.path}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index + dropdownIndex + 1) * 0.05 }}
                            >
                              <Link
                                to={dropdownItem?.path}
                                onClick={closeMobileMenu}
                                className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                  isActivePath(dropdownItem?.path)
                                    ? 'text-primary glass-light border border-primary/10' :'text-muted-foreground hover:text-primary hover:glass-light'
                                }`}
                              >
                                <Icon name={dropdownItem?.icon} size={16} />
                                <span>{dropdownItem?.name}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  }
                  
                  return (
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
                  );
                })}
                
                {/* Mobile CTA Buttons */}
                <motion.div 
                  className="pt-4 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a 
                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ28TbL6x8Jj7yLpzgpH2OQ1MV5t5zdvwYRbjCTVKTjj-pNNzSSZ3mGSpguP7Sv4AksuyRdav2bJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                  >
                    <Button
                      variant="default"
                      fullWidth
                      iconName="Calendar"
                      iconPosition="left"
                      className="bg-gradient-solware hover:opacity-90 shadow-glass-medium transition-all duration-300"
                    >
                      Demo
                    </Button>
                  </a>
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