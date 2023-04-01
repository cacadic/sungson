/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "global-accent": "var(--e-global-color-accent)",
        "global-secondary": "var(--e-global-color-secondary)",
        "global-5174952": "var(--e-global-color-5174952)",
      },
    },
    fontFamily: {
      hero: ["hero"],
    },
  },
  plugins: [],
};
