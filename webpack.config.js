const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === 'development';
  return {
    entry: './src/js/app.js',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'docs/js')
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              [ 'env', { modules: false } ]
            ]
          }
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    devtool: IS_DEVELOPMENT ? 'source-map' : 'none',
    optimization: {
      minimizer: IS_DEVELOPMENT ? [] : [
        new UglifyJSPlugin({
          uglifyOptions: {
            compress: { drop_console: true }
          }
        })
      ]
    },
  }
};
