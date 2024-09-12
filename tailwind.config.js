/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
        },
      },
      textColor: {
        palette: {
          base: "var(--color-text-base)",
          mute: "var(--color-text-muted)",
          side: "var(--color-text-side)",
        },
      },
      backgroundColor: {
        palette: {
          fill: "var(--color-bg)",
          card: "var(--color-bg-side)",
          dark: "var(--color-bg-dark)",
          // digitalCategory: "var(--digital-category-bgc)",
          // fashionCategory: "var(--fashion-category-bgc)",
          // beautyCategory: "var( --beauty-category-bgc)",
          // sportCategory: "var(--sport-category-bgc)",
          // houseCategory: "var(--house-category-bgc)",
          // toyCategory: "var(--toy-category-bgc)",
          // stationeryCategory: "var(--stationery-category-bgc)",
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },

  },

  plugins: [],
}