module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier/react', // prettier react 配置
    'prettier/@typescript-eslint', // 对eslint的支持
    'prettier',
  ],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'js', // 项目文件目录
        rootPathPrefix: '~', // 匹配所有
      },
    },
  },
};
