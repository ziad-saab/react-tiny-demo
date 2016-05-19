module.exports = {
    entry: './js/app.js',
    output: {
        filename: './js/app-webpack.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'sourcemap'
};