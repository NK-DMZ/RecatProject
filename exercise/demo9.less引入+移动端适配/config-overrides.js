const { override, fixBabelImports, addPostcssPlugins, addLessLoader } = require('customize-cra');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addLessLoader({
      lessOptions: {
        modifyVars: { '@primary-color': '#1DA57A' },
        javascriptEnabled: true,
      },
  }),
  addPostcssPlugins(
      [
          require("postcss-px2rem")({remUnit:375/10})
      ]
  )
);