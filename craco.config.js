const path = require('path')

module.exports = {
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
  },
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@AntDesign': path.resolve(__dirname, 'src/components/AntDesign'),
      '@SessionStorage': path.resolve(__dirname, 'src/SessionStorage'),
    },
  },
}
