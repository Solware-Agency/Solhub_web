/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.25rem", // Further reduced for better proportions
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", // white/10
        input: "var(--color-input)", // gray-900
        ring: "var(--color-ring)", // violet-500
        background: "var(--color-background)", // gray-950
        foreground: "var(--color-foreground)", // gray-200
        primary: {
          DEFAULT: "var(--color-primary)", // violet-500
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // cyan-400
          foreground: "var(--color-secondary-foreground)", // gray-950
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // red-500
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // gray-800
          foreground: "var(--color-muted-foreground)", // gray-400
        },
        accent: {
          DEFAULT: "var(--color-accent)", // pink-500
          foreground: "var(--color-accent-foreground)", // white
        },
        popover: {
          DEFAULT: "var(--color-popover)", // gray-900
          foreground: "var(--color-popover-foreground)", // gray-200
        },
        card: {
          DEFAULT: "var(--color-card)", // gray-900
          foreground: "var(--color-card-foreground)", // gray-200
        },
        success: {
          DEFAULT: "var(--color-success)", // emerald-500
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // amber-500
          foreground: "var(--color-warning-foreground)", // white
        },
        error: {
          DEFAULT: "var(--color-error)", // red-500
          foreground: "var(--color-error-foreground)", // white
        },
        // Venezuelan Context Colors
        venezuela: {
          yellow: "var(--color-venezuela-yellow)", // yellow-400
          red: "var(--color-venezuela-red)", // red-700
          blue: "var(--color-venezuela-blue)", // blue-900
        },
        // Liquid Glass Colors
        glass: {
          light: "rgba(255, 255, 255, 0.05)",
          medium: "rgba(255, 255, 255, 0.08)",
          strong: "rgba(255, 255, 255, 0.12)",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)", // 14.4px
        md: "var(--radius-md)", // 10.8px
        sm: "var(--radius-sm)", // 7.2px
        xl: "var(--radius-xl)", // 18px
        "2xl": "1.125rem",
        "3xl": "1.35rem",
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      fontSize: {
        'medical-xs': ['0.5rem', { lineHeight: '0.75rem' }], // 8px
        'medical-sm': ['0.625rem', { lineHeight: '0.875rem' }], // 10px
        'medical-base': ['0.75rem', { lineHeight: '1.125rem' }], // 12px
        'medical-lg': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        'medical-xl': ['1rem', { lineHeight: '1.375rem' }], // 16px
        'medical-2xl': ['1.25rem', { lineHeight: '1.5rem' }], // 20px
        'medical-3xl': ['1.5rem', { lineHeight: '1.75rem' }], // 24px
        'medical-4xl': ['1.875rem', { lineHeight: '2rem' }], // 30px
        'medical-5xl': ['2.25rem', { lineHeight: '1.2' }], // 36px
      },
      spacing: {
        'medical-xs': 'var(--spacing-xs)', // 8px
        'medical-sm': 'var(--spacing-sm)', // 12px
        'medical-md': 'var(--spacing-md)', // 20px
        'medical-lg': 'var(--spacing-lg)', // 32px
        'medical-xl': 'var(--spacing-xl)', // 48px
      },
      boxShadow: {
        'medical-sm': 'var(--shadow-sm)',
        'medical-md': 'var(--shadow-md)',
        'medical-lg': 'var(--shadow-lg)',
        'medical-xl': 'var(--shadow-xl)',
        'medical-glow': '0 0 20px rgba(65, 226, 184, 0.3)',
        'medical-glow-accent': '0 0 20px rgba(76, 135, 255, 0.3)',
        'glass-light': '0 4px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
        'glass-medium': '0 8px 32px rgba(0, 0, 0, 0.16), 0 4px 16px rgba(0, 0, 0, 0.12)',
        'glass-strong': '0 16px 48px rgba(0, 0, 0, 0.24), 0 8px 24px rgba(0, 0, 0, 0.16)',
        'glass-hover': '0 12px 36px rgba(0, 0, 0, 0.18), 0 6px 18px rgba(0, 0, 0, 0.14)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.3s ease-out forwards',
        'slide-in': 'slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-medical': 'pulseMedical 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
        'glass-shimmer': 'glassShimmer 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseMedical: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glassShimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      backgroundImage: {
        'gradient-medical': 'var(--gradient-medical)',
        'gradient-medical-subtle': 'linear-gradient(135deg, rgba(65, 226, 184, 0.1) 0%, rgba(76, 135, 255, 0.1) 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-liquid': 'linear-gradient(135deg, rgba(65, 226, 184, 0.15) 0%, rgba(76, 135, 255, 0.15) 50%, rgba(65, 226, 184, 0.15) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      backdropBlur: {
        'medical': '10px',
        'medical-strong': '20px',
        'glass': '16px',
        'glass-strong': '24px',
        'glass-ultra': '32px',
      },
      transitionTimingFunction: {
        'medical': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'medical-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'glass': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        'medical-fast': '150ms',
        'medical-normal': '300ms',
        'medical-slow': '800ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      zIndex: {
        // Centralized z-index system (Layer Map)
        'base': '0',
        'behind': '-1',
        'content': '1',
        'float': '10',
        'sticky': '20',
        'navbar': '30',
        'header': '40',
        'dropdown': '50',
        'sidebar': '60',
        'overlay': '70',
        'modal-backdrop': '80',
        'modal': '90',
        'popover': '95',
        'toast': '100',
        'tooltip': '110',
        'whatsapp': '120',
        'debug': '999',
        'max': '9999',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}