const webpack = require('webpack');

module.exports = {
    entry: "./src/entry",
    target: 'web',
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: '/'
    },
    resolve: {
      extensions: ['.js']
    },
    plugins: [
      new webpack.DefinePlugin({
        __FILE_FORMAT__: JSON.stringify('.json'),
        __SUBDIR__: JSON.stringify('bar')
      })
    ],
    module: {
      rules: [
        {
          test: /\.(txt|json)(\?.*$|$)/,
          use:{
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]'
            }
          }
        }
      ]
  }
}
