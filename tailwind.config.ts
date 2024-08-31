import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#334155', // Blue
        secondary: '#6366f1', // Indigo
        accent: '#f59e0b', // Amber
        background: '#f3f4f6', // Light gray
        text: '#1f2937', // Dark gray
      },
    },
  },
  plugins: [],
};
export default config;
