module.exports = {
    entry: './js/app.js',
    output: {
        filename: './js/app-webpack.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel']
            }
        ]
    },
    devtool: 'sourcemap'
};