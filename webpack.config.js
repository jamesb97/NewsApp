const HTMLWebPackPugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            { test: /\.txt$/, use: 'babel-loader' }
        ]
    },
    plugins: [
        new HTMLWebPackPugin({ template: './public/index.html'})
    ],
    mode: 'production'
};