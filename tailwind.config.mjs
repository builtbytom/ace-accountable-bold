/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // High contrast black/white base
        'ink': '#000000',
        'paper': '#FFFFFF',
        
        // Neon accent colors
        'electric': '#00F5FF', // Cyan
        'punk': '#FF006E', // Hot pink
        'acid': '#CCFF00', // Lime
        'violet': '#8B00FF', // Electric purple
        
        // Dark mode variations
        'void': '#0A0A0A',
        'smoke': '#1A1A1A',
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'graffiti': ['Bebas Neue', 'Impact', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 2s infinite',
        'glitch-2': 'glitch-2 2.5s infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'cursor-blink': 'cursor-blink 1s infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'glitch-2': {
          '0%, 100%': { transform: 'translate(0) skew(0deg)' },
          '20%': { transform: 'translate(-4px, 0) skew(-2deg)' },
          '40%': { transform: 'translate(4px, 0) skew(2deg)' },
          '60%': { transform: 'translate(0) skew(-1deg)' },
        },
        'neon-pulse': {
          '0%, 100%': { 
            'box-shadow': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
            'opacity': '1'
          },
          '50%': { 
            'box-shadow': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
            'opacity': '0.8'
          },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'cursor-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
      boxShadow: {
        'brutal': '8px 8px 0 0 #000',
        'brutal-sm': '4px 4px 0 0 #000',
        'neon-pink': '0 0 20px #FF006E',
        'neon-cyan': '0 0 20px #00F5FF',
        'neon-lime': '0 0 20px #CCFF00',
      },
      backgroundImage: {
        'noise': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E")`,
      },
    },
  },
  plugins: [],
}