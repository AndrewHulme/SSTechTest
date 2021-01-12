module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
};
