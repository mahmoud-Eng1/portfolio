import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#42b0d1" ,
        secandery: "#67dbda",
      },
      keyframes: {
        moveTop: {
          "0%": { transform: "translatey(0)" },
          "50%": { transform: "translatey(10px)" },
          "100%": {transform: "trnslatey(0)"},
        },
      },
      animation: {
        moveTop: "moveTop 2s ease-in-out infinite",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2x1": "1400",
      }
    },
  },
  plugins: [],
} satisfies Config;
