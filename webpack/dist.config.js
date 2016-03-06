import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import config, { postcss, COMMON_CSS } from './config';
import merge from 'webpack-merge';

const common = {
  devtool: 'source-map',
  output: {
    path: config.paths.dist,
    libraryTarget: 'umd',
    library: config.library,
  },
  entry: config.paths.src,
  externals: {
    react: { commonjs: 'react', commonjs2: 'react', amd: 'React', root: 'React' },
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss'],
        include: [config.paths.src, ...COMMON_CSS],
      },
      { test: /\.jsx?$/, loaders: ['babel'], include: config.paths.src },
    ],
  },
  postcss,
};

export const normal = merge(common, {
  output: {
    filename: `${config.filename}.js`,
  },
});

export const minified = merge(common, {
  output: {
    filename: `${config.filename}.min.js`,
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
  ],
});
