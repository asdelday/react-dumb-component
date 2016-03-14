import webpack from 'webpack';
import config, { postcss, COMMON_CSS } from './config';

export default {
  devtool: 'eval-source-map',
  resolve: { extensions: ['', '.js', '.jsx', '.css', '.png', '.jpg'] },
  module: {
    preLoaders: [{ test: /\.jsx?$/, loaders: ['eslint'], include: config.paths.src }],
    loaders: [
      { test: /\.json$/, loader: 'json', include: config.paths.packageJson },
      { test: /\.png$/, loader: 'url?limit=100000&mimetype=image/png', include: config.paths.src },
      { test: /\.jpg$/, loader: 'file', include: config.paths.src },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss'],
        include: [config.paths.src, ...COMMON_CSS],
      },
      { test: /\.jsx?$/, loaders: ['babel?cacheDirectory'], include: config.paths.src },
    ],
  },
  postcss,
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    new webpack.HotModuleReplacementPlugin(),
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
