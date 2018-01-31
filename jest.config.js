const path = require('path')

module.exports = {
  transform: {
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/fileMock.js',
    '@components': path.resolve(__dirname, 'src/components'),
    '@actions': path.resolve(__dirname, 'src/actions'),
    '@constants': path.resolve(__dirname, 'src/constants'),
    '@reducers': path.resolve(__dirname, 'src/reducers'),
    '@types': path.resolve(__dirname, 'src/types'),
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  setupFiles: ['<rootDir>/jest/setup.js'],
}
