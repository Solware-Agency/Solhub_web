import { useCallback } from 'react';

const useActions = () => {
  const handleWhatsAppClick = useCallback((customMessage = '') => {
    const defaultMessage = "Hola! Me interesa conocer más sobre SolHub. ¿Podrían proporcionarme información?";
    const message = customMessage || defaultMessage;
    window.open(`https://wa.me/584129974533?text=${encodeURIComponent(message)}`, '_blank');
  }, []);

  const handleDemoClick = useCallback(() => {
    window.location.href = '/demo-experience';
  }, []);

  const handleContactClick = useCallback((page = '') => {
    const message = `Hola! Me interesa conocer más sobre SolHub ${page ? `(${page})` : ''}. ¿Podrían proporcionarme información?`;
    handleWhatsAppClick(message);
  }, [handleWhatsAppClick]);

  return {
    handleWhatsAppClick,
    handleDemoClick,
    handleContactClick
  };
};

export default useActions;