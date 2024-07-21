const path = require('path')
const HtmlWP = require('html-webpack-plugin')
const MiniCssEP = require('mini-css-extract-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.js'],

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
        publicPath: '/'
    },

    plugins: [
        new HtmlWP({template: './index.html'}),
        new MiniCssEP({filename: '[name].css'})
    ],

    resolve: {
        alias:{
            '@card': path.resolve(__dirname, 'src/components/card'),
            '@static': path.resolve(__dirname, 'src/static'),
        },
        extensions: ['...', '.jsx']
    },

    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    MiniCssEP.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                              localIdentName: "[name].[local].[hash:base64:5]",
                            },
                            importLoaders: true
                        },
                    }

                ],
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            }
        ]
    },

    devServer:{
        port: 8080,
        hot: 'only',
        static: {
            directory: path.join(__dirname, './'),
            serveIndex: true,
        },
        historyApiFallback: true,
    },
}