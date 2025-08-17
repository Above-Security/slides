/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Above Brand Colors - Soft Security Palette
        above: {
          // Pink/Rose - Empathy & Protection
          rose: {
            50:  "#FFF5F8",
            100: "#FFE8F0",
            200: "#FFE0EC",
            300: "#FFD1E3",
            400: "#FFC4D6",
            500: "#FFB5CA",
            600: "#FF9FB5",
            700: "#FF89A1",
            800: "#FF738C",
            900: "#FF5D78"
          },
          // Peach/Coral - Warmth & Trust
          peach: {
            50:  "#FFF8F5",
            100: "#FFEEE8",
            200: "#FFE0D4",
            300: "#FFD4C4",
            400: "#FFC8B3",
            500: "#FFBAA0",
            600: "#FFAB8D",
            700: "#FF9C7A",
            800: "#FF8D67",
            900: "#FF7E54"
          },
          // Powder Blue - Technology & Clarity
          blue: {
            50:  "#F8FBFF",
            100: "#F0F7FF",
            200: "#E6F3FF",
            300: "#D4E9FF",
            400: "#C2DFFF",
            500: "#B0D5FF",
            600: "#9ECBFF",
            700: "#8CC1FF",
            800: "#7AB7FF",
            900: "#68ADFF"
          },
          // Lavender - Innovation & Insight
          lavender: {
            50:  "#FAF8FF",
            100: "#F5F0FF",
            200: "#F0E6FF",
            300: "#E8D9FF",
            400: "#E0D4FF",
            500: "#D8C9FF",
            600: "#D0BEFF",
            700: "#C8B3FF",
            800: "#C0A8FF",
            900: "#B89DFF"
          },
          // Neutral base
          cream: "#FFFAF8",
          white: "#FFF5F0",
        },
        // Legacy brand colors (keeping for backward compatibility)
        brand: {
          50:  "#f5f7ff",
          100: "#eef1ff",
          200: "#dfe4ff",
          300: "#c9d1ff",
          400: "#a7b2ff",
          500: "#8a95ff",
          600: "#6c78f7",
          700: "#515cda",
          800: "#3842b1",
          900: "#2e378f"
        },
      },
      backgroundImage: {
        // Gradient definitions
        'above-gradient': `
          radial-gradient(ellipse at top left, rgba(255, 224, 236, 0.6), transparent 50%),
          radial-gradient(ellipse at bottom right, rgba(212, 233, 255, 0.5), transparent 50%),
          radial-gradient(circle at center, rgba(255, 212, 196, 0.4), transparent 60%),
          linear-gradient(135deg, #FFFAF8 0%, #FFF5F0 100%)
        `,
        'above-gradient-subtle': `
          radial-gradient(ellipse at top left, rgba(255, 224, 236, 0.3), transparent 50%),
          radial-gradient(ellipse at bottom right, rgba(212, 233, 255, 0.25), transparent 50%),
          radial-gradient(circle at center, rgba(255, 212, 196, 0.2), transparent 60%),
          linear-gradient(135deg, #FFFAF8 0%, #FFF5F0 100%)
        `,
        'above-gradient-light': `
          radial-gradient(ellipse at top left, rgba(255, 224, 236, 0.15), transparent 50%),
          radial-gradient(ellipse at bottom right, rgba(212, 233, 255, 0.12), transparent 50%),
          radial-gradient(circle at center, rgba(255, 212, 196, 0.1), transparent 60%),
          linear-gradient(135deg, #FFFFFF 0%, #FFFAF8 100%)
        `,
        // Grain texture (as data URI or reference to asset)
        'noise': "url('/noise.svg')",
      },
      boxShadow: {
        // Soft shadows for the empathetic security approach
        soft: "0 12px 45px -20px rgba(2,6,23,0.25)",
        'soft-sm': "0 4px 15px -8px rgba(2,6,23,0.15)",
        'soft-lg': "0 20px 60px -30px rgba(2,6,23,0.30)",
        'soft-xl': "0 30px 80px -40px rgba(2,6,23,0.35)",
        // Colored soft shadows
        'soft-rose': "0 12px 45px -20px rgba(255, 197, 214, 0.45)",
        'soft-peach': "0 12px 45px -20px rgba(255, 186, 160, 0.45)",
        'soft-blue': "0 12px 45px -20px rgba(212, 233, 255, 0.45)",
        'soft-lavender': "0 12px 45px -20px rgba(224, 212, 255, 0.45)",
      },
      animation: {
        // Soft, organic animations
        'gradient-shift': 'gradientShift 20s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { 
            'background-position': '0% 50%',
            'background-size': '200% 200%'
          },
          '50%': { 
            'background-position': '100% 50%',
            'background-size': '200% 200%'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      blur: {
        // Additional blur values for organic effects
        '2xs': '1px',
        'xs': '2px',
      },
      opacity: {
        // Fine-tuned opacity values for layering
        '3': '0.03',
        '4': '0.04',
        '5': '0.05',
        '15': '0.15',
      },
    },
  },
  plugins: [],
};
