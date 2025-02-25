/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', "Arial", "sans-serif"],
        trap: ["PNA Noeva", "sans-serif"],
      },
      backgroundImagee: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
      },
      gradientColorStops: {
        "custom-blue": "#1e3a8a",
        "custom-green": "#10b981",
        "custom-yellow": "#fbbf24",
      },
    },
  },
  plugins: [],
};
