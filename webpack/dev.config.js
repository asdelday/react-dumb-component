import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import config, { postcss, COMMON_CSS } from './config';
import merge from 'webpack-merge';

const common = {
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

export const start = merge(common, {
  entry: config.paths.dev,
  plugins: [
    new HtmlWebpackPlugin({
      template: config.paths.devTemplate,
      title: `${config.pkg.name} - ${config.pkg.description}`,
    }),
  ],
});

export const test = merge(common, {
  externals: {
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
});
