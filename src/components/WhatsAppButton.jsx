import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './AppIcon';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Predefined message in Spanish
  const predefinedMessage = "Hola! Me interesa conocer más sobre SolHub y cómo puede ayudar a transformar mi laboratorio médico. ¿Podrían proporcionarme más información?";
  
  // WhatsApp number from requirements
  const phoneNumber = "+584129974533";

  useEffect(() => {
    // Keep button always visible - removed scroll hide logic
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    // Format WhatsApp URL with predefined message
    const whatsappUrl = `https://wa.me/${phoneNumber?.replace('+', '')}?text=${encodeURIComponent(predefinedMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const buttonVariants = {
    initial: { 
      scale: 0,
      opacity: 0 
    },
    animate: { 
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.6
      }
    },
    exit: { 
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: {
      rotate: 5,
      transition: {
        duration: 0.2
      }
    }
  };


  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-whatsapp"
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          whileHover="hover"
          whileTap="tap"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Main Button */}
          <motion.button
            onClick={handleWhatsAppClick}
            className="relative w-14 h-14 sm:w-16 sm:h-16 bg-success hover:bg-success/90 rounded-full shadow-lg flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-success/30 transition-all duration-300"
            aria-label="Contactar por WhatsApp"
            whileHover={{ 
              boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)" 
            }}
          >
            {/* Background Glass Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
            
            {/* WhatsApp Icon */}
            <motion.div
              variants={iconVariants}
              initial="initial"
              animate={isHovered ? "hover" : "initial"}
              className="relative z-10"
            >
              <Icon 
                name="MessageCircle" 
                size={24} 
                color="white" 
                strokeWidth={2}
                className="drop-shadow-sm"
              />
            </motion.div>
            
          </motion.button>

          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  transition: { delay: 0.2 }
                }}
                exit={{ 
                  opacity: 0, 
                  x: 10, 
                  scale: 0.8,
                  transition: { duration: 0.15 }
                }}
                className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap"
              >
                <div className="glass-strong px-4 py-2 rounded-xl border border-glass-border shadow-glass-medium">
                  <p className="text-sm font-medium text-foreground">
                    ¡Chatea con nosotros!
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Te respondemos al instante
                  </p>
                </div>
                {/* Tooltip Arrow */}
                <div className="absolute left-full top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-glass-strong border-r border-b border-glass-border" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;