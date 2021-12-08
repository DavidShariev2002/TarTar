const path = require('path');
const _path = (link) => path.join(__dirname, link);
const webpack = require('webpack');

const HtmlWEbpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const src = {
    src: _path('src'),
    pages: _path('src/pug/pages/'),
    scripts: _path('src/scripts/'),
    styles: _path('src/styles/'),
    images: _path('src/assets/images'),
}
const dist = {
    src: _path('dist'),
    pages: _path('dist/pages')
}

const isDev = process.env.NODE_ENV === 'development' ? true : false;

module.exports = {
    mode: 'development',
    context: src.src,
    
    entry: {
        main: src.scripts+"/main.js",
        
    },
    output: {
        filename: isDev ? 'scripts/[name].js' : 'scripts/[name].[contenthash].js',
        path: dist.dist,
        assetModuleFilename: '[path][name][ext]',
        clean: true
    },
    devServer: {
        port: 3000,
        open: true,
    },

    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },
            {
                test: /\.png|jpg|svg/,
                type: 'asset/resource',

            },
            {
                test: /\.(jpg|png|svg|ttf|woff|eot)$/,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",

                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [src.styles + './_vars.scss']
                        }
                    }
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: [

                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    },
                    {
                        loader: 'source-map-loader',
                    },
                ],
            },
            {
                test: /\.pug$/,
                exclude: /(node_modules)/,
                use: [
                    `pug-loader?pretty=${isDev}`
                ]
            },
        ]
    },

    resolve: {
        alias: {
            'jquery': _path('node_modules/jquery/dist/jquery'),
        }
    },
    
    plugins: [
        new HtmlWEbpackPlugin({
            template: src.pages + "mainpage/mainpage.pug",
            filename: "./index.html",
            title: "TarTar",
            chunks: ['main', 'components'],
            minify: !isDev,
        })
    ],

    
}