const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);
const BASE_URL = process.env.NODE_ENV === 'production' ? '/Demo' : '/';
const CompressionWebpackPlugin = require('compression-webpack-plugin');
module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.name('香辣脆小浣熊');
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('api', resolve('src/api'));
  },
  productionSourceMap: false,
  devServer: {
    port: 4399
    // proxy: 'http://192.168.31.32:8080'
  },
  //  开启压缩
  configureWebpack: config => {
    let plugins = [
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(' +
          ['js', 'css'].join('|') +
          ')$'
        ),
        threshold: 1024,
        minRatio: 0.8
      })
      // new BundleAnalyzerPlugin()
    ];
    if (process.env.NODE_ENV !== 'development') {
      config.plugins = [...config.plugins, ...plugins];
    }
  }
};
