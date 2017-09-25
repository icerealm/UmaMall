const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const VENDOR_LIBS = [
    'axios', 'lodash', 'promise', 'redux', 'react-redux', 'react-dom', 
    'redux-saga', 'react-router-dom', 'redux-form', 'numeral'
];

const config = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        host: '0.0.0.0',
        port: '3032',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader',
                },
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader','sass-loader']
                }),
                test: /\.(css|scss)$/
            },
            {
                use: [
                    {
                        loader: 'url-loader',
                        options: {limit: 8196}
                    },
                    'image-webpack-loader'
                ],
                test: /\.(jpe?g|png|gif|svg)$/,
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new ExtractTextPlugin('[name].[contenthash].css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};

module.exports = config;