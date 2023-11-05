module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@context': './src/context',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@utils': './src/utils',
          '@helpers': './src/helpers',
          '@translations': './src/translations',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
