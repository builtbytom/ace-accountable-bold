/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Professional modern palette
        'midnight': '#0F172A', // Deep blue-black
        'slate': '#334155',
        'pearl': '#FAFBFC',
        
        // Accent colors - sophisticated
        'teal': '#0891B2', // Professional teal
        'coral': '#FB7185', // Warm coral
        'amber': '#F59E0B', // Golden accent
        'ocean': '#0EA5E9', // Bright blue
        
        // Neutral grays
        'ash': '#64748B',
        'fog': '#E2E8F0',
      },
      fontFamily: {
        'display': ['Poppins', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'fade-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'modern': '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
        'modern-lg': '0 20px 40px -15px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 30px rgba(8, 145, 178, 0.3)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': `url("data:image/svg+xml,%3Csvg width='1200' height='800' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230891B2;stop-opacity:0.05' /%3E%3Cstop offset='100%25' style='stop-color:%23FB7185;stop-opacity:0.05' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23a)' /%3E%3C/svg%3E")`,
      },
    },
  },
  plugins: [],
}