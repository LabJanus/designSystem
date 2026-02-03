// tailwind.config.js
module.exports = {
  content: [
    "./public/**/*.html",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx,css}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
          mono: ['var(--default-mono-font-family)']
      },
      colors: {
        primary: "#38BDF8",
        primaryDark: "#0EA5E9",
        slateBg: "#F8FAFC",
        colorText: "#0f172a",
        muted: "#64748b"
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "12px",
        lg: "20px"
      }
    }
  },
    
    module.exports = {
      theme: {
        container: {
          center: true,
          padding: {
            DEFAULT: '1rem',
            sm: '1.5rem',
            lg: '2rem',
          },
        },
        // ...mevcut extend
      },
      // content, plugins vb.
    }

    
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};

