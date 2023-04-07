// const HotHashWebpackPlugin = require('hot-hash-webpack-plugin');
// const WebpackBar = require('webpackbar');
let path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
/**
 * https://cli.vuejs.org/zh/config/
 */
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  filenameHashing: true, //生成的静态资源包括hash，便于缓存；要求index.html是vue-cli自动生成的
  //配置别名
  chainWebpack(config) {
    config.resolve.alias
      .set('@', resolve("src"))
    config.module.rule('images').use('url-loader')
      .tap(options => ({
        name: './assets/images/[name].[ext]',
        quality: 85,
        limit: 0,
        esModule: false,
      }));
    if (process.env.NODE_ENV === 'production') {
      // config.output.filename('./js/[name].[chunkhash:8].js');
      // config.output.chunkFilename('./js/[name].[chunkhash:8].js');
      // // 修改打包时css抽离后的filename及抽离所属目录
      // config.plugin('extract-css').tap(args => [{
      //   filename: 'css/[name].[contenthash:8].css',
      //   chunkFilename: 'css/[name].[contenthash:8].css'
      // }]);
      // config.plugin('hotHash').use(HotHashWebpackPlugin, [{ version: '1.0.0' }]);
      // config.plugin('webpackBar').use(WebpackBar);

      // // 正式环境下，删除console和debugger
      // config.optimization.minimize(true)
      //   .minimizer('terser')
      //   .tap(args => {
      //     let { terserOptions } = args[0];
      //     terserOptions.compress.drop_console = true;
      //     terserOptions.compress.drop_debugger = true;
      //     return args
      //   });
      // config.optimization.splitChunks({
      //   cacheGroups: {
      //     common: {
      //       name: 'common',
      //       chunks: 'all',
      //       minSize: 1,
      //       minChunks: 2,
      //       priority: 1
      //     },
      //     vendor: {
      //       name: 'chunk-libs',
      //       chunks: 'all',
      //       test: /[\\/]node_modules[\\/]/,
      //       priority: 10
      //     }
      //   }
      // });
    }

  },
  //传递第三方插件
  pluginOptions: {},
  devServer: {
    proxy: {
      '/v2': {
        //要访问的跨域的域名
        target: 'https://www.dongguanyitong.com',
        changOrigin: true,
      }
    },
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  lintOnSave: false
};
