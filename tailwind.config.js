/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f5f7ff",
          100: "#eef1ff",
          200: "#dfe4ff",
          300: "#c9d1ff",
          400: "#a7b2ff",
          500: "#8a95ff",   // slate/indigo vibe
          600: "#6c78f7",
          700: "#515cda",
          800: "#3842b1",
          900: "#2e378f"
        },
      },
      boxShadow: {
        soft: "0 12px 45px -20px rgba(2,6,23,0.25)",
      }
    },
  },
  plugins: [],
};
