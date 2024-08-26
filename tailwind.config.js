module.exports = {
  theme: {
    extend: {
      colors: {
        vargrey100: "#F8FAFB",
        vargrey200: "#E2E6E9",
      },
    },
  },
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  plugins: [
    require("tw-elements/plugin.cjs", "flowbite/plugin", "tailwind-scrollbar-hide"),
  ],
  darkMode: "class",
};
