/**
 * gzip 配置
 */

const CompressionWebpackPlugin = require('compression-webpack-plugin');
const prodGzipList = ['js', 'css', 'json', 'text', 'html', 'ico', 'svg'];

export const chainWebpack: any = (config: any) => {
  if (process.env.NODE_ENV === 'production') {
    // 生产模式开启
    config.plugin('compression-webpack-plugin').use(
      new CompressionWebpackPlugin({
        // filename: 文件名称，这里我们不设置，让它保持和未压缩的文件同一个名称
        // 指定生成gzip格式
        algorithm: 'gzip',
        // 匹配哪些格式文件需要压缩
        test: new RegExp('\\.(' + prodGzipList.join('|') + ')$'),
        //对超过10k的数据进行压缩
        threshold: 10240,
        // 压缩比例，值为0 ~ 1
        minRatio: 0.8,
      }),
    );
  }
};
