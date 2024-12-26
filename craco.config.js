const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@internal_components': path.resolve(
        __dirname,
        'src/internal_components'
      ),
      '@fonts': path.resolve(__dirname, 'src/fonts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
}
