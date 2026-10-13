/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#07090F",
          surface: "#0E1220",
          surfaceHover: "#151B2E",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(255, 255, 255, 0.16)",
          text: "#F1F5F9",
          muted: "#94A3B8",
        },
        light: {
          bg: "#F6F7FB",
          surface: "#FFFFFF",
          surfaceHover: "#F1F5F9",
          border: "rgba(0, 0, 0, 0.08)",
          borderHover: "rgba(0, 0, 0, 0.16)",
          text: "#0F172A",
          muted: "#64748B",
        },
        brand: {
          blue: "#3B82F6",
          violet: "#8B5CF6",
          cyan: "#06B6D4",
          aws: "#FF9900",
          awsDark: "#E88B00",
          docker: "#2496ED",
          k8s: "#326CE5",
          terraform: "#844FBA",
          jenkins: "#D24939",
          linux: "#FCC624",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'orbit-slow': 'orbit 28s linear infinite',
        'orbit-reverse': 'orbitReverse 34s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marqueeReverse 30s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        orbitReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'radial-gradient-hero': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
