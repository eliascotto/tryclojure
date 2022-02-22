const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "resources/public/*.html",
    "resources/public/js/cljs-runtime/*.js",
    "resources/public/js/app.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
