module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier/react',
    'prettier/@typescript-eslint',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'js',
        rootPathPrefix: '~',
      },
    },
  },
};
