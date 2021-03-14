const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {

    entry: './src/index.js',
    
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack 5',
            filename: 'index.html'
        })
    ],
    
    mode: mode,

    plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    // without additional settings, this will refer to .babelrc
                    loader: 'babel-loader'
                }
            }
        ]
    },

    devtool: 'source-map',

    devServer: {
        contentBase: './dist'
    }
}