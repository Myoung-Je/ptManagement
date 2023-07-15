import { resolve as _resolve, join } from 'path';

import { config } from 'dotenv';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { DefinePlugin } from 'webpack';

config();

export default (env) => {
    const mode = env.mode || 'development';

    return {
        mode: mode,

        entry: './src/index',

        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                '@': _resolve(__dirname, 'src'),
            },
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: ['ts-loader'],
                    exclude: ['/node_modules/'],
                },
                // extension
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use: 'file-loader',
                },
                // css
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

        // build
        output: {
            path: _resolve(__dirname, 'build'),
            filename: '[name].bundle.js',
            publicPath: '/',
        },

        // server
        devServer: {
            static: join(__dirname, 'build'),
            port: 80,
            historyApiFallback: true,
            //proxy 설정하기
            proxy: {
                '/**/*.do': {
                    target: 'http://localhost:8080',
                    changeOrigin: true,
                },
            },
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: `./public/index.html`,
            }),

            new DefinePlugin({
                'process.env': JSON.stringify(process.env),
            }),
        ],
    };
};
