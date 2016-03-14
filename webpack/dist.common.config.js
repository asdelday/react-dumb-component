import config, { postcss, COMMON_CSS, externals } from './config';

export default {
  devtool: 'source-map',
  output: {
    path: config.paths.dist,
    libraryTarget: 'umd',
    library: config.library,
  },
  entry: config.paths.src,
  externals,
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
