import { memo, useCallback, useState, useEffect } from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const WhatsAppButtonSolware = memo(() => {
  const [isAutoHover, setIsAutoHover] = useState(false);
  const [isAutoHoverExit, setIsAutoHoverExit] = useState(false);
  const [isManualHover, setIsManualHover] = useState(false);

  const openWhatsApp = useCallback(() => {
    const message = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
    window.open(`https://wa.me/584129974533?text=${message}`, '_blank');
  }, []);

  const openInstagram = useCallback(() => {
    window.open('https://instagram.com/solware_', '_blank');
  }, []);

  const openLinkedIn = useCallback(() => {
    window.open('https://www.linkedin.com/company/agencia-solware', '_blank');
  }, []);

  // Auto hover effect cada 10 segundos
  useEffect(() => {
    if (!isManualHover) {
      const autoHoverInterval = setInterval(() => {
        setIsAutoHover(true);
        // Duración de la animación: 1.6 segundos
        setTimeout(() => {
          setIsAutoHover(false);
          setIsAutoHoverExit(true);
          // Tiempo para las animaciones de salida (1.6 segundos)
          setTimeout(() => {
            setIsAutoHoverExit(false);
          }, 1600);
        }, 1600);
      }, 7000); // Cada 7 segundos

      return () => clearInterval(autoHoverInterval);
    }
  }, [isManualHover]);

  // Handlers para hover manual
  const handleMouseEnter = useCallback(() => {
    setIsManualHover(true);
    setIsAutoHover(false); // Parar autohover
    setIsAutoHoverExit(false); // Limpiar estado de salida
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsManualHover(false);
    setIsAutoHoverExit(false); // Limpiar estado de salida
    // El autohover se reanuda automáticamente por el useEffect
  }, []);

  return (
    <>
      <style>{`
        /* DESKTOP STYLES (Por defecto - hacia la derecha) */
        .matryoshka-group-solware:hover .instagram-btn-solware,
        .matryoshka-group-solware.auto-hover .instagram-btn-solware {
          animation: matryoshka-pop-ig-solware 0.8s ease-out 0.1s forwards !important;
          pointer-events: auto !important;
          opacity: 1 !important;
        }
        .matryoshka-group-solware:hover .linkedin-btn-solware,
        .matryoshka-group-solware.auto-hover .linkedin-btn-solware {
          animation: matryoshka-pop-ln-solware 0.8s ease-out 0.2s forwards !important;
          pointer-events: auto !important;
          opacity: 1 !important;
        }

        .instagram-btn-solware:hover {
          transform: translateY(-50%) translateX(56px) scale(1.1) !important;
        }

        .linkedin-btn-solware:hover {
          transform: translateY(-50%) translateX(96px) scale(1.1) !important;
        }

        .matryoshka-group-solware:not(:hover):not(.auto-hover):not(.auto-hover-exit) .instagram-btn-solware {
          animation: none !important;
        }
        .matryoshka-group-solware:not(:hover):not(.auto-hover):not(.auto-hover-exit) .linkedin-btn-solware {
          animation: none !important;
        }

        /* Animaciones de salida específicas para autohover */
        .matryoshka-group-solware.auto-hover-exit .instagram-btn-solware {
          animation: matryoshka-stay-ig-solware 1.1s ease-out forwards, matryoshka-exit-ig-solware 0.5s ease-in 1.1s forwards;
        }
        .matryoshka-group-solware.auto-hover-exit .linkedin-btn-solware {
          animation: matryoshka-stay-ln-solware 1s ease-out forwards, matryoshka-exit-ln-solware 0.5s ease-in 1s forwards;
        }

        .instagram-btn-solware {
          --final-x: 56px;
          --final-y: 0px;
          will-change: transform, opacity;
        }
        .linkedin-btn-solware {
          --final-x: 96px;
          --final-y: 0px;
          will-change: transform, opacity;
        }
        .whatsapp-btn-solware {
          will-change: transform;
        }

        /* DESKTOP ANIMATIONS (hacia la derecha) */
        @keyframes matryoshka-pop-ig-solware {
          0% {
            transform: translateY(-50%) translateX(51px) scale(0) rotate(-180deg);
            opacity: 0;
          }
          60% {
            transform: translateY(-50%) translateX(60px) scale(1.15) rotate(-10deg);
            opacity: 0.9;
          }
          100% {
            transform: translateY(-50%) translateX(56px) scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes matryoshka-pop-ln-solware {
          0% {
            transform: translateY(-50%) translateX(51px) scale(0) rotate(-270deg);
            opacity: 0;
          }
          60% {
            transform: translateY(-50%) translateX(100px) scale(1.2) rotate(-15deg);
            opacity: 0.9;
          }
          100% {
            transform: translateY(-50%) translateX(96px) scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes matryoshka-stay-ig-solware {
          0%, 100% {
            transform: translateY(-50%) translateX(56px) scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes matryoshka-stay-ln-solware {
          0%, 100% {
            transform: translateY(-50%) translateX(96px) scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes matryoshka-exit-ig-solware {
          0% {
            transform: translateY(-50%) translateX(56px) scale(1) rotate(0deg);
            opacity: 1;
          }
          40% {
            transform: translateY(-50%) translateX(60px) scale(1.15) rotate(10deg);
            opacity: 0.9;
          }
          100% {
            transform: translateY(-50%) translateX(51px) scale(0) rotate(180deg);
            opacity: 0;
          }
        }

        @keyframes matryoshka-exit-ln-solware {
          0% {
            transform: translateY(-50%) translateX(96px) scale(1) rotate(0deg);
            opacity: 1;
          }
          40% {
            transform: translateY(-50%) translateX(100px) scale(1.2) rotate(15deg);
            opacity: 0.9;
          }
          100% {
            transform: translateY(-50%) translateX(51px) scale(0) rotate(270deg);
            opacity: 0;
          }
        }

        /* MOBILE STYLES - Iconos hacia arriba */
        @media (max-width: 768px) {
          /* Área invisible ajustada para móvil - expandida hacia arriba */
          .matryoshka-group-solware .hover-area-solware {
            top: -130px !important;
            right: -5px !important;
            bottom: -5px !important;
            left: -5px !important;
          }

          /* Reemplazar animaciones desktop en móvil - Instagram arriba */
          .matryoshka-group-solware:hover .instagram-btn-solware,
          .matryoshka-group-solware.auto-hover .instagram-btn-solware {
            animation: matryoshka-pop-ig-solware-mobile 0.8s ease-out 0.1s forwards !important;
            pointer-events: auto !important;
          }

          /* Reemplazar animaciones desktop en móvil - LinkedIn arriba */
          .matryoshka-group-solware:hover .linkedin-btn-solware,
          .matryoshka-group-solware.auto-hover .linkedin-btn-solware {
            animation: matryoshka-pop-ln-solware-mobile 0.8s ease-out 0.2s forwards !important;
            pointer-events: auto !important;
          }

          /* Hover states para móvil */
          .instagram-btn-solware:hover {
            transform: translateX(-50%) translateY(-56px) scale(1.1) !important;
          }

          .linkedin-btn-solware:hover {
            transform: translateX(-50%) translateY(-88px) scale(1.1) !important;
          }

          /* Animaciones de permanencia para móvil */
          .matryoshka-group-solware:not(:hover):not(.auto-hover):not(.auto-hover-exit) .instagram-btn-solware {
            animation: matryoshka-stay-ig-solware-mobile 1.1s ease-out forwards, matryoshka-exit-ig-solware-mobile 0.5s ease-in 1.1s forwards !important;
          }
          .matryoshka-group-solware:not(:hover):not(.auto-hover):not(.auto-hover-exit) .linkedin-btn-solware {
            animation: matryoshka-stay-ln-solware-mobile 1s ease-out forwards, matryoshka-exit-ln-solware-mobile 0.5s ease-in 1s forwards !important;
          }

          /* Animaciones de salida específicas para autohover en móvil */
          .matryoshka-group-solware.auto-hover-exit .instagram-btn-solware {
            animation: matryoshka-stay-ig-solware-mobile 1.1s ease-out forwards, matryoshka-exit-ig-solware-mobile 0.5s ease-in 1.1s forwards !important;
          }
          .matryoshka-group-solware.auto-hover-exit .linkedin-btn-solware {
            animation: matryoshka-stay-ln-solware-mobile 1s ease-out forwards, matryoshka-exit-ln-solware-mobile 0.5s ease-in 1s forwards !important;
          }

          /* Variables CSS para móvil */
          .instagram-btn-solware {
            --final-x: 0px;
            --final-y: -56px;
          }
          .linkedin-btn-solware {
            --final-x: 0px;
            --final-y: -88px;
          }

          /* MOBILE ANIMATIONS - hacia arriba */
          @keyframes matryoshka-pop-ig-solware-mobile {
            0% {
              transform: translateX(-50%) translateY(-24px) scale(0) rotate(-180deg);
              opacity: 0;
            }
            60% {
              transform: translateX(-50%) translateY(-60px) scale(1.15) rotate(-10deg);
              opacity: 0.9;
            }
            100% {
              transform: translateX(-50%) translateY(-56px) scale(1) rotate(0deg);
              opacity: 1;
            }
          }

          @keyframes matryoshka-pop-ln-solware-mobile {
            0% {
              transform: translateX(-50%) translateY(-24px) scale(0) rotate(-270deg);
              opacity: 0;
            }
            60% {
              transform: translateX(-50%) translateY(-92px) scale(1.2) rotate(-15deg);
              opacity: 0.9;
            }
            100% {
              transform: translateX(-50%) translateY(-88px) scale(1) rotate(0deg);
              opacity: 1;
            }
          }

          @keyframes matryoshka-stay-ig-solware-mobile {
            0%, 100% {
              transform: translateX(-50%) translateY(-56px) scale(1) rotate(0deg);
              opacity: 1;
            }
          }

          @keyframes matryoshka-stay-ln-solware-mobile {
            0%, 100% {
              transform: translateX(-50%) translateY(-88px) scale(1) rotate(0deg);
              opacity: 1;
            }
          }

          @keyframes matryoshka-exit-ig-solware-mobile {
            0% {
              transform: translateX(-50%) translateY(-56px) scale(1) rotate(0deg);
              opacity: 1;
            }
            40% {
              transform: translateX(-50%) translateY(-60px) scale(1.15) rotate(10deg);
              opacity: 0.9;
            }
            100% {
              transform: translateX(-50%) translateY(-24px) scale(0) rotate(180deg);
              opacity: 0;
            }
          }

          @keyframes matryoshka-exit-ln-solware-mobile {
            0% {
              transform: translateX(-50%) translateY(-88px) scale(1) rotate(0deg);
              opacity: 1;
            }
            40% {
              transform: translateX(-50%) translateY(-92px) scale(1.2) rotate(15deg);
              opacity: 0.9;
            }
            100% {
              transform: translateX(-50%) translateY(-24px) scale(0) rotate(270deg);
              opacity: 0;
            }
          }
        }
      `}</style>

      <div 
        className={`fixed bottom-5 left-5 z-whatsapp matryoshka-group-solware ${isAutoHover ? 'auto-hover' : ''} ${isAutoHoverExit ? 'auto-hover-exit' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Área invisible para mantener hover - ajustada según dispositivo */}
        <div className="hover-area-solware absolute -top-5 -bottom-5 -left-5 -right-32 pointer-events-auto"></div>
        
        {/* Botón principal de WhatsApp */}
        <button
          onClick={openWhatsApp}
          className="whatsapp-btn-solware relative w-[44px] h-[44px] md:w-[48px] md:h-[48px] bg-[#25D366] rounded-full 
            flex items-center justify-center shadow-lg hover:shadow-xl 
            transform hover:scale-110 transition-all duration-300 
            hover:bg-[#22c35e] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2
            z-30 will-change-transform"
          aria-label="Chatear por WhatsApp"
        >
          <svg 
            className="w-5 h-5 md:w-6 md:h-6 text-white" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.787"/>
          </svg>
        </button>

        {/* Botón de Instagram - Primera matryoshka */}
        <button
          onClick={openInstagram}
          className="instagram-btn-solware absolute top-1/2 left-1/2 w-[32px] h-[32px] md:w-[36px] md:h-[36px] bg-gradient-to-r from-purple-500 to-pink-500 
            rounded-full flex items-center justify-center shadow-lg
            transform -translate-y-1/2 -translate-x-1/2 translate-x-16 scale-0 opacity-0 z-20
            hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-out
            md:left-0 md:translate-x-16 md:-translate-x-0 will-change-transform"
          aria-label="Seguir en Instagram"
        >
          <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
        </button>

        {/* Botón de LinkedIn - Segunda matryoshka */}
        <button
          onClick={openLinkedIn}
          className="linkedin-btn-solware absolute top-1/2 left-1/2 w-[28px] h-[28px] md:w-[30px] md:h-[30px] bg-[#0077B5] 
            rounded-full flex items-center justify-center shadow-lg
            transform -translate-y-1/2 -translate-x-1/2 translate-x-16 scale-0 opacity-0 z-10
            hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-out
            md:left-0 md:translate-x-16 md:-translate-x-0 will-change-transform"
          aria-label="Conectar en LinkedIn"
        >
          <Linkedin className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" />
        </button>
      </div>
    </>
  );
});

WhatsAppButtonSolware.displayName = 'WhatsAppButtonSolware';

export default WhatsAppButtonSolware;

