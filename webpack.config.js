
const webpack = require('webpack');
var args = require('optimist').argv;
require( "console-stamp" )( console, { pattern : "dd/mm/yyyy HH:MM:ss.l" } )

env = args.env || "dev";
console.log(`env: ${env}`);
var buildConfig = require("./build-config.json");

var plugins = [];

if (env === "prod") {
    plugins = [
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ];
}

module.exports = {
    devtool: 'source-map',
    entry: ["babel-polyfill",
        "./src/app/index.js"],
    output: {
        path: "build/www/",
        filename: "app.js"
    },
    devServer:{
        contentBase: "./build",
        port:8084,
        host: "0.0.0.0"

    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    plugins: plugins,
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loader: 'string-replace',
                query: {
                    multiple: [
                        { search: '@@urlEndpointTodoDefault', replace: buildConfig.urlEndpointTodoDefault },
                        { search: '@@ApiKey', replace: buildConfig.ApiKey }
                    ]
                }
            },
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                include: [
                    /src.app/
                ]
            }
        ],
        loaders: [
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png)$/,
                loader: 'file-loader?name=assets/[name].[ext]'
            },
            {
                test: /\.(ico)$/,
                loader: 'file-loader?name=/[name].[ext]'
            },
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: [
                    /src/
                ],
                query: {
                    babelrc: false,
                    cacheDirectory: true,
                    presets: ["es2015", "react"],
                    plugins: ["transform-object-rest-spread"]
                }
            }
        ]
    }
};