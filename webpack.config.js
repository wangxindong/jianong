// webpack.config.js
var webpack = require('webpack');
var path = require('path');
module.exports = {
  // 页面入后文件配置
  entry: './src/main.ts',
  // 输出配置项
  output: {
    // 打包输出的文件名称
    filename: './bundle.js'
  },
  // 解析模块路径时的配置
  resolve: {
    root: [path.join(__dirname, 'src')],
    extensions: ['', '.ts', '.js']
  },
  // 加载器配置
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  }
}
