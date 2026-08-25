/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    colors: {
      // Primary Brand (Deep Royal Blue - DICDL style)
      'primary': {
        '50': '#eef4ff',
        '100': '#d9e6ff',
        '200': '#bcd3ff',
        '300': '#8fb7ff',
        '400': '#5f94ff',
        '500': '#2f6fff',
        '600': '#1f5ae6',
        '700': '#1a4bcc',
        '800': '#163fa8',
        '900': '#0f2d78',
      },

      // Secondary (Luxury Dark Blue)
      'secondary': {
        '50': '#f3f6fb',
        '100': '#e3ebf6',
        '200': '#c7d7ec',
        '300': '#9fb7db',
        '400': '#6f91c5',
        '500': '#4b73b2',
        '600': '#355a92',
        '700': '#2b4876',
        '800': '#233b61',
        '900': '#1b2c47',
      },

      // Luxury Gold Accent (Real Estate Premium)
      'accent': {
        '50': '#fffbeb',
        '100': '#fef3c7',
        '200': '#fde68a',
        '300': '#fcd34d',
        '400': '#fbbf24',
        '500': '#d4af37', // Luxury gold
        '600': '#b8962f',
        '700': '#9c7d26',
        '800': '#7f641e',
        '900': '#5e4a16',
      },

      // Neutral UI colors
      'neutral': {
        '50': '#f9fafb',
        '100': '#f3f4f6',
        '200': '#e5e7eb',
        '300': '#d1d5db',
        '400': '#9ca3af',
        '500': '#6b7280',
        '600': '#4b5563',
        '700': '#374151',
        '800': '#1f2937',
        '900': '#111827',
      },

      // Supporting Blue
      'blue': {
        '50': '#eff6ff',
        '100': '#dbeafe',
        '200': '#bfdbfe',
        '300': '#93c5fd',
        '400': '#60a5fa',
        '500': '#3b82f6',
        '600': '#2563eb',
        '700': '#1d4ed8',
        '800': '#1e40af',
        '900': '#1e3a8a',
      },

      // Branding
      'villa-gold': '#d4af37',
      'villa-primary': '#0f2d78',
    },

    fontFamily: {
      'sans': ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      'serif': ['Playfair Display', 'Georgia', 'serif'],
      'condor': ['Playfair Display', 'Georgia', 'serif'],
    },

    textShadow: {
      DEFAULT: '0 2px 4px rgba(0,0,0,0.5)',
      lg: '0 4px 12px rgba(0,0,0,0.6)',
    },

    animation: {
      'scale-in': 'scaleIn 0.5s ease-out',
      'fade-in': 'fadeIn 1s ease-in-out',
      'fade-in-left': 'slideInLeft 0.8s ease-in-out',
      'fade-in-right': 'slideInRight 0.8s ease-in-out',
      'slide-up': 'slideUp 0.8s ease-in-out',
      'loading-bar': 'loadingBar 3s ease-in-out',
      'bounce-slow': 'bounce 3s infinite',
      'pulse-slow': 'pulse 3s ease-in-out infinite',
      'shimmer': 'shimmer 2s infinite',
      'glow': 'glow 2s ease-in-out infinite',
      'float': 'float 6s ease-in-out infinite',
      'slide-in-down': 'slideInDown 0.6s ease-out',
      'slide-in-up': 'slideInUp 0.6s ease-out',
      'rotate-in': 'rotateIn 0.6s ease-out',
    },

    keyframes: {
      scaleIn: {
        '0%': { transform: 'scale(0.9)', opacity: '0' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      loadingBar: {
        '0%': { width: '0%' },
        '100%': { width: '100%' },
      },
      slideInLeft: {
        '0%': { transform: 'translateX(-50px)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
      slideInRight: {
        '0%': { transform: 'translateX(50px)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
      slideUp: {
        '0%': { transform: 'translateY(20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      slideInDown: {
        '0%': { transform: 'translateY(-20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      slideInUp: {
        '0%': { transform: 'translateY(20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      rotateIn: {
        '0%': { transform: 'rotate(-10deg) scale(0.9)', opacity: '0' },
        '100%': { transform: 'rotate(0) scale(1)', opacity: '1' },
      },
      shimmer: {
        '0%': { backgroundPosition: '-1000px 0' },
        '100%': { backgroundPosition: '1000px 0' },
      },
      glow: {
        '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
        '50%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' },
      },
      float: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-20px)' },
      },
    }
  },
},
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        },
        '.contain-strict': {
          contain: 'strict',
        },
        '.contain-content': {
          contain: 'content',
        },
        '.contain-size': {
          contain: 'size',
        },
        '.contain-layout': {
          contain: 'layout',
        },
        '.contain-style': {
          contain: 'style',
        },
        '.contain-paint': {
          contain: 'paint',
        },
      };
      addUtilities(newUtilities);
    },
  ],
  safelist: [
    // Safelist common classes that might be generated dynamically
    /bg-(primary|secondary|accent)-(50|100|200|300|400|500|600|700|800|900)/,
    /text-(primary|secondary|accent)-(50|100|200|300|400|500|600|700|800|900)/,
    /border-(primary|secondary|accent)-(50|100|200|300|400|500|600|700|800|900)/,
    /hover:bg-(primary|secondary|accent)-(50|100|200|300|400|500|600|700|800|900)/,
    /animate-(fade-in|slide-up|scale-in|fade-in-left|fade-in-right)/,
    /btn-(primary|secondary|accent|outline)/,
    /gradient-(primary|secondary|accent)-(light|dark)?/,
  ],
}