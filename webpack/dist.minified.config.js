import webpack from 'webpack';
import config from './config';
import merge from 'webpack-merge';
import common from './dist.common.config';

export default merge(common, {
  output: {
    filename: `${config.filename}.min.js`,
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
  ],
});

