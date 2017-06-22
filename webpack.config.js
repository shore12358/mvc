let path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/index'),
    output: {
        path: path.join(__dirname, '/dest'),
        filename: 'bundle.js'
    },
    module  : {
        rules: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']

            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,

                // 使用多个loader
                use: [{
                    loader: 'babel-loader',
                    options: {

                        // "amd" | "umd" | "systemjs" | "commonjs" | false, defaults to "commonjs"
                        // Enable transformation of ES6 module syntax to another module type.

                        // presets: 一系列plugins
                        presets: ['es2015']
                    }
                }]
            }
        ]
    },
    devtool: 'source-map'
};