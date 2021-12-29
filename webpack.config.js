const path = require('path');
const _path = (link) => path.join(__dirname, link);
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        mainpage: src.pages+"/mainpage/mainpage.js",
        packages: src.pages+"/packages/packages.js",
        contact: src.pages+"/contact/contact.js",
        blog: src.pages+"/blog/blog.js",
        case: src.pages+"/case/case.js"
        
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
            'slick-carousel': _path('/node_modules/slick-carousel/slick/slick.min.js'),
            'slick-carouse-styles': _path('/node_modules/slick-carousel/slick/slick-theme.scss'),
        }
    },
    
    plugins: [
        
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',

        }),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, "src/assets/img/"), to: "assets/img/" },
            ],
        }),
        new HtmlWebpackPlugin({
            template: src.pages + '/mainpage/mainpage.pug',
            filename: './index.html',
            title: 'TarTar',
            chunks: ['main', 'mainpage'],
            minify: !isDev

        }),
        new HtmlWebpackPlugin({
            template: src.pages + '/packages/packages.pug',
            filename: './pages/packages.html',
            title: 'TarTar Packages',
            chunks: ['main', 'packages'],
            minify: !isDev

        }),
        new HtmlWebpackPlugin({
            template: src.pages + '/contact/contact.pug',
            filename: './pages/contact.html',
            title: 'TarTar Contact',
            chunks: ['main', 'contact'],
            minify: !isDev

        }),
        new HtmlWebpackPlugin({
            template: src.pages + '/blog/blog.pug',
            filename: './pages/blog.html',
            title: 'TarTar Our Blog',
            chunks: ['main', 'blog'],
            minify: !isDev

        }),
        new HtmlWebpackPlugin({
            template: src.pages + '/case/case.pug',
            filename: './pages/blog_1.html',
            title: 'TarTar Our Blog',
            chunks: ['main', 'case'],
            minify: !isDev

        }),

        

    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    },
    
}