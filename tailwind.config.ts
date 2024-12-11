import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        waveGradient: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" }, // Smooth reset
        },
      },
      animation: {
        waveGradient: "waveGradient 15s ease-in-out infinite",
      },
      backgroundImage: {
        waveBlue: "linear-gradient(120deg, #007BFF, #0047AB, #00A6FF, #007BFF)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'big': '1600px',
      },
      container: {
        screens: {
          'big': '1600px',
          '2xl': '1400px',
          'xl': '1280px',
          'lg': '1024px',
          'md': '768px',
          'sm': '640px',
        },
        padding: '2rem',
        center: true,
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
