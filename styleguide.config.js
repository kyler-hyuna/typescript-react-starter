const color = {
  primary: '#4E565E',
  danger: '#e22d44',
  info: '#D8664E',
}

module.exports = {
  components: 'src/components/**/[A-Z]*.{ts,tsx}',
  webpackConfig: require('./webpack.dev.js'),
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
  theme: {
    color: {
      link: color.info,
      linkHover: 'rgb(70, 69, 171)',
      sidebarBackground: color.primary,
      errorBackground: color.danger,
    },
  },
  styles: {
    StyleGuide: {
      root: {
        'text-rendering': 'optimizeLegibility',
        '-moz-osx-font-smoothing': 'grayscale',
        '-webkit-font-smoothing': 'antialiased',
      },
      sidebar: {
        '&::-webkit-scrollbar': {
          width: 10,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: color.primary,
        },
        '&::-webkit-scrollbar-thumb': {
          border: `3px solid ${color.primary}`,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          backgroundColor: '#fff',
          minHeight: 40,
          '&:active': {
            borderLeftWidth: 2,
            borderRightWidth: 2,
          },
        },
      },
      content: {},
      logo: {
        border: 'none',
        paddingBottom: 0,
      },
    },
    SectionHeading: {
      heading: {
        textDecoration: 'none',
        '&::after': {
          content: '"#"',
          display: 'none',
          marginLeft: 6,
          color: 'rgba(0, 0, 0, 0.3)',
          fontWeight: '600',
        },
        '&:hover': {
          textDecoration: 'none',
        },
        '&:hover::after': {
          display: 'inline-block',
        },
      },
    },
    Logo: {
      logo: {
        color: '#fff',
        fontSize: 20,
      },
    },
    ComponentsList: {
      list: {
        '& ul': {
          paddingLeft: 0,
        },
      },
      item: {
        '& a': {
          color: 'rgba(255, 255, 255, 0.9) !important',
          fontWeight: 500,
          '&:hover': {
            textDecoration: 'underline',
            color: '#fff !important',
          },
        },
      },
      heading: {
        fontSize: '18px !important',
        fontWeight: '600 !important',
        color: '#fff !important',
      },
    },
    TableOfContents: {
      input: {
        borderColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: '4px',
        padding: '6px 8px',
        lineHeight: '24px',
        color: '#fff',
        boxSizing: 'border-box',
        backgroundColor: 'transparent',
        '&::-webkit-input-placeholder': {
          opacity: 1,
          color: 'rgba(255, 255, 255, 0.7)',
        },
        '&::placeholder': {
          opacity: 1,
          color: 'rgba(255, 255, 255, 0.7)',
        },
        '&:focus': {
          borderColor: '#fff !important',
          '&::-webkit-input-placeholder': {
            color: 'rgba(255, 255, 255, 0.9)',
          },
          '&::placeholder': {
            color: 'rgba(255, 255, 255, 0.9)',
          },
        },
      },
    },
  },
}
