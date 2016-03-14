import merge from 'webpack-merge';
import config from './config';
import common from './dist.common.config';

export default merge(common, {
  output: {
    filename: `${config.filename}.js`,
  },
});
