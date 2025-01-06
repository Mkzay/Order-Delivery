/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "#FC8A06",
        accent: "#03081F",
      },
      width: {
        40: "9.6rem",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
};
