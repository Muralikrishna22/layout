require("@babel/polyfill");
require("@babel/register")({
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
        [
            "css-modules-transform",
            {
                extractCss: {
                    dir: "./dist",
                    relativeRoot: "./src/",
                    filename: "[path]/[name].css",
                },
                camelCase: true,
                extensions: [".css", ".scss"],
            },
        ],
        "dynamic-import-node",
        "@loadable/babel-plugin",
    ],
});
require("./src/server/index.js");