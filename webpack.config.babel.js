import * as path from 'path';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';
import pkg from './package.json';

const TARGET = process.env.npm_lifecycle_event;
const ROOT_PATH = __dirname;
const config = {
  paths: {
    dist: path.join(ROOT_PATH, 'dist'),
    src: path.join(ROOT_PATH, 'src'),
    demo: path.join(ROOT_PATH, 'demo'),
    dev: path.join(ROOT_PATH, 'src/app.js'),
  },
  filename: pkg.name,
  library: 'DumbComponent',
};

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3', 'Android >= 4', 'Chrome >= 35', 'Firefox >= 31', 'Explorer >= 9',
  'iOS >= 7', 'Opera >= 12', 'Safari >= 7.1',
];

function postcss(wpk) {
  return [
    require('postcss-import')({ addDependencyTo: wpk }),
    require('precss')(),
    require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS }),
    require('postcss-discard-comments')(),
    require('cssnano')(),
  ];
}

const COMMON_CSS = [];

process.env.BABEL_ENV = TARGET;


/* COMPONENT DEMO
 * ---------------------------------------------------------------------------------------------- */
const demoCommon = {
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.png', '.jpg'],
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json', include: path.join(ROOT_PATH, 'package.json') },
    ],
  },
  postcss,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new HtmlWebpackPlugin({
      title: pkg.name + ' - ' + pkg.description,
    }),
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


if (TARGET === 'start' || !TARGET) {
  module.exports = merge(demoCommon, {
    entry: config.paths.dev,
    module: {
      preLoaders: [
        { test: /\.jsx?$/, loaders: ['eslint'], include: config.paths.src },
      ],
      loaders: [
        {
          test: /\.png$/,
          loader: 'url?limit=100000&mimetype=image/png',
          include: config.paths.src,
        },
        { test: /\.jpg$/, loader: 'file', include: config.paths.src },
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'postcss'],
          include: [config.paths.src, ...COMMON_CSS],
        },
        { test: /\.jsx?$/, loaders: ['babel?cacheDirectory'], include: config.paths.src },
      ],
    },
  });
}


if (TARGET === 'demo') {
  module.exports = merge(demoCommon, {
    entry: config.paths.demo,
    module: {
      preLoaders: [
        { test: /\.jsx?$/, loaders: ['eslint'], include: config.paths.demo },
      ],
      loaders: [
        {
          test: /\.png$/,
          loader: 'url?limit=100000&mimetype=image/png',
          include: config.paths.demo,
        },
        { test: /\.jpg$/, loader: 'file', include: config.paths.demo },
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'postcss'],
          include: [config.paths.demo, ...COMMON_CSS],
        },
        { test: /\.jsx?$/, loaders: ['babel?cacheDirectory'], include: [config.paths.demo] },
      ],
    },
  });
}


/* COMPONENT DIST
 * ---------------------------------------------------------------------------------------------- */
const distCommon = {
  devtool: 'source-map',
  output: {
    path: config.paths.dist,
    libraryTarget: 'umd',
    library: config.library,
  },
  entry: config.paths.src,
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
  },
  module: {
    loaders: [
      { test: /\.scss?$/, loaders: ['style', 'css', 'postcss'], include: config.paths.src },
      { test: /\.jsx?$/, loaders: ['babel'], include: config.paths.src },
    ],
  },
  postcss,
};

if (TARGET === 'dist') {
  module.exports = merge(distCommon, {
    output: {
      filename: config.filename + '.js',
    },
  });
}

if (TARGET === 'dist:min') {
  module.exports = merge(distCommon, {
    output: {
      filename: config.filename + '.min.js',
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
      }),
    ],
  });
}
