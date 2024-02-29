const path = require("path")
module.exports = {
    mode: "production",
    entry : {
        server : "./custom/server.ts",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.node$/,
                loader: "node-loader",
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename : '[name]_bundle.js'
    },
    target: ["node"]
}