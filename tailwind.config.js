/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#050816",
          soft: "#0A0F24",
          card: "#0D1329",
          light: "#F7F8FC",
          "light-card": "#FFFFFF",
        },
        accent: {
          purple: "#8B5CF6",
          blue: "#3B82F6",
          violet: "#6D28D9",
        },
        ink: {
          DEFAULT: "#E9EBF5",
          muted: "#9AA1C0",
          dim: "#6B7290",
        },
      },
      fontFamily: {
        display: ["'Manrope'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(139, 92, 246, 0.45)",
        "glow-sm": "0 0 20px -4px rgba(139, 92, 246, 0.35)",
        card: "0 4px 24px -4px rgba(0,0,0,0.4)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
        "gradient-radial-purple": "radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0) 70%)",
        "gradient-radial-blue": "radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(59,130,246,0) 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.8s ease-out both",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
      },
    },
  },
  plugins: [],
};
