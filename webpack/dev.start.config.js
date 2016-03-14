import HtmlWebpackPlugin from 'html-webpack-plugin';
import config from './config';
import merge from 'webpack-merge';
import common from './dev.common.config';

export default merge(common, {
  entry: config.paths.dev,
  plugins: [
    new HtmlWebpackPlugin({
      template: config.paths.devTemplate,
      title: `${config.pkg.name} - ${config.pkg.description}`,
    }),
  ],
});
