const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
// eslint-disable-next-line no-unused-vars
module.exports = (_, argv) => ({
    output: {
        publicPath: argv.mode == "development" ?
            "http://localhost:3003/":
            "http://localhost:3003/",
    },

    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
        port: 3003,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "emp_home",
            filename: "remoteEntry.js",
            remotes: {
                emp_address: argv.mode == "development" ? 
                    "emp_address@http://localhost:3007/remoteEntry.js": 
                    "emp_address@http://localhost:3007/remoteEntry.js",
                emp_employee: argv.mode == "development" ?
                    "emp_employee@http://localhost:3006/remoteEntry.js":
                    "emp_employee@http://localhost:3006/remoteEntry.js"
                ,
            },
            exposes: {
                "./Home": "./src/App.jsx",
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
                "react-redux": {
                    singleton: true,
                    requiredVersion: deps["react-redux"],
                },
                "@reduxjs/toolkit": {
                    singleton: true,
                    requiredVersion: deps["@reduxjs/toolkit"],
                }
            },
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        }),
    ],
});
