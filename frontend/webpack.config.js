/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

//dotenv 사용을 위한 설정
dotenv.config();

module.exports = (env) => {
    const mode = env.mode || 'development';

    return {
        mode: mode,

        entry: './src/index',

        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: ['ts-loader'],
                    exclude: ['/node_modules/'],
                },

                {
                    test: /\.(png|jpg|gif)$/,
                    use: 'file-loader',
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },

        optimization: {
            minimizer:
                mode === 'production'
                    ? [
                          new TerserPlugin({
                              terserOptions: {
                                  compress: {
                                      drop_console: true,
                                  },
                              },
                          }),
                      ]
                    : [],
        },

        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].bundle.js',
            publicPath: '/',
        },

        devServer: {
            static: path.join(__dirname, 'build'),
            port: 80,
            historyApiFallback: true,

            proxy: {
                '/**/*.do': {
                    target: 'http://localhost:8090',
                    changeOrigin: true,
                },
            },
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: `./public/index.html`,
            }),

            new webpack.DefinePlugin({
                'process.env': JSON.stringify(process.env),
            }),
        ],
    };
};
