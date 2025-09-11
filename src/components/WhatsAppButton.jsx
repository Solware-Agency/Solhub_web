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
      rotate: -180,
      opacity: 0 
    },
    animate: { 
      scale: 1,
      rotate: 0,
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
      rotate: 180,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        rotate: {
          repeat: Infinity,
          duration: 0.5
        },
        scale: {
          duration: 0.2
        }
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
      rotate: [0, 15, -15, 0],
      transition: {
        repeat: Infinity,
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.7 },
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.7, 0, 0.7],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-whatsapp"
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          whileHover="hover"
          whileTap="tap"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Pulse Ring Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-success"
            variants={pulseVariants}
            initial="initial"
            animate="animate"
          />
          
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-success blur-lg opacity-40" />
          
          {/* Main Button */}
          <motion.button
            onClick={handleWhatsAppClick}
            className="relative w-14 h-14 md:w-16 md:h-16 bg-success hover:bg-success/90 rounded-full shadow-glass-strong flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-success/30 transition-all duration-300"
            aria-label="Contactar por WhatsApp"
            whileHover={{ 
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)" 
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
            
            {/* Hover Shimmer Effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={{
                  translateX: isHovered ? ['100%', '100%'] : ['-100%', '100%']
                }}
                transition={{
                  duration: isHovered ? 0 : 2,
                  repeat: isHovered ? 0 : Infinity,
                  repeatDelay: 3
                }}
              />
            </div>
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