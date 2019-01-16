const webpack = require('webpack');

module.exports = {
    entry: "./src/entry",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({
            __FOO__: JSON.stringify('foo'),
            __BAR__: JSON.stringify('bar')
        })
    ],
}
