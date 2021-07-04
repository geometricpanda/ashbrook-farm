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
          '--viewport-tablet': '(width > 48em)'
        }
      }]
    }
  }
};
