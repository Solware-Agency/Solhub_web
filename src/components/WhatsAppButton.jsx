import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './AppIcon';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  // Predefined message in Spanish
  const predefinedMessage = "Hola! Me interesa conocer más sobre SolHub y cómo puede ayudar a transformar mi laboratorio médico. ¿Podrían proporcionarme más información?";
  
  // WhatsApp number from requirements
  const phoneNumber = "+584129974533";

  useEffect(() => {
    // Keep button always visible - removed scroll hide logic
    setIsVisible(true);
    
    // Pulso automático cada 5 segundos
    const pulseInterval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => {
        setIsPulsing(false);
      }, 1000); // Duración del pulso aumentada
    }, 5000); // Cada 5 segundos

    return () => clearInterval(pulseInterval);
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

  // Animación sutil de pulso - solo se ilumina y se apaga cada 5 segundos
  const subtlePulse = {
    boxShadow: [
      "0 0 0 0 rgba(65, 226, 184, 0)",
      "0 10px 25px rgba(65, 226, 184, 0.3)",
      "0 0 0 0 rgba(65, 226, 184, 0)"
    ],
      transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatDelay: 4.2, // 5 segundos total (0.8s animación + 4.2s pausa)
      ease: "easeInOut"
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
          {/* Main Button - Redondo con SVG */}
          <motion.button
            onClick={handleWhatsAppClick}
            className="relative w-16 h-16 sm:w-20 sm:h-20 bg-transparent hover:opacity-80 rounded-full flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all duration-300"
            aria-label="Contactar por WhatsApp"
            animate={{
              boxShadow: isPulsing && !isHovered 
                ? "0 0 0 3px rgba(65, 226, 184, 0.5), 0 15px 35px rgba(65, 226, 184, 0.4)"
                : "0 0 0 0 rgba(65, 226, 184, 0)",
              scale: isPulsing && !isHovered ? 1.05 : 1,
              transition: {
                duration: 1,
                ease: "easeInOut"
              }
            }}
            whileHover={{ 
              boxShadow: "0 10px 25px rgba(65, 226, 184, 0.3)",
              scale: 1.05
            }}
          >
            {/* Logo SVG */}
            <div className="relative z-10">
              <img 
                src="/assets/images/herosvgg.svg" 
                alt="SolHub Logo" 
                className="w-14 h-14 sm:w-[72px] sm:h-[72px] drop-shadow-lg"
                style={{ 
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
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
                    Escríbenos por WhatsApp
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