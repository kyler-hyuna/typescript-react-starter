module.exports = {
  components: 'src/components/**/[A-Z]*.{ts,tsx}',
  webpackConfig: require('./webpack.dev.js'),
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
}
