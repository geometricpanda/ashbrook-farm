module.exports = {
  plugins: {
    'postcss-preset-env': {
      features: {
        'custom-properties': false
      }
    },
    'postcss-custom-media': {
      importFrom: [{
        customMedia: {
          '--viewport-md': '(width >= 48em)',
          '--viewport-lg': '(width >= 64em)',
          '--viewport-xl': '(width >= 80em)',
        }
      }]
    }
  }
};
