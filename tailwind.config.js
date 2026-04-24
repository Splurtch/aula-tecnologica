/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.35s ease-out',
        'slide-up': 'slideUp 0.35s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.15)' },
          '50%': { boxShadow: '0 0 35px rgba(59, 130, 246, 0.25), 0 0 60px rgba(59, 130, 246, 0.1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 25px rgba(59, 130, 246, 0.2), 0 0 50px rgba(59, 130, 246, 0.08)',
        'glow-violet': '0 0 25px rgba(139, 92, 246, 0.2), 0 0 50px rgba(139, 92, 246, 0.08)',
        'glow-cyan': '0 0 25px rgba(6, 182, 212, 0.2), 0 0 50px rgba(6, 182, 212, 0.08)',
        'cyber': '0 4px 20px rgba(15, 23, 42, 0.08)',
        'cyber-lg': '0 10px 40px rgba(15, 23, 42, 0.12)',
        'cyber-hover': '0 16px 50px rgba(15, 23, 42, 0.15)',
      },
      borderRadius: {
        'cyber': '2px',
      },
    },
  },
  plugins: [],
}