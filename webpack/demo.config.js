import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import config, { postcss, COMMON_CSS } from './config';

export default {
  devtool: 'eval-source-map',
  resolve: { extensions: ['', '.js', '.jsx', '.css', '.png', '.jpg'] },
  entry: config.paths.demo,
  module: {
    preLoaders: [
      { test: /\.jsx?$/, loaders: ['eslint'], include: config.paths.demo },
    ],
    loaders: [
      { test: /\.json$/, loader: 'json', include: config.paths.packageJson },
      { test: /\.png$/, loader: 'url?limit=100000&mimetype=image/png', include: config.paths.demo },
      { test: /\.jpg$/, loader: 'file', include: config.paths.demo },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss'],
        include: [config.paths.src, config.paths.demo, ...COMMON_CSS],
      },
      { test: /\.jsx?$/, loaders: ['babel?cacheDirectory'], include: [config.paths.demo] },
    ],
  },
  postcss,
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: config.paths.demoTemplate,
      title: `${config.pkg.name} - ${config.pkg.description}`,
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    host: process.env.HOST,
    port: process.env.PORT,
    stats: 'errors-only',
  },
};
