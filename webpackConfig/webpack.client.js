const path = require("path");
const { merge } = require("webpack-merge");
const sharedWebpackConfig = require("./webpack.shared");
const moduleFederationPlugin = require("./module-federation");

module.exports = merge(sharedWebpackConfig, {
    entry: {
        main: [
            "@babel/polyfill",
            path.resolve(__dirname, "../src/client"),
        ],
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, "../dist/client"),
        publicPath: "http://localhost:3002/client/",
    },

    plugins: [
        moduleFederationPlugin.client,
        // new HtmlWebPackPlugin({
        //     template: "./src/index.html",
        // }),
    ],
});