module.exports = {
    
    mode: 'development',

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
    }
}