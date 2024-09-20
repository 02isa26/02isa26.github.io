/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    "postcss-nested": {},
    "@csstools/postcss-minify": {},
  },
};

export default config;
