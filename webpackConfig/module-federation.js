const deps = require("../package.json").dependencies;
const { ModuleFederationPlugin } = require("webpack").container;
const { NodeFederationPlugin, StreamingTargetPlugin } = require("@module-federation/node");

module.exports = {
    client: new ModuleFederationPlugin({
        name: "layout",
        filename: "remoteEntry.js",
        remotes: {},
        exposes: {
            './layout': './src/client/index'
        },
        shared: {
            ...deps,
            react: {
                singleton: true,
                requiredVersion: deps.react,
            },
            "react-dom": {
                singleton: true,
                requiredVersion: deps["react-dom"],
            },
        },
    }),
    server: [
        new NodeFederationPlugin({
            name: "layout",
            filename: "remoteEntry.js",
            library: { type: "commonjs-module" },
            remotes: {},
            exposes: {
                './layout': './src/server/index'
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                },
            },
        }),
        new StreamingTargetPlugin({
            name: "layout",
            library: { type: "commonjs-module" },
            remotes: {},

        }),
    ]
}