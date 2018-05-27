const path = require("path")
const webpack = require('webpack')

module.exports = (env = {}) => ({
    devtool: "source-map",
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "umd",
        library: "app"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        compress: true,
        port: 1600,
        stats: "errors-only",
        open: true
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                include: path.resolve(__dirname, '../'),
                exclude: /node_modules/,
                query: {
                    presets: [
                        [ 'es2015', { modules: false } ],
                        'react', 
                        'stage-0',
                        'stage-1'
                    ],
                    plugins: [
                    ]
                }
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV || "development")
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
})