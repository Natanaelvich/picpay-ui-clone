module.exports = function BabelConfig(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [['babel-plugin-root-import', { rootPathSuffix: 'src' }]],
  };
};
