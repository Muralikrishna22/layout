const path = require("path");
const { merge } = require("webpack-merge");
const sharedWebpackConfig = require("./webpack.shared");
// const moduleFederationPlugin = require("./module-federation");

module.exports = merge(sharedWebpackConfig, {
    output: {
        path: path.resolve(__dirname, "../dist/server"),
        filename: "[name].js",
        libraryTarget: "commonjs-module",
    },
    target: 'node',
    name: "server",
    entry: {
        main: [
            "@babel/polyfill",
            path.resolve(__dirname, "../src/server"),
        ],
    },
    // plugins: [
    //     ...moduleFederationPlugin.server
    // ],
});