const client = require("./webpackConfig/webpack.client");
const server = require("./webpackConfig/webpack.server");

module.exports = [client, server];

// const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//     entry: {
//         main: [
//             "@babel/polyfill",
//             path.resolve(__dirname, "./src/client/index.js"),
//         ],
//     },
//     mode: 'development',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist'),
//     },
//     plugins: [new MiniCssExtractPlugin({
//         filename: 'styles.css',
//     })],
//     // create chunks for css
//     // optimization: {
//     //     splitChunks: {
//     //         cacheGroups: {
//     //             styles: {
//     //                 name: 'styles',
//     //                 test: /\.css$/,
//     //                 chunks: 'all',
//     //                 enforce: true,
//     //             },
//     //         },
//     //     },
//     // },

//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-react', '@babel/preset-env'],
//                     },
//                 },
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                     {
//                         loader: MiniCssExtractPlugin.loader,
//                     },
//                     'css-loader'
//                 ],
//             },
//         ],
//     },
// };


