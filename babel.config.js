module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/preset-typescript"];
  const plugins = [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-import-meta',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.json'],
        alias: {
          '@utils': `./src/utils`,
        }
      }
    ]
  ]

  return {
    presets,
    plugins
  };
}