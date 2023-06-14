const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({ title: 'Development', template: 'index.html' })],
    module: {
        rules: [
            {
                test: /jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                },
            },
            {
                test: /scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
            publicPath: '/localhost:8080'
        },
        proxy: {
            '/api': 'localhost::3000'
        }
    }
}